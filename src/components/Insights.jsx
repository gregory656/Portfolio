import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';

const Insights = () => {
    const articles = [
        {
            title: 'Lessons from building a hotel management system',
            date: 'May 12, 2024',
            readTime: '5 min read',
            category: 'Architecture'
        },
        {
            title: 'Why React + Firebase is powerful for startups',
            date: 'April 28, 2024',
            readTime: '4 min read',
            category: 'Tech Stack'
        },
        {
            title: 'Optimizing MUI components for performance',
            date: 'March 15, 2024',
            readTime: '6 min read',
            category: 'Frontend'
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
                    className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3"
                >
                    <Box>
                        <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 1 }}>
                            Developer Insights
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                            Thoughts, learnings, and technical articles.
                        </Typography>
                    </Box>
                    <Button
                        variant="text"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ color: 'var(--accent)', textTransform: 'none', fontWeight: 600, '&:hover': { background: 'var(--accent-rgba-01)' } }}
                    >
                        View All Articles
                    </Button>
                </motion.div>

                <Row>
                    {articles.map((article, index) => (
                        <Col lg={4} md={6} key={index} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ height: '100%' }}
                                whileHover={{ y: -5 }}
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
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            borderColor: 'var(--accent)',
                                            boxShadow: '0 15px 35px var(--shadow), 0 0 20px var(--accent-rgba-02)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                            <Typography variant="caption" sx={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                {article.category}
                                            </Typography>
                                            <ArticleIcon sx={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
                                        </Box>
                                        <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 700, mb: 3, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                                            {article.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                                            <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>
                                                {article.date}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>
                                                •
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'var(--text-secondary)' }}>
                                                {article.readTime}
                                            </Typography>
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

export default Insights;
