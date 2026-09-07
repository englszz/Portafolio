# Contenido bilingüe

- Español: `/`. Inglés: `/en/`.
- Al entrar por `/`, siempre se muestra español, independientemente del idioma del navegador o de preferencias guardadas anteriormente. Los enlaces directos conservan su idioma.
- El selector ES/EN permite cambiar manualmente y abre la misma página en el otro idioma. No hay redirección automática a inglés.
- `src/i18n/ui.ts` contiene los textos generales y las fichas de proyectos en español; `src/i18n/en.ts` contiene sus traducciones. `src/i18n/home.ts` reúne la formación, experiencia y presentación en ambos idiomas.
- Las publicaciones originales siguen en `src/features/blog/content/en/` para conservar los enlaces históricos. Su idioma real es `es`. Las traducciones están en `src/features/blog/content/english/` y tienen idioma `en`.
- Cada pareja de publicaciones comparte `translationKey`. Al añadir una publicación, crear ambos archivos con la misma clave, fechas y referencias a los medios originales.
- Las imágenes, certificados y videos se conservan como documentos originales. Los títulos, descripciones, etiquetas y textos alternativos de la web están traducidos. Las descargas del CV utilizan los PDF proporcionados por el propietario: `public/Engels_Damiron_CV_ES.pdf` y `public/Engels_Damiron_CV_EN.pdf`. Cada idioma enlaza su versión.
- Los proyectos mantienen sus descripciones y estructura; no se añadieron métricas, roles ni resultados no documentados.

## Verificación

Ejecutar `npm run check`, `npm run build` y después `npm test`.

Las pruebas revisan las páginas generadas, sus enlaces, las versiones de Trayectoria, la selección de idioma, el buscador, el tema y el ajuste entre 320 y 1440 píxeles. Usan Microsoft Edge sin ventana; para otro navegador instalado, indicar `PLAYWRIGHT_CHANNEL` (por ejemplo, `chrome`). Las capturas de revisión se guardan en la carpeta temporal del sistema, dentro de `portfolio-bilingual-review`.
