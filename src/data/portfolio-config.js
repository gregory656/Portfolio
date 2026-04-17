const portfolioConfig = {
  projects: [
    {
      id: 'top-heights',
      title: 'Top Heights Electricals',
      description: 'Corporate website for an electrical services company showcasing services, projects, and client trust.',
      image: 'https://images.unsplash.com/photo-1581092160607-a3477c66d2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind', 'Firebase'],
      category: ['Corporate', 'Electrical Services'],
      github: null,  // Add repo URL if available
      live: 'https://topheightselectricals.com',
      highlight: null,
      // New fields for depth
      architecture: 'React SPA with Firebase Hosting & Firestore for dynamic content. Responsive design w/ Tailwind CSS Grid.',
      challenges: 'Ensuring cross-browser compatibility for service area maps and integrating client testimonials carousel.',
      tradeoffs: 'Firebase for rapid deployment vs self-hosted CMS for more control.',
      demoInteractive: false
    },
    {
      id: 'jutermal-solar',
      title: 'Jutermal Solar',
      description: 'Solar energy platform promoting sustainable energy solutions and installations.',
      image: 'https://images.unsplash.com/photo-1509391366365-e7359f620b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'CSS3'],
      category: ['Renewable Energy'],
      github: null,
      live: 'https://jutermalsolar.com',
      highlight: null,
      architecture: 'Hybrid React/Node app w/ server-rendered SEO pages. Custom CSS animations for solar panel interactions.',
      challenges: 'Optimizing load times for high-res solar install images while maintaining glassmorphism effects.',
      tradeoffs: 'Node for backend logic vs JAMstack for simplicity.',
      demoInteractive: false
    },
    {
      id: 'happy-cakes',
      title: 'Happy Cakes Bakery',
      description: 'Bakery website focused on product showcase and customer ordering experience.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      category: ['Food', 'E-commerce'],
      github: null,
      live: 'https://happycakesbakery.co.ke',
      highlight: null,
      architecture: 'Vanilla JS app w/ CSS Grid for responsive gallery. Smooth-scroll navigation.',
      challenges: 'Creating appetizing hover effects without vanilla JS bloat.',
      tradeoffs: 'Pure CSS/JS for lightweight vs React for state mgmt.',
      demoInteractive: true  // Fake ordering flow
    },
    {
      id: 'valentine-cake',
      title: 'Valentine Cake House',
      description: 'Elegant bakery brand website designed for product discovery and customer engagement.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind'],
      category: ['Food Brand'],
      github: null,
      live: 'https://valentinecakehouse.co.ke',
      highlight: null,
      architecture: 'React + Tailwind w/ Framer Motion for cake selection animations.',
      challenges: 'Performance on mobile for image-heavy gallery.',
      tradeoffs: 'Tailwind utility-first vs styled-components.',
      demoInteractive: true
    },
    {
      id: 'goodx-international',
      title: 'GoodX International',
      description: 'International business platform presenting services and global operations.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js'],
      category: ['Corporate', 'Global Business'],
      github: null,
      live: 'https://goodx.international',
      highlight: null,
      architecture: 'Full-stack React/Node w/ i18n support for global audiences.',
      challenges: 'Multi-language SEO optimization.',
      tradeoffs: 'Monorepo vs separate frontend/backend.',
      demoInteractive: false
    },
    {
      id: 'hospital-mgmt',
      title: 'Hospital Management System',
      description: 'Advanced hospital management system with modules for patient records, billing, and operations.',
      image: 'https://images.unsplash.com/photo-1576091160399-1b7d4e7d09fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['PHP', 'Laravel', 'MySQL', 'SaaS'],
      category: ['SaaS', 'HealthTech'],
      github: null,
      live: 'https://preview.codecanyon.net/item/hospital-automanager-advance-hospital-management-system-software/full_screen_preview/23225873',
      highlight: 'SaaS',
      architecture: 'Laravel MVC w/ MySQL, role-based auth, API-first for future mobile apps.',
      challenges: 'HIPAA-like data security and multi-tenant isolation.',
      tradeoffs: 'Laravel ecosystem vs microservices.',
      demoInteractive: false
    },
    {
      id: 'sharp-edge',
      title: 'Sharp Edge Furniture',
      description: 'Furniture brand website showcasing products with a clean and modern shopping experience.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Tailwind', 'E-commerce'],
      category: ['Furniture', 'E-commerce'],
      github: null,
      live: 'https://sharpedgefurniture.co.ke',
      highlight: null,
      architecture: 'React e-comm w/ Stripe integration stubbed, Tailwind for rapid prototyping.',
      challenges: '3D product viewer perf on low-end devices.',
      tradeoffs: 'Headless CMS vs custom backend.',
      demoInteractive: true  // Product config sim
    },
    {
      id: 'afrika-joe',
      title: 'Afrika Joe',
      description: 'Lifestyle brand platform blending culture, fashion, and storytelling.',
      image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'CSS3'],
      category: ['Lifestyle', 'Brand'],
      github: null,
      live: 'https://afrikajoe.com',
      highlight: null,
      architecture: 'React PWA-capable site w/ service worker for offline storytelling.',
      challenges: 'Cultural nuance in animations/transitions.',
      tradeoffs: 'CSS-in-JS vs Tailwind.',
      demoInteractive: false
    }
  ],
  skills: [ /* Future: migrate from Skills.jsx */ ],
  analytics: { views: 0, projectClicks: {} }
};

export default portfolioConfig;

