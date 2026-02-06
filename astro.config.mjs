import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite'; // Importe le nouveau plugin

export default defineConfig({
    integrations: [vue()], // On garde seulement Vue ici
    vite: {
        plugins: [tailwindcss()], // On met Tailwind ici
    },
});