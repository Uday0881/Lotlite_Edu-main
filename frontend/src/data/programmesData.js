export const programmesData = {
  navigation: [
    {
      title: 'UG Program',
      type: 'dropdown',
      items: [
        { label: 'BBA', path: '/programmes/ug/bba' },
        { label: 'BCA', path: '/programmes/ug/bca' },
      ],
    },
    {
      title: 'PG Program',
      type: 'dropdown',
      items: [
        { label: 'MBA', path: '/programmes/pg/mba' },
        { label: 'MSc Data Science', path: '/programmes/pg/msc-data-science' },
        { label: 'MSc Computer Applications', path: '/programmes/pg/msc-computer-applications' },
      ],
    },
    {
      title: 'Crash Course',
      type: 'link',
      path: '/programmes/crash-course',
    },
    {
      title: 'Startups',
      type: 'link',
      path: '/programmes/startups',
    },
  ],
  programs: {
    bba: {
      id: 'bba',
      slug: 'bba',
      category: 'ug',
      title: 'Bachelor of Business Administration',
      tagline: 'Executive business systems for modern real estate leadership.',
      shortTitle: 'BBA',
      description: 'A premium undergraduate track focused on executive management, investment analytics, and high-value property ecosystems.',
      duration: '3 Years',
      mode: 'Hybrid Campus',
      eligibility: '12th Grade / Equivalent',
      ctaLabel: 'Join the BBA Cohort',
      heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop',
      theme: {
        page: 'crm',
        primary: '#0F172A',
        secondary: '#12502B',
        accent: '#38BDF8',
        glow: 'rgba(56,189,248,0.16)',
      },
      curriculum: [
        {
          semester: 1,
          tier: 'Foundational',
          title: 'Management Foundations',
          subjects: ['Business Communication', 'Principles of Management', 'Introductory Accounting', 'Microeconomics', 'Digital Literacy for Business'],
        },
        {
          semester: 2,
          tier: 'Foundational',
          title: 'Organizational Systems',
          subjects: ['Marketing Fundamentals', 'Organizational Behavior', 'Business Mathematics', 'Financial Accounting', 'Strategic Communication'],
        },
        {
          semester: 3,
          tier: 'Intermediate',
          title: 'Growth Operations',
          subjects: ['Marketing Analytics', 'Operations Management', 'Consumer Psychology', 'Project Management', 'Real Estate Fundamentals'],
        },
        {
          semester: 4,
          tier: 'Intermediate',
          title: 'Strategic Execution',
          subjects: ['Corporate Finance', 'Digital Business Models', 'Sales Leadership', 'Legal Frameworks', 'Ethical Leadership'],
        },
        {
          semester: 5,
          tier: 'Advanced',
          title: 'Portfolio Intelligence',
          subjects: ['Property Valuation', 'Investment Analysis', 'PropTech Platforms', 'Client Relationship Systems', 'Data-driven Decision Making'],
        },
        {
          semester: 6,
          tier: 'Mastery',
          title: 'Capstone Leadership',
          subjects: ['Strategic Brand Management', 'Sustainable Real Estate', 'Entrepreneurship Lab', 'Capstone Project', 'Industry Immersion'],
        },
      ],
      spiralSemesters: {
        foundational: {
          title: 'Foundational Learning',
          description: 'Launch with a modern foundation in business systems, client research, and asset intelligence.',
          cards: [
            {
              semesterLabel: 'Semester 1',
              title: 'Core Fundamentals',
              summary: 'Build the business language, frameworks, and operational discipline that premium real estate leaders use.',
              subjects: ['Business Communication', 'Principles of Management', 'Introductory Accounting', 'Microeconomics', 'Digital Literacy for Business'],
            },
            {
              semesterLabel: 'Semester 2',
              title: 'Operational Fluency',
              summary: 'Develop disciplined systems and communication strategies for high-growth portfolios.',
              subjects: ['Marketing Fundamentals', 'Organizational Behavior', 'Business Mathematics', 'Financial Accounting', 'Strategic Communication'],
            },
          ],
        },
        intermediate: {
          title: 'Intermediate Development',
          description: 'Shift into operational scale, portfolio analytics, and digital client delivery.',
          cards: [
            {
              semesterLabel: 'Semester 3',
              title: 'Growth Operations',
              summary: 'Scale from foundational systems to predictable business execution and investment insight.',
              subjects: ['Marketing Analytics', 'Operations Management', 'Consumer Psychology', 'Project Management', 'Real Estate Fundamentals'],
            },
            {
              semesterLabel: 'Semester 4',
              title: 'Strategic Execution',
              summary: 'Align finance, legal, and brand strategy for high-performance market outcomes.',
              subjects: ['Corporate Finance', 'Digital Business Models', 'Sales Leadership', 'Legal Frameworks', 'Ethical Leadership'],
            },
          ],
        },
        advanced: {
          title: 'Advanced Industry Skills',
          description: 'Advance into portfolio intelligence, investor readiness, and data-led decision making.',
          cards: [
            {
              semesterLabel: 'Semester 5',
              title: 'Portfolio Intelligence',
              summary: 'Master analysis and operating frameworks used by professional investment teams.',
              subjects: ['Property Valuation', 'Investment Analysis', 'PropTech Platforms', 'Client Relationship Systems', 'Data-driven Decision Making'],
            },
          ],
        },
        mastery: {
          title: 'Super Advanced Industry Mastery',
          description: 'Deliver transformational strategy through hands-on capstone studios and market immersion.',
          cards: [
            {
              semesterLabel: 'Semester 6',
              title: 'Capstone Leadership',
              summary: 'Design and execute a real-world business project for property, operations, and startup readiness.',
              subjects: ['Strategic Brand Management', 'Sustainable Real Estate', 'Entrepreneurship Lab', 'Capstone Project', 'Industry Immersion'],
            },
          ],
        },
      },
      specializations: ['Finance', 'Marketing', 'Operations', 'PropTech Innovation'],
    },
    bca: {
      id: 'bca',
      slug: 'bca',
      category: 'ug',
      title: 'Bachelor of Computer Applications',
      tagline: 'Application-driven computing for property technology and smart infrastructure.',
      shortTitle: 'BCA',
      description: 'A premium undergraduate computing journey blending software engineering, cloud systems, and real estate digital innovation.',
      duration: '3 Years',
      mode: 'Hybrid Campus',
      eligibility: '12th Grade / Equivalent',
      ctaLabel: 'Join the BCA Cohort',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
      theme: {
        page: 'it',
        primary: '#4338CA',
        secondary: '#312E81',
        accent: '#8B5CF6',
        glow: 'rgba(139,92,246,0.16)',
      },
      curriculum: [
        {
          semester: 1,
          tier: 'Foundational',
          title: 'Digital Foundations',
          subjects: ['Programming in C', 'Mathematics for Computing', 'Digital Electronics', 'Operating Systems', 'Web Fundamentals'],
        },
        {
          semester: 2,
          tier: 'Foundational',
          title: 'Data Systems',
          subjects: ['Data Structures', 'DBMS', 'Computer Networks', 'Software Lab', 'Object-oriented Design'],
        },
        {
          semester: 3,
          tier: 'Intermediate',
          title: 'Platform Engineering',
          subjects: ['Advanced Programming', 'Network Security', 'Database Design', 'Software Testing', 'Cloud Foundations'],
        },
        {
          semester: 4,
          tier: 'Intermediate',
          title: 'Product Development',
          subjects: ['Web & Mobile App Development', 'DevOps Practices', 'UI/UX Design', 'Project Management', 'Data Analytics'],
        },
        {
          semester: 5,
          tier: 'Advanced',
          title: 'Enterprise Systems',
          subjects: ['Machine Learning Essentials', 'Enterprise Architecture', 'Cyber Security', 'API Design', 'Agile Delivery'],
        },
        {
          semester: 6,
          tier: 'Mastery',
          title: 'Capstone Studio',
          subjects: ['Real-World Capstone Project', 'Industry Integration', 'Portfolio Showcase', 'Career Readiness'],
        },
      ],
      spiralSemesters: {
        foundational: {
          title: 'Foundational Learning',
          description: 'Ground your application engineering practice in reliable systems, data thinking, and software fundamentals.',
          cards: [
            {
              semesterLabel: 'Semester 1',
              title: 'System Foundations',
              summary: 'Learn the building blocks of computing, electronics, and digital architecture.',
              subjects: ['Programming in C', 'Mathematics for Computing', 'Digital Electronics', 'Operating Systems', 'Web Fundamentals'],
            },
            {
              semesterLabel: 'Semester 2',
              title: 'Data Foundations',
              summary: 'Develop the data structures and database skills that power modern intelligent applications.',
              subjects: ['Data Structures', 'DBMS', 'Computer Networks', 'Software Lab', 'Object-oriented Design'],
            },
          ],
        },
        intermediate: {
          title: 'Intermediate Development',
          description: 'Evolve into product-driven engineering and responsible platform architecture.',
          cards: [
            {
              semesterLabel: 'Semester 3',
              title: 'Platform Engineering',
              summary: 'Build resilient systems with secure networking, advanced programming and cloud-ready foundations.',
              subjects: ['Advanced Programming', 'Network Security', 'Database Design', 'Software Testing', 'Cloud Foundations'],
            },
            {
              semesterLabel: 'Semester 4',
              title: 'Product Development',
              summary: 'Design and deliver polished digital products with strong UX, DevOps, and analytics pipelines.',
              subjects: ['Web & Mobile App Development', 'DevOps Practices', 'UI/UX Design', 'Project Management', 'Data Analytics'],
            },
          ],
        },
        advanced: {
          title: 'Advanced Industry Skills',
          description: 'Master enterprise-grade systems, AI-enabled workflows and secure data platforms.',
          cards: [
            {
              semesterLabel: 'Semester 5',
              title: 'Enterprise Systems',
              summary: 'Step into large-scale engineering with security, architecture, and AI readiness.',
              subjects: ['Machine Learning Essentials', 'Enterprise Architecture', 'Cyber Security', 'API Design', 'Agile Delivery'],
            },
          ],
        },
        mastery: {
          title: 'Super Advanced Industry Mastery',
          description: 'Deliver a capstone portfolio built for real estate innovation, proptech integration, and market launch.',
          cards: [
            {
              semesterLabel: 'Semester 6',
              title: 'Capstone Studio',
              summary: 'Design, build and ship a high-impact real-world project with industry coaching.',
              subjects: ['Real-World Capstone Project', 'Industry Integration', 'Portfolio Showcase', 'Career Readiness'],
            },
          ],
        },
      },
      specializations: ['Software Engineering', 'Data Systems', 'Cyber Security', 'Cloud Platforms'],
    },
    mba: {
      id: 'mba',
      slug: 'mba',
      category: 'pg',
      title: 'Master of Business Administration',
      tagline: 'Leadership for the next generation of PropTech and commercial property enterprises.',
      shortTitle: 'MBA',
      description: 'An elite MBA designed for ambitious professionals building data-led, customer-centric real estate ventures.',
      duration: '2 Years',
      mode: 'Blended Learning',
      eligibility: 'Graduate in Any Discipline',
      ctaLabel: 'Enroll in the MBA Cohort',
      heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop',
      theme: {
        page: 'crm',
        primary: '#831843',
        secondary: '#1F2937',
        accent: '#F97316',
        glow: 'rgba(249,115,22,0.18)',
      },
      curriculum: [
        {
          semester: 1,
          tier: 'Foundational',
          title: 'Business Strategy',
          subjects: ['Strategic Management', 'Corporate Finance', 'Marketing Strategy', 'Business Analytics'],
        },
        {
          semester: 2,
          tier: 'Intermediate',
          title: 'Operations & Insight',
          subjects: ['Operations Management', 'Leadership', 'Digital Business Models', 'Data-driven Decision Making'],
        },
        {
          semester: 3,
          tier: 'Advanced',
          title: 'Real Estate Systems',
          subjects: ['Property Finance', 'Client Lifecycle Management', 'Real Estate Law', 'Innovation Labs'],
        },
        {
          semester: 4,
          tier: 'Mastery',
          title: 'Executive Capstone',
          subjects: ['Strategic Investment', 'Corporate Transformation', 'Global Business Environment', 'Capstone Project'],
        },
      ],
      spiralSemesters: {
        foundational: {
          title: 'Foundational Learning',
          description: 'Ground leaders in strategy, analytic discipline, and the core language of premium real estate business.',
          cards: [
            {
              semesterLabel: 'Semester 1',
              title: 'Business Strategy',
              summary: 'Establish frameworks for decision-making, finance, and market differentiation.',
              subjects: ['Strategic Management', 'Corporate Finance', 'Marketing Strategy', 'Business Analytics'],
            },
          ],
        },
        intermediate: {
          title: 'Intermediate Development',
          description: 'Build operational excellence and practical insight into business performance and leadership.',
          cards: [
            {
              semesterLabel: 'Semester 2',
              title: 'Operations & Insight',
              summary: 'Translate data, people, and process into repeatable growth systems.',
              subjects: ['Operations Management', 'Leadership', 'Digital Business Models', 'Data-driven Decision Making'],
            },
          ],
        },
        advanced: {
          title: 'Advanced Industry Skills',
          description: 'Up-level to real estate systems thinking, capital strategy, and customer-first portfolio design.',
          cards: [
            {
              semesterLabel: 'Semester 3',
              title: 'Real Estate Systems',
              summary: 'Understand property finance, client management, legal frameworks, and innovation-driven offerings.',
              subjects: ['Property Finance', 'Client Lifecycle Management', 'Real Estate Law', 'Innovation Labs'],
            },
          ],
        },
        mastery: {
          title: 'Super Advanced Industry Mastery',
          description: 'Execute capstone impact through strategy, governance, and transformational leadership.',
          cards: [
            {
              semesterLabel: 'Semester 4',
              title: 'Executive Capstone',
              summary: 'Deliver a practice-led project built for industry transformation and leadership acceleration.',
              subjects: ['Strategic Investment', 'Corporate Transformation', 'Global Business Environment', 'Capstone Project'],
            },
          ],
        },
      },
      specializations: ['Finance Management', 'Business Analytics', 'Operations Leadership', 'Real Estate Strategy'],
    },
    'msc-data-science': {
      id: 'msc-data-science',
      slug: 'msc-data-science',
      category: 'pg',
      title: 'MSc in Data Science',
      tagline: 'Data science for intelligent real estate and predictive portfolio insights.',
      shortTitle: 'MSc Data Science',
      description: 'A flagship program that fuses advanced analytics, machine intelligence, and property investment modeling.',
      duration: '2 Years',
      mode: 'Online / Blended',
      eligibility: 'Graduate with Mathematics, Statistics or Computer Science background preferred',
      ctaLabel: 'Enroll in Data Science',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
      theme: {
        page: 'ds',
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#0EA5E9',
        glow: 'rgba(14,165,233,0.18)',
      },
      curriculum: [
        {
          semester: 1,
          tier: 'Foundational',
          title: 'Data Science Foundations',
          subjects: ['Statistical Computing', 'Research Methodology', 'Data Analysis Using Python', 'NoSQL Databases', 'Data Management'],
        },
        {
          semester: 2,
          tier: 'Foundational',
          title: 'Analytics Foundations',
          subjects: ['Multivariate Statistics', 'Statistical Inference', 'Machine Learning Algorithms', 'Text Analytics', 'Data Privacy'],
        },
        {
          semester: 3,
          tier: 'Advanced',
          title: 'Applied Intelligence',
          subjects: ['Neural Networks & Deep Learning', 'Data Visualization', 'Specialization Elective', 'Operations Research'],
        },
        {
          semester: 4,
          tier: 'Mastery',
          title: 'Capstone Analytics',
          subjects: ['Time Series Analytics', 'Analytics Applications', 'Final Dissertation / Project'],
        },
      ],
      spiralSemesters: {
        foundational: {
          title: 'Foundational Learning',
          description: 'Establish the statistical and engineering foundations for modern predictive analytics.',
          cards: [
            {
              semesterLabel: 'Semester 1',
              title: 'Analytic Foundations',
              summary: 'Build essential statistical, programming, and data management skills.',
              subjects: ['Statistical Computing', 'Research Methodology', 'Data Analysis Using Python', 'NoSQL Databases', 'Data Management'],
            },
            {
              semesterLabel: 'Semester 2',
              title: 'Model Foundations',
              summary: 'Master the core algorithms and privacy-aware practices that power professional analytics.',
              subjects: ['Multivariate Statistics', 'Statistical Inference', 'Machine Learning Algorithms', 'Text Analytics', 'Data Privacy'],
            },
          ],
        },
        intermediate: {
          title: 'Intermediate Development',
          description: 'Translate models into products, dashboards, and real estate intelligence workflows.',
          cards: [
            {
              semesterLabel: 'Semester 3',
              title: 'Applied Intelligence',
              summary: 'Deploy analytics into operational systems and visual platforms.',
              subjects: ['Neural Networks & Deep Learning', 'Data Visualization', 'Specialization Elective', 'Operations Research'],
            },
          ],
        },
        advanced: {
          title: 'Advanced Industry Skills',
          description: 'Lead with predictive systems, governance, and market intelligence for capital-grade analytics.',
          cards: [
            {
              semesterLabel: 'Semester 4',
              title: 'Capstone Analytics',
              summary: 'Deliver a rigorous industry project built for measurable business impact.',
              subjects: ['Time Series Analytics', 'Analytics Applications', 'Final Dissertation / Project'],
            },
          ],
        },
        mastery: {
          title: 'Super Advanced Industry Mastery',
          description: 'Synthesize business, technology, and market strategy through immersive capstone outcomes.',
          cards: [
            {
              semesterLabel: 'Semester 4',
              title: 'Executive Analytics Studio',
              summary: 'Design, deliver, and present a strategic analytics solution for a high-value real estate challenge.',
              subjects: ['Time Series Analytics', 'Analytics Applications', 'Final Dissertation / Project'],
            },
          ],
        },
      },
      specializations: ['Data Science', 'Machine Learning', 'Business Analytics'],
    },
    'msc-computer-applications': {
      id: 'msc-computer-applications',
      slug: 'msc-computer-applications',
      category: 'pg',
      title: 'MSc in Computer Applications',
      tagline: 'Software systems and cloud engineering for next-generation real estate platforms.',
      shortTitle: 'MCA',
      description: 'A modern computing degree designed for enterprise infrastructure, security, and digital transformation.',
      duration: '2 Years',
      mode: 'Online / Blended',
      eligibility: 'Graduate in Computer Applications or related field',
      ctaLabel: 'Start the MCA Journey',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
      theme: {
        page: 'it',
        primary: '#6B21A8',
        secondary: '#4338CA',
        accent: '#C4B5FD',
        glow: 'rgba(196,181,253,0.18)',
      },
      curriculum: [
        {
          semester: 1,
          tier: 'Foundational',
          title: 'Systems & Design',
          subjects: ['Design of CMS', 'Computer Networking', 'Algorithms', 'RDBMS', 'Software Best Practices'],
        },
        {
          semester: 2,
          tier: 'Foundational',
          title: 'Engineering Operations',
          subjects: ['Big Data Systems', 'DevOps', 'Scripting Languages', 'Software Project Management', 'Cyber Security'],
        },
        {
          semester: 3,
          tier: 'Advanced',
          title: 'Applied Architecture',
          subjects: ['Advanced Track', 'Vulnerability Assessment', 'Cloud Architecture', 'Enterprise Integration'],
        },
        {
          semester: 4,
          tier: 'Mastery',
          title: 'Capstone Practice',
          subjects: ['Industry Internship', 'Capstone Project', 'Platform Delivery', 'Security Operations'],
        },
      ],
      spiralSemesters: {
        foundational: {
          title: 'Foundational Learning',
          description: 'Anchor your technical fluency in systems design, networking, and engineering discipline.',
          cards: [
            {
              semesterLabel: 'Semester 1',
              title: 'Systems & Design',
              summary: 'Learn the core principles of systems engineering, networking, and database design.',
              subjects: ['Design of CMS', 'Computer Networking', 'Algorithms', 'RDBMS', 'Software Best Practices'],
            },
            {
              semesterLabel: 'Semester 2',
              title: 'Engineering Operations',
              summary: 'Build operational maturity with DevOps, scripting, and secure development practices.',
              subjects: ['Big Data Systems', 'DevOps', 'Scripting Languages', 'Software Project Management', 'Cyber Security'],
            },
          ],
        },
        intermediate: {
          title: 'Intermediate Development',
          description: 'Move into applied architecture, resilience, and cross-platform integration.',
          cards: [
            {
              semesterLabel: 'Semester 3',
              title: 'Applied Architecture',
              summary: 'Develop secure cloud-ready platforms and enterprise-grade application stacks.',
              subjects: ['Advanced Track', 'Vulnerability Assessment', 'Cloud Architecture', 'Enterprise Integration'],
            },
          ],
        },
        advanced: {
          title: 'Advanced Industry Skills',
          description: 'Expand into platform delivery, security operations and high-value infrastructure solutions.',
          cards: [
            {
              semesterLabel: 'Semester 4',
              title: 'Capstone Practice',
              summary: 'Deliver a real-world implementation built for enterprise readiness and market launch.',
              subjects: ['Industry Internship', 'Capstone Project', 'Platform Delivery', 'Security Operations'],
            },
          ],
        },
        mastery: {
          title: 'Super Advanced Industry Mastery',
          description: 'Synthesize systems, strategy and practice into a sophisticated technology leadership portfolio.',
          cards: [
            {
              semesterLabel: 'Semester 4',
              title: 'Executive Platform Studio',
              summary: 'Create and present a transformative technical solution for the built-world economy.',
              subjects: ['Industry Internship', 'Capstone Project', 'Platform Delivery', 'Security Operations'],
            },
          ],
        },
      },
      specializations: ['Cloud Computing', 'Security', 'Software Engineering', 'Enterprise Architecture'],
    },
  },
}
