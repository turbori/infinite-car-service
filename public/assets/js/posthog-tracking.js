/**
 * PostHog Custom Event Tracking for Infinite Car Service
 * Tracks key user interactions and engagement metrics
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Track Get Quote button clicks
    document.querySelectorAll('a[href*="moovs.app"], .floating-quote-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var buttonText = this.textContent.trim() || 'Get Quote';
            var buttonLocation = this.classList.contains('floating-quote-btn') ? 'Floating Button' : 
                               this.closest('.navbar-end') ? 'Header' : 
                               'Page Body';
            
            if (typeof posthog !== 'undefined') {
                posthog.capture('get_quote_clicked', {
                    button_text: buttonText,
                    button_location: buttonLocation,
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track phone number clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var phoneNumber = this.getAttribute('href').replace('tel:', '');
            
            if (typeof posthog !== 'undefined') {
                posthog.capture('phone_clicked', {
                    phone_number: phoneNumber,
                    link_text: this.textContent.trim(),
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track email clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var email = this.getAttribute('href').replace('mailto:', '');
            
            if (typeof posthog !== 'undefined') {
                posthog.capture('email_clicked', {
                    email: email,
                    link_text: this.textContent.trim(),
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track navigation clicks to service pages
    document.querySelectorAll('a[href*="jfk-car-service"], a[href*="lga-car-service"], a[href*="manhattan-car-service"], a[href*="airport-car-service"], a[href*="corporate-car-service"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            var serviceName = href.split('/').pop().replace('.html', '').replace(/-/g, ' ');
            
            if (typeof posthog !== 'undefined') {
                posthog.capture('service_page_clicked', {
                    service_name: serviceName,
                    link_text: this.textContent.trim(),
                    from_page: window.location.pathname,
                    to_page: href,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track Google Reviews link clicks
    document.querySelectorAll('a[href*="google.com/maps"], a[href*="reviews"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (typeof posthog !== 'undefined') {
                posthog.capture('reviews_link_clicked', {
                    link_text: this.textContent.trim(),
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track scroll depth (25%, 50%, 75%, 100%)
    var scrollDepths = [25, 50, 75, 100];
    var trackedDepths = [];
    
    window.addEventListener('scroll', function() {
        var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        scrollDepths.forEach(function(depth) {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                
                if (typeof posthog !== 'undefined') {
                    posthog.capture('scroll_depth', {
                        depth_percent: depth,
                        page_url: window.location.pathname,
                        page_title: document.title,
                        timestamp: new Date().toISOString()
                    });
                }
            }
        });
    });
    
    // Track time on page (exit intent)
    var pageLoadTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        var timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000); // in seconds
        
        if (typeof posthog !== 'undefined') {
            posthog.capture('page_exit', {
                time_on_page_seconds: timeOnPage,
                page_url: window.location.pathname,
                page_title: document.title,
                timestamp: new Date().toISOString()
            });
        }
    });
    
    // Track form submissions (if any)
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            if (typeof posthog !== 'undefined') {
                posthog.capture('form_submitted', {
                    form_action: this.action || 'unknown',
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    // Track outbound link clicks
    document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            
            // Skip moovs.app links as they're already tracked
            if (!href.includes('moovs.app')) {
                if (typeof posthog !== 'undefined') {
                    posthog.capture('outbound_link_clicked', {
                        destination_url: href,
                        link_text: this.textContent.trim(),
                        page_url: window.location.pathname,
                        page_title: document.title,
                        timestamp: new Date().toISOString()
                    });
                }
            }
        });
    });
    
    // Track mobile menu interactions
    document.querySelectorAll('.navbar-burger, .navbar-menu, [data-collapse-toggle]').forEach(function(element) {
        element.addEventListener('click', function(e) {
            if (typeof posthog !== 'undefined') {
                posthog.capture('mobile_menu_toggled', {
                    page_url: window.location.pathname,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                });
            }
        });
    });
    
    console.log('PostHog custom event tracking initialized');
});

