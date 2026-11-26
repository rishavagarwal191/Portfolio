'use client';

import { useState, useEffect, useRef } from 'react';

const roles = [
  'Predictive Machine Learning',
  'RAG-Powered AI Systems',
  'Data Structures & Algorithms',
  'Real Estate Market Analytics',
  'Vector Search & LLM Fine-Tuning',
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Counter metrics
  const [metric1, setMetric1] = useState(0);
  const [metric2, setMetric2] = useState(0);
  const [metric3, setMetric3] = useState(0);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const countersStarted = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (charIdx < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx]);

  // Metric counters intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;

            let cur1 = 0;
            let cur2 = 0;
            let cur3 = 0;

            const inc1 = 2 / steps;
            const inc2 = 150 / steps;
            const inc3 = 100 / steps;

            const timer = setInterval(() => {
              cur1 += inc1;
              cur2 += inc2;
              cur3 += inc3;

              if (cur1 >= 2) setMetric1(2);
              else setMetric1(Math.floor(cur1));

              if (cur2 >= 150) setMetric2(150);
              else setMetric2(Math.floor(cur2));

              if (cur3 >= 100) {
                setMetric3(100);
                clearInterval(timer);
              } else {
                setMetric3(Math.floor(cur3));
              }
            }, stepTime);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="pulse-dot"></span>
          <span>Data Science &amp; Generative AI Explorer</span>
        </div>

        <h1 className="hero-title animate-fade-in-up">
          Hi, I&apos;m <span className="gradient-text text-glow">Rishav Agrawal</span>
        </h1>

        <div className="hero-dynamic-text animate-fade-in-up delay-1">
          <span className="prefix">I specialize in </span>
          <span className="typewriter" id="typewriter">
            {currentText}
          </span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-description animate-fade-in-up delay-2">
          Passionate about turning raw, messy data into intelligent, predictive solutions. 
          Currently mastering <strong>Data Science</strong>, fine-tuning <strong>RAG AI architectures</strong>, 
          and sharpening <strong>Data Structures &amp; Algorithms</strong> to write high-performance, production-ready code.
        </p>

        <div className="hero-cta animate-fade-in-up delay-3">
          <a href="#projects" className="btn btn-primary">
            <span>Explore My Work</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#interactive-lab" className="btn btn-secondary">
            <i className="fa-solid fa-gamepad"></i>
            <span>Try Interactive Labs</span>
          </a>
        </div>

        <div className="hero-socials animate-fade-in-up delay-4">
          <a
            href="https://github.com/rishavagarwal191"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://kaggle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip"
            title="Kaggle"
          >
            <i className="fa-brands fa-kaggle"></i>
            <span>Kaggle</span>
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip"
            title="LeetCode"
          >
            <i className="fa-solid fa-code"></i>
            <span>LeetCode</span>
          </a>
        </div>
      </div>

      {/* Hero Visual Card / Tech Hologram */}
      <div className="hero-visual animate-float">
        <div className="glass-card hero-terminal" ref={terminalRef}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">rishav@datascience:~/portfolio</div>
          </div>
          <div className="terminal-body">
            <p>
              <span className="term-prompt">$</span>{' '}
              <span className="term-cmd">python -m rishav.profile</span>
            </p>
            <div className="term-output">
              <p>
                <span className="term-key">name:</span>{' '}
                <span className="term-str">&quot;Rishav Agrawal&quot;</span>
              </p>
              <p>
                <span className="term-key">focus:</span>{' '}
                <span className="term-str">&quot;Data Science &amp; Predictive ML&quot;</span>
              </p>
              <p>
                <span className="term-key">current_focus:</span> [
              </p>
              <p className="term-indent">
                <span className="term-str">&quot;Gurgaon Real Estate ML&quot;</span>,
              </p>
              <p className="term-indent">
                <span className="term-str">&quot;RAG AI Teaching Assistant&quot;</span>,
              </p>
              <p className="term-indent">
                <span className="term-str">&quot;Data Structures &amp; Algorithms&quot;</span>
              </p>
              <p>]</p>
              <p>
                <span className="term-key">ready_to_collaborate:</span>{' '}
                <span className="term-bool">True</span>
              </p>
            </div>
            <div className="terminal-metrics">
              <div className="metric-box">
                <span className="metric-num">{metric1}</span>
                <span className="metric-plus">+</span>
                <span className="metric-label">Key ML/AI Projects</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">{metric2}</span>
                <span className="metric-plus">+</span>
                <span className="metric-label">DSA Problems Solved</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">{metric3}</span>
                <span className="metric-plus">%</span>
                <span className="metric-label">Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
