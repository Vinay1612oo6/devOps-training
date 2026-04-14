import { Link } from 'react-router-dom';
import { Video, MessageCircle, Globe, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '4rem 0 2rem', marginTop: 'auto', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid grid-cols-3" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              DevOps Training
            </h3>
            <p style={{ maxWidth: '300px' }}>
              Empowering the next generation of DevOps Engineers and Cloud Architects through comprehensive, real-world training.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#ef4444'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}><Video size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#3b82f6'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}><MessageCircle size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='#0a66c2'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e)=>e.currentTarget.style.color='white'} onMouseLeave={(e)=>e.currentTarget.style.color='var(--text-secondary)'}><Code2 size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/youtube" style={{ color: 'var(--text-secondary)' }}>Zero to Hero Paths</Link></li>
              <li><Link to="/udemy" style={{ color: 'var(--text-secondary)' }}>Premium Courses</Link></li>
              <li><Link to="/freelance" style={{ color: 'var(--text-secondary)' }}>Freelance Services</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Me</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Newsletter</h3>
            <p>Subscribe to get updates on new courses and tutorials.</p>
            <form style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="input-field" style={{ flex: 1, padding: '0.5rem 1rem' }} />
              <button type="submit" className="btn" style={{ padding: '0.5rem 1rem' }}>Subscribe</button>
            </form>
          </div>
        </div>
        
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} DevOps Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
