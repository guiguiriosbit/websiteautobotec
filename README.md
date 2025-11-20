# Autobotec (Vite + React + TypeScript)

Proyecto creado con Vite, React y TypeScript. Instrucciones para ejecutar localmente y pasos recomendados.

Requisitos
- Node.js 18+ (o la versión LTS más reciente)
- npm (incluido con Node.js)

Instalación

1. Instala dependencias:

   npm install

2. Levanta el servidor de desarrollo:

   npm run dev

3. Construir para producción:

   npm run build

Chequeos útiles

- Comprobación de tipos TypeScript:

  npm run typecheck

- Ejecutar linter:

  npm run lint

Notas sobre seguridad

Después de la instalación detectamos algunas vulnerabilidades en dependencias de desarrollo (ejecuta `npm audit` para detalles). Puedes intentar corregir las que tengan arreglo automático con:

  npm audit fix

Si `npm audit fix` no corrige todo, revisa las dependencias transitivas o actualiza las versiones explícitas en `package.json`.

Status local comprobado

- npm install: OK (dependencias instaladas)
- npm run dev: OK (Vite sirviendo en http://localhost:5173)
- npm run build: OK (build completado)

Si necesitas que actualice dependencias (por ejemplo subir Vite o esbuild a una versión sin vulnerabilidades), indícame si quieres que haga los cambios y correré las actualizaciones y pruebas.
autobotecweb
