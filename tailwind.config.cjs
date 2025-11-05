/**
 * Minimal Tailwind configuration to ensure production builds include
 * arbitrary value classes used across the codebase (e.g. text-[25px]).
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {},
  },
  // Safelist common arbitrary-patterns used in the project so the
  // scanner can't accidentally purge them when classes are generated
  // or contain special characters.
  safelist: [
    { pattern: /^text-\[.*\]$/ },
    { pattern: /^tracking-\[.*\]$/ },
    { pattern: /^w-\[.*\]$/ },
    { pattern: /^left-\[.*\]$/ },
    { pattern: /^top-\[.*\]$/ },
    { pattern: /^animate-\[.*\]$/ },
  ],
  plugins: [],
}
