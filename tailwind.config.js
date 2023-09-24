/** @type {import('tailwindcss').Config} */

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${cssVar}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: customColors('--indigo-50'),
          100: customColors('--indigo-100'),
          200: customColors('--indigo-200'),
          300: customColors('--indigo-300'),
          400: customColors('--indigo-400'),
          500: customColors('--indigo-500'),
          6000: customColors('--indigo-600'),
          700: customColors('--indigo-700'),
          800: customColors('--indigo-800'),
          900: customColors('--indigo-900'),
        },
        bg: {
          hover: 'var(--btn-bg-hover)',
        },
      },
    },
  },
  plugins: [],
}
