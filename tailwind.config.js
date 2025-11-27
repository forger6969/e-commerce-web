/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"), // <-- DaisyUI плагин подключается здесь
    ],
    daisyui: {
        themes: ["light", "dark"], // можно свои темы
    },
}
