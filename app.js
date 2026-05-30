// Google AntiGravity - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollReveal();
  initFormHandler();
  initTiltEffect();
});

/**
 * Generates rising particles in the background
 */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 25;
  const colors = [
    'rgba(66, 133, 244, 0.55)',  // Blue
    'rgba(234, 67, 53, 0.55)',  // Red
    'rgba(251, 188, 5, 0.7)',    // Yellow
    'rgba(52, 168, 83, 0.55)'    // Green
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomize dimensions (4px to 14px)
    const size = Math.random() * 10 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Randomize starting horizontal position
    particle.style.left = `${Math.random() * 100}%`;
    
    // Randomize speed and delays
    const delay = Math.random() * 12;
    const duration = Math.random() * 8 + 8; // 8s to 16s
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    // Randomize colors
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
  }
}

/**
 * Initializes IntersectionObserver for scroll-reveal animations
 */
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // Reveal only once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  revealElements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Implements form validation, animations, and webhook posting
 */
function initFormHandler() {
  const form = document.getElementById('signup-form');
  const successCard = document.getElementById('success-state');
  const formContent = document.getElementById('form-inputs-container');
  const emailInput = document.getElementById('email');
  const deptInput = document.getElementById('department');
  const successEmailText = document.getElementById('success-email-placeholder');

  if (!form || !successCard) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const deptValue = deptInput.value.trim();

    let isValid = true;

    // Validate Department
    if (!deptValue) {
      isValid = false;
      highlightError(deptInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
      isValid = false;
      highlightError(emailInput);
    }

    if (!isValid) return;

    // Show submitting state on button
    const submitBtn = form.querySelector('.btn-submit');
    const origBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting... <svg style="animation: spin-clockwise 1s linear infinite; width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 2;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>';

    // Prepare JSON Payload
    const payload = {
      department: deptValue,
      email: emailValue,
      timestamp: new Date().toISOString(),
      source: 'antigravity-landing'
    };

    // Webhook Target Endpoint (Placeholders)
    const WEBHOOK_URL = 'https://webhook.site/placeholder-antigravity'; // Replace with YOUR_WEBHOOK_OR_API_ENDPOINT before deployment

    // Fire and forget / Silent recovery
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        mode: 'no-cors' // Allow post to non-CORS configurations safely
      });
    } catch (err) {
      console.warn('Silent Submission Warning: Post failed to webhook endpoint.', err);
      // Fails silently, still displays the successful feedback to the user
    }

    // Transition UI to Success State
    formContent.style.transition = 'opacity 0.4s ease';
    formContent.style.opacity = '0';
    
    setTimeout(() => {
      formContent.style.display = 'none';
      
      // Update success message email
      if (successEmailText) {
        successEmailText.textContent = emailValue;
      }
      
      successCard.style.display = 'block';
    }, 400);
  });

  /**
   * Applies error highlights with timeouts
   */
  function highlightError(inputElement) {
    inputElement.classList.add('input-error');
    
    // Remove after 1.5 seconds
    setTimeout(() => {
      inputElement.classList.remove('input-error');
    }, 1500);
  }
}

/**
 * Adds an interactive subtle parallax tilt to the device mockup on mouse movement
 */
function initTiltEffect() {
  const container = document.querySelector('.hero');
  const device = document.querySelector('.device-outline');
  
  if (!container || !device) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - (rect.width / 2);
    const y = e.clientY - rect.top - (rect.height / 2);

    // Calculate rotation angle (max 10 degrees)
    const rotateX = -(y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;

    device.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    device.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
}
