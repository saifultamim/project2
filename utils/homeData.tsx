export const courses = [
  {
    id: 1,
    xitemcode: "DB103",
    xdesc: "Data Structure & Algorithom",
    ximage: "/images/home/courses/algorithom.png",
    xstdprice: "10000",
    xmrp: 6500,
  },

  {
    id: 2,
    xitemcode: "DB106",
    xdesc: "Advanced Web Development",
    ximage: "/images/home/courses/web.jpg",
    xstdprice: "10000",
    xmrp: 6000,
  },
  {
    id: 3,
    xitemcode: "DSA103",
    xdesc: "Research Workshop",
    ximage: "/images/home/courses/researchWorkshop.jpg",
    xstdprice: "15000",
    xmrp: 10000,
  },

  {
    id: 4,
    xitemcode: "CSE103",
    xdesc: "Video Editing",
    ximage: "/images/home/courses/videoEditing.jpg",
    xstdprice: "7000",
    xmrp: 4000,
  },
];

export const courseDetails = [
  {
    xitemid: 1,
    xitemcode: "CSE105",
    xdesc: "Data Structure & Algorithom",
    xprice: 6500,
    xlongdesc: "",
    xcat: "Security",
    ximage: "/images/home/courses/algorithom.png",
    learningOutCome: {
      whatYouLearn: [
        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Basic Data Structures
              </span>
            </>
          ),
        },
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
        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Basic Algorithms
              </span>
            </>
          ),
        },
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
        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Early Intermediate Topics
              </span>
            </>
          ),
        },
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
        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Problem-Solving Techniques
              </span>
            </>
          ),
        },
        { details: "Two Pointers - Pair Sum, Remove Duplicates" },
        { details: "Prefix Sum & Suffix Sum - Range Sum Queries" },
        {
          details:
            "Bit Manipulation - Basic Operations (AND/OR/XOR), Counting Set Bits",
        },
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
      {
        title:
          "Helps in clearing coding rounds of top companies like Google, Meta, Amazon, etc.",
      },
      {
        title:
          "Essential for participating in contests like Codeforces, LeetCode, etc.",
      },
      { title: "Confidence in Coding Challenges" },
      { title: "Proficiency in DSA makes your resume stand out." },
      { title: "Better Academic Performance" },
    ],
    courseFAQ: [
      {
        question: "Do I need prior DSA knowledge?",
        answer: "No, this course starts from basic DSA",
      },
      {
        question: "Which language is used?",
        answer: "This course used C++ language ",
      },
      {
        question: "How long is the course?",
        answer: "The course will be continue 6-8 weeks ",
      },
    ],
  },
  {
    xitemid: 2,
    xitemcode: "CSE105",
    xdesc: "Advanced Web development",
    xprice: 6000,
    xlongdesc: "",
    xcat: "Security",
    ximage: "/images/home/courses/web.jpg",
    learningOutCome: {
      whatYouLearn: [
        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Basic React & Tailwind CSS
              </span>
            </>
          ),
        },
        {
          details:
            "What is Reat,component,component types, build your first component",
        },
        {
          details:
            "JSX, its rules and add dynamic content to JSX in your first component",
        },
        { details: "Explore JSX and Props basics" },
        { details: "Prop types and how to pass/read a prop" },
        { details: "Read only props Two way of conditional rendering" },
        {
          details:
            "Six ways to do Conditional Rendering: If, Ternary and AND OR",
        },
        { details: "(advanced) Rendering lists of users using map" },
        { details: "Introduction and Vite Project Overview" },
        { details: "Different way to handle events in React" },
        { details: "A simple Introduction to State change in React" },
        { details: "Understand the concept of useState and react hooks" },
        { details: "(Advanced) Understand the concept of useEffect" },
        { details: "Load dynamic data, API call useEffect integrate state" },
        { details: "Core Concepts Components, State, useEffect" },
        { details: "What is SPA, routing and react router setup" },
        { details: "Explain Nested Route concepts" },
        { details: "Nested Route and Use Link, outlet" },
        { details: "Load data on route using loader and useLoaderData" },
        { details: "Dynamic Route with params and load single user data" },
        { details: "Dynamic Route, params and load dynamic data" },
        { details: "Navigate on Click, useNavigate, Not Found and useParams" },
        {
          details: "Active route, Loading Spinner, useLocation, useNavigation",
        },
         {
          details: "Tailwind CSS",
        },

        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Next JS Core Concepts & Basic TypeScript
              </span>
            </>
          ),
        },
        { details: "Introduction to Next JS" },
        { details: "concept of pre-rendering and client side rendering" },
        {
          details:
            "Create my first Next.Js app. Explore its file and folder structure.",
        },
        { details: "Basic routing concept and nested routing,File Structure" },
        { details: "Exploring dynamic routes and catch all routes" },
        { details: "Explore group routing with different layout" },
        { details: "Navigation with link component & create built-in routes" },
        { details: "Optimize image using Image Component" },
        { details: "Optimize Image and fonts in Next" },
        { details: "Use metadata for better SEO and Import alias" },
        {
          details:
            "Client Side Rendering(CSR) ,static side generation(SSG),server side rendering(SSR),Incremental Static Regeneration (ISR)",
        },
        {
          details:
            "Handle global errors with built-in error page,loading,not-found page",
        },
          {
          details:
            "Basic Types,Arrays and Tuples",
        },
          {
          details:
            "Objects & Type Aliases,Functions",
        },
        {
          details:
            "Union & Intersection Types,Interfaces,Enums",
        },
      

        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Nest JS Core Concepts
              </span>
            </>
          ),
        },
        {
          details:
            "Architecture: Modules, Controllers, Providers, Dependency Injection",
        },
        { details: "Decorators: Route handlers, Param extraction, Metadata" },
        {
          details:
            "Pipes: Transformation and Validation (class-validator, class-transformer)",
        },
        { details: "Interceptors: Response mapping, Exception transformation" },
        { details: "Guards: Authentication, Role-based access control" },

        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Database Integration
              </span>
            </>
          ),
        },
        {
          details:
            "TypeORM: Entities, Repositories, Relationships (1:1, 1:M, M:M)",
        },
        { details: "Migrations: Schema synchronization and version control" },
        { details: "Query Builder: Complex queries and transactions" },
        { details: "PostgreSQL: Setup, configuration, and optimization" },

        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Authentication & Security
              </span>
            </>
          ),
        },
        { details: "JWT: Implementation, Token refresh strategy" },
        { details: "Session Management: Redis-based sessions" },
        { details: "Cookies: Secure cookie settings, CSRF protection" },
        { details: "Password Hashing: bcrypt, argon2" },
        { details: "OAuth: Social login integration (Google, Facebook)" },

        {
          details: (
            <>
              <span className="text-2xl text-red-600 font-bold">
                Advanced Features
              </span>
            </>
          ),
        },
        {
          details: "File Uploads: Multipart/form-data handling, Cloud storage",
        },
        { details: "Real-time Communication: WebSockets with Socket.io" },
        { details: "Task Scheduling: Cron jobs, Queues" },
        { details: "Mailing: Nodemailer integration, templates" },
        { details: "API Documentation: Swagger/OpenAPI setup" },
        { details: "Testing: Unit tests, E2E tests with Jest" },
      ],
      requirements: [
        { details: "Basic understanding of HTML, CSS, JavaScript" },
        { details: "Familiarity with any programming language is a plus" },
        { details: "Must have PC or Laptop with internet access" },
      ],
    },
    expectations: [
      { title: "Become confident in building scalable backend systems" },
      { title: "Hands-on knowledge of NestJS and modern backend architecture" },
      {
        title:
          "Improve understanding of authentication, database modeling, and best practices",
      },
      { title: "Enhance employability with strong full stack skills" },
      {
        title:
          "Deploy real-world applications with secure and efficient practices",
      },
    ],
    courseFAQ: [
       {
        question: " What are the real-world benefits of using Next.js?",
        answer:
          "Next.js makes apps faster, SEO-friendly, scalable, and easier to deploy. Learning it prepares developers to work on enterprise-level, production-ready applications.",
      },
       {
        question: "How future-proof is Next.js?",
        answer:
          "Next.js is maintained by Vercel, a leading company in modern web infrastructure. It’s constantly evolving with support for Edge Functions, Server Components, and streaming—features shaping the future of web development.",
      },
      {
        question: "Do I need prior knowledge of TypeScript?",
        answer:
          "No, TypeScript fundamentals will be taught at the beginning of the course.",
      },
      {
        question: "Is this course beginner-friendly?",
        answer:
          "Yes, it's designed for beginners with some basic programming knowledge.",
      },
      {
        question: "How long is the course?",
        answer:
          "The course runs for approximately 8-10 weeks with weekly assignments and projects.",
      },
    ],
  },
  {
    xitemid: 3,
    xitemcode: "DSA103",
    xdesc: "Research Workshop",
    xprice: 10000,
    xlongdesc: "",
    xcat: "Data Science",
    ximage: "/images/home/courses/researchWorkshop.jpg",
    learningOutCome: {
      whatYouLearn: [
        {
          details:
            "Foundations of Research,Differences between qualitative, quantitative, and mixed methods",
        },
        {
          details:
            "Formulating Research Questions, How to identify research problems and hypotheses, Literature review techniques",
        },
        {
          details:
            "Research Design, Experimental, descriptive, case study, and survey designs, Sampling methods and techniques",
        },
        {
          details:
            "Data Collection, Tools like surveys, interviews, observations, and experiments, Ethical considerations in data collection",
        },
        { details: "Data Analysis, Basic statistical methods " },
        {
          details:
            "Writing and Presenting Research, Structure of research papers, reports, and theses",
        },
        { details: "Understand basic machine learning concepts" },
      ],
      requirements: [
        { details: "Basic knowledge of any programming language" },
        { details: "Python is plus point" },
      ],
    },
    expectations: [
      {
        title:
          "Familiarity with research methodology, tools like colab, github, hugging face, TensorFlow, PyTorch, etc.",
      },
      {
        title:
          "Collaboration with researchers at US, Norway, Japan, Qatar, Saudi Arabia, etc.",
      },
      { title: "1 paper published in an international journal/conferences." },
    ],
    courseFAQ: [
      {
        question: "Why is learning it important?",
        answer:
          "It helps you develop critical thinking, make evidence-based decisions, and carry out structured investigations—skills valuable in both academic and professional settings.",
      },
      {
        question: "How does it benefit students?",
        answer:
          "It prepares students to write better research papers, theses, and dissertations, and helps in understanding and critiquing scholarly work.",
      },
      {
        question: "What soft skills will I gain?",
        answer:
          "Analytical thinking, problem-solving, attention to detail, and independent learning are key skills developed through studying research methods.",
      },
    ],
  },
  {
    xitemid: 4,
    xitemcode: "CSE103",
    xdesc: "Video Editing",
    xprice: 4000,
    xlongdesc: "",
    xcat: "video editing",
    ximage: "/images/home/courses/videoEditing.jpg",
    learningOutCome: {
      whatYouLearn: [],
      requirements: [],
    },
    expectations: [],
    courseFAQ: [],
  },
];
