// Affiche l'année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Génère les deux colonnes de projets (mapping / motion) à partir de projects.js
const mappingContainer = document.getElementById('mapping-container');
const motionContainer = document.getElementById('motion-container');

// Compteurs indépendants pour numéroter chaque colonne (01, 02, 03...)
const columnCounters = { mapping: 0, motion: 0 };

function renderProjectRow(project, container, columnKey) {
  const row = document.createElement('div');
  row.className = 'project-row';
  row.setAttribute('role', 'button');
  row.setAttribute('tabindex', '0');

  columnCounters[columnKey] += 1;
  const number = String(columnCounters[columnKey]).padStart(2, '0');

  // Si une vidéo est renseignée, on l'ajoute par-dessus l'image (cachée par défaut)
  const videoTag = project.video
    ? `<video class="project-cover project-cover-video" src="${project.video}" muted loop playsinline preload="none"></video>`
    : '';

  row.innerHTML = `
    <div class="project-number">${number}</div>
    <div class="project-body">
      <span class="project-type">${project.type}</span>
      <div class="project-title">${project.title}</div>
      <p class="project-desc">${project.description || ''}</p>
    </div>
    <div class="project-thumb">
      <img class="project-cover" src="${project.cover}" alt="${project.title}" loading="lazy">
      ${videoTag}
    </div>
    <div class="project-year">${project.year}</div>
  `;

  // Lance la vidéo au survol (souris) et l'arrête quand on quitte la ligne
  if (project.video) {
    const videoEl = row.querySelector('.project-cover-video');
    row.addEventListener('mouseenter', () => {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    });
    row.addEventListener('mouseleave', () => {
      videoEl.pause();
    });
  }

  // Un clic (ou Entrée au clavier) ouvre la galerie photo du projet
  const openThisGallery = () => openGallery(project);
  row.addEventListener('click', openThisGallery);
  row.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openThisGallery();
    }
  });

  container.appendChild(row);
}

projects.forEach((project) => {
  if (project.category === 'motion') {
    renderProjectRow(project, motionContainer, 'motion');
  } else {
    // "mapping" et toute catégorie non reconnue vont par défaut dans la colonne mapping
    renderProjectRow(project, mappingContainer, 'mapping');
  }
});

// Génère les logos partenaires à partir de partners.js (dupliqués une fois pour la boucle infinie)
const partnersContainer = document.getElementById('partners-container');

if (partnersContainer && typeof partners !== 'undefined') {
  const renderPartnerItem = (partner) => {
    const item = document.createElement('div');
    item.className = 'partner-item';

    item.innerHTML = partner.logo
      ? `<img src="${partner.logo}" alt="${partner.name}" loading="lazy">`
      : `<span class="partner-name">${partner.name}</span>`;

    partnersContainer.appendChild(item);
  };

  // On répète la liste deux fois : le CSS anime -50% puis reboucle sur la copie identique
  partners.forEach(renderPartnerItem);
  partners.forEach(renderPartnerItem);
}

// ==========================================================
// GALERIE PHOTO (LIGHTBOX)
// ==========================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMeta = document.getElementById('lightbox-meta');
const lightboxLink = document.getElementById('lightbox-link');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxClose = document.getElementById('lightbox-close');

let currentGallery = [];
let currentIndex = 0;

function openGallery(project) {
  // Utilise project.images s'il y a au moins une photo, sinon retombe sur la seule "cover"
  currentGallery = (project.images && project.images.length > 0)
    ? project.images
    : [project.cover];
  currentIndex = 0;

  lightboxTitle.textContent = project.title;
  lightboxMeta.textContent = `${project.type} — ${project.year}`;

  if (project.link && project.link !== '#') {
    lightboxLink.href = project.link;
    lightboxLink.hidden = false;
  } else {
    lightboxLink.hidden = true;
  }

  showImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden'; // empêche le scroll derrière la galerie
}

function showImage() {
  lightboxImg.src = currentGallery[currentIndex];
  // Masque les flèches s'il n'y a qu'une seule photo
  const multiple = currentGallery.length > 1;
  lightboxPrev.style.visibility = multiple ? 'visible' : 'hidden';
  lightboxNext.style.visibility = multiple ? 'visible' : 'hidden';
}

function closeGallery() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage();
}

lightboxClose.addEventListener('click', closeGallery);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

// Clic sur le fond sombre (en dehors de l'image) pour fermer
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeGallery();
});

// Navigation au clavier
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});
