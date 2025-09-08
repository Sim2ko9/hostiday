import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' && process.env.VERCEL ? '/' : mode === 'production' && process.env.GITHUB_PAGES ? '/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Plugin to copy CNAME and .nojekyll files to dist
    {
      name: 'copy-github-pages-files',
      writeBundle() {
        const files = ['CNAME', '.nojekyll'];
        files.forEach(file => {
          if (existsSync(file)) {
            copyFileSync(file, `dist/${file}`);
            console.log(`Copied ${file} to dist/`);
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

