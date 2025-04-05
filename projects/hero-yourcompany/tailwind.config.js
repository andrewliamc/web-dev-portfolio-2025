import typography from '@tailwindcss/typography';

export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [
        typography,
    ],
    // ...
};