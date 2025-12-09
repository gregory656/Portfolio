import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiC, SiJavascript, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'Vanilla JS', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'OOP', icon: null, color: '#00d4ff' }, // No specific icon, use accent color
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col xs={6} md={4} lg={3} key={index} className="mb-4">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="skill-card text-center h-100 glass-effect">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  {skill.icon && (
                    <motion.div
                      className="skill-icon mb-2"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon size={40} color={skill.color} />
                    </motion.div>
                  )}
                  <Card.Title className="mb-0">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Skills;
