// Contenido tomado textualmente de los trabajos del semestre (julio – diciembre 2026).
// No se generan casos ni cálculos nuevos: cada cifra proviene del documento citado en "fuente".

export const curso = {
  universidad: 'Universidad Técnica de Ambato',
  facultad: 'Facultad de Ingeniería en Sistemas, Electrónica e Industrial',
  carrera: 'Software',
  asignatura: 'Emprendimiento y Legislación Laboral',
  docente: 'Eco. María Francisca Cazorla Logroño, Mg.',
  ciclo: 'Julio – diciembre 2026',
  nivel: 'Octavo semestre, paralelo A',
  empresa: 'LearnPro S.A.S.',
  equipo: [
    { nombre: 'Giler Rizzo Neris David', rol: 'Socio fundador, jefe comercial y marca', ini: 'DG' },
    { nombre: 'Quishpe López Luis Alexander', rol: 'Socio fundador, jefe de tecnología', ini: 'LQ' },
    { nombre: 'Velastegui Eugenio Anthony Paul', rol: 'Gerente general y representante legal', ini: 'PV' },
  ],
}

export const docs = {
  idea: { titulo: 'Taller: de un problema a una oportunidad de negocio', archivo: 'm1-idea-de-negocio', paginas: 3, tipo: 'Taller grupal', fecha: 'Unidad 1' },
  perfil: { titulo: 'Ficha de perfil estratégico', archivo: 'm1-perfil-estrategico', paginas: 4, tipo: 'Taller grupal', fecha: '19/08/2026' },
  canvas: { titulo: 'Business Model Canvas', archivo: 'm1-modelo-canvas', paginas: 1, tipo: 'Taller grupal', fecha: '18/08/2026' },
  mercado: { titulo: 'Taller de mercado y operación', archivo: 'm1-mercado-operacion', paginas: 3, tipo: 'Taller grupal', fecha: '25/08/2026' },
  viabilidad: { titulo: 'Viabilidad financiera: plantilla automatizada', archivo: 'm1-viabilidad-financiera', paginas: 2, tipo: 'Estudio económico', fecha: 'Unidad 1' },
  pea1: { titulo: 'PEA 1: Plan de negocios de LearnPro', archivo: 'm1-pea1-plan-de-negocios', paginas: 54, tipo: 'Informe de guía práctica', fecha: 'Unidad 1' },
  ruc: { titulo: 'Taller individual: RUC y formalización', archivo: 'm2-taller-ruc', paginas: 8, tipo: 'Taller individual', fecha: '01/09/2026' },
  pea2: { titulo: 'PEA 2: Obligaciones tributarias de una PYME tecnológica', archivo: 'm2-pea2-obligaciones-tributarias', paginas: 19, tipo: 'Informe de guía práctica', fecha: 'Septiembre 2026' },
  factura: { titulo: 'Factura en el Facturador electrónico SRI', archivo: 'm2-factura-facturador-sri', paginas: 3, tipo: 'Práctica en clase', fecha: '02/09/2026' },
  iva: { titulo: 'Declaración de IVA en SRI en línea (formulario 2011)', archivo: 'm2-declaracion-iva-sri', paginas: 4, tipo: 'Práctica en clase', fecha: 'Período agosto 2026' },
  importacion: { titulo: 'Guía de importación: tecnología con restricciones en Ecuador', archivo: 'm2-importacion-tecnologia', paginas: 1, tipo: 'Infografía', fecha: 'Unidad 2' },
  marca: { titulo: 'Simulación del registro de marca y gamificación', archivo: 'm2-registro-de-marca', paginas: 5, tipo: 'Taller grupal', fecha: '15/09/2026' },
  pea3: { titulo: 'PEA 3: Contratación laboral y sistema de roles de pago', archivo: 'm3-pea3-contratacion-y-roles', paginas: 13, tipo: 'Plantilla de análisis comparativo', fecha: '21/10/2026' },
  linea: { titulo: 'Línea del tiempo y análisis de contratos', archivo: 'm3-linea-del-tiempo-contratos', paginas: 7, tipo: 'Taller grupal', fecha: 'Corte SUT 06/10/2026' },
  ape4: { titulo: 'APE 4: Despidos y liquidaciones laborales (SIGEL)', archivo: 'm4-ape4-liquidacion-sigel', paginas: 5, tipo: 'Informe de guía práctica', fecha: 'Noviembre 2026' },
  calculo: { titulo: 'Ejercicios de liquidación en la calculadora del Ministerio del Trabajo', archivo: 'm4-calculo-liquidaciones', paginas: 6, tipo: 'Taller práctico', fecha: 'Unidad 4' },
  caso: { titulo: 'Caso judicial: Vizcaíno vs. EPMSA (despido ineficaz)', archivo: 'm4-caso-despido-ineficaz', paginas: 9, tipo: 'Análisis de caso', fecha: 'Unidad 4' },
  hack: { titulo: 'Laboral Hack: escape room digital y Kahoot', archivo: 'm4-laboral-hack', paginas: 7, tipo: 'Gamificación', fecha: '10/11/2026' },
}

