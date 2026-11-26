'use client';

import { useState } from 'react';

interface SectorData {
  multiplier: number;
  name: string;
  label: string;
}

const sectorWeights: Record<string, SectorData> = {
  'golf-course': { multiplier: 1.85, name: 'Golf Course Road', label: '1.85x (Ultra Premium)' },
  'golf-course-ext': { multiplier: 1.35, name: 'Golf Course Extension', label: '1.35x (High Demand)' },
  'cyber-city': { multiplier: 1.5, name: 'DLF Phase 2 / Cyber City', label: '1.50x (Corporate Hub)' },
  'sohna-road': { multiplier: 1.1, name: 'Sohna Road', label: '1.10x (Established Corridor)' },
  'dwarka-expressway': { multiplier: 1.2, name: 'Dwarka Expressway', label: '1.20x (Emerging Expressway)' },
  'new-gurgaon': { multiplier: 0.95, name: 'New Gurgaon', label: '0.95x (Affordable Growth)' },
};

const propTypeWeights: Record<string, number> = {
  apartment: 1.0,
  'builder-floor': 1.12,
  villa: 1.45,
};

const ragKnowledgeBase: Record<string, { chunk: string; source: string; score: string; responseHtml: string }> = {
  bias: {
    source: 'Textbook: "Elements of Statistical Learning" (Ch. 7)',
    score: '0.94',
    chunk:
      '"Bias refers to the error introduced by approximating a real-world problem with a simplified model. High bias leads to underfitting. Variance refers to the model\'s sensitivity to small fluctuations in the training set. High variance leads to overfitting."',
    responseHtml: `
      <p>Hello! Let's break down <strong>Bias vs. Variance</strong> intuitively:</p>
      <ul>
        <li><strong>Bias (Underfitting):</strong> Assumptions in the model are too rigid. It misses patterns in both training and test data (e.g. fitting a straight line to quadratic data).</li>
        <li><strong>Variance (Overfitting):</strong> Model captures statistical noise rather than genuine signals. Performs brilliantly on training data, but fails on new unseen test data.</li>
        <li><strong>Trade-off:</strong> As model complexity increases, bias decreases but variance increases. The goal of regularization (L1/L2) and ensemble methods is to strike the optimal balance.</li>
      </ul>
      <div class="citation-badge"><i class="fa-solid fa-check"></i> Verified from course lecture materials</div>
    `,
  },
  gradient: {
    source: 'Textbook: "Deep Learning" (Goodfellow et al.)',
    score: '0.96',
    chunk:
      '"Gradient Descent iteratively minimizes the cost function J(θ) by computing the partial derivatives ∇J(θ) with respect to model parameters and updating θ := θ - α * ∇J(θ), where α is the learning rate."',
    responseHtml: `
      <p>Great question! Here is how <strong>Gradient Descent</strong> optimizes loss:</p>
      <ul>
        <li><strong>The Objective:</strong> We want to find the parameter weights (θ) that minimize our loss function.</li>
        <li><strong>The Gradient:</strong> Represents the direction of steepest ascent on the multi-dimensional loss surface.</li>
        <li><strong>The Step:</strong> By moving in the opposite direction (-∇J) scaled by learning rate (α), each iteration steps downhill towards a local or global minimum.</li>
      </ul>
      <div class="citation-badge"><i class="fa-solid fa-check"></i> Retrieved from Deep Learning Fundamentals</div>
    `,
  },
  vector: {
    source: 'Vector Search Architecture Whitepaper',
    score: '0.92',
    chunk:
      '"Vector databases like ChromaDB and FAISS index high-dimensional embeddings using Hierarchical Navigable Small World (HNSW) graphs, enabling approximate nearest neighbor (ANN) lookups in sub-linear time."',
    responseHtml: `
      <p>Here is why <strong>ChromaDB / FAISS</strong> are fundamental for RAG systems:</p>
      <ul>
        <li><strong>Semantic Meaning:</strong> Traditional keyword search (BM25) fails when students use synonyms. Vector embeddings map contextual semantics into a high-dimensional space.</li>
        <li><strong>Sub-linear Search Speed:</strong> Instead of comparing against millions of text snippets sequentially O(N), indexing algorithms (HNSW, IVF) fetch the closest chunks in milliseconds.</li>
        <li><strong>Zero Hallucinations:</strong> The LLM is forced to cite only the retrieved context chunks, ensuring faithful academic answers.</li>
      </ul>
      <div class="citation-badge"><i class="fa-solid fa-check"></i> Retrieved from Vector Store Documentation</div>
    `,
  },
  array: {
    source: 'Introduction to Algorithms (CLRS)',
    score: '0.95',
    chunk:
      '"Arrays allocate contiguous memory blocks allowing O(1) random index access via base address arithmetic, whereas Linked Lists use disjoint heap nodes with pointers, offering O(1) insertions but O(N) access times."',
    responseHtml: `
      <p>Let's compare <strong>Arrays vs. Linked Lists</strong> at the memory level:</p>
      <ul>
        <li><strong>Arrays:</strong> Elements are stored in contiguous memory cells. This enables instant O(1) access via index arithmetic (<code>base + i * size</code>) and provides superior CPU cache locality.</li>
        <li><strong>Linked Lists:</strong> Nodes can be scattered across heap memory, connected by pointers. Inserting/deleting at the head is O(1), but accessing the k-th node requires traversing O(N) pointers.</li>
      </ul>
      <div class="citation-badge"><i class="fa-solid fa-check"></i> Verified from CLRS Algorithms Reference</div>
    `,
  },
};

