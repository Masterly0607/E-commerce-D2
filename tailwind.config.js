/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F26321',
          0: 'rgba(242, 99, 33, 0)', // 0% opacity
          10: 'rgba(242, 99, 33, 0.1)', // 10% opacity
          20: 'rgba(242, 99, 33, 0.2)', // 20% opacity
          30: 'rgba(242, 99, 33, 0.3)', // 30% opacity
          40: 'rgba(242, 99, 33, 0.4)', // 40% opacity
          50: 'rgba(242, 99, 33, 0.5)', // 50% opacity
          60: 'rgba(242, 99, 33, 0.6)', // 60% opacity
          70: 'rgba(242, 99, 33, 0.7)', // 70% opacity
          80: 'rgba(242, 99, 33, 0.8)', // 80% opacity
          90: 'rgba(242, 99, 33, 0.9)', // 90% opacity
          100: 'rgba(242, 99, 33, 1)', // 100% opacity
        }, // Orange Red
        secondary: '#005F73', // Deep Teal
        accent: '#9C27B0', // Purple
        dark: '#333333', // Dark Gray
        darkPage: '#1a1a1a', // Almost Black
        positive: '#198c6a', // Dark Green
        negative: '#da3041', // Crimson Red
        info: '#ff8d68', // Coral
        warning: '#ffcf52', // Golden Yellow
      },
    },
  },
  plugins: [],
}