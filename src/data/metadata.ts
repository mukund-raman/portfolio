export interface MetadataItem {
    description: string;
    icon?: string; // Slug for simpleicons.org or URL
    tagline?: string;
    year?: string;
}

export const SKILL_DATA: Record<string, MetadataItem> = {
    "Python": {
        description: "A versatile language used for data science, backend development, and automation. My go-to for quick prototyping and complex data analysis.",
        tagline: "The Swiss Army Knife of Coding",
        year: "Created 1991",
        icon: "/images/logos/python.svg"
    },
    "C++": {
        description: "High-performance language for systems programming. Used in my graphics engine projects and competitive programming.",
        tagline: "Maximum Performance & Control",
        year: "Created 1985",
        icon: "/images/logos/cplusplus.svg"
    },
    "Java": {
        description: "Object-oriented language used for building robust enterprise-level applications and Android development.",
        tagline: "Write Once, Run Anywhere",
        year: "Created 1995",
        icon: "/images/logos/java.svg"
    },
    "Typescript": {
        description: "A superset of JavaScript that adds static typing. Essential for maintaining large-scale frontend codebases.",
        tagline: "JavaScript with Superpowers",
        year: "Created 2012",
        icon: "/images/logos/typescript.svg"
    },
    "React": {
        description: "A library for building dynamic user interfaces. I use it for building interactive single-page applications.",
        tagline: "Component-Based UI Library",
        year: "Created 2013",
        icon: "/images/logos/react.svg"
    },
    "Astro": {
        description: "A web framework for building content-driven websites like this portfolio. Fast by default.",
        tagline: "The Web Framework for Content",
        year: "Created 2021",
        icon: "/images/logos/astro.svg"
    },
    "Tailwind": {
        description: "A utility-first CSS framework for rapid UI development. Used extensively in this portfolio.",
        tagline: "Rapid UI Development",
        year: "Created 2017",
        icon: "/images/logos/tailwind.svg"
    },
    "Docker": {
        description: "Platform for developing, shipping, and running applications in containers.",
        tagline: "Build, Ship, and Run Anywhere",
        year: "Created 2013",
        icon: "/images/logos/docker.svg"
    },
    "Kubernetes": {
        description: "Container orchestration system for automating application deployment, scaling, and management.",
        tagline: "Production-Grade Orchestration",
        year: "Created 2014",
        icon: "/images/logos/kubernetes.svg"
    },
    "PyTorch": {
        description: "Open source machine learning framework. Used for my deep learning research and projects.",
        tagline: "Deep Learning Framework",
        year: "Created 2016",
        icon: "/images/logos/pytorch.svg"
    },
    "TensorFlow": {
        description: "End-to-end open source platform for machine learning.",
        tagline: "ML for Production",
        year: "Created 2015",
        icon: "/images/logos/tensorflow.svg"
    },
    "Linux": {
        description: "Open source operating system. My primary development environment for server-side work.",
        tagline: "The Foundation of the Cloud",
        year: "Created 1991",
        icon: "/images/logos/linux.svg"
    },
    "Git": {
        description: "Distributed version control system. Essential for collaboration and code management.",
        tagline: "Version Control Standard",
        year: "Created 2005",
        icon: "/images/logos/git.svg"
    },
    "Go": {
        description: "Statically typed, compiled language designed at Google. Great for concurrent systems.",
        tagline: "Cloud-Native Performance",
        year: "Created 2009",
        icon: "/images/logos/go.svg"
    },
    "AWS": {
        description: "Comprehensive cloud computing platform. I use EC2, S3, and Lambda regularly.",
        tagline: "Cloud Infrastructure Specialist",
        year: "Created 2006",
        icon: "/images/logos/aws.svg"
    },
    "PostgreSQL": {
        description: "Advanced open source relational database.",
        tagline: "Advanced Relational Database",
        year: "Created 1996",
        icon: "/images/logos/postgresql.svg"
    },
    "Kafka": {
        description: "Distributed event store and stream-processing platform.",
        tagline: "Real-time Data Streaming",
        year: "Created 2011",
        icon: "/images/logos/kafka.svg"
    },
    "TensorFlow Lite": {
        description: "A set of tools to run TensorFlow models on on-device, mobile, and embedded devices.",
        tagline: "ML on Mobile",
        year: "Created 2017",
        icon: "/images/logos/tensorflow.svg"
    },
    "Vercel": {
        description: "Platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.",
        tagline: "Develop. Preview. Ship.",
        year: "Created 2015",
        icon: "/images/logos/vercel.svg"
    },
    // New Skills
    "GraphQL": {
        description: "A query language for APIs and a runtime for fulfilling those queries with your existing data.",
        tagline: "API Query Language",
        year: "Created 2012",
        icon: "/images/logos/graphql.svg"
    },
    "Jest": {
        description: "Delightful JavaScript Testing Framework with a focus on simplicity.",
        tagline: "Zero Config Testing",
        year: "Created 2011",
        icon: "/images/logos/jest.svg"
    },
    "C#": {
        description: "A modern, object-oriented, and type-safe programming language.",
        tagline: "Versatile .NET Language",
        year: "Created 2000",
        icon: "/images/logos/csharp.svg"
    },
    "Azure": {
        description: "A comprehensive cloud computing service created by Microsoft.",
        tagline: "Cloud Computing Platform",
        year: "Created 2010",
        icon: "/images/logos/azure.svg"
    },
    "D3.js": {
        description: "JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
        tagline: "Data-Driven Documents",
        year: "Created 2011",
        icon: "/images/logos/d3.svg"
    },
    "Flask": {
        description: "A micro web framework written in Python.",
        tagline: "Web Development, one drop at a time",
        year: "Created 2010",
        icon: "/images/logos/flask.svg"
    },
    "CSS": {
        description: "Style sheet language used for describing the presentation of a document written in a markup language.",
        tagline: "Style The Web",
        year: "Created 1996",
        icon: "/images/logos/css.svg"
    },
    "Node.js": {
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
        tagline: "JS on the Server",
        year: "Created 2009",
        icon: "/images/logos/nodejs.svg"
    },
    "Vue.js": {
        description: "The Progressive JavaScript Framework.",
        tagline: "Approachable, Versatile, Performant",
        year: "Created 2014",
        icon: "/images/logos/vue.svg"
    },
    "Next.js": {
        description: "The React Framework for the Web.",
        tagline: "Production React",
        year: "Created 2016",
        icon: "/images/logos/nextjs.svg"
    },
    "JavaScript": {
        description: "The programming language of the Web.",
        tagline: "Web Logic",
        year: "Created 1995",
        icon: "javascript"
    },
    "SQL": {
        description: "Domain-specific language used in programming and designed for managing data held in a relational database.",
        tagline: "Structured Query Language",
        year: "Created 1974",
        icon: "/images/logos/postgresql.svg"
    },
    "Redis": {
        description: "Open source, in-memory data structure store, used as a database, cache, and message broker.",
        tagline: "In-Memory Data Store",
        year: "Created 2009",
        icon: "/images/logos/redis.svg"
    },
    "AI": {
        description: "Simulation of human intelligence processes by machines, especially computer systems.",
        tagline: "Artificial Intelligence",
        year: "Field Est. 1956",
        icon: "/images/logos/openai.svg"
    },
    "NLP": {
        description: "Interaction between computers and human language.",
        tagline: "Natural Language Processing",
        year: "Field Est. 1950s",
        icon: "/images/logos/huggingface.svg"
    },
    "Robotics": {
        description: "Design, construction, operation, and use of robots.",
        tagline: "Autonomous Systems",
        year: "Field Est. 1920s",
        icon: "/images/logos/ros.svg"
    },
    "Tutorial": {
        description: "Educational content to share knowledge.",
        tagline: "Sharing Knowledge",
        year: "Ongoing",
        icon: "/images/logos/youtube.svg"
    },
    "Teaching": {
        description: "Experience in academic instruction and mentorship.",
        tagline: "Sharing Knowledge",
        year: "Since 2018",
        // No icon
    },
    "Algorithms": {
        description: "Deep understanding of core CS algorithms.",
        tagline: "Problem Solving",
        year: "Since 2018",
        // No icon
    },
    "Data Structures": {
        description: "Fundamental constructs for organizing and storing data.",
        tagline: "Efficient Data Organization",
        year: "Since 2018",
        // No icon
    },
    "Public Speaking": {
        description: "Experience presenting to large technical audiences.",
        tagline: "Communication",
        year: "Since 2018",
        // No icon
    }
};

