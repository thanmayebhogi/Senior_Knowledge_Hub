/** Seed community questions. User-created questions live in localStorage. */

export const qaTags = [
  'Aptitude',
  'Coding',
  'Technical',
  'HR',
  'Eligibility',
  'Offers',
  'Logistics',
  'Company Specific'
]

export const seedQuestions = [
  {
    id: 'qa-1',
    title: 'Can I apply to TCS if I have one cleared backlog?',
    body: 'I have one back in my 3rd semester which I have cleared and my marksheet shows "Pass". My current aggregate is 8.1 CGPA. Should I apply for TCS Digital or will they reject me at the eligibility check?',
    author: 'Anushree B.',
    tags: ['Eligibility', 'Company Specific'],
    votes: 24,
    views: 612,
    createdAt: '2026-09-18',
    solved: true,
    answers: [
      {
        id: 'a-1',
        author: 'Rohit S.',
        createdAt: '2026-09-18',
        votes: 31,
        body: 'Cleared backlogs are fine. TCS needs **no active backlogs** at the time you apply. Once the cleared result is published on your university portal, apply normally. Keep the cleared marksheet ready — some drives ask for it during document verification.'
      },
      {
        id: 'a-2',
        author: 'Meghana K.',
        createdAt: '2026-09-19',
        votes: 9,
        body: 'Also check the joining condition: the clearance should be done before the tentative joining date, otherwise the offer gets held.'
      }
    ]
  },
  {
    id: 'qa-2',
    title: 'Is 60% enough for Accenture, or do I need a higher aggregate?',
    body: 'I have exactly 60.8% aggregate with no backlogs. My CGPA is 6.08. I am worried about the section-wise cut-off in the Accenture assessment. Should I still apply?',
    author: 'Vikram J.',
    tags: ['Eligibility', 'Aptitude'],
    votes: 41,
    views: 980,
    createdAt: '2026-09-11',
    solved: true,
    answers: [
      {
        id: 'a-3',
        author: 'Sneha I.',
        createdAt: '2026-09-11',
        votes: 48,
        body: '60.8% clears eligibility. But remember Accenture has **section-wise cut-offs** in Round 2 — you cannot rely on one strong section. Balance your prep across cognitive, technical and common interest. I was at 6.1 CGPA and got selected.'
      }
    ]
  },
  {
    id: 'qa-3',
    title: 'How many TCS iON coding attempts do I get?',
    body: 'I failed the coding section once and I am not sure whether I can retake it. Also, does a failed attempt affect the aptitude score?',
    author: 'Deepak R.',
    tags: ['Coding', 'Company Specific'],
    votes: 33,
    views: 1240,
    createdAt: '2026-09-22',
    solved: true,
    answers: [
      {
        id: 'a-4',
        author: 'Ananya R.',
        createdAt: '2026-09-22',
        votes: 55,
        body: 'The coding section is a separate attempt with **unlimited retries on the practice platform**. For the proctored test, check the drive rules — most drives allow one attempt but let you practise first. The aptitude score is calculated independently, so a coding failure does not zero your aptitude marks.'
      }
    ]
  },
  {
    id: 'qa-4',
    title: 'Which is better as a first offer: TCS 4.2 or Infosys 5.1?',
    body: 'I have two offers. TCS at 4.2 LPA and Infosys at 5.1 LPA. Both are System Engineer profiles. I am confused because some seniors said never join TCS and others said never join Infosys. What should I pick?',
    author: 'Harsha P.',
    tags: ['Offers', 'HR'],
    votes: 67,
    views: 2130,
    createdAt: '2026-09-08',
    solved: false,
    answers: [
      {
        id: 'a-5',
        author: 'Rahul M.',
        createdAt: '2026-09-08',
        votes: 38,
        body: 'Base your decision on three things: CTC, role clarity and location. Infosys 5.1 vs TCS 4.2 is a real difference on paper, but check the variable component before comparing. Also check which company gives you a faster onboarding to a project — that matters more for the first two years.'
      },
      {
        id: 'a-6',
        author: 'Fatima S.',
        createdAt: '2026-09-10',
        votes: 22,
        body: 'You can always try to switch internally after a year. Joining a higher package is usually the better first move because campus-to-campus conversions are easier when your current CTC is lower.'
      }
    ]
  },
  {
    id: 'qa-5',
    title: 'Do Tech Mahindra interviewers ask about shift timings in the first round?',
    body: 'My first round is a technical interview and I have heard that shift questions come early at Tech Mahindra. How should I answer if I cannot do night shifts?',
    author: 'Nikhil A.',
    tags: ['HR', 'Company Specific'],
    votes: 18,
    views: 540,
    createdAt: '2026-09-26',
    solved: true,
    answers: [
      {
        id: 'a-7',
        author: 'Divya P.',
        createdAt: '2026-09-26',
        votes: 26,
        body: 'For telecom and network roles the shift question usually comes in HR. Be honest but frame it as a preference rather than a hard no: "I am comfortable with a rotational shift after the initial training period." Never commit to something you cannot sustain — it shows up as attrition later.'
      }
    ]
  },
  {
    id: 'qa-6',
    title: 'Is the coding section mandatory for Infosys campus drives this year?',
    body: 'My college placement cell said Infosys is only doing the aptitude test this time because they have enough resumes. Is the InfyTQ coding still part of selection?',
    author: 'Pallavi N.',
    tags: ['Coding', 'Company Specific'],
    votes: 29,
    views: 890,
    createdAt: '2026-09-15',
    solved: false,
    answers: [
      {
        id: 'a-8',
        author: 'Aditya V.',
        createdAt: '2026-09-15',
        votes: 19,
        body: 'The InfyTQ pattern has included coding since 2022 and most 2026 drives still have it. Colleges sometimes run a shortened internal test for their own drive, which can drop the coding section — but the company-level test almost always keeps it. Prepare for coding regardless.'
      }
    ]
  },
  {
    id: 'qa-7',
    title: 'How should I answer "why should we hire you" in an HR round?',
    body: 'I always freeze on this question. I have a 8.4 CGPA, two projects and one internship, but I do not know how to connect it to the answer.',
    author: 'Lakshmi R.',
    tags: ['HR', 'Interview Skills'],
    votes: 52,
    views: 1680,
    createdAt: '2026-09-05',
    solved: true,
    answers: [
      {
        id: 'a-9',
        author: 'InterviewPro Team',
        createdAt: '2026-09-05',
        votes: 74,
        body: 'Build the answer in three layers:\n\n1. **Evidence** — "I built a full-stack attendance portal used by 60 students."\n2. **Skill link** — "That taught me how to design schemas and handle authentication, which is exactly what your project needs."\n3. **Company link** — "Your team works on enterprise migration, and that is where I want to grow."\n\nEvidence + link is what separates a strong answer from a generic one.'
      }
    ]
  },
  {
    id: 'qa-8',
    title: 'Do I need a cloud project on my resume for service companies?',
    body: 'I have two web development projects. Service companies mostly ask about core subjects, so is a cloud project necessary? Will it hurt my chances to have only web projects?',
    author: 'Arjun V.',
    tags: ['Technical', 'Coding'],
    votes: 36,
    views: 1110,
    createdAt: '2026-09-20',
    solved: false,
    answers: [
      {
        id: 'a-10',
        author: 'Sneha I.',
        createdAt: '2026-09-20',
        votes: 41,
        body: 'A cloud project is a nice-to-have, not a must. What matters is depth: if you can explain the schema, the authentication flow, and one performance problem you solved, your web projects are strong. Interviewers ask "why this design" far more often than "did you use AWS".'
      }
    ]
  },
  {
    id: 'qa-9',
    title: 'Capgemini section cut-off is 40% — how do I balance my preparation?',
    body: 'My quant is much stronger than verbal. If I only prepare what I am good at, will the 40% section cut-off stop me?',
    author: 'Meera T.',
    tags: ['Aptitude', 'Company Specific'],
    votes: 44,
    views: 1390,
    createdAt: '2026-09-13',
    solved: true,
    answers: [
      {
        id: 'a-11',
        author: 'Manish K.',
        createdAt: '2026-09-13',
        votes: 58,
        body: 'Yes, it will. With a 40% section-wise cut-off, your weakest section decides your result, not your average. I reallocated one full week to verbal — grammar and reading comprehension only — and cleared it with 52%. Practise one mock per day and track section scores separately.'
      }
    ]
  },
  {
    id: 'qa-10',
    title: 'Is a gap year acceptable for Wipro?',
    body: 'I had a one-year gap due to health issues and cleared all backlogs. My aggregate is 7.2. Will Wipro reject my application on the basis of the gap?',
    author: 'Karan S.',
    tags: ['Eligibility'],
    votes: 21,
    views: 720,
    createdAt: '2026-09-24',
    solved: false,
    answers: [
      {
        id: 'a-12',
        author: 'Sneha P.',
        createdAt: '2026-09-24',
        votes: 29,
        body: 'Wipro does not reject on gaps outright, but expect the question in HR. Be factual, brief and explain what you did during the year. If you did any internship, freelance work or a certification, that turns a gap into a plus.'
      }
    ]
  }
]