export const modulos = [
  {
    id: 1, slug: 'emprendimiento', nombre: 'Emprendimiento',
    resumen: 'Idea de negocio, modelo de negocio, plan empresarial y resultados económicos de LearnPro, la plataforma web que conecta a estudiantes universitarios con tutores independientes.',
    docs: ['idea', 'perfil', 'canvas', 'mercado', 'viabilidad', 'pea1'],
  },
  {
    id: 2, slug: 'tributario', nombre: 'Obligaciones tributarias',
    resumen: 'RUC simulado de LearnPro S.A.S., régimen RIMPE Emprendedor, comprobantes de venta, liquidación del IVA, facturación electrónica y registro de marca.',
    docs: ['ruc', 'pea2', 'factura', 'iva', 'importacion', 'marca'],
  },
  {
    id: 3, slug: 'nomina', nombre: 'Remuneraciones y nómina',
    resumen: 'Modalidades de contratación, jornada y horas extras, beneficios sociales y el sistema web de roles de pago que el equipo construyó para LearnPro.',
    docs: ['pea3', 'linea'],
  },
  {
    id: 4, slug: 'liquidacion', nombre: 'Liquidación laboral',
    resumen: 'Formas de terminación, cálculo de liquidaciones y SIGEL, la aplicación que automatiza el paz y salvo y arma el expediente con sus evidencias.',
    docs: ['ape4', 'calculo', 'caso', 'hack'],
  },
]

/* ───────── Módulo 1 ───────── */
export const m1 = {
  problema: 'Los estudiantes universitarios tienen dificultades para encontrar tutorías que se ajusten a sus necesidades, horarios y presupuesto. A su vez, los tutores independientes tienen dificultades para conseguir alumnos y aprovechar sus horarios disponibles.',
  alternativas: [
    'Tutores independientes con dificultad para conseguir alumnos (seleccionada)',
    'Negocios gastronómicos locales sin canales digitales de venta y pedidos',
    'Equipos y herramientas de uso ocasional que permanecen inactivos',
  ],
  pcsv: [
    ['Problema', 'Estudiantes sin tutorías ajustadas a su horario y presupuesto; tutores sin alumnos constantes.'],
    ['Cliente', 'Estudiantes universitarios y tutores independientes: estudiantes avanzados, profesionales y docentes.'],
    ['Solución', 'Plataforma web para comparar perfiles, horarios y precios, hacer ofertas y contraofertas y formar sesiones grupales.'],
    ['Valor', 'Tutorías más flexibles y económicas para el estudiante; más alumnos e ingresos para el tutor.'],
  ],
  canvas: [
    ['Socios clave', 'Universidades, centros de estudiantes y asociaciones. Pasarelas de pago y hosting en la nube. Embajadores estudiantiles y tutores referentes.', 'socios'],
    ['Actividades clave', 'Desarrollar y mantener la plataforma; captar y verificar estudiantes y tutores; gestionar pagos seguros, soporte y marketing.', 'actividades'],
    ['Recursos clave', 'Plataforma web, base de datos de usuarios y sistema de matching; servidores en la nube; equipo de desarrollo; capital inicial y marca.', 'recursos'],
    ['Propuesta de valor', 'Conectamos estudiantes con tutores según materia, horario, modalidad y presupuesto, con negociación de precios y sesiones grupales que bajan el costo individual.', 'valor'],
    ['Relaciones', 'Autoservicio para buscar, negociar y reservar; valoraciones y reseñas; soporte por chat y recordatorios.', 'relaciones'],
    ['Canales', 'Redes sociales, grupos de WhatsApp y Telegram universitarios, difusión en campus, referidos y plataforma web con registro gratuito.', 'canales'],
    ['Segmentos', 'Estudiantes que buscan tutorías económicas y flexibles; tutores independientes que buscan alumnos constantes.', 'segmentos'],
    ['Estructura de costos', 'Desarrollo y mantenimiento, servidores, hosting, comisiones de pasarela, marketing, soporte y costos legales iniciales.', 'costos'],
    ['Fuentes de ingresos', 'Comisión del 10-20 % por sesión concretada; freemium con funciones premium; suscripciones para tutores y posible publicidad educativa.', 'ingresos'],
  ],
  mision: 'Conectar a estudiantes universitarios con tutores independientes mediante una plataforma web confiable e interactiva, facilitando el acceso a tutorías personalizadas y grupales a precios accesibles mediante la negociación directa, impulsando el éxito académico y la generación de ingresos de nuestra comunidad.',
  vision: 'Para 2031, ser la plataforma líder de tutorías y aprendizaje colaborativo universitario a nivel nacional, reconocida por democratizar el apoyo académico personalizado mediante innovación tecnológica, flexibilidad económica y una comunidad de tutores de alta calidad.',
  foda: {
    Fortalezas: ['Capacidad técnica interna para desarrollar y mantener el software', 'Modelo innovador de negociación de precios y sesiones grupales'],
    Debilidades: ['Marca nueva con poco reconocimiento inicial', 'Presupuesto inicial limitado para marketing'],
    Oportunidades: ['Alta demanda de refuerzo en programación, cálculo, física y estadística', 'Crecimiento de las clases virtuales en educación superior'],
    Amenazas: ['Búsqueda informal de tutores por WhatsApp, Facebook y Telegram', 'Resistencia de tutores a pagar comisiones'],
  },
  estrategias: [
    ['FO', 'Matching rápido para materias de alta reprobación y alianzas con centros de estudiantes.'],
    ['DO', 'Campaña de embajadores universitarios de bajo costo a cambio de beneficios premium.'],
    ['FA', 'Promover sesiones grupales, valoraciones y pagos seguros frente a los canales informales.'],
    ['DA', 'Comisión de lanzamiento reducida y modelo freemium para atraer a tutores informales.'],
  ],
  competencia: [
    ['Producto', 'Tutorías universitarias con negociación de tarifas y sesiones grupales', 'Clases particulares presenciales y online en muchas materias', 'Tutorías online internacionales en idiomas y otras materias'],
    ['Precio', 'Comisión de 10-20 % por sesión; freemium', 'Programación desde $11/h; tutoría general desde $10/h', 'Entre $10 y $25/h en promedio'],
    ['Rasgo destacado', 'Negociación directa del precio y sesiones grupales', 'Primera clase gratuita en la mayoría de tutores', 'Comisión al tutor decreciente (33 % a 18 %)'],
    ['Fortaleza', 'Enfoque local y precio pensado para el estudiante', 'Reconocimiento de marca en Ecuador', 'Alcance internacional y tecnología robusta'],
  ],
  encuesta: {
    n: 25,
    areas: [['Programación y desarrollo', 41.7], ['Idiomas', 29.2], ['Diseño gráfico', 29.2], ['Marketing digital', 29.2], ['Análisis de datos', 25], ['Gestión de proyectos', 20.8]],
    formato: [['Ejercicios prácticos e interactivos', 68], ['Videos cortos', 36], ['Clases en vivo', 32], ['Documentación escrita', 28], ['Podcasts o audiolibros', 8]],
    horario: [['Noche (18:00-22:00)', 40], ['Tarde (12:00-18:00)', 24], ['Madrugada (22:00+)', 20], ['Mañana (6:00-12:00)', 16]],
    tiempo: [['Entre 3 y 5 horas', 52], ['Entre 5 y 10 horas', 36], ['Menos de 3 h o más de 10 h', 12]],
    experiencia: [['Avanzado', 60], ['Principiante', 24], ['Intermedio', 16]],
  },
  inversion: [
    ['Equipos / computadoras (3)', 1800], ['Desarrollo / implementación inicial', 1000], ['Publicidad de lanzamiento', 300],
    ['Herramientas / equipos técnicos', 100], ['Otros', 50], ['Software / licencias iniciales', 40], ['Dominio / sitio web', 20],
  ],
  costos: [
    ['Talento humano (3 personas)', 550, 'Fijo'], ['Publicidad digital', 100, 'Variable'], ['Comisión de pasarela (5,10 %)', 53.55, 'Variable'],
    ['Internet / telefonía', 40, 'Fijo'], ['Hosting / servidor cloud', 35, 'Fijo'], ['Licencias SaaS', 30, 'Fijo'], ['Mantenimiento y soporte', 20, 'Variable'],
  ],
  resultado: {
    inversion: 3310, costoMensual: 828.55, precio: 3.5, clientes: 300, ingresos: 1050,
    resultado: 221.45, margen: '21,1 %', recuperacion: '14,9 meses',
  },
}

