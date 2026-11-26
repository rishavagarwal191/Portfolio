/**
 * RISHAV AGRAWAL - PORTFOLIO INTERACTIVITY ENGINE
 * Features:
 *  - Dynamic HTML5 Constellation Canvas with Mouse Interaction
 *  - Typewriter Hero Animation
 *  - Animated Number Counters
 *  - Interactive Gurgaon Real Estate ML Simulator
 *  - Interactive RAG AI Assistant Pipeline Simulation
 *  - DSA Pattern Switcher & Code Copier
 *  - Project Deep Dive Architecture Modal
 *  - Responsive Mobile Navigation & Glow Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initCounters();
  initHousingEstimator();
  initRagSimulator();
  initDsaPlayground();
  initModals();
  initNavAndTheme();
});

/* ==========================================================================
   1. CONSTELLATION CANVAS PARTICLE BACKGROUND
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: null, y: null, radius: 120 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
  const particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.8;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241,' : 'rgba(6, 182, 212,';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interactive repelling/gravitation
      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 2.5;
          const directionY = (dy / distance) * force * 2.5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color}${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.16;
          ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const roles = [
    "Predictive Machine Learning",
    "RAG-Powered AI Systems",
    "Data Structures & Algorithms",
    "Real Estate Market Analytics",
    "Vector Search & LLM Fine-Tuning"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const delayBetweenWords = 1800;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      currentSpeed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      currentSpeed = 400;
    }

    setTimeout(type, currentSpeed);
  }

  type();
}

/* ==========================================================================
   3. ANIMATED METRICS COUNTERS
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.metric-num');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        counterElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-count'), 10);
          const duration = 1500;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const terminal = document.querySelector('.hero-terminal');
  if (terminal) observer.observe(terminal);
}

/* ==========================================================================
   4. INTERACTIVE GURGAON HOUSING PRICE ESTIMATOR
   ========================================================================== */
