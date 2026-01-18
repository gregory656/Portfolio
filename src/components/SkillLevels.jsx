import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const SkillLevels = () => {
  const proficiencyLevels = [
    {
      level: 'Advanced',
      description: 'Expert-level proficiency with extensive experience',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Git', 'PostgreSQL'],
      color: '#00d4ff'
    },
    {
      level: 'Intermediate',
      description: 'Solid understanding with practical application',
      skills: ['Java', 'Django', 'Flutter', 'Firebase', 'Docker', 'Linux'],
      color: '#ffa500'
    },
    {
      level: 'Familiar',
      description: 'Basic knowledge and ability to work with',
      skills: ['C', 'C++', 'MongoDB', 'AWS', 'GraphQL', 'TypeScript'],
      color: '#32cd32'
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
          Skills by Proficiency
        </motion.h2>
        <Row className="justify-content-center">
          {proficiencyLevels.map((level, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  className="h-100 text-center"
                  style={{
                    background: 'var(--bg-card)',
                    border: `2px solid ${level.color}`,
                    borderRadius: '15px',
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${level.color}20`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Card.Body className="p-4">
                    <motion.div
                      className="mb-3"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${level.color}, ${level.color}80)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        boxShadow: `0 0 20px ${level.color}50`
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
                        {level.level.charAt(0)}
                      </span>
                    </motion.div>
                    <Card.Title
                      style={{ color: level.color, fontWeight: 'bold', marginBottom: '10px' }}
                    >
                      {level.level}
                    </Card.Title>
                    <Card.Text style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                      {level.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {level.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="badge"
                          style={{
                            background: 'var(--bg-glass)',
                            color: 'var(--text-primary)',
                            border: `1px solid ${level.color}40`,
                            padding: '6px 12px',
                            borderRadius: '20px',
                            fontSize: '0.85rem'
                          }}
                          whileHover={{ scale: 1.1, backgroundColor: level.color }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillLevels;