export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-microchip"></i> Capabilities
        </span>
        <h2 className="section-title">
          My Technical <span className="gradient-text">Toolbox</span>
        </h2>
        <p className="section-subtitle">
          Technologies and frameworks I use to develop data-driven applications.
        </p>
      </div>

      <div className="skills-grid">
        {/* Skill Category 1 */}
        <div className="glass-card skill-category">
          <div className="category-header">
            <i className="fa-solid fa-chart-pie skill-icon"></i>
            <div>
              <h3>Data Science &amp; ML</h3>
              <p>Modeling, Statistics &amp; Analytics</p>
            </div>
          </div>
          <div className="skill-chips">
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-brands fa-python"></i> Python
              </span>
              <span className="skill-level">Advanced</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-table"></i> Pandas &amp; NumPy
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-network-wired"></i> Scikit-Learn
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-bolt"></i> XGBoost / RF
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-chart-simple"></i> Matplotlib &amp; Seaborn
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-filter"></i> Feature Engineering
              </span>
              <span className="skill-level">Proficient</span>
            </div>
          </div>
        </div>

        {/* Skill Category 2 */}
        <div className="glass-card skill-category">
          <div className="category-header">
            <i className="fa-solid fa-brain skill-icon"></i>
            <div>
              <h3>GenAI &amp; Modern AI</h3>
              <p>LLMs, RAG &amp; Vector Embeddings</p>
            </div>
          </div>
          <div className="skill-chips">
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-layer-group"></i> RAG Architecture
              </span>
              <span className="skill-level">Core Focus</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-database"></i> Vector DBs (Chroma/FAISS)
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-link"></i> LangChain / LlamaIndex
              </span>
              <span className="skill-level">Active Study</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-magnifying-glass"></i> Semantic Chunking
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-comment-dots"></i> Prompt Engineering
              </span>
              <span className="skill-level">Proficient</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-cloud"></i> LLM APIs (OpenAI/Gemini)
              </span>
              <span className="skill-level">Hands-on</span>
            </div>
          </div>
        </div>

        {/* Skill Category 3 */}
        <div className="glass-card skill-category">
          <div className="category-header">
            <i className="fa-solid fa-code skill-icon"></i>
            <div>
              <h3>Data Structures &amp; Algorithms</h3>
              <p>Foundational Computer Science</p>
            </div>
          </div>
          <div className="skill-chips">
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-cubes"></i> Arrays &amp; Strings
              </span>
              <span className="skill-level">Strong</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-arrows-split-up-and-left"></i> Two Pointers &amp; Slid. Window
              </span>
              <span className="skill-level">Practiced</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-sitemap"></i> Trees &amp; Graphs
              </span>
              <span className="skill-level">Intermediate</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-stairs"></i> Dynamic Programming
              </span>
              <span className="skill-level">In Progress</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-stopwatch"></i> Time/Space Optimization
              </span>
              <span className="skill-level">Methodical</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-laptop-code"></i> LeetCode &amp; Problem Solving
              </span>
              <span className="skill-level">Daily Routine</span>
            </div>
          </div>
        </div>

        {/* Skill Category 4 */}
        <div className="glass-card skill-category">
          <div className="category-header">
            <i className="fa-solid fa-toolbox skill-icon"></i>
            <div>
              <h3>Tools &amp; Ecosystem</h3>
              <p>Development &amp; Deployment</p>
            </div>
          </div>
          <div className="skill-chips">
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-brands fa-git-alt"></i> Git &amp; GitHub
              </span>
              <span className="skill-level">Version Control</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-book-open"></i> Jupyter Notebooks
              </span>
              <span className="skill-level">Daily Driver</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-window-maximize"></i> Streamlit
              </span>
              <span className="skill-level">Rapid Prototyping</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-server"></i> FastAPI / Flask
              </span>
              <span className="skill-level">API Integration</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-solid fa-database"></i> SQL Basics
              </span>
              <span className="skill-level">Querying</span>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-brands fa-linux"></i> CLI &amp; Scripting
              </span>
              <span className="skill-level">Comfortable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
