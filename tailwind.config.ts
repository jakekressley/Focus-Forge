import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif']
      },
      colors: {
        'nightblue': '#05051c',
        'darkblue': '#11051c',
      },
      backgroundImage: theme => ({
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
     })
    }
  },
  plugins: [],
}
export default config
