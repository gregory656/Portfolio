import React, { useState, useEffect, Suspense, lazy } from 'react';

import { Navbar, Nav, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';
import Hero from './components/Hero';
import portfolioConfig from './data/portfolio-config';
// import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Lazy loaded components for performance optimization
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const ProjectCard = lazy(() => import('./components/ProjectCard'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const DeveloperActivity = lazy(() => import('./components/DeveloperActivity'));
const ProblemSolving = lazy(() => import('./components/ProblemSolving'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Insights = lazy(() => import('./components/Insights'));
const Contact = lazy(() => import('./components/Contact'));

// Loading Fallback Component
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
    <Spinner animation="border" variant="info" />
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [, setSelectedProject] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 min cache
        retry: 1
      }
    }
  });


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'stats', 'experience', 'projects', 'education', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      let current = 'home';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll(); // set initial section on load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ThemeToggle />

      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="glass-effect">

        <Container>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Navbar.Brand onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
              Gregory Steve
            </Navbar.Brand>
          </motion.div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'stats', label: 'Stats' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    onClick={() => scrollToSection(id)}
                    className={activeSection === id ? 'active' : ''}
                    style={{ cursor: 'pointer' }}
                  >
                    {label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="p-0">
        {/* Hero Section (Eagerly Loaded) */}
        <Hero scrollToSection={scrollToSection} />

        <Suspense fallback={<LoadingFallback />}>
          {/* About Section */}
          <About />

          {/* Problem Solving Section */}
          <ProblemSolving />

          {/* Stats Section */}
          <div id="stats">
            <StatsSection />
          </div>

          {/* Experience Section */}
          <Experience />

          {/* Skills Section */}
          <Container id="skills" className="py-5">
            <Skills />
          </Container>

          {/* Developer Activity Section */}
          <DeveloperActivity />

          {/* Education Section */}
          <div id="education">
            <Education />
          </div>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="py-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Container>
              <motion.h2
                className="text-center mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Latest Projects
              </motion.h2>
              <Row>
{portfolioConfig.projects.map((project, index) => (
                  <Col md={6} lg={3} key={project.id} className="mb-4">
                    <ProjectCard project={project} index={index} setSelectedProject={setSelectedProject} />
                  </Col>
                ))}

              </Row>
            </Container>
          </motion.section>

          {/* Insights Section */}
          <Insights />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Contact Section */}
          <Contact />
        </Suspense>

        {/* Footer */}
        <footer className="text-center py-3">
          <p>&copy; 2025 Gregory Steve</p>
        </footer>
      </Container>

      <ChatWidget />
      </>
    </QueryClientProvider>
  );
}


