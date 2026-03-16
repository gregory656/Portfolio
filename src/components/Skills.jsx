import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Box, Typography, Chip } from '@mui/material';
import {
  SiReact, SiVite, SiMui, SiTypescript,
  SiNodedotjs, SiExpress, SiFirebase
} from 'react-icons/si';

// Note: Firestore is part of Firebase, we'll use a local styled icon or SiFirebase for both if needed, 
// but let's just use text/colors for clean badges.
const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
      { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' }
    ]
  },
  {
    category: 'Database / Cloud',
    items: [
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Firestore', icon: <SiFirebase />, color: '#FFCA28' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-5" style={{ background: 'var(--bg-primary)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
            Technology Stack
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
            The core tools and technologies I use to build scalable, high-performance web applications.
          </Typography>
        </motion.div>

        <Row className="justify-content-center">
          {techStack.map((stack, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    borderRadius: '15px',
                    p: 4,
                    height: '100%',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px var(--shadow)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'var(--accent)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px var(--shadow), 0 0 20px var(--accent-rgba-02)'
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 600, mb: 3, textAlign: 'center', fontFamily: "'Inter', sans-serif" }}>
                    {stack.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                    {stack.items.map((tech, i) => (
                      <Chip
                        key={i}
                        icon={<Box sx={{ color: tech.color, display: 'flex', ml: 1 }}>{tech.icon}</Box>}
                        label={tech.name}
                        variant="outlined"
                        sx={{
                          color: 'var(--text-primary)',
                          borderColor: 'var(--border)',
                          fontSize: '0.9rem',
                          p: 1,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'var(--bg-secondary)',
                            borderColor: tech.color,
                            boxShadow: `0 0 10px ${tech.color}40`
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;