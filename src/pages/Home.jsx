import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TerminalSquare, Cloud, Code } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { youtubeCourses, udemyCourses } from '../data/db';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: '6rem 0', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%', right: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(255,153,0,0.1) 0%, rgba(15,23,42,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: -1
        }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', padding: '0.5rem 1rem', borderRadius: '999px', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
             <TerminalSquare size={16} /> <span>#1 DevOps & Cloud Training</span>
          </div>
          <h1 style={{ color: 'var(--text-primary)' }}>
            Master DevOps, Cloud & SRE from <span style={{ color: 'var(--accent-primary)' }}>Zero to Hero</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>
            Follow comprehensive, real-world, and project-oriented learning paths designed by DevOps Training to land your dream job in tech.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/youtube" className="btn" style={{ padding: '0.875rem 2rem', fontSize: '1.1rem' }}>
              Start Learning Free <ArrowRight size={20} />
            </Link>
            <Link to="/udemy" className="btn btn-secondary" style={{ padding: '0.875rem 2rem', fontSize: '1.1rem' }}>
              View Premium Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Free Content Section */}
      <section className="container py-16">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
           <div>
              <h2>Popular Free Paths</h2>
              <p style={{ margin: 0 }}>Step-by-step roadmaps structured for success.</p>
           </div>
           <Link to="/youtube" style={{ color: 'var(--accent-primary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>View All <ArrowRight size={16}/></Link>
        </div>
        
        <div className="grid grid-cols-3">
          {youtubeCourses.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} type="youtube" />
          ))}
        </div>
      </section>

      {/* Why Learn Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Why Learn With Us?</h2>
          <div className="grid grid-cols-3">
             <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <TerminalSquare size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem' }} />
                <h3>Project-Based Approach</h3>
                <p>Don't just learn theory. Implement real CI/CD pipelines, K8s clusters, and Terraform scripts.</p>
             </div>
             <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <Cloud size={48} color="var(--accent-aws)" style={{ margin: '0 auto 1.5rem' }} />
                <h3> Multi-Cloud Mastery</h3>
                <p>Get comfortable across AWS, Azure, and GCP. The modern industry demands versatile engineers.</p>
             </div>
             <div className="glass" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                <Code size={48} color="var(--accent-devops)" style={{ margin: '0 auto 1.5rem' }} />
                <h3>Interview Prep Built-in</h3>
                <p>Scenario-based learning tailored to exactly what product-based companies ask in interviews.</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Premium Content Peek */}
      <section className="container py-16">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
           <div>
              <h2>Premium Udemy Courses</h2>
              <p style={{ margin: 0 }}>Take your skills to the next level with specialized intensive courses.</p>
           </div>
        </div>
        
        <div className="grid grid-cols-3">
          {udemyCourses.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} type="udemy" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
