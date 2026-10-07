# Cuatro años juntos · Para Jeni

Una historia de aniversario con React, TypeScript y Vite. Cuatro años juntos, tres de casados: antes del sí, la boda y tres capítulos. Una sola página con fotos reales y scroll natural, completamente en español.

## Ejecutar

```sh
npm install
npm run dev
```

Abrí http://127.0.0.1:5173/. El servidor usa ese puerto fijo.

```sh
npm run build
npm run preview
```

El build estático queda en `dist/`. La vista previa del build usa http://127.0.0.1:4173/.

## Personalizar: un solo archivo

**`src/data/story.ts`** contiene todas las fotos, los textos personales, la carta, los controles y las opciones de cada escena. Hay 38 fotos seleccionadas: 37 en el recorrido y una en la sorpresa. La música elegida es «Can't Help Falling in Love», de Elvis Presley, y se activa al tocar el control de sonido. **`FOTOS.md`** relaciona cada identificador con el archivo original y registra las cuatro fotos reservadas.

- `photos`: rutas, descripciones accesibles, proporciones y punto de recorte.
- `years`: títulos, introducciones, recuerdos y transiciones.
- `story.prelude`: fotos de novios y recuerdos de la boda, antes del primer año de casados.
- `story.meta` y `story.opening`: dedicatoria, firma, apertura y tiempos.
- `story.ending`: año cuatro, tiempos, carta, foto final y despedida.
- `story.ui`: navegación, sonido, errores y etiquetas accesibles.
- `story.easterEgg`: única sorpresa, en el asterisco del pie.
- `story.audio`: ruta opcional y volumen de la música.

Los metadatos de la pestaña se actualizan desde este archivo. `index.html` conserva los mismos valores como respaldo antes de cargar React.

## Reemplazar una foto

Guardá tu fotografía en `public/images/ano-1/viaje.webp`. Buscá su identificador en `photos` y reemplazá su entrada:

```ts
ANO1_02: {
  src: '/images/ano-1/viaje.webp',
  alt: 'Jeni y Fer en nuestro primer viaje.',
  aspectRatio: '3 / 4',
  position: '50% 40%',
},
```

El recuerdo sigue usando `images: ['ANO1_02']`. No cambies componentes ni imports. La ruta no incluye `public`. Al reemplazar la foto, actualizá también `srcSet` si tenía versiones anteriores.

- `aspectRatio`: `4 / 3`, `3 / 4`, `16 / 10` o la proporción que prefieras.
- `position`: centro del recorte; `50% 30%` prioriza la parte superior.
- `srcSet` y `sizes`: opcionales para imágenes responsive. Ejemplo de `srcSet`: `/images/foto-640.webp 640w, /images/foto-1280.webp 1280w`.
- `tone`: `olive`, `sand` o `clay`; cambia el color del placeholder.

Las imágenes reservan su tamaño con su proporción real y usan carga diferida y decodificación asíncrona. Las fotos integradas tienen WebP de hasta 640, 960 y 1280 px de ancho, orientación corregida y metadatos retirados. Una ruta rota conserva el espacio y muestra un error en español. WebP y AVIF funcionan sin configuración extra.

## Cambiar textos y escenas

Cada recuerdo admite `eyebrow`, `date`, `location`, `title`, `text` (arreglo de párrafos), `images` (identificadores) y `layout`. Los campos opcionales se pueden borrar. Usá `\n` en un título para indicar un salto de línea; también envuelve automáticamente textos largos.

| `layout`     | Composición                            |
| ------------ | -------------------------------------- |
| `hero`       | Foto protagonista y texto              |
| `pair`       | Dos fotos; carrusel en móvil           |
| `collage`    | Fotos orgánicas; carrusel en móvil     |
| `text-first` | Frase antes de la fotografía           |
| `detail`     | Principal y detalle; carrusel en móvil |
| `pause`      | Frase, sin fotos                       |
| `reveal`     | Foto que se revela al tocar            |

`style` admite `tone: 'light' | 'dark'`, `alignment: 'left' | 'center'` y `accent` como color CSS. Una `interaction` admite `prompt`, `button` y `revealedText`. Reordená o agregá recuerdos: los contadores se actualizan solos. Conservá un `id` único en cada escena y usá identificadores existentes en `photos`.

## Música opcional

