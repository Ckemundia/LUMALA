/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                "pulse-slow": "pulse 6s infinite",
                "spin-slow": "spin 18s linear infinite",
                fadeIn: "fadeIn 1s ease forwards",
                fadeUp: "fadeUp 1s ease forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "scale(0.96)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
                fadeUp: {
                    "0%": { opacity: 0, transform: "translateY(30px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