export const COMPANY_DATA: Record<string, MetadataItem> = {
    "Amazon": {
        description: "E-commerce and cloud computing giant. I work in the AWS Platform Engineering division.",
        tagline: "Work Hard. Have Fun. Make History.",
        year: "Founded 1994",
        icon: "/images/logos/amazon.png"
    },
    "OpenAI": {
        description: "AI research and deployment company tailored to safe artificial general intelligence.",
        tagline: "Creating AGI",
        year: "Founded 2015",
        icon: "/images/logos/openai.svg"
    },
    "Google": {
        description: "Multinational technology company specializing in Internet-related services and products.",
        tagline: "Organize the World's Information",
        year: "Founded 1998",
        icon: "/images/logos/google.svg"
    },
    "Meta": {
        description: "Technology company focusing on social connection (Facebook, Instagram, WhatsApp, VR).",
        tagline: "Connect the World",
        year: "Founded 2004",
        icon: "/images/logos/meta.png"
    },
    "MIT CSAIL": {
        description: "Computer Science and Artificial Intelligence Laboratory at MIT.",
        tagline: "Pioneering Computing",
        year: "Est. 2003",
        icon: "/images/logos/mit.png"
    },
    "Microsoft": {
        description: "Multinational corporation producing software, consumer electronics, personal computers, and related services.",
        tagline: "Empowering Us All",
        year: "Founded 1975",
        icon: "/images/logos/microsoft.svg"
    },
    "Stanford University": {
        description: "Private research university in Stanford, California.",
        tagline: "The Wind of Freedom Blows",
        year: "Est. 1885",
        icon: "/images/logos/stanford.png"
    },
    "Tesla": {
        description: "Electric vehicle and clean energy company.",
        tagline: "Accelerating Sustainable Energy",
        year: "Founded 2003",
        icon: "/images/logos/tesla.png"
    },
    "Tech Innovations Inc": {
        description: "Legacy entry.",
        year: "2010"
    }
};

export const FALLBACK_DATA: MetadataItem = {
    description: "A key technology in my stack.",
    tagline: "Essential Tool"
};
