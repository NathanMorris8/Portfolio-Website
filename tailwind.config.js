/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neon-blue': '#0099ff',
        'neon-orange': '#ff6600',
        'neon-purple': '#8b00ff',
        'neon-green': '#39ff14',
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050508',
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'Segoe UI', 'Roboto', 'sans-serif'],
        'techno': ['Space Grotesk', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['Consolas', 'Monaco', 'Courier New', 'monospace'],
        'electric': ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Space Grotesk', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'glitch': 'glitch 0.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseNeon: {
          '0%, 100%': { 
            textShadow: '0 0 3px currentColor, 0 0 6px currentColor',
          },
          '50%': { 
            textShadow: '0 0 2px currentColor, 0 0 4px currentColor, 0 0 8px currentColor',
          },
        },
        glitch: {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
          '15%, 49%': { transform: 'translate(-2px, -1px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