/* ───────── Módulo 2 ───────── */
export const m2 = {
  ruc: [
    ['Número de RUC', '1899888777001'], ['Razón social', 'LEARNPRO S.A.S.'], ['Nombre comercial', 'LearnPro'],
    ['Representante legal', 'Velastegui Paul'], ['Tipo', 'Sociedad por Acciones Simplificada'], ['Régimen', 'RIMPE – Emprendedor'],
    ['Obligado a llevar contabilidad', 'Sí'], ['Agente de retención', 'No'], ['Inicio de actividades', '01/09/2026'],
    ['Domicilio', 'Av. Los Capulíes y Río Chico, Ambato'], ['Establecimientos', '1 (001 – Matriz)'],
  ],
  ciiu: [
    ['Principal', 'J631200', 'Operación de la plataforma que conecta estudiantes y profesores con precio negociado'],
    ['Secundaria 1', 'J620101', 'Desarrollo y personalización de módulos para instituciones'],
    ['Secundaria 2', 'J620210', 'Consultoría para implementar tutorías y aulas virtuales'],
  ],
  regimen: 'RIMPE Emprendedor: ingresos proyectados de USD 36.000 el primer año, dentro del límite de USD 300.000 para sociedades. LearnPro intermedia las tutorías sin dictarlas, por lo que su actividad no está excluida del régimen.',
  catastro: [
    ['Datilmedia S.A.', 'Tecnológico', 'J6202.10'], ['Libélula Soft', 'Tecnológico', 'J6201.01'], ['IBM del Ecuador C.A.', 'Tecnológico', 'G4651'],
    ['Corporación Favorita C.A.', 'Comercio', 'G4711.01'], ['Cervecería Nacional CN S.A.', 'Manufactura', 'C1103.01'],
  ],
  ventas: [
    ['05/09/2026', 'Factura 001-001-000000001', 'Instituto Nuevo Amanecer', 2150, 0, 322.5, 2472.5],
    ['12/09/2026', 'Nota de crédito 001-001-000000001', 'Instituto Nuevo Amanecer', -85, 0, -12.75, -97.75],
    ['15/09/2026', 'Nota de débito 001-001-000000001', 'Instituto Nuevo Amanecer', 40, 0, 6, 46],
    ['20/09/2026', 'Factura 001-001-000000002 (exportación)', 'BrightPath Tutoring LLC', 0, 1200, 0, 1200],
    ['30/09/2026', 'Factura 001-001-000000003 (comisión)', 'Torres Mena Ana Lucía', 45, 0, 6.75, 51.75],
  ],
  ventasTotal: [2150, 1200, 322.5, 3672.5],
  compras: [
    ['10/09/2026', 'Factura 002-001-000004521 (activo fijo)', 'Computrónica Ambato S.A.', 1330, 0, 199.5, 1529.5],
    ['18/09/2026', 'Nota de venta 001-001-000000123', 'Papelería "Don Lucho"', 0, 35, 0, 35],
    ['30/09/2026', 'Factura 001-010-000123456', 'Fibranet Ecuador S.A.', 30, 0, 4.5, 34.5],
  ],
  comprasTotal: [1360, 35, 204, 1599],
  iva: { generado: 322.5, credito: 204, pagar: 118.5, vence: '22 de enero de 2027' },
  pasosFE: [
    ['Firma electrónica', 'Obtener el certificado .p12 en una entidad acreditada.'],
    ['Habilitación en el SRI', 'Solicitar el ambiente de pruebas en SRI en línea y luego el de producción.'],
    ['Herramienta de emisión', 'Facturador electrónico del SRI, establecimiento 001 y punto de emisión 001.'],
    ['Generación y firma', 'Se genera el XML con la clave de acceso de 49 dígitos y se firma.'],
    ['Envío y autorización', 'El SRI valida y autoriza; la clave de acceso es el número de autorización.'],
    ['Entrega y conservación', 'XML y RIDE al cliente por correo; conservar 7 años.'],
  ],
  importacion: [
    ['Teléfonos celulares', 'Certificado de homologación', 'ARCOTEL'],
    ['Drones / UAS', 'Registro y licencia de operación', 'DGAC'],
    ['Decodificadores satelitales FTA', 'Importación prohibida', 'COMEX / SENAE'],
    ['Dispositivos médicos tecnológicos', 'Registro o notificación sanitaria', 'ARCSA'],
    ['Equipos emisores de radiación ionizante', 'Licencia de importación', 'SCAN'],
  ],
  marca: [
    ['Signo', 'LearnPro, mixto (denominativo + figurativo)'], ['Clase de Niza', '41: educación y formación'],
    ['Búsqueda fonética', '3 referencias (GR LearnPro, LMS Pro LATAM, LearnPro Group): riesgo de confusión bajo en Ecuador'],
    ['Tasas', 'Búsqueda fonética USD 16,00; registro USD 208,00 por clase'], ['Vigencia', '10 años, renovable'],
  ],
  obligaciones: [
    ['Inscripción y actualización del RUC', 'Al inicio y ante cambios', 'SRI'],
    ['Sujeción al RIMPE Emprendedor', 'Verificación anual', 'SRI'],
    ['Emisión de comprobantes de venta', 'Cada transacción', 'SRI'],
    ['Documentos complementarios (NC, ND, guía)', 'Cada ajuste o traslado', 'SRI'],
    ['Exigir comprobantes en compras', 'Cada compra', 'SRI'],
    ['Llevar contabilidad', 'Permanente', 'SRI'],
    ['Declaración del IVA (formulario 104)', 'Semestral', 'SRI'],
    ['Declaración de IR RIMPE', 'Anual', 'SRI'],
    ['Facturación y firma electrónica', 'Permanente', 'SRI'],
    ['Exportación de servicios con IVA 0 %', 'Cada operación', 'SRI'],
    ['Crédito tributario por adquisiciones', 'Cada declaración', 'SRI'],
    ['Registro de marca', 'Única, 10 años', 'SENADI'],
    ['Patente municipal', 'Anual', 'GAD Ambato'],
    ['Permiso de bomberos', 'Anual', 'Bomberos Ambato'],
    ['Obligaciones laborales e IESS', 'Mensual', 'IESS / MDT'],
    ['Obligaciones societarias', 'Anual', 'Supercias'],
  ],
}

