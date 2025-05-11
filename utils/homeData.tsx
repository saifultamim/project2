

export const courses = [
  {
    id: 1,
    xitemcode: "DB103",
    xdesc: "Data Structure & Algorithom",
    ximage: "/images/home/courses/algorithom.png",
    xstdprice: "6000",
    xmrp: 7500,
  },

   {
    id: 2,
    xitemcode: "DB106",
    xdesc: "Web Development",
    ximage: "/images/home/courses/algorithom.png",
    xstdprice: "60050",
    xmrp: 745500,
  },
  {
    id: 3,
    xitemcode: "DSA103",
    xdesc: "Research Workshop",
    ximage: "/images/home/courses/pythonResearch.jpg",
    xstdprice: "7000",
    xmrp: 85500,
  },

    {
    id: 4,
    xitemcode: "CSE103",
    xdesc: "Video Editing",
    ximage: "/images/home/courses/pythonResearch.jpg",
    xstdprice: "7000",
    xmrp: 85500,
  },
];

export const courseDetails = [
   {
    xitemid: 1,
    xitemcode: "CSE105",
    xdesc: "Data Structure & Algorithom",
    xprice:9200,
    xlongdesc:
      "",
    xcat: "Security",
    ximage: "/images/home/courses/algorithom.png",
    learningOutCome: {
      whatYouLearn: [
      
        {details : (<><span className='text-2xl text-red-600 font-bold'>Basic Data Structures</span></>) },
        {
          details:
            "Array - 1D & 2D Arrays, Operations (Insertion, Deletion, Traversal), Subarrays & Prefix Sum",
        },
        {
          details:
            "String - Basic Operations (Concatenation, Substring), String Manipulation Problems",
        },
        {
          details:
            "Linked Lists - Singly & Doubly Linked Lists, Basic Operations (Insert, Delete, Reverse)",
        },
        {
          details:
            "Stack & Queue - LIFO & FIFO Principles, Implementations (Array/Linked List), Applications (Parentheses Matching, BFS)",
        },
        {
          details:
            "Hash Tables - Hashing Basics, Collision Handling (Chaining, Open Addressing), Frequency Counting Problems",
        },
        {details : (<><span className='text-2xl text-red-600 font-bold'>Basic Algorithms</span></>)},
        {
          details:
            "Sorting Algorithms - Bubble, Selection, Insertion Sort, Merge Sort & Quick Sort (Divide & Conquer)",
        },
        {
          details:
            "Searching Algorithms - Linear & Binary Search, Lower/Upper Bound (for sorted arrays)",
        },
        {
          details:
            "Recursion - Basics (Factorial, Fibonacci), Backtracking (Permutations, Subsets)",
        },
        {
          details:
            "Sliding Window - Fixed/Variable Size Window Problems, Example: Maximum Subarray Sum of Size k",
        },
        { details:  (<><span className='text-2xl text-red-600 font-bold'>Early Intermediate Topics</span></>) },
        {
          details:
            " Binary Trees - Tree Traversals (Inorder, Preorder, Postorder), Level Order Traversal (BFS), Basic Problems (Height, Diameter)",
        },
        {
          details:
            "Binary Search Trees (BST) - Insert/Search/Delete, Inorder Successor/Predecessor",
        },
        {
          details:
            "Heaps (Priority Queues) - Min-Heap & Max-Heap, Heapify Algorithm, Top-K Elements Problem",
        },
        {
          details:
            "Graph Basics - Representations (Adjacency List/Matrix), BFS & DFS Traversals, Cycle Detection (Undirected/Directed Graphs)",
        },
        {
          details:
            "Greedy Algorithms - Activity Selection, Fractional Knapsack, Coin Change Problem (Greedy vs DP)",
        },
        {
          details:
            "Dynamic Programming (Intro) - Memoization vs Tabulation, Classic Problems (Fibonacci, Climbing Stairs)",
        },
        { details: (<><span className='text-2xl text-red-600 font-bold'>Problem-Solving Techniques</span></>)},
        { details: "Two Pointers - Pair Sum, Remove Duplicates" },
        { details: "Prefix Sum & Suffix Sum - Range Sum Queries" },
        { details: "Bit Manipulation - Basic Operations (AND/OR/XOR), Counting Set Bits" },
        { details: "Math for DSA - Prime Numbers, GCD/LCM, Modulo Arithmetic" },
      ],
      requirements: [
        { details: "Basic knowledge of C++" },
        { details: "Must have PC or Laptop" },
      ],
    },
    expectations: [
      { title: " Improved Problem-Solving Skills" },
      { title: "Strong Coding Foundation" },
      { title: "Helps in clearing coding rounds of top companies like Google, Meta, Amazon, etc." },
      { title: "Essential for participating in contests like Codeforces, LeetCode, etc." },
      { title: "Confidence in Coding Challenges" },
      { title: "Proficiency in DSA makes your resume stand out." },
      { title: "Better Academic Performance" },
    ],
    courseFAQ: [
      {
        question: "Do I need prior DSA knowledge?",
        answer:
          "No, this course starts from basic DSA",
      },
      {
        question: "Which language is used?",
        answer: "This course used C++ language ",
      },
      {
        question:
          "How long is the course?",
        answer: "The course will be continue 6-8 weeks ",
      },
    ],
  },
  {
    xitemid: 2,
    xitemcode: "CSE105",
    xdesc: "Web development",
    xprice:9200,
    xlongdesc:
      "",
    xcat: "Security",
    ximage: "/images/home/courses/algorithom.png",
    learningOutCome: {
      whatYouLearn: [
      {details: (<><span className='text-2xl text-red-600 font-bold'>JavaScript & TypeScript Fundamentals</span></>)},
      {details: "ES6+ Features: Arrow functions, Destructuring, Spread/Rest operators"},
      {details: "TypeScript: Static typing, Interfaces, Generics, Decorators"},
      {details: "Asynchronous Programming: Promises, Async/Await, Event Loop"},
      {details: "Modules and Dependency Management with npm/yarn"},
      
      {details: (<><span className='text-2xl text-red-600 font-bold'>NestJS Core Concepts</span></>)},
      {details: "Architecture: Modules, Controllers, Providers, Dependency Injection"},
      {details: "Decorators: Route handlers, Param extraction, Metadata"},
      {details: "Pipes: Transformation and Validation (class-validator, class-transformer)"},
      {details: "Interceptors: Response mapping, Exception transformation"},
      {details: "Guards: Authentication, Role-based access control"},
      
      {details: (<><span className='text-2xl text-red-600 font-bold'>Database Integration</span></>)},
      {details: "TypeORM: Entities, Repositories, Relationships (1:1, 1:M, M:M)"},
      {details: "Migrations: Schema synchronization and version control"},
      {details: "Query Builder: Complex queries and transactions"},
      {details: "PostgreSQL: Setup, configuration, and optimization"},
      
      {details: (<><span className='text-2xl text-red-600 font-bold'>Authentication & Security</span></>)},
      {details: "JWT: Implementation, Token refresh strategy"},
      {details: "Session Management: Redis-based sessions"},
      {details: "Cookies: Secure cookie settings, CSRF protection"},
      {details: "Password Hashing: bcrypt, argon2"},
      {details: "OAuth: Social login integration (Google, Facebook)"},
      
      {details: (<><span className='text-2xl text-red-600 font-bold'>Advanced Features</span></>)},
      {details: "File Uploads: Multipart/form-data handling, Cloud storage"},
      {details: "Real-time Communication: WebSockets with Socket.io"},
      {details: "Task Scheduling: Cron jobs, Queues"},
      {details: "Mailing: Nodemailer integration, templates"},
      {details: "API Documentation: Swagger/OpenAPI setup"},
      {details: "Testing: Unit tests, E2E tests with Jest"}

       
      ],
      requirements: [
         { details: "Basic understanding of HTML, CSS, JavaScript" },
      { details: "Familiarity with any programming language is a plus" },
      { details: "Must have PC or Laptop with internet access" }
      ],
    },
    expectations: [
       { title: "Become confident in building scalable backend systems" },
    { title: "Hands-on knowledge of NestJS and modern backend architecture" },
    { title: "Improve understanding of authentication, database modeling, and best practices" },
    { title: "Enhance employability with strong full stack skills" },
    { title: "Deploy real-world applications with secure and efficient practices" },
    ],
    courseFAQ: [
      {
      question: "Do I need prior knowledge of TypeScript?",
      answer: "No, TypeScript fundamentals will be taught at the beginning of the course.",
    },
    {
      question: "Is this course beginner-friendly?",
      answer: "Yes, it's designed for beginners with some basic programming knowledge.",
    },
    {
      question: "How long is the course?",
      answer: "The course runs for approximately 8-10 weeks with weekly assignments and projects.",
    },
    ],
  },
  {
    xitemid: 3,
    xitemcode: "DSA103",
    xdesc: "Research Workshop",
    xprice:5000,
    xlongdesc:
      "",
    xcat: "Data Science",
    ximage: "/images/home/courses/pythonResearch.jpg",
    learningOutCome: {
      whatYouLearn: [
        { details: "Foundations of Research,Differences between qualitative, quantitative, and mixed methods" },
        { details: "Formulating Research Questions, How to identify research problems and hypotheses, Literature review techniques" },
        { details: "Research Design, Experimental, descriptive, case study, and survey designs, Sampling methods and techniques" },
        { details: "Data Collection, Tools like surveys, interviews, observations, and experiments, Ethical considerations in data collection" },
        { details: "Data Analysis, Basic statistical methods " },
        { details: "Writing and Presenting Research, Structure of research papers, reports, and theses" },
        { details: "Understand basic machine learning concepts" },
      ],
      requirements: [
        { details: "basic knowledge of any programming language" },
        { details: "python is plus point" },
      ],
    },
    expectations: [
      { title: "Familiarity with research methodology, tools like colab, github, hugging face, TensorFlow, PyTorch, etc." },
      { title: "Collaboration with researchers at US, Norway, Japan, Qatar, Saudi Arabia, etc." },
      { title: "1 paper published in an international journal/conferences." },
    ],
    courseFAQ: [
      {
        question: "Why is learning it important?",
        answer: "It helps you develop critical thinking, make evidence-based decisions, and carry out structured investigations—skills valuable in both academic and professional settings.",
      },
      {
        question: "How does it benefit students?",
        answer: "It prepares students to write better research papers, theses, and dissertations, and helps in understanding and critiquing scholarly work.",
      },
      {
        question: "What soft skills will I gain?",
        answer: "Analytical thinking, problem-solving, attention to detail, and independent learning are key skills developed through studying research methods.",
      },
    ],
  },
 {
    xitemid: 4,
    xitemcode: "CSE103",
    xdesc: "Video Editing",
    xprice:5000,
    xlongdesc:
      "",
    xcat: "video editing",
    ximage: "/images/home/courses/pythonResearch.jpg",
    learningOutCome: {
      whatYouLearn: [
      
      ],
      requirements: [
       
      ],
    },
    expectations: [
   
    ],
    courseFAQ: [
      
    ],
  },
];



