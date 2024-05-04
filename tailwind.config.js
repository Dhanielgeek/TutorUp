/** @type {import('tailwindcss').Config} */


export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            phone: {max: "764px"},
            tab: {max: "1024px"},
            desktop: {max: "1280px"},
            smallPhone: {max: "360px"},
        },
    },
    plugins: [],
};