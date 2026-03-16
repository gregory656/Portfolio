import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import WebIcon from '@mui/icons-material/Web';
import LayersIcon from '@mui/icons-material/Layers';

const ProblemSolving = () => {
    const problems = [
        {
            title: 'UI Systems',
            description: 'Building cohesive, accessible, and performant design systems that speed up development and ensure brand consistency.',
            icon: <LayersIcon fontSize="large" sx={{ color: 'var(--accent)' }} />
        },
        {
            title: 'Business Automation',
            description: 'Developing internal tools and workflows that eliminate manual data entry and streamline company operations.',
            icon: <PrecisionManufacturingIcon fontSize="large" sx={{ color: 'var(--accent)' }} />
        },
        {
            title: 'Web Platforms',
            description: 'Architecting scalable frontend and backend systems to support thousands of active users securely.',
            icon: <WebIcon fontSize="large" sx={{ color: 'var(--accent)' }} />
        },
        {
            title: 'Data Dashboards',
            description: 'Transforming complex datasets into intuitive, interactive visual interfaces for better decision making.',
            icon: <DashboardIcon fontSize="large" sx={{ color: 'var(--accent)' }} />
        }
    ];

    return (
        <section className="py-5" style={{ background: 'var(--bg-primary)' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
                        What I Do
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
                        I specialize in solving complex technical challenges across diverse problem domains.
                    </Typography>
                </motion.div>

                <Row>
                    {problems.map((prob, index) => (
                        <Col lg={3} md={6} key={index} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ height: '100%' }}
                                whileHover={{ y: -10 }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        background: 'var(--bg-glass)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '15px',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 8px 32px var(--shadow)',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'center',
                                        p: 2,
                                        '&:hover': {
                                            borderColor: 'var(--accent)',
                                            boxShadow: '0 15px 35px var(--shadow), 0 0 20px var(--accent-rgba-02)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ mb: 3, display: 'inline-flex', p: 2, borderRadius: '50%', background: 'var(--accent-rgba-01)' }}>
                                            {prob.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ color: 'var(--text-primary)', fontWeight: 700, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                                            {prob.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                            {prob.description}
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

export default ProblemSolving;
