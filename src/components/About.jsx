import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3,
  FaDatabase, FaMobileAlt, FaGitAlt, FaGithub, FaLinux
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiDjango, SiFlutter, SiFirebase, SiPostgresql, SiMysql } from 'react-icons/si';

const About = () => {
  const aboutSections = [
    {
      title: 'Who I Am',
      content: 'Software Engineering Student | Passionate about building scalable applications',
      items: []
    },
    {
      title: 'Core Skills',
      content: '',
      items: [
        { category: 'Languages', icons: [FaJs, FaPython, FaJava, SiC, SiCplusplus] },
        { category: 'Frontend', icons: [FaHtml5, FaCss3, FaJs, FaReact] },
        { category: 'Backend', icons: [FaNodeJs, SiDjango] },
        { category: 'Mobile', icons: [SiFlutter] },
        { category: 'Databases', icons: [SiPostgresql, SiMysql, SiFirebase] },
        { category: 'Tools', icons: [FaGitAlt, FaGithub, FaLinux] }
      ]
    },
    {
      title: 'What I Do',
      content: '',
      items: [
        { text: 'Web Application Development', icon: FaReact },
        { text: 'Mobile App Development', icon: FaMobileAlt },
        { text: 'API Development & Integration', icon: FaNodeJs },
        { text: 'Cybersecurity Fundamentals', icon: null }
      ]
    },
    {
      title: 'Mindset & Values',
      content: '',
      items: [
        { text: 'Problem Solver', icon: null },
        { text: 'Continuous Learner', icon: null },
        { text: 'Clean & Scalable Code', icon: null },
        { text: 'Performance-Focused', icon: null }
      ]
    }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <motion.h2
          className="text-center display-4 mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <Row>
          {aboutSections.map((section, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div
                className="glass-effect p-4 h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)" }}
                style={{ borderRadius: '15px', backdropFilter: 'blur(10px)' }}
              >
                <h3 className="h4 mb-4 text-info">{section.title}</h3>
                {section.content && <p className="text-light mb-4">{section.content}</p>}
                {section.items.length > 0 && (
                  <div>
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="d-flex align-items-center mb-3">
                        {item.icon && <item.icon className="text-info me-2" size={20} />}
                        {item.category ? (
                          <div className="d-flex align-items-center">
                            <span className="text-light me-2">{item.category}:</span>
                            <div className="d-flex">
                              {item.icons.map((Icon, iconIndex) => (
                                <motion.div
                                  key={iconIndex}
                                  className="me-2"
                                  whileHover={{ scale: 1.2 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Icon className="text-secondary" size={20} />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <span className="text-light">{item.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;