/*
  ==========================================================
  LISTE DES PROJETS
  ==========================================================
  Pour AJOUTER un nouveau projet : copie un bloc { ... },
  colle-le dans le tableau et modifie les champs.

  - title       : nom du projet
  - type        : tag affiché au-dessus du titre (ex: "Mapping événementiel")
  - description : une ou deux phrases qui présentent le projet
  - year        : année de réalisation
  - category    : "mapping" → colonne de gauche (Vidéo Mapping)
                  "motion"  → colonne de droite (Motion Design / Communication)
  - cover       : URL de l'image de couverture (miniature affichée sur la ligne)
                  → mets une image de ~1200px de large pour un bon rendu
  - images      : (optionnel) tableau de 2 à 4 photos supplémentaires
                  → si présent, un clic sur la ligne ouvre une galerie
                    avec toutes ces photos (la 1ère peut être la même
                    que "cover")
                  → laisse vide [] si tu n'as qu'une seule photo
  - video       : (optionnel) URL d'une vidéo .mp4/.webm courte (5-15s)
                  → si présent, elle se lance au survol de la miniature
                  → laisse vide ("") si tu n'as pas encore de vidéo
  - link        : lien vers le projet complet (Vimeo, YouTube, etc.)
                  laisse "#" si pas encore de lien
  ==========================================================
*/

const projects = [
  {
    title: "Seed of Freedom",
    type: "Mapping commémoratif",
    description: "Un hommage à la Guerre des Paysans (1525), projeté sur un monument historique à Mühlhausen, en Allemagne.",
    year: "2025",
    category: "mapping",
    cover: "https://cdn.myportfolio.com/921e60e9-6d25-458a-91c8-66fa7be17d9f/d0eaaa7c-2042-4a41-83b3-59f52a645bdb_rwc_0x0x1920x1080x1920.png?h=6199b81f8cc31507c986497812ad4465",
    images: [],
    video: "",
    link: "https://www.youtube.com/embed/2wZJsrmmgbk"
  },
  {
    title: "Lumières sur la Cathédrale",
    type: "Projection architecturale",
    description: "Une mise en lumière monumentale jouant avec les volumes et la pierre d'un édifice religieux.",
    year: "2025",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    title: "Festival des Lumières — Scénographie",
    type: "Mapping événementiel",
    description: "Conception d'une scénographie lumineuse pour un festival, pensée pour rythmer la soirée en plusieurs temps forts.",
    year: "2023",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    title: "Pulse",
    type: "Mapping sur objet",
    description: "Une installation qui fait vibrer un objet du quotidien en le transformant par la lumière et le son.",
    year: "2022",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    title: "Résonance",
    type: "Installation immersive",
    description: "Une expérience immersive à 360°, où le visiteur devient partie prenante de la projection.",
    year: "2024",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    title: "Reflets Urbains",
    type: "Mapping architectural (projet fictif)",
    description: "Un habillage lumineux de façade pensé pour révéler l'architecture d'un quartier la nuit tombée.",
    year: "2023",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Odyssée Lumineuse",
    type: "Installation immersive (projet fictif)",
    description: "Un voyage sensoriel en plusieurs actes, entre lumière, matière et son spatialisé.",
    year: "2022",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&q=80",
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Nocturne",
    type: "Mapping sur monument (projet fictif)",
    description: "Une projection nocturne qui réinterprète un monument historique à travers un récit visuel poétique.",
    year: "2021",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Vertige",
    type: "Mapping de façade (projet fictif)",
    description: "Une projection qui joue avec la perspective et donne l'illusion que la façade se déforme en direct.",
    year: "2020",
    category: "mapping",
    cover: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Aurora — Identité de marque",
    type: "Motion design / communication",
    description: "Habillage animé pour une identité de marque, décliné sur les réseaux sociaux et le site web du client.",
    year: "2024",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
    images: [],
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    link: "#"
  },
  {
    title: "Générique — Studio X",
    type: "Motion design",
    description: "Générique d'ouverture animé, pensé pour poser l'univers visuel d'un studio en quelques secondes.",
    year: "2023",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    title: "Élan — Identité de marque",
    type: "Motion design / branding (projet fictif)",
    description: "Système d'animation modulaire construit autour d'une nouvelle identité de marque.",
    year: "2023",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Fragments",
    type: "Générique animé (projet fictif)",
    description: "Un générique construit comme un puzzle visuel, où chaque fragment révèle un peu plus l'histoire.",
    year: "2022",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Horizon",
    type: "Motion design publicitaire (projet fictif)",
    description: "Film publicitaire animé mettant en scène un produit à travers une narration courte et dynamique.",
    year: "2021",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    title: "Continuum",
    type: "Motion design / communication (projet fictif)",
    description: "Série d'animations pensées pour accompagner une campagne de communication sur plusieurs mois.",
    year: "2020",
    category: "motion",
    cover: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80"
    ],
    video: "",
    link: "#"
  }
];
