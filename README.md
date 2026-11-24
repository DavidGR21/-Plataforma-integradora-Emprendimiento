# LearnPro S.A.S. – Plataforma integradora

Dashboard del proyecto final de **Emprendimiento y Legislación Laboral** (UTA – FISEI, ciclo julio – diciembre 2026).
Integra los trabajos del semestre en cuatro módulos: Emprendimiento, Obligaciones tributarias, Remuneraciones y nómina, y Liquidación laboral.

## Ejecutar en local
```bash
npm install
npm run dev
```

## Publicar en Vercel
1. Suba esta carpeta a un repositorio de GitHub.
2. En vercel.com elija **Add New → Project**, importe el repositorio y deje los valores detectados (Framework: Vite, Build: `npm run build`, Output: `dist`).
3. Pulse **Deploy**. El archivo `vercel.json` ya hace que las rutas `/modulo/...` funcionen al recargar.

También puede usar la CLI: `npm i -g vercel` y luego `vercel` dentro de la carpeta.

## Dónde está cada cosa
- `src/data.js`: todo el contenido y las cifras, tomadas de los trabajos originales.
- `public/docs/`: los 18 PDF del semestre.
- `public/img/`, `public/thumbs/`: evidencias y miniaturas.
