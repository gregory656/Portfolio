import React, { useState, useCallback, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, ChevronRight, GitHub, ExternalLink, Download } from 'lucide-react';
import portfolioConfig from '../data/portfolio-config';

const sections = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '💻' },
  { id: 'skills', label: 'Skills', icon: '⭐' },
  { id: 'contact', label: 'Contact', icon: '📧' }
];

const actions = [
  { id: 'cv', label: 'Download CV', icon: Download, action: () => window.open('/public/updatedcv.pdf', '_blank') },
{ id: 'github', label: 'Open GitHub', icon: GitHub, action: () => window.open('https://github.com/gregory656', '_blank') }
];

const CommandPalette = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredProjects = portfolioConfig.projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSections = sections.filter(s => 
    s.label.toLowerCase().includes(search.toLowerCase())
  );

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigate = useCallback((id) => {
    scrollToSection(id);
    setOpen(false);
  }, [scrollToSection]);

  const handleAction = (action) => {
    action();
    setOpen(false);
  };

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <Command.Input placeholder="Search projects, navigate... Cmd+K" value={search} onValueChange={setSearch} />
      <Command.List>
        {search === '' && (
          <Command.Empty>No results found.</Command.Empty>
        )}
        
        {/* Sections */}
        <Command.Group heading="Go to">
          {filteredSections.map((section) => (
            <Command.Item key={section.id} onSelect={() => handleNavigate(section.id)}>
              <section.icon className="mr-2 h-4 w-4" />
              <span>{section.label}</span>
            </Command.Item>
          ))}
        </Command.Group>

        {/* Projects */}
        <Command.Group heading="Projects">
          {filteredProjects.slice(0, 8).map((project) => (
            <Command.Item key={project.id} onSelect={() => {/* TODO: Open modal */ console.log('Open project:', project.title)}}>
              💻 <span>{project.title}</span>
              {project.live && <ChevronRight className="mr-2 h-4 w-4 ml-auto" />}
            </Command.Item>
          ))}
        </Command.Group>

        {/* Actions */}
        <Command.Group heading="Actions">
          {filteredActions.map((action, idx) => (
            <Command.Item key={idx} onSelect={() => handleAction(action)}>
              <action.icon className="mr-2 h-4 w-4" />
              <span>{action.label}</span>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

// Glassy wrapper styles (match existing)
const Dialog = ({ open, children, ..._props }) => (
  open ? (
    <div style={{
      position: 'fixed', inset: 0, backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.5)',
      zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'var(--bg-glass)', border: '1px solid var(--border)', borderRadius: '15px',
        backdropFilter: 'blur(20px)', boxShadow: '0 20px 40px var(--shadow)', maxHeight: '90vh', overflow: 'auto',
        minWidth: '500px', maxWidth: '90vw'
      }}>
        {children}
      </div>
    </div>
  ) : null
);

export default CommandPalette;

