import { m1, m2, m3, m4 } from './data.js'
import { Section, Stats, Table, HBars, Figure, AppWindow, usd, num } from './components.jsx'

const pct = (v) => num(v, v % 1 ? 1 : 0) + ' %'
const SRC = {
  pea1: 'PEA 1, Plan de negocios de LearnPro',
  pea2: 'PEA 2, Obligaciones tributarias de una PYME tecnológica',
  pea3: 'PEA 3, Contratación laboral y Anexo 4 (sistema de roles de pago)',
}

/* ═════════════ MÓDULO 1 ═════════════ */
export function Modulo1() {
  const r = m1.resultado
  return (
    <>
      <Section id="idea" title="Idea de negocio" source="Taller: de un problema a una oportunidad de negocio"
        lead="El equipo partió de tres problemas observados y eligió el de las tutorías universitarias.">
        <blockquote className="pull">{m1.problema}</blockquote>
        <div className="grid2">
          <div>
            <h3>Problemas evaluados</h3>
            <ol className="plain-list">{m1.alternativas.map((a) => <li key={a}>{a}</li>)}</ol>
          </div>
          <dl className="pairs">
            {m1.pcsv.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </Section>

      <Section id="modelo" title="Modelo de negocio" source="Taller Business Model Canvas (18/08/2026)"
        lead="Los nueve bloques del Canvas de LearnPro, en la disposición original de Osterwalder.">
        <div className="canvas">
          {m1.canvas.map(([t, d, area]) => (
            <div key={t} className={`canvas__cell canvas__${area}`}><h4>{t}</h4><p>{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="plan" title="Plan empresarial" source={`Ficha de perfil estratégico; Taller de mercado y operación; ${SRC.pea1}`}
        lead="Perfil estratégico y análisis de la competencia que integran el plan de negocios.">
        <div className="grid2">
          <div className="statement"><h3>Misión</h3><p>{m1.mision}</p></div>
          <div className="statement"><h3>Visión</h3><p>{m1.vision}</p></div>
        </div>
        <div className="foda">
          {Object.entries(m1.foda).map(([k, v]) => (
            <div key={k} className={`foda__q foda__${k.toLowerCase()}`}><h4>{k}</h4><ul>{v.map((x) => <li key={x}>{x}</li>)}</ul></div>
          ))}
        </div>
        <Table caption="Estrategias derivadas del FODA" head={['Tipo', 'Estrategia']} rows={m1.estrategias} />
        <Table caption="Competencia y diferenciación" head={['Criterio', 'LearnPro', 'Superprof Ecuador', 'Preply']} rows={m1.competencia} />
      </Section>

      <Section id="encuesta" title="Encuesta y entrevistas" source={`Encuesta de Orientación – LearnPro (Google Forms); ${SRC.pea1}`}
        lead={`Para validar la idea, el equipo aplicó la Encuesta de Orientación de LearnPro a ${m1.encuesta.n} estudiantes universitarios. Sus resultados orientaron las materias, el formato y los horarios de la plataforma.`}>
        <p className="formcta">
          <a className="btn" href={m1.encuesta.formulario} target="_blank" rel="noreferrer">Abrir la encuesta en Google Forms ↗</a>
          <span className="muted">Es el formulario original usado en las entrevistas.</span>
        </p>
        <Stats items={[
          ['Estudiantes encuestados', String(m1.encuesta.n)],
          ['Área más pedida', 'Programación', `${pct(m1.encuesta.areas[0][1])} de las respuestas`],
          ['Formato preferido', 'Ejercicios prácticos', `${pct(m1.encuesta.formato[0][1])} de las respuestas`],
          ['Horario preferido', 'Noche', `${pct(m1.encuesta.horario[0][1])}, de 18:00 a 22:00`],
        ]} />
        <div className="grid2">
          <HBars title="Áreas de interés (respuesta múltiple)" data={m1.encuesta.areas} format={pct} max={100} unit="% de respuestas" />
          <HBars title="Formato de contenido preferido (respuesta múltiple)" data={m1.encuesta.formato} format={pct} max={100} unit="% de respuestas" />
          <HBars title="Horario preferido para estudiar" data={m1.encuesta.horario} format={pct} max={100} unit="% de respuestas" />
          <HBars title="Tiempo semanal que dedicarían" data={m1.encuesta.tiempo} format={pct} max={100} unit="% de respuestas" />
          <HBars title="Nivel de experiencia declarado" data={m1.encuesta.experiencia} format={pct} max={100} unit="% de respuestas" />
        </div>
        <h3 className="sub">Formulario de la encuesta</h3>
        <AppWindow url={m1.encuesta.formulario.replace('usp=header', 'embedded=true')} title="Encuesta de Orientación – LearnPro"
          note="Formulario de Google Forms usado en las entrevistas. Puede verse aquí, ampliarse o abrirse en otra pestaña." />
      </Section>

      <Section id="economico" title="Resultados económicos" source="Viabilidad financiera, plantilla automatizada del estudio económico"
        lead="Resultados de la plantilla automatizada del estudio económico, tal como se calcularon en clase.">
        <Stats items={[
          ['Inversión inicial', usd(r.inversion)],
          ['Ingresos mensuales', usd(r.ingresos), `${r.clientes} sesiones a ${usd(r.precio)}`],
          ['Costo mensual total', usd(r.costoMensual)],
          ['Resultado mensual', usd(r.resultado), `Margen de ${r.margen} sobre ingresos`],
          ['Recuperación simple', r.recuperacion],
        ]} />
        <div className="grid2">
          <HBars title="Inversión inicial por concepto" data={m1.inversion} format={(v) => usd(v)} unit="USD" />
          <HBars title="Costos mensuales de operación" data={m1.costos.map((c) => [c[0], c[1], c[2]])} format={(v) => usd(v)} unit="USD" />
        </div>
        <p className="callout">El estudio concluye que el resultado es positivo: los ingresos estimados superan los costos, siempre que el supuesto de 300 sesiones al mes se valide con un piloto.</p>
      </Section>
    </>
  )
}

/* ═════════════ MÓDULO 2 ═════════════ */
export function Modulo2() {
  const money = (v) => num(v)
  return (
    <>
      <Section id="ruc" title="RUC y régimen tributario" source={`${SRC.pea2}, Anexos 1 y 2; Taller individual de RUC y formalización`}
        lead="La PEA 2 unificó los datos del taller individual de RUC con los del registro de marca, para que todo corresponda a la misma empresa.">
        <div className="grid2">
          <dl className="ruc">{m2.ruc.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <div>
            <Table caption="Actividades económicas CIIU" head={['Tipo', 'Código', 'Descripción']} rows={m2.ciiu} />
            <p className="callout">{m2.regimen}</p>
          </div>
        </div>
        <Table caption="Consulta del catastro del RUC (taller individual)" head={['Razón social', 'Sector', 'CIIU principal']} rows={m2.catastro} />
      </Section>

      <Section id="iva" title="IVA y comprobantes" source={`${SRC.pea2}, Anexos 3 y 4`}
        lead="Operaciones simuladas de septiembre de 2026, segundo semestre. Cada valor del formulario se puede rastrear hasta su comprobante.">
        <Stats items={[
          ['IVA generado en ventas', usd(m2.iva.generado), 'Casillero 499'],
          ['Crédito tributario', usd(m2.iva.credito), 'Casillero 564, factor 1,0000'],
          ['IVA a pagar', usd(m2.iva.pagar), `Vence el ${m2.iva.vence}`],
        ]} />
        <div className="ivaflow" aria-label="Liquidación del IVA">
          <div className="ivaflow__bar"><span style={{ width: '100%' }} className="g">IVA generado {usd(m2.iva.generado)}</span></div>
          <div className="ivaflow__bar"><span style={{ width: `${(m2.iva.credito / m2.iva.generado) * 100}%` }} className="c">Crédito {usd(m2.iva.credito)}</span></div>
          <div className="ivaflow__bar"><span style={{ width: `${(m2.iva.pagar / m2.iva.generado) * 100}%` }} className="p">A pagar {usd(m2.iva.pagar)}</span></div>
        </div>
        <Table caption="Registro de ventas" head={['Fecha', 'Documento', 'Cliente', 'Base 15 %', 'Base 0 %', 'IVA', 'Total']}
          rows={m2.ventas.map((v) => [v[0], v[1], v[2], money(v[3]), money(v[4]), money(v[5]), money(v[6])])}
          foot={['Totales', '', '', ...m2.ventasTotal.map(money)]} numeric={[3, 4, 5, 6]} />
        <Table caption="Registro de compras" head={['Fecha', 'Documento', 'Proveedor', 'Base 15 %', 'Sin IVA (NV)', 'IVA', 'Total']}
          rows={m2.compras.map((v) => [v[0], v[1], v[2], money(v[3]), money(v[4]), money(v[5]), money(v[6])])}
          foot={['Totales', '', '', ...m2.comprasTotal.map(money)]} numeric={[3, 4, 5, 6]} />
        <p className="callout">La nota de venta de un proveedor RIMPE Negocio Popular no desglosa IVA y no genera crédito tributario. La exportación de servicios a BrightPath Tutoring LLC se factura con tarifa 0 % y conserva el crédito.</p>
      </Section>

      <Section id="documentos-tributarios" title="Facturación electrónica e importaciones" source={`${SRC.pea2}, Anexo 5; Guía de importación de tecnología en Ecuador`}
        lead="Proceso de emisión practicado en el Facturador SRI y requisitos para importar tecnología restringida.">
        <ol className="steps">{m2.pasosFE.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}</ol>
        <div className="grid2 grid2--wide-left">
          <Table caption="Tecnología con restricciones de importación" head={['Categoría', 'Requisito', 'Entidad']} rows={m2.importacion} />
          <Figure src="/img/importacion.jpg" caption="Guía de importación: tecnología con restricciones en Ecuador" source="infografía del equipo" />
        </div>
      </Section>

      <Section id="marca" title="Registro de marca" source={`Simulación del registro de marca (15/09/2026); ${SRC.pea2}, Anexo 8`}>
        <div className="grid2 grid2--wide-left">
          <dl className="pairs">{m2.marca.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <div className="brandbox"><img src="/img/learnpro-logo.png" alt="Logotipo de LearnPro" /><img src="/img/qr-wordwall.png" alt="Código QR del juego en Wordwall" className="qr" /><p>Juego de gamificación en Wordwall</p></div>
        </div>
      </Section>

      <Section id="matriz" title="Matriz de obligaciones" source={`${SRC.pea2}, Anexo 9`}
        lead="Las 16 obligaciones que LearnPro S.A.S. debe cumplir para operar formalmente.">
        <Table head={['Obligación', 'Periodicidad', 'Entidad']} rows={m2.obligaciones} />
      </Section>
    </>
  )
}

/* ═════════════ MÓDULO 3 ═════════════ */
export function Modulo3() {
  const c = m3.consolidado
  return (
    <>
      <Section id="contratacion" title="Contratación y salarios" source={`${SRC.pea3}; Línea del tiempo y análisis de contratos`}
        lead="El régimen y la modalidad de vinculación definen la remuneración, los beneficios y la estabilidad.">
        <Table caption="Siete casos analizados en la PEA 3" head={['Caso', 'Institución / empleador', 'Modalidad', 'Régimen', 'Remuneración']} rows={m3.casos} />
        <div className="grid2">
          <HBars title={`Contratos vigentes en el SUT por modalidad (corte ${m3.sut.corte})`} data={m3.sutModalidades} format={(v) => num(v, 0)} unit="Contratos"
            note={`${m3.sut.contratos} contratos de ${m3.sut.empresas} empresas: mujeres ${m3.sut.mujeres}, hombres ${m3.sut.hombres}.`} />
          <HBars title="Escala salarial de LearnPro por puesto" data={m3.escalas} format={(v) => usd(v)} unit="USD mensuales"
            note="Todas las escalas superan el SBU 2026 de USD 482." />
        </div>
        <Table caption="Análisis de tres contratos ficticios" head={['Empleador', 'Régimen', 'Jornada', 'Remuneración', 'Vacaciones y seguridad social']} rows={m3.contratos} />
      </Section>

      <Section id="horas" title="Jornada y horas extras" source={`Línea del tiempo y análisis de contratos; ${SRC.pea3}, Figura 2`}>
        <dl className="pairs pairs--cols">{m3.horasExtra.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      </Section>

      <Section id="beneficios" title="Beneficios sociales" source={`${SRC.pea3}, Anexo 4`}>
        <div className="grid2">
          <dl className="pairs">{m3.beneficios.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <Table caption="Parámetros de nómina del sistema" head={['Parámetro', 'Valor']} rows={m3.parametros} numeric={[1]} />
        </div>
      </Section>

      <Section id="roles" title="Roles de pago" source={`${SRC.pea3}, Figuras 1 a 7`}
        lead="El equipo desarrolló un sistema web de roles de pago para LearnPro, con datos en una base PostgreSQL (Neon). Dos roles se verificaron a mano y coinciden al centavo.">
        <Stats items={[
          ['Roles emitidos en septiembre', String(c.roles)],
          ['Total ingresos', usd(c.ingresos)],
          ['Total egresos', usd(c.egresos)],
          ['Neto pagado', usd(c.neto)],
        ]} />
        <Table caption="Verificación manual de dos roles de septiembre de 2026 (USD)" head={['Concepto', ...m3.roles.cols]} rows={m3.roles.filas} numeric={[1, 2]} />
        <div className="grid2 grid2--wide-left">
          <Figure src="/img/organigrama.jpg" caption="Estructura organizacional de LearnPro S.A.S." source="PEA 3, Anexo 3" />
          <p className="callout">El trabajador con más de un año recibe fondos de reserva y el de primer año todavía no. El sistema aplica esa elegibilidad automáticamente y prorratea si el año se cumple a mitad del mes.</p>
        </div>
        <div className="gallery">
          {m3.capturas.map(([f, t], i) => <Figure key={f} src={`/img/${f}.jpg`} caption={`Figura ${i + 1}. ${t}`} />)}
        </div>
        <h3 className="sub">Sistema en vivo</h3>
        <AppWindow url="https://learnpro-roles-pago-ecuador.vercel.app/#/" title="Roles de pago LearnPro"
          note="Sistema web de roles de pago desplegado en Vercel. Puede usarse aquí mismo, ampliarse o abrirse en otra pestaña." />
      </Section>
    </>
  )
}

/* ═════════════ MÓDULO 4 ═════════════ */
const TIPO = { 'Despido intempestivo': '#a8323f', Desahucio: '#2a78d6', 'Sin indemnización': '#c98500' }

export function Modulo4() {
  const s = m4.sigel
  return (
    <>
      <Section id="formas" title="Formas de terminación" source="APE 4; Ejercicios de liquidación; Caso Vizcaíno vs. EPMSA"
        lead="Clasificar la causa es el primer paso de toda liquidación: de ella dependen los rubros y las indemnizaciones.">
        <dl className="pairs pairs--cols">{m4.formas.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <div className="grid2">
          <Figure src="/img/caso-cronologia.jpg" caption="Cronología del caso Vizcaíno vs. EPMSA (2015-2021)" source="análisis de caso del equipo" />
          <Figure src="/img/caso-resolucion.jpg" caption="Resolución en primera instancia: rechazo de la demanda por despido ineficaz" source="análisis de caso del equipo" />
        </div>
      </Section>

      <Section id="calculos" title="Cálculo de liquidaciones" source="Ejercicios en la calculadora del Ministerio del Trabajo"
        lead="Diez casos resueltos en la calculadora del Ministerio del Trabajo, más el ejemplo base con y sin despido intempestivo.">
        <Stats items={[
          ['Ejemplo base sin despido', usd(m4.base.sinDespido), `Incluye desahucio de ${usd(m4.base.desahucio, 0)}`],
          ['Mismo caso con despido intempestivo', usd(m4.base.conDespido), `Añade la indemnización de ${usd(m4.base.indemnizacion, 0)} (Art. 188 CT)`],
        ]} />
        <HBars title="Liquidación total por caso" data={m4.casos.map((c) => [c[0], c[7], c[1]])} format={(v) => usd(v)} unit="USD"
          colorOf={(d) => TIPO[d[2]]} legend={Object.entries(TIPO)} />
        <Table caption="Detalle de los diez casos (USD)" head={['Caso', 'Terminación', 'Décimo tercero', 'Décimo cuarto', 'Vacaciones', 'Desahucio', 'Despido', 'Total']}
          rows={m4.casos.map((c) => [c[0], c[1], ...c.slice(2).map((v) => (v ? num(v) : '—'))])} numeric={[2, 3, 4, 5, 6, 7]} />
      </Section>

      <Section id="pazysalvo" title="Paz y salvo automatizado: SIGEL" source="APE 4, Despidos y liquidaciones laborales"
        lead="SIGEL registra el expediente, calcula la liquidación y genera un PDF que une el paz y salvo, la liquidación y los anexos de respaldo.">
        <ol className="steps">{s.funciones.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}</ol>
        <div className="grid2">
          <div>
            <h3 className="sub">Caso resuelto {s.caso}</h3>
            <p className="muted">Desahucio con renuncia y aviso previo, 4 años y 8 meses de servicio, sueldo de USD 880,00.</p>
            <Table head={['Rubro', 'USD']} rows={s.detalle.map(([k, v]) => [k, num(v)])} numeric={[1]}
              foot={['Total de ingresos', num(s.ingresos)]} />
            <Table head={['Liquidación', 'USD']} rows={[['(−) Aporte personal IESS 9,45 %', num(s.iess)]]} numeric={[1]}
              foot={['Valor neto a pagar', num(s.neto)]} />
          </div>
          <div className="stack">
            <Figure src="/img/sigel-bandeja.jpg" caption="Figura 1. Bandeja de expedientes" />
            <Figure src="/img/sigel-expediente.jpg" caption="Figura 2. Registro de un nuevo expediente" />
            <Figure src="/img/sigel-liquidacion.jpg" caption={`Figura 3. Liquidación del expediente ${s.caso}`} />
          </div>
        </div>
        <h3 className="sub">Sistema en vivo</h3>
        <AppWindow url="https://frontend-nine-wine-16.vercel.app/" title="SIGEL: paz y salvo"
          note="Aplicación SIGEL desplegada en Vercel. Puede usarse aquí mismo, ampliarse o abrirse en otra pestaña." />
        <p className="callout">Observación del informe: SIGEL admitió registros de prueba con datos incompletos y valor neto de USD 0,00, por lo que se recomienda exigir campos obligatorios antes de cerrar un paz y salvo.</p>
      </Section>

      <Section id="gamificacion" title="Gamificación" source="Laboral Hack (10/11/2026)">
        <Table caption="Laboral Hack: escape room digital de legislación laboral" head={['Participante', 'Puntaje', 'Tiempo']} rows={m4.hack} numeric={[1, 2]} />
      </Section>
    </>
  )
}
