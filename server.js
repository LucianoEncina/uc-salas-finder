import 'dotenv/config'
import express from 'express'
import handler from './api/chat.js'

const app = express()
app.use(express.json())
app.post('/api/chat', handler)
app.listen(3001, () => console.log('API local en http://localhost:3001'))
