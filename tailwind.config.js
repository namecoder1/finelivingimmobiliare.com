/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "headings" : [ 'Krona One', 'sans-serif'],
      "text" : [ 'Montserrat', 'sans-serif']
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        baseTheme: {
          'base-100': '#ffffff',
          'base-content': '#111111',
          'primary': '#FF2100',
          'secondary': '#1C1565',
          'accent': '#255',
          'accent-content': '#232323'
        }
      },
    ]
  },
  plugins: [
    require('daisyui')
  ],
}

