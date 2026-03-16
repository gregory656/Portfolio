import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadCV from './DownloadCV';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

const roles = [
  "Full Stack Developer",
  "React Developer",
  "UI Systems Engineer",
  "Problem Solver"
];

const Hero = ({ scrollToSection }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <Container>
        <Row className="align-items-center justify-content-center text-center text-md-start">
          <Col md={7} className="mb-5 mb-md-0 order-2 order-md-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h6" sx={{ color: 'var(--accent)', fontWeight: 600, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                HELLO, WORLD. I'M
              </Typography>
              
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: 'var(--text-primary)', fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em', fontSize: { xs: '3rem', md: '4.5rem' } }}>
                Gregory Steve
              </Typography>

              <Box sx={{ height: '40px', mb: 3, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Typography variant="h4" sx={{ color: 'var(--text-secondary)', fontWeight: 500, fontFamily: "'Outfit', sans-serif", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'inline-block', color: 'var(--accent)' }}
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 5, fontSize: '1.1rem', maxWidth: '600px', mx: { xs: 'auto', md: 0 }, lineHeight: 1.8 }}>
                I'm a Full-Stack Software Engineer dedicated to building scalable digital solutions. With a passion for frontend excellence and system architecture, I transform complex problems into elegant, production-ready web experiences.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  startIcon={<CodeIcon />}
                  sx={{ 
                    borderRadius: '25px', 
                    px: 4, 
                    py: 1.5,
                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                    color: '#1a1a2e',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                    '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)' }
                  }}
                >
                  View Projects
                </Button>
                
                <Box sx={{ display: 'inline-block', position: 'relative', zIndex: 10 }}>
                  <DownloadCV />
                </Box>

                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  startIcon={<EmailIcon />}
                  sx={{ 
                    borderRadius: '25px', 
                    px: 4, 
                    py: 1.5,
                    borderColor: 'var(--accent)',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { borderColor: 'var(--accent)', backgroundColor: 'var(--accent-rgba-01)', transform: 'translateY(-2px)' }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>
          </Col>

          <Col md={5} className="order-1 order-md-2 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box sx={{ 
                position: 'relative',
                width: { xs: '250px', md: '350px' },
                height: { xs: '250px', md: '350px' },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-5%', left: '-5%', right: '-5%', bottom: '-5%',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.4) 0%, rgba(0,0,0,0) 100%)',
                  zIndex: 0,
                  animation: 'spin 10s linear infinite',
                }
              }}>
                <img
                  src="/images/steve.png"
                  alt="Gregory Steve"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '4px solid var(--accent)',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)'
                  }}
                />
              </Box>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </section>
  );
};

export default Hero;
