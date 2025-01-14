/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkPrimary: "#0F172A",
                darkSecondary: "#334155",
                primary: {
                    orange:"#ff9f43",
                    default: "#fff", 
                    light: "#fff", 
                    dark: "#1b2850", 
                },              
            },
        },
    },
    important:true,
    plugins: [],
};
