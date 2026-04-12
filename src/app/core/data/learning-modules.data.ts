import { LearningModule } from '../models/learning.model';

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Basics',
    icon: 'account_balance_wallet',
    shortDescription: 'Learn how to track your money and plan where it goes.',
    explanation: 'A budget is simply a plan for your money. It helps you decide in advance how much you want to spend on needs, wants, and savings, ensuring you don\'t run out of money before your next paycheck.',
    whyItMatters: 'Without a budget, it\'s easy to overspend on things that don\'t matter to you and miss out on saving for things that do. Budgeting puts you in control.',
    dailyLifeExample: 'Think of budgeting like packing a suitcase. You have limited space (your income). If you pack too many shoes (wants), you might not have room for your clothes (needs).',
    commonMistake: 'Trying to be too perfect. Many people think a budget means absolutely no fun money. A good budget actually plans for fun!',
    understandingCheck: {
      question: 'What is the main purpose of a budget?',
      options: [
        'To stop you from ever spending money',
        'To help you plan and control where your money goes',
        'To make you feel guilty about buying coffee',
        'To help banks track your purchases'
      ],
      correctOptionIndex: 1,
      explanation: 'A budget is a tool you use to give your money a purpose, ensuring you can cover needs while planning for wants and the future.'
    }
  },
  {
    id: 'saving-basics',
    title: 'Saving Basics',
    icon: 'savings',
    shortDescription: 'Understand why paying yourself first is the key to financial peace.',
    explanation: 'Saving means putting money aside today so you can use it later. "Paying yourself first" means moving a portion of your money into savings before you have a chance to spend it on other things.',
    whyItMatters: 'Saving protects you from bad surprises (like a broken phone) and helps you afford good surprises (like a vacation) without going into debt.',
    dailyLifeExample: 'If you want to buy a new $500 game console, saving $50 a week means you can buy it in 10 weeks without owing anyone money.',
    commonMistake: 'Waiting to save whatever is "left over" at the end of the month. Usually, nothing is left over!',
    understandingCheck: {
      question: 'What does "pay yourself first" mean?',
      options: [
        'Buying yourself a treat on payday',
        'Paying all your bills before doing anything else',
        'Setting aside money for savings before you start spending',
        'Keeping all your cash under a mattress'
      ],
      correctOptionIndex: 2,
      explanation: 'Paying yourself first refers to automatically routing a portion of your income into savings the moment you get paid.'
    }
  },
  {
    id: 'investing-basics',
    title: 'Investing Basics',
    icon: 'trending_up',
    shortDescription: 'Learn how to make your money work for you over time.',
    explanation: 'Investing means using your money to buy things that you expect will grow in value or pay you over time, like stocks (small pieces of companies). It is not a get-rich-quick scheme; it is a way to grow wealth slowly.',
    whyItMatters: 'Saving keeps your money safe, but investing helps your money grow fast enough to beat rising prices (inflation) so you can afford to retire someday.',
    dailyLifeExample: 'Planting an apple seed. It takes years of water and sunlight (time) before it grows into a tree that gives you apples (returns).',
    commonMistake: 'Treating investing like a casino. True investing is long-term and boring, not gambling on the hottest new trend.',
    understandingCheck: {
      question: 'What is the main difference between saving and investing?',
      options: [
        'Saving is for long-term growth, investing is for short-term needs',
        'Investing guarantees you won\'t lose money, saving doesn\'t',
        'Saving keeps money safe for short-term needs, investing aims to grow it for the long-term',
        'There is no difference'
      ],
      correctOptionIndex: 2,
      explanation: 'Savings accounts are safe and accessible. Investing involves some risk but offers the potential for much higher returns over long periods.'
    }
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest',
    icon: 'auto_graph',
    shortDescription: 'Discover the "magic" of earning money on your money.',
    explanation: 'Compound interest is when you earn interest not only on the original money you put in (the principal), but also on the interest you already earned. Over time, this makes your money grow faster and faster.',
    whyItMatters: 'Compound interest is the easiest way to grow wealth passively. The earlier you start saving or investing, the more time your money has to multiply itself.',
    dailyLifeExample: 'Like rolling a snowball down a snowy hill. As it rolls, it picks up more snow. The bigger it gets, the more snow it picks up with each roll.',
    commonMistake: 'Thinking you need a lot of money to start. Because of compounding, starting early with a tiny amount is often better than starting late with a large amount.',
    understandingCheck: {
      question: 'How does compound interest work?',
      options: [
        'You only earn interest on the money you first put in',
        'You earn interest on your original money AND the interest it has already made',
        'The bank takes a small fee every month',
        'Your interest rate doubles every year'
      ],
      correctOptionIndex: 1,
      explanation: 'Compound interest is "interest on interest", accelerating the growth rate of your money.'
    }
  },
  {
    id: 'inflation',
    title: 'Inflation',
    icon: 'shopping_cart',
    shortDescription: 'Understand why things cost more over time.',
    explanation: 'Inflation is the general increase in the prices of goods and services over time. When inflation happens, your money loses purchasing power, meaning a dollar today buys less than a dollar bought ten years ago.',
    whyItMatters: 'If you keep all your savings in cash under a mattress, inflation makes that money worth less every single year. You have to invest to keep up.',
    dailyLifeExample: 'A movie ticket might have cost $5 when you were a kid, but today it costs $15. The movie didn\'t change, but the value of the money did.',
    commonMistake: 'Believing that hiding cash makes it safe. Cash loses value silently every year due to inflation.',
    understandingCheck: {
      question: 'What is the main danger of inflation?',
      options: [
        'It makes things cheaper',
        'It decreases the purchasing power of your money over time',
        'It causes the government to seize your bank accounts',
        'It makes borrowing money completely free'
      ],
      correctOptionIndex: 1,
      explanation: 'Inflation quietly reduces what your money can buy, which is why investing (to beat inflation) is important.'
    }
  },
  {
    id: 'emergency-funds',
    title: 'Emergency Funds',
    icon: 'medical_services',
    shortDescription: 'Why you need a financial safety net.',
    explanation: 'An emergency fund is money set aside specifically for unexpected expenses, like a medical bill or a car repair. It should be kept in a safe, easily accessible bank account.',
    whyItMatters: 'Life is unpredictable. Without an emergency fund, a sudden expense might force you to borrow money at terrible interest rates (like using a credit card).',
    dailyLifeExample: 'It\'s like a spare tire in your car. You hope you never have to use it, but you are incredibly relieved it is there when you hit a pothole.',
    commonMistake: 'Using the emergency fund for non-emergencies, like buying concert tickets. It must be strictly for real emergencies.',
    understandingCheck: {
      question: 'Where is the best place to keep an emergency fund?',
      options: [
        'In the stock market',
        'Under your mattress',
        'In a safe, easily accessible savings account',
        'Tied up in real estate'
      ],
      correctOptionIndex: 2,
      explanation: 'Emergency funds must be easily accessible (liquid) and safe from market drops so you can use them immediately when disaster strikes.'
    }
  },
  {
    id: 'risk-vs-return',
    title: 'Risk vs. Return',
    icon: 'balance',
    shortDescription: 'Learn why bigger rewards always come with bigger risks.',
    explanation: 'In finance, risk and return are always connected. "Return" is the money you make on an investment. "Risk" is the chance you might lose some or all of your money. To get higher potential returns, you must accept higher risk.',
    whyItMatters: 'If someone offers you an investment with "guaranteed high returns and no risk," it is almost certainly a scam. Understanding this balance protects you.',
    dailyLifeExample: 'Think of skydiving. Jumping out of a plane brings a huge adrenaline rush (high return of excitement), but carries a much higher risk than sitting on the couch.',
    commonMistake: 'Taking on too much risk with money you need soon (like next month’s rent) in hopes of doubling it.',
    understandingCheck: {
      question: 'What is the typical relationship between risk and return?',
      options: [
        'Higher potential returns usually involve higher risks',
        'If you eliminate all risk, your returns will be massive',
        'Risk and return have no connection',
        'Higher risks guarantee lower returns'
      ],
      correctOptionIndex: 0,
      explanation: 'Investors demand higher potential returns as a reward for taking on higher risks. There is no such thing as high return without high risk.'
    }
  }
];