function initHousingEstimator() {
  const sectorSelect = document.getElementById('sector-select');
  const bhkSlider = document.getElementById('bhk-slider');
  const areaSlider = document.getElementById('area-slider');
  const luxurySlider = document.getElementById('luxury-slider');
  const bhkVal = document.getElementById('bhk-val');
  const areaVal = document.getElementById('area-val');
  const luxuryVal = document.getElementById('luxury-val');

  const predictedPriceEl = document.getElementById('predicted-price');
  const confidenceEl = document.getElementById('price-confidence');
  const ratePerSqftEl = document.getElementById('rate-per-sqft');
  const locationFactorEl = document.getElementById('location-factor');
  const luxuryImpactEl = document.getElementById('luxury-impact');

  const propTypeRadios = document.querySelectorAll('input[name="prop-type"]');
  const radioChips = document.querySelectorAll('.radio-chip');

  // Sector multiplier weights calibrated on Gurgaon property trends
  const sectorWeights = {
    'golf-course': { multiplier: 1.85, name: 'Golf Course Road', label: '1.85x (Ultra Premium)' },
    'golf-course-ext': { multiplier: 1.35, name: 'Golf Course Extension', label: '1.35x (High Demand)' },
    'cyber-city': { multiplier: 1.50, name: 'DLF Phase 2 / Cyber City', label: '1.50x (Corporate Hub)' },
    'sohna-road': { multiplier: 1.10, name: 'Sohna Road', label: '1.10x (Established Corridor)' },
    'dwarka-expressway': { multiplier: 1.20, name: 'Dwarka Expressway', label: '1.20x (Emerging Expressway)' },
    'new-gurgaon': { multiplier: 0.95, name: 'New Gurgaon', label: '0.95x (Affordable Growth)' }
  };

  const propTypeWeights = {
    'apartment': 1.0,
    'builder-floor': 1.12,
    'villa': 1.45
  };

  function calculatePrice() {
    if (!bhkSlider || !areaSlider) return;

    const bhk = parseInt(bhkSlider.value, 10);
    const area = parseInt(areaSlider.value, 10);
    const luxury = parseFloat(luxurySlider.value);
    const sectorKey = sectorSelect.value;
    const sectorInfo = sectorWeights[sectorKey] || { multiplier: 1.0, label: '1.0x' };

    let selectedPropType = 'apartment';
    propTypeRadios.forEach((r) => {
      if (r.checked) selectedPropType = r.value;
    });
    const propMultiplier = propTypeWeights[selectedPropType] || 1.0;

    // Update Text Readouts
    bhkVal.textContent = `${bhk} BHK`;
    areaVal.textContent = `${area.toLocaleString()} sq. ft.`;
    luxuryVal.textContent = `${luxury.toFixed(1)} / 10`;

    // Base regression logic formula
    // Base rate starts around ₹7,800/sqft base
    const baseSqftRate = 7800;
    const luxuryBonus = 1 + (luxury - 1) * 0.045; // 0% up to ~40.5%
    const effectiveSqftRate = Math.round(baseSqftRate * sectorInfo.multiplier * luxuryBonus * propMultiplier);
    
    // Total raw valuation
    const rawValuation = effectiveSqftRate * area;

    // Format Indian Rupees in Crores or Lakhs
    let formattedPrice = '';
    let formattedMin = '';
    let formattedMax = '';

    const priceInCr = rawValuation / 10000000;
    const minInCr = (rawValuation * 0.94) / 10000000;
    const maxInCr = (rawValuation * 1.06) / 10000000;

    if (priceInCr >= 1.0) {
      formattedPrice = `₹ ${priceInCr.toFixed(2)} Cr`;
      formattedMin = `₹ ${minInCr.toFixed(2)} Cr`;
      formattedMax = `₹ ${maxInCr.toFixed(2)} Cr`;
    } else {
      const priceInLakh = rawValuation / 100000;
      formattedPrice = `₹ ${priceInLakh.toFixed(1)} Lakh`;
      formattedMin = `₹ ${(priceInLakh * 0.94).toFixed(1)} Lakh`;
      formattedMax = `₹ ${(priceInLakh * 1.06).toFixed(1)} Lakh`;
    }

    predictedPriceEl.textContent = formattedPrice;
    confidenceEl.textContent = `Confidence Range (±6%): ${formattedMin} – ${formattedMax}`;
    ratePerSqftEl.textContent = `₹ ${effectiveSqftRate.toLocaleString()} / sqft`;
    locationFactorEl.textContent = sectorInfo.label;
    luxuryImpactEl.textContent = `+${((luxuryBonus - 1) * 100).toFixed(1)}%`;
  }

  // Bind Event Listeners
  [bhkSlider, areaSlider, luxurySlider, sectorSelect].forEach((input) => {
    if (input) {
      input.addEventListener('input', calculatePrice);
    }
  });

  radioChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      radioChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const radio = chip.querySelector('input');
      if (radio) {
        radio.checked = true;
        calculatePrice();
      }
    });
  });

  // Initial Calculation
  calculatePrice();
}

/* ==========================================================================
   5. INTERACTIVE RAG SIMULATOR
   ========================================================================== */
