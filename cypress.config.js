const { defineConfig } = require('cypress');

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	retries: 0,
	video: false,
	chromeWebSecurity: false,
	watchForFileChanges: false,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://amazon.com"
	},
	env: {

	}
});
