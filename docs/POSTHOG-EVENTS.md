# PostHog Custom Event Tracking Documentation

This document outlines all custom events being tracked across the Infinite Car Service website using PostHog analytics.

## 📊 Events Being Tracked

### 1. **get_quote_clicked**
Tracks when users click on any "Get Quote" button across the site.

**Properties:**
- `button_text`: Text content of the clicked button
- `button_location`: Where the button is located (Header, Floating Button, Page Body)
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure conversion intent across different pages
- Compare effectiveness of header vs floating CTA
- Identify which pages drive the most quote requests

---

### 2. **phone_clicked**
Tracks when users click on phone number links (tel: links).

**Properties:**
- `phone_number`: The phone number that was clicked
- `link_text`: Display text of the link
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure direct call intent
- Identify which pages drive phone calls
- Compare phone vs form submission preferences

---

### 3. **email_clicked**
Tracks when users click on email links (mailto: links).

**Properties:**
- `email`: The email address clicked
- `link_text`: Display text of the link
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure email inquiry intent
- Track alternative contact methods
- Identify users who prefer email communication

---

### 4. **service_page_clicked**
Tracks navigation to specific service pages (JFK, LGA, Manhattan, Airport, Corporate).

**Properties:**
- `service_name`: Name of the service page
- `link_text`: Text of the clicked link
- `from_page`: Source page path
- `to_page`: Destination page path
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Understand user journey through services
- Identify most popular service pages
- Track cross-service navigation patterns

---

### 5. **reviews_link_clicked**
Tracks when users click on Google Reviews or similar review links.

**Properties:**
- `link_text`: Text of the link clicked
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure trust-building engagement
- Track social proof effectiveness
- Identify pages where reviews matter most

---

### 6. **scroll_depth**
Tracks how far users scroll down each page (25%, 50%, 75%, 100%).

**Properties:**
- `depth_percent`: Scroll depth percentage (25, 50, 75, or 100)
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure content engagement
- Identify where users drop off
- Optimize page length and structure

---

### 7. **page_exit**
Tracks when users leave a page, including time spent.

**Properties:**
- `time_on_page_seconds`: Total seconds spent on page
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure actual engagement time
- Identify pages with short/long sessions
- Calculate average time per page type

---

### 8. **form_submitted**
Tracks any form submissions on the site.

**Properties:**
- `form_action`: The form's action URL
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Track form conversion rates
- Identify successful form submissions
- Measure form completion by page

---

### 9. **outbound_link_clicked**
Tracks clicks on external links (opens in new tab, excluding quote system).

**Properties:**
- `destination_url`: URL of the external link
- `link_text`: Text of the clicked link
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Track external referrals
- Identify partnership link performance
- Measure third-party integration engagement

---

### 10. **mobile_menu_toggled**
Tracks when users open/close the mobile navigation menu.

**Properties:**
- `page_url`: Current page path
- `page_title`: Current page title
- `timestamp`: ISO timestamp of the event

**Example Use Cases:**
- Measure mobile navigation usage
- Track mobile user behavior
- Identify mobile UX improvements

---

## 🎯 Key Metrics to Monitor

### Conversion Funnel
1. Page views (autocaptured)
2. `scroll_depth` (50%+) - Content engagement
3. `service_page_clicked` - Service interest
4. `get_quote_clicked` - Conversion intent
5. Form submission (if applicable)

### Engagement Metrics
- **Scroll Depth**: % of users reaching 75%+
- **Time on Page**: Average `time_on_page_seconds`
- **Service Interest**: `service_page_clicked` count by service
- **Direct Contact**: `phone_clicked` + `email_clicked` rates

### Mobile vs Desktop
- `mobile_menu_toggled` frequency
- Mobile vs desktop conversion rates
- Mobile scroll depth comparison

---

## 📈 Setting Up Insights in PostHog

### Conversion Rate by Page
1. Create insight → Trends
2. Event: `get_quote_clicked`
3. Break down by: `page_url`
4. Show as: Conversion rate

### Average Time on Page
1. Create insight → Trends
2. Event: `page_exit`
3. Aggregate: Average `time_on_page_seconds`
4. Break down by: `page_url`

### Service Page Performance
1. Create insight → Funnel
2. Steps:
   - Pageview
   - `scroll_depth` (50%)
   - `service_page_clicked`
   - `get_quote_clicked`

### Contact Method Preference
1. Create insight → Trends
2. Events: `get_quote_clicked`, `phone_clicked`, `email_clicked`
3. Show as: Pie chart

---

## 🔧 Implementation Details

- **Script Location**: `/assets/js/posthog-tracking.js`
- **Loaded On**: All 18 HTML pages
- **Loading Method**: Deferred (doesn't block page load)
- **Error Handling**: Checks for PostHog availability before capturing
- **Browser Compatibility**: ES5-compatible (works on older browsers)

---

## 🚀 Next Steps

1. **Visit your site** and click around to generate test events
2. **Check PostHog dashboard** for incoming events (may take 1-2 minutes)
3. **Create custom insights** based on the events above
4. **Set up alerts** for important conversion events
5. **Build funnels** to track complete user journeys

---

## 📝 Notes

- All events include `timestamp`, `page_url`, and `page_title` for context
- Events are captured client-side and sent to PostHog asynchronously
- No PII (Personally Identifiable Information) is captured in properties
- Phone numbers and emails are logged but should be aggregated, not individual

