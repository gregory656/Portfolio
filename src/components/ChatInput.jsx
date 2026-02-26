import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { FaPaperPlane } from 'react-icons/fa';

const ChatInput = ({ input, setInput, onSend, disabled }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const handleSend = () => {
    if (!disabled && input.trim()) {
      onSend();
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'rgba(0, 0, 0, 0.25)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          px: 1,
          py: 0.5,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          transition: 'all 0.2s ease',
          '&:focus-within': {
            borderColor: 'rgba(102, 126, 234, 0.5)',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, 300))}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          InputProps={{
            disableUnderline: true,
            sx: {
              color: '#fff',
              fontSize: '0.9rem',
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },
          }}
          sx={{
            '& .MuiInputBase-root': {
              padding: '8px 12px',
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          sx={{
            bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            width: 40,
            height: 40,
            transition: 'all 0.2s ease',
            opacity: disabled || !input.trim() ? 0.5 : 1,
            cursor: disabled || !input.trim() ? 'not-allowed' : 'pointer',
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
              transform: 'scale(1.05)',
            },
            '&.Mui-disabled': {
              color: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <FaPaperPlane size={16} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatInput;
