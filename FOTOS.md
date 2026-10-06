# Fotos de la historia

Selección de 24 fotos distintas: 23 en el recorrido y una en la sorpresa. El selfie nuevo reemplaza la foto anterior en «Momentos que quedan». Los originales quedan en su carpeta de origen. Las otras siete fotos están reservadas.

## Organización de la web

- `public/images/antes-del-si/`: antes del casamiento y foto secreta.
- `public/images/boda/`: el sí y la celebración.
- `public/images/ano-1/`, `ano-2/`, `ano-3/`: años de casados.

Cada foto tiene versiones WebP de hasta 640, 960 y 1280 px de ancho, sin ampliar originales pequeños. La orientación EXIF se aplica antes de exportar y la proporción original se conserva. El navegador elige la versión adecuada con `srcSet`.

Todos los identificadores, rutas, proporciones, alt y escenas viven en `src/data/story.ts`. No hace falta renombrar los originales ni tocar componentes para reordenar o cambiar una foto.

## Correspondencia

| ID        | Carpeta original  | Archivo original                 | Uso          |
| --------- | ----------------- | -------------------------------- | ------------ |
| `PRE_01`  | 00 - antes del si | `IMG_20220430_054910312.jpg`     | Antes del sí |
| `PRE_02`  | 00 - antes del si | `IMG_20220604_005244382.jpg`     | Antes del sí |
| `PRE_06`  | 00 - antes del si | `IMG-20221211-WA0040~2.jpg`      | Antes del sí |
| `PRE_09`  | 00 - antes del si | `IMG_20230916_001819169.jpg`     | Sorpresa     |
| `BODA_02` | boda              | `DSC_5359.jpg`                   | Boda         |
| `BODA_03` | boda              | `DSC_5369.jpg`                   | Boda         |
| `BODA_04` | boda              | `asd.jpg`                        | Boda         |
| `ANO1_01` | 01 - primer año   | `IMG_20231012_213631724.jpg`     | Año uno      |
| `ANO1_02` | 01 - primer año   | `IMG_20231013_123245669.jpg`     | Año uno      |
| `ANO1_03` | 01 - primer año   | `IMG_20231014_150616486.jpg`     | Año uno      |
| `ANO1_04` | 01 - primer año   | `IMG_20231014_183526835_HDR.jpg` | Año uno      |
| `ANO1_05` | 01 - primer año   | `IMG_20240101_004328503.jpg`     | Año uno      |
| `ANO2_01` | 02- segundo año   | `IMG_20240712_220413872.jpg`     | Año dos      |
| `ANO2_02` | 02- segundo año   | `IMG_20240723_010408270.jpg`     | Año dos      |
| `ANO2_03` | 02- segundo año   | `IMG_20250215_192727766_HDR.jpg` | Año dos      |
| `ANO2_04` | 02- segundo año   | `IMG_20250323_100827677_HDR.jpg` | Año dos      |
| `ANO2_05` | Fer Chrome Downloads | `IMG_20251012_175306777.jpg` | Año dos: Momentos que quedan |
| `ANO3_01` | 03- tercer año    | `IMG_20251016_093904274.jpg`     | Año tres     |
| `ANO3_02` | 03- tercer año    | `IMG_20251224_003022488.jpg`     | Año tres     |
| `ANO3_03` | 03- tercer año    | `IMG-20260123-WA0105.jpg`        | Año tres     |
| `ANO3_04` | 03- tercer año    | `IMG_20260830_003905583.jpg`     | Año tres     |
| `ANO3_05` | 03- tercer año    | `IMG_20260915_133455555_HDR.jpg` | Año tres     |
| `ANO3_06` | 03- tercer año    | `IMG_20260923_182829_705~2.jpg`  | Año tres     |
| `ANO3_07` | 03- tercer año    | `IMG_20260923_232152264_HDR.jpg` | Foto final   |

El original nuevo está en `E:/Fer Chrome Downloads/IMG_20251012_175306777.jpg`. Conserva el identificador `ANO2_05` de la escena; sus versiones web usan el prefijo `06-` para distinguirlas de la foto anterior.

## Selección reservada

Estas fotos siguen disponibles para cambiar o ampliar la historia:

- 00 - antes del si: `IMG_20220612_210005157.jpg`
- 00 - antes del si: `IMG_20220730_180250601_PORTRAIT~2.jpg`
- 00 - antes del si: `IMG_20221027_235528729.jpg`
- 00 - antes del si: `IMG_20221225_171241389_PORTRAIT.jpg`
- 00 - antes del si: `IMG_20230520_160702698_BURST000_COVER_TOP.jpg`
- boda: `IMG_20231008_003601665.jpg`
- 02- segundo año: `IMG_20250426_150038316_HDR.jpg` (reemplazada en la web).
