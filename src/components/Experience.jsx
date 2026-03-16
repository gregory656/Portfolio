import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Typography, Box, Button, Chip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

const Experience = () => {
    const experiences = [
        {
            company: 'TopHeights Electricals',
            role: 'Software Developer Intern',
            duration: 'Recent',
            website: 'https://topheightselectricals.com',
            managerContact: '+25411343412',
            description: 'Worked as the main developer responsible for building and maintaining internal software tools and web systems. Contributed to designing modern UI interfaces, improving system usability, and implementing scalable web solutions.',
            skills: ['React', 'UI/UX Design', 'Web Systems', 'Scalable Solutions']
        }
    ];

    return (
        <section id="experience" className="py-5" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
                        Professional Experience
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
                        My industry experience building real-world applications and optimizing internal workflows.
                    </Typography>
                </motion.div>

                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Box sx={{ position: 'relative', py: 4 }}>
                            {/* Timeline Line */}
                            <Box sx={{
                                position: 'absolute',
                                left: { xs: '20px', md: '50%' },
                                top: 0,
                                bottom: 0,
                                width: '2px',
                                background: 'var(--border)',
                                transform: { xs: 'none', md: 'translateX(-50%)' }
                            }} />

                            {experiences.map((exp, index) => (
                                <Row key={index} className="mb-5 position-relative align-items-center">
                                    <Col md={6} className={`px-4 text-md-${index % 2 === 0 ? 'end' : 'start'} order-${index % 2 === 0 ? '1' : '3'} order-md-1`}>
                                        {index % 2 === 0 ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                                                    {exp.role}
                                                </Typography>
                                                <Typography variant="h6" sx={{ color: 'var(--accent)', mb: 1, display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
                                                    <BusinessIcon fontSize="small" /> {exp.company}
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' }, mb: 2, flexWrap: 'wrap' }}>
                                                    <Chip label={exp.duration} size="small" sx={{ background: 'var(--accent-rgba-02)', color: 'var(--accent)', fontWeight: 600 }} />
                                                </Box>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                viewport={{ once: true }}
                                                style={{ textAlign: 'left' }}
                                            >
                                                <Box sx={{ background: 'var(--bg-card)', p: 4, borderRadius: '15px', border: '1px solid var(--border)', boxShadow: '0 8px 32px var(--shadow)' }}>
                                                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 3 }}>
                                                        {exp.description}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                                                        {exp.skills.map((skill, i) => (
                                                            <Chip key={i} label={skill} size="small" variant="outlined" sx={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }} />
                                                        ))}
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                                        <Button
                                                            variant="contained"
                                                            href={exp.website}
                                                            target="_blank"
                                                            startIcon={<OpenInNewIcon />}
                                                            sx={{ textTransform: 'none', background: 'var(--accent)', color: '#1a1a2e', '&:hover': { background: 'var(--accent-secondary)' } }}
                                                        >
                                                            Visit Website
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            href={`tel:${exp.managerContact}`}
                                                            startIcon={<PhoneIcon />}
                                                            sx={{ textTransform: 'none', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                                                        >
                                                            Manager Contact
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        )}
                                    </Col>

                                    <Col md={12} className="position-absolute d-flex justify-content-center align-items-center" style={{ left: 0, right: 0, zIndex: 2 }}>
                                        <Box sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'var(--bg-primary)',
                                            border: '4px solid var(--accent)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 0 15px var(--accent-rgba-05)',
                                            transform: { xs: 'translateX(calc(-50% + 20px))', md: 'none' },
                                            left: { xs: '0', md: 'auto' },
                                            position: { xs: 'absolute', md: 'static' }
                                        }}>
                                            <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)' }} />
                                        </Box>
                                    </Col>

                                    <Col md={6} className={`px-4 text-md-${index % 2 === 0 ? 'start' : 'end'} order-${index % 2 === 0 ? '3' : '1'} order-md-3 mt-4 mt-md-0`}>
                                        {index % 2 === 0 ? (
                                            <motion.div
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <Box sx={{ background: 'var(--bg-card)', p: 4, borderRadius: '15px', border: '1px solid var(--border)', boxShadow: '0 8px 32px var(--shadow)' }}>
                                                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 3 }}>
                                                        {exp.description}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                                                        {exp.skills.map((skill, i) => (
                                                            <Chip key={i} label={skill} size="small" variant="outlined" sx={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }} />
                                                        ))}
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                                        <Button
                                                            variant="contained"
                                                            href={exp.website}
                                                            target="_blank"
                                                            startIcon={<OpenInNewIcon />}
                                                            sx={{ textTransform: 'none', background: 'var(--accent)', color: '#1a1a2e', '&:hover': { background: 'var(--accent-secondary)' }, fontWeight: 600 }}
                                                        >
                                                            Visit Website
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            href={`tel:${exp.managerContact}`}
                                                            startIcon={<PhoneIcon />}
                                                            sx={{ textTransform: 'none', color: 'var(--text-primary)', borderColor: 'var(--accent)', '&:hover': { background: 'var(--accent-rgba-01)' } }}
                                                        >
                                                            Manager Contact
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                                                    {exp.role}
                                                </Typography>
                                                <Typography variant="h6" sx={{ color: 'var(--accent)', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <BusinessIcon fontSize="small" /> {exp.company}
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                                    <Chip label={exp.duration} size="small" sx={{ background: 'var(--accent-rgba-02)', color: 'var(--accent)', fontWeight: 600 }} />
                                                </Box>
                                            </motion.div>
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </Box>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
