import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const iconMap = {
  FaReact,
  FaPython,
  FaNodeJs,
  SiJavascript,
  SiHtml5,
  SiCss3,
};

const ProjectCard = ({ project, index }) => {
  const { title, description, image, tech = [], github, live } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-100 project-card glass-effect">
        {image && <Card.Img variant="top" src={image} alt={title} />}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>

          {tech.length > 0 && (
            <div className="d-flex gap-2 mb-3 flex-wrap">
              {tech.map((iconKey, i) => {
                const Icon = iconMap[iconKey];
                return Icon ? <Icon key={i} size={22} /> : null;
              })}
            </div>
          )}

          <div className="d-flex gap-2">
            {github && (
              <Button
                variant="outline-light"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            {live && (
              <Button
                variant="primary"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