/* ───────── Módulo 3 ───────── */
export const m3 = {
  casos: [
    ['1', 'Ministerio de Educación, Distrital Colta-Guamote', 'Nombramiento permanente', 'LOSEP', 'USD 1.676,00'],
    ['2', 'EP Gasolinera Politécnica ESPOCH', 'Libre nombramiento y remoción', 'LOEP', 'USD 2.034,00'],
    ['3', 'EP Gasolinera Politécnica ESPOCH', 'Servicios ocasionales', 'LOSEP Art. 58', 'No consta'],
    ['4', 'UTA – FISEI', 'Profesora ocasional, tiempo completo', 'LOES', 'USD 2.000,00'],
    ['5', 'EP Movilidad Rutas de Riobamba', 'Servicios ocasionales', 'LOEP', 'USD 675,00'],
    ['6', 'Empleador privado (modelo)', 'Jornada parcial permanente', 'Código del Trabajo', 'Proporcional al SBU'],
    ['7', 'Empleador privado (modelo)', 'Plazo indefinido', 'Código del Trabajo', 'No inferior al SBU'],
  ],
  sut: { contratos: '11.698', empresas: '2.302', mujeres: '3.861 (33 %)', hombres: '7.837 (67 %)', corte: '06/10/2026' },
  sutModalidades: [['Indefinido', 7787], ['Otras modalidades', 2377], ['Obra o servicio determinado', 961], ['Jornada parcial permanente', 492]],
  contratos: [
    ['Novandes Servicios Corporativos S.A.', 'Código del Trabajo', 'NO CUMPLE: 47,5 h semanales; horas extra sin pago (deben pagarse con recargo del 50 %, 100 % nocturnas)', 'CUMPLE: USD 500 > SBU 2026 de USD 482', 'NO CUMPLE: vacaciones solo a los dos años; IESS tras el período de prueba'],
    ['G.A.M. de Valle Verde (ficticio)', 'LOSEP', 'NO CUMPLE: 47,5 h semanales y disponibilidad sin pago', 'CUMPLE: RMU USD 850', 'NO CUMPLE: 15 días en lugar de 30'],
    ['Universidad Pública del Centro (ficticia)', 'LOES', 'NO CUMPLE: 48 h en lugar de 40', 'NO CUMPLE: rebaja unilateral del sueldo', 'NO CUMPLE: elimina las vacaciones'],
  ],
  horasExtra: [
    ['Jornada ordinaria', '8 h diarias y 40 h semanales (CT Art. 47)'],
    ['Horas suplementarias', 'Recargo del 50 %, máximo 4 h diarias y 12 semanales (CT Art. 55)'],
    ['Horas extraordinarias y nocturnas', 'Recargo del 100 % (CT Art. 55)'],
    ['Hallazgo en el sistema', 'El parámetro estaba en 25 %; debe corregirse a 50 % antes de usarlo con roles reales'],
  ],
  parametros: [['SBU 2026', 'USD 482'], ['Aporte personal IESS', '9,45 %'], ['Aporte patronal IESS', '11,15 %'], ['Fondos de reserva', '8,33 %'], ['Jornada', '8 h sobre 30 días']],
  escalas: [['Gerencia general', 1800], ['Jefaturas', 1400], ['Coordinación académica', 1100], ['Sistemas', 959], ['Administración y contabilidad', 900]],
  beneficios: [
    ['Décimo tercero', 'Sueldo ÷ 12, mensualizado (CT Art. 111)'],
    ['Décimo cuarto', 'SBU ÷ 12 = 482 ÷ 12 = USD 40,17 (CT Art. 113)'],
    ['Fondos de reserva', '8,33 % del sueldo desde el segundo año (CT Art. 196)'],
    ['Vacaciones', '15 días por año completo (CT Art. 69)'],
    ['Utilidades', '15 % (CT Art. 97)'],
  ],
  roles: {
    cols: ['Quishpe López Luis Alexander (A2, más de 1 año)', 'Andrade Ruiz Carlos Andrés (A3, primer año)'],
    filas: [
      ['Sueldo mensual', '1.400,00', '959,00'],
      ['Décimo tercero mensualizado (÷12)', '116,67', '79,92'],
      ['Décimo cuarto mensualizado (482 ÷ 12)', '40,17', '40,17'],
      ['Fondos de reserva (8,33 %)', '116,62', '0,00'],
      ['Total ingresos', '1.673,46', '1.079,09'],
      ['Aporte personal IESS (9,45 %)', '132,30', '90,63'],
      ['Neto a recibir', '1.541,16', '988,46'],
      ['Aporte patronal IESS (11,15 %)', '156,10', '106,93'],
    ],
  },
  consolidado: { ingresos: 8813.13, egresos: 714.33, neto: 8098.8, roles: 6 },
  capturas: [
    ['roles-1', 'Configuración: datos de la empresa'], ['roles-2', 'Configuración: parámetros de nómina'],
    ['roles-3', 'Escalas salariales por puesto'], ['roles-4', 'Registro de empleados'],
    ['roles-5', 'Generación del rol de pago'], ['roles-6', 'Historial de roles'], ['roles-7', 'Reportes: septiembre de 2026'],
  ],
}

