// Main JavaScript functionality for the site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle (if you add mobile nav later)
    initMobileNav();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Add reading progress bar for blog posts
    initReadingProgress();
    
    // Initialize any other interactive elements
    initInteractiveElements();
});

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Reading progress bar for blog posts
function initReadingProgress() {
    if (!document.querySelector('.post-content')) return;
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    const progressBarFill = progressBar.querySelector('.reading-progress-bar');
    
    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const postContent = document.querySelector('.post-content');
        if (!postContent) return;
        
        const contentHeight = postContent.offsetHeight;
        const contentTop = postContent.offsetTop;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        const progress = Math.max(0, Math.min(1, 
            (scrollTop + windowHeight - contentTop) / contentHeight
        ));
        
        progressBarFill.style.width = (progress * 100) + '%';
    });
}

// Initialize other interactive elements
function initInteractiveElements() {
    // Add copy to clipboard for code blocks
    initCodeCopyButtons();
    
    // Add image zoom functionality
    initImageZoom();
    
    // Initialize any tooltips or modals
    initTooltips();
}

// Copy to clipboard for code blocks
function initCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((codeBlock, index) => {
        const pre = codeBlock.parentNode;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.setAttribute('data-code-index', index);
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', function() {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(() => {
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = 'Copy';
                }, 2000);
            });
        });
    });
}

// Image zoom functionality
function initImageZoom() {
    const images = document.querySelectorAll('.post-body img');
    
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            createImageModal(this);
        });
    });
}

function createImageModal(img) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <img src="${img.src}" alt="${img.alt}">
            <button class="image-modal-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal
    const closeBtn = modal.querySelector('.image-modal-close');
    closeBtn.addEventListener('click', closeImageModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeImageModal();
    });
    
    function closeImageModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Simple tooltip functionality
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                document.body.removeChild(this._tooltip);
                this._tooltip = null;
            }
        });
    });
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some CSS for the JavaScript-created elements
const style = document.createElement('style');
style.textContent = `
    /* Reading Progress Bar */
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    
    .reading-progress-bar {
        height: 100%;
        background: #2563eb;
        width: 0%;
        transition: width 0.3s ease;
    }
    
    /* Code copy buttons */
    .copy-code-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #e5e7eb;
        color: #374151;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .copy-code-btn:hover {
        background: white;
        color: #2563eb;
    }
    
    /* Image modal */
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    }
    
    .image-modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .image-modal img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    .image-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    .image-modal-close:hover {
        color: #ccc;
    }
    
    /* Tooltips */
    .tooltip {
        position: absolute;
        background: #111827;
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-color: #111827;
    }
`;
document.head.appendChild(style);