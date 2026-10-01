/** Curated resources: cheat sheets, video series, templates and practice sets. */

export const resourceTypes = ['Video', 'Article', 'E-book', 'Cheatsheet', 'Practice Set', 'Template', 'Course']

export const resourceLevels = ['Beginner', 'Intermediate', 'Advanced']

export const resourceCategories = [
  'Aptitude',
  'Coding',
  'DSA',
  'DBMS',
  'Networks',
  'OOPS',
  'Interview Skills',
  'Resume & Profile',
  'Company Specific'
]

export const resources = [
  {
    id: 'r-1',
    title: 'Aptitude Formula Sheet — Complete',
    description:
      'Every formula you need for quant, logical and verbal in one printable page, with a solved example next to each rule.',
    type: 'Cheatsheet',
    category: 'Aptitude',
    level: 'Beginner',
    companyId: null,
    duration: '15 min read',
    rating: 4.8,
    downloads: 4210,
    author: 'Senior Knowledge Hub',
    featured: true
  },
  {
    id: 'r-2',
    title: 'TCS NQT Advanced Preparation Series',
    description:
      'A week-long video series covering advanced quant, logical reasoning and the coding pattern used in the iON test.',
    type: 'Video',
    category: 'Company Specific',
    level: 'Intermediate',
    companyId: 'tcs',
    duration: '6 videos · 3h 20m',
    rating: 4.6,
    downloads: 3180,
    author: 'PrepWithMe',
    featured: true
  },
  {
    id: 'r-3',
    title: 'Java Interview Crash Course',
    description:
      'Collections, exceptions, threads and OOPS questions that repeat in almost every service-company interview.',
    type: 'Course',
    category: 'Coding',
    level: 'Intermediate',
    companyId: 'infosys',
    duration: '12 lessons · 5h',
    rating: 4.7,
    downloads: 2740,
    author: 'CodeWithRahul',
    featured: true
  },
  {
    id: 'r-4',
    title: 'SQL Joins Visual Guide',
    description:
      'Inner, left, right, full and self joins drawn as Venn diagrams, each with a query and a result table.',
    type: 'Cheatsheet',
    category: 'DBMS',
    level: 'Beginner',
    companyId: null,
    duration: '10 min read',
    rating: 4.9,
    downloads: 5120,
    author: 'DataMentor',
    featured: true
  },
  {
    id: 'r-5',
    title: 'Accenture Switchback Reasoning Practice Set',
    description:
      '40 switchback reasoning questions with detailed explanations, the section that rejects the most candidates.',
    type: 'Practice Set',
    category: 'Company Specific',
    level: 'Advanced',
    companyId: 'accenture',
    duration: '40 questions',
    rating: 4.5,
    downloads: 1930,
    author: 'AssessmentPrep',
    featured: true
  },
  {
    id: 'r-6',
    title: 'Deloitte DNET Quant Focus Book',
    description:
      'A focused workbook on ratios, time-speed-distance, profit-loss and compound interest — the four areas that decide DNET.',
    type: 'E-book',
    category: 'Company Specific',
    level: 'Advanced',
    companyId: 'deloitte',
    duration: '60 pages',
    rating: 4.7,
    downloads: 1620,
    author: 'ConsultPrep',
    featured: true
  },
  {
    id: 'r-7',
    title: 'OSI Model and Protocols One-Page Chart',
    description:
      'Every OSI layer with its protocols, devices and PDUs, designed to be memorised in one sitting.',
    type: 'Cheatsheet',
    category: 'Networks',
    level: 'Beginner',
    companyId: null,
    duration: '1 page',
    rating: 4.8,
    downloads: 6310,
    author: 'NetAcademy',
    featured: true
  },
  {
    id: 'r-8',
    title: '100 DSA Problems for Campus Placements',
    description:
      'A tiered problem list from Easy to Hard, grouped by the topic each company actually asks.',
    type: 'Practice Set',
    category: 'DSA',
    level: 'Intermediate',
    companyId: null,
    duration: '100 problems',
    rating: 4.6,
    downloads: 5890,
    author: 'Senior Knowledge Hub',
    featured: false
  },
  {
    id: 'r-9',
    title: 'HR Answer Templates for Campus Rounds',
    description:
      'Fill-in-the-blank answers for "tell me about yourself", "why this company", "expected CTC" and conflict questions.',
    type: 'Template',
    category: 'Interview Skills',
    level: 'Beginner',
    companyId: null,
    duration: '8 templates',
    rating: 4.7,
    downloads: 4470,
    author: 'InterviewPro',
    featured: true
  },
  {
    id: 'r-10',
    title: 'Resume Review Checklist',
    description:
      'The 22-point checklist we use to review fresher resumes, including ATS keyword guidance and section order.',
    type: 'Article',
    category: 'Resume & Profile',
    level: 'Beginner',
    companyId: null,
    duration: '8 min read',
    rating: 4.9,
    downloads: 7220,
    author: 'Senior Knowledge Hub',
    featured: true
  },
  {
    id: 'r-11',
    title: 'Business Case Study Frameworks',
    description:
      'Issue trees, MECE structuring, hypothesis-driven analysis and a worked retail case study for consulting roles.',
    type: 'E-book',
    category: 'Interview Skills',
    level: 'Advanced',
    companyId: 'deloitte',
    duration: '45 pages',
    rating: 4.6,
    downloads: 1380,
    author: 'ConsultPrep',
    featured: false
  },
  {
    id: 'r-12',
    title: 'GenC and GenC Next Complete Guide',
    description:
      'Eligibility, test pattern, section cut-offs and voice-process preparation for Cognizant drives.',
    type: 'Article',
    category: 'Company Specific',
    level: 'Beginner',
    companyId: 'cognizant',
    duration: '12 min read',
    rating: 4.4,
    downloads: 2140,
    author: 'PrepWithMe',
    featured: false
  },
  {
    id: 'r-13',
    title: 'Object-Oriented Design Interview Notes',
    description:
      'SOLID, design patterns (strategy, factory, observer, singleton) and how to apply them in project explanations.',
    type: 'E-book',
    category: 'OOPS',
    level: 'Advanced',
    companyId: 'accenture',
    duration: '30 pages',
    rating: 4.5,
    downloads: 1760,
    author: 'CodeWithRahul',
    featured: false
  },
  {
    id: 'r-14',
    title: 'Pseudo Code and Flowchart Practice',
    description:
      '40 pseudo-code questions in Codility style, plus flowchart exercises used heavily in Wipro assessments.',
    type: 'Practice Set',
    category: 'Company Specific',
    level: 'Intermediate',
    companyId: 'wipro',
    duration: '40 questions',
    rating: 4.3,
    downloads: 1290,
    author: 'PrepWithMe',
    featured: false
  },
  {
    id: 'r-15',
    title: 'Telecom & Networking Domain Notes',
    description:
      'OSI, TCP/IP, sockets, 5G basics and routing — targeted at Tech Mahindra telecom profile interviews.',
    type: 'E-book',
    category: 'Networks',
    level: 'Intermediate',
    companyId: 'tech-mahindra',
    duration: '28 pages',
    rating: 4.4,
    downloads: 980,
    author: 'NetAcademy',
    featured: false
  },
  {
    id: 'r-16',
    title: 'Bzzirt Test Strategy Guide',
    description:
      'How to clear the 40% section-wise cut-off, a week-by-week plan, and the traps in the Capgemini pattern.',
    type: 'Article',
    category: 'Company Specific',
    level: 'Intermediate',
    companyId: 'capgemini',
    duration: '9 min read',
    rating: 4.2,
    downloads: 1540,
    author: 'PrepWithMe',
    featured: false
  },
  {
    id: 'r-17',
    title: 'Git and GitHub Interview Questions',
    description:
      'Branching, merge vs rebase, resolving conflicts, and how to explain your Git workflow in an interview.',
    type: 'Article',
    category: 'Coding',
    level: 'Intermediate',
    companyId: null,
    duration: '10 min read',
    rating: 4.5,
    downloads: 3610,
    author: 'CodeWithRahul',
    featured: false
  },
  {
    id: 'r-18',
    title: 'Email + Follow-up Templates for Recruiters',
    description:
      'Professional templates for applying to a drive, following up after an interview, and politely declining an offer.',
    type: 'Template',
    category: 'Interview Skills',
    level: 'Beginner',
    companyId: null,
    duration: '5 templates',
    rating: 4.6,
    downloads: 4890,
    author: 'InterviewPro',
    featured: true
  },
  {
    id: 'r-19',
    title: 'Aptitude Speed Drills',
    description:
      'Ten-minute timed drills on quant and logical sections, with score tracking so you can measure improvement.',
    type: 'Video',
    category: 'Aptitude',
    level: 'Intermediate',
    companyId: null,
    duration: '20 drills',
    rating: 4.6,
    downloads: 3980,
    author: 'PrepWithMe',
    featured: false
  },
  {
    id: 'r-20',
    title: 'System Design for Freshers',
    description:
      'Client-server basics, load balancers, caching, database sharding and how to talk about architecture in an interview.',
    type: 'Video',
    category: 'Coding',
    level: 'Advanced',
    companyId: null,
    duration: '9 videos · 4h',
    rating: 4.8,
    downloads: 2670,
    author: 'CodeWithRahul',
    featured: true
  },
  {
    id: 'r-21',
    title: 'Normalisation and ACID Cheat Sheet',
    description:
      '1NF to BCNF, functional dependencies, and ACID explained with a banking example you can reuse in interviews.',
    type: 'Cheatsheet',
    category: 'DBMS',
    level: 'Beginner',
    companyId: null,
    duration: '2 pages',
    rating: 4.7,
    downloads: 5430,
    author: 'DataMentor',
    featured: false
  },
  {
    id: 'r-22',
    title: 'Capgemini Section-wise Cut-off Simulator',
    description:
      'An interactive sheet that predicts your selection chances section by section so you know where to invest time.',
    type: 'Template',
    category: 'Company Specific',
    level: 'Intermediate',
    companyId: 'capgemini',
    duration: 'Interactive sheet',
    rating: 4.1,
    downloads: 870,
    author: 'PrepWithMe',
    featured: false
  }
]

export const featuredResources = resources.filter((resource) => resource.featured)