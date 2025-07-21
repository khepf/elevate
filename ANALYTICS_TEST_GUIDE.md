# Google Analytics Implementation Test Guide

## ✅ Implementation Complete!

Your QCTS website now has comprehensive Google Analytics tracking with tag `G-SZC1NHB38C`.

## What's Been Implemented

### 📊 **Automatic Tracking**
- **Page Views**: Automatically tracked when users visit the site
- **Scroll Depth**: Tracks when users scroll 25%, 50%, 75%, and 100% of the page
- **Session Data**: User location, device, browser, etc.

### 🖱️ **Click Tracking**
- **Navigation Menu**: All header navigation clicks (Home, Services, Portfolio, About, Contact)
- **Hero Buttons**: "Get Started" and "View Portfolio" buttons
- **Service Cards**: Clicks on each of the 3 service offerings
- **Portfolio Items**: Clicks on portfolio project cards

### 📝 **Form Tracking**
- **Contact Form Submissions**: Tracks both successful submissions and errors
- **Form Engagement**: Monitors form interaction patterns

## Testing Instructions

### 1. **Open Your Website**
```
http://localhost:5173/
```

### 2. **Test in Browser Developer Tools**
1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Filter by "collect" or search "google-analytics"
4. Interact with the site (click buttons, scroll, fill forms)
5. You should see GA requests being sent

### 3. **Real-Time Analytics Testing**
1. Go to [Google Analytics](https://analytics.google.com)
2. Navigate to **Reports** → **Realtime**
3. Open your website in another tab: `http://localhost:5173/`
4. You should see your visit appear in real-time

### 4. **Test These Interactions**
- ✅ **Navigation**: Click all menu items (Home, Services, Portfolio, About, Contact)
- ✅ **Hero Buttons**: Click "Get Started" and "View Portfolio" 
- ✅ **Service Interest**: Click on each of the 3 service cards
- ✅ **Portfolio**: Click on portfolio project cards
- ✅ **Scroll Tracking**: Scroll through the entire page slowly
- ✅ **Contact Form**: Fill out and submit the contact form
- ✅ **Mobile Menu**: Test navigation on mobile view

## Events Being Tracked

### **Button Clicks**
- `Get Started - Hero`
- `View Portfolio - Hero`

### **Navigation**
- `Home`, `Services`, `Portfolio`, `About`, `Contact`

### **Engagement**
- `service_interest` - Website Building, Custom Software, Google Analytics
- `portfolio_view` - Individual project views
- `scroll` - 25%, 50%, 75%, 100% page depth

### **Form Interactions**
- `Contact Form - success`
- `Contact Form - error`

## Expected Results in Google Analytics

### **Real-Time View**
You should see:
- Active users on your site
- Page views
- Events firing as you interact
- Geographic location (your current location)

### **Events Section**
Look for these custom events:
- `click` events with button names
- `scroll` events with percentages  
- `form_submit` events
- `service_interest` events
- `portfolio_view` events

## Troubleshooting

### **If You Don't See Data:**
1. **Check Console**: Look for any JavaScript errors
2. **Verify Environment**: Make sure `VITE_GA_TRACKING_ID=G-SZC1NHB38C` is in your `.env`
3. **Clear Cache**: Hard refresh your browser (Ctrl+Shift+R)
4. **Check Network**: Ensure GA requests are being sent in DevTools

### **Production Deployment**
When you deploy to production:
1. Ensure the environment variable `VITE_GA_TRACKING_ID=G-SZC1NHB38C` is set
2. The GA script in `index.html` will automatically use the correct tracking ID
3. Test again in the live environment

## Analytics Dashboard

Within 24-48 hours, you'll see detailed reports in Google Analytics including:
- **User Acquisition**: How users find your site
- **Engagement**: Which services are most interesting
- **Conversions**: Contact form submissions and button clicks
- **User Behavior**: How users navigate through your site

Your website now provides comprehensive insights into user behavior, helping you understand which services generate the most interest and optimize your business strategy accordingly!