Guardá un audio propio o con permiso de uso en `public/audio/` y cambiá:

```ts
audio: { src: '/audio/nuestra-musica.mp3', volume: 0.35 },
```

Sólo comienza al tocar **Activar sonido** y se repite durante el recorrido. El volumen va de 0 a 1. Con `src: null` no se carga ningún audio y el control informa que la música todavía no está elegida. La canción actual está en `public/audio/cant-help-falling-in-love.mp3`, con volumen `0.35`; el botón **Silenciar** pausa la reproducción.

## Estructura

```text
src/
  components/  Photo, Letter y controles discretos
  scenes/      Apertura, capítulos, recuerdos y cierre
  data/        story.ts — todo el contenido editable
  hooks/       Movimiento reducido y viewport móvil
  styles/      Una hoja de estilos
public/        Favicon y futuras fotos/audio
```

Animaciones con CSS e IntersectionObserver, sin librería de animación. Movimiento reducido elimina movimiento y esperas, conservando las frases. La sorpresa usa un diálogo nativo con Escape, foco y cierre accesible. El recorrido no bloquea el scroll.

La flecha inferior avanza a la siguiente escena y la alinea al inicio de la pantalla. Si una escena ocupa más de una pantalla, primero muestra el contenido que falta. El scroll sigue siendo libre. En móvil, todos los recuerdos con más de una foto usan slides horizontales, cualquiera sea su layout: podés deslizar con el dedo, tocar los indicadores o usar las teclas izquierda/derecha. El desplazamiento táctil es nativo, ajusta cada foto al soltar y sincroniza los indicadores. Podés seguir haciendo scroll vertical desde las fotos.

El diseño prioriza el celular y las fotos verticales, con márgenes menores, encuadre completo y una altura máxima del 70% del viewport. El alto del carrusel depende de las proporciones reales del grupo y se mantiene estable entre slides. La variante móvil también se conserva en teléfonos en horizontal de hasta 1000 px. En escritorio permanecen las composiciones de álbum. El inicio y la navegación incluyen «Antes del sí» y «La boda» sin contar esos recuerdos como años de casados.

## Publicar

- **Vercel o Netlify:** comando `npm run build`, salida `dist`.
- **GitHub Pages:** `npm run deploy` compila la web localmente y sube el contenido de `dist` a la rama `gh-pages`. El build usa la ruta `/aniversary-gift/`; las fotos y el audio adaptan sus rutas automáticamente. No hay un workflow de Actions en el repositorio.

### Primera publicación en GitHub Pages

1. Abrí [Settings → Pages del repositorio](https://github.com/fermorelli/aniversary-gift/settings/pages).
2. En **Build and deployment → Source**, elegí **Deploy from a branch**.
3. Elegí la rama **gh-pages**, carpeta **/(root)** y tocá **Save**. La rama contiene la web compilada, con `index.html` en la raíz y `.nojekyll` para servir los archivos estáticos.
4. Cuando GitHub termine de publicar, abrí [la web](https://fermorelli.github.io/aniversary-gift/).

### Publicar cambios después

Guardá tus cambios y, desde la terminal de esta carpeta, ejecutá:

```sh
npm run deploy
```

El comando compila y publica la versión nueva en `gh-pages`. Conservá también los cambios del código fuente con un commit y push en `main`; un push a `main` por sí solo no actualiza la web publicada.

GitHub muestra una tarea interna de Pages al publicar desde una rama. No requiere crear ni configurar un workflow propio en Actions.

La web publicada en GitHub Pages es accesible para cualquiera que tenga el enlace. Si el repositorio es privado, la disponibilidad de Pages depende del plan de GitHub. [Documentación oficial](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

No hay rutas adicionales ni hace falta configurar redirecciones. La tipografía DM Sans se carga desde Google Fonts, con una sans-serif como respaldo sin conexión. No hay backend, cuentas, base de datos, CMS, APIs de contenido ni analytics.

## Alcance

Catorce recuerdos en los años de casados y tres escenas antes del sí y de la boda, siete composiciones, transiciones, año cuatro, carta, foto final, una sorpresa y soporte de sonido. Se omitieron el videojuego, editor visual, persistencia, puntuaciones y cualquier infraestructura innecesaria. La web se puede ejecutar localmente o publicar con GitHub Pages.
