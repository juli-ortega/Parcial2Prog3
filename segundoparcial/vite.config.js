// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '0.0.0.0', // Permite conexiones desde cualquier origen
        port: 5173,
        strictPort: true,
        hmr: {
            clientPort: 5173 // Asegura que el puerto de HMR esté configurado correctamente
        }
    }
});
