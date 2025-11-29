// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { 
        primary: '#2563eb', 
        secondary: '#10b981',
        'gray-900': '#111827',
        'gray-600': '#4b5563',
        'gray-200': '#e5e7eb',
        'blue-700': '#1d4ed8',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      }
    }
  },
  plugins: [],
}