import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { docs, links, enlaces } from './data.js'

export const usd = (v, dec = 2) =>
  (v < 0 ? '−' : '') + 'USD ' + Math.abs(v).toLocaleString('es-EC', { minimumFractionDigits: dec, maximumFractionDigits: dec })
export const num = (v, dec = 2) =>
  (v < 0 ? '−' : '') + Math.abs(v).toLocaleString('es-EC', { minimumFractionDigits: dec, maximumFractionDigits: dec })

/* ── Visor de documentos ─────────────────────────────── */
const ViewerCtx = createContext(() => {})
export const useViewer = () => useContext(ViewerCtx)

export function ViewerProvider({ children }) {
  const [open, setOpen] = useState(null)
  const closeRef = useRef(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [open])
  return (
    <ViewerCtx.Provider value={setOpen}>
      {children}
      {open && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label={open.titulo} onClick={() => setOpen(null)}>
          <div className="viewer__panel" onClick={(e) => e.stopPropagation()}>
            <header className="viewer__bar">
              <div>
                <p className="viewer__kind">{open.tipo ?? 'Evidencia'}</p>
                <h2>{open.titulo}</h2>
              </div>
              <div className="viewer__actions">
                {open.pdf && (
                  <>
                    <a className="btn btn--ghost" href={open.pdf} target="_blank" rel="noreferrer">Abrir en otra pestaña</a>
                    <a className="btn" href={open.pdf} download>Descargar PDF</a>
                  </>
                )}
                <button ref={closeRef} className="btn btn--ghost" onClick={() => setOpen(null)}>Cerrar</button>
              </div>
            </header>
            {open.pdf ? (
              <iframe className="viewer__frame" src={open.pdf + '#view=FitH'} title={open.titulo} />
            ) : (
              <div className="viewer__img"><img src={open.img} alt={open.titulo} /></div>
            )}
          </div>
        </div>
      )}
    </ViewerCtx.Provider>
  )
}

export function DocCard({ k }) {
  const d = docs[k]
  const open = useViewer()
  const pdf = `/docs/${d.archivo}.pdf`
  return (
    <article className="doc">
      <button className="doc__thumb" onClick={() => open({ ...d, pdf })} aria-label={`Ver ${d.titulo}`}>
        <img src={`/thumbs/${d.archivo}.jpg`} alt="" />
      </button>
      <div className="doc__body">
        <p className="doc__kind">{d.tipo}</p>
        <h4>{d.titulo}</h4>
        <p className="doc__meta">{d.paginas} {d.paginas === 1 ? 'página' : 'páginas'}, {d.fecha}</p>
        <div className="doc__actions">
          <button className="link" onClick={() => open({ ...d, pdf })}>Ver documento</button>
          <a className="link link--quiet" href={pdf} download>Descargar</a>
        </div>
      </div>
    </article>
  )
}

export function Figure({ src, caption, source }) {
  const open = useViewer()
  return (
    <figure className="fig">
      <button className="fig__btn" onClick={() => open({ img: src, titulo: caption })} aria-label={`Ampliar: ${caption}`}>
        <img src={src} alt={caption} />
      </button>
      <figcaption>{caption}{source && <span className="fig__src"> Fuente: {source}.</span>}</figcaption>
    </figure>
  )
}

/* ── Bloques ─────────────────────────────── */
export function Section({ id, title, lead, source, children }) {
  return (
    <section className="sec" id={id} aria-labelledby={id + '-t'}>
      <header className="sec__head">
        <h2 id={id + '-t'}>{title}</h2>
        {lead && <p className="sec__lead">{lead}</p>}
      </header>
      {enlaces[id] && <LinkStrip ids={enlaces[id]} label={`Enlaces oficiales: ${title}`} />}
      {children}
      {source && <p className="src">Fuente: {source}</p>}
    </section>
  )
}

