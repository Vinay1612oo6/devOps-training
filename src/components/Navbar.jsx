import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Terminal } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'YouTube Content', path: '/youtube' },
    { name: 'Udemy Courses', path: '/udemy' },
    { name: 'Freelance', path: '/freelance' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <Terminal size={24} color="var(--accent-primary)" />
          <span>DevOps <span style={{ color: 'var(--text-muted)' }}>Training</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="md-flex gap-2">
          {links.map((link) => (
             <Link 
               key={link.name} 
               to={link.path}
               style={{
                 padding: '0.5rem 1rem',
                 borderRadius: '8px',
                 fontWeight: 500,
                 transition: 'all 0.2s',
                 backgroundColor: location.pathname === link.path ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                 color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-secondary)'
               }}
               onMouseEnter={(e) => {
                 if (location.pathname !== link.path) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                 }
               }}
               onMouseLeave={(e) => {
                 if (location.pathname !== link.path) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                 }
               }}
             >
               {link.name}
             </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md-hidden" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '0.5rem', display: 'flex' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: 'var(--bg-secondary)' }}>
          {links.map((link) => (
             <Link 
               key={link.name} 
               to={link.path}
               onClick={() => setIsOpen(false)}
               style={{
                 padding: '0.75rem',
                 borderRadius: '8px',
                 fontWeight: 500,
                 backgroundColor: location.pathname === link.path ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                 color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-secondary)'
               }}
             >
               {link.name}
             </Link>
          ))}
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; gap: 1rem; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
