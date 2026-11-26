interface ProjectsProps {
  onOpenModal: (projectKey: 'gurgaon' | 'rag') => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-diagram-project"></i> Portfolio Highlights
        </span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications showcasing predictive ML, NLP, and modern AI engineering.
        </p>
      </div>

      <div className="projects-container">
        {/* PROJECT 1: Gurgaon Housing Prices */}
        <article className="glass-card project-card featured-glow">
          <div className="project-media">
            <div className="project-mockup house-mockup">
              <div className="mockup-badge">
                <i className="fa-solid fa-house-chimney"></i> Real Estate ML
              </div>
              <div className="mockup-graph">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="bar bar-5"></div>
              </div>
              <div className="mockup-pill">
                <i className="fa-solid fa-location-dot"></i> Gurgaon Sectors
              </div>
            </div>
          </div>

          <div className="project-details">
            <div className="project-meta">
              <span className="project-category">Machine Learning &amp; Analytics</span>
              <span className="project-status completed">
                <i className="fa-solid fa-circle-check"></i> Complete &amp; Tested
              </span>
            </div>

            <h3 className="project-title">Gurgaon Housing Prices Predictor &amp; Market Analytics</h3>

            <p className="project-desc">
              An end-to-end Machine Learning real estate intelligence system that predicts
              property valuations across Gurgaon sectors. Built using multi-stage feature
              engineering, handling skewed real estate distributions, outlier treatments, and
              ensemble regressors.
            </p>

            <div className="project-highlights">
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>Trained and benchmarked across Linear, Ridge, Random Forest, and XGBoost models.</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>Engineered sector-level locality scores, luxury amenity index, and price-per-sqft factors.</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>Deployed with an interactive UI allowing home buyers to estimate property values instantly.</span>
              </div>
            </div>

            <div className="project-tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Scikit-Learn</span>
              <span className="tech-badge">XGBoost</span>
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">Streamlit</span>
              <span className="tech-badge">Matplotlib/Seaborn</span>
            </div>

            <div className="project-actions">
              <button
                className="btn btn-sm btn-primary open-modal-btn"
                onClick={() => onOpenModal('gurgaon')}
              >
                <i className="fa-solid fa-circle-info"></i> View Deep-Dive Architecture
              </button>
              <a href="#interactive-lab" className="btn btn-sm btn-outline">
                <i className="fa-solid fa-sliders"></i> Try Live ML Estimator
              </a>
            </div>
          </div>
        </article>

        {/* PROJECT 2: RAG-based AI Teaching Assistant */}
        <article className="glass-card project-card featured-glow-alt">
          <div className="project-media">
            <div className="project-mockup rag-mockup">
              <div className="mockup-badge">
                <i className="fa-solid fa-brain"></i> RAG &amp; GenAI
              </div>
              <div className="rag-flow-visual">
                <div className="rag-node node-doc">
                  <i className="fa-solid fa-file-pdf"></i> Docs
                </div>
                <div className="rag-arrow">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="rag-node node-vec">
                  <i className="fa-solid fa-database"></i> Vector DB
                </div>
                <div className="rag-arrow">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="rag-node node-llm">
                  <i className="fa-solid fa-microchip"></i> LLM
                </div>
              </div>
              <div className="mockup-pill pill-ai">
                <i className="fa-solid fa-graduation-cap"></i> AI Tutor In Action
              </div>
            </div>
          </div>

          <div className="project-details">
            <div className="project-meta">
              <span className="project-category">Generative AI &amp; Education</span>
              <span className="project-status in-progress">
                <i className="fa-solid fa-spinner fa-spin"></i> Active &amp; Expanding
              </span>
            </div>

            <h3 className="project-title">RAG-Based AI Teaching Assistant</h3>

            <p className="project-desc">
              A context-grounded AI learning assistant built to eliminate LLM hallucinations for
              students. Ingests academic course materials, lecture notes, and textbooks, using
              dense semantic retrieval to deliver precise, citation-backed explanations and
              interactive quizzes.
            </p>

            <div className="project-highlights">
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>Document chunking and dense vector embedding generation using state-of-the-art embedding models.</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>ChromaDB/FAISS vector store integration with cosine similarity search and context reranking.</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-check-double"></i>
                <span>Prompt-engineered pedagogical persona that guides students step-by-step rather than spoiling answers.</span>
              </div>
            </div>

            <div className="project-tech-stack">
              <span className="tech-badge">LangChain</span>
              <span className="tech-badge">ChromaDB / FAISS</span>
              <span className="tech-badge">OpenAI / Gemini API</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Streamlit / FastAPI</span>
            </div>

            <div className="project-actions">
              <button
                className="btn btn-sm btn-primary open-modal-btn"
                onClick={() => onOpenModal('rag')}
              >
                <i className="fa-solid fa-circle-info"></i> View System Architecture
              </button>
              <a href="#interactive-lab" className="btn btn-sm btn-outline">
                <i className="fa-solid fa-terminal"></i> Test RAG Simulator
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
