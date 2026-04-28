# 🏫 Asistente de Salas UC — Campus San Joaquín

Chatbot con IA para encontrar salas y espacios de la Pontificia Universidad Católica de Chile.

## Stack
- **Frontend**: React + Vite
- **IA**: Claude API (claude-sonnet-4)
- **Mapas**: Google Maps Embed API
- **Deploy**: Vercel

## Estructura del proyecto
```
uc-salas/
├── src/
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Root component
│   ├── rooms_db.json            # Base de datos de salas ← EDITAR AQUÍ
│   ├── ai_logic.js              # Lógica de la IA y API calls
│   └── components/
│       ├── ChatBot.jsx          # Componente principal del chat
│       └── MapaEmbed.jsx        # Mapa interactivo con ruta
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── vercel.json
├── .env.example                 # Copiar como .env.local
└── package.json
```

## Instalación local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local y agregar tu Google Maps API Key (opcional)

# 3. Correr en desarrollo
npm run dev
```

## Deploy en Vercel

### Opción A: Desde la CLI (más rápido)
```bash
npm install -g vercel
vercel
# Seguir las instrucciones — detecta Vite automáticamente
```

### Opción B: Desde vercel.com (sin CLI)
1. Sube el proyecto a GitHub
2. Ve a vercel.com → "Add New Project"
3. Importa el repositorio
4. En "Environment Variables" agrega:
   - `VITE_GOOGLE_MAPS_KEY` = tu API key
5. Click "Deploy" — listo en ~1 minuto ✅

## Agregar salas reales

Edita `src/rooms_db.json`:
```json
{
  "id": "ING401",
  "codigo": "ING 401",
  "nombre": "Sala 401",
  "edificio": "ING",
  "piso": 4,
  "capacidad": 35,
  "tipo": "sala_clases",
  "lat": -33.4985,
  "lng": -70.6142,
  "foto_url": "https://tu-cdn.com/sala-401.jpg",
  "como_llegar": "Edificio Ingeniería, 4° piso...",
  "referencias": ["Cerca de la sala de profesores"],
  "tags": ["sala", "clases", "ingeniería"]
}
```

## Agregar fotos

Sube las fotos a cualquier servicio (Cloudinary, S3, Drive público)
y agrega la URL en el campo `foto_url` de cada sala.

## Contacto
Universidad Católica de Chile — Campus San Joaquín
