import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { FaRobot } from 'react-icons/fa';

const ChatHeader = ({ mode, onModeChange, onClose }) => {
  const handleModeChange = (event) => {
    onModeChange(event.target.checked ? 'nexagen' : 'steve');
  };

  return (
    <Box
      sx={{
        p: 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <FaRobot size={20} color="#fff" />
        </Avatar>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: 1.2,
            }}
          >
            Steve AI
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.75rem' }}
            >
              Online
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Mode Toggle */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: 1,
            bgcolor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            px: 1.5,
            py: 0.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: mode === 'steve' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
              fontWeight: mode === 'steve' ? 600 : 400,
              fontSize: '0.7rem',
              transition: 'all 0.2s ease',
            }}
          >
            Steve
          </Typography>
          <Switch
            checked={mode === 'nexagen'}
            onChange={handleModeChange}
            size="small"
            sx={{
              padding: 0,
              width: 36,
              height: 20,
              '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                  transform: 'translateX(16px)',
                  color: '#fff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#4ade80',
                    opacity: 1,
                    border: 0,
                  },
                },
              },
              '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 16,
                height: 16,
              },
              '& .MuiSwitch-track': {
                borderRadius: 20 / 2,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                opacity: 1,
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: mode === 'nexagen' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
              fontWeight: mode === 'nexagen' ? 600 : 400,
              fontSize: '0.7rem',
              transition: 'all 0.2s ease',
            }}
          >
            NexaGen
          </Typography>
        </Box>

        {/* Close Button */}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: '#fff',
            bgcolor: 'rgba(255, 255, 255, 0.15)',
            width: 32,
            height: 32,
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.25)',
              transform: 'scale(1.1)',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatHeader;
