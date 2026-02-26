import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import StatsSection from './components/StatsSection';
import Education from './components/Education';
import SkillLevels from './components/SkillLevels';
import DownloadCV from './components/DownloadCV';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/ChatWidget';
import projects from './data/projects';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'stats', 'skills', 'education', 'projects', 'contact'];

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
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
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
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Container className="text-center py-5">
              <Row className="justify-content-center">
                <Col md={8}>
                  <motion.img
                    src="/images/steve.png"
                    alt="Gregory Steve - Software Engineering Student"
                    className="rounded-circle mb-4 hero-image"
                    style={{ width: '150px', height: '150px', border: '3px solid #00d4ff' }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h1
                    className="display-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    Gregory Steve
                  </motion.h1>
                  <motion.p
                    className="lead"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Software Engineer
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <DownloadCV />
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </motion.div>
        </section>

        {/* About Section */}
        <About />

        {/* Stats Section */}
        <div id="stats">
          <StatsSection />
        </div>

        {/* Skills Section */}
        <Container id="skills" className="py-5">
          <h2 className="text-center mb-4">Skills</h2>
          <Skills />
        </Container>

        {/* Skill Levels Section */}
        <SkillLevels />

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
              Projects
            </motion.h2>
            <Row>
              {projects.map((project, index) => (
                <Col md={6} lg={3} key={index} className="mb-4">
                  <ProjectCard project={project} index={index} />
                </Col>
              ))}
            </Row>
          </Container>
        </motion.section>

        {/* Contact Section */}
        <section id="contact" className="py-5 text-center">
          <Container>
            <motion.h2
              className="display-4 mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <p className="text-light mb-5">Reach me on any platform below.</p>
            <motion.div
              className="glass-effect p-4 mx-auto"
              style={{ maxWidth: '500px', borderRadius: '15px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)" }}
            >
              <Row className="g-3 justify-content-center">
                {[
                  { Icon: FaFacebook, href: 'https://www.facebook.com/share/1EowPV6Rhi/', color: '#1877F2', label: 'Facebook' },
                  { Icon: FaInstagram, href: 'https://www.instagram.com/reddevcode?igsh=MTA3MDZkdWllZTBieg==', color: '#E4405F', label: 'Instagram' },
                  { Icon: FaTwitter, href: 'https://x.com/GregorySte60812', color: '#000000', label: 'X (Twitter)' },
                  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/gregory-steve-98b51b398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077B5', label: 'LinkedIn' },
                  { Icon: FaWhatsapp, href: 'https://wa.me/+254719637416', color: '#25D366', label: 'WhatsApp' },
                  { Icon: FaGithub, href: 'https://github.com/gregory656', color: '#333', label: 'GitHub' }
                ].map((social, index) => (
                  <Col xs={4} key={index}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-column align-items-center p-3 rounded glass-effect"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}40` }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <social.Icon size={24} className="text-secondary mb-1" />
                    </motion.a>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="text-center py-3">
          <p>&copy; 2025 Gregory Steve</p>
        </footer>
      </Container>
      
      {/* AI Chat Assistant */}
      <ChatWidget />
    </>
  );
}