const dsaSnippets = {
  'two-sum': {
    title: 'Two Sum (Hash Map Strategy)',
    code: `def two_sum(nums: list[int], target: int) -> list[int]:
    """
    Find two indices such that their elements sum up to target.
    Time Complexity: O(N) single pass
    Space Complexity: O(N) auxiliary hash map
    """
    seen = {}
    for idx, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], idx]
        seen[num] = idx
    return []`,
    explanation:
      'Instead of the naive O(N²) nested loop check, a dictionary acts as an inverted lookup index, reducing the search of the complement to an instant O(1) average time per lookup.',
  },
  'binary-search': {
    title: 'Binary Search (Search in Rotated Sorted Array)',
    code: `def search_rotated(nums: list[int], target: int) -> int:
    """
    Find target in a rotated sorted array in logarithmic time.
    Time Complexity: O(log N)
    Space Complexity: O(1)
    """
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid

        # Check if left half is normally sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Otherwise right half must be sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1`,
    explanation:
      'Even in a rotated sorted array, dividing at midpoint guarantees that at least one of the halves remains strictly sorted. Checking boundaries eliminates half the search space every single iteration.',
  },
  'sliding-window': {
    title: 'Sliding Window (Longest Substring Without Repeating Characters)',
    code: `def length_of_longest_substring(s: str) -> int:
    """
    Find length of longest contiguous substring without duplicates.
    Time Complexity: O(N)
    Space Complexity: O(min(N, M)) where M is character alphabet size
    """
    char_index_map = {}
    max_length = 0
    start = 0

    for end, char in enumerate(s):
        if char in char_index_map and char_index_map[char] >= start:
            # Jump start pointer past previous duplicate
            start = char_index_map[char] + 1

        char_index_map[char] = end
        max_length = max(max_length, end - start + 1)

    return max_length`,
    explanation:
      'Using two pointers (start, end) expands the dynamic window to the right until a duplicate is detected. By storing the latest index of each character, the start pointer jumps directly past the collision in O(1) time.',
  },
};

