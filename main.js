// Affiche l'année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Génère les deux bandeaux de projets (mapping / motion) à partir de projects.js
const mappingContainer = document.getElementById('mapping-container');
const motionContainer = document.getElementById('motion-container');

function renderProjectCard(project, container) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');

  // Si une vidéo est renseignée, on l'ajoute par-dessus l'image (cachée par défaut)
  const videoTag = project.video
    ? `<video class="project-cover project-cover-video" src="${project.video}" muted loop playsinline preload="none"></video>`
    : '';

  card.innerHTML = `
    <div class="project-thumb">
      <img class="project-cover" src="${project.cover}" alt="${project.title}" loading="lazy">
      ${videoTag}
    </div>
    <div class="project-card-body">
      <span class="project-type">${project.type}</span>
      <div class="project-title">${project.title}</div>
      <div class="project-year">${project.year}</div>
    </div>
  `;

  // Lance la vidéo au survol (souris) et l'arrête quand on quitte la carte
  if (project.video) {
    const videoEl = card.querySelector('.project-cover-video');
    card.addEventListener('mouseenter', () => {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    });
    card.addEventListener('mouseleave', () => {
      videoEl.pause();
    });
  }

  // Un clic (ou Entrée au clavier) ouvre la page de détail du projet
  const goToProject = () => {
    window.location.href = `project.html?slug=${encodeURIComponent(project.slug)}`;
  };
  card.addEventListener('click', goToProject);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToProject();
    }
  });

  container.appendChild(card);
}

projects.forEach((project) => {
  if (project.category === 'motion') {
    renderProjectCard(project, motionContainer);
  } else {
    // "mapping" et toute catégorie non reconnue vont par défaut dans le bandeau mapping
    renderProjectCard(project, mappingContainer);
  }
});

// Curseur de défilement : relie chaque bandeau horizontal à sa petite barre de progression
// (on peut aussi cliquer ou glisser directement sur la barre pour faire défiler les projets)
function setupScrollCursor(scrollEl, thumbEl) {
  if (!scrollEl || !thumbEl) return;
  const trackEl = thumbEl.parentElement;

  const update = () => {
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    // Largeur du curseur proportionnelle à la part de contenu visible
    const thumbWidthPercent = Math.max((scrollEl.clientWidth / scrollEl.scrollWidth) * 100, 8);
    thumbEl.style.width = `${thumbWidthPercent}%`;

    if (maxScroll <= 0) {
      thumbEl.style.left = '0%';
      return;
    }
    const progress = scrollEl.scrollLeft / maxScroll; // de 0 à 1
    const maxLeftPercent = 100 - thumbWidthPercent;
    thumbEl.style.left = `${progress * maxLeftPercent}%`;
  };

  scrollEl.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update(); // position initiale

  // Déplace le scroll en fonction d'une position horizontale cliquée sur la barre
  const scrollToPosition = (clientX) => {
    const rect = trackEl.getBoundingClientRect();
    const fraction = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    scrollEl.scrollLeft = fraction * maxScroll;
  };

  let isDragging = false;
  let pendingX = null;
  let rafId = null;

  // On ne met à jour le scroll qu'une fois par frame (via requestAnimationFrame)
  // plutôt qu'à chaque micro-mouvement de la souris : le suivi est plus doux.
  const scheduleScroll = (clientX) => {
    pendingX = clientX;
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      scrollToPosition(pendingX);
      rafId = null;
    });
  };

  const startDragging = (clientX) => {
    isDragging = true;
    thumbEl.classList.add('dragging');
    // Désactive le "snap" des cartes pendant le glissement : il crée des à-coups
    scrollEl.style.scrollSnapType = 'none';
    scrollToPosition(clientX);
  };

  const stopDragging = () => {
    if (!isDragging) return;
    isDragging = false;
    thumbEl.classList.remove('dragging');
    scrollEl.style.scrollSnapType = '';
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  trackEl.addEventListener('pointerdown', (e) => {
    trackEl.setPointerCapture(e.pointerId);
    startDragging(e.clientX);
  });

  trackEl.addEventListener('pointermove', (e) => {
    if (isDragging) scheduleScroll(e.clientX);
  });

  trackEl.addEventListener('pointerup', stopDragging);
  trackEl.addEventListener('pointercancel', stopDragging);
}

setupScrollCursor(mappingContainer, document.getElementById('mapping-thumb'));
setupScrollCursor(motionContainer, document.getElementById('motion-thumb'));

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
