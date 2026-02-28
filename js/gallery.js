/**
 * Gallery: reveal observer, shuffle, render grid, and category filter.
 * Depends on: portfolio, collagePattern (data.js), openLightbox (lightbox.js).
 */

let revealObserver = null;

function getRevealObserver() {
  if (revealObserver) return revealObserver;

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return revealObserver;
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function renderGallery(filter = 'all') {
  const grid = document.getElementById('gallery');
  const fragment = document.createDocumentFragment();
  const itemsToRender = filter === 'all'
    ? shuffleItems(portfolio)
    : portfolio.filter(item => item.category === filter);

  let visibleIndex = 0;
  let delay = 0;

  itemsToRender.forEach((item) => {
    const el = document.createElement('article');
    const layout = collagePattern[visibleIndex % collagePattern.length];

    el.className = 'gallery-item group cursor-view reveal';
    el.setAttribute('data-shape', layout.shape);

    el.style.setProperty('--col-span', layout.colSpan || 4);
    el.style.setProperty('--row-span', layout.rowSpan || 3);
    el.style.transitionDelay = `${delay}ms`;

    delay += 100;
    visibleIndex += 1;

    el.innerHTML = `
      <div class="w-full h-full bg-stone-900 image-loading">
        <img src="${item.thumb}"
             alt="${item.title}"
             class="w-full h-full object-cover image-hover opacity-90 group-hover:opacity-100"
             loading="lazy"
             decoding="async"
             onload="this.parentElement.classList.remove('image-loading')">
      </div>

      <div class="absolute top-4 left-4 z-20">
        <p class="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-stone-300/90 bg-black/40 px-3 py-1.5 rounded-sm backdrop-blur-md border border-white/5">
          ${item.category}
        </p>
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 z-10">
        <h3 class="text-xl md:text-2xl serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">${item.title}</h3>
        <p class="text-xs md:text-sm text-stone-300 mt-2 tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">${item.location}</p>
      </div>
    `;

    el.onclick = () => openLightbox(item.src, item.title, item.location);
    fragment.appendChild(el);
  });

  grid.replaceChildren(fragment);

  setTimeout(observeElements, 100);
}

function filterGallery(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  renderGallery(category);
}

function observeElements() {
  const observer = getRevealObserver();
  document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
}
