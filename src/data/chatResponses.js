// Predefined responses for portfolio-specific questions
// These provide instant responses without needing to call the OpenAI API

export const predefinedResponses = {
  // Skills related
  skills: {
    patterns: [
      /skills?/i,
      /technolog(y|ies)/i,
      /tech stack/i,
      /programming/i,
      /coding/i,
      /development/i,
    ],
    response: `Steve's Technical Skills:

**Frontend:**
- React.js (Core expertise)
- JavaScript/TypeScript
- HTML5 & CSS3
- Tailwind CSS
- Bootstrap
- Framer Motion (Animations)

**Backend & Database:**
- Firebase (Authentication, Firestore, Hosting)
- Node.js basics

**Tools & Platforms:**
- Git & GitHub
- Vite
- WordPress → React migration
- Responsive Design
- API Integration

Steve focuses on building modern, responsive, and user-friendly web applications with clean architecture.`,
  },

  // Projects related
  projects: {
    patterns: [
      /projects?/i,
      /portfolio/i,
      /work/i,
      /built/i,
      /created/i,
      /applications?/i,
    ],
    response: `Steve's Notable Projects:

1. **Edupulse** - An educational platform for learning
2. **Farming System UI** - Agricultural management interface
3. **KYU App** - Mobile application development

All projects showcase his expertise in React, Firebase, and modern frontend technologies. He specializes in building responsive, interactive web applications with clean user interfaces.

Would you like more details about any specific project?`,
  },

  // Tech stack
  techStack: {
    patterns: [
      /tech stack/i,
      /technology stack/i,
      /what.*use/i,
      /stack/i,
    ],
    response: `Steve's Tech Stack:

**Primary:**
- React.js + Vite
- JavaScript (ES6+)
- Firebase (Backend-as-a-Service)

**Styling:**
- Tailwind CSS
- Bootstrap
- Custom CSS

**Other:**
- Git version control
- Modern UI/UX practices

He recently migrated his portfolio from WordPress to React + Firebase, demonstrating his full-stack capabilities and commitment to modern web technologies.`,
  },

  // WordPress to React migration
  migration: {
    patterns: [
      /wordpress/i,
      /migration/i,
      /migrat(e|ed|ing)/i,
      /from wordpress/i,
    ],
    response: `Steve migrated his portfolio from WordPress to React + Firebase!

**Why the migration?**
- Better performance and faster load times
- More control over UI/UX
- Modern developer experience
- Easier maintenance and version control
- Cost-effective hosting with Firebase

**What he learned:**
- React component architecture
- State management
- Firebase integration
- Modern build tools (Vite)
- Deployment workflows

This migration showcases his ability to learn new technologies and improve existing systems.`,
  },

  // Contact info
  contact: {
    patterns: [
      /contact/i,
      /reach/i,
      /email/i,
      /phone/i,
      /connect/i,
      /linkedin/i,
      /github/i,
      /social/i,
    ],
    response: `You can contact Steve through:

**Social Platforms:**
- LinkedIn: linkedin.com/in/gregory-steve-98b51b398
- GitHub: github.com/gregory656
- WhatsApp: +254719637416
- Facebook: facebook.com/share/1EowPV6Rhi/
- Instagram: @reddevcode
- Twitter/X: @GregorySte60812

**Availability:**
He's open to internship opportunities, freelance projects, and full-time positions in frontend development.

Feel free to reach out!`,
  },

  // About Steve
  about: {
    patterns: [
      /about/i,
      /who.*steve/i,
      /tell me about/i,
      /background/i,
      /experience/i,
    ],
    response: `About Stephen Otieno (Steve):

Steve is a Software Engineering student passionate about building modern web applications. He specializes in React.js, Firebase, and frontend development.

**Key Highlights:**
- Proficient in React, JavaScript, and modern frontend tools
- Experience with Firebase for backend services
- Strong focus on UI/UX and responsive design
- Continuously learning and growing in the field

He's actively seeking opportunities to apply his skills and contribute to meaningful projects.`,
  },

  // Career/Job related
  career: {
    patterns: [
      /career/i,
      /job/i,
      /hiring/i,
      /internship/i,
      /opportunit/i,
      /employ/i,
      /position/i,
    ],
    response: `Career & Opportunities:

Steve is actively seeking:
- Frontend Developer positions
- Internship opportunities
- Freelance projects
- Collaboration opportunities

**What he brings:**
- Strong React skills
- Firebase expertise
- Clean code practices
- Problem-solving mindset
- Good communication

If you're hiring or have opportunities, don't hesitate to reach out via his social links!`,
  },

  // Hello/Greeting
  greeting: {
    patterns: [
      /^(hi|hello|hey|howdy|good morning|good afternoon|good evening)/i,
      /what'?s up/i,
      /how are you/i,
    ],
    response: `Hello! 👋 I'm Steve's AI assistant. 

I can help you learn about:
- His technical skills and tech stack
- His projects and work
- How to contact him
- His career background
- The WordPress to React migration

What would you like to know?`,
  },

  // Help
  help: {
    patterns: [
      /help/i,
      /what can you do/i,
      /what.*questions/i,
      /ask.*you/i,
    ],
    response: `I can help you learn about Stephen Otieno (Steve)! Here's what I can tell you about:

🔧 **Skills** - His technical expertise
📁 **Projects** - His work and applications
🛠 **Tech Stack** - Technologies he uses
🔄 **Migration** - WordPress to React journey
📞 **Contact** - How to reach him
💼 **Career** - Job opportunities and background

Just ask me anything about Steve!`,
  },
};

// Check if a message matches any predefined response
export const findPredefinedResponse = (message) => {
  const lowerMessage = message.toLowerCase().trim();

  for (const [_key, data] of Object.entries(predefinedResponses)) {
    for (const pattern of data.patterns) {
      if (pattern.test(lowerMessage)) {
        return data.response;
      }
    }
  }

  return null; // No predefined response found
};

// Quick question buttons
export const quickQuestions = [
  "What are your skills?",
  "Show me your projects",
  "Explain your tech stack",
  "How can I contact you?",
];

export default predefinedResponses;
