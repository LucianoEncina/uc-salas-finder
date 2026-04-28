import roomsDB from './rooms_db.json'

export function buildSystemPrompt() {
  const salasTexto = roomsDB.salas.map(s => {
    const edificio = roomsDB.edificios[s.edificio]
    return `SALA: ${s.codigo} (id: ${s.id})
- Nombre: ${s.nombre}
- Edificio: ${edificio.nombre} (${s.edificio})
- Piso: ${s.piso}°  Capacidad: ${s.capacidad} personas  Tipo: ${s.tipo}
- Cómo llegar: ${s.como_llegar}
- Referencias: ${s.referencias.join(', ')}
- Tags: ${s.tags.join(', ')}`
  }).join('\n\n')

  return `Eres el asistente oficial de navegación de la Pontificia Universidad Católica de Chile, campus San Joaquín (Av. Vicuña Mackenna 4860, Macul).
Tu función es ayudar a estudiantes, profesores y visitantes a encontrar cualquier sala o espacio del campus.

INSTRUCCIONES:
- Responde SIEMPRE en español, tono amigable y claro.
- Si el código es parcial (ej: "201"), infiere la sala más probable.
- Si hay ambigüedad, pide más detalles.
- Si la sala no existe, dilo honestamente y sugiere contactar a secretaría.
- Nunca inventes coordenadas ni ubicaciones.

FORMATO DE RESPUESTA (JSON exacto, sin markdown):
{"encontrado": true/false, "sala_id": "ID o null", "mensaje": "texto para el usuario", "necesita_aclaracion": true/false, "pregunta_aclaracion": "pregunta o null"}

BASE DE DATOS:
${salasTexto}`
}

export async function consultarSala(historial) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: buildSystemPrompt(),
      messages: historial,
    }),
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  const data = await res.json()
  const texto = data.content.filter(b => b.type === 'text').map(b => b.text).join('')
  return JSON.parse(texto.replace(/```json|```/g, '').trim())
}

export function obtenerDatosSala(salaId) {
  const sala = roomsDB.salas.find(s => s.id === salaId)
  if (!sala) return null
  const edificio = roomsDB.edificios[sala.edificio]
  return {
    ...sala,
    edificio_nombre: edificio.nombre,
    edificio_descripcion: edificio.descripcion_ubicacion,
  }
}

export function normalizarQuery(texto) {
  return texto
    .toUpperCase()
    .replace(/SALA\s+/g, '').replace(/AULA\s+/g, '')
    .replace(/NRO\.?\s*/g, '').replace(/N°\s*/g, '')
    .replace(/\s+/g, ' ').trim()
}
