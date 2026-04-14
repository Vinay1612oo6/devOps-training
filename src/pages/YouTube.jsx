import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { youtubeCourses } from '../data/db';

const YouTube = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'DevOps', 'AWS', 'Azure', 'Programming'];

  const filteredCourses = filter === 'All' 
    ? youtubeCourses 
    : youtubeCourses.filter(course => course.category === filter);

  return (
    <div className="container py-16 animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--text-primary)' }}>Free YouTube Content</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Explore structured "Zero to Hero" playlists. 100% free, project-based learning paths aimed at cracking top tech roles.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '999px',
              fontWeight: 500,
              border: '1px solid',
              borderColor: filter === cat ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
              background: filter === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
              color: filter === cat ? 'white' : 'var(--text-secondary)',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} type="youtube" />
        ))}
        {filteredCourses.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
             No courses found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTube;
