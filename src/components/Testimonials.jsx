import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Gregory built our internal system with exceptional attention to usability. The interface was modern and greatly improved our workflow.",
            name: "JOHN G.",
            role: "Operations Manager",
            company: "TopHeights"
        },
        {
            text: "A highly skilled frontend developer who understands both design and system architecture. Delivered the web platform ahead of schedule.",
            name: "Sarah K.",
            role: "Product Lead",
            company: "Startup Inc."
        }
    ];

    return (
        <section className="py-5" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, var(--accent-rgba-02) 0%, transparent 70%)',
                zIndex: 0
            }} />
            <Container style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
                        Client Testimonials
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
                        What people say about my work and professionalism.
                    </Typography>
                </motion.div>

                <Row className="justify-content-center">
                    {testimonials.map((test, index) => (
                        <Col md={6} key={index} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                style={{ height: '100%' }}
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
                                        p: 3,
                                        '&:hover': {
                                            borderColor: 'var(--accent)',
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 15px 35px var(--shadow), 0 0 20px var(--accent-rgba-02)'
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <FormatQuoteIcon sx={{ color: 'var(--accent)', fontSize: '3rem', opacity: 0.5, mb: 2 }} />
                                        <Typography variant="body1" sx={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontStyle: 'italic', mb: 4, lineHeight: 1.8 }}>
                                            "{test.text}"
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar sx={{ bgcolor: 'var(--accent)', color: '#1a1a2e', fontWeight: 700 }}>
                                                {test.name.charAt(0)}
                                            </Avatar>
                                            <Box>
                                                <Typography variant="h6" sx={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>
                                                    {test.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                                                    {test.role}, {test.company}
                                                </Typography>
                                            </Box>
                                        </Box>
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

export default Testimonials;
