import path from "path"
import { fileURLToPath, URL } from "url"
import WindiCSS from "vite-plugin-windicss"
import { VitePWA } from "vite-plugin-pwa"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS(), VitePWA()],
    resolve: {
        alias: {
            "~/": `${path.resolve(
                path.dirname(fileURLToPath(import.meta.url)),
                "src"
            )}/`,
        },
    },
})
