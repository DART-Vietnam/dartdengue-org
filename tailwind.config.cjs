const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],

	theme: {
		extend: {
			colors: {
				'oxfordBlue': '#031D40'
			},
			backgroundImage: {
				'dart-logo': "url('/dart_oucru.png')",
				'kom-1': "url('/images/kickoffmeeting1.jpg')",
			},
			fontFamily: {
				'oucru': ["Foundry Sterling", 'arial', 'sans-serif'],
			}

		},

	},

	plugins: [
	],

};

module.exports = config;
