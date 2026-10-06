// Todo el contenido de la historia se edita acá. La música es opcional.
// Fotos seleccionadas y correspondencia con los originales: FOTOS.md.
// Las proporciones son las reales, después de corregir la orientación EXIF.
export type PhotoContent = {
  src: string;
  alt: string;
  aspectRatio: string;
  position?: string;
  srcSet?: string;
  sizes?: string;
  tone?: "olive" | "sand" | "clay";
};
export type Memory = {
  id: string;
  eyebrow?: string;
  date?: string;
  location?: string;
  title: string;
  text: string[];
  images: string[];
  layout:
    "hero" | "pair" | "collage" | "text-first" | "detail" | "pause" | "reveal";
  interaction?: { prompt: string; button: string; revealedText: string };
  style?: {
    tone?: "dark" | "light";
    alignment?: "left" | "center";
    accent?: string;
  };
};
export type Chapter = {
  id: string;
  number: number;
  label: string;
  title: string;
  intro: string;
  note: string;
  accent: string;
  transition: { text: string; state: string };
  memories: Memory[];
};
export type PreludeContent = {
  id: string;
  label: string;
  accent: string;
  memories: Memory[];
};

export const photos: Record<string, PhotoContent> = {
  PRE_01: {
    src: "/images/antes-del-si/01-1280.webp",
    alt: "Un selfie de los dos, abrazados frente a un espejo.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/antes-del-si/01-640.webp 640w, /images/antes-del-si/01-960.webp 960w, /images/antes-del-si/01-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  PRE_02: {
    src: "/images/antes-del-si/02-1280.webp",
    alt: "Una sonrisa durante una salida a comer, con un vaso rojo en la mesa.",
    aspectRatio: "3072 / 4096",
    srcSet:
      "/images/antes-del-si/02-640.webp 640w, /images/antes-del-si/02-960.webp 960w, /images/antes-del-si/02-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  PRE_06: {
    src: "/images/antes-del-si/06-1200.webp",
    alt: "Los dos al aire libre, mirándose de cerca al atardecer.",
    aspectRatio: "1200 / 1600",
    srcSet:
      "/images/antes-del-si/06-640.webp 640w, /images/antes-del-si/06-960.webp 960w, /images/antes-del-si/06-1200.webp 1200w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  PRE_09: {
    src: "/images/antes-del-si/09-1280.webp",
    alt: "Una expresión divertida durante una salida a comer.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/antes-del-si/09-640.webp 640w, /images/antes-del-si/09-960.webp 960w, /images/antes-del-si/09-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  BODA_02: {
    src: "/images/boda/02-1280.webp",
    alt: "Los dos sonriendo durante la celebración de la boda.",
    aspectRatio: "6016 / 3384",
    srcSet:
      "/images/boda/02-640.webp 640w, /images/boda/02-960.webp 960w, /images/boda/02-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  BODA_03: {
    src: "/images/boda/03-1280.webp",
    alt: "Un abrazo durante la celebración, con invitados alrededor.",
    aspectRatio: "6016 / 3384",
    srcSet:
      "/images/boda/03-640.webp 640w, /images/boda/03-960.webp 960w, /images/boda/03-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  BODA_04: {
    src: "/images/boda/04-1280.webp",
    alt: "Un beso en la boda, en silueta frente a unas cortinas iluminadas.",
    aspectRatio: "2014 / 3581",
    srcSet:
      "/images/boda/04-640.webp 640w, /images/boda/04-960.webp 960w, /images/boda/04-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO1_01: {
    src: "/images/ano-1/01-1280.webp",
    alt: "Un selfie de los dos junto a una figura amarilla de un personaje de dibujos.",
    aspectRatio: "6560 / 3690",
    srcSet:
      "/images/ano-1/01-640.webp 640w, /images/ano-1/01-960.webp 960w, /images/ano-1/01-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO1_02: {
    src: "/images/ano-1/02-1280.webp",
    alt: "Los dos junto a un lago, con montañas nevadas al fondo.",
    aspectRatio: "3690 / 6560",
    srcSet:
      "/images/ano-1/02-640.webp 640w, /images/ano-1/02-960.webp 960w, /images/ano-1/02-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO1_03: {
    src: "/images/ano-1/03-1280.webp",
    alt: "Los dos con cascos y chalecos salvavidas antes de una actividad al aire libre.",
    aspectRatio: "6560 / 3690",
    srcSet:
      "/images/ano-1/03-640.webp 640w, /images/ano-1/03-960.webp 960w, /images/ano-1/03-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO1_04: {
    src: "/images/ano-1/04-1280.webp",
    alt: "Los dos abrazados en un asiento durante un viaje.",
    aspectRatio: "3690 / 6560",
    srcSet:
      "/images/ano-1/04-640.webp 640w, /images/ano-1/04-960.webp 960w, /images/ano-1/04-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO1_05: {
    src: "/images/ano-1/05-1280.webp",
    alt: "Una foto de los dos de noche, sonriendo muy cerca.",
    aspectRatio: "1846 / 3280",
    srcSet:
      "/images/ano-1/05-640.webp 640w, /images/ano-1/05-960.webp 960w, /images/ano-1/05-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO2_01: {
    src: "/images/ano-2/01-1280.webp",
    alt: "Una foto en casa, con un gato blanco y naranja en brazos.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-2/01-640.webp 640w, /images/ano-2/01-960.webp 960w, /images/ano-2/01-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO2_02: {
    src: "/images/ano-2/02-1280.webp",
    alt: "Un descanso entre mantas, con un gato estirado boca arriba.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-2/02-640.webp 640w, /images/ano-2/02-960.webp 960w, /images/ano-2/02-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO2_03: {
    src: "/images/ano-2/03-1280.webp",
    alt: "Los dos vestidos para salir, frente a un espejo.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-2/03-640.webp 640w, /images/ano-2/03-960.webp 960w, /images/ano-2/03-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO2_04: {
    src: "/images/ano-2/04-1280.webp",
    alt: "Una sonrisa con una taza de café entre las manos.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-2/04-640.webp 640w, /images/ano-2/04-960.webp 960w, /images/ano-2/04-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO2_05: {
    src: "/images/ano-2/06-1280.webp",
    alt: "Los dos sonriendo en un selfie, con una bebé en brazos.",
    aspectRatio: "1846 / 3280",
    srcSet:
      "/images/ano-2/06-640.webp 640w, /images/ano-2/06-960.webp 960w, /images/ano-2/06-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_01: {
    src: "/images/ano-3/01-1280.webp",
    alt: "Una sonrisa al sol junto a un guacamayo azul y amarillo.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-3/01-640.webp 640w, /images/ano-3/01-960.webp 960w, /images/ano-3/01-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_02: {
    src: "/images/ano-3/02-1280.webp",
    alt: "Los dos compartiendo un beso entre mantas.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-3/02-640.webp 640w, /images/ano-3/02-960.webp 960w, /images/ano-3/02-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_03: {
    src: "/images/ano-3/03-1280.webp",
    alt: "Un selfie de los dos junto al agua, al atardecer.",
    aspectRatio: "2268 / 4032",
    srcSet:
      "/images/ano-3/03-640.webp 640w, /images/ano-3/03-960.webp 960w, /images/ano-3/03-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_04: {
    src: "/images/ano-3/04-1280.webp",
    alt: "Un abrazo frente a un espejo, con ropa deportiva.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-3/04-640.webp 640w, /images/ano-3/04-960.webp 960w, /images/ano-3/04-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_05: {
    src: "/images/ano-3/05-1280.webp",
    alt: "Los dos frente a un espejo, sonriendo con una gorra verde.",
    aspectRatio: "2304 / 4096",
    srcSet:
      "/images/ano-3/05-640.webp 640w, /images/ano-3/05-960.webp 960w, /images/ano-3/05-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_06: {
    src: "/images/ano-3/06-1206.webp",
    alt: "Los dos sonriendo frente al castillo de un parque de Disney.",
    aspectRatio: "1206 / 1608",
    srcSet:
      "/images/ano-3/06-640.webp 640w, /images/ano-3/06-960.webp 960w, /images/ano-3/06-1206.webp 1206w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
  ANO3_07: {
    src: "/images/ano-3/07-1280.webp",
    alt: "Una foto de los dos de noche, con luces violetas alrededor.",
    aspectRatio: "2294 / 4080",
    srcSet:
      "/images/ano-3/07-640.webp 640w, /images/ano-3/07-960.webp 960w, /images/ano-3/07-1280.webp 1280w",
    sizes: "(max-width: 700px) 94vw, (max-width: 1000px) 80vw, 60vw",
    position: "50% 50%",
  },
};

export const years: Chapter[] = [
  {
    id: "ano-1",
    number: 1,
    label: "Año uno",
    title: "Estrenando\nesta vida.",
    intro:
      "Nuestros primeros recuerdos juntos con marido y mujer. Los viajes, las salidas y todo lo que fuimos viviendo en este primer año de casados.",
    note: "Nuestro primer año de casados",
    accent: "#bbc29a",
    transition: {
      text: "Y seguimos sumando.",
      state: "Año dos, juntos",
    },
    memories: [
      {
        id: "ano-1-recuerdo-1",
        eyebrow: "Los primeros viajes",
        title: "La vista era linda.\nLa compañía, más.",
        text: ["Como siempre a todos lados donde fuimos y donde vamos, la vista y los lugares son increibles pero lo que más me gusta es la compañia."],
        images: ["ANO1_02"],
        layout: "hero",
        date: "Primer año de casados",
      },
      {
        id: "ano-1-recuerdo-2",
        eyebrow: "Planes de a dos",
        title: "Un poco\nde aventura.",
        text: ["Algunas fotos salieron más serias que otras.", "Por suerte jejeje. Seguro que no te acordabas la del homero. Y el dia del rafting??? Estuvo increible enanita. Insististe y al final tenias razon. Como siempre jaja"],
        images: ["ANO1_01", "ANO1_03"],
        layout: "pair",
      },
      {
        id: "ano-1-recuerdo-3",
        eyebrow: "La parte tranquila",
        title: "Y de esta seguro que no te acordabas JAJA",
        text: ["Como siempre en todos lados"],
        images: ["ANO1_04"],
        layout: "reveal",
        interaction: {
          prompt: "¿Te acordás?",
          button: "Revelar el recuerdo",
          revealedText: "Mi parte favorita de estar con vos es que te duermas siempre apoyada en mí.",
        },
      },
      {
        id: "ano-1-recuerdo-4",
        eyebrow: "Lo que fuimos viviendo",
        title: "Otro año.\nLa misma elección.",
        text: ["Seguir eligiendo estar acá.", "Con vos. Para toda la vida. Este fue el año que te regale los aritos que nunca usaste :("],
        images: ["ANO1_05"],
        layout: "text-first",
        style: {
          tone: "light",
          alignment: "center",
        },
      },
    ],
  },
  {
    id: "ano-2",
    number: 2,
    label: "Año dos",
    title: "Nuestro\nmundito.",
    intro:
      "Las salidas, los días en casa y todo lo que empezamos a llamar nuestro. Lo que logramos construir juntos, aca en casita, como fuimos transformando todo, como hacemos siempre",
    note: "El segundo año de casados",
    accent: "#d7a478",
    transition: {
      text: "Y todavía quedaba mucho.",
      state: "Año tres, juntos",
    },
    memories: [
      {
        id: "ano-2-recuerdo-1",
        eyebrow: "También cuentan estos días",
        title: "La vida\nen casa.",
        text: ["Con sus costumbres.", "Y sus protagonistas: El Chelo y el Raulito que ya no esta con nosotros pero va a estar siempre en nuestros corazones"],
        images: ["ANO2_01", "ANO2_02"],
        layout: "detail",
      },
      {
        id: "ano-2-recuerdo-2",
        eyebrow: "Una noche más",
        title: "Salir con vos. \nSiempre tan divertido",
        text: ["El plan importa.", "La compañía, bastante más.", "A todos lados donde te siga jamas me voy a aburrir, y esa es una de las cosas que más amo de vos."],
        images: ["ANO2_03"],
        layout: "hero",
        style: {
          tone: "light",
        },
      },
      {
        id: "ano-2-recuerdo-3",
        eyebrow: "Las cosas pequeñas",
        title: "Un café.\nY esta sonrisa.",
        text: ["Viajecitos express a lugares hermosos, vos y yo, y esa carita preciosa que miro todos los días cuando me despierto y cuando me voy a dormir."],
        images: ["ANO2_04"],
        layout: "text-first",
      },
      {
        id: "ano-2-recuerdo-4",
        eyebrow: "La familia siempre junta",
        title: "Tu amor y ternurita en todos lados.",
        text: ["Me gusta mucho siempre lo amorosa y cariñosa que sos con mi familia y en especial con las peloncitas estas, me dan muchas ganas de llenarte la pancita de huesitos :)"],
        images: ["ANO2_05"],
        layout: "hero",
      },
      {
        id: "ano-2-recuerdo-5",
        eyebrow: "Una pequeña pausa",
        title: "Y en el medio,\nla vida.",
        text: [
          "Todas esas cosas que pasaron y que no sacamos fotos, también están en esta historia, y no me las voy a olvidar jamás.",
        ],
        images: [],
        layout: "pause",
        style: {
          alignment: "center",
        },
      },
    ],
  },
  {
    id: "ano-3",
    number: 3,
    label: "Año tres",
    title: "Más historias.\nMás nosotros.",
    intro:
      "Otros caminos, nuevos recuerdos y todas las formas de seguir estando juntos enanita.",
    note: "Nuestro tercer año de casados",
    accent: "#afb9c3",
    transition: {
      text: "Hasta acá, tres de casados.",
      state: "Y cuatro de nosotros",
    },
    memories: [
      {
        id: "ano-3-recuerdo-1",
        eyebrow: "Esta risa",
        title: "Me encanta\nverte así.",
        text: ["No podía faltar esta foto. Tetas nuevas, feliz en la playa, y esa sonrisa hermosa diossss como te amo"],
        images: ["ANO3_01"],
        layout: "hero",
      },
      {
        id: "ano-3-recuerdo-2",
        eyebrow: "Sin ir muy lejos",
        title: "Nuestro lugar.\nDonde estés vos.",
        text: ["A veces, el mejor plan es simplemente este. Los gorditos y nosotros 2"],
        images: ["ANO3_02"],
        layout: "text-first",
        style: {
          tone: "light",
          alignment: "center",
        },
      },
      {
        id: "ano-3-recuerdo-3",
        eyebrow: "Un recuerdo mas, guardado",
        title: "Otro atardecer.\nCon vos.",
        text: ["Una vista nueva, un día muy especial, y un recuerdo más para nosotros."],
        images: ["ANO3_03"],
        layout: "hero",
      },
      {
        id: "ano-3-recuerdo-4",
        eyebrow: "Nuestra costumbre",
        title: "Nosotros,\nen cualquier espejo.",
        text: ["De día, de noche, papeados, de cara, en rosario o en new york, siempre juntos, siempre con vos."],
        images: ["ANO3_04", "ANO3_05"],
        layout: "pair",
      },
      {
        id: "ano-3-recuerdo-5",
        eyebrow: "Y un poco de magia",
        title: "Un viaje más.\nOtra historia nuestra.",
        text: ["Otro viaje juntos y van, porque si hay algo que quiero en esta vida es viajar con vos y llevarte de la mano a todos lados mi vida hermosa."],
        images: ["ANO3_06"],
        layout: "text-first",
        style: {
          alignment: "center",
        },
      },
    ],
  },
];

export const story = {
  meta: {
    title: "Cuatro años juntos · Para Jeni",
    description:
      "Cuatro años juntos. Tres de casados. Una historia de Fer para Jeni.",
    dedication: "Para Jeni",
    signature: "De Fer, con amor.",
  },
  opening: {
    eyebrow: "Nuestra historia, hasta acá",
    messages: ["Hace cuatro años empezamos esta aventura.", "Y pasaron un monton de cosas enanita hermosa."],
    messageDuration: 1900,
    title: "Cuatro años juntos.",
    titleAccent: "Tres de casados.",
    description: "Un poco de lo que vivimos.\nY todo lo que todavía nos queda.",
    button: "Empezar desde el principio",
    startId: "antes-del-si",
    footer: "Desde antes del sí.",
    scrollHint: "Deslizá para seguir",
    number: "04",
  },
  ui: {
    skip: "Ir a nuestra historia",
    progress: "Nuestro recorrido",
    chapterNavigation: "Capítulos de nuestra historia",
    memoryCounter: "Recuerdo {current} de {total}",
    chapterCounter: "Capítulo {current} de {total}",
    photograph: "Fotografía por elegir",
    imageError: "Esta foto no pudo cargarse.",
    hideMemory: "Volver a ocultar",
    chapterIndex: "Los capítulos",
    nextChapter: "Seguir con la historia",
    nextScene: "Ir a la siguiente escena",
    continueScene: "Seguir viendo esta escena",
    photoCarousel: "Fotos del recuerdo",
    swipePhotos: "Deslizá las fotos",
    photoCounter: "Foto {current} de {total}",
    goToPhoto: "Ver foto {current} de {total}",
    restart: "Volver al principio",
    soundOff: "Activar sonido",
    soundOn: "Silenciar",
    soundUnavailable: "La música todavía no está elegida.",
    soundError: "No se pudo reproducir la música.",
    close: "Cerrar",
    finalProgress: "Lo que sigue",
  },
  ending: {
    messages: [
      "Tres años de casados.",
      "Cuatro de nosotros.",
      "Y todavía sigue.",
    ],
    messageDuration: 1500,
    eyebrow: "El próximo capítulo de casados",
    title: "Año cuatro.",
    loading: "Cargando",
    unlocked: "Desbloqueado",
    unlockDuration: 1800,
    subtitle: "Nuestro cuarto año de casados recién arranca y tenemos muchísimo para vivir.",
    continuation: "Continuará.",
    image: "ANO3_07",
    farewell: "Feliz aniversario.",
    note: "Por todo lo que viene.",
    letter: {
      eyebrow: "Antes de seguir",
      title: "Para vos, mi vida hermosa.",
      paragraphs: [
        "Acá voy a escribirte algo que no entra en ninguna foto. Desde que te conocí, y desde que entraste a mi vida, cambié como nunca jamás creí que era posible. Sos la primer persona que conocí que realmente me motivó a crecer, y a ser mejor persona, para mí pero también para vos. Porque si hay algo que entendí desde el primer día es que vos me hacés mejor, y que yo quiero hacerte mejor a vos. Y eso es lo que más me gusta de todo esto. Hay una voluntad genuina de crecer y acompañarse para el bien del otro que es probablemente uno de los aspectos mas sanos de nuestra relación.",
        "También voy a hablar de esas cosas chiquitas: los días comunes, nuestras costumbres, nuestras mini peleitas y lo que más me gusta de la vida que estamos armando. Con vos me siento en casa, sos mi hogar, darte un abrazo es sentir que volvi a casa, estemos en Rosario o en cualquier parte del mundo. Porque vos sos mi mundo, y jamás creí que sea posible sentirme así con alguien. Nuestra cotideaneidad se siente natural, bien, como amigos, como compañeros, como familia. Y eso realmente me hace muy feliz. De verdad",
        "Y al final, unas palabras sobre lo que viene. No tengo nada más que buenas espectativas por nuestro futuro juntos, y una única certeza: que jamás te voy a soltar la mano.",
      ],
      signature: "Siempre tuyo, Fer.",
    },
  },
  easterEgg: {
    label: "Una pequeña sorpresa",
    title: "Obvio que guardé\nesta también.",
    text: "No entró en los capítulos. Pero tenía que estar.",
    image: "PRE_09",
  },
  prelude: [
    {
      id: "prologue",
      label: "Antes del sí",
      accent: "#bbc29a",
      memories: [
        {
          id: "antes-del-si",
          eyebrow: "Donde empezó nuestra historia",
          title: "Antes del sí.\nYa éramos nosotros.",
          text: [
            "Todavía no estábamos casados.",
            "Pero ya había mucho de esto que somos hoy y que tanto nos define, siempre juntos con esa ternura y complicidad que nos caracteriza.",
          ],
          images: ["PRE_01", "PRE_02", "PRE_06"],
          layout: "collage",
        },
      ],
    },
    {
      id: "wedding",
      label: "La boda",
      accent: "#d7a478",
      memories: [
        {
          id: "boda",
          eyebrow: "El día de nuestra boda",
          title: "Sí.\nCon vos. \nSiempre, para siempre",
          text: ["Aca empezó el mejor capítulo de nuestra historia. Y todavía sigue."],
          images: ["BODA_04"],
          layout: "hero",
        },
        {
          id: "boda-recuerdos",
          eyebrow: "Para volver a mirar",
          title: "Ese día.\nToda esa alegría.",
          text: [
            "Hay fotos que te devuelven a un momento.",
            "Estas hacen eso.",
            "Son mis favoritas porque la felicidad de nuestras caras es la misma que siento cada vez que pienso en ese día y en todo lo que vino después.",
            "Pocas veces en mi vida estuve tan convencido de algo como ese día cuando dije si. Y todavía lo estoy.",
          ],
          images: ["BODA_02", "BODA_03"],
          layout: "pair",
          style: {
            tone: "light",
          },
        },
      ],
    },
  ] satisfies PreludeContent[],
  audio: { src: null as string | null, volume: 0.35 },
};
