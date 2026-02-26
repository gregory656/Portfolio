import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { quickQuestions, findPredefinedResponse } from '../data/chatResponses';
import { sendMessageToOpenAI } from '../services/openaiService';

// Rate limiting - minimum 4 seconds between API calls
const RATE_LIMIT_MS = 4000;
const MAX_MESSAGE_LENGTH = 300;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm Steve's AI assistant. How can I help you learn more about him today?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState('steve');
  const [lastRequestTime, setLastRequestTime] = useState(0);

  // Auto-scroll handled by ChatMessages component
  // Generate unique ID
  const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Send message handler
  const handleSend = useCallback(async () => {
    // Validation
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping || trimmedInput.length > MAX_MESSAGE_LENGTH) {
      return;
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastRequestTime < RATE_LIMIT_MS) {
      // Still show user message but add warning
      const userMessage = {
        id: generateId(),
        sender: 'user',
        text: trimmedInput,
        timestamp: now,
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');

      const botMessage = {
        id: generateId(),
        sender: 'bot',
        text: "Please wait a moment before sending another message. Rate limit: 4 seconds between messages.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
      return;
    }

    const userMessage = {
      id: generateId(),
      sender: 'user',
      text: trimmedInput,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setLastRequestTime(now);

    try {
      // Check for predefined responses first (hybrid logic)
      const predefinedResponse = findPredefinedResponse(trimmedInput);

      if (predefinedResponse) {
        // Use predefined response - instant, no API call needed
        await new Promise((resolve) => setTimeout(resolve, 500)); // Small delay for UX
        
        const botMessage = {
          id: generateId(),
          sender: 'bot',
          text: predefinedResponse,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // Call OpenAI API
        const response = await sendMessageToOpenAI(trimmedInput, mode);

        const botMessage = {
          id: generateId(),
          sender: 'bot',
          text: response.message,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: generateId(),
        sender: 'bot',
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping, mode, lastRequestTime]);

  // Handle quick question click
  const handleQuickQuestion = (question) => {
    setInput(question);
    // Trigger send after setting input
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  // Toggle chat open/close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 9999,
            }}
          >
            <Tooltip title="Chat with Steve AI" placement="left">
              <IconButton
                onClick={toggleChat}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 6px 30px rgba(102, 126, 234, 0.5)',
                  },
                }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatIcon sx={{ fontSize: 28 }} />
                </motion.div>
              </IconButton>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: 'calc(100% - 48px)',
              maxWidth: '420px',
              height: 'calc(100vh - 120px)',
              maxHeight: '650px',
              zIndex: 9999,
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid rgba(102, 126, 234, 0.2)',
              }}
            >
              {/* Header */}
              <ChatHeader
                mode={mode}
                onModeChange={setMode}
                onClose={toggleChat}
              />

              {/* Messages */}
              <ChatMessages messages={messages} isTyping={isTyping} />

              {/* Quick Questions */}
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  display: 'flex',
                  gap: 1,
                  overflowX: 'auto',
                  bgcolor: 'rgba(0, 0, 0, 0.15)',
                  '&::-webkit-scrollbar': {
                    height: 4,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 2,
                  },
                }}
              >
                {quickQuestions.map((question, index) => (
                  <Box
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    sx={{
                      flexShrink: 0,
                      px: 2,
                      py: 0.75,
                      borderRadius: '16px',
                      bgcolor: 'rgba(102, 126, 234, 0.2)',
                      border: '1px solid rgba(102, 126, 234, 0.3)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        bgcolor: 'rgba(102, 126, 234, 0.35)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {question}
                  </Box>
                ))}
              </Box>

              {/* Input */}
              <ChatInput
                input={input}
                setInput={setInput}
                onSend={handleSend}
                disabled={isTyping}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
