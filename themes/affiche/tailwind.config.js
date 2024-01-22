/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-mode="daaaark"]'], // change class name disable until I build toggle
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}

