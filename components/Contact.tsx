'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-envelope"></i> Get In Touch
        </span>
        <h2 className="section-title">
          Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
        </h2>
        <p className="section-subtitle">
          Interested in collaborating on Data Science, ML models, or GenAI projects? Reach out!
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info glass-card">
          <h3>Contact Details</h3>
          <p>
            I&apos;m always open to discussing new opportunities, data science internships, research
            collaborations, or algorithmic challenges.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:rishav.agrawal.ds@gmail.com" className="contact-val">
                  rishav.agrawal.ds@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-val">India (Open to Remote &amp; Global Relocation)</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <span className="contact-label">Specialization</span>
                <span className="contact-val">Data Science, ML &amp; RAG Architectures</span>
              </div>
            </div>
          </div>

          <div className="social-links-footer">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              title="Kaggle"
            >
              <i className="fa-brands fa-kaggle"></i>
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
              title="LeetCode"
            >
              <i className="fa-solid fa-code"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card glass-card">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Alex Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject / Project Topic</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Collaboration on Data Science / AI Project"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-input"
                placeholder="Hi Rishav, I came across your portfolio and would like to discuss..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' && (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <i className="fa-solid fa-check"></i> Message Sent!
                </>
              )}
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-feedback success">
                Thank you! Your message has been received. Rishav will get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
