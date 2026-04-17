import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({ project, index }) => {
const { title, description, image, tech = [], category = [], github, live, highlight } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
      whileHover={{ y: -10 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-glass)',
          border: '1px solid var(--border)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px var(--shadow)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'var(--accent)',
            boxShadow: '0 15px 35px var(--shadow), 0 0 20px var(--accent-rgba-02)'
          }
        }}
      >
        {highlight && (
          <Box
            sx={{
              position: 'absolute',
              top: '15px',
              right: '-35px',
              background: 'var(--accent)',
              color: '#1a1a2e',
              px: 4,
              py: 0.5,
              transform: 'rotate(45deg)',
              fontWeight: 700,
              fontSize: '0.75rem',
              zIndex: 10,
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            {highlight}
          </Box>
        )}

        {image && (
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt={title}
            onError={(e) => { e.target.src = '/images/steve.png'; }} // Fallback image
            sx={{ borderBottom: '1px solid var(--border)' }}
          />
        )}

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="h3" sx={{ color: 'var(--text-primary)', fontWeight: 700, mb: 2, fontFamily: "'Inter', sans-serif" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 3, lineHeight: 1.6 }}>
            {description}
          </Typography>

          {tech.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {tech.map((techName, i) => (
                <Chip
                  key={i}
                  label={techName}
                  size="small"
                  sx={{
                    background: 'var(--bg-secondary)',
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0, gap: 2 }}>
          {github && (
            <Button
              variant="outlined"
              size="small"
              href={github}
              target="_blank"
              startIcon={<GitHubIcon />}
              sx={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
                textTransform: 'none',
                '&:hover': { borderColor: 'var(--accent)', background: 'var(--accent-rgba-01)' }
              }}
            >
              GitHub
            </Button>
          )}
          {live && (
            <Button
              variant="contained"
              size="small"
              href={live}
              target="_blank"
              startIcon={<OpenInNewIcon />}
              sx={{
                background: 'var(--accent)',
                color: '#1a1a2e',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': { background: 'var(--accent-secondary)' }
              }}
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

