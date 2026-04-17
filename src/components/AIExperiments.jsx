import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const AIExperiments = () => {
  return (
    <motion.section
      id="ai-experiments"
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" className="text-center mb-5" sx={{ fontWeight: 800, color: 'var(--text-primary)' }}>
            AI Experiments & Coming Soon
          </Typography>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h6" sx={{ color: 'var(--text-secondary)', mb: 4, fontSize: '1.3rem', lineHeight: 1.6 }}>
              Exploring the next frontier of intelligent systems. Stay tuned for upcoming AI-powered projects and demos.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="contained" 
                size="large"
                href="#contact"
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
                Get Notified
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default AIExperiments;

