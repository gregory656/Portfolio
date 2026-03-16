import React, { useMemo } from 'react';
import { Container, Box, Typography, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

const DeveloperActivity = () => {
    // Generate mock data for a 52x7 grid (roughly a year)
    const generateGrid = () => {
        const grid = [];
        const colors = [
            'var(--bg-card)',
            'rgba(0, 212, 255, 0.2)',
            'rgba(0, 212, 255, 0.5)',
            'rgba(0, 212, 255, 0.8)',
            'var(--accent)'
        ];

        for (let c = 0; c < 52; c++) {
            const col = [];
            for (let r = 0; r < 7; r++) {
                // Random intensity weighted towards lower numbers
                const rand = Math.random();
                let intensity = 0;
                if (rand > 0.6) intensity = 1;
                if (rand > 0.8) intensity = 2;
                if (rand > 0.9) intensity = 3;
                if (rand > 0.95) intensity = 4;

                col.push({ intensity, color: colors[intensity] });
            }
            grid.push(col);
        }
        return grid;
    };

    const gridData = useMemo(() => generateGrid(), []);

    return (
        <section className="py-5" style={{ background: 'var(--bg-secondary)' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <Typography variant="h3" sx={{ color: 'var(--accent)', fontWeight: 700, fontFamily: "'Outfit', sans-serif", mb: 2 }}>
                        Developer Activity
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'var(--text-secondary)', maxWidth: '600px', mx: 'auto' }}>
                        A snapshot of my code contributions and continuous learning over the past year.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border)',
                        borderRadius: '15px',
                        p: 4,
                        overflowX: 'auto',
                        boxShadow: '0 8px 32px var(--shadow)'
                    }}>
                        <Box sx={{ display: 'flex', gap: '4px', minWidth: '800px' }}>
                            {gridData.map((col, cIndex) => (
                                <Box key={cIndex} sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {col.map((cell, rIndex) => (
                                        <Tooltip key={rIndex} title={`${cell.intensity * 3} contributions`} placement="top">
                                            <Box
                                                sx={{
                                                    width: '12px',
                                                    height: '12px',
                                                    borderRadius: '2px',
                                                    backgroundColor: cell.color,
                                                    transition: 'transform 0.2s',
                                                    '&:hover': { transform: 'scale(1.2)' }
                                                }}
                                            />
                                        </Tooltip>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2, gap: 1, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            Less
                            {[0, 1, 2, 3, 4].map(i => (
                                <Box key={i} sx={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: i === 0 ? 'var(--bg-card)' : `rgba(0, 212, 255, ${i === 4 ? 1 : i * 0.25 + 0.1})` }} />
                            ))}
                            More
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </section>
    );
};

export default DeveloperActivity;
