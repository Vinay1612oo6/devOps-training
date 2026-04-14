import { PlayCircle, Star, ExternalLink } from 'lucide-react';

const CourseCard = ({ course, type = 'youtube' }) => {
  return (
    <div 
      className="glass animate-fade-in" 
      style={{ 
        borderRadius: 'var(--border-radius)', 
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--card-shadow)';
      }}
    >
      <div style={{ position: 'relative', height: '200px', width: '100%' }}>
        <img 
          src={course.image} 
          alt={course.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <span className={`badge ${course.badge}`}>{course.category || (type === 'udemy' ? 'Premium' : '')}</span>
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
          {course.title}
        </h3>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
          {course.description}
        </p>
        
        {type === 'udemy' && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0.75rem', background: 'var(--bg-primary)', borderRadius: '8px' }}>
             <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--accent-primary)' }}>{course.price}</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: 'var(--accent-aws)' }}>
               <Star size={14} fill="currentColor" /> {course.rating}
             </span>
          </div>
        )}

        <a 
          href={course.link} 
          className="btn" 
          style={{ width: '100%' }}
        >
          {type === 'youtube' ? (
            <><PlayCircle size={18} /> Watch Free</>
          ) : (
            <><ExternalLink size={18} /> Enroll Now</>
          )}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
