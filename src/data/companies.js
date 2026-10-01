/**
 * Company master data.
 * Each company carries the full detail used by the Company Detail page:
 * eligibility, selection process, aptitude, coding, technical, HR, resources.
 */

export const companies = [
  {
    id: 'tcs',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    logo: 'TCS',
    color: '#1f4e9c',
    tint: '#eaf0fb',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Services',
    rating: 4.3,
    difficulty: 'Easy',
    tagline: 'Largest Indian IT services company, consistent hiring across 500+ campuses.',
    about:
      'TCS hires through the TCS iON platform and conducts off-campus drives all over India. The process is aptitude-heavy with a mandatory coding section, and the package is one of the most predictable in the market. More than 80% of the work is either BFSI, retail or enterprise migration projects where communication and domain knowledge matter as much as code.',
    stats: {
      applicants: 320000,
      openings: 45000,
      hireRate: 14,
      avgPackage: '₹4.8 LPA',
      batch: '2026',
      roles: ['System Engineer', 'System Analyst', 'Business Analyst', 'DevOps Engineer']
    },
    eligibility: {
      summary: 'No percentage-based shortlist for the iON test, but 60% is the practical cut-off.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate (55% for reserved)' },
        { label: 'Graduation batch', value: '2025 & 2026 only' },
        { label: 'Backlogs', value: 'No active backlogs at the time of apply' },
        { label: 'Age limit', value: 'No upper age limit (services hiring is age friendly)' },
        { label: 'Gender', value: 'Open to all genders' },
        { label: 'Marksheets', value: '10th, 12th and all semesters required' }
      ],
      notes: [
        'Final-year students can apply, but the offer is confirmed only after the final semester marksheet is submitted.',
        'Students with a gap of up to 2 years are still considered for the digital profiles.'
      ]
    },
    selectionProcess: [
      {
        round: 'Online Aptitude',
        mode: 'TCS iON (Naukri / TCS iON app)',
        duration: '90 minutes',
        cutOff: '45 – 60%',
        focus: 'Foundation 20 + Advanced 10 questions',
        tip: 'Speed matters more than accuracy. Finish Foundation in 45 minutes and leave 40 for Advanced.'
      },
      {
        round: 'Coding / Technical Test',
        mode: 'TCS iON Coding section',
        duration: '30 minutes',
        cutOff: '40 – 55%',
        focus: '1 coding question from a pool of ~20',
        tip: 'Learn the very common patterns: reverse a string, count vowels, fibonacci, factorial, palindrome.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online (Zoom / in-person for metro drives)',
        duration: '25 – 40 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Projects, DSA basics, DBMS, CN, OOPS',
        tip: 'Explain one project end-to-end. Interviewers dig into the stack you actually used.'
      },
      {
        round: 'Managerial / HR Interview',
        mode: 'Online or offline',
        duration: '15 – 30 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Motivation, communication, notice period, CTC expectations',
        tip: 'Keep a calm, structured answer for "why TCS?" and "why should we hire you?".'
      }
    ],
    aptitude: {
      topics: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability', 'Numerical Ability'],
      pattern: [
        'Foundation section: 20 questions / 40 minutes, needs 75%+ accuracy',
        'Advanced section: 10 questions / 45 minutes, needs 50%+ accuracy',
        'Advanced aptitude has negative marking of 1 mark',
        'Overall qualifying aggregate: 45% (60% for many competitors)'
      ],
      sampleQuestions: [
        'A train travels 360 km at 54 km/h and then 240 km at 36 km/h. What is the average speed?',
        'If the sum of the first 20 natural numbers is 210, what is the sum of the first 40?',
        'Complete the series: 4, 9, 19, 39, 79, ?',
        'In a certain code, CLOUD is written as DMPVE. How is FRAME written?'
      ]
    },
    coding: {
      languages: ['C', 'C++', 'Java', 'Python'],
      topics: ['Strings', 'Arrays', 'Loops', 'Pattern printing', 'Number systems', 'Basic DSA'],
      notes: [
        'The coding test has a single question but you get unlimited attempts on the practice platform.',
        'One of the classic questions is a "leap year without if-else" style problem or a remainder of Fermat theorem.',
        'Fermat theorem: for prime P, (P-2)! mod P = 1.'
      ],
      sampleQuestions: [
        'Write a program to print the nth Fibonacci number without recursion.',
        'Print a right-angled triangle using * for a given number of rows.',
        'Reverse the words of a sentence in place.',
        'Find the largest prime factor of a number given as input.'
      ]
    },
    technical: {
      topics: [
        'OOPS (4 pillars, abstract vs interface)',
        'DBMS (normalisation, joins, ACID)',
        'Computer Networks (TCP/UDP, OSI, HTTP vs HTTPS)',
        'Data Structures (arrays, linked list, stack, queue)',
        'Operating Systems (process vs thread, deadlock, paging)',
        'Cloud basics (what is IaaS / PaaS / SaaS)',
        'Your projects in depth'
      ],
      questions: [
        'What is the difference between a process and a thread? Give a real example.',
        'Explain normalisation and why 3NF is preferred for transactions.',
        'How does HTTPS work? Where is the SSL handshake performed?',
        'Which data structure would you use for a browser history feature and why?',
        'Walk me through your project: what was your individual contribution?',
        'What is a deadlock? Enumerate the four necessary conditions.',
        'Explain the difference between SQL and NoSQL with one use case each.'
      ]
    },
    hr: {
      questions: [
        'Why do you want to join TCS?',
        'Tell me about yourself.',
        'What is your expected CTC?',
        'Are you open to work in any location?',
        'Do you have any offers in hand?',
        'Why should we hire you?',
        'What is your notice period / when can you join?'
      ],
      tips: [
        'TCS HR is the softest round in the market — consistency and politeness matter.',
        'Mention that you are flexible on location and willing to learn BFSI or travel if asked.',
        'Never bad-mouth a previous company; HR asks this specifically.'
      ]
    },
    resources: [
      { title: 'TCS iON Official Preparation Guide', type: 'PDF', meta: 'TCS Careers' },
      { title: 'TCS iON Coding Previous Year Questions (2021–2025)', type: 'Question Bank', meta: 'Updated 2025' },
      { title: 'Crack TCS NQT in 30 Days — E-book', type: 'E-book', meta: 'Aptitude focused' },
      { title: 'TCS Digital Profile Interview Blueprint', type: 'Article', meta: '6 min read' }
    ],
    featured: true
  },

  {
    id: 'infosys',
    name: 'Infosys',
    fullName: 'Infosys Limited',
    logo: 'IN',
    color: '#0093b2',
    tint: '#e6f6f9',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Services',
    rating: 4.1,
    difficulty: 'Easy',
    tagline: 'Consistent InfyTQ process, generous learning curve, strong training track.',
    about:
      'Infosys runs the InfyTQ online test followed by an HR and technical round. The package is slightly higher than peers and the campus-to-campus movement is frequent, which makes it one of the best first offers to hold.',
    stats: {
      applicants: 210000,
      openings: 32000,
      hireRate: 15,
      avgPackage: '₹5.2 LPA',
      batch: '2026',
      roles: ['Systems Engineer', 'Developer', 'Consultant', 'Data Engineer']
    },
    eligibility: {
      summary: 'Strictly 60% aggregate with no backlogs at apply time.',
      rows: [
        { label: 'Minimum CGPA', value: '60% in all semesters (no rounding up)' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'Zero active backlogs, cleared by joining date' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Gender', value: 'Open to all genders' },
        { label: 'Approved colleges', value: 'AICTE / UGC approved institutions only' }
      ],
      notes: [
        'Final-year students without a consolidated CGPA must upload a running average calculator result.',
        'Gap up to 1 year is allowed for the systems engineer role.'
      ]
    },
    selectionProcess: [
      {
        round: 'Online Test — InfyTQ',
        mode: 'Infosys Talent Qualifier (online)',
        duration: '60 + 60 minutes',
        cutOff: '60 – 65%',
        focus: 'Quantitative, Logical Reasoning, Verbal Ability, Coding',
        tip: 'The InfyTQ has two halves of 60 minutes each. Do not switch sections until you finish the first.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online / campus drive',
        duration: '30 – 45 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Java / Python, OOPS, SQL, collections, projects',
        tip: 'They ask "why did you choose this language?" — be consistent with your resume.'
      },
      {
        round: 'HR Interview',
        mode: 'Online / offline',
        duration: '15 – 25 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Soft skills, motivation, location flexibility',
        tip: 'Be respectful and answer honestly. This round is usually a formality after a cleared technical round.'
      }
    ],
    aptitude: {
      topics: ['Quantitative Ability', 'Logical Reasoning', 'Verbal Ability'],
      pattern: [
        '60 questions split across three sections in 60 minutes each half',
        'First 60 minutes: 20 quant + 20 logical + 20 verbal',
        'Second 60 minutes: 2 coding questions',
        'No negative marking in the aptitude half'
      ],
      sampleQuestions: [
        'A shopkeeper buys an article for Rs. 480 and sells it for Rs. 540. Find the profit percentage.',
        'Statements followed by two conclusions — identify which follow logically.',
        'Choose the word that is most similar in meaning to "Meticulous".',
        'If 5 machines take 6 days to complete a job, how long do 10 machines take?'
      ]
    },
    coding: {
      languages: ['Java', 'Python', 'C++'],
      topics: ['Collections', 'Strings', 'Arrays', 'Sorting', 'Basic algorithms'],
      notes: [
        'Two coding questions appear in the InfyTQ, each with partial marks.',
        'A non-compiling program scores zero even if the logic is right — test your code mentally twice.',
        'Java is the most used language in Infosys projects, so it is the safest pick.'
      ],
      sampleQuestions: [
        'Write a program to find the second largest element without sorting.',
        'Remove duplicates from a list while preserving the order.',
        'Convert a Roman numeral string into an integer.',
        'Find the first non-repeating character in a string.'
      ]
    },
    technical: {
      topics: [
        'Java / Python core (collections, exceptions, threads)',
        'OOPS principles with real code',
        'SQL joins and subqueries',
        'REST API basics',
        'Version control (Git workflows)',
        'Testing concepts (unit vs integration)'
      ],
      questions: [
        'What are the four pillars of OOPS? Explain each with an example.',
        'Difference between ArrayList and LinkedList in Java.',
        'How would you design a URL shortener? What are the main challenges?',
        'Explain ACID properties with a banking transaction example.',
        'What is dependency injection and why is it useful?',
        'How do you handle a null value in a deeply nested object?'
      ]
    },
    hr: {
      questions: [
        'Introduce yourself in 60 seconds.',
        'Why Infosys over other service companies?',
        'Where do you see yourself in 3 years?',
        'Can you work from Bangalore / Hyderabad / Pune / Chennai?',
        'What was your academic experience like? Any gaps?'
      ],
      tips: [
        'Learn the "Infosys Springboard" program name — interviewers appreciate that you know about it.',
        'Location flexibility is the single most common rejection reason, so answer it clearly.',
        'Keep your answer to "tell me about yourself" under 90 seconds.'
      ]
    },
    resources: [
      { title: 'Infosys InfyTQ Latest Update & Pattern', type: 'Article', meta: 'Must read' },
      { title: 'InfyTQ Previous Year Papers (2018–2025)', type: 'Question Bank', meta: '8 sets' },
      { title: 'Infosys Java Interview Cheat Sheet', type: 'Cheatsheet', meta: '1 page' },
      { title: 'Springboard Learning Path Overview', type: 'Video', meta: '20 min' }
    ],
    featured: true
  },

  {
    id: 'cognizant',
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions',
    logo: 'CT',
    color: '#1a56db',
    tint: '#e8efff',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Services',
    rating: 4.0,
    difficulty: 'Easy',
    tagline: 'GenC and GenC Next drives with an easy aptitude test and quick loops.',
    about:
      'Cognizant conducts GenC drives for final-year students and GenC Next for final-year and non-final-year students. The aptitude section is the easiest of the big four, and the whole loop can be finished in a single day.',
    stats: {
      applicants: 180000,
      openings: 28000,
      hireRate: 16,
      avgPackage: '₹4.5 LPA',
      batch: '2026',
      roles: ['Programmer Analyst', 'Developer', 'Test Analyst', 'Data Analyst']
    },
    eligibility: {
      summary: '60% aggregate with at least one 10th, 12th or degree semester above 65%.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate' },
        { label: 'Extra criterion', value: 'At least one semester / 10th / 12th above 65%' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'No active backlogs' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Location', value: 'Multiple, preference given at application' }
      ],
      notes: [
        'GenC Next allows final-year and pre-final-year students across all branches.',
        'A single 65% requirement is often easier to satisfy than a full 60% aggregate.'
      ]
    },
    selectionProcess: [
      {
        round: 'Aptitude Test',
        mode: 'Cognizant online assessment',
        duration: '50 minutes',
        cutOff: '50 – 60%',
        focus: 'English, Quantitative, Logical, Data Interpretation',
        tip: 'Data Interpretation is the differentiator here — practice bar graphs and pie charts.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online (GenC / GenC Next)',
        duration: '20 – 35 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'C/Java basics, OOPS, DBMS, SQL queries',
        tip: 'Write a SQL join on a whiteboard if asked — it comes up very often.'
      },
      {
        round: 'HR / Voice Process',
        mode: 'Online',
        duration: '10 – 20 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Communication, notice period, willingness to relocate',
        tip: 'Voice process checks pronunciation and clarity. Speak slowly and audibly.'
      }
    ],
    aptitude: {
      topics: ['English Language', 'Quantitative Aptitude', 'Logical Reasoning', 'Data Interpretation'],
      pattern: [
        '50 questions in 50 minutes — 1 mark each, no negative marking',
        'English: 20 questions on grammar, synonyms and reading comprehension',
        'Quant: 10 questions, Logical: 10 questions, DI: 10 questions',
        'Cut-off is usually 50%, but keep 60% as a safe target'
      ],
      sampleQuestions: [
        'Identify the subject of the underlined clause in the sentence.',
        'A pie chart shows 40% of a batch prefers Java. If the batch has 250 students, how many prefer Java?',
        'If all P are Q and all Q are R, which of the following is definitely true?',
        'A certain amount earns simple interest of Rs. 1,200 in 3 years at 8% per annum.'
      ]
    },
    coding: {
      languages: ['C', 'Java', 'Python'],
      topics: ['Arrays', 'Strings', 'Function writing', 'Loops', 'Basics of recursion'],
      notes: [
        'The GenC test has no separate coding section, but coding appears in the technical interview.',
        'Small functions like "swap two numbers", "find the GCD" are asked live.'
      ],
      sampleQuestions: [
        'Write a function to check whether a number is a perfect square without math.sqrt.',
        'Print the sum of all even numbers in an array.',
        'Implement binary search and explain the time complexity.',
        'Write a program to count the vowels in a string.'
      ]
    },
    technical: {
      topics: ['C / Java basics', 'OOPS', 'DBMS & SQL', 'Testing fundamentals', 'Manual testing'],
      questions: [
        'Write a query to find the second highest salary from an employee table.',
        'Difference between abstract class and interface.',
        'Explain unit testing vs integration testing with an example.',
        'What are the 4 principles of test design (boundary values, equivalence partitioning)?',
        'Explain the difference between == and === if you have used JavaScript.',
        'What is a foreign key and how does it enforce integrity?'
      ]
    },
    hr: {
      questions: [
        'Tell me about yourself.',
        'What motivates you to join Cognizant?',
        'Are you comfortable with a 2-year bond?',
        'Preferred joining date and location?',
        'Any health or relocation constraints?'
      ],
      tips: [
        'The Cognizant HR round is short but the voice process is important — avoid filler words.',
        'Know the difference between GenC and GenC Next, and mention which one you applied for.'
      ]
    },
    resources: [
      { title: 'Cognizant GenC GenC Next Complete Guide', type: 'Article', meta: '2025 pattern' },
      { title: 'Cognizant Aptitude Previous Year Papers', type: 'Question Bank', meta: 'PDF' },
      { title: 'SQL Joins Visual Cheat Sheet', type: 'Cheatsheet', meta: 'Printable' },
      { title: 'Cognizant Interview Experience (Video)', type: 'Video', meta: '32 min' }
    ],
    featured: true
  },

  {
    id: 'accenture',
    name: 'Accenture',
    fullName: 'Accenture Solutions Private Limited',
    logo: 'A',
    color: '#a100ff',
    tint: '#f5ebff',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Consulting',
    rating: 3.9,
    difficulty: 'Moderate',
    tagline: 'ASE role with a friendly culture and a well-documented assessment stage.',
    about:
      'Accenture hires for the Associate Software Engineer (ASE) role through a well-known assessment on Accenture.com, followed by a technical interview and HR round. The process is transparent but the coding stage can reject people who only know syntax.',
    stats: {
      applicants: 260000,
      openings: 40000,
      hireRate: 15,
      avgPackage: '₹6.1 LPA',
      batch: '2026',
      roles: ['Associate Software Engineer', 'Software Engineer', 'Cloud Analyst']
    },
    eligibility: {
      summary: '60% aggregate, no backlogs, and a mandatory Accenture online assessment.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate, 6.5 CGPA preferred' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'Zero active backlogs' },
        { label: 'Assessment', value: 'Mandatory Accenture.com test before applying' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Branches', value: 'All engineering and B.Sc / MCA branches accepted' }
      ],
      notes: [
        'You must complete the Accenture assessment before you submit an application — this catches a lot of students.',
        'The assessment has two rounds, but you can attempt each twice.'
      ]
    },
    selectionProcess: [
      {
        round: 'Accenture Common Interest Expression',
        mode: 'Online assessment (Round 1: aptitude)',
        duration: '40 minutes',
        cutOff: '40 – 50%',
        focus: 'Cognitive, technical, communication and functional skills',
        tip: 'The cognitive section includes a switchback reasoning test — do not rush it.'
      },
      {
        round: 'Accenture Assessment Round 2',
        mode: 'Online assessment (Round 2: coding + common interest)',
        duration: '60 – 90 minutes',
        cutOff: '50 – 60%',
        focus: 'Coding, pseudo code, OOPS, cloud, network, security, DevOps',
        tip: 'Section-wise cut-offs exist. You cannot rely on one section to compensate another.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online (video call)',
        duration: '30 – 45 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Coding, DSA, DBMS, OS, project questions',
        tip: 'Expect at least one live coding question in your preferred language.'
      },
      {
        round: 'HR Interview',
        mode: 'Online / in-person',
        duration: '15 – 30 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Communication, relocation, notice period, do you want to consult?',
        tip: 'Accenture strongly values communication. Answer with the STAR structure.'
      }
    ],
    aptitude: {
      topics: ['Cognitive Ability', 'Technical Reasoning', 'Logical Reasoning', 'Verbal Ability'],
      pattern: [
        'Cognitive: pattern recognition, switchback, logical word sequence',
        'Technical: flowcharts, pseudocode, circuits, cloud fundamentals',
        'Common interest section has negative marking',
        'Round 2 code section: pseudo code + multiple choice'
      ],
      sampleQuestions: [
        'Identify the next figure in a pattern of rotated blocks.',
        'Given a pseudocode snippet, choose the correct output.',
        'Complete an analogy: Pilot : Aircraft :: Captain : ?',
        'A box has three switches and one bulb. What is the minimum number of moves to identify the switch?'
      ]
    },
    coding: {
      languages: ['Java', 'Python', 'C#', 'C++', 'JavaScript', 'Angular (for full-stack)'],
      topics: ['Arrays', 'Strings', 'Recursion', 'Collections', 'Pseudo code'],
      notes: [
        'The Accenture test presents pseudocode in many questions — practice reading flowcharts.',
        'Section-wise cut-off means balanced preparation beats heavy focus on one topic.',
        'Common interview live-coding problems: palindrome check, factorial, matrix traversal.'
      ],
      sampleQuestions: [
        'Write a function to flatten a nested list of integers.',
        'Given a string, return the character with the highest frequency.',
        'Implement a queue using two stacks.',
        'Convert a binary search tree to a sorted array.'
      ]
    },
    technical: {
      topics: [
        'OOPS with multiple inheritance discussion',
        'Collections and generics',
        'DBMS normalisation',
        'Computer networks (routing basics)',
        'Cloud (AWS/Azure/GCP basics)',
        'Agile and SDLC',
        'Your full-stack projects'
      ],
      questions: [
        'Explain the SOLID principles with a practical example.',
        'How would you move a monolith to microservices safely?',
        'What is a race condition? How do you prevent it in Java?',
        'Explain the difference between authentication and authorization.',
        'Describe your project architecture in 3 minutes.',
        'What is CI/CD and why does it reduce release risk?'
      ]
    },
    hr: {
      questions: [
        'Why Accenture over Infosys or TCS?',
        'Tell me about a time you worked under a tight deadline.',
        'Are you willing to work in a consulting role with client travel?',
        'What is your expected CTC?',
        'How do you handle conflict in a team?'
      ],
      tips: [
        'Always research Accenture "Industry Service Lines" before the HR interview.',
        'Show that you understand consulting means client-facing work and communication.',
        'Keep your answer to "why Accenture" specific — generic answers get low scores here.'
      ]
    },
    resources: [
      { title: 'Accenture ASE Assessment Section-wise Guide', type: 'Article', meta: 'Latest pattern' },
      { title: 'Accenture Switchback Reasoning Practice', type: 'Practice Set', meta: '25 questions' },
      { title: 'SOLID Principles with Code Examples', type: 'Cheatsheet', meta: 'Interview ready' },
      { title: 'Accenture Interview Experience Collection', type: 'Article', meta: '30 stories' }
    ],
    featured: true
  },

  {
    id: 'deloitte',
    name: 'Deloitte',
    fullName: 'Deloitte Touche Tohilatsu',
    logo: 'D',
    color: '#86bc25',
    tint: '#f2f9e6',
    tag: 'Dream',
    category: 'Big 4 · Consulting',
    rating: 4.5,
    difficulty: 'Hard',
    tagline: 'Dream company with a high aptitude bar but a very human interview loop.',
    about:
      'Deloitte hires through the Deloitte National Eligibility Test (DNET). The selection is aptitude-heavy, followed by a business case and a technical round. The brand value on a resume is exceptional, so the competition is fierce.',
    stats: {
      applicants: 95000,
      openings: 6000,
      hireRate: 6,
      avgPackage: '₹8.2 LPA',
      batch: '2026',
      roles: ['Analyst', 'Consultant', 'Engineer', 'Analyst - SFE']
    },
    eligibility: {
      summary: '60% aggregate with a strong quantitative aptitude score, no backlogs.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate (65% preferred for all-India drives)' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'No backlogs allowed' },
        { label: 'Age limit', value: 'Below 25 years for Analyst role' },
        { label: 'Branches', value: 'Engineering, B.Sc, B.Com, BBA, MBA accepted' },
        { label: 'Test', value: 'DNET online aptitude test' }
      ],
      notes: [
        'DNET has a high cut-off, around 60-65%, so top-up preparation on quant is essential.',
        'Commerce and management graduates are eligible for the Analyst role alongside engineers.'
      ]
    },
    selectionProcess: [
      {
        round: 'DNET Aptitude Test',
        mode: 'Online assessment',
        duration: '35 minutes',
        cutOff: '55 – 65%',
        focus: 'Verbal ability, logical reasoning, quantitative aptitude',
        tip: 'Quant is the decider. A strong verbal score cannot compensate for weak quant.'
      },
      {
        round: 'Business Case',
        mode: 'Written / online case study',
        duration: '45 – 60 minutes',
        cutOff: 'Qualitative review',
        focus: 'Data interpretation, charts, structured recommendations',
        tip: 'Follow the "issue → analysis → recommendation" structure. Numbers first, opinion second.'
      },
      {
        round: 'Technical / Domain Interview',
        mode: 'Online / in-person',
        duration: '30 – 45 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Domain knowledge, projects, problem solving, communication',
        tip: 'For SFE and technology profiles, code quality matters more than code volume.'
      },
      {
        round: 'HR / Culture Fit',
        mode: 'Online / in-person',
        duration: '20 – 30 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Collaboration, ownership, values, leadership stories',
        tip: 'Prepare three stories: one failure, one conflict, one leadership moment.'
      }
    ],
    aptitude: {
      topics: ['Verbal Ability', 'Logical Reasoning', 'Quantitative Aptitude', 'Data Interpretation'],
      pattern: [
        '35 questions in 35 minutes — 1 mark each',
        'Verbal: 10 questions, Logical: 10 questions, Quant: 15 questions',
        'Quant includes time-speed-distance, percentages, ratios and SI/CI',
        'Cut-off is high: target 70% to be safe'
      ],
      sampleQuestions: [
        'If a project grows 20% every quarter, what is the annual growth factor?',
        'Three of the following statements are true. Identify the false one.',
        'A company\'s revenue rose from ₹450 Cr to ₹585 Cr. What was the growth rate?',
        'If 3x + 2y = 18 and x − y = 2, what is x?'
      ]
    },
    coding: {
      languages: ['Python', 'Java', 'C++', 'SQL'],
      topics: ['Data manipulation', 'SQL joins', 'Basic algorithms', 'Pandas / data frames'],
      notes: [
        'Deloitte is not a product company — coding depth is moderate.',
        'For SFE (Software Engineering) profiles, DSA depth is close to a product company interview.',
        'Data cleaning and Excel-style analysis are frequently asked.'
      ],
      sampleQuestions: [
        'Write a query to calculate month-over-month growth from a sales table.',
        'Given a list of dicts, return the record with the highest revenue.',
        'Write a function to detect anomalies in a time series of numbers.',
        'Explain how you would validate a data set before analysis.'
      ]
    },
    technical: {
      topics: [
        'Business and domain understanding',
        'SQL and data analysis',
        'Python basics / Pandas',
        'Case study frameworks',
        'Excel advanced formulas',
        'Your projects and internships'
      ],
      questions: [
        'Walk me through a business problem you solved using data.',
        'How would you analyse a drop in customer retention?',
        'What is the difference between correlation and causation? Give a business example.',
        'Explain left join vs inner join with a use case.',
        'How do you validate the accuracy of a financial report?',
        'What frameworks do you use to structure a business case study?'
      ]
    },
    hr: {
      questions: [
        'Why Deloitte?',
        'Why consulting and not engineering?',
        'Tell me about a time you influenced someone without authority.',
        'Where do you see yourself in 5 years?',
        'What is your family background and do you plan to relocate?'
      ],
      tips: [
        'Deloitte values "quality" and "trust" — mirror those values in your answers.',
        'A strong "why consulting" story differentiates you from engineering-only candidates.',
        'Be ready for a long travel and client-deployment question.'
      ]
    },
    resources: [
      { title: 'DNET Syllabus + Previous Year Papers', type: 'Question Bank', meta: '10 papers' },
      { title: 'Business Case Study Frameworks (MECE, Issue Tree)', type: 'Cheatsheet', meta: 'Interview ready' },
      { title: 'SQL for Analysts — 50 Queries', type: 'Practice Set', meta: 'Beginner to advanced' },
      { title: 'Deloitte Analyst Interview Experience', type: 'Article', meta: '12 stories' }
    ],
    featured: true
  },

  {
    id: 'capgemini',
    name: 'Capgemini',
    fullName: 'Capgemini Technology Services',
    logo: 'CG',
    color: '#0a3d91',
    tint: '#e9eefb',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Services',
    rating: 3.8,
    difficulty: 'Easy',
    tagline: 'Bzzirt test with a common cut-off across all sections.',
    about:
      'Capgemini uses the Bzzirt / Capgemini online test (shared with other brands) followed by a technical and HR round. The section-wise cut-off of 40% makes it one of the more achievable big-MNC tests.',
    stats: {
      applicants: 140000,
      openings: 22000,
      hireRate: 16,
      avgPackage: '₹4.6 LPA',
      batch: '2026',
      roles: ['Software Engineer', 'Senior Software Engineer', 'Consultant', 'Data Analyst']
    },
    eligibility: {
      summary: '60% aggregate, no backlogs, all branches eligible.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'No active backlogs' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Branches', value: 'All branches including MCA and B.Sc' },
        { label: 'Test', value: 'Common online assessment (Bzzirt pattern)' }
      ],
      notes: [
        'Section-wise cut-off of 40% applies to logical, verbal and quant sections.',
        'Capgemini also recruits from Tier-2 and Tier-3 campuses with the same process.'
      ]
    },
    selectionProcess: [
      {
        round: 'Common Online Assessment',
        mode: 'Online (Bzzirt pattern)',
        duration: '60 minutes',
        cutOff: '40% section-wise',
        focus: 'Logical reasoning, verbal ability, quantitative aptitude',
        tip: 'Because the cut-off is section-wise, answer every section instead of perfecting one.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online / campus',
        duration: '25 – 40 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Programming fundamentals, OOPS, DBMS, projects',
        tip: 'Revise your final-year subjects; questions come straight from the syllabus.'
      },
      {
        round: 'HR Interview',
        mode: 'Online / offline',
        duration: '15 – 25 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Motivation, relocation, CTC',
        tip: 'Standard HR loop. Be clear about your joining date.'
      }
    ],
    aptitude: {
      topics: ['Logical Reasoning', 'Verbal Ability', 'Quantitative Aptitude'],
      pattern: [
        'Total 60 questions in 60 minutes',
        'Logical: 20, Verbal: 20, Quant: 20 (approximate split)',
        '40% section-wise cut-off, aggregate cut-off around 45%',
        '1 mark per question, no negative marking'
      ],
      sampleQuestions: [
        'A, B, C, D are seated in a row. B sits second to the right of C. Where is D?',
        'Find the odd one out from the given set of words.',
        'A sum doubles every 6 years. What is the interest rate per annum?',
        'Choose the correct preposition: "She is good ___ mathematics".'
      ]
    },
    coding: {
      languages: ['C', 'Java', 'Python'],
      topics: ['Control flow', 'Functions', 'Strings', 'Arrays', 'Basic recursion'],
      notes: [
        'No dedicated coding section in the common test, but expect a live coding question in the interview.',
        'Practise writing small programs without a compiler — describing logic out loud matters.'
      ],
      sampleQuestions: [
        'Write a program to sort an array of 0s, 1s and 2s without extra space.',
        'Write a function to merge two sorted arrays.',
        'Print the transpose of a matrix.',
        'Check whether a given string is a valid palindrome ignoring case.'
      ]
    },
    technical: {
      topics: ['Programming fundamentals', 'OOPS', 'DBMS', 'Operating systems', 'Software testing'],
      questions: [
        'What is the difference between a macro and a function?',
        'Explain normalisation with an example.',
        'What is paging vs segmentation?',
        'Write a SQL query to fetch the second highest salary.',
        'Explain the difference between manual and automated testing.',
        'What is a deadlock and how can you prevent it?'
      ]
    },
    hr: {
      questions: [
        'Tell me about yourself.',
        'Why Capgemini?',
        'Preferred work location?',
        'What is your expected CTC?',
        'Are you willing to sign a 2-year agreement?'
      ],
      tips: [
        'Mention the Capgemini global presence — it shows interest.',
        'Confirm your availability for the joining date in the offer.',
        'HR is short; answers should be crisp, one minute or less.'
      ]
    },
    resources: [
      { title: 'Bzzirt / Capgemini Previous Year Papers', type: 'Question Bank', meta: '12 sets' },
      { title: 'Section-wise Cut-off Strategy Guide', type: 'Article', meta: 'Score strategy' },
      { title: 'Programming Fundamentals Revision Notes', type: 'PDF', meta: 'Quick revision' },
      { title: 'Capgemini Experience Thread', type: 'Article', meta: 'Community' }
    ],
    featured: false
  },

  {
    id: 'wipro',
    name: 'Wipro',
    fullName: 'Wipro Limited',
    logo: 'W',
    color: '#d94f00',
    tint: '#fdf0e7',
    tag: 'Mass Recruiter',
    category: 'MNC · IT Services',
    rating: 3.7,
    difficulty: 'Easy',
    tagline: 'ELITE / NTH drive with a competitive package and clean process.',
    about:
      'Wipro conducts ELITE and NTH drives with an online assessment (Agniveer/Project Quantum) and a structured interview loop. Package is competitive for a services company and the process is one of the simplest to prepare for.',
    stats: {
      applicants: 125000,
      openings: 19000,
      hireRate: 15,
      avgPackage: '₹4.9 LPA',
      batch: '2026',
      roles: ['Project Engineer', 'Software Engineer', 'Business Analyst', 'Solution Architect Intern']
    },
    eligibility: {
      summary: '60% aggregate, no backlogs, engineering branches preferred.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'No backlogs' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Branches', value: 'Engineering / MCA preferred, B.Sc considered' },
        { label: 'Test', value: 'Common online assessment' }
      ],
      notes: [
        'Wipro offers a Project Engineer role with the best chance of selection among all big services companies.',
        'Some drives accept 7.5 CGPA in the final semester alone even with a lower aggregate.'
      ]
    },
    selectionProcess: [
      {
        round: 'Online Assessment',
        mode: 'Online test (Project Quantum pattern)',
        duration: '75 minutes',
        cutOff: '50 – 60%',
        focus: 'Aptitude, logical reasoning, coding basics, personality',
        tip: 'The personality section is easy marks — answer honestly and consistently.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online / campus',
        duration: '30 – 45 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Language basics, DSA, DBMS, CN, OS',
        tip: 'Revise your semester subjects; questions are syllabus-driven here.'
      },
      {
        round: 'HR Interview',
        mode: 'Online / offline',
        duration: '15 – 25 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Location, notice period, communication',
        tip: 'Confirm your readiness to work from any Wipro location.'
      }
    ],
    aptitude: {
      topics: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability', 'Basic Coding'],
      pattern: [
        'Aptitude: 45 minutes for ~50 questions',
        'Logical: 15 questions with section cut-off',
        'Coding section: 2 basic questions',
        'Personality: 20 simple situational questions'
      ],
      sampleQuestions: [
        'Solve for x: (x/5) + (x/3) = 8.',
        'Which is the odd one out: 121, 144, 169, 158?',
        'Write pseudocode to check whether a string ends with ".java".',
        'Rank the following by price from low to high.'
      ]
    },
    coding: {
      languages: ['C', 'C++', 'Java', 'Python'],
      topics: ['Pseudocode', 'Loops', 'Strings', 'Arrays', 'Flowcharts'],
      notes: [
        'Wipro heavily uses pseudocode and flowchart questions before real code.',
        'The coding section is forgiving — logical clarity beats syntax perfection.'
      ],
      sampleQuestions: [
        'Draw the flowchart for a program that counts vowels in a string.',
        'Write pseudocode for binary search.',
        'Swap two variables without a temporary variable.',
        'Write a function to check if a number is prime.'
      ]
    },
    technical: {
      topics: ['Programming languages', 'OOPS', 'DBMS', 'Computer networks', 'Software engineering'],
      questions: [
        'What is the difference between static and dynamic typing?',
        'Explain B+ trees and where they are used.',
        'Difference between TCP and UDP — give two practical examples.',
        'What is an agile sprint? How does it differ from a waterfall phase?',
        'Explain virtual memory and what happens on a page fault.',
        'How does garbage collection work in Java?'
      ]
    },
    hr: {
      questions: [
        'Why Wipro?',
        'Tell me about your internship experience.',
        'Are you open to a rotational role?',
        'What is your expected CTC?',
        'How do you handle multiple deadlines at once?'
      ],
      tips: [
        'Wipro HR appreciates honesty about academic gaps or low marks.',
        'Be clear that you understand the bond and the project deployment model.',
        'Keep a short, truthful 60-second introduction ready.'
      ]
    },
    resources: [
      { title: 'Wipro ELITE / NTH Drive Guide', type: 'Article', meta: 'Eligibility + pattern' },
      { title: 'Project Quantum Previous Year Papers', type: 'Question Bank', meta: 'PDF' },
      { title: 'Pseudocode & Flowchart Revision Sheet', type: 'Cheatsheet', meta: '2 pages' },
      { title: 'Wipro Technical Interview Questions', type: 'Question Bank', meta: '150 questions' }
    ],
    featured: false
  },

  {
    id: 'tech-mahindra',
    name: 'Tech Mahindra',
    fullName: 'Tech Mahindra Limited',
    logo: 'TM',
    color: '#eb5424',
    tint: '#fdeee8',
    tag: 'Selective',
    category: 'MNC · IT Services',
    rating: 4.0,
    difficulty: 'Moderate',
    tagline: 'Higher package than peers with a comparatively lighter aptitude test.',
    about:
      'Tech Mahindra runs a Symbo / online assessment plus a technical and HR loop. The package and role names are slightly above average, and the aptitude paper is shorter, so strong fundamentals can win you a selection here.',
    stats: {
      applicants: 110000,
      openings: 15000,
      hireRate: 14,
      avgPackage: '₹5.4 LPA',
      batch: '2026',
      roles: ['Associate Software Engineer', 'Software Engineer', 'Network Engineer', 'SAP Analyst']
    },
    eligibility: {
      summary: '60% aggregate, engineering preference, no backlogs.',
      rows: [
        { label: 'Minimum CGPA', value: '60% aggregate (62.5% preferred)' },
        { label: 'Graduation batch', value: '2025 & 2026' },
        { label: 'Backlogs', value: 'No active backlogs' },
        { label: 'Age limit', value: 'Below 35 years' },
        { label: 'Branches', value: 'Engineering, MCA, and related streams' },
        { label: 'Test', value: 'Symbo / company online assessment' }
      ],
      notes: [
        'Tech Mahindra has a higher cut-off on quant than other services companies.',
        'Final-year students are eligible if the expected aggregate meets the criterion.'
      ]
    },
    selectionProcess: [
      {
        round: 'Symbo Online Assessment',
        mode: 'Online test',
        duration: '50 – 60 minutes',
        cutOff: '55 – 65%',
        focus: 'Aptitude, logical reasoning, coding basics',
        tip: 'Quant is a differentiator here — invest extra time in percentage, ratio and profit questions.'
      },
      {
        round: 'Technical Interview',
        mode: 'Online / campus',
        duration: '30 – 45 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Programming, DBMS, networks, projects',
        tip: 'Telecom and network roles ask extra networking questions — know OSI layers.'
      },
      {
        round: 'HR Interview',
        mode: 'Online / offline',
        duration: '15 – 30 minutes',
        cutOff: 'Clear / Not clear',
        focus: 'Motivation, communication, location flexibility',
        tip: 'HR here can be slightly detailed on your long-term career plan.'
      }
    ],
    aptitude: {
      topics: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability'],
      pattern: [
        '50 questions in about 55 minutes',
        'Quant weightage is higher than most competitors',
        'Negative marking of 0.25 in some sections',
        'Target 65%+ for a safe selection'
      ],
      sampleQuestions: [
        'The ratio of boys to girls in a class is 3:4. If there are 12 more girls than boys, find the total strength.',
        'If the cost price is Rs. 450 and the marked price is Rs. 600 with 10% discount, find the profit percentage.',
        'Which number replaces the question mark in 2, 6, 12, 20, ?, 42?',
        'Choose the correctly spelt word from the options.'
      ]
    },
    coding: {
      languages: ['Java', 'Python', 'C', 'C++'],
      topics: ['Strings', 'Arrays', 'Collections', 'Sorting', 'Loops'],
      notes: [
        'Coding is a smaller part of the Symbo test, but the technical interview usually includes a live question.',
        'Telecom profiles ask about socket programming and basic networking code.'
      ],
      sampleQuestions: [
        'Write a program to check if two strings are rotations of each other.',
        'Find the missing number in an array of 1..n.',
        'Write a function to reverse the words in a sentence.',
        'Sort an array of 0s, 1s and 2s in one pass.'
      ]
    },
    technical: {
      topics: ['Programming', 'OOPS', 'DBMS', 'Computer networks (telecom emphasis)', 'SDLC'],
      questions: [
        'Explain the OSI model with one protocol per layer.',
        'What is a socket? Differentiate TCP and UDP sockets.',
        'Difference between abstract class and interface with code.',
        'Explain normalisation and write a query using joins.',
        'What is an API? How would you design a REST API?',
        'Explain the difference between a process and a service.'
      ]
    },
    hr: {
      questions: [
        'Why Tech Mahindra and not a bigger brand?',
        'Tell me about a technical challenge you solved.',
        'What is your expectation from the first year at Tech Mahindra?',
        'Are you comfortable with shift timings?',
        'Would you like to work in a telecom domain?'
      ],
      tips: [
        'Show interest in the telecom and digital transformation services — it is a differentiator.',
        'Be honest about shift flexibility; it is asked often in telecom roles.',
        'Mention your long-term plan to become a domain expert.'
      ]
    },
    resources: [
      { title: 'Symbo Test Pattern Explained', type: 'Article', meta: 'Section analysis' },
      { title: 'Tech Mahindra Previous Year Papers', type: 'Question Bank', meta: '8 sets' },
      { title: 'OSI Model + Protocol Cheat Sheet', type: 'Cheatsheet', meta: 'Interview ready' },
      { title: 'Tech Mahindra Experience Reviews', type: 'Article', meta: 'Community thread' }
    ],
    featured: false
  }
]

export const companyById = (id) => companies.find((company) => company.id === id)

export const companyNameById = (id) => companyById(id)?.name || 'General'

export const categories = Array.from(new Set(companies.map((company) => company.category)))