/* ───────── Módulo 4 ───────── */
export const m4 = {
  formas: [
    ['Desahucio', 'Aviso previo de terminación. Genera una bonificación del 25 % del último sueldo por cada año de servicio, además de los haberes pendientes.'],
    ['Despido intempestivo', 'Terminación sin causa justa. Añade la indemnización del Art. 188 del Código del Trabajo al desahucio y a los haberes.'],
    ['Terminación sin indemnización', 'Se liquidan solo los beneficios proporcionales: décimos y vacaciones no gozadas.'],
    ['Despido ineficaz', 'Despido de una trabajadora embarazada (CT Art. 195.1). En el caso Vizcaíno vs. EPMSA la demanda se rechazó porque el embarazo no se había notificado.'],
  ],
  base: { sinDespido: 8921.57, conDespido: 32395.57, indemnizacion: 23474, desahucio: 5335 },
  // [caso, tipo, décimo tercero, décimo cuarto, vacaciones, desahucio, despido, total]
  casos: [
    ['Caso 1', 'Desahucio', 2021.33, 135.23, 1229.18, 5335, 0, 8720.74],
    ['Caso 2', 'Desahucio', 38.2, 336.06, 275.83, 1875, 0, 2525.09],
    ['Caso 3', 'Desahucio', 1686.02, 135.23, 699.54, 890, 0, 3410.79],
    ['Caso 4', 'Sin indemnización', 29.03, 135.23, 402.48, 0, 0, 566.74],
    ['Caso 5', 'Sin indemnización', 2273.33, 336.06, 768.8, 0, 0, 3378.19],
    ['Caso 6', 'Sin indemnización', 22.92, 135.23, 74, 0, 0, 232.15],
    ['Caso 7', 'Sin indemnización', 1041.98, 336.06, 296.27, 0, 0, 1674.31],
    ['Caso 8', 'Despido intempestivo', 50.42, 135.23, 699.6, 3712.5, 16500, 21097.75],
    ['Caso 9', 'Despido intempestivo', 1989.17, 135.23, 1465.1, 7350, 31500, 42439.5],
    ['Caso 10', 'Desahucio', 2652.18, 336.06, 793.33, 14700, 0, 18481.57],
  ],
  sigel: {
    funciones: [
      ['Bandeja de trabajo', 'Lista los expedientes con trabajador, empresa, causa, valor neto y estado del paz y salvo.'],
      ['Nuevo expediente', 'Registra al empleador (RUC, representante) y al trabajador (sueldo, cargo, fechas, jefe inmediato).'],
      ['Liquidación', 'Con SBU, vacaciones pendientes, días del mes de salida, IESS y anticipos calcula haberes, egresos y neto.'],
      ['Expediente PDF', 'Une el paz y salvo, la liquidación y los anexos de respaldo de cada requisito en un solo documento.'],
    ],
    caso: 'EXP-ALC-2026-014',
    detalle: [
      ['Remuneración proporcional (14 días)', 410.62], ['Vacaciones pendientes (18 días)', 527.94],
      ['Décimo tercero proporcional', 840.89], ['Décimo cuarto proporcional', 135.78], ['Bonificación por desahucio', 880],
    ],
    ingresos: 2795.23, iess: 38.8, neto: 2756.43,
  },
  hack: [['Grupo 3 Velastegui', '95 / 100', '04:20'], ['Luis Quishpe', '75 / 100', '05:46']],
}

