import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TypingIndicator from './TypingIndicator';

const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Format timestamp to HH:MM
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        '&::-webkit-scrollbar': {
          width: 6,
        },
        '&::-webkit-scrollbar-track': {
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 3,
        },
        '&::-webkit-scrollbar-thumb': {
          bgcolor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 3,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.3)',
          },
        },
      }}
    >
      {messages.map((msg, index) => (
        <Box
          key={msg.id || index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%',
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            animation: 'fadeIn 0.3s ease-out',
            '@keyframes fadeIn': {
              from: {
                opacity: 0,
                transform: 'translateY(10px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1.25,
              borderRadius: msg.sender === 'user'
                ? '18px 18px 4px 18px'
                : '18px 18px 18px 4px',
              background: msg.sender === 'user'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'rgba(255, 255, 255, 0.08)',
              border: msg.sender === 'bot'
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#fff',
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
              }}
            >
              {msg.text}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              mt: 0.5,
              px: 1,
              fontSize: '0.7rem',
            }}
          >
            {formatTime(msg.timestamp)}
          </Typography>
        </Box>
      ))}

      {isTyping && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            maxWidth: '85%',
          }}
        >
          <TypingIndicator />
        </Box>
      )}

      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatMessages;
