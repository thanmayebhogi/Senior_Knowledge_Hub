/** Company preparation data: overall plan, per-company focus areas and checklists. */

export const preparationPhases = [
  {
    id: 'phase-1',
    title: 'Foundation Phase',
    duration: 'Weeks 1–3',
    goal: 'Close eligibility gaps and build a base score',
    color: '#2563eb',
    tasks: [
      { title: 'Verify eligibility for every target company', meta: 'CGPA, backlogs, batch year, approved college' },
      { title: 'Rebuild quant fundamentals', meta: 'Percentages, ratios, time-speed-distance, profit-loss, SI/CI' },
      { title: 'Revise core semester subjects', meta: 'DBMS, CN, OS, OOPS — syllabus-driven questions' },
      { title: 'Start one daily aptitude mock', meta: 'One mock per day, then analyse every wrong answer' },
      { title: 'Update resume and LinkedIn', meta: 'Quantified bullets, ATS keywords, clean projects section' }
    ]
  },
  {
    id: 'phase-2',
    title: 'Skill Build Phase',
    duration: 'Weeks 4–7',
    goal: 'Get comfortable with coding and DSA basics',
    color: '#7c3aed',
    tasks: [
      { title: 'Master the top 20 coding patterns', meta: 'Strings, arrays, loops, recursion, patterns, number systems' },
      { title: 'Complete 60 DSA problems', meta: 'Easy first, then Medium on arrays, strings, stacks and queues' },
      { title: 'Practise SQL joins daily', meta: '10 queries a day, including subqueries and window functions' },
      { title: 'Record mock interviews', meta: '10 minutes a day, review your filler words and pacing' },
      { title: 'Deepen one project', meta: 'Be able to explain it for 5 minutes without notes' }
    ]
  },
  {
    id: 'phase-3',
    title: 'Company Sprint Phase',
    duration: 'Weeks 8–10',
    goal: 'Master the specific pattern of each target company',
    color: '#0d9488',
    tasks: [
      { title: 'Solve previous-year papers', meta: 'At least 3 full-length timed papers per company' },
      { title: 'Practise company-specific sections', meta: 'Switchback, pseudocode, business case, section cut-offs' },
      { title: 'Prepare HR and story bank', meta: '3 stories: failure, conflict, leadership + "why this company"' },
      { title: 'Rehearse the technical interview loop', meta: 'One mock technical interview every two days' },
      { title: 'Track section-wise scores', meta: 'Fix the lowest column in your mock scoreboard' }
    ]
  },
  {
    id: 'phase-4',
    title: 'Offer Phase',
    duration: 'Weeks 11–12',
    goal: 'Convert interviews into offers and negotiate well',
    color: '#ea580c',
    tasks: [
      { title: 'Research every target company', meta: 'Service lines, recent news, products, competitors' },
      { title: 'Prepare location and joining answers', meta: 'Decide your flexibility before the HR round' },
      { title: 'Know your CTC research', meta: 'Package range, variable pay, insurance and bond' },
      { title: 'Prepare email templates', meta: 'Follow-up, thank-you and joining confirmation' },
      { title: 'Do not drop preparation after the first offer', meta: 'Keep the next drive as your bargaining position' }
    ]
  }
]

