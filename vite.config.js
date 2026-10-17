import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/restcountries': {
          target: 'https://api.restcountries.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/restcountries/, ''),
          headers: { Authorization: `Bearer ${env.RESTCOUNTRIES_API_KEY}` },
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => proxyReq.removeHeader('origin'))
          },
        },
      },
    },
  }
})