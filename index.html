import { useState, useRef, useEffect } from 'react'
import { consultarSala, obtenerDatosSala, normalizarQuery } from '../ai_logic.js'
import MapaEmbed from './MapaEmbed.jsx'

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@500&display=swap');
:root{--azul:#1B3A6B;--azul2:#2452A0;--dorado:#C9A84C;--dorado-s:#F5EDD3;--bg:#F4F2EE;--sup:#FFFFFF;--borde:#DDD9D0;--txt:#1A1917;--txt2:#6B6760;--txt3:#A8A49D}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:var(--bg)}
.app{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px}
.header{width:100%;max-width:680px;display:flex;align-items:center;gap:14px;margin-bottom:16px;padding:0 4px}
.escudo{width:48px;height:48px;background:var(--azul);border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'DM Mono',monospace;font-size:13px;font-weight:500;color:var(--dorado);letter-spacing:1px;flex-shrink:0}
.htxt h1{font-size:17px;font-weight:500;color:var(--azul);letter-spacing:-0.3px}
.htxt p{font-size:13px;color:var(--txt2);font-weight:300;margin-top:1px}
.online{margin-left:auto;background:var(--dorado-s);color:var(--azul);font-size:11px;font-weight:500;padding:4px 10px;border-radius:20px;border:1px solid var(--dorado);white-space:nowrap}
.chat{width:100%;max-width:680px;background:var(--sup);border-radius:16px;border:1px solid var(--borde);display:flex;flex-direction:column;height:560px;overflow:hidden}
.msgs{flex:1;overflow-y:auto;padding:20px 18px;display:flex;flex-direction:column;gap:14px;scroll-behavior:smooth}
.msgs::-webkit-scrollbar{width:4px}
.msgs::-webkit-scrollbar-thumb{background:var(--borde);border-radius:4px}
.fila{display:flex;gap:10px;animation:pop .22s ease-out}
@keyframes pop{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
.fila.user{flex-direction:row-reverse}
.av{width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;flex-shrink:0;align-self:flex-end;font-family:'DM Mono',monospace}
.av.bot{background:var(--azul);color:var(--dorado)}
.av.user{background:var(--bg);color:var(--txt2);border:1px solid var(--borde)}
.bub{max-width:80%;padding:11px 15px;border-radius:14px;font-size:13.5px;line-height:1.58;color:var(--txt)}
.fila.bot .bub{background:var(--bg);border:1px solid var(--borde);border-bottom-left-radius:3px}
.fila.user .bub{background:var(--azul);color:white;border-bottom-right-radius:3px}
.card{margin-top:10px;background:var(--sup);border:1px solid var(--borde);border-radius:8px;overflow:hidden}
.card-foto{width:100%;height:110px;background:#E8EEF8;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px}
.card-foto img{width:100%;height:100%;object-fit:cover;display:block}
.foto-ico{width:34px;height:34px;background:white;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:18px}
.foto-lbl{font-size:11px;color:var(--txt3)}
.card-body{padding:11px 13px}
.card-nombre{font-size:14px;font-weight:500;color:var(--azul)}
.card-meta{font-size:11px;color:var(--txt2);margin-top:2px;margin-bottom:8px}
.card-dir{font-size:12px;line-height:1.5;color:var(--txt);padding:8px 10px;background:var(--bg);border-left:3px solid var(--dorado);margin-bottom:10px}
.card-btns{display:flex;gap:7px}
.btn{padding:7px 13px;border-radius:7px;font-size:12px;font-weight:500;cursor:pointer;border:none;font-family:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:5px;transition:background .15s}
.btn.p{background:var(--azul);color:white}.btn.p:hover{background:var(--azul2)}
.btn.s{background:transparent;color:var(--azul);border:1px solid var(--borde)}.btn.s:hover{background:var(--bg)}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
.chip{padding:5px 12px;background:white;border:1px solid var(--borde);border-radius:20px;font-size:12px;color:var(--azul);cursor:pointer;transition:all .15s;font-family:inherit;font-weight:500}
.chip:hover{background:var(--azul);color:white;border-color:var(--azul)}
.dots{display:flex;gap:4px;align-items:center;padding:3px 0}
.dot{width:6px;height:6px;background:var(--txt3);border-radius:50%;animation:pulse 1.3s ease-in-out infinite}
.dot:nth-child(2){animation-delay:.2s}.dot:nth-child(3){animation-delay:.4s}
@keyframes pulse{0%,60%,100%{transform:scale(1);opacity:.4}30%{transform:scale(1.3);opacity:1}}
.inp-area{padding:13px 15px;border-top:1px solid var(--borde);display:flex;gap:8px;background:var(--sup)}
.inp{flex:1;padding:10px 16px;border:1px solid var(--borde);border-radius:24px;font-size:14px;background:var(--bg);color:var(--txt);font-family:inherit;outline:none;transition:border-color .15s}
.inp:focus{border-color:var(--azul);background:white}
.inp::placeholder{color:var(--txt3)}
.send{width:42px;height:42px;background:var(--azul);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,transform .1s}
.send:hover{background:var(--azul2)}.send:active{transform:scale(.94)}.send:disabled{opacity:.4;cursor:not-allowed}
.send svg{fill:white;width:17px;height:17px}
.footer{width:100%;max-width:680px;text-align:center;margin-top:11px;font-size:11px;color:var(--txt3)}
`

const TIPO_ICO = { auditorio:'🎭', sala_clases:'🏫', laboratorio:'💻', sala_estudio:'📚' }

function TarjetaSala({ sala }) {
  const [mapa, setMapa] = useState(false)
  const ico = TIPO_ICO[sala.tipo] || '📍'
  return (
    <div className="card">
      <div className="card-foto">
        {sala.foto_url
          ? <img src={sala.foto_url} alt={sala.nombre} onError={e => e.target.style.display='none'} />
          : <><div className="foto-ico">{ico}</div><span className="foto-lbl">Foto no disponible aún</span></>
        }
      </div>
      <div className="card-body">
        <div className="card-nombre">📍 {sala.nombre}</div>
        <div className="card-meta">{sala.edificio_nombre} · Piso {sala.piso} · Cap. {sala.capacidad} personas</div>
        <div className="card-dir">{sala.como_llegar}</div>
        <div className="card-btns">
          <button className="btn p" onClick={() => setMapa(v => !v)}>
            {mapa ? '🗺 Ocultar mapa' : '🗺 Ver mapa'}
          </button>
          <a className="btn s" href={`https://www.google.com/maps/dir/?api=1&destination=${sala.lat},${sala.lng}&travelmode=walking`} target="_blank" rel="noopener noreferrer">
            ↗ Abrir en Maps
          </a>
        </div>
        {mapa && <MapaEmbed sala={sala} />}
      </div>
    </div>
  )
}

function Mensaje({ msg, onChip }) {
  return (
    <div className={`fila ${msg.rol}`}>
      <div className={`av ${msg.rol}`}>{msg.rol === 'bot' ? 'UC' : 'Tú'}</div>
      <div>
        <div className="bub">
          {msg.texto}
          {msg.sala && <TarjetaSala sala={msg.sala} />}
          {msg.chips?.length > 0 && (
            <div className="chips">
              {msg.chips.map(c => <button key={c} className="chip" onClick={() => onChip(c)}>{c}</button>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const BIENVENIDA = {
  id: 0, rol: 'bot',
  texto: '¡Hola! Soy el asistente de salas del campus San Joaquín. Dime el código o nombre de la sala que buscas y te indico cómo llegar. 👋',
  chips: ['¿Dónde está ING 201?', 'Lab de computación', 'AUD 101', 'Sala de estudio biblioteca'],
}

export default function ChatBot() {
  const [msgs, setMsgs] = useState([BIENVENIDA])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [historial, setHistorial] = useState([])
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, loading])

  async function enviar(override) {
    const texto = (override || input).trim()
    if (!texto || loading) return
    setMsgs(p => [...p, { id: Date.now(), rol: 'user', texto }])
    setInput('')
    setLoading(true)
    const nuevo = [...historial, { role: 'user', content: normalizarQuery(texto) }]
    setHistorial(nuevo)
    try {
      const r = await consultarSala(nuevo)
      const bot = { id: Date.now() + 1, rol: 'bot' }
      if (r.necesita_aclaracion) {
        bot.texto = r.pregunta_aclaracion
      } else if (r.encontrado && r.sala_id) {
        bot.texto = r.mensaje
        bot.sala = obtenerDatosSala(r.sala_id)
      } else {
        bot.texto = r.mensaje
        bot.chips = ['ING 201', 'AUD 101', 'Lab computación', 'Biblioteca']
      }
      setHistorial(p => [...p, { role: 'assistant', content: r.mensaje }])
      setMsgs(p => [...p, bot])
    } catch {
      setMsgs(p => [...p, { id: Date.now()+1, rol: 'bot', texto: 'Error al conectar con el asistente. Intenta de nuevo.' }])
    }
    setLoading(false)
  }

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="header">
          <div className="escudo">PUC</div>
          <div className="htxt">
            <h1>Asistente de Salas</h1>
            <p>Campus San Joaquín · Av. Vicuña Mackenna 4860</p>
          </div>
          <div className="online">● En línea</div>
        </div>
        <div className="chat">
          <div className="msgs">
            {msgs.map(m => <Mensaje key={m.id} msg={m} onChip={t => enviar(t)} />)}
            {loading && (
              <div className="fila bot">
                <div className="av bot">UC</div>
                <div className="bub"><div className="dots"><div className="dot"/><div className="dot"/><div className="dot"/></div></div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="inp-area">
            <input className="inp" value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && enviar()}
              placeholder="Escribe el código o nombre de una sala..." disabled={loading} />
            <button className="send" onClick={() => enviar()} disabled={loading || !input.trim()}>
              <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
        <div className="footer">Pontificia Universidad Católica de Chile · Campus San Joaquín</div>
      </div>
    </>
  )
}
