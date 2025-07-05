// Project Ideas Database
const projectIdeas = {
    beginner: {
        title: "Beginner Level",
        description: "Perfect for those just starting their coding journey",
        icon: "🌱",
        projects: [
            {
                title: "Personal Portfolio Website",
                description: "Create a stunning portfolio showcasing your projects and skills using HTML, CSS, and JavaScript.",
                tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
                difficulty: "easy"
            },
            {
                title: "Todo List App",
                description: "Build a simple todo list application with add, edit, delete, and mark complete functionality.",
                tags: ["JavaScript", "DOM", "Local Storage"],
                difficulty: "easy"
            },
            {
                title: "Calculator",
                description: "Design a functional calculator with basic arithmetic operations and a clean interface.",
                tags: ["JavaScript", "CSS", "Math"],
                difficulty: "easy"
            },
            {
                title: "Weather App",
                description: "Fetch weather data from an API and display current conditions for any city.",
                tags: ["JavaScript", "API", "JSON"],
                difficulty: "medium"
            },
            {
                title: "Simple Blog",
                description: "Create a basic blog with posts, comments, and a responsive design.",
                tags: ["HTML", "CSS", "JavaScript", "Blog"],
                difficulty: "medium"
            },
            {
                title: "Digital Clock",
                description: "Build a digital clock displaying current time with different themes and formats.",
                tags: ["JavaScript", "Date", "CSS"],
                difficulty: "easy"
            },
            {
                title: "Color Palette Generator",
                description: "Generate random color palettes for design projects with hex codes and previews.",
                tags: ["JavaScript", "CSS", "Colors", "Design"],
                difficulty: "easy"
            },
            {
                title: "Tip Calculator",
                description: "Calculate tips and split bills among friends with a user-friendly interface.",
                tags: ["JavaScript", "Math", "Forms"],
                difficulty: "easy"
            },
            {
                title: "Random Quote Generator",
                description: "Display inspiring quotes with sharing functionality and beautiful typography.",
                tags: ["JavaScript", "API", "CSS", "Typography"],
                difficulty: "easy"
            },
            {
                title: "Password Generator",
                description: "Create secure passwords with customizable length and character types.",
                tags: ["JavaScript", "Security", "Random"],
                difficulty: "easy"
            },
            {
                title: "Unit Converter",
                description: "Convert between different units of measurement (length, weight, temperature).",
                tags: ["JavaScript", "Math", "Conversion"],
                difficulty: "easy"
            },
            {
                title: "Stopwatch Timer",
                description: "Build a precise stopwatch with start, stop, reset, and lap time functionality.",
                tags: ["JavaScript", "Time", "Events"],
                difficulty: "easy"
            },
            {
                title: "BMI Calculator",
                description: "Calculate Body Mass Index with health recommendations and visual indicators.",
                tags: ["JavaScript", "Health", "Math"],
                difficulty: "easy"
            },
            {
                title: "Age Calculator",
                description: "Calculate exact age in years, months, and days from a given birth date.",
                tags: ["JavaScript", "Date", "Math"],
                difficulty: "easy"
            },
            {
                title: "Simple Landing Page",
                description: "Design a modern landing page for a fictional product or service.",
                tags: ["HTML", "CSS", "Design", "Responsive"],
                difficulty: "easy"
            },
            {
                title: "Image Gallery",
                description: "Create a responsive image gallery with lightbox functionality.",
                tags: ["HTML", "CSS", "JavaScript", "Images"],
                difficulty: "medium"
            },
            {
                title: "Accordion FAQ",
                description: "Build an interactive FAQ section with collapsible answers.",
                tags: ["HTML", "CSS", "JavaScript", "UI"],
                difficulty: "easy"
            },
            {
                title: "Countdown Timer",
                description: "Create a countdown timer for events with customizable end dates.",
                tags: ["JavaScript", "Time", "Events"],
                difficulty: "easy"
            },
            {
                title: "Text-to-Speech App",
                description: "Convert text to speech using Web Speech API with voice selection.",
                tags: ["JavaScript", "Web APIs", "Speech"],
                difficulty: "medium"
            },
            {
                title: "QR Code Generator",
                description: "Generate QR codes for text, URLs, or other data types.",
                tags: ["JavaScript", "QR", "API"],
                difficulty: "easy"
            },
            {
                title: "Markdown Preview",
                description: "Real-time markdown editor with live preview functionality.",
                tags: ["JavaScript", "Markdown", "Editor"],
                difficulty: "medium"
            },
            {
                title: "Expense Tracker",
                description: "Track daily expenses with categories and spending analysis.",
                tags: ["JavaScript", "Finance", "Charts"],
                difficulty: "medium"
            },
            {
                title: "Memory Card Game",
                description: "Create a memory matching game with different difficulty levels.",
                tags: ["JavaScript", "Game", "Memory"],
                difficulty: "medium"
            },
            {
                title: "Recipe Finder",
                description: "Search and display recipes from a food API with ingredients.",
                tags: ["JavaScript", "API", "Food"],
                difficulty: "medium"
            },
            {
                title: "Habit Tracker",
                description: "Track daily habits with streak counters and progress visualization.",
                tags: ["JavaScript", "Productivity", "Charts"],
                difficulty: "medium"
            },
            {
                title: "URL Shortener",
                description: "Create short URLs with click tracking and analytics.",
                tags: ["JavaScript", "API", "Analytics"],
                difficulty: "medium"
            },
            {
                title: "Pomodoro Timer",
                description: "Productivity timer with work/break cycles and notifications.",
                tags: ["JavaScript", "Productivity", "Timer"],
                difficulty: "medium"
            },
            {
                title: "Drawing App",
                description: "Simple drawing application using HTML5 Canvas with different tools.",
                tags: ["JavaScript", "Canvas", "Art"],
                difficulty: "medium"
            },
            {
                title: "Music Player",
                description: "Basic music player with playlist functionality and audio controls.",
                tags: ["JavaScript", "Audio", "Media"],
                difficulty: "medium"
            },
            {
                title: "Contact Form",
                description: "Responsive contact form with validation and email functionality.",
                tags: ["HTML", "CSS", "JavaScript", "Forms"],
                difficulty: "easy"
            },
            {
                title: "Note Taking App",
                description: "Simple note-taking application with save, edit, and delete features.",
                tags: ["JavaScript", "Local Storage", "CRUD"],
                difficulty: "medium"
            },
            {
                title: "Currency Converter",
                description: "Convert between different currencies using real-time exchange rates.",
                tags: ["JavaScript", "API", "Finance"],
                difficulty: "medium"
            },
            {
                title: "Typing Speed Test",
                description: "Test typing speed and accuracy with different difficulty levels.",
                tags: ["JavaScript", "Game", "Typing"],
                difficulty: "medium"
            },
            {
                title: "Word Counter",
                description: "Count words, characters, and paragraphs in text with reading time.",
                tags: ["JavaScript", "Text", "Analysis"],
                difficulty: "easy"
            },
            {
                title: "Rock Paper Scissors",
                description: "Classic game with computer AI and score tracking.",
                tags: ["JavaScript", "Game", "AI"],
                difficulty: "easy"
            },
            {
                title: "Flashcard App",
                description: "Study flashcards with spaced repetition and progress tracking.",
                tags: ["JavaScript", "Education", "Memory"],
                difficulty: "medium"
            },
            {
                title: "Gradient Generator",
                description: "Create beautiful CSS gradients with color picker and code export.",
                tags: ["JavaScript", "CSS", "Design"],
                difficulty: "easy"
            },
            {
                title: "Dice Rolling App",
                description: "Roll virtual dice with different types and animation effects.",
                tags: ["JavaScript", "Game", "Animation"],
                difficulty: "easy"
            },
            {
                title: "Responsive Navigation",
                description: "Create a responsive navigation menu with mobile hamburger menu.",
                tags: ["HTML", "CSS", "JavaScript", "Navigation"],
                difficulty: "easy"
            },
            {
                title: "Lorem Ipsum Generator",
                description: "Generate placeholder text with customizable length and format.",
                tags: ["JavaScript", "Text", "Generator"],
                difficulty: "easy"
            },
            {
                title: "CSS Animation Showcase",
                description: "Collection of CSS animations and transitions with controls.",
                tags: ["CSS", "Animation", "Showcase"],
                difficulty: "medium"
            },
            {
                title: "Simple Chat Interface",
                description: "Basic chat UI with message history and emoji support.",
                tags: ["HTML", "CSS", "JavaScript", "UI"],
                difficulty: "medium"
            },
            {
                title: "Loading Spinner Collection",
                description: "Various loading animations and spinners for web applications.",
                tags: ["CSS", "Animation", "Loading"],
                difficulty: "easy"
            },
            {
                title: "Testimonial Slider",
                description: "Responsive testimonial carousel with automatic and manual navigation.",
                tags: ["HTML", "CSS", "JavaScript", "Slider"],
                difficulty: "medium"
            },
            {
                title: "Pricing Table",
                description: "Responsive pricing table with features comparison and call-to-action.",
                tags: ["HTML", "CSS", "Pricing", "Responsive"],
                difficulty: "easy"
            },
            {
                title: "Modal Dialog",
                description: "Reusable modal dialog component with different styles and animations.",
                tags: ["HTML", "CSS", "JavaScript", "Modal"],
                difficulty: "easy"
            },
            {
                title: "Tabs Component",
                description: "Interactive tabs interface with smooth transitions and content switching.",
                tags: ["HTML", "CSS", "JavaScript", "Tabs"],
                difficulty: "easy"
            },
            {
                title: "Dropdown Menu",
                description: "Multi-level dropdown menu with hover and click interactions.",
                tags: ["HTML", "CSS", "JavaScript", "Menu"],
                difficulty: "easy"
            },
            {
                title: "Progress Bar",
                description: "Animated progress bars with different styles and configurations.",
                tags: ["HTML", "CSS", "JavaScript", "Progress"],
                difficulty: "easy"
            },
            {
                title: "Tooltip Component",
                description: "Customizable tooltips with different positions and styles.",
                tags: ["HTML", "CSS", "JavaScript", "Tooltip"],
                difficulty: "easy"
            },
            {
                title: "Carousel Slider",
                description: "Image carousel with navigation arrows and indicator dots.",
                tags: ["HTML", "CSS", "JavaScript", "Carousel"],
                difficulty: "medium"
            }
        ]
    },
    intermediate: {
        title: "Intermediate Level",
        description: "For developers with some experience ready to tackle more complex projects",
        icon: "🚀",
        projects: [
            {
                title: "Social Media Dashboard",
                description: "Build a comprehensive dashboard aggregating data from multiple social platforms.",
                tags: ["React", "API", "Dashboard", "Charts"],
                difficulty: "medium"
            },
            {
                title: "E-commerce Store",
                description: "Full-featured online store with shopping cart, payment processing, and inventory management.",
                tags: ["React", "Node.js", "Database", "Payment"],
                difficulty: "hard"
            },
            {
                title: "Task Management System",
                description: "Collaborative project management tool with teams, deadlines, and progress tracking.",
                tags: ["React", "Node.js", "Database", "Collaboration"],
                difficulty: "medium"
            },
            {
                title: "Real-time Chat Application",
                description: "Multi-user chat app with rooms, file sharing, and emoji reactions.",
                tags: ["Socket.io", "Node.js", "Real-time", "Chat"],
                difficulty: "hard"
            },
            {
                title: "Expense Management App",
                description: "Personal finance tracker with budgeting, categories, and spending insights.",
                tags: ["React", "Charts", "Finance", "Mobile"],
                difficulty: "medium"
            },
            {
                title: "Job Board Platform",
                description: "Connect employers and job seekers with advanced filtering and matching.",
                tags: ["React", "Node.js", "Database", "Search"],
                difficulty: "hard"
            },
            {
                title: "Video Streaming Platform",
                description: "Netflix-like platform with user profiles, recommendations, and video playback.",
                tags: ["React", "Node.js", "Video", "Streaming"],
                difficulty: "hard"
            },
            {
                title: "Learning Management System",
                description: "Educational platform with courses, quizzes, and progress tracking.",
                tags: ["React", "Node.js", "Education", "LMS"],
                difficulty: "hard"
            },
            {
                title: "Fitness Tracking App",
                description: "Track workouts, nutrition, and health metrics with goal setting.",
                tags: ["React Native", "Health", "Tracking", "Goals"],
                difficulty: "medium"
            },
            {
                title: "Recipe Sharing Platform",
                description: "Community-driven recipe sharing with ratings, reviews, and meal planning.",
                tags: ["React", "Node.js", "Community", "Food"],
                difficulty: "medium"
            },
            {
                title: "Inventory Management System",
                description: "Business tool for tracking stock, orders, and suppliers with reporting.",
                tags: ["React", "Node.js", "Business", "Inventory"],
                difficulty: "medium"
            },
            {
                title: "Event Management Platform",
                description: "Plan and manage events with ticketing, RSVPs, and attendee management.",
                tags: ["React", "Node.js", "Events", "Ticketing"],
                difficulty: "hard"
            },
            {
                title: "CRM System",
                description: "Customer relationship management with lead tracking and sales pipeline.",
                tags: ["React", "Node.js", "CRM", "Sales"],
                difficulty: "hard"
            },
            {
                title: "Appointment Booking System",
                description: "Online booking platform with calendar integration and payment processing.",
                tags: ["React", "Node.js", "Booking", "Calendar"],
                difficulty: "medium"
            },
            {
                title: "Real Estate Platform",
                description: "Property listings with search, filters, and virtual tours.",
                tags: ["React", "Node.js", "Real Estate", "Search"],
                difficulty: "hard"
            },
            {
                title: "Cryptocurrency Portfolio Tracker",
                description: "Track crypto investments with real-time prices and portfolio analytics.",
                tags: ["React", "API", "Crypto", "Finance"],
                difficulty: "medium"
            },
            {
                title: "Food Delivery App",
                description: "Multi-restaurant delivery platform with order tracking and payments.",
                tags: ["React Native", "Node.js", "Delivery", "Mobile"],
                difficulty: "hard"
            },
            {
                title: "Hotel Booking System",
                description: "Reservation system with room availability, pricing, and guest management.",
                tags: ["React", "Node.js", "Booking", "Hospitality"],
                difficulty: "hard"
            },
            {
                title: "Online Code Editor",
                description: "Web-based IDE with syntax highlighting, file management, and collaboration.",
                tags: ["React", "CodeMirror", "IDE", "Collaboration"],
                difficulty: "hard"
            },
            {
                title: "URL Analytics Platform",
                description: "Link shortening service with detailed click analytics and insights.",
                tags: ["React", "Node.js", "Analytics", "URLs"],
                difficulty: "medium"
            },
            {
                title: "Customer Support Ticketing",
                description: "Help desk system with ticket management and live chat support.",
                tags: ["React", "Node.js", "Support", "Chat"],
                difficulty: "medium"
            },
            {
                title: "Employee Management System",
                description: "HR platform with employee records, payroll, and performance tracking.",
                tags: ["React", "Node.js", "HR", "Management"],
                difficulty: "hard"
            },
            {
                title: "Ride Sharing App",
                description: "Uber-like app with driver matching, real-time tracking, and payments.",
                tags: ["React Native", "Node.js", "Maps", "Real-time"],
                difficulty: "hard"
            },
            {
                title: "News Aggregator",
                description: "Personalized news feed with multiple sources and content filtering.",
                tags: ["React", "Node.js", "News", "RSS"],
                difficulty: "medium"
            },
            {
                title: "Subscription Management",
                description: "Track and manage recurring subscriptions with spending analysis.",
                tags: ["React", "Node.js", "Subscriptions", "Finance"],
                difficulty: "medium"
            },
            {
                title: "Portfolio Management Tool",
                description: "Investment tracking with performance analysis and risk assessment.",
                tags: ["React", "Node.js", "Investments", "Analytics"],
                difficulty: "hard"
            },
            {
                title: "Survey Builder Platform",
                description: "Create and distribute surveys with response analysis and reporting.",
                tags: ["React", "Node.js", "Surveys", "Analytics"],
                difficulty: "medium"
            },
            {
                title: "Content Management System",
                description: "WordPress-like CMS with themes, plugins, and user management.",
                tags: ["React", "Node.js", "CMS", "Content"],
                difficulty: "hard"
            },
            {
                title: "Social Networking Platform",
                description: "Mini social network with profiles, posts, and friend connections.",
                tags: ["React", "Node.js", "Social", "Network"],
                difficulty: "hard"
            },
            {
                title: "Marketplace Platform",
                description: "Multi-vendor marketplace with seller onboarding and order management.",
                tags: ["React", "Node.js", "Marketplace", "E-commerce"],
                difficulty: "hard"
            },
            {
                title: "Workout Planning App",
                description: "Custom workout routines with exercise library and progress tracking.",
                tags: ["React Native", "Fitness", "Planning", "Health"],
                difficulty: "medium"
            },
            {
                title: "Photo Sharing Platform",
                description: "Instagram-like app with photo filters, stories, and social features.",
                tags: ["React Native", "Node.js", "Photos", "Social"],
                difficulty: "hard"
            },
            {
                title: "Budget Planning Tool",
                description: "Comprehensive budgeting app with expense categorization and insights.",
                tags: ["React", "Node.js", "Budget", "Finance"],
                difficulty: "medium"
            },
            {
                title: "Booking Calendar System",
                description: "Multi-resource booking system with availability management.",
                tags: ["React", "Node.js", "Calendar", "Booking"],
                difficulty: "medium"
            },
            {
                title: "Gaming Leaderboard",
                description: "Competitive gaming platform with rankings, tournaments, and rewards.",
                tags: ["React", "Node.js", "Gaming", "Leaderboard"],
                difficulty: "medium"
            },
            {
                title: "Document Collaboration",
                description: "Real-time document editing with commenting and version control.",
                tags: ["React", "Node.js", "Documents", "Collaboration"],
                difficulty: "hard"
            },
            {
                title: "Password Manager",
                description: "Secure password storage with encryption and auto-fill features.",
                tags: ["React", "Node.js", "Security", "Encryption"],
                difficulty: "hard"
            },
            {
                title: "Time Tracking Application",
                description: "Employee time tracking with project management and reporting.",
                tags: ["React", "Node.js", "Time", "Productivity"],
                difficulty: "medium"
            },
            {
                title: "API Documentation Platform",
                description: "Swagger-like documentation with interactive API testing.",
                tags: ["React", "Node.js", "API", "Documentation"],
                difficulty: "medium"
            },
            {
                title: "Invoice Generator",
                description: "Professional invoice creation with client management and payments.",
                tags: ["React", "Node.js", "Invoicing", "Business"],
                difficulty: "medium"
            },
            {
                title: "Habit Tracking Dashboard",
                description: "Advanced habit tracking with streaks, analytics, and goal setting.",
                tags: ["React", "Node.js", "Habits", "Analytics"],
                difficulty: "medium"
            },
            {
                title: "File Storage Service",
                description: "Cloud storage platform with file sharing and collaboration features.",
                tags: ["React", "Node.js", "Storage", "Files"],
                difficulty: "hard"
            },
            {
                title: "Notification System",
                description: "Multi-channel notification service with templates and scheduling.",
                tags: ["React", "Node.js", "Notifications", "Templates"],
                difficulty: "medium"
            },
            {
                title: "Forum Community Platform",
                description: "Discussion forum with categories, moderation, and user reputation.",
                tags: ["React", "Node.js", "Forum", "Community"],
                difficulty: "hard"
            },
            {
                title: "Quiz Application Builder",
                description: "Create and host quizzes with scoring, timing, and result analysis.",
                tags: ["React", "Node.js", "Quiz", "Education"],
                difficulty: "medium"
            },
            {
                title: "Kanban Board Tool",
                description: "Project management with drag-and-drop cards and team collaboration.",
                tags: ["React", "Node.js", "Kanban", "Project Management"],
                difficulty: "medium"
            },
            {
                title: "Weather Forecast Dashboard",
                description: "Comprehensive weather app with maps, alerts, and historical data.",
                tags: ["React", "API", "Weather", "Maps"],
                difficulty: "medium"
            },
            {
                title: "Expense Splitting App",
                description: "Split bills and expenses among friends with payment tracking.",
                tags: ["React Native", "Finance", "Social", "Payments"],
                difficulty: "medium"
            },
            {
                title: "Workout Timer App",
                description: "Interval training timer with custom workouts and music integration.",
                tags: ["React Native", "Fitness", "Timer", "Audio"],
                difficulty: "medium"
            },
            {
                title: "Language Learning Platform",
                description: "Duolingo-like app with lessons, progress tracking, and gamification.",
                tags: ["React", "Node.js", "Education", "Gamification"],
                difficulty: "hard"
            }
        ]
    },
    advanced: {
        title: "Advanced Level",
        description: "Complex projects for experienced developers seeking challenges",
        icon: "🔥",
        projects: [
            {
                title: "Distributed Cloud Storage System",
                description: "Build a scalable cloud storage solution with data replication and fault tolerance.",
                tags: ["Microservices", "Cloud", "Distributed Systems", "Storage"],
                difficulty: "hard"
            },
            {
                title: "Real-time Collaborative Code Editor",
                description: "Visual Studio Code-like editor with real-time collaboration and plugin system.",
                tags: ["WebSockets", "Real-time", "Code Editor", "Collaboration"],
                difficulty: "hard"
            },
            {
                title: "Machine Learning Platform",
                description: "End-to-end ML platform with model training, deployment, and monitoring.",
                tags: ["Machine Learning", "Python", "TensorFlow", "MLOps"],
                difficulty: "hard"
            },
            {
                title: "Blockchain Cryptocurrency",
                description: "Create your own cryptocurrency with mining, wallets, and transaction validation.",
                tags: ["Blockchain", "Cryptocurrency", "Cryptography", "P2P"],
                difficulty: "hard"
            },
            {
                title: "Video Conferencing Platform",
                description: "Zoom-like application with screen sharing, recording, and virtual backgrounds.",
                tags: ["WebRTC", "Video", "Real-time", "Streaming"],
                difficulty: "hard"
            },
            {
                title: "Container Orchestration System",
                description: "Kubernetes-like container orchestration with auto-scaling and load balancing.",
                tags: ["Docker", "Kubernetes", "DevOps", "Orchestration"],
                difficulty: "hard"
            },
            {
                title: "Search Engine",
                description: "Build a web search engine with crawling, indexing, and ranking algorithms.",
                tags: ["Web Crawling", "Search", "Algorithms", "Big Data"],
                difficulty: "hard"
            },
            {
                title: "Financial Trading Platform",
                description: "High-frequency trading system with real-time market data and risk management.",
                tags: ["Finance", "Trading", "Real-time", "Risk Management"],
                difficulty: "hard"
            },
            {
                title: "Game Engine",
                description: "2D/3D game engine with physics, rendering, and scripting capabilities.",
                tags: ["Game Engine", "Graphics", "Physics", "C++"],
                difficulty: "hard"
            },
            {
                title: "Operating System Kernel",
                description: "Basic operating system kernel with memory management and process scheduling.",
                tags: ["OS", "Kernel", "C", "Systems Programming"],
                difficulty: "hard"
            },
            {
                title: "Compiler and Interpreter",
                description: "Programming language compiler/interpreter with lexical analysis and code generation.",
                tags: ["Compiler", "Programming Languages", "Parsing", "Code Generation"],
                difficulty: "hard"
            },
            {
                title: "Database Management System",
                description: "Relational database with SQL query engine, indexing, and ACID compliance.",
                tags: ["Database", "SQL", "ACID", "Storage Engine"],
                difficulty: "hard"
            },
            {
                title: "Neural Network Framework",
                description: "Deep learning framework with GPU acceleration and automatic differentiation.",
                tags: ["Deep Learning", "Neural Networks", "GPU", "CUDA"],
                difficulty: "hard"
            },
            {
                title: "Virtual Reality Platform",
                description: "VR development platform with 3D graphics, spatial tracking, and haptic feedback.",
                tags: ["VR", "3D Graphics", "Unity", "Spatial Computing"],
                difficulty: "hard"
            },
            {
                title: "Augmented Reality Framework",
                description: "AR development toolkit with object recognition and real-world tracking.",
                tags: ["AR", "Computer Vision", "Mobile", "3D"],
                difficulty: "hard"
            },
            {
                title: "IoT Device Management Platform",
                description: "Industrial IoT platform with device monitoring, firmware updates, and analytics.",
                tags: ["IoT", "Device Management", "Industrial", "Analytics"],
                difficulty: "hard"
            },
            {
                title: "Autonomous Vehicle Simulator",
                description: "Self-driving car simulation with physics, sensors, and AI decision making.",
                tags: ["Autonomous Vehicles", "Simulation", "AI", "Computer Vision"],
                difficulty: "hard"
            },
            {
                title: "Quantum Computing Simulator",
                description: "Quantum computer simulator with quantum gates and algorithm implementations.",
                tags: ["Quantum Computing", "Simulation", "Physics", "Algorithms"],
                difficulty: "hard"
            },
            {
                title: "Cyber Security Framework",
                description: "Security testing framework with vulnerability scanning and penetration testing.",
                tags: ["Cybersecurity", "Penetration Testing", "Security", "Networking"],
                difficulty: "hard"
            },
            {
                title: "Distributed Message Queue",
                description: "High-performance message queue system with clustering and fault tolerance.",
                tags: ["Message Queue", "Distributed Systems", "High Performance", "Clustering"],
                difficulty: "hard"
            },
            {
                title: "Content Delivery Network",
                description: "Global CDN with edge caching, load balancing, and performance optimization.",
                tags: ["CDN", "Caching", "Load Balancing", "Performance"],
                difficulty: "hard"
            },
            {
                title: "API Gateway Platform",
                description: "Microservices API gateway with authentication, rate limiting, and monitoring.",
                tags: ["API Gateway", "Microservices", "Authentication", "Rate Limiting"],
                difficulty: "hard"
            },
            {
                title: "Time Series Database",
                description: "Specialized database for time-series data with compression and analytics.",
                tags: ["Time Series", "Database", "Analytics", "Compression"],
                difficulty: "hard"
            },
            {
                title: "Recommendation Engine",
                description: "ML-powered recommendation system with collaborative and content-based filtering.",
                tags: ["Machine Learning", "Recommendations", "Collaborative Filtering", "Big Data"],
                difficulty: "hard"
            },
            {
                title: "Computer Vision Platform",
                description: "Image processing platform with object detection, facial recognition, and OCR.",
                tags: ["Computer Vision", "Image Processing", "Object Detection", "OCR"],
                difficulty: "hard"
            },
            {
                title: "Natural Language Processing API",
                description: "NLP service with sentiment analysis, entity extraction, and language translation.",
                tags: ["NLP", "Machine Learning", "Language Processing", "API"],
                difficulty: "hard"
            },
            {
                title: "Serverless Computing Platform",
                description: "AWS Lambda-like serverless platform with auto-scaling and event triggers.",
                tags: ["Serverless", "Cloud Computing", "Auto-scaling", "Event-driven"],
                difficulty: "hard"
            },
            {
                title: "Streaming Analytics Engine",
                description: "Real-time data processing engine for streaming analytics and event processing.",
                tags: ["Stream Processing", "Real-time Analytics", "Big Data", "Event Processing"],
                difficulty: "hard"
            },
            {
                title: "Edge Computing Framework",
                description: "Distributed computing framework for edge devices with low-latency processing.",
                tags: ["Edge Computing", "Distributed Systems", "Low Latency", "IoT"],
                difficulty: "hard"
            },
            {
                title: "Biometric Authentication System",
                description: "Multi-modal biometric system with fingerprint, face, and voice recognition.",
                tags: ["Biometrics", "Authentication", "Computer Vision", "Security"],
                difficulty: "hard"
            },
            {
                title: "Digital Twin Platform",
                description: "Industrial digital twin system with real-time monitoring and predictive analytics.",
                tags: ["Digital Twin", "IoT", "Predictive Analytics", "Industrial"],
                difficulty: "hard"
            },
            {
                title: "Automated Testing Framework",
                description: "AI-powered testing framework with automatic test generation and execution.",
                tags: ["Testing", "AI", "Automation", "Quality Assurance"],
                difficulty: "hard"
            },
            {
                title: "Web3 DeFi Platform",
                description: "Decentralized finance platform with smart contracts and yield farming.",
                tags: ["Web3", "DeFi", "Smart Contracts", "Ethereum"],
                difficulty: "hard"
            },
            {
                title: "Supply Chain Tracking System",
                description: "Blockchain-based supply chain with product traceability and verification.",
                tags: ["Supply Chain", "Blockchain", "Traceability", "Enterprise"],
                difficulty: "hard"
            },
            {
                title: "Federated Learning Platform",
                description: "Privacy-preserving machine learning with distributed model training.",
                tags: ["Federated Learning", "Privacy", "Machine Learning", "Distributed"],
                difficulty: "hard"
            },
            {
                title: "Robotic Process Automation",
                description: "RPA platform with visual workflow designer and bot deployment.",
                tags: ["RPA", "Automation", "Workflow", "Enterprise"],
                difficulty: "hard"
            },
            {
                title: "Chaos Engineering Platform",
                description: "System resilience testing with controlled failure injection and monitoring.",
                tags: ["Chaos Engineering", "Resilience", "Testing", "Monitoring"],
                difficulty: "hard"
            },
            {
                title: "Graph Database System",
                description: "High-performance graph database with query optimization and visualization.",
                tags: ["Graph Database", "Query Processing", "Visualization", "Performance"],
                difficulty: "hard"
            },
            {
                title: "Geospatial Analytics Platform",
                description: "GIS platform with spatial data processing and real-time location analytics.",
                tags: ["GIS", "Geospatial", "Analytics", "Location"],
                difficulty: "hard"
            },
            {
                title: "Multi-tenant SaaS Platform",
                description: "Enterprise SaaS architecture with tenant isolation and resource management.",
                tags: ["SaaS", "Multi-tenant", "Enterprise", "Architecture"],
                difficulty: "hard"
            },
            {
                title: "Smart Contract Auditing Tool",
                description: "Automated smart contract security analysis with vulnerability detection.",
                tags: ["Smart Contracts", "Security", "Blockchain", "Auditing"],
                difficulty: "hard"
            },
            {
                title: "Anomaly Detection System",
                description: "ML-powered anomaly detection for cybersecurity and system monitoring.",
                tags: ["Anomaly Detection", "Machine Learning", "Security", "Monitoring"],
                difficulty: "hard"
            },
            {
                title: "Real-time Risk Management",
                description: "Financial risk assessment system with real-time monitoring and alerts.",
                tags: ["Risk Management", "Finance", "Real-time", "Analytics"],
                difficulty: "hard"
            },
            {
                title: "Predictive Maintenance Platform",
                description: "IoT-based predictive maintenance with sensor data analysis and ML models.",
                tags: ["Predictive Maintenance", "IoT", "Machine Learning", "Industrial"],
                difficulty: "hard"
            },
            {
                title: "Quantum Cryptography System",
                description: "Post-quantum cryptography implementation with quantum-safe algorithms.",
                tags: ["Quantum Cryptography", "Security", "Cryptography", "Quantum"],
                difficulty: "hard"
            },
            {
                title: "Autonomous Drone Swarm",
                description: "Multi-drone coordination system with AI-powered navigation and task allocation.",
                tags: ["Drones", "Swarm Intelligence", "AI", "Autonomous Systems"],
                difficulty: "hard"
            },
            {
                title: "Digital Forensics Platform",
                description: "Cybersecurity forensics tool with evidence collection and analysis.",
                tags: ["Digital Forensics", "Cybersecurity", "Evidence", "Analysis"],
                difficulty: "hard"
            },
            {
                title: "Homomorphic Encryption System",
                description: "Privacy-preserving computation with homomorphic encryption algorithms.",
                tags: ["Homomorphic Encryption", "Privacy", "Cryptography", "Computation"],
                difficulty: "hard"
            },
            {
                title: "Synthetic Data Generation",
                description: "AI-powered synthetic data generation for privacy-preserving analytics.",
                tags: ["Synthetic Data", "AI", "Privacy", "Data Generation"],
                difficulty: "hard"
            },
            {
                title: "Multi-modal AI Assistant",
                description: "AI assistant with text, voice, and vision capabilities for complex tasks.",
                tags: ["AI Assistant", "Multi-modal", "NLP", "Computer Vision"],
                difficulty: "hard"
            }
        ]
    },
    school: {
        title: "School Level",
        description: "Educational projects perfect for students and classroom assignments",
        icon: "🎓",
        projects: [
            {
                title: "Science Fair Weather Station",
                description: "Build a weather monitoring station with sensors for temperature, humidity, and pressure.",
                tags: ["Arduino", "Sensors", "Science", "Weather"],
                difficulty: "medium"
            },
            {
                title: "Interactive Solar System Model",
                description: "3D solar system with planetary motion, facts, and educational content.",
                tags: ["JavaScript", "3D", "Education", "Astronomy"],
                difficulty: "medium"
            },
            {
                title: "Digital Microscope Interface",
                description: "Control software for digital microscopes with image capture and analysis.",
                tags: ["Python", "OpenCV", "Microscopy", "Image Processing"],
                difficulty: "medium"
            },
            {
                title: "Chemistry Lab Simulator",
                description: "Virtual chemistry lab with safe experimentation and reaction simulations.",
                tags: ["JavaScript", "Chemistry", "Simulation", "Education"],
                difficulty: "medium"
            },
            {
                title: "Math Problem Generator",
                description: "Automated math problem generator with step-by-step solutions and difficulty levels.",
                tags: ["Python", "Math", "Education", "Problem Solving"],
                difficulty: "easy"
            },
            {
                title: "Historical Timeline Explorer",
                description: "Interactive timeline with historical events, multimedia content, and quizzes.",
                tags: ["JavaScript", "History", "Timeline", "Interactive"],
                difficulty: "easy"
            },
            {
                title: "Language Learning Flashcards",
                description: "Digital flashcard system for vocabulary building with spaced repetition.",
                tags: ["JavaScript", "Language", "Learning", "Memory"],
                difficulty: "easy"
            },
            {
                title: "Plant Growth Tracking System",
                description: "Monitor plant growth with sensors, data logging, and growth analysis.",
                tags: ["Arduino", "Sensors", "Biology", "Data Logging"],
                difficulty: "medium"
            },
            {
                title: "Virtual Physics Laboratory",
                description: "Simulate physics experiments with pendulums, projectiles, and wave motion.",
                tags: ["JavaScript", "Physics", "Simulation", "Education"],
                difficulty: "medium"
            },
            {
                title: "Coding Club Website",
                description: "School coding club website with projects showcase and member profiles.",
                tags: ["HTML", "CSS", "JavaScript", "School"],
                difficulty: "easy"
            },
            {
                title: "Student Grade Calculator",
                description: "GPA calculator with different grading systems and progress tracking.",
                tags: ["JavaScript", "Math", "Education", "Grades"],
                difficulty: "easy"
            },
            {
                title: "Library Book Tracker",
                description: "Digital library system for tracking books, checkouts, and reading progress.",
                tags: ["JavaScript", "Database", "Library", "Tracking"],
                difficulty: "medium"
            },
            {
                title: "School Event Calendar",
                description: "Interactive calendar for school events, assignments, and important dates.",
                tags: ["JavaScript", "Calendar", "Events", "School"],
                difficulty: "easy"
            },
            {
                title: "Student Poll System",
                description: "Anonymous voting system for school elections and surveys.",
                tags: ["JavaScript", "Voting", "School", "Democracy"],
                difficulty: "medium"
            },
            {
                title: "Homework Reminder App",
                description: "Task management app specifically designed for homework and assignments.",
                tags: ["JavaScript", "Tasks", "Education", "Reminders"],
                difficulty: "easy"
            },
            {
                title: "Science Quiz Generator",
                description: "Quiz creation tool for science topics with multiple choice and true/false questions.",
                tags: ["JavaScript", "Quiz", "Science", "Education"],
                difficulty: "easy"
            },
            {
                title: "Periodic Table Explorer",
                description: "Interactive periodic table with element properties and chemical reactions.",
                tags: ["JavaScript", "Chemistry", "Periodic Table", "Interactive"],
                difficulty: "medium"
            },
            {
                title: "Geometry Shape Calculator",
                description: "Calculate area, perimeter, and volume of various geometric shapes.",
                tags: ["JavaScript", "Math", "Geometry", "Calculator"],
                difficulty: "easy"
            },
            {
                title: "Reading Comprehension Test",
                description: "Automated reading comprehension tests with passage analysis and scoring.",
                tags: ["JavaScript", "Reading", "Comprehension", "Testing"],
                difficulty: "medium"
            },
            {
                title: "School Lunch Menu Planner",
                description: "Weekly lunch menu planner with nutritional information and preferences.",
                tags: ["JavaScript", "Nutrition", "Planning", "School"],
                difficulty: "easy"
            },
            {
                title: "Class Schedule Organizer",
                description: "Personal class schedule with time management and conflict detection.",
                tags: ["JavaScript", "Schedule", "Time Management", "School"],
                difficulty: "easy"
            },
            {
                title: "Spelling Bee Practice",
                description: "Spelling practice application with difficulty levels and pronunciation.",
                tags: ["JavaScript", "Spelling", "Education", "Audio"],
                difficulty: "easy"
            },
            {
                title: "Science Fair Project Tracker",
                description: "Manage science fair projects with research, experiments, and presentations.",
                tags: ["JavaScript", "Science", "Project Management", "Research"],
                difficulty: "medium"
            },
            {
                title: "Student Attendance System",
                description: "Digital attendance tracking with reports and absence notifications.",
                tags: ["JavaScript", "Attendance", "Tracking", "School"],
                difficulty: "medium"
            },
            {
                title: "Educational Game Hub",
                description: "Collection of educational games for different subjects and grade levels.",
                tags: ["JavaScript", "Games", "Education", "Interactive"],
                difficulty: "medium"
            },
            {
                title: "Virtual Field Trip Platform",
                description: "360-degree virtual tours of museums, historical sites, and natural wonders.",
                tags: ["JavaScript", "VR", "Education", "Virtual Tours"],
                difficulty: "medium"
            },
            {
                title: "School Newspaper Website",
                description: "Digital newspaper platform for school news, articles, and student contributions.",
                tags: ["HTML", "CSS", "JavaScript", "News"],
                difficulty: "easy"
            },
            {
                title: "Student Portfolio Showcase",
                description: "Digital portfolio platform for students to showcase their work and achievements.",
                tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
                difficulty: "easy"
            },
            {
                title: "Academic Progress Tracker",
                description: "Track academic performance across subjects with goal setting and analytics.",
                tags: ["JavaScript", "Analytics", "Progress", "Education"],
                difficulty: "medium"
            },
            {
                title: "Peer Study Group Organizer",
                description: "Platform for organizing study groups and collaborative learning sessions.",
                tags: ["JavaScript", "Collaboration", "Study", "Groups"],
                difficulty: "medium"
            },
            {
                title: "School Supply Inventory",
                description: "Track school supplies and materials with low-stock alerts and ordering.",
                tags: ["JavaScript", "Inventory", "School", "Management"],
                difficulty: "medium"
            },
            {
                title: "Student Budget Calculator",
                description: "Help students manage their finances with budgeting and expense tracking.",
                tags: ["JavaScript", "Finance", "Budget", "Students"],
                difficulty: "easy"
            },
            {
                title: "Extracurricular Activity Tracker",
                description: "Track participation in clubs, sports, and other activities with hours logging.",
                tags: ["JavaScript", "Activities", "Tracking", "School"],
                difficulty: "easy"
            },
            {
                title: "Parent-Teacher Communication",
                description: "Messaging platform for parents and teachers with progress updates.",
                tags: ["JavaScript", "Communication", "Parents", "Teachers"],
                difficulty: "medium"
            },
            {
                title: "School Resource Booking",
                description: "Book school resources like computer labs, projectors, and meeting rooms.",
                tags: ["JavaScript", "Booking", "Resources", "School"],
                difficulty: "medium"
            },
            {
                title: "Student Council Election System",
                description: "Digital voting system for student council elections with candidate profiles.",
                tags: ["JavaScript", "Elections", "Voting", "Student Council"],
                difficulty: "medium"
            },
            {
                title: "Cafeteria Nutrition Tracker",
                description: "Track nutritional intake from school meals with dietary recommendations.",
                tags: ["JavaScript", "Nutrition", "Health", "Cafeteria"],
                difficulty: "medium"
            },
            {
                title: "School Bus Route Optimizer",
                description: "Optimize school bus routes for efficiency and safety with GPS tracking.",
                tags: ["JavaScript", "Routing", "GPS", "Transportation"],
                difficulty: "hard"
            },
            {
                title: "Digital Yearbook Platform",
                description: "Create and share digital yearbooks with photos, signatures, and memories.",
                tags: ["JavaScript", "Yearbook", "Photos", "Social"],
                difficulty: "medium"
            },
            {
                title: "School Emergency Alert System",
                description: "Emergency notification system for schools with multiple communication channels.",
                tags: ["JavaScript", "Emergency", "Notifications", "Safety"],
                difficulty: "medium"
            },
            {
                title: "Student Wellness Tracker",
                description: "Monitor student wellness with mood tracking and mental health resources.",
                tags: ["JavaScript", "Wellness", "Mental Health", "Students"],
                difficulty: "medium"
            },
            {
                title: "Interactive Learning Dashboard",
                description: "Personalized learning dashboard with progress tracking and recommendations.",
                tags: ["JavaScript", "Learning", "Dashboard", "Personalization"],
                difficulty: "medium"
            },
            {
                title: "School Maintenance Request System",
                description: "Report and track maintenance issues around school facilities.",
                tags: ["JavaScript", "Maintenance", "Reporting", "Facilities"],
                difficulty: "medium"
            },
            {
                title: "Student Peer Tutoring Platform",
                description: "Connect students for peer tutoring with scheduling and progress tracking.",
                tags: ["JavaScript", "Tutoring", "Peer Learning", "Scheduling"],
                difficulty: "medium"
            },
            {
                title: "School Sports Statistics Tracker",
                description: "Track sports team statistics, game results, and player performance.",
                tags: ["JavaScript", "Sports", "Statistics", "Analytics"],
                difficulty: "medium"
            },
            {
                title: "Digital Hall Pass System",
                description: "Electronic hall pass system with tracking and time management.",
                tags: ["JavaScript", "Hall Pass", "Tracking", "Time Management"],
                difficulty: "easy"
            },
            {
                title: "School Energy Monitoring",
                description: "Monitor school energy usage with conservation tips and competitions.",
                tags: ["JavaScript", "Energy", "Monitoring", "Sustainability"],
                difficulty: "medium"
            },
            {
                title: "Student Achievement Tracker",
                description: "Track student achievements, awards, and recognition with digital badges.",
                tags: ["JavaScript", "Achievements", "Recognition", "Badges"],
                difficulty: "medium"
            },
            {
                title: "School Garden Management",
                description: "Manage school garden with plant care schedules and harvest tracking.",
                tags: ["JavaScript", "Garden", "Agriculture", "Sustainability"],
                difficulty: "medium"
            },
            {
                title: "Interactive School Map",
                description: "Digital school map with room locations, navigation, and facility information.",
                tags: ["JavaScript", "Maps", "Navigation", "School"],
                difficulty: "medium"
            }
        ]
    },
    college: {
        title: "College Level",
        description: "Advanced academic projects suitable for university coursework and research",
        icon: "🏛️",
        projects: [
            {
                title: "Research Paper Management System",
                description: "Comprehensive platform for managing research papers, citations, and collaboration.",
                tags: ["Research", "Academia", "Collaboration", "Citations"],
                difficulty: "hard"
            },
            {
                title: "Student Information System",
                description: "Complete SIS with enrollment, grades, transcripts, and degree planning.",
                tags: ["Education", "Database", "Management", "Academic"],
                difficulty: "hard"
            },
            {
                title: "Online Course Management Platform",
                description: "Full-featured LMS with video lectures, assignments, and assessment tools.",
                tags: ["LMS", "Education", "Video", "Assessment"],
                difficulty: "hard"
            },
            {
                title: "Campus Event Management System",
                description: "Manage university events, registrations, and resource allocation.",
                tags: ["Events", "Management", "University", "Resources"],
                difficulty: "medium"
            },
            {
                title: "Thesis and Dissertation Tracker",
                description: "Track thesis progress, milestones, and advisor communication.",
                tags: ["Research", "Thesis", "Progress", "Communication"],
                difficulty: "medium"
            },
            {
                title: "University Housing Portal",
                description: "Dormitory assignment, roommate matching, and housing application system.",
                tags: ["Housing", "Matching", "University", "Applications"],
                difficulty: "hard"
            },
            {
                title: "Academic Advisor Platform",
                description: "Connect students with advisors for course planning and career guidance.",
                tags: ["Advising", "Career", "Planning", "Education"],
                difficulty: "medium"
            },
            {
                title: "Laboratory Equipment Booking",
                description: "Reserve and manage laboratory equipment and research facilities.",
                tags: ["Laboratory", "Booking", "Equipment", "Research"],
                difficulty: "medium"
            },
            {
                title: "Graduate School Application Tracker",
                description: "Track graduate school applications, deadlines, and requirements.",
                tags: ["Graduate School", "Applications", "Tracking", "Deadlines"],
                difficulty: "medium"
            },
            {
                title: "Research Grant Management System",
                description: "Manage research grants, funding applications, and budget tracking.",
                tags: ["Grants", "Funding", "Research", "Budget"],
                difficulty: "hard"
            },
            {
                title: "Academic Conference Platform",
                description: "Virtual conference platform with paper submissions and peer review.",
                tags: ["Conference", "Academic", "Peer Review", "Virtual"],
                difficulty: "hard"
            },
            {
                title: "Student Performance Analytics",
                description: "Analyze student performance data to identify at-risk students and interventions.",
                tags: ["Analytics", "Performance", "Predictive", "Education"],
                difficulty: "hard"
            },
            {
                title: "Campus Safety and Security System",
                description: "Emergency response system with location tracking and incident reporting.",
                tags: ["Safety", "Security", "Emergency", "Tracking"],
                difficulty: "hard"
            },
            {
                title: "University Alumni Network",
                description: "Connect alumni with current students for mentorship and networking.",
                tags: ["Alumni", "Networking", "Mentorship", "Social"],
                difficulty: "medium"
            },
            {
                title: "Academic Integrity Checker",
                description: "Plagiarism detection system with similarity analysis and reporting.",
                tags: ["Plagiarism", "Academic Integrity", "Analysis", "Detection"],
                difficulty: "hard"
            },
            {
                title: "Research Collaboration Platform",
                description: "Connect researchers across disciplines for collaborative projects.",
                tags: ["Research", "Collaboration", "Interdisciplinary", "Projects"],
                difficulty: "hard"
            },
            {
                title: "Campus Resource Optimization",
                description: "Optimize campus resources like classrooms, parking, and utilities.",
                tags: ["Optimization", "Resources", "Campus", "Efficiency"],
                difficulty: "hard"
            },
            {
                title: "Academic Writing Assistant",
                description: "AI-powered writing assistant for academic papers and research.",
                tags: ["Writing", "AI", "Academic", "Research"],
                difficulty: "hard"
            },
            {
                title: "Student Mental Health Platform",
                description: "Mental health resources and counseling appointment system for students.",
                tags: ["Mental Health", "Counseling", "Students", "Wellness"],
                difficulty: "medium"
            },
            {
                title: "Career Services Portal",
                description: "Job placement, internship matching, and career development platform.",
                tags: ["Career", "Jobs", "Internships", "Development"],
                difficulty: "hard"
            },
            {
                title: "Campus Sustainability Tracker",
                description: "Monitor and improve campus sustainability with energy and waste tracking.",
                tags: ["Sustainability", "Energy", "Environment", "Tracking"],
                difficulty: "medium"
            },
            {
                title: "Academic Calendar Management",
                description: "Comprehensive academic calendar with scheduling and conflict resolution.",
                tags: ["Calendar", "Scheduling", "Academic", "Management"],
                difficulty: "medium"
            },
            {
                title: "Student Organization Management",
                description: "Manage student clubs and organizations with membership and event planning.",
                tags: ["Organizations", "Clubs", "Management", "Events"],
                difficulty: "medium"
            },
            {
                title: "Campus Dining Management",
                description: "Meal plan management, nutrition tracking, and dining hall operations.",
                tags: ["Dining", "Nutrition", "Meal Plans", "Operations"],
                difficulty: "medium"
            },
            {
                title: "Academic Curriculum Planner",
                description: "Plan and track academic curriculum with prerequisite management.",
                tags: ["Curriculum", "Planning", "Prerequisites", "Academic"],
                difficulty: "medium"
            },
            {
                title: "Research Data Management",
                description: "Secure storage and management of research data with version control.",
                tags: ["Research", "Data Management", "Version Control", "Security"],
                difficulty: "hard"
            },
            {
                title: "Campus Transportation System",
                description: "Shuttle tracking, route optimization, and transportation management.",
                tags: ["Transportation", "Tracking", "Optimization", "Campus"],
                difficulty: "medium"
            },
            {
                title: "Academic Program Assessment",
                description: "Assess and improve academic programs with outcome tracking and reporting.",
                tags: ["Assessment", "Programs", "Outcomes", "Reporting"],
                difficulty: "hard"
            },
            {
                title: "University Fundraising Platform",
                description: "Donor management and fundraising campaigns for university development.",
                tags: ["Fundraising", "Donors", "Campaigns", "Development"],
                difficulty: "hard"
            },
            {
                title: "Student Success Prediction System",
                description: "Machine learning system to predict student success and intervention needs.",
                tags: ["Machine Learning", "Prediction", "Student Success", "Intervention"],
                difficulty: "hard"
            },
            {
                title: "Campus Visitor Management",
                description: "Manage campus visitors, tours, and prospective student visits.",
                tags: ["Visitors", "Tours", "Prospective Students", "Management"],
                difficulty: "medium"
            },
            {
                title: "Academic Portfolio System",
                description: "Digital portfolio platform for students to showcase academic work.",
                tags: ["Portfolio", "Academic", "Showcase", "Digital"],
                difficulty: "medium"
            },
            {
                title: "Research Ethics Compliance",
                description: "Manage research ethics approvals, IRB submissions, and compliance tracking.",
                tags: ["Ethics", "Compliance", "IRB", "Research"],
                difficulty: "medium"
            },
            {
                title: "Campus Energy Management",
                description: "Monitor and optimize campus energy usage with smart building integration.",
                tags: ["Energy", "Smart Buildings", "Optimization", "Campus"],
                difficulty: "hard"
            },
            {
                title: "Academic Publication Tracker",
                description: "Track academic publications, citations, and research impact metrics.",
                tags: ["Publications", "Citations", "Research Impact", "Metrics"],
                difficulty: "medium"
            },
            {
                title: "Student Feedback System",
                description: "Collect and analyze student feedback on courses, facilities, and services.",
                tags: ["Feedback", "Surveys", "Analysis", "Improvement"],
                difficulty: "medium"
            },
            {
                title: "Campus Facility Management",
                description: "Manage campus facilities, maintenance requests, and space utilization.",
                tags: ["Facilities", "Maintenance", "Space Management", "Campus"],
                difficulty: "medium"
            },
            {
                title: "Academic Credential Verification",
                description: "Blockchain-based system for verifying and sharing academic credentials.",
                tags: ["Credentials", "Verification", "Blockchain", "Degrees"],
                difficulty: "hard"
            },
            {
                title: "University Communication Hub",
                description: "Central communication platform for announcements, news, and updates.",
                tags: ["Communication", "Announcements", "News", "University"],
                difficulty: "medium"
            },
            {
                title: "Campus Parking Management",
                description: "Smart parking system with space detection and permit management.",
                tags: ["Parking", "Smart Systems", "Permits", "Space Detection"],
                difficulty: "medium"
            },
            {
                title: "Academic Advisor Matching",
                description: "AI-powered system to match students with appropriate academic advisors.",
                tags: ["Advisor Matching", "AI", "Students", "Academic"],
                difficulty: "medium"
            },
            {
                title: "Research Equipment Tracking",
                description: "Track and manage research equipment across departments and labs.",
                tags: ["Equipment", "Research", "Tracking", "Inventory"],
                difficulty: "medium"
            },
            {
                title: "Campus Emergency Response",
                description: "Comprehensive emergency response system with mass notification capabilities.",
                tags: ["Emergency", "Response", "Notifications", "Safety"],
                difficulty: "hard"
            },
            {
                title: "Student Graduation Planner",
                description: "Plan graduation requirements and track progress toward degree completion.",
                tags: ["Graduation", "Degree Planning", "Requirements", "Progress"],
                difficulty: "medium"
            },
            {
                title: "Academic Quality Assurance",
                description: "Monitor and ensure academic quality through assessment and reporting.",
                tags: ["Quality Assurance", "Assessment", "Academic", "Reporting"],
                difficulty: "hard"
            },
            {
                title: "Campus Innovation Hub",
                description: "Platform for student innovation, entrepreneurship, and startup incubation.",
                tags: ["Innovation", "Entrepreneurship", "Startups", "Incubation"],
                difficulty: "hard"
            },
            {
                title: "University Research Portal",
                description: "Centralized portal for research projects, publications, and collaboration.",
                tags: ["Research Portal", "Projects", "Publications", "Collaboration"],
                difficulty: "hard"
            },
            {
                title: "Student Engagement Analytics",
                description: "Analyze student engagement patterns and improve retention strategies.",
                tags: ["Engagement", "Analytics", "Retention", "Students"],
                difficulty: "hard"
            },
            {
                title: "Campus Digital Signage",
                description: "Manage digital displays across campus for announcements and information.",
                tags: ["Digital Signage", "Displays", "Announcements", "Campus"],
                difficulty: "medium"
            },
            {
                title: "Academic Scheduling Optimizer",
                description: "Optimize class schedules considering resources, conflicts, and preferences.",
                tags: ["Scheduling", "Optimization", "Classes", "Resources"],
                difficulty: "hard"
            }
        ]
    },
    services: {
        title: "Services-Based Projects",
        description: "Business service ideas and platforms for entrepreneurial ventures",
        icon: "💼",
        projects: [
            {
                title: "Freelance Service Marketplace",
                description: "Connect freelancers with clients for various services with project management tools.",
                tags: ["Marketplace", "Freelancing", "Services", "Project Management"],
                difficulty: "hard"
            },
            {
                title: "Home Service Booking Platform",
                description: "On-demand booking for home services like cleaning, repairs, and maintenance.",
                tags: ["Home Services", "Booking", "On-demand", "Maintenance"],
                difficulty: "hard"
            },
            {
                title: "Pet Care Services Network",
                description: "Connect pet owners with pet sitters, walkers, and veterinary services.",
                tags: ["Pet Care", "Services", "Booking", "Network"],
                difficulty: "medium"
            },
            {
                title: "Tutoring and Education Services",
                description: "Platform connecting students with tutors for various subjects and skill levels.",
                tags: ["Tutoring", "Education", "Learning", "Matching"],
                difficulty: "medium"
            },
            {
                title: "Personal Fitness Training Platform",
                description: "Connect fitness enthusiasts with personal trainers and nutrition coaches.",
                tags: ["Fitness", "Training", "Health", "Coaching"],
                difficulty: "medium"
            },
            {
                title: "Event Planning Services Hub",
                description: "Comprehensive platform for event planning services and vendor coordination.",
                tags: ["Event Planning", "Services", "Vendors", "Coordination"],
                difficulty: "hard"
            },
            {
                title: "Legal Services Marketplace",
                description: "Connect individuals and businesses with legal professionals for various services.",
                tags: ["Legal", "Services", "Marketplace", "Professional"],
                difficulty: "hard"
            },
            {
                title: "Healthcare Services Platform",
                description: "Telemedicine and healthcare service booking with patient management.",
                tags: ["Healthcare", "Telemedicine", "Booking", "Patient Management"],
                difficulty: "hard"
            },
            {
                title: "Business Consulting Network",
                description: "Connect businesses with consultants for strategy, operations, and growth.",
                tags: ["Consulting", "Business", "Strategy", "Growth"],
                difficulty: "hard"
            },
            {
                title: "Digital Marketing Services",
                description: "Platform offering SEO, social media marketing, and content creation services.",
                tags: ["Digital Marketing", "SEO", "Social Media", "Content"],
                difficulty: "hard"
            },
            {
                title: "Translation Services Platform",
                description: "Connect clients with professional translators for document and content translation.",
                tags: ["Translation", "Languages", "Professional", "Documents"],
                difficulty: "medium"
            },
            {
                title: "Graphic Design Services Hub",
                description: "Marketplace for graphic design services including logos, branding, and web design.",
                tags: ["Graphic Design", "Branding", "Web Design", "Creative"],
                difficulty: "medium"
            },
            {
                title: "Car Rental and Sharing Service",
                description: "Peer-to-peer car rental platform with booking and insurance management.",
                tags: ["Car Rental", "Sharing", "P2P", "Transportation"],
                difficulty: "hard"
            },
            {
                title: "Property Management Services",
                description: "Comprehensive property management platform for landlords and tenants.",
                tags: ["Property Management", "Real Estate", "Landlords", "Tenants"],
                difficulty: "hard"
            },
            {
                title: "Wedding Services Directory",
                description: "Directory and booking platform for wedding vendors and service providers.",
                tags: ["Wedding", "Services", "Directory", "Vendors"],
                difficulty: "medium"
            },
            {
                title: "IT Support Services Platform",
                description: "Connect businesses with IT support professionals for technical assistance.",
                tags: ["IT Support", "Technical", "Business", "Remote"],
                difficulty: "medium"
            },
            {
                title: "Cleaning Services Management",
                description: "Platform for managing cleaning services with scheduling and quality control.",
                tags: ["Cleaning", "Services", "Scheduling", "Quality"],
                difficulty: "medium"
            },
            {
                title: "Photography Services Network",
                description: "Connect clients with photographers for events, portraits, and commercial work.",
                tags: ["Photography", "Services", "Events", "Commercial"],
                difficulty: "medium"
            },
            {
                title: "Childcare Services Platform",
                description: "Trusted network of childcare providers with background checks and reviews.",
                tags: ["Childcare", "Services", "Safety", "Reviews"],
                difficulty: "hard"
            },
            {
                title: "Financial Advisory Services",
                description: "Platform connecting individuals with financial advisors and planners.",
                tags: ["Financial", "Advisory", "Planning", "Investment"],
                difficulty: "hard"
            },
            {
                title: "Mental Health Counseling Platform",
                description: "Telehealth platform for mental health counseling and therapy sessions.",
                tags: ["Mental Health", "Counseling", "Telehealth", "Therapy"],
                difficulty: "hard"
            },
            {
                title: "Home Chef Services Network",
                description: "Connect food lovers with personal chefs for meal preparation and catering.",
                tags: ["Food", "Chefs", "Meal Prep", "Catering"],
                difficulty: "medium"
            },
            {
                title: "Elder Care Services Platform",
                description: "Comprehensive platform for elder care services and family communication.",
                tags: ["Elder Care", "Services", "Family", "Communication"],
                difficulty: "hard"
            },
            {
                title: "Music Lesson Services Hub",
                description: "Connect music students with instructors for various instruments and styles.",
                tags: ["Music", "Lessons", "Instruction", "Learning"],
                difficulty: "medium"
            },
            {
                title: "Landscaping Services Platform",
                description: "Connect property owners with landscaping professionals for design and maintenance.",
                tags: ["Landscaping", "Services", "Design", "Maintenance"],
                difficulty: "medium"
            },
            {
                title: "Moving Services Marketplace",
                description: "Platform for booking moving services with quotes and scheduling.",
                tags: ["Moving", "Services", "Booking", "Logistics"],
                difficulty: "medium"
            },
            {
                title: "Beauty Services Network",
                description: "Connect clients with beauty professionals for hair, makeup, and skincare services.",
                tags: ["Beauty", "Services", "Hair", "Makeup"],
                difficulty: "medium"
            },
            {
                title: "Handyman Services Platform",
                description: "On-demand handyman services with skill matching and project tracking.",
                tags: ["Handyman", "Services", "Repairs", "Maintenance"],
                difficulty: "medium"
            },
            {
                title: "Language Learning Services",
                description: "Platform connecting language learners with native speakers and tutors.",
                tags: ["Language", "Learning", "Tutoring", "Cultural Exchange"],
                difficulty: "medium"
            },
            {
                title: "Specialty Food Services",
                description: "Custom meal delivery and specialty food preparation services.",
                tags: ["Food", "Delivery", "Specialty", "Custom"],
                difficulty: "medium"
            },
            {
                title: "Home Security Services",
                description: "Platform for home security installation and monitoring services.",
                tags: ["Security", "Home", "Installation", "Monitoring"],
                difficulty: "hard"
            },
            {
                title: "Personal Shopping Services",
                description: "Connect busy individuals with personal shoppers for groceries and retail.",
                tags: ["Shopping", "Personal", "Groceries", "Retail"],
                difficulty: "medium"
            },
            {
                title: "Vacation Rental Management",
                description: "Comprehensive platform for managing vacation rental properties and bookings.",
                tags: ["Vacation Rental", "Management", "Bookings", "Property"],
                difficulty: "hard"
            },
            {
                title: "Equipment Rental Services",
                description: "Platform for renting tools, equipment, and machinery for projects.",
                tags: ["Equipment", "Rental", "Tools", "Machinery"],
                difficulty: "medium"
            },
            {
                title: "Delivery Services Network",
                description: "Local delivery network for packages, food, and specialty items.",
                tags: ["Delivery", "Local", "Packages", "Logistics"],
                difficulty: "hard"
            },
            {
                title: "Professional Training Services",
                description: "Corporate training and professional development service platform.",
                tags: ["Training", "Professional", "Corporate", "Development"],
                difficulty: "medium"
            },
            {
                title: "Waste Management Services",
                description: "Platform for waste collection, recycling, and disposal services.",
                tags: ["Waste Management", "Recycling", "Disposal", "Environmental"],
                difficulty: "medium"
            },
            {
                title: "Personal Assistant Services",
                description: "Virtual and in-person personal assistant services for busy professionals.",
                tags: ["Personal Assistant", "Virtual", "Professional", "Tasks"],
                difficulty: "medium"
            },
            {
                title: "Elderly Companion Services",
                description: "Companion services for elderly individuals with activity planning and support.",
                tags: ["Elderly", "Companion", "Support", "Activities"],
                difficulty: "medium"
            },
            {
                title: "Pet Grooming Services",
                description: "Mobile and in-salon pet grooming services with booking and scheduling.",
                tags: ["Pet Grooming", "Mobile", "Booking", "Scheduling"],
                difficulty: "medium"
            },
            {
                title: "Custom Tailoring Services",
                description: "Platform for custom tailoring and alteration services with measurements.",
                tags: ["Tailoring", "Custom", "Alterations", "Measurements"],
                difficulty: "medium"
            },
            {
                title: "Garden Design Services",
                description: "Connect homeowners with garden designers for landscape planning and design.",
                tags: ["Garden", "Design", "Landscape", "Planning"],
                difficulty: "medium"
            },
            {
                title: "Computer Repair Services",
                description: "Platform for computer and device repair services with diagnostics.",
                tags: ["Computer Repair", "Devices", "Diagnostics", "Technical"],
                difficulty: "medium"
            },
            {
                title: "Interior Design Services",
                description: "Connect clients with interior designers for home and office design projects.",
                tags: ["Interior Design", "Home", "Office", "Design"],
                difficulty: "medium"
            },
            {
                title: "Catering Services Platform",
                description: "Comprehensive catering service platform with menu planning and event coordination.",
                tags: ["Catering", "Menu Planning", "Events", "Coordination"],
                difficulty: "hard"
            },
            {
                title: "Subscription Box Services",
                description: "Platform for creating and managing subscription box services for various niches.",
                tags: ["Subscription", "Box", "Services", "Niche"],
                difficulty: "medium"
            },
            {
                title: "Home Staging Services",
                description: "Real estate staging services with virtual staging and project management.",
                tags: ["Home Staging", "Real Estate", "Virtual", "Project Management"],
                difficulty: "medium"
            },
            {
                title: "Personal Finance Services",
                description: "Financial planning and budgeting services with goal tracking and advice.",
                tags: ["Finance", "Planning", "Budgeting", "Goals"],
                difficulty: "medium"
            },
            {
                title: "Event Photography Services",
                description: "Specialized event photography services with portfolio and booking management.",
                tags: ["Photography", "Events", "Portfolio", "Booking"],
                difficulty: "medium"
            },
            {
                title: "Specialty Cake Services",
                description: "Custom cake design and baking services for special occasions.",
                tags: ["Cake", "Custom", "Baking", "Special Occasions"],
                difficulty: "medium"
            }
        ]
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const categoriesGrid = document.getElementById('categoriesGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupSearch();
    setupCategoryToggles();
});

// Render all categories
function renderCategories() {
    const categories = Object.keys(projectIdeas);
    const categoriesHTML = categories.map(categoryKey => {
        const category = projectIdeas[categoryKey];
        return createCategoryHTML(categoryKey, category);
    }).join('');
    
    categoriesGrid.innerHTML = categoriesHTML;
}

// Create HTML for a category
function createCategoryHTML(categoryKey, category) {
    const projectsHTML = category.projects.map(project => createProjectHTML(project)).join('');
    
    return `
        <div class="category-section category-${categoryKey}" id="${categoryKey}">
            <div class="category-header" onclick="toggleCategory('${categoryKey}')" tabindex="0" role="button" aria-expanded="false">
                <div class="category-info">
                    <h2 class="category-title">${category.title}</h2>
                    <p class="category-description">${category.description}</p>
                </div>
                <div class="category-count">${category.projects.length} Projects</div>
                <svg class="category-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
            <div class="category-content" id="content-${categoryKey}">
                <div class="projects-grid">
                    ${projectsHTML}
                </div>
            </div>
        </div>
    `;
}

// Create HTML for a project
function createProjectHTML(project) {
    const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    
    return `
        <div class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${tagsHTML}</div>
            <div class="project-difficulty difficulty-${project.difficulty}">${project.difficulty}</div>
        </div>
    `;
}

// Toggle category visibility
function toggleCategory(categoryKey) {
    const content = document.getElementById(`content-${categoryKey}`);
    const header = content.previousElementSibling;
    const toggle = header.querySelector('.category-toggle');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.classList.remove('expanded');
        header.setAttribute('aria-expanded', 'false');
    } else {
        content.classList.add('expanded');
        toggle.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
    }
}

