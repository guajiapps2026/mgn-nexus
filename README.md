# MGn NEXUS — Centro de Inteligencia Digital

Fase 1: estructura base, navegación e identidad visual "dorado tecnológico".
Sin datos y sin integraciones externas todavía.

## Cómo ejecutarlo en tu computadora

Requisito: Node.js 20 o superior (https://nodejs.org).

```bash
cd mgn-nexus
npm install
npm run dev
```

Abre la dirección que aparece (normalmente http://localhost:5173).

## Cómo comprobar la versión de producción

```bash
npm run build     # debe terminar sin errores
npm run preview   # abre http://localhost:4173
```

## Cómo probar la Fase 1

1. **Inicio:** se ve el logotipo MGn NEXUS en dorado, el panel con ceros (no hay datos) y la ruta de desarrollo.
2. **Navegación en computadora/tableta:** la barra lateral lleva a Inicio y a los 7 módulos; el módulo activo se marca en dorado.
3. **Navegación en teléfono:** barra inferior con Inicio, Projects, Products, Assistant y Más (Creator, Growth, AI Tools, Settings).
4. **Módulos:** cada uno muestra "Módulo aún no implementado", la fase en que se construye y lo que incluirá.
5. **Enlace directo:** abrir `/projects` directamente (o recargar) debe funcionar.
6. **Ruta inexistente:** `/cualquier-cosa` muestra la página 404.
7. **Adaptación:** reduce el ancho de la ventana; no debe aparecer desplazamiento horizontal.

## Despliegue en Netlify (gratis)

`netlify.toml` y `public/_redirects` ya están listos. En Netlify: "Add new site" → importar el repositorio
(o arrastrar la carpeta `dist` tras `npm run build`). Comando de build: `npm run build`; carpeta: `dist`.

## Estructura

```
src/config/modules.ts   Definición única de módulos, fases y estados de acción
src/components/         Logo, Sidebar, MobileNav, Topbar
src/layout/AppLayout    Estructura general
src/pages/              Dashboard, ModulePage (marcador de módulo), NotFound
tailwind.config.js      Paleta oficial (azul noche, dorado, azul eléctrico, gris claro)
docs/DECISIONES.md      Registro de decisiones y estado del proyecto
```
