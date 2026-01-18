import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

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

  return <span ref={ref}>{count.toLocaleString()}{end === 99 ? '%' : end > 3 ? '+' : ''}</span>;
};

const StatsSection = () => {
  const stats = [
    { value: 3, label: 'Years Experience' },
    { value: 80, label: 'Projects Delivered' },
    { value: 10000, label: 'Users' },
    { value: 99, label: 'System Uptime' }
  ];

  return (
    <section className="py-5" style={{ background: 'var(--bg-secondary)' }}>
      <Container>
        <motion.h2
          className="text-center mb-5"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Metrics
        </motion.h2>
        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <motion.div
                className="text-center p-4"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  boxShadow: '0 8px 32px var(--shadow)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 15px 35px var(--shadow), 0 0 30px var(--accent-rgba-01)`
                }}
              >
                <motion.div
                  className="display-4 fw-bold mb-2"
                  style={{ color: 'var(--accent)', textShadow: `0 0 10px var(--accent-rgba-05)` }}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter end={stat.value} />
                </motion.div>
                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;