/* ── Enlaces externos ─────────────────────────────── */
export function LinkStrip({ ids, label }) {
  return (
    <nav className="lstrip" aria-label={label}>
      <span className="lstrip__label">Enlaces oficiales</span>
      <ul>
        {ids.map((k) => {
          const l = links[k]
          return (
            <li key={k}>
              <a href={l.u} target="_blank" rel="noreferrer" className={`chip chip--${l.tipo === 'Calculadora' || l.tipo === 'Sistema' ? 'hot' : 'std'}`} title={`${l.t} (${l.e}). Se abre en otra pestaña`}>
                <span className="chip__ent">{l.e}</span>{l.t}<span className="chip__arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function LinkCard({ k }) {
  const l = links[k]
  const host = l.u.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  return (
    <a className={`lcard ${l.tipo === 'Calculadora' || l.tipo === 'Sistema' ? 'lcard--hot' : ''}`} href={l.u} target="_blank" rel="noreferrer">
      <span className="lcard__top"><span className="lcard__tipo">{l.tipo}</span><span className="lcard__ent">{l.e}</span></span>
      <span className="lcard__t">{l.t}</span>
      <span className="lcard__host">{host} <span aria-hidden="true">↗</span><span className="sr"> (se abre en otra pestaña)</span></span>
    </a>
  )
}

export function Stats({ items }) {
  return (
    <dl className="stats">
      {items.map(([label, value, note]) => (
        <div className="stat" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
          {note && <p className="stat__note">{note}</p>}
        </div>
      ))}
    </dl>
  )
}

export function Table({ head, rows, foot, numeric = [], caption }) {
  return (
    <div className="tablewrap" tabIndex={0} role="region" aria-label={caption ?? 'Tabla'}>
      <table>
        {caption && <caption>{caption}</caption>}
        <thead><tr>{head.map((h, i) => <th key={i} className={numeric.includes(i) ? 'n' : ''} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j} className={numeric.includes(j) ? 'n' : ''}>{c}</td>)}</tr>
          ))}
        </tbody>
        {foot && <tfoot><tr>{foot.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j} className={numeric.includes(j) ? 'n' : ''}>{c}</td>)}</tr></tfoot>}
      </table>
    </div>
  )
}

/* ── Gráfico de barras horizontales con tooltip ─────────── */
export function HBars({ title, data, format = (v) => v, max, colorOf, legend, unit, note }) {
  const [tip, setTip] = useState(null)
  const m = max ?? Math.max(...data.map((d) => d[1]))
  const [table, setTable] = useState(false)
  return (
    <figure className="chart">
      <figcaption className="chart__head">
        <span className="chart__title">{title}</span>
        <button className="link link--quiet" onClick={() => setTable(!table)} aria-pressed={table}>{table ? 'Ver gráfico' : 'Ver tabla'}</button>
      </figcaption>
      {legend && (
        <ul className="legend">{legend.map(([l, c]) => <li key={l}><i style={{ background: c }} />{l}</li>)}</ul>
      )}
      {table ? (
        <Table head={['Concepto', unit ?? 'Valor']} rows={data.map((d) => [d[0], format(d[1])])} numeric={[1]} />
      ) : (
        <ul className="bars" onMouseLeave={() => setTip(null)}>
          {data.map((d, i) => (
            <li key={d[0]} className="bars__row"
              onMouseEnter={() => setTip(i)} onFocus={() => setTip(i)} onBlur={() => setTip(null)} tabIndex={0}
              aria-label={`${d[0]}: ${format(d[1])}${d[2] ? ', ' + d[2] : ''}`}>
              <span className="bars__label">{d[0]}</span>
              <span className="bars__track">
                <span className="bars__bar" style={{ width: `${Math.max(0.6, (d[1] / m) * 100)}%`, background: colorOf ? colorOf(d) : undefined }} />
                <span className="bars__value">{format(d[1])}</span>
                {tip === i && (
                  <span className="tip" role="tooltip">
                    <strong>{d[0]}</strong>
                    <span>{format(d[1])}{d[2] ? `, ${d[2]}` : ''}</span>
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
      {note && <p className="chart__note">{note}</p>}
    </figure>
  )
}

/* ── Ventana con un sistema web incrustado ───────────── */
export function AppWindow({ url, title, note }) {
  const [key, setKey] = useState(0)
  const [loading, setLoading] = useState(true)
  const [max, setMax] = useState(false)
  const host = url.replace(/^https?:\/\//, '').replace(/\/(#\/?)?$/, '')

  useEffect(() => {
    if (!max) return
    const onKey = (e) => e.key === 'Escape' && setMax(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [max])

  const reload = () => { setLoading(true); setKey((k) => k + 1) }

  return (
    <figure className={`appwin ${max ? 'is-max' : ''}`}>
      <div className="appwin__bar">
        <span className="appwin__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="appwin__title">{title}</span>
        <span className="appwin__url" title={url}>{host}</span>
        <span className="appwin__actions">
          <button type="button" onClick={reload} aria-label="Recargar" title="Recargar">↻</button>
          <button type="button" onClick={() => setMax(!max)} aria-label={max ? 'Restaurar tamaño' : 'Ampliar ventana'} title={max ? 'Restaurar (Esc)' : 'Ampliar'}>{max ? '⤡' : '⤢'}</button>
          <a href={url} target="_blank" rel="noreferrer" aria-label="Abrir en otra pestaña" title="Abrir en otra pestaña">↗</a>
        </span>
      </div>
      <div className="appwin__body">
        {loading && <p className="appwin__loading">Cargando {title}…</p>}
        <iframe key={key} src={url} title={title} loading="lazy" onLoad={() => setLoading(false)}
          allow="clipboard-write; fullscreen" />
      </div>
      {note && <figcaption>{note}</figcaption>}
    </figure>
  )
}
