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
    cover: "Vidéo Mapping/MUHLHAUSEN_01.jpg",
    images: [
      "Vidéo Mapping/MUHLHAUSEN_02.png",
      "Vidéo Mapping/MUHLHAUSEN_04.jpg",
      "Vidéo Mapping/MUHLHAUSEN_03.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/2wZJsrmmgbk"
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
    cover: "Vidéo Mapping/MARANS_001.png",
    images: [
      "Vidéo Mapping/MARANS_03.png",
      "Vidéo Mapping/MARANS_04.png",
      "Vidéo Mapping/MARANS_02.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/lDe90W7haq0"
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
    cover: "Vidéo Mapping/DURAS_01.png",
    images: [
      "Vidéo Mapping/DURAS_02.png",
      "Vidéo Mapping/DURAS_04.png",
      "Vidéo Mapping/DURAS_03.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/YBtZAoAcYDs"
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
    cover: "Vidéo Mapping/TOKYO_01.png",
    images: [
      "Vidéo Mapping/TOKYO_02.png",
      "Vidéo Mapping/TOKYO_03.png",
      "Vidéo Mapping/TOKYO_04.png"
    ],
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
    cover: "Vidéo Mapping/OSAKA_01.png",
    images: [
      "Vidéo Mapping/OSAKA_02.png",
      "Vidéo Mapping/OSAKA_03.png",
      "Vidéo Mapping/OSAKA_04.png"
      ],
    video: "",
    link: "https://www.youtube.com/embed/k_j0iiKe7hk"
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
    cover: "Vidéo Mapping/COCO_02.png",
    images: [
      "Vidéo Mapping/COCO_04.png",
      "Vidéo Mapping/COCO_03.png",
      "Vidéo Mapping/COCO_01.png"
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
    link: "https://www.youtube.com/embed/v9RLVUHBpMY"
  },
  {
    slug: "royal-mirage-hôtel",
    title: "Royal Mirage Hôtel",
    type: "Motion - Diffusion LED",
    description: "Pour le Ramadan, nous avons créé une ambiance arabique et contemplative tout autour du restaurant de l’hôtel. Une animation lente et savoureuse, afin de ne pas trop déstabiliser les clients du restaurant.",
    year: "2021",
    category: "motion",
    client: "Royal Mirage Hôtel",
    creation: "Projection sur LED",
    realisation: "Eloi Février",
    thematique: "Arabic Ambiant",
    lieu: "Dubai, Emirats",
    cover: "Motion Design/ROYAL_01.jpg",
    images: [
      "Motion Design/ROYAL_03.jpg",
      "Motion Design/ROYAL_02.jpg",
      "Motion Design/ROYAL_04.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/8sPjKjG4QAI"
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
    cover: "Vidéo Mapping/LUCERNE_02.png",
    images: [
      "Vidéo Mapping/LUCERNE_01.png",
      "Vidéo Mapping/LUCERNE_04.png",
      "Vidéo Mapping/LUCERNE_03.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/U5T6hQLRizQ"
  },
  {
    slug: "9altitudes",
    title: "9Altitudes",
    type: "Motion design",
    description: "9altitudes est un groupe international spécialisé dans l’accompagnement des entreprises dans leur transformation digitale. Il s'agit d'une animation en Motion Design expliquant leurs différentes approches et services, tout en mettant en avant le fil conducteur. Le fil rouge numérique est au cœur de leur approche. En connectant les applications utilisées par tous les services de votre entreprise, ils créent une plateforme unifiée qui facilite la collaboration et renforce l’efficacité opérationnelle. Cette intégration donne naissance à un véritable fil rouge numérique traversant toute votre organisation.",
    year: "2025",
    category: "motion",
    client: "9Altitudes",
    creation: "Motion design",
    realisation: "Eloi Février, Imagine Films",
    thematique: "Les différents enjeux",
    lieu: "Lille, France",
    cover: "Motion Design/9ALTITUDES_01.png",
    images: [
      "Motion Design/9ALTITUDES_04.png",
      "Motion Design/9ALTITUDES_03.png",
      "Motion Design/9ALTITUDES_02.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/fD4gQDINkpg"
  },
  {
    slug: "futurpreneurs",
    title: "Futurpreneurs",
    type: "Motion design",
    description: "Réalisation en motion design pour les 30 ans de Futurpreneur ! Un organisme canadien à but non lucratif qui accompagne les jeunes entrepreneurs dans le lancement de leur activité. Script, storyboard, identité visuelle, animation… Bref, un projet entièrement sur mesure ! Encore un grand merci à Afoali pour ta confiance !",
    year: "2026",
    category: "motion",
    client: "9:16 Stories",
    creation: "Motion design",
    realisation: "Eloi Février, Afoali Ngwakum",
    thematique: "30 ans de Futurpreneurs",
    lieu: "Toronto, Canada",
    cover: "Motion Design/FUTURPRENEURS_04.png",
    images: [
      "Motion Design/FUTURPRENEURS_03.png",
      "Motion Design/FUTURPRENEURS_02.png",
      "Motion Design/FUTURPRENEURS_01.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/rhahVPDU_r8"
  },
  {
    slug: "bretagne-enchères",
    title: "Bretagne Enchères",
    type: "Motion - Diffusion",
    description: "À travers une approche poétique et un univers graphique affirmé, je souhaite sublimer l’histoire de Bretagne Enchères. De sa création à son évolution, jusqu’à ses ambitions futures, cette animation mettra en lumière l’identité, les valeurs et le rayonnement de la maison. Diffusion intérieure pour trois soirées privatifs + adaptation pour les réseaux sociaux.",
    year: "2026",
    category: "motion",
    client: "Bretagne Enchères",
    creation: "Projection - Motion design",
    realisation: "Eloi Février",
    thematique: "L'évolution de la maison",
    lieu: "Rennes, Bretagne",
    cover: "Motion Design/ENCHERES_01.png",
    images: [
      "Motion Design/ENCHERES_03.png",
      "Motion Design/ENCHERES_04.png",
      "Motion Design/ENCHERES_02.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/LH6bEHyGnDY"
  },
  {
    slug: "terre-de-l'elu",
    title: "Terre de l’Élu",
    type: "Motion design",
    description: "Par une animation poétique et singulière, je raconte l’histoire du vignoble : « Terre de l’Élu ». Tout en douceur, j’invite les lecteurs à plonger dans l’univers délicat et savoureux du vin.",
    year: "2022",
    category: "motion",
    client: "Terre de l’Élu",
    creation: "Motion design",
    realisation: "Eloi Février",
    thematique: "L'histoire du vignoble",
    lieu: "Angers, France",
    cover: "Motion Design/ELU_04.png",
    images: [
      "Motion Design/ELU_03.png",
      "Motion Design/ELU_02.png",
      "Motion Design/ELU_01.png"
    ],
    video: "",
    link: "https://www.youtube.com/embed/PMpBNc2cma0"
  },
];
