import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaReact, FaPython, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaLinux,
  FaDocker, FaDatabase, FaFire, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiHtml5, SiCss3, SiC, SiCplusplus, SiTailwindcss,
  SiExpress, SiDjango, SiFlutter, SiPostgresql, SiMysql,
  SiFirebase
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', proficiency: 90 },
      { name: 'Python', icon: FaPython, color: '#3776AB', proficiency: 85 },
      { name: 'Java', icon: FaJava, color: '#ED8B00', proficiency: 80 },
      { name: 'C', icon: SiC, color: '#A8B9CC', proficiency: 75 },
      { name: 'C++', icon: SiCplusplus, color: '#00599C', proficiency: 75 }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', proficiency: 95 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', proficiency: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', proficiency: 90 },
      { name: 'React', icon: FaReact, color: '#61DAFB', proficiency: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', proficiency: 85 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', proficiency: 85 },
      { name: 'Express.js', icon: SiExpress, color: '#000000', proficiency: 80 },
      { name: 'Django', icon: SiDjango, color: '#092E20', proficiency: 80 },
      { name: 'REST APIs', icon: FaDatabase, color: '#FF6B6B', proficiency: 85 }
    ]
  },
  {
    title: 'Mobile App Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B', proficiency: 75 },
      { name: 'React Native', icon: FaReact, color: '#61DAFB', proficiency: 80 }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB', proficiency: 85 },
      { name: 'Django', icon: SiDjango, color: '#092E20', proficiency: 80 },
      { name: 'Tkinter', icon: FaPython, color: '#3776AB', proficiency: 75 }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', proficiency: 80 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', proficiency: 80 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', proficiency: 85 }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', proficiency: 90 },
      { name: 'GitHub', icon: FaGithub, color: '#181717', proficiency: 90 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', proficiency: 85 },
      { name: 'Linux', icon: FaLinux, color: '#FCC624', proficiency: 80 },
      { name: 'VS Code', icon: FaCode, color: '#007ACC', proficiency: 95 },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', proficiency: 75 }
    ]
  }
];

const SkillProgressBar = ({ proficiency, color, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(proficiency);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, proficiency]);

  return (
    <div className="skill-progress-container">
      <div className="skill-progress-bar">
        <motion.div
          className="skill-progress-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      <span className="skill-percentage">{progress}%</span>
    </div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2
          }
        }
      }}
      className="skills-section"
    >
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: categoryIndex * 0.1 }
            }
          }}
          className="skill-category mb-5"
        >
          <motion.h3
            className="skill-category-title text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {category.title}
          </motion.h3>

          <Row className="justify-content-center">
            {category.skills.map((skill, skillIndex) => (
              <Col xs={12} sm={6} md={4} lg={3} key={skill.name} className="mb-4">
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="skill-card h-100 glass-effect border-0 shadow-sm">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <motion.div
                        className="skill-icon-container mb-3"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <skill.icon size={50} color={skill.color} />
                      </motion.div>

                      <Card.Title className="skill-name mb-3 fw-bold">
                        {skill.name}
                      </Card.Title>

                      <SkillProgressBar
                        proficiency={skill.proficiency}
                        color={skill.color}
                        isVisible={isInView}
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;