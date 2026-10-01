/** Senior (final-year student) interview experiences, company-wise. */

export const experiences = [
  {
    id: 'exp-1',
    companyId: 'tcs',
    company: 'TCS',
    role: 'System Engineer',
    author: 'Ananya Rao',
    branch: 'CSE · 8.6 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 4,
    postedAt: '2026-08-14',
    tags: ['NQT', 'iON', 'Digital'],
    rounds: [
      {
        round: 'Aptitude (iON)',
        score: '72%',
        experience:
          'Foundation section was straightforward. I finished 20 questions in 40 minutes. The advanced quant had a few questions on probability and time-speed-distance that took longer than expected. Overall, if you clear the Foundation with 80% accuracy the rest is manageable.'
      },
      {
        round: 'Coding (iON)',
        score: 'Full marks',
        experience:
          'They asked for a function that returns the remainder of Fermat theorem. I wrote the loop version first and then optimised it. The compiler accepted the answer but took nearly the full 30 minutes because I kept testing edge cases.'
      },
      {
        round: 'Technical Interview',
        score: 'Clear',
        experience:
          'One interviewer went deep into my mini-project. She asked why I chose MongoDB over MySQL and what would happen if the server went down. Another interviewer asked normalising a table and the difference between a process and a thread. Be ready for project depth questions.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Ten minutes. Salary expectation, location flexibility, notice period. I said 5.5 LPA and that I was open to any city. They did not negotiate much.'
      }
    ],
    takeaways: [
      'Revise NQT advanced quant — probability and averages are where most people lose marks.',
      'Know your project architecture deeply, including the failure cases.',
      'iON coding can be attempted multiple times; use the practice platform first.'
    ],
    helpful: 312
  },
  {
    id: 'exp-2',
    companyId: 'infosys',
    company: 'Infosys',
    role: 'Systems Engineer',
    author: 'Rahul Menon',
    branch: 'IT · 7.9 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 4,
    postedAt: '2026-09-02',
    tags: ['InfyTQ', 'Java', 'Campus'],
    rounds: [
      {
        round: 'InfyTQ',
        score: '68%',
        experience:
          'First 60 minutes covered quant, logical and verbal. I finished with two minutes left and switched to coding. The coding questions were a duplicate removal problem and a "second largest number". My first attempt compiled with a NullPointerException on the empty-array case, which cost me partial marks.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'Asked about ArrayList vs LinkedList, exception handling and a SQL query to find the third highest salary. They also asked about a personal project. I could answer everything because I had revised the Java collection framework.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Very short round. They mainly asked about location and joining date. I was clear about my preference for Bengaluru.'
      }
    ],
    takeaways: [
      'Handle the empty input case in coding tests — Infosys tests it.',
      'The InfyTQ quant is repeated from previous papers; practice previous sets twice.',
      'Revise the Java collection framework one day before the interview.'
    ],
    helpful: 264
  },
  {
    id: 'exp-3',
    companyId: 'accenture',
    company: 'Accenture',
    role: 'Associate Software Engineer',
    author: 'Sneha Iyer',
    branch: 'ECE · 8.2 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 5,
    postedAt: '2026-08-28',
    tags: ['Assessment', 'Switchback', 'Tech'],
    rounds: [
      {
        round: 'Assessment Round 1',
        score: '55%',
        experience:
          'Cognitive section had switchback reasoning, which is a 2x2 grid where you select the right view. I scored poorly here initially. After practising 40 questions, I improved. Technical reasoning had pseudocode and circuit questions.'
      },
      {
        round: 'Assessment Round 2',
        score: '52%',
        experience:
          'Coding section needed pseudocode, not real code. Section-wise cut-off applied, so I had to be balanced. Cloud and network multiple-choice questions were straightforward from general awareness.'
      },
      {
        round: 'Technical Interview',
        score: 'Clear',
        experience:
          'Live coding: flatten a nested list. Then a discussion on microservices migration and SOLID principles. The interviewer was very supportive and cared more about how I thought than whether I got it right.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'They asked why consulting and not engineering. I used a story about a client-facing college project. This was the most important question of the round.'
      }
    ],
    takeaways: [
      'Practise switchback reasoning separately — it is unique to Accenture.',
      'Section-wise cut-off means balance beats specialisation.',
      'Have a client-facing story ready for the consulting question.'
    ],
    helpful: 428
  },
  {
    id: 'exp-4',
    companyId: 'deloitte',
    company: 'Deloitte',
    role: 'Analyst',
    author: 'Karthik Subramanyam',
    branch: 'CSE · 8.9 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 5,
    postedAt: '2026-09-11',
    tags: ['DNET', 'Business Case', 'Analyst'],
    rounds: [
      {
        round: 'DNET',
        score: '81%',
        experience:
          'Quant was the deciding factor. I spent most of my prep on ratios, time-speed-distance and compound interest. Verbal was easy. Logical had a few statement-conclusion questions that needed careful reading.'
      },
      {
        round: 'Business Case',
        score: 'Shortlisted',
        experience:
          'We were given a dataset of a retail client with falling sales and had to write a recommendation. I used an issue tree: revenue = customers × orders × average order value. The judges rewarded clean structure over fancy charts.'
      },
      {
        round: 'Technical / Domain',
        score: 'Clear',
        experience:
          'Asked how I would analyse the data retention problem and write a SQL query. I explained cohort analysis. They asked about my project and the trade-off I made in the design.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Three stories: a failure I learned from, a conflict I resolved, and a leadership moment. I also answered "why Deloitte" with a specific reference to their Audit & Consulting practice.'
      }
    ],
    takeaways: [
      'Quant is the whole battle at Deloitte — do not neglect it.',
      'Structure matters more than decoration in the business case.',
      'Prepare STAR stories well in advance; they are reused across rounds.'
    ],
    helpful: 517
  },
  {
    id: 'exp-5',
    companyId: 'cognizant',
    company: 'Cognizant',
    role: 'Programmer Analyst',
    author: 'Pooja Deshmukh',
    branch: 'CSE · 7.4 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 3,
    postedAt: '2026-07-30',
    tags: ['GenC', 'Voice', 'Aptitude'],
    rounds: [
      {
        round: 'Aptitude',
        score: '64%',
        experience:
          'English grammar was harder than I expected. Data interpretation with a bar chart needed two minutes per question, which was a trap. I finished with about 5 questions unanswered.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'A SQL join question on the spot, then OOPS basics. The interviewer typed the SQL himself, so I just narrated the query.'
      },
      {
        round: 'Voice / HR',
        score: 'Clear',
        experience:
          'They asked me to read a paragraph aloud and answer two questions about it. Pronunciation mattered more than content. Clear, slow speech worked well.'
      }
    ],
    takeaways: [
      'Practice English grammar and reading comprehension — it is 40% of the paper.',
      'Do not spend too long on a single DI question.',
      'For the voice process, slow down and enunciate clearly.'
    ],
    helpful: 189
  },
  {
    id: 'exp-6',
    companyId: 'capgemini',
    company: 'Capgemini',
    role: 'Software Engineer',
    author: 'Manish Kumar',
    branch: 'CSE · 8.1 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 3,
    postedAt: '2026-08-05',
    tags: ['Bzzirt', 'Campus', 'Fresher'],
    rounds: [
      {
        round: 'Common Test',
        score: '58%',
        experience:
          'Section-wise cut-off of 40%. My verbal was weak, so I deliberately spent extra time there instead of grinding quant. Each section needs 40% on its own.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'Question on deadlock conditions and a small C function. Straightforward if you have revised subjects properly.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Asked about notice period and whether I would accept the joining date in the offer. I said yes. Selection came through in 5 days.'
      }
    ],
    takeaways: [
      'Answer every section to clear the 40% section cut-off.',
      'Revise semester subjects — Capgemini questions are syllabus-driven.',
      'A quick turnaround from test to offer; do not lose the joining window.'
    ],
    helpful: 176
  },
  {
    id: 'exp-7',
    companyId: 'tech-mahindra',
    company: 'Tech Mahindra',
    role: 'Associate Software Engineer',
    author: 'Divya Prakash',
    branch: 'ECE · 7.8 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 4,
    postedAt: '2026-09-18',
    tags: ['Symbo', 'Telecom', 'Networking'],
    rounds: [
      {
        round: 'Symbo Test',
        score: '66%',
        experience:
          'Quant was longer than the other companies. I focused on profit-loss and compound interest and scored well there, which compensated for a weaker verbal section.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'Because they had a telecom role open, they asked about the OSI model and what a socket is. I had prepared two networking projects, which made this easy. For general profiles, expect standard DSA and DBMS.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Asked whether I was comfortable with shift timings, which I answered honestly. They also asked about my career plan over the next 5 years.'
      }
    ],
    takeaways: [
      'Quant has higher weightage at Tech Mahindra than peers.',
      'A networking or telecom project gives you a big advantage in the technical round.',
      'Be honest about shift flexibility; they value it highly.'
    ],
    helpful: 208
  },
  {
    id: 'exp-8',
    companyId: 'wipro',
    company: 'Wipro',
    role: 'Project Engineer',
    author: 'Sneha Patil',
    branch: 'CSE · 8.4 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 4,
    postedAt: '2026-07-22',
    tags: ['ELITE', 'Pseudocode', 'Fresher'],
    rounds: [
      {
        round: 'Online Assessment',
        score: '70%',
        experience:
          'The personality section had situational questions like "how do you feel when your idea is rejected". Answering honestly and consistently scored well. Codility pseudocode questions were the surprise element.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'Asked to write a flowchart for a vowel-counting program before any real code. Then normal OOPS and DBMS questions. The syllabus-driven nature made revision valuable.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Short round. They asked about my internship and my expected CTC. I said 5.2 LPA and they matched it.'
      }
    ],
    takeaways: [
      'Practise pseudocode and flowchart questions — they appear more often than expected.',
      'Answer personality questions consistently; contradiction is spotted easily.',
      'Internship projects are strong HR-round material.'
    ],
    helpful: 143
  },
  {
    id: 'exp-9',
    companyId: 'infosys',
    company: 'Infosys',
    role: 'System Engineer Trainee',
    author: 'Aditya Verma',
    branch: 'ECE · 6.9 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 3,
    postedAt: '2026-09-25',
    tags: ['InfyTQ', 'Second attempt'],
    rounds: [
      {
        round: 'InfyTQ',
        score: '61%',
        experience:
          'My first attempt scored 48% because I ran out of time on quant. On the second attempt I followed a strict 18-minute-per-section plan and scored 61%. Practice papers with a timer made the difference.'
      },
      {
        round: 'Technical',
        score: 'Clear',
        experience:
          'Because of a low aggregate they asked easier core questions and focused more on my project. I was honest about my weak areas and it worked in my favour.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Standard round. Mentioned my preference for Hyderabad. Selected the same week.'
      }
    ],
    takeaways: [
      'Timed practice is worth more than one more revision of theory.',
      'Honesty about weak areas can help in the technical round.',
      'A second attempt at InfyTQ is a normal strategy — prepare for it properly.'
    ],
    helpful: 231
  },
  {
    id: 'exp-10',
    companyId: 'tcs',
    company: 'TCS',
    role: 'System Analyst (Digital Profile)',
    author: 'Fatima Sheikh',
    branch: 'CSE · 8.8 CGPA',
    batch: '2026',
    outcome: 'Selected',
    rating: 5,
    postedAt: '2026-09-29',
    tags: ['Digital', 'Higher package', 'Onsite'],
    rounds: [
      {
        round: 'Aptitude',
        score: '78%',
        experience:
          'Cleared with a good margin, which allowed me to opt for the digital profile pool where packages start higher.'
      },
      {
        round: 'Coding',
        score: 'Full marks',
        experience:
          'A string manipulation problem — reverse each word of a sentence. Solved it in one attempt with a clean approach.'
      },
      {
        round: 'Technical Interview',
        score: 'Clear',
        experience:
          'Asked to design a small full-stack application in 10 minutes and explain the data model. They value design thinking, not just syntax.'
      },
      {
        round: 'HR',
        score: 'Clear',
        experience:
          'Explained my career interest in cloud engineering and was offered the digital role.'
      }
    ],
    takeaways: [
      'Clearing aptitude with margin can unlock higher digital packages.',
      'Be ready to sketch a design, not just write code.',
      'A strong technical score plus a clear career story upgrades your offer.'
    ],
    helpful: 356
  }
]

export const experienceByCompany = (companyId) =>
  experiences.filter((experience) => experience.companyId === companyId)

export const selectedExperiences = experiences.filter((experience) => experience.outcome === 'Selected')