/* ───────── Enlaces oficiales ───────── */
// Catálogo de enlaces externos (verificados en noviembre de 2026). `tipo` define la etiqueta visible.
export const links = {
  // SRI
  sriPortal: { t: 'Portal del SRI', u: 'https://www.sri.gob.ec', e: 'SRI', tipo: 'Portal' },
  sriLinea: { t: 'SRI en línea (declaraciones y trámites)', u: 'https://srienlinea.sri.gob.ec/sri-en-linea/inicio/NAT', e: 'SRI', tipo: 'Trámite' },
  sriConsultaRuc: { t: 'Consulta de RUC', u: 'https://srienlinea.sri.gob.ec/sri-en-linea/SriRucWeb/ConsultaRuc/Consultas/consultaRuc', e: 'SRI', tipo: 'Consulta' },
  sriRucSoc: { t: 'Inscripción de RUC para sociedades', u: 'https://www.sri.gob.ec/ruc-sociedades', e: 'SRI', tipo: 'Trámite' },
  sriRucPN: { t: 'Inscripción de RUC para personas naturales', u: 'https://www.sri.gob.ec/ruc-personas-naturales', e: 'SRI', tipo: 'Trámite' },
  sriCatastros: { t: 'Catastros del SRI', u: 'https://www.sri.gob.ec/catastros', e: 'SRI', tipo: 'Consulta' },
  sriDatos: { t: 'Datos abiertos del SRI (catastro del RUC)', u: 'https://www.sri.gob.ec/datasets', e: 'SRI', tipo: 'Consulta' },
  sriRimpe: { t: 'Régimen RIMPE', u: 'https://www.sri.gob.ec/rimpe', e: 'SRI', tipo: 'Guía' },
  sriGuia: { t: 'Guía básica tributaria', u: 'https://www.sri.gob.ec/guia-basica-tributaria', e: 'SRI', tipo: 'Guía' },
  sriIva: { t: 'Impuesto al Valor Agregado (IVA)', u: 'https://www.sri.gob.ec/impuesto-al-valor-agregado-iva', e: 'SRI', tipo: 'Guía' },
  sriFormularios: { t: 'Formularios e instructivos (104 y 2011)', u: 'https://www.sri.gob.ec/formularios-e-instructivos1', e: 'SRI', tipo: 'Formulario' },
  sriCalendario: { t: 'Calendario tributario', u: 'https://www.sri.gob.ec/calendario-responsabilidades-tributarias', e: 'SRI', tipo: 'Consulta' },
  sriFE: { t: 'Facturación electrónica', u: 'https://www.sri.gob.ec/facturacion-electronica', e: 'SRI', tipo: 'Guía' },
  sriFacturador: { t: 'Facturador SRI (gratuito)', u: 'https://www.sri.gob.ec/facturador-sri', e: 'SRI', tipo: 'Herramienta' },
  sriComprobantes: { t: 'Comprobantes electrónicos', u: 'https://www.sri.gob.ec/comprobantes-electronicos', e: 'SRI', tipo: 'Guía' },
  sriValidez: { t: 'Validez de comprobantes electrónicos', u: 'https://srienlinea.sri.gob.ec/comprobantes-electronicos-internet/publico/validezComprobantes.jsf', e: 'SRI', tipo: 'Consulta' },
  sriEmisores: { t: 'Consulta de emisores autorizados', u: 'https://srienlinea.sri.gob.ec/comprobantes-electronicos-internet/publico/validezEmisor.jsf', e: 'SRI', tipo: 'Consulta' },
  // Firma electrónica
  firmaRC: { t: 'Firma electrónica del Registro Civil', u: 'https://www.firmadigital.gob.ec', e: 'Registro Civil', tipo: 'Trámite' },
  firmaBCE: { t: 'Certificación electrónica del Banco Central', u: 'https://www.eci.bce.ec', e: 'BCE', tipo: 'Trámite' },
  // Marca
  senadi: { t: 'Portal del SENADI', u: 'https://www.derechosintelectuales.gob.ec', e: 'SENADI', tipo: 'Portal' },
  senadiTasas: { t: 'Tasas del SENADI', u: 'https://www.derechosintelectuales.gob.ec/tasas/', e: 'SENADI', tipo: 'Consulta' },
  senadiServicios: { t: 'Servicios en línea del SENADI (búsqueda fonética y solicitudes)', u: 'https://www.derechosintelectuales.gob.ec/catalogo-de-servicios-web/', e: 'SENADI', tipo: 'Trámite' },
  niza: { t: 'Clasificación de Niza', u: 'https://www.wipo.int/classifications/nice/es/', e: 'OMPI', tipo: 'Guía' },
  nizaBuscar: { t: 'Buscador de clases de Niza (NCLPub)', u: 'https://nclpub.wipo.int/es/', e: 'OMPI', tipo: 'Herramienta' },
  // Comercio exterior
  senae: { t: 'Aduana del Ecuador (SENAE)', u: 'https://www.aduana.gob.ec', e: 'SENAE', tipo: 'Portal' },
  ecuapass: { t: 'ECUAPASS y Ventanilla Única', u: 'https://ecuapass.aduana.gob.ec', e: 'SENAE', tipo: 'Trámite' },
  arcotel: { t: 'Homologación de equipos de telecomunicaciones', u: 'https://www.arcotel.gob.ec/homologacion-de-equipos-de-telecomunicaciones/', e: 'ARCOTEL', tipo: 'Trámite' },
  arcsa: { t: 'Agencia de Regulación y Control Sanitario', u: 'https://www.controlsanitario.gob.ec', e: 'ARCSA', tipo: 'Portal' },
  dgac: { t: 'Dirección General de Aviación Civil (drones)', u: 'https://www.aviacioncivil.gob.ec', e: 'DGAC', tipo: 'Portal' },
  produccion: { t: 'Ministerio de Producción, Comercio Exterior e Inversiones', u: 'https://www.produccion.gob.ec', e: 'MPCEIP', tipo: 'Portal' },
  // Sociedades y local
  supercias: { t: 'Superintendencia de Compañías', u: 'https://www.supercias.gob.ec', e: 'Supercias', tipo: 'Portal' },
  superciasConsulta: { t: 'Consulta de compañías', u: 'https://appscvsgen.supercias.gob.ec/consultaCompanias/societario/busquedaCompanias.jsf', e: 'Supercias', tipo: 'Consulta' },
  ambato: { t: 'GAD Municipalidad de Ambato (patente municipal)', u: 'https://ambato.gob.ec', e: 'GAD Ambato', tipo: 'Trámite' },
  bomberos: { t: 'Bomberos de Ambato (permiso de funcionamiento)', u: 'https://bomberosambato.gob.ec', e: 'Bomberos Ambato', tipo: 'Trámite' },
  // Ministerio del Trabajo
  mdt: { t: 'Ministerio del Trabajo', u: 'https://www.trabajo.gob.ec', e: 'MDT', tipo: 'Portal' },
  sut: { t: 'Sistema Único de Trabajo (SUT): contratos, actas de finiquito, décimos y utilidades', u: 'https://sut.trabajo.gob.ec', e: 'MDT', tipo: 'Trámite' },
  mdtNormativa: { t: 'Biblioteca normativa (Código del Trabajo y acuerdos)', u: 'https://www.trabajo.gob.ec/biblioteca/', e: 'MDT', tipo: 'Guía' },
  calcPortal: { t: 'Calculadoras del Ministerio del Trabajo', u: 'https://calculadoras.trabajo.gob.ec/', e: 'MDT', tipo: 'Calculadora' },
  calcLiquidacion: { t: 'Calculadora de liquidaciones', u: 'https://calculadoras.trabajo.gob.ec/liquidaciones', e: 'MDT', tipo: 'Calculadora' },
  calcTercero: { t: 'Calculadora del décimo tercer sueldo', u: 'https://calculadoras.trabajo.gob.ec/tercero', e: 'MDT', tipo: 'Calculadora' },
  calcCuarto: { t: 'Calculadora del décimo cuarto sueldo', u: 'https://calculadoras.trabajo.gob.ec/cuarto', e: 'MDT', tipo: 'Calculadora' },
  calcSalarioDigno: { t: 'Calculadora de la compensación por salario digno', u: 'https://calculadoras.trabajo.gob.ec/salarioDigno', e: 'MDT', tipo: 'Calculadora' },
  // IESS
  iess: { t: 'Instituto Ecuatoriano de Seguridad Social', u: 'https://www.iess.gob.ec', e: 'IESS', tipo: 'Portal' },
  iessEmpleadores: { t: 'Servicios para empleadores (avisos de entrada y salida, planillas)', u: 'https://www.iess.gob.ec/empleadores/', e: 'IESS', tipo: 'Trámite' },
  iessSistema: { t: 'Sistema de empleadores del IESS', u: 'https://www.iess.gob.ec/empleador-web/pages/principal.jsf', e: 'IESS', tipo: 'Trámite' },
  iessAfiliacion: { t: 'Solicitud de afiliación', u: 'https://app.iess.gob.ec/iess-gestion-solicitud-afiliado-web/public/pagina.jsf', e: 'IESS', tipo: 'Trámite' },
  iessTerminacion: { t: 'Resolución sobre terminación de contrato', u: 'https://www.iess.gob.ec/es/web/guest/resolucion-terminacion-de-contrato', e: 'IESS', tipo: 'Guía' },
  // Justicia
  esatje: { t: 'Consulta de procesos judiciales (eSATJE)', u: 'https://procesosjudiciales.funcionjudicial.gob.ec', e: 'Función Judicial', tipo: 'Consulta' },
  funcionJudicial: { t: 'Función Judicial del Ecuador', u: 'https://www.funcionjudicial.gob.ec', e: 'Función Judicial', tipo: 'Portal' },
  // Emprendimiento y mercado
  inec: { t: 'Ecuador en cifras (INEC)', u: 'https://www.ecuadorencifras.gob.ec', e: 'INEC', tipo: 'Consulta' },
  canvas: { t: 'Business Model Canvas (plantilla oficial)', u: 'https://www.strategyzer.com/library/the-business-model-canvas', e: 'Strategyzer', tipo: 'Herramienta' },
  superprof: { t: 'Superprof Ecuador (competidor)', u: 'https://www.superprof.com.ec', e: 'Competencia', tipo: 'Referencia' },
  preply: { t: 'Preply (competidor)', u: 'https://preply.com/es/', e: 'Competencia', tipo: 'Referencia' },
  cfn: { t: 'Corporación Financiera Nacional (créditos)', u: 'https://www.cfn.fin.ec', e: 'CFN', tipo: 'Portal' },
  banecuador: { t: 'BanEcuador (créditos para emprendedores)', u: 'https://www.banecuador.fin.ec', e: 'BanEcuador', tipo: 'Portal' },
  // Sistemas del equipo
  appRoles: { t: 'Sistema de roles de pago LearnPro', u: 'https://learnpro-roles-pago-ecuador.vercel.app/#/', e: 'Equipo LearnPro', tipo: 'Sistema' },
  appSigel: { t: 'SIGEL: paz y salvo y liquidación', u: 'https://frontend-nine-wine-16.vercel.app/', e: 'Equipo LearnPro', tipo: 'Sistema' },
}

