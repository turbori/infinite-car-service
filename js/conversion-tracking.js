// Google Ads Conversion Tracking for Infinite Car Service
// This script handles all conversion tracking across the website

// Initialize Google Analytics if not already loaded
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Main conversion tracking function
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-16458132086/NeiFCN754IMbEPpU7Kc9',
        'event_callback': callback,
        'value': 1.0,
        'currency': 'USD'
    });
    return false;
}

// Enhanced conversion tracking with location details
function track_quote_conversion(button_location) {
    // Track the conversion with detailed location info
    gtag('event', 'conversion', {
        'send_to': 'AW-16458132086/NeiFCN754IMbEPpU7Kc9',
        'value': 1.0,
        'currency': 'USD',
        'custom_parameters': {
            'button_location': button_location,
            'page': window.location.pathname,
            'page_title': document.title
        }
    });
    
    // Also track as a custom event for additional analytics
    gtag('event', 'quote_request', {
        'event_category': 'conversion',
        'event_label': button_location,
        'value': 1,
        'custom_parameters': {
            'source_page': window.location.pathname
        }
    });

    // Console log for debugging (remove in production)
    console.log('Conversion tracked:', {
        button_location: button_location,
        page: window.location.pathname,
        timestamp: new Date().toISOString()
    });
}

// Function to track phone number clicks
function track_phone_conversion(phone_number) {
    gtag('event', 'conversion', {
        'send_to': 'AW-16458132086/phone_click_conversion_id', // You'll need to set this up in Google Ads
        'value': 1.0,
        'currency': 'USD',
        'custom_parameters': {
            'phone_number': phone_number,
            'page': window.location.pathname
        }
    });
    
    gtag('event', 'phone_click', {
        'event_category': 'conversion',
        'event_label': phone_number,
        'value': 1
    });
}

// Function to track email clicks
function track_email_conversion() {
    gtag('event', 'email_click', {
        'event_category': 'conversion',
        'event_label': 'info@infinitecarserviceli.com',
        'value': 1,
        'custom_parameters': {
            'page': window.location.pathname
        }
    });
}

// Initialize conversion tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href
    });

    // Auto-track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            track_phone_conversion(phoneNumber);
        });
    });

    // Auto-track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            track_email_conversion();
        });
    });
});