export const companyFocus = [
  {
    companyId: 'tcs',
    name: 'TCS',
    focus: 'Aptitude speed + iON coding pool',
    priority: 'High',
    topics: [
      { name: 'Advanced quantitative aptitude', weight: 35, note: 'Probability, averages, SI/CI' },
      { name: 'iON coding pool', weight: 30, note: '20 repeated patterns, Fermat theorem' },
      { name: 'Project depth + DBMS', weight: 20, note: 'Normalisation, joins, ACID' },
      { name: 'HR basics', weight: 15, note: 'Location, CTC, notice period' }
    ],
    tip: 'Clear aptitude with margin — it is what unlocks the higher digital packages.'
  },
  {
    companyId: 'infosys',
    name: 'Infosys',
    focus: 'InfyTQ two-half strategy + Java depth',
    priority: 'High',
    topics: [
      { name: 'InfyTQ aptitude halves', weight: 40, note: 'Finish the first 60 minutes fully' },
      { name: 'Java collections & OOPS', weight: 25, note: 'ArrayList vs LinkedList, exceptions' },
      { name: 'SQL and DBMS', weight: 20, note: 'Joins, normalisation, transactions' },
      { name: 'HR + location', weight: 15, note: 'Location flexibility is key' }
    ],
    tip: 'Practise coding with empty and single-element inputs — the test checks edge cases.'
  },
  {
    companyId: 'cognizant',
    name: 'Cognizant',
    focus: 'English + data interpretation + voice',
    priority: 'Medium',
    topics: [
      { name: 'English language', weight: 40, note: 'Grammar, synonyms, reading comprehension' },
      { name: 'Data interpretation', weight: 30, note: 'Bar and pie charts, time-box each question' },
      { name: 'Quantitative & logical', weight: 20, note: 'Standard level questions' },
      { name: 'Voice process prep', weight: 10, note: 'Record and review yourself daily' }
    ],
    tip: 'English is 40% of the paper — most candidates under-prepare it and lose the selection.'
  },
  {
    companyId: 'accenture',
    name: 'Accenture',
    focus: 'Assessment rounds (section-wise cut-offs)',
    priority: 'High',
    topics: [
      { name: 'Switchback reasoning', weight: 30, note: 'Practise separately, 60+ questions' },
      { name: 'Technical reasoning', weight: 25, note: 'Pseudocode, flowcharts, circuits' },
      { name: 'Cloud + security + DevOps', weight: 20, note: 'General awareness MCQs' },
      { name: 'Live coding + OOPS', weight: 25, note: 'SOLID principles and small functions' }
    ],
    tip: 'Every section has its own cut-off — a balanced score is mandatory.'
  },
  {
    companyId: 'deloitte',
    name: 'Deloitte',
    focus: 'Quant depth + business case structure',
    priority: 'High',
    topics: [
      { name: 'Quantitative aptitude', weight: 40, note: 'Ratios, compound interest, data interpretation' },
      { name: 'Business case writing', weight: 25, note: 'Issue tree, MECE, recommendations' },
      { name: 'SQL and data analysis', weight: 20, note: 'Cohort analysis, validation' },
      { name: 'Story bank for HR', weight: 15, note: 'Failure, conflict, leadership' }
    ],
    tip: 'Quant decides the shortlist. Practise 30 timed quant sessions before DNET.'
  },
  {
    companyId: 'capgemini',
    name: 'Capgemini',
    focus: 'Section cut-off balance',
    priority: 'Medium',
    topics: [
      { name: 'Verbal ability', weight: 30, note: 'Usually the section that fails candidates' },
      { name: 'Logical reasoning', weight: 30, note: 'Puzzles, seating, syllogisms' },
      { name: 'Quantitative aptitude', weight: 25, note: 'Standard problem solving' },
      { name: 'Syllabus revision', weight: 15, note: 'DBMS, OS, networking questions' }
    ],
    tip: 'Clear 40% in every section — an average score is not enough here.'
  },
  {
    companyId: 'wipro',
    name: 'Wipro',
    focus: 'Pseudocode + syllabus revision',
    priority: 'Medium',
    topics: [
      { name: 'Pseudocode and flowcharts', weight: 30, note: 'The signature Wipro question type' },
      { name: 'Core subjects', weight: 30, note: 'Syllabus-driven, so revision wins' },
      { name: 'Aptitude', weight: 25, note: 'Logical, quant, verbal' },
      { name: 'Personality section', weight: 15, note: 'Answer consistently and honestly' }
    ],
    tip: 'Flowchart and pseudocode questions are under-rated — practise them first.'
  },
  {
    companyId: 'tech-mahindra',
    name: 'Tech Mahindra',
    focus: 'Heavy quant + networking domain',
    priority: 'Medium',
    topics: [
      { name: 'Quantitative aptitude', weight: 40, note: 'Profit-loss and compound interest' },
      { name: 'Computer networks', weight: 25, note: 'OSI, TCP/IP, sockets for telecom roles' },
      { name: 'Programming fundamentals', weight: 20, note: 'Strings, arrays, recursion' },
      { name: 'Shift and career questions', weight: 15, note: 'Be honest about flexibility' }
    ],
    tip: 'Quant has higher weightage here than at other service companies.'
  }
]

export const universalChecklist = [
  { id: 'c-1', title: 'Carry a second pen and your ID proof', meta: 'Required at every centre-based test' },
  { id: 'c-2', title: 'Screenshot your offer letter and joining letter', meta: 'Keep them ready before the joining deadline' },
  { id: 'c-3', title: 'Keep all marksheets and certificates ready', meta: 'Semester-wise marksheets are asked during verification' },
  { id: 'c-4', title: 'Read your offer email three times', meta: 'Role, CTC, location, bond and joining date' },
  { id: 'c-5', title: 'Apply on the first day of the drive', meta: 'Early applications are processed first' },
  { id: 'c-6', title: 'Ask for a written test pattern before the drive', meta: 'Your placement cell usually has the drive mail' },
  { id: 'c-7', title: 'Never miss a company test slot', meta: 'Some companies do not allow a second slot' },
  { id: 'c-8', title: 'Keep offline copies of everything', meta: 'Interviews sometimes need a document immediately' }
]

export const aptitudeTopicWeightage = [
  { topic: 'Quantitative Aptitude', weight: 30, note: 'Percentage, ratio, profit-loss, time-speed-distance, SI/CI' },
  { topic: 'Logical Reasoning', weight: 25, note: 'Puzzles, seating, syllogism, blood relations, coding-decoding' },
  { topic: 'Verbal Ability', weight: 20, note: 'Grammar, synonyms, reading comprehension, sentence correction' },
  { topic: 'Data Interpretation', weight: 15, note: 'Bar, pie, line and table based questions' },
  { topic: 'Basic Computer Literacy', weight: 10, note: 'Number systems, memory units, output devices' }
]