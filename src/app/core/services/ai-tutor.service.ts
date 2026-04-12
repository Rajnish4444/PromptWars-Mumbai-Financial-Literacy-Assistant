import { Injectable, signal } from '@angular/core';
import { ChatMessage, AiResponse } from '../models/ai.model';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiTutorService {
  private history = signal<ChatMessage[]>([]);
  public isTyping = signal<boolean>(false);
  private genAI: GoogleGenerativeAI | null = null;
  private model: GenerativeModel | null = null;

  // Expose deep copy of history
  public get chatHistory() {
    return this.history;
  }

  constructor() {
    // Initialize Google Generative AI natively if Key is populated
    if (environment.geminiApiKey && environment.geminiApiKey !== 'Temp_gemini_key') {
      this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
      this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    }
  }

  public clearChat() {
    this.history.set([]);
  }

  /**
   * Routes the prompt to Google Gemini if configured, otherwise falls back to a mock handler.
   */
  public async sendMessage(content: string): Promise<void> {
    const userMsg: ChatMessage = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    this.history.update(curr => [...curr, userMsg]);
    this.isTyping.set(true);

    try {
      let responseContent = "";
      if (this.model) {
        // NATIVE GOOGLE AI CALL
        const systemPrompt = "You are a friendly, encouraging financial literacy tutor aiming to help young people. Keep answers short, clear, and specifically DO NOT offer exact financial 'buy/sell' advice.";
        const fullPrompt = `${systemPrompt}\nUser Question: ${content}`;
        const result = await this.model.generateContent(fullPrompt);
        const response = await result.response;
        responseContent = response.text();
      } else {
        // FALLBACK MOCK
        const res = await this.mockVertexCall(content);
        responseContent = res.content;
      }

      const aiMsg: ChatMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };

      this.history.update(curr => [...curr, aiMsg]);
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'AI processing failed. Please try again later.';
      // Create a local system fault message
      const errorMsg: ChatMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
        role: 'system',
        content: errorMessage,
        timestamp: new Date()
      };
      this.history.update(curr => [...curr, errorMsg]);
    } finally {
      this.isTyping.set(false);
    }
  }

  /**
   * Mock implementation of Vertex AI generation mapping prompts to safe answers.
   */
  private mockVertexCall(userString: string): Promise<AiResponse> {
    const raw = userString.toLowerCase();

    return new Promise((resolve, reject) => {
      // Simulate real processing latency
      setTimeout(() => {
        // Enforce Boundary 2: No personal advice
        if (raw.includes('should i buy') || raw.includes('recommend a stock') || raw.includes('personal advice')) {
          resolve({
            content: "I cannot provide specific financial advice or tell you what stocks to buy. As an educational tutor, I'm here to help you understand the concepts so you can formulate your own decisions safely!",
            isError: false
          });
          return;
        }

        // Exact match scenario parsing
        if (raw.includes('compound interest')) {
          resolve({
            content: "Imagine rolling a snowball down a hill. Compound interest is when the interest you've earned starts earning its own interest! It makes your money grow much faster over time compared to simple savings.",
            isError: false
          });
          return;
        }

        if (raw.includes('saving and investing') || raw.includes('saving vs investing') || (raw.includes('difference') && raw.includes('saving'))) {
          resolve({
            content: "**Saving** is storing money safely for short-term goals or emergencies. It's safe, but doesn't grow fast.\n\n**Investing** is putting your money into assets (like index funds) hoping it grows long-term. It involves risk, but mathematically offers much higher potential returns.",
            isError: false
          });
          return;
        }

        if (raw.includes('inflation')) {
          resolve({
            content: "Inflation is the gradual increase in prices over time. If a vada pav costs ₹15 today, it might cost ₹25 in a few years. Because prices go up, the cash you hide under your mattress slowly loses its 'buying power'.",
            isError: false
          });
          return;
        }

        if (raw.includes('quiz') && raw.includes('budget')) {
          resolve({
            content: "Sure! Let's test your budget knowledge:\n\n1. What does the '50' mean in the 50/30/20 rule?\n2. True or False: Eating at a restaurant every day applies to your 'Needs' category.\n\n*Think you know? Let me know your answers!*",
            isError: false
          });
          return;
        }

        // Generic fallback for unmapped questions
        resolve({
          content: "That's an interesting question! (Psst. I'm currently running in Fallback mode. Add your Gemini API key to environment.ts to unlock my full brain!)",
          isError: false
        });
      }, 1500);
    });
  }
}
