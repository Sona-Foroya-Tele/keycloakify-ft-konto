import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            // themeName: ["ft-konto-theme"],
            accountThemeImplementation: "none",
            startKeycloakOptions: {
                realmJsonFilePath: "./realm-export.json"
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
