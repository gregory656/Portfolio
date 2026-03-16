import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Typography, Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const socialLinks = [
        { Icon: FaFacebook, href: 'https://www.facebook.com/share/1EowPV6Rhi/', color: '#1877F2', label: 'Facebook' },
        { Icon: FaInstagram, href: 'https://www.instagram.com/reddevcode?igsh=MTA3MDZkdWllZTBieg==', color: '#E4405F', label: 'Instagram' },
        { Icon: FaTwitter, href: 'https://x.com/GregorySte60812', color: '#000000', label: 'X (Twitter)' },
        { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/gregory-steve-98b51b398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077B5', label: 'LinkedIn' },
        { Icon: FaWhatsapp, href: 'https://wa.me/+254719637416', color: '#25D366', label: 'WhatsApp' },
        { Icon: FaGithub, href: 'https://github.com/gregory656', color: '#333', label: 'GitHub' }
    ];

    return (
        <section id="contact" className="py-5" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
                        Interested in collaborating or have a question? Let's connect.
                    </Typography>
                </motion.div>

                <Row className="justify-content-center">
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Box sx={{
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border)',
                                borderRadius: '15px',
                                p: 4,
                                height: '100%',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px var(--shadow)',
                            }}>
                                <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 700, mb: 4, fontFamily: "'Inter', sans-serif" }}>
                                    Contact Information
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: 1.5, borderRadius: '50%', background: 'var(--accent-rgba-01)', color: 'var(--accent)', display: 'flex' }}>
                                            <EmailIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>Email</Typography>
                                            <Typography variant="body1" sx={{ color: 'var(--text-primary)', fontWeight: 500 }}>hello@gregorysteve.com</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: 1.5, borderRadius: '50%', background: 'var(--accent-rgba-01)', color: 'var(--accent)', display: 'flex' }}>
                                            <PhoneIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>Manager Contact</Typography>
                                            <Typography variant="body1" sx={{ color: 'var(--text-primary)', fontWeight: 500 }}>+254 113 434 12</Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{ p: 1.5, borderRadius: '50%', background: 'var(--accent-rgba-01)', color: 'var(--accent)', display: 'flex' }}>
                                            <LocationOnIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>Location</Typography>
                                            <Typography variant="body1" sx={{ color: 'var(--text-primary)', fontWeight: 500 }}>Global / Remote</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Typography variant="h6" sx={{ color: 'var(--text-primary)', fontWeight: 600, mb: 2, fontFamily: "'Inter', sans-serif" }}>
                                    Social Profiles
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.label}
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '10px',
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border)',
                                                color: 'var(--text-primary)',
                                                textDecoration: 'none',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = social.color;
                                                e.currentTarget.style.color = social.color;
                                                e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'var(--border)';
                                                e.currentTarget.style.color = 'var(--text-primary)';
                                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                            }}
                                        >
                                            <social.Icon size={20} />
                                        </motion.a>
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>
                    </Col>

                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border)',
                                borderRadius: '15px',
                                p: 4,
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px var(--shadow)',
                            }}>
                                <Typography variant="h5" sx={{ color: 'var(--text-primary)', fontWeight: 700, mb: 4, fontFamily: "'Inter', sans-serif" }}>
                                    Send a Message
                                </Typography>
                                <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                                    <Row>
                                        <Col md={6} className="mb-4">
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--border)' }, '&:hover fieldset': { borderColor: 'var(--accent)' }, '&.Mui-focused fieldset': { borderColor: 'var(--accent)' } },
                                                    '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                                                    '& .MuiInputBase-input': { color: 'var(--text-primary)' }
                                                }}
                                            />
                                        </Col>
                                        <Col md={6} className="mb-4">
                                            <TextField
                                                fullWidth
                                                label="Your Email"
                                                type="email"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--border)' }, '&:hover fieldset': { borderColor: 'var(--accent)' }, '&.Mui-focused fieldset': { borderColor: 'var(--accent)' } },
                                                    '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                                                    '& .MuiInputBase-input': { color: 'var(--text-primary)' }
                                                }}
                                            />
                                        </Col>
                                        <Col xs={12} className="mb-4">
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--border)' }, '&:hover fieldset': { borderColor: 'var(--accent)' }, '&.Mui-focused fieldset': { borderColor: 'var(--accent)' } },
                                                    '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                                                    '& .MuiInputBase-input': { color: 'var(--text-primary)' }
                                                }}
                                            />
                                        </Col>
                                        <Col xs={12} className="mb-4">
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                variant="outlined"
                                                multiline
                                                rows={5}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'var(--border)' }, '&:hover fieldset': { borderColor: 'var(--accent)' }, '&.Mui-focused fieldset': { borderColor: 'var(--accent)' } },
                                                    '& .MuiInputLabel-root': { color: 'var(--text-secondary)' },
                                                    '& .MuiInputBase-input': { color: 'var(--text-primary)' }
                                                }}
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                endIcon={<SendIcon />}
                                                fullWidth
                                                sx={{
                                                    py: 1.5,
                                                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                                                    color: '#1a1a2e',
                                                    fontWeight: 700,
                                                    textTransform: 'none',
                                                    borderRadius: '10px',
                                                    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                                                    '&:hover': { background: 'linear-gradient(135deg, #00d4ff 0%, #00d4ff 100%)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.5)' }
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Box>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Contact;
