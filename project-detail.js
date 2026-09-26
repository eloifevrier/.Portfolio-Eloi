// Affiche l'année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Récupère le slug du projet depuis l'URL (ex: project.html?slug=seed-of-freedom)
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

const project = projects.find((p) => p.slug === slug);

if (!project) {
  // Aucun projet trouvé pour ce slug : on prévient et on renvoie vers l'accueil
  document.querySelector('.project-detail-header').innerHTML =
    '<p class="project-detail-desc">Projet introuvable. <a href="index.html#projets">Retour aux projets →</a></p>';
  document.querySelector('.project-meta-grid').style.display = 'none';
  document.querySelector('.project-media').style.display = 'none';
} else {
  document.title = `${project.title} — Eloi Février`;

  document.getElementById('pd-type').textContent = project.type;
  document.getElementById('pd-title').textContent = project.title;
  document.getElementById('pd-desc').textContent = project.description || '';

  document.getElementById('pd-creation').textContent = project.creation || '—';
  document.getElementById('pd-realisation').textContent = project.realisation || '—';
  document.getElementById('pd-thematique').textContent = project.thematique || '—';
  document.getElementById('pd-client').textContent = project.client || '—';
  document.getElementById('pd-lieu').textContent = project.lieu || '—';

  // Les 3 photos supplémentaires (2 côte à côte + 1 grande finale).
  // S'il en manque, on retombe sur la photo de couverture pour ne jamais rien casser.
  const extra = project.images && project.images.length > 0 ? project.images : [];
  const photoA = extra[0] || project.cover;
  const photoB = extra[1] || project.cover;
  const photoC = extra[2] || project.cover;

  document.getElementById('pd-photo-1').src = project.cover;
  document.getElementById('pd-photo-1').alt = project.title;
  document.getElementById('pd-photo-2a').src = photoA;
  document.getElementById('pd-photo-2b').src = photoB;
  document.getElementById('pd-photo-3').src = photoC;

  // Vidéo principale : on utilise "link" s'il pointe vers une vraie vidéo embarquable,
  // sinon on masque le bloc vidéo plutôt que d'afficher un cadre vide
  const videoWrap = document.getElementById('pd-video-wrap');
  if (project.link && project.link !== '#') {
    document.getElementById('pd-video').src = project.link;
  } else {
    videoWrap.style.display = 'none';
  }
}
