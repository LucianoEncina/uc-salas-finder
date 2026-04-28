import { useState } from 'react'

const css = `
.mapa-wrap{border-top:1px solid #DDD9D0}
.mapa-tabs{display:flex;background:#F4F2EE}
.mapa-tab{flex:1;padding:8px;font-size:12px;font-weight:500;color:#6B6760;border:none;background:transparent;cursor:pointer;border-bottom:2px solid transparent;font-family:inherit}
.mapa-tab.on{color:#1B3A6B;background:white;border-bottom-color:#1B3A6B}
.mapa-frame{width:100%;height:190px;background:#E8EEF8;display:flex;align-items:center;justify-content:center}
.mapa-frame iframe{width:100%;height:100%;border:none;display:block}
.mapa-fallback{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;height:100%;color:#6B6760;font-size:13px;text-align:center;padding:16px}
.mapa-barra{padding:9px 12px;background:white;border-top:1px solid #DDD9D0;display:flex;align-items:center;gap:8px}
.mapa-info{flex:1;font-size:11px;color:#6B6760}
.mapa-info strong{display:block;font-size:12px;color:#1A1917;font-weight:500}
.badge{display:inline-flex;align-items:center;gap:3px;font-size:10px;padding:2px 7px;border-radius:10px;font-weight:500;margin-top:2px}
.badge.ok{background:#EAF3DE;color:#3B6D11}
.badge.wait{background:#FAEEDA;color:#854F0B}
.badge.err{background:#FCEBEB;color:#A32D2D}
.btn-nav{padding:6px 12px;background:#1B3A6B;color:white;border:none;border-radius:6px;font-size:11px;font-weight:500;cursor:pointer;text-decoration:none;font-family:inherit;white-space:nowrap}
.btn-ub{padding:6px 10px;background:#F4F2EE;color:#1B3A6B;border:1px solid #DDD9D0;border-radius:6px;font-size:11px;cursor:pointer;font-family:inherit}
`

function useGPS() {
  const [estado, setEstado] = useState('idle')
  const [coords, setCoords] = useState(null)
  function pedir() {
    if (!navigator.geolocation) { setEstado('err'); return }
    setEstado('wait')
    navigator.geolocation.getCurrentPosition(
      p => { setCoords({ lat: p.coords.latitude, lng: p.coords.longitude }); setEstado('ok') },
      () => setEstado('err'),
      { timeout: 8000, maximumAge: 60000 }
    )
  }
  return { estado, coords, pedir }
}

export default function MapaEmbed({ sala }) {
  const [tab, setTab] = useState('lugar')
  const { estado, coords, pedir } = useGPS()
  const KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY || ''

  const embedLugar = KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${KEY}&q=${sala.lat},${sala.lng}&zoom=18`
    : null

  const embedRuta = KEY && coords
    ? `https://www.google.com/maps/embed/v1/directions?key=${KEY}&origin=${coords.lat},${coords.lng}&destination=${sala.lat},${sala.lng}&mode=walking`
    : null

  const urlNav = `https://www.google.com/maps/dir/?api=1&destination=${sala.lat},${sala.lng}&travelmode=walking`

  function handleRuta() {
    setTab('ruta')
    if (estado === 'idle') pedir()
  }

  function renderVista() {
    if (tab === 'ruta') {
      if (estado === 'wait') return <div className="mapa-fallback">📡<br/>Obteniendo tu ubicación...</div>
      if (estado === 'err')  return <div className="mapa-fallback">⚠️<br/>No se pudo obtener la ubicación.<br/>Usa el botón Navegar.</div>
      if (embedRuta)         return <iframe src={embedRuta} title="Ruta" allowFullScreen />
      if (!KEY)              return <div className="mapa-fallback">🗺️<br/>Configura VITE_GOOGLE_MAPS_KEY<br/>para ver el mapa aquí.</div>
    }
    if (embedLugar) return <iframe src={embedLugar} title="Ubicación" allowFullScreen />
    return (
      <div className="mapa-fallback">
        📍<br/>
        <strong style={{color:'#1A1917'}}>{sala.nombre}</strong>
        <span style={{fontSize:'11px'}}>{sala.edificio_nombre} · Piso {sala.piso}</span>
        <span style={{fontSize:'11px',color:'#A8A49D'}}>Sin API key — usa el botón Navegar</span>
      </div>
    )
  }

  const BADGE = { ok: ['ok','✓ Ubicación lista'], wait: ['wait','⟳ Buscando...'], err: ['err','⚠ Sin ubicación'], idle: [null, null] }
  const [bc, bl] = BADGE[estado]

  return (
    <>
      <style>{css}</style>
      <div className="mapa-wrap">
        <div className="mapa-tabs">
          <button className={`mapa-tab${tab==='lugar'?' on':''}`} onClick={() => setTab('lugar')}>📍 Ver sala</button>
          <button className={`mapa-tab${tab==='ruta'?' on':''}`} onClick={handleRuta}>🚶 Ruta a pie</button>
        </div>
        <div className="mapa-frame">{renderVista()}</div>
        <div className="mapa-barra">
          <div className="mapa-info">
            <strong>{sala.nombre}</strong>
            {sala.edificio_nombre} · Piso {sala.piso}
            {bc && <div className={`badge ${bc}`}>{bl}</div>}
          </div>
          {tab === 'ruta' && estado === 'idle' && (
            <button className="btn-ub" onClick={pedir}>📡 Mi ubicación</button>
          )}
          <a className="btn-nav" href={urlNav} target="_blank" rel="noopener noreferrer">↗ Navegar</a>
        </div>
      </div>
    </>
  )
}
