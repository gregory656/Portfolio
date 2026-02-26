import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TypingIndicator = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        p: 2,
        borderRadius: '18px 18px 18px 4px',
        bgcolor: 'rgba(255, 255, 255, 0.08)',
        maxWidth: '80px',
      }}
    >
      {[0, 1, 2].map((index) => (
        <Box
          key={index}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: '#667eea',
            animation: 'bounce 1.4s infinite ease-in-out both',
            animationDelay: `${index * 0.16}s`,
            '@keyframes bounce': {
              '0%, 80%, 100%': {
                transform: 'scale(0)',
              },
              '40%': {
                transform: 'scale(1)',
              },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default TypingIndicator;
