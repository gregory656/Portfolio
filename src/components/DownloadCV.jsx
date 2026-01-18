import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/updatedcv.pdf';
    link.download = 'Gregory_Steve_CV.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('/updatedcv.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <motion.button
        onClick={handleView}
        className="btn"
        style={{
          background: 'var(--bg-glass)',
          border: '2px solid var(--accent)',
          color: 'var(--accent)',
          padding: '12px 24px',
          borderRadius: '25px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 6px 20px var(--shadow)',
          borderColor: 'var(--accent-secondary)'
        }}
        whileTap={{ scale: 0.95 }}
        onFocus={(e) => e.target.style.outline = `2px solid var(--accent)`}
        onBlur={(e) => e.target.style.outline = 'none'}
        aria-label="View CV in new tab"
      >
        View CV
      </motion.button>
      <motion.button
        onClick={handleDownload}
        className="btn"
        style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
          border: 'none',
          color: '#1a1a2e',
          padding: '12px 24px',
          borderRadius: '25px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        onFocus={(e) => e.target.style.outline = `2px solid var(--accent)`}
        onBlur={(e) => e.target.style.outline = 'none'}
        aria-label="Download CV"
      >
        <FaDownload size={16} />
        Download CV
      </motion.button>
    </div>
  );
};

export default DownloadCV;