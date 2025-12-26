// Screen Wake Lock
// Keeps the screen awake while viewing a recipe

let wakeLock = null;

// Request a screen wake lock
async function requestWakeLock() {
	// Check if the Wake Lock API is supported
	if ('wakeLock' in navigator) {
		try {
			wakeLock = await navigator.wakeLock.request('screen');
			console.log('Screen wake lock activated');

			// Listen for wake lock release (can happen if page goes to background)
			wakeLock.addEventListener('release', () => {
				console.log('Screen wake lock released');
			});
		} catch (err) {
			console.error(`Wake lock error: ${err.name}, ${err.message}`);
		}
	}
}

// Re-acquire wake lock when page becomes visible again
document.addEventListener('visibilitychange', async () => {
	if (wakeLock !== null && document.visibilityState === 'visible') {
		await requestWakeLock();
	}
});

// Request wake lock when page loads
requestWakeLock();
