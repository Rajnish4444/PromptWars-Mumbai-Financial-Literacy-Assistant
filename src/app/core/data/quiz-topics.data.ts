import { QuizTopic } from '../models/quiz.model';

export const QUIZ_TOPICS: QuizTopic[] = [
  {
    id: 'savings-goal',
    title: 'Saving Toward a Goal',
    icon: 'savings',
    description: 'Learn how to strategically plan and hit short-term savings targets.',
    questions: [
      {
        id: 'sg-q1',
        scenario: 'You want to buy a new $400 phone in 4 months. What is the most reliable way to ensure you save enough money?',
        options: [
          'Wait until the end of each month and save whatever is left in your checking account.',
          'Set up an automatic transfer of $100 to a separate savings account on payday each month.',
          'Try to skip eating out completely for the next 4 months.',
          'Put it on a credit card and figure out how to pay it off later.'
        ],
        correctOptionIndex: 1,
        successFeedback: 'Exactly! Paying yourself first by automating savings is the most reliable method because you save the money before you have a chance to spend it.',
        failureFeedback: 'Not quite. Relying on "whatever is left" usually results in nothing being left. Automation guarantees progress.'
      },
      {
        id: 'sg-q2',
        scenario: 'You finally saved the $400, but your car tire suddenly pops and costs $200 to fix. You don\'t have an emergency fund. What should you do?',
        options: [
          'Fix the tire using half of your phone money, delay buying the phone, and start an emergency fund next.',
          'Buy the phone and put the tire repair on a high-interest credit card.',
          'Ignore the tire and keep driving on a flat to protect your phone fund.',
          'Borrow money from a payday loan service to fix the tire.'
        ],
        correctOptionIndex: 0,
        successFeedback: 'Correct. Needs (transportation/safety) always outweigh wants (a new phone). This scenario highlights why an emergency fund should be built before funding wants!',
        failureFeedback: 'Going into debt for an emergency when you have cash available—even if it was meant for a fun goal—is a very costly mistake.'
      }
    ]
  },
  {
    id: 'needs-vs-wants',
    title: 'Needs vs Wants',
    icon: 'shopping_cart',
    description: 'Master the core principle behind the 50/30/20 budget.',
    questions: [
      {
        id: 'nw-q1',
        scenario: 'You are reviewing your monthly expenses. Which of the following is considered a "need"?',
        options: [
          'A monthly subscription to a premium streaming service.',
          'The newest smartphone upgrade.',
          'Your monthly electricity bill.',
          'Buying lunch at a restaurant every workday.'
        ],
        correctOptionIndex: 2,
        successFeedback: 'That’s right! Basic utilities like electricity are essential for survival and maintaining your home, making them a true need.',
        failureFeedback: 'Remember, a need is something required for survival (food, shelter, basic utilities, transportation to work). The rest are wants.'
      },
      {
        id: 'nw-q2',
        scenario: 'You have a $500/month budget for groceries (a need). You decide to buy premium organic steaks, bringing your bill to $700. How should you classify that extra $200?',
        options: [
          'It is still a need, since food is a need.',
          'The extra $200 is a want, because you chose a luxury option over basic nutrition.',
          'It is categorized as an emergency expense.',
          'It goes into savings.'
        ],
        correctOptionIndex: 1,
        successFeedback: 'Spot on! Choosing a luxury version of a basic need means the extra cost comes out of your "wants" budget category.',
        failureFeedback: 'While food is a need, premium luxury food crosses into "want" territory. A strict budget would pull that extra $200 from your fun money.'
      }
    ]
  },
  {
    id: 'inflation-time',
    title: 'Understanding Inflation',
    icon: 'trending_down',
    description: 'See how rising prices affect your hidden cash over time.',
    questions: [
      {
        id: 'inf-q1',
        scenario: 'You hide $5,000 cash in a safe. Over the next 10 years, inflation averages 3% per year. What happens to your money?',
        options: [
          'The safe ensures the money grows in value automatically.',
          'You still have $5,000, but it buys significantly fewer goods than it could 10 years ago.',
          'The government automatically taxes cash hidden in a safe.',
          'The value stays exactly the same, buying the exact same amount of goods.'
        ],
        correctOptionIndex: 1,
        successFeedback: 'Correct! The nominal amount remains $5,000, but its purchasing power has decayed significantly due to the cost of goods rising.',
        failureFeedback: 'Cash does not grow simply by hiding it, nor does it retain its buying power. Inflation silently decreases what that cash can buy.'
      }
    ]
  },
  {
    id: 'save-vs-invest',
    title: 'Saving vs Investing',
    icon: 'trending_up',
    description: 'Compare flat savings strategies with compound market growth.',
    questions: [
      {
        id: 'svi-q1',
        scenario: 'You want to build a retirement fund over 30 years. Which strategy gives you the highest mathematical probability of reaching $1,000,000?',
        options: [
          'Putting $500/month into a bank savings account with 0% interest.',
          'Investing $500/month into a diversified stock market index fund yielding roughly 7% annual interest.',
          'Waiting until you are 60 and then saving $5000/month.',
          'Buying lottery tickets each month.'
        ],
        correctOptionIndex: 1,
        successFeedback: 'Yes! Over 30 years, compound interest from diversified investing will mathematically eclipse flat saving methods drastically.',
        failureFeedback: 'A 0% savings account won\'t beat inflation, and waiting too long destroys your ability to use compound interest.'
      }
    ]
  }
];