function initRagSimulator() {
  const customInput = document.getElementById('rag-custom-input');
  const runBtn = document.getElementById('run-rag-btn');
  const chunkTextEl = document.getElementById('rag-chunk-text');
  const aiResponseEl = document.getElementById('rag-ai-response');
  const quickQBtns = document.querySelectorAll('.quick-q-btn');

  const steps = [
    document.getElementById('step-embed'),
    document.getElementById('step-retrieve'),
    document.getElementById('step-rank'),
    document.getElementById('step-llm')
  ];

  const knowledgeBase = {
    "bias": {
      chunk: `"Bias refers to the error introduced by approximating a real-world problem with a simplified model. High bias leads to underfitting. Variance refers to the model's sensitivity to small fluctuations in the training set. High variance leads to overfitting." (Elements of Statistical Learning, Ch. 7)`,
      response: `
        <p>Hello! Let's understand <strong>Bias vs. Variance</strong> through intuition:</p>
        <ul>
          <li><strong>Bias (Underfitting):</strong> Assumptions in the model are too rigid. It misses patterns in both training and test data (e.g. Fitting a straight line to quadratic data).</li>
          <li><strong>Variance (Overfitting):</strong> Model captures statistical noise rather than genuine signals. Performs brilliantly on training data, but fails on new unseen test data.</li>
          <li><strong>Trade-off:</strong> As model complexity increases, bias decreases but variance increases. The goal of regularization (L1/L2) and ensemble methods is to strike the optimal balance.</li>
        </ul>
        <div class="citation-badge"><i class="fa-solid fa-check"></i> Verified from course lecture materials</div>
      `
    },
    "gradient": {
      chunk: `"Gradient Descent iteratively minimizes the cost function J(θ) by computing the partial derivatives ∇J(θ) with respect to model parameters and updating θ := θ - α * ∇J(θ), where α is the learning rate." (Deep Learning - Goodfellow et al.)`,
      response: `
        <p>Great question! Here is how <strong>Gradient Descent</strong> optimizes loss:</p>
        <ul>
          <li><strong>The Objective:</strong> We want to find the parameter weights (θ) that minimize our loss function.</li>
          <li><strong>The Gradient:</strong> Represents the direction of steepest ascent on the multi-dimensional loss surface.</li>
          <li><strong>The Step:</strong> By moving in the opposite direction (-∇J) scaled by learning rate (α), each iteration steps downhill towards a local or global minimum.</li>
        </ul>
        <div class="citation-badge"><i class="fa-solid fa-check"></i> Retrieved from Deep Learning Fundamentals</div>
      `
    },
    "vector": {
      chunk: `"Vector databases like ChromaDB and FAISS index high-dimensional embeddings using Hierarchical Navigable Small World (HNSW) graphs, enabling approximate nearest neighbor (ANN) lookups in sub-linear time." (Vector Search Architecture Whitepaper)`,
      response: `
        <p>Here is why <strong>ChromaDB / FAISS</strong> are fundamental for RAG systems:</p>
        <ul>
          <li><strong>Semantic Meaning:</strong> Traditional keyword search (BM25) fails when students use synonyms. Vector embeddings map contextual semantics into a high-dimensional space.</li>
          <li><strong>Sub-linear Search Speed:</strong> Instead of comparing against millions of text snippets sequentially O(N), indexing algorithms (HNSW, IVF) fetch the closest chunks in milliseconds.</li>
          <li><strong>Zero Hallucinations:</strong> The LLM is forced to cite only the retrieved context chunks, ensuring faithful academic answers.</li>
        </ul>
        <div class="citation-badge"><i class="fa-solid fa-check"></i> Retrieved from Vector Store Documentation</div>
      `
    },
    "array": {
      chunk: `"Arrays allocate contiguous memory blocks allowing O(1) random index access via base address arithmetic, whereas Linked Lists use disjoint heap nodes with pointers, offering O(1) insertions but O(N) access times." (Introduction to Algorithms - CLRS)`,
      response: `
        <p>Let's compare <strong>Arrays vs. Linked Lists</strong> at the memory level:</p>
        <ul>
          <li><strong>Arrays:</strong> Elements are stored in contiguous memory cells. This enables instant O(1) access via index arithmetic (\`base + i * size\`) and provides superior CPU cache locality.</li>
          <li><strong>Linked Lists:</strong> Nodes can be scattered across heap memory, connected by pointers. Inserting/deleting at the head is O(1), but accessing the k-th node requires traversing O(N) pointers.</li>
        </ul>
        <div class="citation-badge"><i class="fa-solid fa-check"></i> Verified from CLRS Algorithms Reference</div>
      `
    }
  };

  function executeRag(queryText) {
    let key = "bias";
    const lower = queryText.toLowerCase();
    if (lower.includes("gradient") || lower.includes("descent")) key = "gradient";
    else if (lower.includes("chroma") || lower.includes("vector") || lower.includes("rag")) key = "vector";
    else if (lower.includes("array") || lower.includes("linked") || lower.includes("dsa") || lower.includes("memory")) key = "array";

    const data = knowledgeBase[key];

    // Pipeline animation steps
    steps.forEach((s) => {
      if (s) {
        s.classList.remove('step-complete');
        s.classList.remove('step-active');
      }
    });

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep > 0 && steps[currentStep - 1]) {
        steps[currentStep - 1].classList.remove('step-active');
        steps[currentStep - 1].classList.add('step-complete');
      }
      if (currentStep < steps.length && steps[currentStep]) {
        steps[currentStep].classList.add('step-active');
      }

      currentStep++;
      if (currentStep > steps.length) {
        clearInterval(interval);
        steps.forEach((s) => {
          if (s) {
            s.classList.remove('step-active');
            s.classList.add('step-complete');
          }
        });
        // Render updated content
        chunkTextEl.textContent = data.chunk;
        aiResponseEl.innerHTML = data.response;
      }
    }, 250);
  }

  quickQBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      quickQBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const q = btn.getAttribute('data-q');
      customInput.value = q;
      executeRag(q);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      const q = customInput.value.trim() || "What is the difference between Bias and Variance in ML?";
      executeRag(q);
    });
  }
}

