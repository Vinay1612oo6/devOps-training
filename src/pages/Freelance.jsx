import ProjectCard from '../components/ProjectCard';
import { freelanceProjects } from '../data/db';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Freelance = () => {
  return (
    <div className="container py-16 animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--text-primary)' }}>Freelance & Consulting</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Need expert help architecting your cloud infrastructure, setting up robust CI/CD pipelines, or migrating to microservices? I offer professional DevOps consulting services tailored to your business needs.
        </p>
        <div style={{ marginTop: '2rem' }}>
           <Link to="/contact" className="btn">
              <Mail size={18} /> Discuss Your Project
           </Link>
        </div>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>Case Studies</h2>
        <div className="grid grid-cols-2">
          {freelanceProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      <div className="glass" style={{ padding: '3rem', borderRadius: '12px', textAlign: 'center' }}>
         <h2>Services Offered</h2>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem', textAlign: 'left' }}>
            <div>
               <h3 style={{ color: 'var(--accent-primary)' }}>Cloud Architecture</h3>
               <p style={{ fontSize: '0.9rem' }}>Designing scalable, secure, and cost-effective cloud solutions on AWS, Azure, and GCP.</p>
            </div>
            <div>
               <h3 style={{ color: 'var(--accent-aws)' }}>CI/CD Pipelines</h3>
               <p style={{ fontSize: '0.9rem' }}>End-to-end automation using Jenkins, GitHub Actions, GitLab CI, and ArgoCD.</p>
            </div>
            <div>
               <h3 style={{ color: 'var(--accent-azure)' }}>Infrastructure as Code</h3>
               <p style={{ fontSize: '0.9rem' }}>Automating provisional environments using Terraform, Ansible, and Pulumi.</p>
            </div>
            <div>
               <h3 style={{ color: 'var(--accent-devops)' }}>Containerization</h3>
               <p style={{ fontSize: '0.9rem' }}>Dockerizing applications and migrating to Kubernetes (EKS, AKS, GKE) for high availability.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Freelance;
