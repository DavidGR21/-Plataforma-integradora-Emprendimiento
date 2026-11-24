import { useEffect, useState } from 'react'
import { NavLink, Link, Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom'
import { curso, modulos, docs, m1, m2, m3, m4, links, enlaces, gruposEnlaces } from './data.js'
import { ViewerProvider, DocCard, LinkCard, LinkGroups, usd } from './components.jsx'
import { Modulo1, Modulo2, Modulo3, Modulo4 } from './modules.jsx'

const VISTAS = { 1: Modulo1, 2: Modulo2, 3: Modulo3, 4: Modulo4 }
const SECCIONES = {
  1: [['idea', 'Idea de negocio'], ['modelo', 'Modelo de negocio'], ['plan', 'Plan empresarial'], ['encuesta', 'Encuesta y entrevistas'], ['economico', 'Resultados económicos']],
  2: [['ruc', 'RUC y régimen'], ['iva', 'IVA y comprobantes'], ['documentos-tributarios', 'Facturación e importaciones'], ['marca', 'Registro de marca'], ['matriz', 'Matriz de obligaciones']],
  3: [['contratacion', 'Contratación y salarios'], ['horas', 'Horas extras'], ['beneficios', 'Beneficios sociales'], ['roles', 'Roles de pago']],
  4: [['formas', 'Formas de terminación'], ['calculos', 'Cálculo de liquidaciones'], ['pazysalvo', 'Paz y salvo (SIGEL)'], ['gamificacion', 'Gamificación']],
}
const ROMAN = ['I', 'II', 'III', 'IV']
const totalEnlaces = Object.keys(links).length
// Enlaces únicos de un módulo, en el orden de sus apartados
const enlacesModulo = (id) => [...new Set(SECCIONES[id].flatMap(([sec]) => enlaces[sec] ?? []))]
// Agrupa los enlaces de un módulo por entidad, en el orden en que aparecen
const porEntidad = (ids) => {
  const g = new Map()
  ids.forEach((k) => g.set(links[k].e, [...(g.get(links[k].e) ?? []), k]))
  return [...g]
}
const ACCESOS_INICIO = [
  ['Calculadoras del Ministerio del Trabajo', ['calcLiquidacion', 'calcTercero', 'calcCuarto']],
  ['SRI', ['sriConsultaRuc', 'sriLinea', 'sriFacturador']],
  ['Trámites laborales y de marca', ['sut', 'iessSistema', 'senadiServicios']],
]
const HEADLINE = {
  1: [usd(m1.resultado.resultado), 'resultado mensual estimado'],
  2: [usd(m2.iva.pagar), 'IVA a pagar del semestre'],
  3: [usd(m3.consolidado.neto), 'neto de nómina, septiembre'],
  4: ['10 casos', 'de liquidación resueltos'],
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Masthead({ onMenu }) {
  return (
    <header className="mast">
      <div className="mast__inner">
        <button className="mast__menu" onClick={onMenu} aria-label="Abrir menú">Menú</button>
        <Link to="/" className="mast__brand">
          <img src="/img/uta.jpg" alt="Escudo de la Universidad Técnica de Ambato" />
          <span>
            <strong>{curso.universidad}</strong>
            <small>{curso.facultad}</small>
          </span>
        </Link>
        <img className="mast__fisei" src="/img/fisei.jpg" alt="Escudo de la FISEI" />
      </div>
      <div className="mast__strip">
        <span>Proyecto integrador de fin de semestre</span>
        <span>{curso.asignatura}</span>
        <span>Ciclo {curso.ciclo.toLowerCase()}</span>
        <Link to="/enlaces" className="mast__links">Enlaces oficiales</Link>
      </div>
    </header>
  )
}

function Sidebar({ open, onClose }) {
  return (
    <nav className={`side ${open ? 'is-open' : ''}`} aria-label="Módulos">
      <NavLink to="/" end className="side__link" onClick={onClose}>Inicio</NavLink>
      <p className="side__group">Módulos</p>
      {modulos.map((m) => (
        <NavLink key={m.id} to={`/modulo/${m.slug}`} className="side__link side__mod" onClick={onClose}>
          <span className="side__num">{ROMAN[m.id - 1]}</span>{m.nombre}
        </NavLink>
      ))}
      <p className="side__group">Repositorio</p>
      <NavLink to="/documentos" className="side__link" onClick={onClose}>Todos los documentos <span className="side__count">{Object.keys(docs).length}</span></NavLink>
      <NavLink to="/enlaces" className="side__link" onClick={onClose}>Enlaces oficiales <span className="side__count">{totalEnlaces}</span></NavLink>
      <div className="side__foot">
        <img src="/img/learnpro-logo.png" alt="LearnPro" />
        <p>{curso.empresa}<br />Ambato, Tungurahua</p>
      </div>
    </nav>
  )
}

function Inicio() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero__text">
          <p className="hero__kicker">Plataforma integradora del semestre</p>
          <h1>Del plan de negocios a la liquidación laboral de LearnPro S.A.S.</h1>
          <p className="hero__lead">
            Este sitio reúne los trabajos que el grupo desarrolló durante el ciclo {curso.ciclo.toLowerCase()} en {curso.asignatura}.
            Todos giran alrededor de una misma empresa, LearnPro, y se organizan en cuatro módulos. Ningún caso ni cálculo es nuevo:
            cada cifra viene del trabajo original, que puede consultarse en su módulo.
          </p>
        </div>
        <dl className="hero__card">
          <div><dt>Docente</dt><dd>{curso.docente}</dd></div>
          <div><dt>Carrera</dt><dd>{curso.carrera}, octavo semestre, paralelo A</dd></div>
          <div><dt>Integrantes</dt><dd>{curso.equipo.map((e) => <span key={e.ini}>{e.nombre}</span>)}</dd></div>
        </dl>
      </section>

      <ol className="modgrid">
        {modulos.map((m) => (
          <li key={m.id}>
            <Link to={`/modulo/${m.slug}`} className="modcard">
              <span className="modcard__num" aria-hidden="true">{ROMAN[m.id - 1]}</span>
              <span className="modcard__body">
                <span className="modcard__label">Módulo {m.id}</span>
                <span className="modcard__title">{m.nombre}</span>
                <span className="modcard__text">{m.resumen}</span>
                <span className="modcard__foot">
                  <span><strong>{HEADLINE[m.id][0]}</strong> {HEADLINE[m.id][1]}</span>
                  <span>{m.docs.length} documentos</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <section className="thread" aria-labelledby="hilo">
        <h2 id="hilo">Una empresa, cuatro etapas</h2>
        <div className="thread__row">
          <div><h3>Se crea</h3><p>El problema de las tutorías se convierte en LearnPro: Canvas, FODA, encuesta a {m1.encuesta.n} estudiantes y una inversión inicial de {usd(m1.resultado.inversion)}.</p></div>
          <div><h3>Se formaliza</h3><p>RUC 1899888777001 como S.A.S. en el RIMPE Emprendedor, comprobantes electrónicos, declaración del IVA y marca en la clase 41 de Niza.</p></div>
          <div><h3>Contrata</h3><p>Seis trabajadores en nómina con un sistema propio de roles de pago que calcula décimos, fondos de reserva y aportes al IESS.</p></div>
          <div><h3>Termina relaciones</h3><p>Liquidaciones por desahucio y despido intempestivo, y SIGEL para cerrar el paz y salvo con sus evidencias, como en el expediente de {usd(m4.sigel.neto)}.</p></div>
        </div>
      </section>

      <section className="quickpanel" aria-labelledby="accesos">
        <header className="quickpanel__head">
          <h2 id="accesos">Sitios oficiales más usados</h2>
          <p>Cada módulo trae los suyos al pie de cada apartado. <Link to="/enlaces">Ver los {totalEnlaces} enlaces</Link>.</p>
        </header>
        <LinkGroups groups={ACCESOS_INICIO} />
      </section>

      <section className="team" aria-labelledby="equipo">
        <h2 id="equipo">Equipo</h2>
        <ul>
          {curso.equipo.map((e) => (
            <li key={e.ini}><span className="team__ini" aria-hidden="true">{e.ini}</span><span><strong>{e.nombre}</strong><small>{e.rol}</small></span></li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Modulo() {
  const { slug } = useParams()
  const m = modulos.find((x) => x.slug === slug)
  if (!m) return <Navigate to="/" replace />
  const Vista = VISTAS[m.id]
  const prev = modulos[m.id - 2], next = modulos[m.id]
  return (
    <div className="page">
      <header className="modhead">
        <span className="modhead__num" aria-hidden="true">{ROMAN[m.id - 1]}</span>
        <div>
          <p className="modhead__label">Módulo {m.id} de 4</p>
          <h1>{m.nombre}</h1>
          <p className="modhead__lead">{m.resumen}</p>
        </div>
      </header>
      <nav className="toc" aria-label="Secciones del módulo">
        {SECCIONES[m.id].map(([id, t]) => <a key={id} href={`#${id}`}>{t}</a>)}
        <a href="#trabajos">Documentos</a>
        <a href="#enlaces-modulo">Enlaces oficiales</a>
      </nav>
      <Vista />
      <section className="sec" id="trabajos" aria-labelledby="trabajos-t">
        <header className="sec__head">
          <h2 id="trabajos-t">Trabajos integrados en este módulo</h2>
          <p className="sec__lead">Documentos originales entregados durante el semestre. Ábralos aquí o descárguelos.</p>
        </header>
        <div className="docs">{m.docs.map((k) => <DocCard key={k} k={k} />)}</div>
      </section>
      <section className="sec" id="enlaces-modulo" aria-labelledby="enlaces-modulo-t">
        <header className="sec__head">
          <h2 id="enlaces-modulo-t">Enlaces oficiales del módulo</h2>
          <p className="sec__lead">Resumen por entidad de los sitios citados en los apartados. <Link to="/enlaces">Ver el directorio completo</Link>.</p>
        </header>
        <LinkGroups groups={porEntidad(enlacesModulo(m.id))} />
      </section>
      <nav className="pager" aria-label="Navegación entre módulos">
        {prev ? <Link to={`/modulo/${prev.slug}`}>Anterior: {prev.nombre}</Link> : <Link to="/">Volver al inicio</Link>}
        {next ? <Link to={`/modulo/${next.slug}`}>Siguiente: {next.nombre}</Link> : <Link to="/documentos">Ver todos los documentos</Link>}
      </nav>
    </div>
  )
}

function Documentos() {
  const [f, setF] = useState(0)
  const [q, setQ] = useState('')
  const list = modulos.filter((m) => !f || m.id === f)
  const match = (k) => !q || (docs[k].titulo + docs[k].tipo).toLowerCase().includes(q.toLowerCase())
  return (
    <div className="page">
      <header className="modhead modhead--plain">
        <div>
          <p className="modhead__label">Repositorio</p>
          <h1>Documentos del semestre</h1>
          <p className="modhead__lead">Los {Object.keys(docs).length} trabajos originales, agrupados por módulo.</p>
        </div>
      </header>
      <div className="filters" role="group" aria-label="Filtrar documentos">
        <div className="seg">
          {[[0, 'Todos'], ...modulos.map((m) => [m.id, m.nombre])].map(([id, n]) => (
            <button key={id} className={f === id ? 'is-on' : ''} aria-pressed={f === id} onClick={() => setF(id)}>{n}</button>
          ))}
        </div>
        <label className="search"><span className="sr">Buscar documento</span>
          <input type="search" placeholder="Buscar por título o tipo" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>
      {list.map((m) => {
        const ks = m.docs.filter(match)
        if (!ks.length) return null
        return (
          <section key={m.id} className="sec">
            <header className="sec__head"><h2>Módulo {m.id}: {m.nombre}</h2></header>
            <div className="docs">{ks.map((k) => <DocCard key={k} k={k} />)}</div>
          </section>
        )
      })}
      {list.every((m) => !m.docs.some(match)) && <p className="empty">Ningún documento coincide con “{q}”. Pruebe con otra palabra, como “IVA” o “taller”.</p>}
    </div>
  )
}

function Enlaces() {
  const [q, setQ] = useState('')
  const norm = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const match = (k) => !q || norm(`${links[k].t} ${links[k].e} ${links[k].tipo} ${links[k].u}`).includes(norm(q))
  const grupos = gruposEnlaces.map(([g, ks]) => [g, ks.filter(match)]).filter(([, ks]) => ks.length)
  return (
    <div className="page">
      <header className="modhead modhead--plain">
        <div>
          <p className="modhead__label">Directorio</p>
          <h1>Enlaces oficiales</h1>
          <p className="modhead__lead">Los {totalEnlaces} sitios usados en el semestre: SRI, Ministerio del Trabajo y sus calculadoras, IESS, SENADI, Supercias, aduana y los sistemas del equipo. Todos se abren en otra pestaña.</p>
        </div>
      </header>
      <div className="filters">
        <nav className="seg" aria-label="Ir a un grupo">
          {gruposEnlaces.map(([g], i) => <a key={g} href={`#grupo-${i}`}>{g.split(':')[0]}</a>)}
        </nav>
        <label className="search"><span className="sr">Buscar enlace</span>
          <input type="search" placeholder="Buscar: RUC, liquidación, décimo…" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>
      {grupos.map(([g, ks]) => (
        <section key={g} className="sec" id={`grupo-${gruposEnlaces.findIndex(([x]) => x === g)}`}>
          <header className="sec__head"><h2>{g}</h2></header>
          <div className="lgrid">{ks.map((k) => <LinkCard key={k} k={k} />)}</div>
        </section>
      ))}
      {!grupos.length && <p className="empty">Ningún enlace coincide con “{q}”. Pruebe con “RUC”, “IVA” o “liquidación”.</p>}
    </div>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false)
  return (
    <ViewerProvider>
      <ScrollTop />
      <a className="skip" href="#main">Saltar al contenido</a>
      <Masthead onMenu={() => setMenu(!menu)} />
      <div className="shell">
        <Sidebar open={menu} onClose={() => setMenu(false)} />
        <main id="main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/modulo/:slug" element={<Modulo />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/enlaces" element={<Enlaces />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <footer className="foot">
            <p>{curso.universidad}, {curso.facultad}. Carrera de {curso.carrera}.</p>
            <p>{curso.asignatura}, ciclo {curso.ciclo.toLowerCase()}. Docente: {curso.docente}</p>
            <p className="muted">Los RUC, facturas y casos de terceros son simulaciones académicas sin validez tributaria ni legal.</p>
          </footer>
        </main>
      </div>
    </ViewerProvider>
  )
}
