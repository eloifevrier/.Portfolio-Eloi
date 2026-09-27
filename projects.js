/*
  ==========================================================
  LISTE DES PROJETS
  ==========================================================
  Pour AJOUTER un nouveau projet : copie un bloc { ... },
  colle-le dans le tableau et modifie les champs.

  - slug        : identifiant unique pour l'URL de la page détail
                  (uniquement lettres, chiffres et tirets, sans espace)
  - title       : nom du projet
  - type        : tag affiché au-dessus du titre (ex: "Mapping événementiel")
  - description : une ou deux phrases qui présentent le projet
  - year        : année de réalisation
  - category    : "mapping" → bandeau Vidéo Mapping
                  "motion"  → bandeau Motion Design / Communication
  - client, creation, realisation, thematique, lieu :
                  affichés sur la page détail du projet (fiche technique)
  - cover       : image de couverture (miniature sur la page d'accueil,
                  et 1ère grande photo sur la page détail)
                  → mets une image de ~1200px de large pour un bon rendu
  - images      : tableau de 3 photos supplémentaires utilisées sur la
                  page détail : [2 photos côte à côte, 1 grande photo finale]
                  → laisse vide [] si tu n'as pas encore ces photos
                    (la page détail réutilisera la cover à la place)
  - video       : (optionnel) URL d'une vidéo .mp4/.webm courte (5-15s)
                  → si présent, elle se lance au survol de la miniature
                    sur la page d'accueil
                  → laisse vide ("") si tu n'as pas encore de vidéo
  - link        : lien YouTube/Vimeo embarquable (format ".../embed/XXXX")
                  → affiché comme la vidéo principale sur la page détail
                  → laisse "#" si pas encore de vidéo complète
  ==========================================================
*/

