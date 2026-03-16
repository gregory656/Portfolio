import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GitHubIcon from '@mui/icons-material/GitHub';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{end > 1 ? '+' : ''}</span>;
};

const StatsSection = () => {
  const stats = [
    { value: 20, label: 'Projects Built', icon: <CodeIcon fontSize="large" sx={{ color: 'var(--accent)' }} /> },
    { value: 15, label: 'Technologies Used', icon: <LaptopMacIcon fontSize="large" sx={{ color: 'var(--accent)' }} /> },
    { value: 1, label: 'Internship Experience', icon: <BusinessCenterIcon fontSize="large" sx={{ color: 'var(--accent)' }} /> },
    { value: 500, label: 'GitHub Contributions', icon: <GitHubIcon fontSize="large" sx={{ color: 'var(--accent)' }} /> }
  ];

  return (
    <section className="py-5" style={{ background: 'var(--bg-secondary)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
            Professional Metrics
          </Typography>
        </motion.div>

        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid var(--border)',
                    borderRadius: '15px',
                    boxShadow: '0 8px 32px var(--shadow)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    height: '100%',
                    '&:hover': {
                      boxShadow: '0 15px 35px var(--shadow), 0 0 30px var(--accent-rgba-02)',
                      borderColor: 'var(--accent)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 2, display: 'inline-flex', p: 2, borderRadius: '50%', background: 'var(--accent-rgba-01)' }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, color: 'var(--text-primary)', mb: 1, fontFamily: "'Inter', sans-serif" }}>
                      {stat.value === 1 ? '1' : <AnimatedCounter end={stat.value} />}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;