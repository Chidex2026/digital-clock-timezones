// Array to store active timezones
let activeTimezones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo'
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeClocks();
    updateAllClocks();
    // Update clocks every second
    setInterval(updateAllClocks, 1000);
});

// Initialize clocks for default timezones
function initializeClocks() {
    updateClockDisplay();
}

// Update all clock displays
function updateAllClocks() {
    const container = document.getElementById('clocks-container');
    container.innerHTML = '';

    if (activeTimezones.length === 0) {
        container.innerHTML = '<div class="empty-message">No timezones added. Add one to get started!</div>';
        return;
    }

    activeTimezones.forEach((timezone, index) => {
        const clockHTML = createClockHTML(timezone, index);
        container.innerHTML += clockHTML;
    });

    // Attach remove button listeners
    document.querySelectorAll('.remove-btn').forEach((btn, index) => {
        btn.addEventListener('click', function() {
            removeTimezone(index);
        });
    });
}

// Create HTML for a single clock
function createClockHTML(timezone, index) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });

    const timeString = formatter.format(now);
    const dateString = dateFormatter.format(now);
    
    // Calculate UTC offset
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const offsetMs = tzDate - utcDate;
    const offsetHours = Math.round(offsetMs / (1000 * 60 * 60));
    const offsetSign = offsetHours >= 0 ? '+' : '';
    const offsetString = `UTC ${offsetSign}${offsetHours}`;

    // Get location name from timezone
    const locationName = timezone.split('/').pop().replace(/_/g, ' ');

    return `
        <div class="clock">
            <button class="remove-btn" title="Remove this timezone">×</button>
            <div class="clock-location">${locationName}</div>
            <div class="clock-time">${timeString}</div>
            <div class="clock-date">${dateString}</div>
            <div class="clock-offset">${offsetString}</div>
        </div>
    `;
}

// Update clock display
function updateClockDisplay() {
    updateAllClocks();
}

// Add a new timezone
function addTimezone() {
    const input = document.getElementById('timezone-input');
    const timezone = input.value.trim();

    if (!timezone) {
        alert('Please enter a timezone');
        return;
    }

    // Validate timezone
    if (!isValidTimezone(timezone)) {
        alert(`Invalid timezone: ${timezone}\nPlease check the format (e.g., America/New_York)`);
        return;
    }

    // Check if timezone already exists
    if (activeTimezones.includes(timezone)) {
        alert(`${timezone} is already added!`);
        return;
    }

    activeTimezones.push(timezone);
    input.value = '';
    updateClockDisplay();
}

// Quick add timezone from suggestions
function quickAdd(timezone) {
    if (!activeTimezones.includes(timezone)) {
        activeTimezones.push(timezone);
        updateClockDisplay();
    } else {
        alert(`${timezone} is already added!`);
    }
}

// Remove a timezone
function removeTimezone(index) {
    activeTimezones.splice(index, 1);
    updateClockDisplay();
}

// Reset to default timezones
function resetClocks() {
    activeTimezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo'
    ];
    document.getElementById('timezone-input').value = '';
    updateClockDisplay();
}

// Validate timezone format
function isValidTimezone(timezone) {
    try {
        Intl.DateTimeFormat(undefined, { timeZone: timezone });
        return true;
    } catch (ex) {
        return false;
    }
}

// Allow Enter key to add timezone
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('timezone-input');
    if (input) {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTimezone();
            }
        });
    }
});
