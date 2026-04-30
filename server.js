import 'dotenv/config'
import express from 'express'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(204).end()
  next()
})

app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        system,
        messages,
      }),
    })
    const data = await response.json()
    if (!response.ok) return res.status(response.status).json({ error: data })
    res.json(data)
  } catch {
    res.status(500).json({ error: 'Error conectando con la IA' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`))
