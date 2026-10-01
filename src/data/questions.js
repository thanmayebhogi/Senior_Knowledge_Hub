/** Company-wise and general interview questions with answers and tips. */

export const categories = [
  'Technical',
  'Data Structures & Algorithms',
  'DBMS & SQL',
  'Computer Networks',
  'Operating Systems',
  'OOPS',
  'Cloud & DevOps',
  'Aptitude',
  'HR & Managerial'
]

export const difficulties = ['Easy', 'Medium', 'Hard']

export const questions = [
  {
    id: 'q-1',
    category: 'Technical',
    companyId: 'tcs',
    difficulty: 'Easy',
    question: 'Explain the difference between a process and a thread.',
    answer:
      'A process is an independent program in execution with its own address space, memory and resources. A thread is a lightweight unit of scheduling inside a process that shares memory, code and files with other threads of the same process.\n\nProcesses are isolated and expensive to create (context switch cost is high), while threads are cheap to create and communicate but need synchronisation because they share data.',
    tips: [
      'Use a real example: Chrome uses one process per tab and multiple threads per tab.',
      'Mention that threads share memory, which is why locking is required.'
    ],
    votes: 412,
    views: 3820
  },
  {
    id: 'q-2',
    category: 'DBMS & SQL',
    companyId: 'infosys',
    difficulty: 'Medium',
    question: 'Write a SQL query to find the second highest salary from an employee table.',
    answer:
      '```sql\nSELECT MAX(salary) AS second_highest\nFROM employee\nWHERE salary < (SELECT MAX(salary) FROM employee);\n```\n\nThis works because the inner query returns the highest salary and the outer query returns the maximum below it. An alternative that handles NULLs is to use ROW_NUMBER() with a window function.',
    tips: ['Handle duplicate salaries — mention the DENSE_RANK alternative.'],
    votes: 388,
    views: 3410
  },
  {
    id: 'q-3',
    category: 'Data Structures & Algorithms',
    companyId: 'accenture',
    difficulty: 'Medium',
    question: 'Write a function to flatten a nested list of integers.',
    answer:
      'Use a stack-based iterative approach to avoid recursion depth problems:\n\n```python\ndef flatten(items):\n    result = []\n    stack = list(items)[::-1]\n    while stack:\n        item = stack.pop()\n        if isinstance(item, list):\n            stack.extend(reversed(item))\n        else:\n            result.append(item)\n    return result\n```\n\nThe iterative version is safe even for deeply nested lists where recursion would hit Python\'s recursion limit.',
    tips: ['Mention time complexity O(n) and space complexity O(n).'],
    votes: 296,
    views: 2240
  },
  {
    id: 'q-4',
    category: 'OOPS',
    companyId: 'deloitte',
    difficulty: 'Medium',
    question: 'What are the four pillars of OOPS? Explain each with an example.',
    answer:
      '1. **Encapsulation** — bundling data and methods in a class and hiding internal state. Example: a BankAccount class where balance is private.\n2. **Abstraction** — exposing only what is necessary. Example: calling car.start() without knowing the engine internals.\n3. **Inheritance** — reusing and extending existing behaviour. Example: SavingsAccount extends Account.\n4. **Polymorphism** — one interface, many implementations. Example: a method that works for both Dog and Cat objects.',
    tips: [
      'Give the banking example consistently across all four pillars — it makes the answer memorable.',
      'For Accenture and Deloitte, add SOLID principles as a follow-up.'
    ],
    votes: 512,
    views: 6230
  },
  {
    id: 'q-5',
    category: 'Computer Networks',
    companyId: 'tech-mahindra',
    difficulty: 'Medium',
    question: 'Explain the OSI model with one protocol at each layer.',
    answer:
      'Layer 7 Application (HTTP, DNS), Layer 6 Presentation (TLS, JPEG), Layer 5 Session (RPC, NetBIOS), Layer 4 Transport (TCP, UDP), Layer 3 Network (IP, BGP, Router), Layer 2 Data Link (Ethernet, Switch, ARP), Layer 1 Physical (cables, hubs, bits).',
    tips: [
      'Remember the mnemonic "All People Seem To Need Data Processing".',
      'Point out that TCP/IP model has 4 layers and the practical mapping to OSI.'
    ],
    votes: 447,
    views: 5110
  },
  {
    id: 'q-6',
    category: 'Technical',
    companyId: 'wipro',
    difficulty: 'Easy',
    question: 'What is a deadlock and what are its four necessary conditions?',
    answer:
      'A deadlock is a situation where two or more processes each wait for a resource held by the other, so none can proceed.\n\nThe four Coffman conditions are:\n1. Mutual exclusion\n2. Hold and wait\n3. No preemption\n4. Circular wait\n\nYou can break a deadlock by removing any one condition — for example, by imposing a total ordering of resource acquisition to remove circular wait.',
    tips: ['Name Coffman — it shows you read beyond the surface level.'],
    votes: 331,
    views: 2980
  },
  {
    id: 'q-7',
    category: 'HR & Managerial',
    companyId: 'accenture',
    difficulty: 'Easy',
    question: 'Why do you want to join Accenture?',
    answer:
      'A strong answer is specific rather than generic. Structure it in three parts:\n\n1. **Company-specific** — "Accenture has strong industry service lines in BFSI and healthcare, and I am interested in the consulting model that turns technology into business outcomes."\n2. **Role-specific** — "The ASE role has a structured learning curve, and I want to build a strong foundation in enterprise delivery."\n3. **Personal** — "During my college project I realised I enjoy solving business problems through technology, which is exactly what consulting does."',
    tips: [
      'Never answer only for the brand name or the CTC.',
      'Mention at least one Accenture service line by name.'
    ],
    votes: 268,
    views: 4120
  },
  {
    id: 'q-8',
    category: 'Aptitude',
    companyId: 'cognizant',
    difficulty: 'Easy',
    question: 'A train travels 360 km at 54 km/h and then 240 km at 36 km/h. What is the average speed?',
    answer:
      'Total distance = 360 + 240 = 600 km.\n\nTime for first part = 360 / 54 = 6.67 hours.\nTime for second part = 240 / 36 = 6.67 hours.\n\nTotal time = 13.33 hours.\n\nAverage speed = 600 / 13.33 ≈ 45 km/h.\n\nThis is a weighted average, not the simple average of 54 and 36 (which would be 45 only by coincidence here).',
    tips: ['Always compute total distance / total time, never average the speeds directly.'],
    votes: 189,
    views: 1760
  },
  {
    id: 'q-9',
    category: 'Cloud & DevOps',
    companyId: 'deloitte',
    difficulty: 'Medium',
    question: 'What are IaaS, PaaS and SaaS? Give an example of each.',
    answer:
      '- **IaaS** — you manage the OS, storage and networking on top of raw compute. Example: AWS EC2 or Azure VMs.\n- **PaaS** — the provider manages the application runtime and you just deploy code. Example: Google App Engine or Heroku.\n- **SaaS** — a finished application you consume. Example: Gmail or Salesforce.',
    tips: ['Mention responsibility boundaries — that is what the interviewer is checking.'],
    votes: 302,
    views: 2540
  },
  {
    id: 'q-10',
    category: 'Technical',
    companyId: 'capgemini',
    difficulty: 'Medium',
    question: 'How would you design a URL shortener?',
    answer:
      '**Core:** generate a short key (base62 encoding of an auto-increment ID, or a hash), store key → long URL in a key-value store, and redirect on lookup.\n\n**Scaling:** put a CDN in front for read-heavy traffic, cache hot keys, and generate keys in batches to avoid a database round-trip per write.\n\n**Reliability:** add a TTL for analytics on clicks, and record click events asynchronously rather than in the request path.',
    tips: [
      'Structure the answer as requirements → API design → storage → scale → reliability.',
      'Interviewers value the structure more than a perfect implementation.'
    ],
    votes: 356,
    views: 3120
  },
  {
    id: 'q-11',
    category: 'Data Structures & Algorithms',
    companyId: 'tcs',
    difficulty: 'Medium',
    question: 'Explain binary search and its time complexity.',
    answer:
      'Binary search works on a sorted collection. It compares the target with the middle element and discards half of the remaining search space each step.\n\n- Best case: O(1) — target is the middle element.\n- Average and worst case: O(log n).\n- Space: O(1) iterative, O(log n) recursive.\n\nThe critical point for interviews: if the array is not sorted, the result is undefined — sorting first makes it O(n log n).',
    tips: ['Show the mid-point calculation clearly; interviewers watch for off-by-one errors.'],
    votes: 421,
    views: 3960
  },
  {
    id: 'q-12',
    category: 'Operating Systems',
    companyId: 'infosys',
    difficulty: 'Hard',
    question: 'What happens when you type a URL in the browser and press Enter?',
    answer:
      '1. Browser checks cache, then resolves the DNS to an IP address.\n2. TCP connection is established (three-way handshake).\n3. TLS handshake happens if it is HTTPS.\n4. Browser sends an HTTP request with headers.\n5. Server responds with status code, headers and body.\n6. Browser renders the HTML, then CSS, then executes JS and makes more requests for resources.\n\nInterviewers often ask you to expand any single step, especially the TCP handshake.',
    tips: ['Draw the three-way handshake if asked: SYN → SYN-ACK → ACK.'],
    votes: 534,
    views: 7040
  },
  {
    id: 'q-13',
    category: 'DBMS & SQL',
    companyId: 'wipro',
    difficulty: 'Medium',
    question: 'Explain normalisation and the normal forms.',
    answer:
      'Normalisation reduces data redundancy and update anomalies by organising tables into forms:\n- **1NF** — atomic values, no repeating groups.\n- **2NF** — 1NF plus no partial dependency on a composite key.\n- **3NF** — 2NF plus no transitive dependency.\n- **BCNF** — every determinant is a candidate key.\n\nIn practice, 3NF is enough for most transactional systems; denormalisation is a deliberate later choice for read performance.',
    tips: ['Give a small example table — it makes the answer concrete.'],
    votes: 298,
    views: 2430
  },
  {
    id: 'q-14',
    category: 'Technical',
    companyId: 'accenture',
    difficulty: 'Hard',
    question: 'Explain SOLID principles with a practical example.',
    answer:
      '- **S**ingle responsibility — a class should have one reason to change.\n- **O**pen/closed — open for extension, closed for modification.\n- **L**iskov substitution — subclasses must be usable wherever the parent is.\n- **I**nterface segregation — prefer small, focused interfaces.\n- **D**ependency inversion — depend on abstractions, not concrete classes.\n\nExample: instead of one OrderProcessor that handles validation, payment and notifications, split them into three services injected into an OrderProcessor, so adding a new payment provider does not modify existing code.',
    tips: ['Practical examples matter — pure definitions rarely score well.'],
    votes: 377,
    views: 3290
  },
  {
    id: 'q-15',
    category: 'HR & Managerial',
    companyId: 'deloitte',
    difficulty: 'Medium',
    question: 'Tell me about a time you failed. What did you learn?',
    answer:
      'Use a genuine, low-stakes failure with a clear lesson.\n\nTemplate:\n**Situation:** In a 3-member college project, I owned the backend module and we were 4 days from the deadline.\n**Task:** I had to deliver and integrate the API.\n**Action:** I underestimated the schema design and skipped unit tests for two days.\n**Result:** Integration failed for 8 hours on submission day.\n**Lesson:** I now write the schema and API contract first, test every day, and flag risk early. I have not missed a milestone since.',
    tips: [
      'Never pick a failure that shows you carelessness about core responsibilities.',
      'End with a concrete change in your behaviour, not an apology.'
    ],
    votes: 291,
    views: 2670
  },
  {
    id: 'q-16',
    category: 'Aptitude',
    companyId: 'tech-mahindra',
    difficulty: 'Medium',
    question: 'The ratio of boys to girls in a class is 3:4. If there are 12 more girls than boys, find the total strength.',
    answer:
      'Ratio difference = 4 − 3 = 1 part = 12 students.\n\nBoys = 3 × 12 = 36, Girls = 4 × 12 = 48.\n\nTotal = 36 + 48 = 84 students.',
    tips: ['Shortcuts like this are the fastest route in a time-bound test.'],
    votes: 214,
    views: 1920
  },
  {
    id: 'q-17',
    category: 'Data Structures & Algorithms',
    companyId: 'cognizant',
    difficulty: 'Easy',
    question: 'Write a program to check whether a string is a palindrome, ignoring case.',
    answer:
      '```java\nstatic boolean isPalindrome(String s) {\n    String clean = s.toLowerCase().replaceAll("[^a-z0-9]", "");\n    int left = 0, right = clean.length() - 1;\n    while (left < right) {\n        if (clean.charAt(left++) != clean.charAt(right--)) return false;\n    }\n    return true;\n}\n```\n\nTime complexity O(n), space complexity O(n) because of the cleaned copy.',
    tips: ['Mention both the clean-copy and the in-place two-pointer approaches.'],
    votes: 322,
    views: 2810
  },
  {
    id: 'q-18',
    category: 'Cloud & DevOps',
    companyId: 'capgemini',
    difficulty: 'Medium',
    question: 'What is CI/CD and why does it reduce release risk?',
    answer:
      'CI merges small code changes frequently and runs automated build and test pipelines for each merge. CD extends this to automatically deploy the tested build to staging or production.\n\nIt reduces risk because bugs are caught within minutes of a commit rather than at release time, deployments become small and reversible, and the team always has a validated artifact ready to ship.',
    tips: ['Mention that a rollback is as simple as redeploying the previous artifact.'],
    votes: 264,
    views: 2150
  },
  {
    id: 'q-19',
    category: 'OOPS',
    companyId: 'infosys',
    difficulty: 'Easy',
    question: 'What is the difference between an abstract class and an interface?',
    answer:
      'An abstract class can contain implemented methods, fields and constructors, and a class can extend only one abstract class. An interface historically contains only abstract methods (Java 8+ allows default and static methods), and a class can implement multiple interfaces.\n\nUse an abstract class when there is shared code and an "is-a" relationship; use an interface to define a capability ("can do") contract.',
    tips: ['Mention Java 8 default methods to show you are current.'],
    votes: 405,
    views: 4180
  },
  {
    id: 'q-20',
    category: 'Technical',
    companyId: 'deloitte',
    difficulty: 'Hard',
    question: 'How would you analyse a drop in customer retention?',
    answer:
      '1. **Define the metric precisely** — is it logo churn, revenue churn or net revenue retention?\n2. **Segment** — by plan, tenure, industry, geography and acquisition channel to find where the drop is concentrated.\n3. **Cohort analysis** — check whether specific onboarding cohorts retain worse than others.\n4. **Hypothesise** — pricing change, product outage, support response times, competitor pricing.\n5. **Validate with data** — cohort retention curves, support ticket volume, NPS by segment.\n6. **Recommend and monitor** — targeted intervention for the worst segment, with a retention KPI to track it.',
    tips: ['Structure as define → segment → diagnose → validate → recommend.'],
    votes: 348,
    views: 3010
  },
  {
    id: 'q-21',
    category: 'Computer Networks',
    companyId: 'tcs',
    difficulty: 'Easy',
    question: 'What is the difference between TCP and UDP?',
    answer:
      'TCP is connection-oriented, reliable and ordered — it uses a three-way handshake, sequence numbers, acknowledgements and retransmission. UDP is connectionless and best-effort — no handshake, no ordering guarantee, no retransmission.\n\nUse TCP for HTTP/HTTPS, email and file transfer where correctness matters. Use UDP for live streaming, VoIP and online games where latency matters more than a lost packet.',
    tips: ['Always pair the protocol with a use case; that is the part interviewers grade.'],
    votes: 396,
    views: 3720
  },
  {
    id: 'q-22',
    category: 'HR & Managerial',
    companyId: 'capgemini',
    difficulty: 'Easy',
    question: 'What is your expected CTC?',
    answer:
      'Give a number with a market range, and be ready to justify it:\n\n"I am targeting around 5.5 LPA based on my skills and the standard package for a fresher at this company. I am open to discussing based on the overall package structure, including the variable component and insurance."\n\nAvoid saying "whatever you offer" — it reads as no preparation. Also avoid a number so high that it ends the negotiation.',
    tips: ['Research the company package range the same week as your interview.'],
    votes: 178,
    views: 2540
  },
  {
    id: 'q-23',
    category: 'Operating Systems',
    companyId: 'wipro',
    difficulty: 'Medium',
    question: 'What is virtual memory and what happens on a page fault?',
    answer:
      'Virtual memory lets a process use an address space larger than physical RAM by mapping virtual addresses to disk pages.\n\nOn a page fault the MMU finds the page is not in physical memory, so the OS:\n1. Finds a free frame or evicts a page using a replacement policy (LRU, FIFO).\n2. Loads the required page from disk.\n3. Updates the page table.\n4. Restarts the instruction that caused the fault.',
    tips: ['Mention that a TLB miss also triggers a page table walk.'],
    votes: 273,
    views: 2260
  },
  {
    id: 'q-24',
    category: 'Aptitude',
    companyId: 'accenture',
    difficulty: 'Hard',
    question: 'Complete the analogy: Pilot : Aircraft :: Captain : ?',
    answer:
      'Ship. A pilot operates an aircraft and a captain operates a ship — the relationship is "operator to vehicle", and both are senior operating roles in transportation.',
    tips: ['Identify the relationship type first (role → vehicle), then match it.'],
    votes: 162,
    views: 1340
  }
]

export const questionById = (id) => questions.find((question) => question.id === id)

export const questionsByCompany = (companyId) =>
  questions.filter((question) => question.companyId === companyId)