// Enlaces por apartado (id de sección)
export const enlaces = {
  idea: ['inec', 'produccion'],
  modelo: ['canvas'],
  plan: ['superprof', 'preply', 'inec', 'superciasConsulta'],
  economico: ['cfn', 'banecuador', 'supercias'],
  ruc: ['sriConsultaRuc', 'sriRucSoc', 'sriRucPN', 'sriRimpe', 'sriCatastros', 'sriDatos', 'sriLinea', 'superciasConsulta'],
  iva: ['sriLinea', 'sriIva', 'sriFormularios', 'sriCalendario', 'sriValidez', 'sriGuia'],
  'documentos-tributarios': ['sriFacturador', 'sriFE', 'sriComprobantes', 'sriEmisores', 'firmaRC', 'firmaBCE', 'ecuapass', 'senae', 'arcotel', 'arcsa', 'dgac'],
  marca: ['senadiServicios', 'senadiTasas', 'senadi', 'niza', 'nizaBuscar'],
  matriz: ['sriLinea', 'sriCalendario', 'senadi', 'ambato', 'bomberos', 'iessEmpleadores', 'mdt', 'supercias'],
  contratacion: ['sut', 'mdt', 'mdtNormativa', 'iessAfiliacion'],
  horas: ['mdtNormativa', 'calcPortal'],
  beneficios: ['calcTercero', 'calcCuarto', 'calcSalarioDigno', 'sut', 'iessEmpleadores'],
  roles: ['appRoles', 'iessSistema', 'iessEmpleadores', 'calcTercero', 'calcCuarto'],
  formas: ['mdtNormativa', 'iessTerminacion', 'esatje', 'funcionJudicial'],
  calculos: ['calcLiquidacion', 'calcTercero', 'calcCuarto', 'calcPortal'],
  pazysalvo: ['appSigel', 'sut', 'iessEmpleadores', 'calcLiquidacion'],
  gamificacion: ['mdtNormativa'],
}

