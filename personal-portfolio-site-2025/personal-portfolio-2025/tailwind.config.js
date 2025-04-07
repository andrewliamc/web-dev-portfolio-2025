// tailwind.config.js
import typography from '@tailwindcss/typography';

export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Light mode colors
                primary: '#1B1B1B',      // Background or icon color in light mode
                accent: '#AF69D7',       // Accent (e.g. logo “ANDREW” or “al” border)
                connectText: '#ECECEC',   // “Connect” text in light mode
                secondary: '#697BD7',
                tertiary: '#7869D7',
            },
            fontFamily: {
                logo: ["Saira Stencil One", "sans-serif"],   // alDesigns logo font
                body: ["Inter Tight", "sans-serif"],   // Body font
            },
        },
    },
    plugins: [
        typography,
    ],
};

