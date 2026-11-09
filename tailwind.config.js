/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ground: '#121417',
        'ground-muted': '#1a1d23',
        'ground-card': '#20242d',
        ink: '#f9fafb',
        'ink-muted': '#9ca3af',
        'ink-faint': '#6b7280',
        accent: '#ea580c',
        'accent-hover': '#f97316',
        'accent-soft': 'rgba(234, 88, 12, 0.12)',
      },
      fontFamily: {
        sans: ['"General Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

