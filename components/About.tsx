export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-user"></i> Background
        </span>
        <h2 className="section-title">
          Driven by Data. Powered by <span className="gradient-text">Algorithms.</span>
        </h2>
        <p className="section-subtitle">
          A glimpse into my approach to machine learning, problem solving, and software design.
        </p>
      </div>

      <div className="about-grid">
        <div className="glass-card about-card-main">
          <div>
            <div className="card-icon">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h3>My Data Science Philosophy</h3>
            <p>
              Data is only as valuable as the insights we can extract from it. I enjoy unraveling
              raw datasets, identifying hidden correlations, crafting domain-specific features, and
              training robust machine learning models that generalize well in real-world
              environments.
            </p>
            <p>
              From predicting multi-crore property values in Gurgaon with advanced regression to
              architecting Retrieval-Augmented Generation (RAG) pipelines for interactive AI tutors, I
              bridge mathematical theory with practical software engineering.
            </p>
          </div>
          <div className="card-tags">
            <span className="tag">Exploratory Data Analysis</span>
            <span className="tag">Feature Engineering</span>
            <span className="tag">Ensemble Modeling</span>
            <span className="tag">RAG Pipelines</span>
            <span className="tag">DSA Rigor</span>
          </div>
        </div>

        <div className="about-cards-side">
          <div className="glass-card mini-about-card">
            <div className="side-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <h4>Predictive Analytics</h4>
              <p>
                Specializing in regression, classification, outlier detection, and geospatial price
                prediction modeling.
              </p>
            </div>
          </div>

          <div className="glass-card mini-about-card">
            <div className="side-icon">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div>
              <h4>Generative AI &amp; LLMs</h4>
              <p>
                Building hallucination-resilient RAG systems with vector databases (Chroma/FAISS)
                and semantic retrieval.
              </p>
            </div>
          </div>

          <div className="glass-card mini-about-card">
            <div className="side-icon">
              <i className="fa-solid fa-code-merge"></i>
            </div>
            <div>
              <h4>Algorithmic Problem Solving</h4>
              <p>
                Continuous DSA learner optimizing time and space complexity with clean, elegant
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