const projects = [
  {
    slug: "seed-of-freedom",
    title: "Seed of Freedom",
    type: "Vidéo mapping",
    description: "Il y a 500 ans, les paysans se sont réfugiés dans la forêt pour échapper à la mort. Aujourd'hui, il est de notre devoir de respecter la nature qui nous entoure. Mon idée est de rendre hommage à la guerre des paysans (1525) tout en abordant les problèmes actuels : les inégalités auxquelles sont confrontés les agriculteurs et la pollution des sols. Avec un ton poétique et une identité visuelle forte, je veux raconter une histoire pleine d'espoir et portée par un souffle de liberté.",
    year: "2025",
    category: "Vidéo mapping",
    client: "Ville de Mühlhausen",
    creation: "Projection architecturale",
    realisation: "Eloi Février",
    thematique: "Guerre des Paysans (1525)",
    lieu: "Mühlhausen, Allemagne",
    cover: "https://cdn.myportfolio.com/921e60e9-6d25-458a-91c8-66fa7be17d9f/d0eaaa7c-2042-4a41-83b3-59f52a645bdb_rwc_0x0x1920x1080x1920.png?h=6199b81f8cc31507c986497812ad4465",
    images: [],
    video: "",
    link: "https://www.youtube.com/watch?v=2wZJsrmmgbk&t=78s"
  },
  {
    slug: "marans",
    title: "Marans",
    type: "Vidéo mapping",
    description: "À travers un style graphique poétique et affirmé, cette création invite les spectateurs à découvrir ou redécouvrir la riche histoire de Marans, de ses origines à ses projets d’avenir. Les différents tableaux retraceront la construction de la ville, ses transformations majeures, ainsi que les ambitions et perspectives qui dessinent son futur.",
    year: "2024",
    category: "mapping",
    client: "Mairie de Marans",
    creation: "Projection architecturale",
    realisation: "Eloi Février",
    thematique: "La ville de Marans",
    lieu: "Marans, France",
    cover: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    slug: "châteauduras",
    title: "Château de Duras",
    type: "Mapping événementiel",
    description: "Avec l’équipe des Fantômes, nous avons retracé l’histoire du château de Duras à travers un spectacle immersif de 20 minutes, plongeant les visiteurs au cœur des différentes époques. Pour ce projet, nous avons conçu les compositions à partir d’images, de collages, et de décors générés en partie grâce à l’intelligence artificielle. Une véritable phase d’expérimentation, visant à créer des tableaux harmonieux, doux et en cohérence avec la narration.",
    year: "2023",
    category: "mapping",
    client: "Nom du festival",
    creation: "Projection architecturale",
    realisation: "Eloi Février, Les Fantômes",
    thematique: "Histoire de Duras",
    lieu: "Duras, France",
    cover: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    slug: "tokyo-light-festival",
    title: "Tokyo Light Festival",
    type: "Vidéo mapping",
    description: "Memorial Picture Gallery : elle représente le présent, le concret, ce que nous voyons de nos propres yeux. Son reflet dans le bassin (Kakuike) : le futur - un mirage, une illusion, une déformation de la réalité. Ainsi, l’eau s’écoule comme nos journées, symbolisant mieux que tout autre élément la traversée, le voyage, la pureté, les profondeurs abyssales. En contemplant le reflet de l’eau… la rêverie peut commencer.",
    year: "2024",
    category: "Vidéo mapping",
    client: "1Minute Projection Mapping",
    creation: "Projection architecturale",
    realisation: "Eloi Février",
    thematique: "Miroir",
    lieu: "Tokyo, Japon",
    cover: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    slug: "mosaic-life",
    title: "Mosaic Life",
    type: "Installation immersive",
    description: "La vie, comparable à une roulette, est imprévisible : on ne sait jamais sur quoi elle nous mènera. Mais elle peut s’avérer favorable, non seulement pour nous, mais aussi pour les autres. Mon idée était d'utiliser une machine à sous comme transition visuelle, en présentant au public les trois piliers clés qui peuvent guider notre société vers un avenir plus juste et plus durable : le respect, le progrès, la communication. La vie est comme une roulette... pleine de surprises !",
    year: "2025",
    category: "Vidéo mapping",
    client: "Expo 2025 Osaka",
    creation: "Installation immersive",
    realisation: "Eloi Février",
    thematique: "Monde de demain",
    lieu: "Osaka, Japon",
    cover: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    slug: "dessiner-encore",
    title: "Dessiner Encore",
    type: "Projection théâtrale",
    description: "J'ai eu la chance de collaborer avec Coco, la célèbre dessinatrice de Charlie Hebdo. Elle a écrit ce livre : Dessiner Encore. Où elle nous parle de l'attentat du 7 janvier 2015 et de comment elle a réussi à se remettre de ce trauma - par le dessin. Il y a désormais une adaptation en pièce de théâtre au théâtre Lepic, à Montmartre. Avec une amie designer et le metteur en scène, nous nous sommes inspirés et avons sélectionnés des dessins de la BD, ils ont ensuite été projetés sur une scénographie. Il y avait un vrai travail de composition et d'animation. Et tout ça devait être en parfaite synchronisation avec le jeu des comédiennes.",
    year: "2025",
    category: "mapping",
    client: "Georges Vauraz (metteur en scène)",
    creation: "Projection théâtrale",
    realisation: "Eloi Février, Valentine Boidron",
    thematique: "BD de Coco : Dessiner Encore",
    lieu: "Paris, France",
    cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "new-energies",
    title: "New Energies",
    type: "Vidéo mapping",
    description: "Mon animation se déroule dans un immeuble, où chacun vit sa vie séparément, dans son appartement respectif. Mais que se passe-t-il quand il n’y a plus d’électricité ? Les voisins se réunissent et trouvent des solutions pour passer le temps. Ils allument une bougie, communiquent pour trouver des solutions, mais surtout... ils se découvrent pour la première fois !",
    year: "2024",
    category: "Vidéo mapping",
    client: "Festival LUMA",
    creation: "Projection architecturale",
    realisation: "Eloi Février",
    thematique: "Nouvelles énergies",
    lieu: "Binghamton, New York",
    cover: "Vidéo Mapping/LUMA_04.png",
    images: [
      "Vidéo Mapping/LUMA_01.png",
      "Vidéo Mapping/LUMA_02.png",
      "Vidéo Mapping/LUMA_03.png"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "royal-mirage-hôtel",
    title: "Royal Mirage Hôtel",
    type: "Mapping immersif",
    description: "Pour le Ramadan, nous avons créé une ambiance arabique et contemplative tout autour du restaurant de l’hôtel. Une animation lente et savoureuse, afin de ne pas trop déstabiliser les clients du restaurant.",
    year: "2021",
    category: "Vidéo mapping",
    client: "Royal Mirage Hôtel",
    creation: "Projection sur LED",
    realisation: "Eloi Février",
    thematique: "Arabic Ambiant",
    lieu: "Dubai, Emirats",
    cover: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "light-of-the-lake",
    title: "Light of the Lake",
    type: "Vidéo mapping",
    description: "Une lumière jaillit du cœur du lac des Quatre-Cantons, symbole de paix et de sérénité éternelle.  Depuis les rives, Lucerne accueille ces premiers rayons à bras ouverts. Au cœur de paysages à couper le souffle, de moments de partage et de plaisirs culinaires, Lucerne rayonne et s’épanouit.  À travers la poésie et un style graphique audacieux, je raconte l’histoire de ces instants de chaleur et de connexion. En mêlant légende et réalité, je veux emmener les spectateurs dans un voyage porté par l’énergie positive de la ville. La flamme du lac s’élève… et s’élèvera pour toujours.",
    year: "2026",
    category: "Vidéo mapping",
    client: "Light Festival Lucerne",
    creation: "Projection architecturale",
    realisation: "Eloi Février",
    thematique: "La ville de Lucerne",
    lieu: "Lucerne, Suisse",
    cover: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "aurora",
    title: "Aurora — Identité de marque",
    type: "Motion design / communication",
    description: "Habillage animé pour une identité de marque, décliné sur les réseaux sociaux et le site web du client.",
    year: "2024",
    category: "motion",
    client: "Nom du client",
    creation: "Motion design",
    realisation: "Eloi Février",
    thematique: "Identité de marque",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
    images: [],
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    link: "#"
  },
  {
    slug: "generique-studio-x",
    title: "Générique — Studio X",
    type: "Motion design",
    description: "Générique d'ouverture animé, pensé pour poser l'univers visuel d'un studio en quelques secondes.",
    year: "2023",
    category: "motion",
    client: "Studio X",
    creation: "Motion design",
    realisation: "Eloi Février",
    thematique: "Générique / branding",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
    images: [],
    video: "",
    link: "#"
  },
  {
    slug: "elan",
    title: "Élan — Identité de marque",
    type: "Motion design / branding (projet fictif)",
    description: "Système d'animation modulaire construit autour d'une nouvelle identité de marque.",
    year: "2023",
    category: "motion",
    client: "Client fictif",
    creation: "Motion design / branding",
    realisation: "Eloi Février",
    thematique: "Identité de marque",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "fragments",
    title: "Fragments",
    type: "Générique animé (projet fictif)",
    description: "Un générique construit comme un puzzle visuel, où chaque fragment révèle un peu plus l'histoire.",
    year: "2022",
    category: "motion",
    client: "Client fictif",
    creation: "Générique animé",
    realisation: "Eloi Février",
    thematique: "Narration visuelle",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "horizon",
    title: "Horizon",
    type: "Motion design publicitaire (projet fictif)",
    description: "Film publicitaire animé mettant en scène un produit à travers une narration courte et dynamique.",
    year: "2021",
    category: "motion",
    client: "Client fictif",
    creation: "Motion design publicitaire",
    realisation: "Eloi Février",
    thematique: "Publicité produit",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1200&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80"
    ],
    video: "",
    link: "#"
  },
  {
    slug: "continuum",
    title: "Continuum",
    type: "Motion design / communication (projet fictif)",
    description: "Série d'animations pensées pour accompagner une campagne de communication sur plusieurs mois.",
    year: "2020",
    category: "motion",
    client: "Client fictif",
    creation: "Motion design",
    realisation: "Eloi Février",
    thematique: "Campagne de communication",
    lieu: "Ville, Pays",
    cover: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80"
    ],
    video: "",
    link: "#"
  }
];