export default function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<'housing' | 'rag' | 'dsa'>('housing');

  // Housing state
  const [sector, setSector] = useState('golf-course-ext');
  const [bhk, setBhk] = useState(3);
  const [area, setArea] = useState(1850);
  const [luxury, setLuxury] = useState(7.5);
  const [propType, setPropType] = useState('apartment');

  // RAG state
  const [ragQuery, setRagQuery] = useState('What is the difference between Bias and Variance in ML?');
  const [ragActiveKey, setRagActiveKey] = useState('bias');
  const [currentStepIndex, setCurrentStepIndex] = useState(4); // 4 = all complete
  const [isRagRunning, setIsRagRunning] = useState(false);

  // DSA state
  const [selectedPattern, setSelectedPattern] = useState<'two-sum' | 'binary-search' | 'sliding-window'>('two-sum');
  const [copied, setCopied] = useState(false);

  // Calculations for Housing Price
  const currentSector = sectorWeights[sector] || { multiplier: 1.0, label: '1.0x' };
  const currentPropMultiplier = propTypeWeights[propType] || 1.0;
  const baseSqftRate = 7800;
  const luxuryBonus = 1 + (luxury - 1) * 0.045;
  const effectiveSqftRate = Math.round(baseSqftRate * currentSector.multiplier * luxuryBonus * currentPropMultiplier);
  const rawValuation = effectiveSqftRate * area;

  const priceInCr = rawValuation / 10000000;
  const minInCr = (rawValuation * 0.94) / 10000000;
  const maxInCr = (rawValuation * 1.06) / 10000000;

  const formattedPrice =
    priceInCr >= 1.0
      ? `₹ ${priceInCr.toFixed(2)} Cr`
      : `₹ ${(rawValuation / 100000).toFixed(1)} Lakh`;
  const formattedConfidence =
    priceInCr >= 1.0
      ? `Confidence Range (±6%): ₹ ${minInCr.toFixed(2)} Cr – ₹ ${maxInCr.toFixed(2)} Cr`
      : `Confidence Range (±6%): ₹ ${((rawValuation * 0.94) / 100000).toFixed(1)} Lakh – ₹ ${((rawValuation * 1.06) / 100000).toFixed(1)} Lakh`;

  // RAG execution function
  const runRagPipeline = (query: string) => {
    setIsRagRunning(true);
    let key = 'bias';
    const lower = query.toLowerCase();
    if (lower.includes('gradient') || lower.includes('descent')) key = 'gradient';
    else if (lower.includes('chroma') || lower.includes('vector') || lower.includes('rag')) key = 'vector';
    else if (lower.includes('array') || lower.includes('linked') || lower.includes('dsa') || lower.includes('memory')) key = 'array';

    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStepIndex(step);
      if (step >= 4) {
        clearInterval(interval);
        setRagActiveKey(key);
        setIsRagRunning(false);
      }
    }, 250);
  };

  const handleCopyCode = () => {
    const textToCopy = dsaSnippets[selectedPattern].code;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="interactive-lab" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <i className="fa-solid fa-flask-vial"></i> Live Experimentation
        </span>
        <h2 className="section-title">
          Interactive <span className="gradient-text">Project Demos</span>
        </h2>
        <p className="section-subtitle">
          Experience Rishav&apos;s projects right here in your browser with interactive simulations.
        </p>
      </div>

      {/* Lab Switcher Tabs */}
      <div className="lab-tabs">
        <button
          className={`lab-tab-btn ${activeTab === 'housing' ? 'active' : ''}`}
          onClick={() => setActiveTab('housing')}
        >
          <i className="fa-solid fa-house-laptop"></i> Gurgaon Housing Estimator
        </button>
        <button
          className={`lab-tab-btn ${activeTab === 'rag' ? 'active' : ''}`}
          onClick={() => setActiveTab('rag')}
        >
          <i className="fa-solid fa-robot"></i> RAG AI Assistant Simulator
        </button>
        <button
          className={`lab-tab-btn ${activeTab === 'dsa' ? 'active' : ''}`}
          onClick={() => setActiveTab('dsa')}
        >
          <i className="fa-solid fa-code"></i> DSA Algorithmic Playground
        </button>
      </div>

      {/* Tab 1: Housing Price Estimator */}
      {activeTab === 'housing' && (
        <div className="lab-content active glass-card" id="housing-tab">
          <div className="lab-header">
            <div>
              <h3>
                <i className="fa-solid fa-chart-line"></i> Gurgaon Property Valuation Model
              </h3>
              <p>
                Adjust the real estate parameters below to simulate how the trained machine learning pipeline
                estimates market value.
              </p>
            </div>
            <span className="model-badge">
              <i className="fa-solid fa-sliders"></i> ML Pipeline Active
            </span>
          </div>

          <div className="estimator-grid">
            <div className="controls-column">
              {/* Sector */}
              <div className="control-group">
                <label htmlFor="sector-select">
                  <i className="fa-solid fa-location-dot"></i> Gurgaon Locality / Sector
                </label>
                <select
                  id="sector-select"
                  className="form-input"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                >
                  <option value="golf-course">Golf Course Road (Premium Corridor)</option>
                  <option value="golf-course-ext">Golf Course Extension (High Growth)</option>
                  <option value="cyber-city">DLF Phase 2 / Cyber City (Tech Hub)</option>
                  <option value="sohna-road">Sohna Road (Residential Prime)</option>
                  <option value="dwarka-expressway">Dwarka Expressway (Emerging Hub)</option>
                  <option value="new-gurgaon">New Gurgaon (Affordable Growth)</option>
                </select>
              </div>

              {/* Bedrooms (BHK) */}
              <div className="control-group">
                <label>
                  <i className="fa-solid fa-bed"></i> Bedrooms (BHK):{' '}
                  <span className="highlight-val">{bhk} BHK</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={bhk}
                  onChange={(e) => setBhk(parseInt(e.target.value, 10))}
                  className="range-slider"
                />
                <div className="slider-marks">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>

              {/* Built-up Area */}
              <div className="control-group">
                <label>
                  <i className="fa-solid fa-ruler-combined"></i> Super Built-up Area:{' '}
                  <span className="highlight-val">{area.toLocaleString()} sq. ft.</span>
                </label>
                <input
                  type="range"
                  min="600"
                  max="6000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(parseInt(e.target.value, 10))}
                  className="range-slider"
                />
                <div className="slider-marks">
                  <span>600 sqft</span>
                  <span>3000 sqft</span>
                  <span>6000 sqft</span>
                </div>
              </div>

              {/* Luxury Index */}
              <div className="control-group">
                <label>
                  <i className="fa-solid fa-gem"></i> Luxury &amp; Amenities Score:{' '}
                  <span className="highlight-val">{luxury.toFixed(1)} / 10</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={luxury}
                  onChange={(e) => setLuxury(parseFloat(e.target.value))}
                  className="range-slider"
                />
                <div className="slider-marks">
                  <span>Basic (1)</span>
                  <span>Standard (5)</span>
                  <span>Ultra Luxury (10)</span>
                </div>
              </div>

              {/* Property Type */}
              <div className="control-group">
                <label>
                  <i className="fa-solid fa-building"></i> Property Type
                </label>
                <div className="radio-group">
                  {[
                    { id: 'apartment', label: 'High-Rise Apartment' },
                    { id: 'builder-floor', label: 'Builder Floor' },
                    { id: 'villa', label: 'Luxury Villa' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`radio-chip ${propType === item.id ? 'active' : ''}`}
                      onClick={() => setPropType(item.id)}
                    >
                      <input
                        type="radio"
                        name="prop-type"
                        value={item.id}
                        checked={propType === item.id}
                        onChange={() => setPropType(item.id)}
                      />{' '}
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Prediction Result Column */}
            <div className="result-column">
              <div className="price-display-card">
                <div className="price-label">Estimated Market Valuation</div>
                <div className="price-number">{formattedPrice}</div>
                <div className="price-range">{formattedConfidence}</div>

                <hr className="divider" />

                <div className="factors-breakdown">
                  <h4>Feature Impact Analysis</h4>
                  <div className="factor-row">
                    <span>Base Rate / Sq. Ft:</span>
                    <strong>₹ {effectiveSqftRate.toLocaleString()} / sqft</strong>
                  </div>
                  <div className="factor-row">
                    <span>Location Multiplier:</span>
                    <strong>{currentSector.label}</strong>
                  </div>
                  <div className="factor-row">
                    <span>Luxury Appreciation:</span>
                    <strong>+{((luxuryBonus - 1) * 100).toFixed(1)}%</strong>
                  </div>
                </div>

                <div className="model-note">
                  <i className="fa-solid fa-circle-info"></i>
                  <span>Simulated using feature weights from trained Gurgaon dataset regression pipeline.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: RAG Teaching Assistant Simulator */}
      {activeTab === 'rag' && (
        <div className="lab-content active glass-card" id="rag-tab">
          <div className="lab-header">
            <div>
              <h3>
                <i className="fa-solid fa-robot"></i> RAG AI Assistant Interactive Pipeline
              </h3>
              <p>
                See step-by-step how the RAG model retrieves textbook passages and answers student questions without hallucinations.
              </p>
            </div>
            <span className="model-badge">
              <i className="fa-solid fa-brain"></i> Vector Search Emulation
            </span>
          </div>

          <div className="rag-demo-grid">
            <div className="rag-input-box">
              <label htmlFor="rag-custom-input">
                <i className="fa-solid fa-circle-question"></i> Select or Enter a Question:
              </label>
              <div className="quick-questions">
                {[
                  { label: 'Bias vs Variance', query: 'What is the difference between Bias and Variance in ML?' },
                  { label: 'Gradient Descent', query: 'How does Gradient Descent optimize neural network loss?' },
                  { label: 'Vector DBs in RAG', query: 'Why do we use ChromaDB for Vector Search in RAG?' },
                  { label: 'DSA: Arrays vs Linked Lists', query: 'What is the difference between Array and Linked List in memory?' },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`quick-q-btn ${ragQuery === item.query ? 'active' : ''}`}
                    onClick={() => {
                      setRagQuery(item.query);
                      runRagPipeline(item.query);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="input-with-btn">
                <input
                  type="text"
                  id="rag-custom-input"
                  className="form-input"
                  value={ragQuery}
                  onChange={(e) => setRagQuery(e.target.value)}
                  placeholder="Ask a technical ML or DSA question..."
                />
                <button
                  id="run-rag-btn"
                  className="btn btn-primary"
                  onClick={() => runRagPipeline(ragQuery)}
                  disabled={isRagRunning}
                >
                  <i className={`fa-solid ${isRagRunning ? 'fa-spinner fa-spin' : 'fa-bolt'}`}></i> Run Pipeline
                </button>
              </div>

              {/* Pipeline Visual Steps */}
              <div className="pipeline-tracker">
                {[
                  { num: 1, label: 'Generate Embeddings' },
                  { num: 2, label: 'Vector DB Cosine Search' },
                  { num: 3, label: 'Top-K Chunk Rerank' },
                  { num: 4, label: 'Grounded LLM Response' },
                ].map((step, idx) => {
                  let stepClass = 'pipe-step';
                  if (currentStepIndex > idx + 1 || currentStepIndex === 4) {
                    stepClass += ' step-complete';
                  } else if (currentStepIndex === idx + 1) {
                    stepClass += ' step-active';
                  }
                  return (
                    <div key={step.num} className={stepClass}>
                      <div className="step-num">{step.num}</div>
                      <div className="step-label">{step.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RAG Pipeline Output Viewer */}
            <div className="rag-output-box">
              <div className="retrieved-chunks-container">
                <h4>
                  <i className="fa-solid fa-quote-left"></i> Retrieved Context Chunks (Top Similarity)
                </h4>
                <div className="chunk-card">
                  <div className="chunk-header">
                    <span className="chunk-source">
                      <i className="fa-solid fa-book"></i> {ragKnowledgeBase[ragActiveKey]?.source}
                    </span>
                    <span className="chunk-score">
                      Cosine Similarity: {ragKnowledgeBase[ragActiveKey]?.score}
                    </span>
                  </div>
                  <p className="chunk-text">{ragKnowledgeBase[ragActiveKey]?.chunk}</p>
                </div>
              </div>

              <div className="ai-response-container">
                <h4>
                  <i className="fa-solid fa-graduation-cap"></i> AI Teaching Assistant Response
                </h4>
                <div
                  className="ai-chat-bubble"
                  dangerouslySetInnerHTML={{ __html: ragKnowledgeBase[ragActiveKey]?.responseHtml || '' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: DSA Algorithmic Playground */}
      {activeTab === 'dsa' && (
        <div className="lab-content active glass-card" id="dsa-tab">
          <div className="lab-header">
            <div>
              <h3>
                <i className="fa-solid fa-code"></i> DSA Problem Solver &amp; Complexity Visualizer
              </h3>
              <p>Explore algorithmic patterns Rishav regularly practices to write optimized code.</p>
            </div>
            <span className="model-badge">
              <i className="fa-solid fa-stopwatch"></i> O(N) Efficiency Focus
            </span>
          </div>

          <div className="dsa-grid">
            <div className="dsa-selector">
              <label>
                <i className="fa-solid fa-list-check"></i> Choose Algorithmic Pattern:
              </label>
              <div className="pattern-list">
                {[
                  {
                    id: 'two-sum' as const,
                    title: 'Two Sum (Hash Map Strategy)',
                    meta: 'Time: O(N) | Space: O(N)',
                  },
                  {
                    id: 'binary-search' as const,
                    title: 'Binary Search (Divide & Conquer)',
                    meta: 'Time: O(log N) | Space: O(1)',
                  },
                  {
                    id: 'sliding-window' as const,
                    title: 'Sliding Window Maximum',
                    meta: 'Time: O(N) | Space: O(K)',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`pattern-card ${selectedPattern === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedPattern(item.id)}
                  >
                    <div className="pattern-title">{item.title}</div>
                    <div className="pattern-meta">{item.meta}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="dsa-code-viewer">
              <div className="code-box-header">
                <span>
                  <i className="fa-brands fa-python"></i> {dsaSnippets[selectedPattern].title}
                </span>
                <button className="copy-code-btn" onClick={handleCopyCode} title="Copy code">
                  <i className={`fa-regular ${copied ? 'fa-circle-check' : 'fa-copy'}`}></i>{' '}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="code-box">
                <code>{dsaSnippets[selectedPattern].code}</code>
              </pre>
              <div className="dsa-explanation">
                <strong>Why this works: </strong>
                {dsaSnippets[selectedPattern].explanation}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