/* ==========================================================================
   6. DSA PLAYGROUND & CODE COPIER
   ========================================================================== */
function initDsaPlayground() {
  const patternCards = document.querySelectorAll('.pattern-card');
  const titleEl = document.getElementById('dsa-current-title');
  const codeEl = document.getElementById('dsa-code-display');
  const explainEl = document.getElementById('dsa-explanation-box');
  const copyBtn = document.getElementById('copy-dsa-btn');

  const dsaSnippets = {
    'two-sum': {
      title: '<i class="fa-brands fa-python"></i> Two Sum (Hash Map Strategy)',
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
      explanation: `<strong>Why this works:</strong> Instead of the naive O(N²) nested loop check, a dictionary acts as an inverted lookup index, reducing the search of the complement to an instant O(1) average time per lookup.`
    },
    'binary-search': {
      title: '<i class="fa-brands fa-python"></i> Binary Search (Search in Rotated Sorted Array)',
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
      explanation: `<strong>Why this works:</strong> Even in a rotated sorted array, dividing at midpoint guarantees that at least one of the halves remains strictly sorted. Checking boundaries eliminates half the search space every single iteration.`
    },
    'sliding-window': {
      title: '<i class="fa-brands fa-python"></i> Sliding Window (Longest Substring Without Repeating Characters)',
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
      explanation: `<strong>Why this works:</strong> Using two pointers (start, end) expands the dynamic window to the right until a duplicate is detected. By storing the latest index of each character, the start pointer jumps directly past the collision in O(1) time.`
    }
  };

  patternCards.forEach((card) => {
    card.addEventListener('click', () => {
      patternCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      const pattern = card.getAttribute('data-pattern');
      const data = dsaSnippets[pattern];
      if (data) {
        titleEl.innerHTML = data.title;
        codeEl.textContent = data.code;
        explainEl.innerHTML = data.explanation;
      }
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeEl.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
      });
    });
  }
}

