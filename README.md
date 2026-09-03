# 🌍 Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time across multiple time zones in real-time.

## Features

✨ **Real-time Updates** - Clock updates every second automatically
🌐 **Multiple Timezones** - Display times for different cities and regions
➕ **Add Custom Timezones** - Add any timezone in the world
🏷️ **Quick Add Buttons** - Pre-configured common timezones for quick access
🗑️ **Remove Individual Clocks** - Delete any timezone with one click
♻️ **Reset Function** - Reset to default timezones
📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
🎨 **Beautiful UI** - Modern gradient design with smooth animations
⏰ **UTC Offset Display** - See the UTC offset for each timezone
📅 **Full Date Information** - Day, date, and time all displayed

## Supported Timezones

The app supports all IANA timezone identifiers. Here are some popular ones:

**Americas:**
- America/New_York (EST/EDT)
- America/Chicago (CST/CDT)
- America/Denver (MST/MDT)
- America/Los_Angeles (PST/PDT)
- America/Toronto (EST/EDT)
- America/Mexico_City (CST/CDT)
- America/Sao_Paulo (BRT)
- America/Buenos_Aires (ART)

**Europe:**
- Europe/London (GMT/BST)
- Europe/Paris (CET/CEST)
- Europe/Berlin (CET/CEST)
- Europe/Amsterdam (CET/CEST)
- Europe/Madrid (CET/CEST)
- Europe/Rome (CET/CEST)
- Europe/Moscow (MSK)

**Asia:**
- Asia/Tokyo (JST)
- Asia/Shanghai (CST)
- Asia/Hong_Kong (HKT)
- Asia/Singapore (SGT)
- Asia/Dubai (GST)
- Asia/Kolkata (IST)
- Asia/Seoul (KST)

**Australia & Pacific:**
- Australia/Sydney (AEDT/AEST)
- Australia/Melbourne (AEDT/AEST)
- Pacific/Auckland (NZDT/NZST)

## How to Use

1. **View Default Clocks** - The app starts with New York, London, and Tokyo
2. **Add a New Timezone**:
   - Type the timezone in the input field (e.g., `Asia/Dubai`)
   - Press Enter or click "Add Timezone"
   - Or click any quick-add button below
3. **Remove a Clock** - Click the × button on any clock card
4. **Reset** - Click "Reset" to return to default timezones

## Installation

### Local Setup
```bash
git clone https://github.com/Chidex2026/digital-clock-timezones.git
cd digital-clock-timezones
# Open index.html in your browser
```

### Using Live Server (VS Code)
1. Install Live Server extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## File Structure

```
digital-clock-timezones/
├── index.html       # HTML structure
├── styles.css       # Styling and animations
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## Technical Details

- **Vanilla JavaScript** - No dependencies
- **Intl API** - Browser's native timezone handling
- **Responsive Grid** - Auto-adjusts layout
- **Real-time Updates** - Updates every second

## Browser Compatibility

- Chrome (v24+)
- Firefox (v29+)
- Safari (v10+)
- Edge (all versions)
- Mobile browsers

## License

MIT License - Free to use and modify

---

Made with ❤️ by Chidex2026
