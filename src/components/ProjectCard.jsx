import { Briefcase } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div 
      className="glass animate-fade-in" 
      style={{ 
        borderRadius: 'var(--border-radius)', 
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
      }}
    >
      <div style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
        />
      </div>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
          <Briefcase size={16} /> <span>{project.client}</span>
        </div>
        
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.2rem' }}>
          {project.title}
        </h3>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.techStack.map((tech, idx) => (
             <span key={idx} style={{ 
               padding: '0.25rem 0.6rem', 
               background: 'var(--bg-tertiary)', 
               borderRadius: '4px', 
               fontSize: '0.75rem', 
               color: 'var(--text-primary)',
               border: '1px solid rgba(255,255,255,0.1)'
             }}>
               {tech}
             </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
