import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
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
    const sections = ['home', 'skills', 'projects', 'contact'];

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
                { id: 'skills', label: 'Skills' },
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
                    Software Engineering Student | Problem Solver
                  </motion.p>
                  <motion.div
                    className="d-flex justify-content-center gap-3 flex-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <Button variant="primary" href="updatedcv1.pdf" target="_blank" rel="noopener noreferrer">
                      View CV
                    </Button>
                    <Button variant="outline-light" href="updatedcv1.pdf" download>
                      Download CV
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </motion.div>
        </section>

        {/* Skills Section */}
        <Container id="skills" className="py-5">
          <h2 className="text-center mb-4">Skills</h2>
          <Skills />
        </Container>

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
        <Container id="contact" className="py-5 text-center">
          <h2 className="mb-4">Contact Me</h2>
          <p>📧 gregorystephen2006@gmail.com</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="outline-light" href="https://wa.me/0719637416" target="_blank">
              WhatsApp
            </Button>
            <Button variant="outline-light" href="https://instagram.com/reddevcode" target="_blank">
              Instagram
            </Button>
            <Button variant="outline-light" href="https://facebook.com/gregorysteveotieno" target="_blank">
              Facebook
            </Button>
            <Button variant="outline-light" href="https://x.com/GregorySte60812" target="_blank">
              X (Twitter)
            </Button>
          </div>
        </Container>

        {/* Footer */}
        <footer className="text-center py-3">
          <p>&copy; 2025 Gregory Steve</p>
        </footer>
      </Container>
    </>
  );
}