// Setup search functionality
function setupSearch() {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            searchResults.style.display = 'block';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Handle search input
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }
    
    const results = searchProjects(query);
    displaySearchResults(results);
}

// Search through all projects
function searchProjects(query) {
    const results = [];
    
    Object.keys(projectIdeas).forEach(categoryKey => {
        const category = projectIdeas[categoryKey];
        category.projects.forEach(project => {
            if (projectMatchesQuery(project, query)) {
                results.push({
                    ...project,
                    category: category.title,
                    categoryKey: categoryKey
                });
            }
        });
    });
    
    return results;
}

// Check if project matches search query
function projectMatchesQuery(project, query) {
    const searchableText = [
        project.title,
        project.description,
        ...project.tags
    ].join(' ').toLowerCase();
    
    return searchableText.includes(query);
}

// Display search results
function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No projects found</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    const resultsHTML = results.slice(0, 10).map(result => `
        <div class="search-result-item" onclick="navigateToProject('${result.categoryKey}', '${result.title}')">
            <div class="search-result-title">${result.title}</div>
            <div class="search-result-category">${result.category}</div>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
}

// Navigate to a specific project
function navigateToProject(categoryKey, projectTitle) {
    searchResults.style.display = 'none';
    searchInput.value = '';
    
    // Expand the category if it's not already expanded
    const content = document.getElementById(`content-${categoryKey}`);
    if (!content.classList.contains('expanded')) {
        toggleCategory(categoryKey);
    }
    
    // Scroll to the category
    const categoryElement = document.getElementById(categoryKey);
    categoryElement.scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the project card
    setTimeout(() => {
        const projectCards = categoryElement.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (card.querySelector('.project-title').textContent === projectTitle) {
                card.style.transform = 'scale(1.02)';
                card.style.boxShadow = '0 8px 25px rgba(79, 70, 229, 0.3)';
                card.style.borderColor = '#4f46e5';
                
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                    card.style.borderColor = '';
                }, 2000);
            }
        });
    }, 500);
}

// Setup category toggle keyboard navigation
function setupCategoryToggles() {
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

// Additional utility functions for project management
function getProjectCount() {
    return Object.values(projectIdeas).reduce((total, category) => total + category.projects.length, 0);
}

function getProjectsByDifficulty(difficulty) {
    const projects = [];
    Object.keys(projectIdeas).forEach(categoryKey => {
        const category = projectIdeas[categoryKey];
        category.projects.forEach(project => {
            if (project.difficulty === difficulty) {
                projects.push({
                    ...project,
                    category: category.title
                });
            }
        });
    });
    return projects;
}

function getProjectsByTag(tag) {
    const projects = [];
    Object.keys(projectIdeas).forEach(categoryKey => {
        const category = projectIdeas[categoryKey];
        category.projects.forEach(project => {
            if (project.tags.includes(tag)) {
                projects.push({
                    ...project,
                    category: category.title
                });
            }
        });
    });
    return projects;
}

// Export functions for external use
window.projectIdeasApp = {
    getProjectCount,
    getProjectsByDifficulty,
    getProjectsByTag,
    searchProjects,
    projectIdeas
};

// Console welcome message
console.log(`
🚀 Project Ideas Hub loaded successfully!
📊 Total projects: ${getProjectCount()}
🔍 Use the search bar to find specific projects
💡 Click on category headers to expand/collapse sections

Available functions:
- window.projectIdeasApp.getProjectCount()
- window.projectIdeasApp.getProjectsByDifficulty('easy'|'medium'|'hard')
- window.projectIdeasApp.getProjectsByTag('tagName')
- window.projectIdeasApp.searchProjects('query')
`);