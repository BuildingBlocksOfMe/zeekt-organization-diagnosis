import { Question, TypeInfo } from '../types';

export const en = {
  common: {
    siteName: "Seeckt's Organization Theory Diagnosis",
    startButton: "Start Diagnosis",
    restartButton: "Take Again",
    shareResults: "Share Your Results",
    twitterShare: "Share on Twitter",
    lineShare: "Share on LINE",
    copyUrl: "Copy URL",
    urlCopied: "Copied!",
    disclaimer: "※ This diagnosis is for reference only and does not make definitive judgments about individuals.",
  },
  
  top: {
    title: "Seeckt's Organization Theory Diagnosis",
    subtitle: "What's Your Type?",
    description: "A diagnostic test based on the organizational theory proposed by German military officer Hans von Seeckt.",
    instruction: "Answer 10 questions to discover your characteristics.",
    type1Title: "Staff Type",
    type1Desc: "Competent × Hardworking",
    type2Title: "Commander Type",
    type2Desc: "Competent × Lazy",
    type3Title: "Soldier Type",
    type3Desc: "Incompetent × Lazy",
    type4Title: "Danger Type",
    type4Desc: "Incompetent × Hardworking",
  },
  
  question: {
    progressLabel: "Question",
    hint: "Answer intuitively. There are no right or wrong answers.",
  },
  
  result: {
    diagnosisResult: "Diagnosis Result",
    yourCharacteristics: "Your Characteristics",
    yourPosition: "Your Position",
    abilityScore: "Competence Score",
    actionScore: "Activity Score",
    strengths: "💪 Your Strengths",
    weaknesses: "⚠️ Points to Watch",
    recommendations: "💡 Recommended Actions",
    axisCompetent: "Competent",
    axisIncompetent: "Incompetent",
    axisHardworking: "Hardworking",
    axisLazy: "Lazy",
  },
  
  questions: [
    {
      id: 1,
      text: "A new project has started. What's your first action?",
      options: [
        {
          id: "1a",
          text: "First, grasp the overall picture and create an efficient plan",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "1b",
          text: "Start taking action immediately and tackle small tasks",
          abilityScore: 2,
          actionScore: 5,
        },
        {
          id: "1c",
          text: "Wait for instructions and reliably fulfill the assigned role",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "1d",
          text: "Just start with whatever comes to mind",
          abilityScore: -4,
          actionScore: 4,
        },
      ],
    },
    {
      id: 2,
      text: "A problem has occurred in your team. What do you do?",
      options: [
        {
          id: "2a",
          text: "Analyze the cause and propose the optimal solution",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "2b",
          text: "Calmly observe the situation and intervene only when necessary",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "2c",
          text: "Wait for my supervisor or others to make a decision",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "2d",
          text: "Take immediate action to try to fix it",
          abilityScore: -3,
          actionScore: 5,
        },
      ],
    },
    {
      id: 3,
      text: "What do you prioritize in your daily work?",
      options: [
        {
          id: "3a",
          text: "Complete tasks efficiently and maximize results",
          abilityScore: 4,
          actionScore: 4,
        },
        {
          id: "3b",
          text: "Focus on essential work and eliminate waste",
          abilityScore: 5,
          actionScore: -2,
        },
        {
          id: "3c",
          text: "Follow established rules and complete tasks without mistakes",
          abilityScore: -1,
          actionScore: -2,
        },
        {
          id: "3d",
          text: "Keep moving forward with full effort",
          abilityScore: -4,
          actionScore: 5,
        },
      ],
    },
    {
      id: 4,
      text: "When faced with a complex challenge, how do you respond?",
      options: [
        {
          id: "4a",
          text: "Break down the problem, prioritize, and solve it",
          abilityScore: 5,
          actionScore: 2,
        },
        {
          id: "4b",
          text: "Find a simple solution and resolve it with minimal effort",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "4c",
          text: "Ask someone for help",
          abilityScore: -3,
          actionScore: -1,
        },
        {
          id: "4d",
          text: "Push forward through trial and error",
          abilityScore: -3,
          actionScore: 4,
        },
      ],
    },
    {
      id: 5,
      text: "You're asked for new ideas in a meeting. What do you do?",
      options: [
        {
          id: "5a",
          text: "Make data-driven, feasible proposals",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "5b",
          text: "Present a precise idea concisely",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "5c",
          text: "Listen to others' opinions first before thinking",
          abilityScore: -2,
          actionScore: -3,
        },
        {
          id: "5d",
          text: "Share whatever comes to mind",
          abilityScore: -4,
          actionScore: 4,
        },
      ],
    },
    {
      id: 6,
      text: "A project deadline is approaching. How do you work?",
      options: [
        {
          id: "6a",
          text: "Systematically process high-priority tasks with focus",
          abilityScore: 5,
          actionScore: 4,
        },
        {
          id: "6b",
          text: "Ensure only the important parts are completed",
          abilityScore: 4,
          actionScore: -1,
        },
        {
          id: "6c",
          text: "Steadily proceed as instructed",
          abilityScore: -1,
          actionScore: -2,
        },
        {
          id: "6d",
          text: "Try to tackle everything at once",
          abilityScore: -4,
          actionScore: 5,
        },
      ],
    },
    {
      id: 7,
      text: "What is your ideal way of working?",
      options: [
        {
          id: "7a",
          text: "Produce results while enjoying fulfilling days",
          abilityScore: 4,
          actionScore: 3,
        },
        {
          id: "7b",
          text: "Finish work efficiently and enjoy leisure time",
          abilityScore: 5,
          actionScore: -4,
        },
        {
          id: "7c",
          text: "Work in a stable environment following instructions",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "7d",
          text: "Always be busy and moving around",
          abilityScore: -3,
          actionScore: 5,
        },
      ],
    },
    {
      id: 8,
      text: "When assigned as a leader, what are you like?",
      options: [
        {
          id: "8a",
          text: "Lead the entire team strategically",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "8b",
          text: "Set direction and delegate to members",
          abilityScore: 5,
          actionScore: -3,
        },
        {
          id: "8c",
          text: "Feel that leadership isn't for me",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "8d",
          text: "Take the initiative and lead by example",
          abilityScore: -2,
          actionScore: 5,
        },
      ],
    },
    {
      id: 9,
      text: "How do you react when you fail?",
      options: [
        {
          id: "9a",
          text: "Analyze the cause and implement improvements",
          abilityScore: 5,
          actionScore: 3,
        },
        {
          id: "9b",
          text: "Reflect calmly and apply lessons next time",
          abilityScore: 4,
          actionScore: -2,
        },
        {
          id: "9c",
          text: "Feel down but wait for the next instruction",
          abilityScore: -3,
          actionScore: -3,
        },
        {
          id: "9d",
          text: "Immediately try again with a different approach",
          abilityScore: -3,
          actionScore: 4,
        },
      ],
    },
    {
      id: 10,
      text: "When you have free time, what do you do?",
      options: [
        {
          id: "10a",
          text: "Use it for skill development and self-investment",
          abilityScore: 4,
          actionScore: 3,
        },
        {
          id: "10b",
          text: "Relax and recharge",
          abilityScore: 3,
          actionScore: -4,
        },
        {
          id: "10c",
          text: "Spend time leisurely without doing much",
          abilityScore: -2,
          actionScore: -4,
        },
        {
          id: "10d",
          text: "Try something new",
          abilityScore: -1,
          actionScore: 4,
        },
      ],
    },
  ] as Question[],
  
  typeInfos: {
    staff: {
      type: 'staff',
      name: 'Staff Type',
      title: 'You are a Capable Staff Member',
      description: 'You combine high competence with strong execution ability, making you one of the most valuable personnel types for any organization. You have excellent problem-solving skills and can produce results through action. In Seeckt\'s organizational theory, you are expected to serve as "Staff," supporting the organization in both strategic planning and execution.',
      strengths: [
        'Possess excellent problem-solving and execution abilities',
        'Can create plans and execute them steadily',
        'Trusted as the center of the team',
        'Actively tackle difficult challenges'
      ],
      weaknesses: [
        'May become exhausted from overwork',
        'Tendency toward perfectionism',
        'May have difficulty delegating work to others'
      ],
      recommendations: [
        'Value your own time and take adequate rest',
        'Focus on developing team members',
        'Create long-term career plans and continue developing skills',
        'Aim for positions where you can demonstrate leadership'
      ],
      color: '#10b981',
    },
    commander: {
      type: 'commander',
      name: 'Commander Type',
      title: 'You are a Strategic Commander',
      description: 'You possess high competence while prioritizing efficiency. You can make optimal decisions by seeing the essence of matters without wasting unnecessary effort. In Seeckt\'s organizational theory, as a "Commander," you are best suited for roles involving strategic decision-making while overseeing the entire organization.',
      strengths: [
        'Ability to see the essence of things',
        'Can efficiently find optimal solutions',
        'Make calm and strategic decisions',
        'Avoid unnecessary effort and focus on important matters'
      ],
      weaknesses: [
        'May be perceived as having low initiative',
        'May struggle with detailed practical work',
        'Sometimes misunderstood as "unmotivated" by others'
      ],
      recommendations: [
        'Actively take on management and strategic planning roles',
        'Make efforts to communicate your thoughts clearly to others',
        'Find reliable partners with strong execution abilities',
        'Leverage your ability to think from a long-term perspective'
      ],
      color: '#3b82f6',
    },
    soldier: {
      type: 'soldier',
      name: 'Soldier Type',
      title: 'You are a Reliable Soldier',
      description: 'You can follow instructions and produce stable results. While not flashy, you play an important role in supporting the organization\'s foundation. In Seeckt\'s organizational theory, as a "Soldier," you are expected to reliably accomplish assigned missions.',
      strengths: [
        'Faithful to instructions and reliable',
        'Can perform well in stable environments',
        'Able to follow rules and processes',
        'Less likely to make major mistakes'
      ],
      weaknesses: [
        'Limited spontaneous action',
        'Uncomfortable with new challenges',
        'Tendency to leave decisions to others'
      ],
      recommendations: [
        'Gradually develop habits of thinking and acting independently',
        'Find areas of expertise and deepen your specialization',
        'Try taking initiative with small things',
        'Begin learning to develop new skills'
      ],
      color: '#64748b',
    },
    danger: {
      type: 'danger',
      name: 'Danger Type',
      title: 'You are a Passionate Challenger',
      description: 'You possess high initiative and energy. In Seeckt\'s organizational theory, you are classified as "Dangerous," meaning that when misdirected, the impact is significant. However, with proper guidance, your energy becomes a powerful asset.',
      strengths: [
        'Have initiative and energy',
        'Can actively engage with things',
        'Can challenge without fear of failure',
        'Approach work with passion'
      ],
      weaknesses: [
        'May go in the wrong direction',
        'May lack planning',
        'Tend to prioritize quantity of action over efficiency',
        'May sometimes overwhelm those around you'
      ],
      recommendations: [
        'Develop the habit of pausing to think before acting',
        'Find trustworthy mentors and advisors',
        'Acquire skills for systematic progress',
        'If you can direct your initiative properly, you can achieve great success'
      ],
      color: '#ef4444',
    },
  } as Record<string, TypeInfo>,
};

