'use client';

import { useEffect } from 'react';

interface ProjectModalProps {
  projectKey: 'gurgaon' | 'rag' | null;
  onClose: () => void;
}

const modalData = {
  gurgaon: {
    title: 'Gurgaon Housing Prices Predictor & Analytics',
    subtitle: 'End-to-End Machine Learning Pipeline & Geospatial Real Estate Valuation',
    pills: ['Python', 'Scikit-Learn', 'Pandas', 'XGBoost', 'Feature Engineering', 'Streamlit'],
    flowchart: `[Raw Real Estate Scraped Data]
            ↓
[Data Cleaning: Sector Standardization, Outlier Removal, Imputation]
            ↓
[Feature Engineering: Price/sqft, Luxury Index, Sector Geo-Distance]
            ↓
[Model Evaluation: Linear, Ridge, Random Forest, XGBoost]
            ↓
[Hyperparameter Tuning via GridSearchCV / Bayesian Optimization]
            ↓
[Deployment: Interactive Streamlit UI & Valuation Estimator]`,
    content: (
      <>
        <div className="modal-section">
          <h4>
            <i className="fa-solid fa-bullseye"></i> Problem Statement &amp; Motivation
          </h4>
          <p>
            Real estate markets in metropolitan hubs like Gurgaon exhibit extreme non-linearities,
            sector-specific premiums, and high variance in luxury amenities. Generic price
            calculators fail because a 3 BHK on Golf Course Road can be 3x more expensive than a 3
            BHK in New Gurgaon. This project aimed to build an intelligent ML valuation model that
            accounts for multi-dimensional real estate features.
          </p>
        </div>

        <div className="modal-section">
          <h4>
            <i className="fa-solid fa-gears"></i> Key Engineering Highlights
          </h4>
          <p>
            <strong>Data Preprocessing:</strong> Handled skewed price distributions with log
            transformations. Standardized over 100+ Gurgaon sector names using fuzzy string matching.
            Removed anomalous outliers using IQR bounds and domain-specific rules (e.g. area vs
            bedroom ratios).
          </p>
          <p>
            <strong>Feature Engineering:</strong> Constructed a composite &quot;Luxury Score&quot; by
            weighting high-end amenities (private lift, clubhouse, terrace). Calculated sector-level
            price-per-square-foot medians to encode locational desirability without overfitting.
          </p>
          <p>
            <strong>Modeling &amp; Results:</strong> Experimented with Linear Regression, Decision
            Trees, Random Forest Regressor, and XGBoost Regressor. XGBoost achieved the lowest Mean
            Absolute Error (MAE) and high R² score on unseen validation sets.
          </p>
        </div>
      </>
    ),
  },
  rag: {
    title: 'RAG-Based AI Teaching Assistant',
    subtitle: 'Context-Grounded Retrieval Augmented Generation for Academic Learning',
    pills: ['LangChain', 'ChromaDB', 'Vector Embeddings', 'OpenAI / Gemini', 'Prompt Engineering', 'Python'],
    flowchart: `[Student Query]
       ↓
[Generate Query Vector via Text Embeddings]
       ↓
[Cosine Similarity Search against ChromaDB / FAISS]
       ↓
[Retrieve Top-K Chunks + Contextual Reranking]
       ↓
[Augment Prompt: System Persona + Grounded Chunks + Query]
       ↓
[LLM Inference (Hallucination-Resistant Pedagogical Answer)]`,
    content: (
      <>
        <div className="modal-section">
          <h4>
            <i className="fa-solid fa-bullseye"></i> Problem Statement &amp; Motivation
          </h4>
          <p>
            Standard Large Language Models frequently hallucinate mathematical proofs, invent
            citations, or give answers away immediately instead of teaching. The goal of this
            project was to construct a domain-specific teaching assistant that strictly grounds its
            reasoning in official course syllabi, textbooks, and lecture transcripts.
          </p>
        </div>

        <div className="modal-section">
          <h4>
            <i className="fa-solid fa-gears"></i> Key Engineering Highlights
          </h4>
          <p>
            <strong>Chunking &amp; Ingestion Strategy:</strong> Optimized chunk sizing (500 tokens
            with 50-token overlap) using recursive character text splitters to preserve technical
            equation context. Stored dense embeddings in ChromaDB.
          </p>
          <p>
            <strong>Hybrid Semantic Retrieval:</strong> Combined dense semantic vector search with
            keyword filtering to ensure accurate hits on niche technical terms (e.g.
            &quot;Eigenvalues&quot;, &quot;Backpropagation&quot;).
          </p>
          <p>
            <strong>Pedagogical Prompt Conditioning:</strong> Designed system prompts that instruct
            the LLM to behave like a Socratic tutor—providing helpful hints, analogies, and asking
            follow-up questions to reinforce student understanding.
          </p>
        </div>
      </>
    ),
  },
};

export default function ProjectModal({ projectKey, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (projectKey) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectKey, onClose]);

  if (!projectKey) return null;

  const current = modalData[projectKey];

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-card glass-card">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal-header">
          <h3>{current.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{current.subtitle}</p>
          <div className="modal-tech-pills">
            {current.pills.map((p) => (
              <span key={p} className="tech-badge">
                {p}
              </span>
            ))}
          </div>
        </div>

        {current.content}

        <div className="modal-section">
          <h4>
            <i className="fa-solid fa-sitemap"></i> Pipeline Architecture Diagram
          </h4>
          <pre className="arch-flow-diagram">{current.flowchart}</pre>
        </div>
      </div>
    </div>
  );
}
