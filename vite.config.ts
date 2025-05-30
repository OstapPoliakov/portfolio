import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
    build: {
        assetsInlineLimit: 0, // Отключаем встраивание файлов
        assetsDir: "assets",
    },
    assetsInclude: ["**/*.woff", "**/*.woff2"], // Правильное расположение
    base: "/portfolio/",
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    server: {
        headers: {
            "*.woff": "font/woff",
            "*.woff2": "font/woff2",
        },
    },
})
