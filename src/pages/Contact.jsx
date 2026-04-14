import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission logic would go here
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-16 animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--text-primary)' }}>Get in Touch</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Have a question about a course, interested in freelance services, or simply want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
        
        {/* Contact Information */}
        <div>
           <h2>Contact Information</h2>
           <p style={{ marginBottom: '2rem' }}>Fill out the form and I will get back to you within 24-48 business hours.</p>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                    <Mail size={24} />
                 </div>
                 <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Email</h3>
                    <p style={{ margin: 0 }}>contact@devopstraining.com</p>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '50%', color: 'var(--accent-aws)' }}>
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Location</h3>
                    <p style={{ margin: 0 }}>Hyderabad, India</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
           {submitted ? (
             <div style={{ padding: '3rem 1rem', textAlign: 'center', color: '#4ade80' }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent Successfully!</h3>
               <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you soon.</p>
             </div>
           ) : (
             <form onSubmit={handleSubmit}>
                <div className="input-group">
                   <label className="input-label" htmlFor="name">Full Name</label>
                   <input type="text" id="name" name="name" className="input-field" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="input-group">
                   <label className="input-label" htmlFor="email">Email Address</label>
                   <input type="email" id="email" name="email" className="input-field" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
                <div className="input-group">
                   <label className="input-label" htmlFor="subject">Subject</label>
                   <input type="text" id="subject" name="subject" className="input-field" required value={formData.subject} onChange={handleChange} placeholder="How can I help you?" />
                </div>
                <div className="input-group">
                   <label className="input-label" htmlFor="message">Message</label>
                   <textarea id="message" name="message" className="input-field" required value={formData.message} onChange={handleChange} rows="5" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
             </form>
           )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