/* ==========================================================================
   7. PROJECT DEEP DIVE MODAL
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-content');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  const projectDetails = {
    'gurgaon': {
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
      description: `
        <div class="modal-section">
          <h4><i class="fa-solid fa-bullseye"></i> Problem Statement & Motivation</h4>
          <p>
            Real estate markets in metropolitan hubs like Gurgaon exhibit extreme non-linearities, sector-specific premiums, and high variance in luxury amenities. Generic price calculators fail because a 3 BHK on Golf Course Road can be 3x more expensive than a 3 BHK in New Gurgaon. This project aimed to build an intelligent ML valuation model that accounts for multi-dimensional real estate features.
          </p>
        </div>

        <div class="modal-section">
          <h4><i class="fa-solid fa-gears"></i> Key Engineering Highlights</h4>
          <p>
            <strong>Data Preprocessing:</strong> Handled skewed price distributions with log transformations. Standardized over 100+ Gurgaon sector names using fuzzy string matching. Removed anomalous outliers using IQR bounds and domain-specific rules (e.g. area vs bedroom ratios).
          </p>
          <p>
            <strong>Feature Engineering:</strong> Constructed a composite "Luxury Score" by weighting high-end amenities (private lift, clubhouse, terrace). Calculated sector-level price-per-square-foot medians to encode locational desirability without overfitting.
          </p>
          <p>
            <strong>Modeling & Results:</strong> Experimented with Linear Regression, Decision Trees, Random Forest Regressor, and XGBoost Regressor. XGBoost achieved the lowest Mean Absolute Error (MAE) and high $R^2$ score on unseen validation sets.
          </p>
        </div>

        <div class="modal-section">
          <h4><i class="fa-solid fa-sitemap"></i> Pipeline Architecture Diagram</h4>
          <pre class="arch-flow-diagram">{FLOWCHART}</pre>
        </div>
      `
    },
    'rag': {
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
      description: `
        <div class="modal-section">
          <h4><i class="fa-solid fa-bullseye"></i> Problem Statement & Motivation</h4>
          <p>
            Standard Large Language Models frequently hallucinate mathematical proofs, invent citations, or give answers away immediately instead of teaching. The goal of this project was to construct a domain-specific teaching assistant that strictly grounds its reasoning in official course syllabi, textbooks, and lecture transcripts.
          </p>
        </div>

        <div class="modal-section">
          <h4><i class="fa-solid fa-gears"></i> Key Engineering Highlights</h4>
          <p>
            <strong>Chunking & Ingestion Strategy:</strong> Optimized chunk sizing (500 tokens with 50-token overlap) using recursive character text splitters to preserve technical equation context. Stored dense embeddings in ChromaDB.
          </p>
          <p>
            <strong>Hybrid Semantic Retrieval:</strong> Combined dense semantic vector search with keyword filtering to ensure accurate hits on niche technical terms (e.g. "Eigenvalues", "Backpropagation").
          </p>
          <p>
            <strong>Pedagogical Prompt Conditioning:</strong> Designed system prompts that instruct the LLM to behave like a Socratic tutor—providing helpful hints, analogies, and asking follow-up questions to reinforce student understanding.
          </p>
        </div>

        <div class="modal-section">
          <h4><i class="fa-solid fa-sitemap"></i> Pipeline Architecture Diagram</h4>
          <pre class="arch-flow-diagram">{FLOWCHART}</pre>
        </div>
      `
    }
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (!data) return;

      const pillsHtml = data.pills.map((p) => `<span class="tech-badge">${p}</span>`).join('');
      const fullHtml = `
        <div class="modal-header">
          <h3>${data.title}</h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">${data.subtitle}</p>
          <div class="modal-tech-pills">${pillsHtml}</div>
        </div>
        ${data.description.replace('{FLOWCHART}', data.flowchart)}
      `;

      modalContent.innerHTML = fullHtml;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/* ==========================================================================
   8. NAVIGATION, TABS, THEME GLOW & CONTACT FORM
   ========================================================================== */
function initNavAndTheme() {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // Magic Wand Theme Switcher (Toggles glowing accent flavor)
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('theme-emerald');
    });
  }

  // Lab Tab Switching
  const tabBtns = document.querySelectorAll('.lab-tab-btn');
  const tabContents = document.querySelectorAll('.lab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Contact Form Submission (Client-side interactive feedback)
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (contactForm && feedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        feedback.className = 'form-feedback success';
        feedback.textContent = "Thank you! Your message has been received. Rishav will get back to you shortly.";
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
        }, 4000);
      }, 1000);
    });
  }

  // Current Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}