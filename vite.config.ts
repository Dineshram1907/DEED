import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { handleContactSubmission } from './api/contact.ts'

// Vite dev server configuration with secure contact endpoint middleware
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'deed-contact-api',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method === 'POST') {
            let body = ''
            req.on('data', (chunk) => {
              body += chunk.toString()
            })
            req.on('end', async () => {
              try {
                const data = JSON.parse(body)
                const result = await handleContactSubmission(data)
                res.statusCode = result.success ? 200 : 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(result))
              } catch {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, message: 'Server processing error.' }))
              }
            })
          } else {
            res.statusCode = 405
            res.end()
          }
        })
      }
    }
  ]
})
