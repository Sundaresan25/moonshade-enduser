/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fahkwang: ['Fahkwang', 'sans-serif'],                
        syne: ['Syne', 'sans-serif'],                        
        bodoni: ['"Bodoni Serial Medium"', 'serif'],         
        lampard: ['"Lampard Signature"', 'cursive'],         
        revivalisem: ['"Revivalisem"', 'cursive'],          
      },
    },
  },
  plugins: [],
}
