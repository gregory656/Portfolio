import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, AlertCircle } from 'lucide-react';
import portfolioConfig from '../data/portfolio-config';

const ProjectModal = ({ projectId, onClose }) => {
  const project = portfolioConfig.projects.find(p => p.id === projectId);
  const [demoActive, setDemoActive] = useState(false);
  if (!project) return null;

  const renderInteractiveDemo = () => {
    if (!project.demoInteractive) return null;
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="p-4 bg-var(--bg-secondary) rounded-xl border border-var(--border)"
      >
        <h4 className="font-bold mb-2 flex items-center"><Code className="w-4 h-4 mr-2" /> Interactive Demo</h4>
        <p className="text-sm text-var(--text-secondary) mb-4">Simulated user flow</p>
        <div className="grid grid-cols-2 gap-4 p-4 bg-var(--bg-glass) rounded-lg backdrop-blur-sm">
          <button className="p-3 rounded-lg bg-var(--accent-rgba-01) hover:bg-var(--accent)" onClick={() => setDemoActive(!demoActive)}>
            {demoActive ? 'Exit Demo' : 'Start Demo'}
          </button>
          {demoActive && <div className="col-span-2 p-4 border rounded-lg bg-green-500/10 border-green-500/30">
            Demo active: {project.title} flow complete!
          </div>}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="max-w-4xl max-h-[90vh] w-full overflow-y-auto"
          style={{ 
            background: 'var(--bg-glass)', 
            border: '1px solid var(--border)', 
            borderRadius: '20px', 
            backdropFilter: 'blur(20px)', 
            boxShadow: '0 25px 50px var(--shadow)', 
            maxWidth: '1200px' 
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 p-6 border-b border-var(--border) bg-var(--bg-glass)/80 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-var(--text-primary) mb-2">{project.title}</h1>
                {project.highlight && <span className="px-3 py-1 bg-var(--accent)/20 text-var(--accent) rounded-full text-sm font-semibold">{project.highlight}</span>}
              </div>
              <button onClick={onClose} className="p-2 hover:bg-var(--bg-secondary) rounded-xl transition-all">
<X className="w-6 h-6" />
              </button>
            </div>
            {project.live && (
              <a href={project.live} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-var(--accent-rgba-01) border border-var(--accent) rounded-xl hover:bg-var(--accent) hover:border-var(--accent-secondary) transition-all">
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </a>
            )}
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Image */}
            {project.image && (
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover rounded-2xl border border-var(--border)"
                whileHover={{ scale: 1.02 }}
              />
            )}

            {/* Description + Tech */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center"><Code className="w-5 h-5 mr-2 text-var(--accent)" /> Description</h3>
                <p className="text-var(--text-secondary) leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-var(--bg-secondary) border border-var(--border) rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center"><Code className="w-5 h-5 mr-2" /> Architecture Overview</h3>
                <div className="bg-var(--bg-secondary) p-6 rounded-2xl border border-var(--border)">
                  <p className="text-var(--text-primary) whitespace-pre-wrap">{project.architecture}</p>
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div>
<AlertCircle className="w-5 h-5 mr-2 text-orange-400" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-500/5 p-6 rounded-2xl border border-orange-500/20">
                    <h4 className="font-medium mb-2">Challenges</h4>
                    <p>{project.challenges}</p>
                  </div>
                  <div className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/20">
                    <h4 className="font-medium mb-2">Tradeoffs</h4>
                    <p>{project.tradeoffs}</p>
                  </div>
                </div>
              </div>
            )}

            {renderInteractiveDemo()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

