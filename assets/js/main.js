// Main JavaScript for Infinite Car Service

// DOM Elements
const quoteModal = document.getElementById('quote_modal');

// Open quote modal
function openQuoteModal() {
    if (quoteModal) {
        quoteModal.showModal();
        
        // Track modal open event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'modal_open', {
                'event_category': 'engagement',
                'event_label': 'quote_modal'
            });
        }
        
        // Facebook Pixel event
        if (typeof fbq !== 'undefined') {
            fbq('track', 'ViewContent', {
                content_name: 'Quote Modal',
                content_category: 'Lead Generation'
            });
        }
    }
}

// Request quote through CRM system
function requestQuote() {
    // Track quote request
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quote_request', {
            'event_category': 'conversion',
            'event_label': 'crm_portal'
        });
    }
    
    // Facebook Pixel conversion event
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Quote Request',
            value: 1,
            currency: 'USD'
        });
    }
    
    // The MoovsAPI will handle the quote portal
    // This could open a new window or redirect to the quote portal
    if (typeof moovsAPI !== 'undefined') {
        // MoovsAPI integration - the script will handle the quote request
        console.log('Quote request initiated through MoovsAPI');
    } else {
        // Fallback: open quote page or contact form
        window.open('/book.html', '_blank');
    }
    
    // Close the modal
    if (quoteModal) {
        quoteModal.close();
    }
}

// Main DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Reviews Carousel Functionality
    const reviews = document.querySelectorAll('.review-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const reviewsPerPage = 3;

    console.log('Carousel initialized with', reviews.length, 'reviews'); // Debug log

    function showReviews(startIndex) {
        console.log('Showing reviews starting from index:', startIndex); // Debug log
        
        // Hide all reviews
        reviews.forEach((review, index) => {
            review.classList.add('hidden');
            review.style.display = 'none';
        });

        // Show current set of reviews
        for (let i = 0; i < reviewsPerPage; i++) {
            const reviewIndex = startIndex + i;
            if (reviewIndex < reviews.length) {
                reviews[reviewIndex].classList.remove('hidden');
                reviews[reviewIndex].style.display = 'block';
            }
        }
    }

    function nextReviews() {
        currentIndex = (currentIndex + reviewsPerPage) % reviews.length;
        console.log('Next - Current index:', currentIndex); // Debug log
        showReviews(currentIndex);
    }

    function prevReviews() {
        currentIndex = currentIndex - reviewsPerPage;
        if (currentIndex < 0) {
            currentIndex = Math.floor((reviews.length - 1) / reviewsPerPage) * reviewsPerPage;
        }
        console.log('Prev - Current index:', currentIndex); // Debug log
        showReviews(currentIndex);
    }

    // Event listeners for carousel
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Next button clicked'); // Debug log
            nextReviews();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Prev button clicked'); // Debug log
            prevReviews();
        });
    }

    // Initialize - show first set of reviews
    if (reviews.length > 0) {
        showReviews(0);
        
        // Auto-advance reviews every 8 seconds
        setInterval(nextReviews, 8000);
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
    
    // Phone number click tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'event_category': 'contact',
                    'event_label': 'header_phone'
                });
            }
            
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact', {
                    content_name: 'Phone Call',
                    content_category: 'Contact'
                });
            }
        });
    });
});

// Form submission handler (for future forms)
function handleFormSubmission(formData, formType) {
    // Track form submission
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
            'event_category': 'conversion',
            'event_label': formType
        });
    }
    
    // Facebook Pixel form submission
    if (typeof fbq !== 'undefined') {
        fbq('track', 'SubmitApplication', {
            content_name: formType,
            value: 1,
            currency: 'USD'
        });
    }
    
    // You would typically send this data to your backend here
    console.log('Form submitted:', formType, formData);
}

// Scroll-to-top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'btn btn-accent btn-circle fixed bottom-8 right-8 z-50 opacity-0 transition-opacity duration-300';
    scrollBtn.style.display = 'none';
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
            setTimeout(() => scrollBtn.style.opacity = '1', 10);
        } else {
            scrollBtn.style.opacity = '0';
            setTimeout(() => scrollBtn.style.display = 'none', 300);
        }
    });
}

// Initialize scroll-to-top when DOM is ready
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Floating Get Quote Button functionality
function addFloatingQuoteButton() {
    // Check if floating button already exists to prevent duplicates
    if (document.querySelector('.floating-quote-btn')) {
        return;
    }
    
    const floatingBtn = document.createElement('a');
    floatingBtn.href = 'https://customer.moovs.app/httpswwwinfinitecarservicelicom/new/info';
    floatingBtn.target = '_blank';
    floatingBtn.innerHTML = 'Get Quote';
    floatingBtn.className = 'floating-quote-btn fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold flex items-center';
    floatingBtn.style.cssText = `
        background: linear-gradient(135deg, #2563EB, #1D4ED8) !important;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4) !important;
        transform: translateY(0px);
        transition: all 0.3s ease !important;
    `;
    
    // Hover effects
    floatingBtn.addEventListener('mouseenter', () => {
        floatingBtn.style.transform = 'translateY(-2px)';
        floatingBtn.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.6) !important';
    });
    
    floatingBtn.addEventListener('mouseleave', () => {
        floatingBtn.style.transform = 'translateY(0px)';
        floatingBtn.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.4) !important';
    });
    
    // Track clicks
    floatingBtn.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'floating_quote_click', {
                'event_category': 'conversion',
                'event_label': 'floating_button'
            });
        }
        
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Floating Quote Button',
                content_category: 'CTA'
            });
        }
    });
    
    document.body.appendChild(floatingBtn);
}

// Initialize floating quote button when DOM is ready
document.addEventListener('DOMContentLoaded', addFloatingQuoteButton);

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling for external scripts
window.addEventListener('error', function(e) {
    console.error('Script error:', e.error);
    // You could send this to your error tracking service
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
} 