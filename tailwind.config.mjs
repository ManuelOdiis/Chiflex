/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        screens: {
          'xs' : '375px',
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        gridTemplateColumns:{
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
      },
    },
    plugins: [],
  };