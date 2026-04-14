import CourseCard from '../components/CourseCard';
import { udemyCourses } from '../data/db';

const Udemy = () => {
  return (
    <div className="container py-16 animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--text-primary)' }}>Premium Udemy Courses</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Deepen your expertise with intense, comprehensive courses featuring lifetime access, Q&A support, and completion certificates.
        </p>
      </div>

      <div className="grid grid-cols-3">
        {udemyCourses.map(course => (
          <CourseCard key={course.id} course={course} type="udemy" />
        ))}
      </div>
    </div>
  );
};

export default Udemy;
