/*
  ==========================================================
  LISTE DES PARTENAIRES / CLIENTS
  ==========================================================
  Pour AJOUTER un partenaire : copie un bloc { ... },
  colle-le dans le tableau et modifie les champs.

  - name : nom de l'entreprise/marque (affiché si pas de logo,
           et utilisé comme texte alternatif)
  - logo : URL du logo (idéalement un PNG/SVG transparent,
           fond blanc ou transparent)
           → laisse "" si tu n'as pas encore le logo, le nom
             s'affichera à la place en attendant
  ==========================================================
*/

const partners = [
  { name: "Les Fantômes", logo: "https://logo.clearbit.com/lesfantomes.fr?size=256" },
  { name: "Imagine Films", logo: "https://logo.clearbit.com/imaginefilms.fr?size=256" },
  { name: "Cutback", logo: "https://logo.clearbit.com/cutback.live?size=256" },
  { name: "Rencontres Audiovisuelles", logo: "https://logo.clearbit.com/rencontres-audiovisuelles.org?size=256" },
  { name: "Caribou", logo: "https://logo.clearbit.com/caribou.fr?size=256" },
  { name: "9:16 Stories", logo: "https://logo.clearbit.com/916stories.com?size=256" }
];
