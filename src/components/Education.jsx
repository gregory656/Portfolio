import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Education = () => {
  const educationItems = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Kirinyaga University',
      period: '2020 - 2024',
      description: 'Comprehensive study in software engineering principles, algorithms, system design, and modern development practices. Focused on full-stack development and project management.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of The People',
      period: '2021 - 2025',
      description: 'Online degree program covering advanced computer science topics including artificial intelligence, cybersecurity, and distributed systems. Emphasized research and innovation.'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <motion.h2
          className="text-center mb-5"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <Row className="justify-content-center">
          {educationItems.map((item, index) => (
            <Col md={8} key={index} className="mb-4">
              <motion.div
                className="position-relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < educationItems.length - 1 && (
                  <div
                    className="position-absolute"
                    style={{
                      left: '20px',
                      top: '60px',
                      width: '2px',
                      height: 'calc(100% + 40px)',
                      background: 'linear-gradient(to bottom, var(--accent), transparent)',
                      zIndex: 1
                    }}
                  />
                )}
                <motion.div
                  className="d-flex"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="me-4 mt-2"
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      boxShadow: '0 0 10px var(--accent)',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                  <div
                    className="flex-grow-1 p-4"
                    style={{
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border)',
                      borderRadius: '15px',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      boxShadow: '0 8px 32px var(--shadow)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 15px 35px var(--shadow)';
                      e.target.style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = '0 8px 32px var(--shadow)';
                      e.target.style.borderColor = 'var(--border)';
                    }}
                  >
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>{item.degree}</h4>
                    <h5 style={{ color: 'var(--accent)', marginBottom: '12px' }}>{item.institution}</h5>
                    <p style={{ color: 'var(--text-secondary)', fontWeight: 'bold', marginBottom: '12px' }}>{item.period}</p>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;