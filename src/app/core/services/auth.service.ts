import { Injectable, inject } from '@angular/core';
import { Auth, signInAnonymously, GoogleAuthProvider, linkWithPopup, signInWithPopup, authState, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);

  // Observable indicating auth state changes
  public readonly user$: Observable<User | null> = authState(this.auth);

  constructor() {
    // Attempt anonymous sign-in passively if no user exists so databases function immediately
    this.user$.subscribe(user => {
      if (!user) {
        signInAnonymously(this.auth).catch(err => {
          console.error("Firebase Anonymous Auth Failed. Ensure emulator is running or project is configured natively.", err);
        });
      }
    });
  }

  get currentUserId(): string | null {
    return this.auth.currentUser?.uid || null;
  }

  /**
   * Universal Login Handler. 
   * Attempts to merge a Google Account to the active session. If the user already has a saved account, logs them directly into it!
   */
  async upgradeToGoogleAccount(): Promise<void> {
    const provider = new GoogleAuthProvider();
    
    // If user is actively anonymous, try to link them
    if (this.auth.currentUser && this.auth.currentUser.isAnonymous) {
      try {
        await linkWithPopup(this.auth.currentUser, provider);
      } catch (error: unknown) {
        // If the email is already hooked to a previous Hackathon run, Firebase rejects linking
        // We gracefully catch this and just Sign Them In directly to their old account!
        const fbError = error as { code?: string };
        if (fbError.code === 'auth/credential-already-in-use' || fbError.code === 'auth/email-already-in-use') {
          await signInWithPopup(this.auth, provider);
        } else {
          console.error('Failed to link Google account', error);
          throw error;
        }
      }
    } else {
      // If they are completely logged out, sign them in directly
      await signInWithPopup(this.auth, provider);
    }
  }

  async signOut(): Promise<void> {
    await this.auth.signOut();
    // They will be automatically mapped to a fresh anonymous session by the constructor
  }
}
