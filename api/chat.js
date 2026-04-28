// api/chat.js — Vercel Serverless Function
// Actúa de puente seguro entre el frontend y la API de Anthropic.
// La API key NUNCA llega al navegador del usuario.

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // CORS para que el frontend pueda llamarla
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const { messages, system } = req.body

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,  // ← segura, solo en el servidor
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system,
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ error: data })
    }

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error conectando con la IA' })
  }
}
