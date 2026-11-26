export default function Journey() {
  return (
    <section id="journey" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-route"></i> Growth Path
        </span>
        <h2 className="section-title">
          My Learning <span className="gradient-text">Milestones</span>
        </h2>
        <p className="section-subtitle">
          The progression of knowledge and hands-on projects shaping my career.
        </p>
      </div>

      <div className="timeline">
        {/* Milestone 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-card">
            <span className="timeline-date">Foundation Phase</span>
            <h3>Python, Mathematics &amp; Data Analysis</h3>
            <p>
              Mastered core Python programming, linear algebra, multivariable calculus, and applied
              probability. Built proficiency in Pandas, NumPy, and statistical hypothesis testing.
            </p>
          </div>
        </div>

        {/* Milestone 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-card">
            <span className="timeline-date">Machine Learning Phase</span>
            <h3>Gurgaon Housing Prices &amp; Predictive ML</h3>
            <p>
              Developed full-stack ML workflows: raw data cleaning, geolocation feature
              engineering, correlation analysis, and regression modeling. Deployed with Streamlit.
            </p>
          </div>
        </div>

        {/* Milestone 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-card">
            <span className="timeline-date">Algorithmic Rigor</span>
            <h3>Data Structures &amp; Algorithms (DSA)</h3>
            <p>
              Systematically tackling LeetCode patterns including Arrays, Hashing, Two Pointers,
              Sliding Windows, Trees, and Dynamic Programming to write scalable, production-grade
              logic.
            </p>
          </div>
        </div>

        {/* Milestone 4 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card glass-card">
            <span className="timeline-date">Modern AI Phase</span>
            <h3>RAG-Based AI Teaching Assistant &amp; LLMs</h3>
            <p>
              Pioneering Retrieval-Augmented Generation workflows. Mastering vector embeddings,
              ChromaDB, prompt engineering, and hybrid semantic search for real-world educational AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
