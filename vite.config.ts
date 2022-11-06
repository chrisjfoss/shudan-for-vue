import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

import { resolve } from 'path';

export default defineConfig({
    plugins: [vue(), dts()],
    resolve: {
        alias: {
            "@": `${resolve(__dirname, 'src')}`
        }
    },
    build: {
        lib: {
            entry: 'src/main.ts',
            name: "VueShudan",
            formats: ['es', 'cjs'],
            fileName: (format) => {
                if(format === 'es') {
                    return `main.mjs`
                }
                return `main.js`;
            }
        },
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        }
    },
})