// Accesos rápidos visibles en la cabecera de todas las páginas
export const accesosRapidos = ['sriLinea', 'sriConsultaRuc', 'calcLiquidacion', 'sut', 'iessSistema', 'senadiServicios']

// Grupos para la página de enlaces
export const gruposEnlaces = [
  ['SRI: RUC, IVA y facturación', ['sriPortal', 'sriLinea', 'sriConsultaRuc', 'sriRucSoc', 'sriRucPN', 'sriRimpe', 'sriCatastros', 'sriDatos', 'sriIva', 'sriFormularios', 'sriCalendario', 'sriFE', 'sriFacturador', 'sriComprobantes', 'sriValidez', 'sriEmisores', 'sriGuia']],
  ['Ministerio del Trabajo: calculadoras y trámites', ['calcLiquidacion', 'calcTercero', 'calcCuarto', 'calcSalarioDigno', 'calcPortal', 'sut', 'mdt', 'mdtNormativa']],
  ['IESS: seguridad social', ['iessSistema', 'iessEmpleadores', 'iessAfiliacion', 'iessTerminacion', 'iess']],
  ['Firma electrónica', ['firmaRC', 'firmaBCE']],
  ['Propiedad intelectual: registro de marca', ['senadiServicios', 'senadiTasas', 'senadi', 'niza', 'nizaBuscar']],
  ['Compañías, municipio y permisos', ['supercias', 'superciasConsulta', 'ambato', 'bomberos']],
  ['Comercio exterior e importaciones', ['ecuapass', 'senae', 'arcotel', 'arcsa', 'dgac', 'produccion']],
  ['Justicia laboral', ['esatje', 'funcionJudicial']],
  ['Emprendimiento y mercado', ['canvas', 'inec', 'cfn', 'banecuador', 'superprof', 'preply']],
  ['Sistemas desarrollados por el equipo', ['appRoles', 'appSigel']],
]
