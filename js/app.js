/**
 * TEAM BAJA BHAIS — Main Application Controller
 * PSG College of Technology, Coimbatore
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHorizontalTimelineWithBuggy();
  initTeamRoster();
  initGarageTracker();
  initCurrentSponsors();
  initSponsorshipTiers();
  initMediaGallery();
  initContactForm();
  initModals();
  initScrollAnimations();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL TRACKING
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileClose = document.getElementById('mobile-menu-close');
  const navDrawer = document.getElementById('nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation drawer toggle
  if (mobileBtn && navDrawer) {
    const closeDrawer = () => {
      navDrawer.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navDrawer.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeDrawer();
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close when clicking outside drawer on mobile
    document.addEventListener('click', (e) => {
      if (navDrawer.classList.contains('open') && !navDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (activeLink) activeLink.classList.add('active');
      } else {
        if (activeLink) activeLink.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   2. HORIZONTAL TIMELINE WITH ANIMATED MOVING BUGGY (BB-19 TO BB-01)
   ========================================================================== */
let currentTimelineEra = 'all';

function initHorizontalTimelineWithBuggy() {
  const timelineContainer = document.getElementById('timeline-container');
  const trackFlex = document.getElementById('timeline-track-flex');
  const buggyEl = document.getElementById('timeline-moving-buggy');
  const progressRail = document.getElementById('timeline-track-progress');
  const prevBtn = document.getElementById('timeline-prev');
  const nextBtn = document.getElementById('timeline-next');
  const eraPills = document.querySelectorAll('.era-pill-btn');

  if (!timelineContainer || !trackFlex || !BAJA_DATA.timelineCars) return;

  // Filter cars based on selected era
  const getFilteredCars = () => {
    if (currentTimelineEra === 'all') return BAJA_DATA.timelineCars;
    return BAJA_DATA.timelineCars.filter(c => c.era === currentTimelineEra);
  };

  // Render horizontal timeline nodes
  const renderTimelineCards = () => {
    const cars = getFilteredCars();

    trackFlex.innerHTML = cars.map((car, idx) => `
      <div class="timeline-node" data-code="${car.code}" data-index="${idx}">
        <div class="timeline-dot-h"></div>
        <div class="timeline-card-box">
          <div class="timeline-img-wrap">
            <img src="${car.image}" alt="${car.name}" onerror="this.onerror=null; this.src='${car.fallbackImage}';" loading="lazy">
            <div class="timeline-year-tag">${car.season}</div>
          </div>
          <div class="timeline-card-body">
            <h3 class="timeline-car-name">${car.name}</h3>
            <span class="timeline-award-badge ${car.badge.includes('FLAGSHIP') || car.badge.includes('CHAMPION') || car.badge.includes('WINNER') ? 'gold' : ''}">
              <i class="fa-solid fa-trophy"></i> ${car.badge}
            </span>
            <p class="timeline-card-text">${car.story}</p>
            <div class="timeline-card-footer-action">
              <span style="font-family: var(--font-tech); font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">
                <i class="fa-solid fa-bolt"></i> ${car.specs.drivetrain}
              </span>
              <button class="btn-card-compare" onclick="openCarComparator('${car.code}', 'BB-01')">
                <i class="fa-solid fa-code-compare"></i> COMPARE
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Reset scroll to beginning
    timelineContainer.scrollLeft = 0;
    updateBuggyPosition();
  };

  // Update animated buggy and track progress bar position
  const updateBuggyPosition = () => {
    const maxScroll = timelineContainer.scrollWidth - timelineContainer.clientWidth;
    const progress = maxScroll > 0 ? timelineContainer.scrollLeft / maxScroll : 0;
    const percentage = Math.min(Math.max(progress * 100, 0), 100);

    if (progressRail) {
      progressRail.style.width = `${percentage}%`;
    }
    if (buggyEl) {
      buggyEl.style.left = `${percentage}%`;
    }
  };

  // Bind scroll event to update moving buggy
  timelineContainer.addEventListener('scroll', updateBuggyPosition, { passive: true });

  // Navigation Arrows (scroll by 360px per click)
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      timelineContainer.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      timelineContainer.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  // Era filter pill buttons
  eraPills.forEach(btn => {
    btn.addEventListener('click', () => {
      eraPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTimelineEra = btn.getAttribute('data-era');
      renderTimelineCards();
    });
  });

  // Drag to scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  timelineContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    timelineContainer.classList.add('active-drag');
    startX = e.pageX - timelineContainer.offsetLeft;
    scrollLeft = timelineContainer.scrollLeft;
  });

  timelineContainer.addEventListener('mouseleave', () => { isDown = false; });
  timelineContainer.addEventListener('mouseup', () => { isDown = false; });

  timelineContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timelineContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    timelineContainer.scrollLeft = scrollLeft - walk;
  });

  // Initial render
  renderTimelineCards();
}

/* ==========================================================================
   3. SIDE-BY-SIDE CAR COMPARISON MODAL
   ========================================================================== */
function openCarComparator(carCodeA = 'BB-19', carCodeB = 'BB-01') {
  const modal = document.getElementById('car-comparator-modal');
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  const tableContainer = document.getElementById('compare-table-container');

  if (!modal || !BAJA_DATA.timelineCars) return;

  // Populate Selects
  const optionsHtml = BAJA_DATA.timelineCars.map(c => `
    <option value="${c.code}">${c.code} — ${c.name} (${c.season})</option>
  `).join('');

  if (selectA) {
    selectA.innerHTML = optionsHtml;
    selectA.value = carCodeA;
    selectA.onchange = () => renderComparisonTable();
  }

  if (selectB) {
    selectB.innerHTML = optionsHtml;
    selectB.value = carCodeB;
    selectB.onchange = () => renderComparisonTable();
  }

  const renderComparisonTable = () => {
    const codeA = selectA ? selectA.value : carCodeA;
    const codeB = selectB ? selectB.value : carCodeB;
    const carA = BAJA_DATA.timelineCars.find(c => c.code === codeA) || BAJA_DATA.timelineCars[0];
    const carB = BAJA_DATA.timelineCars.find(c => c.code === codeB) || BAJA_DATA.timelineCars[BAJA_DATA.timelineCars.length - 1];

    if (!tableContainer) return;

    tableContainer.innerHTML = `
      <div class="comparator-grid-layout">
        <!-- Car A Card -->
        <div class="comparator-col-card">
          <div class="comparator-header">
            <span class="timeline-award-badge">${carA.badge}</span>
            <h4 class="comparator-car-name">${carA.name}</h4>
            <span class="comparator-season text-accent">${carA.season}</span>
          </div>
          <div class="comparator-img-box">
            <img src="${carA.image}" alt="${carA.name}" onerror="this.onerror=null; this.src='${carA.fallbackImage}';">
          </div>
          <div class="comparator-specs-list">
            <div class="comp-row"><span class="comp-k">Drivetrain:</span> <strong class="comp-v">${carA.specs.drivetrain}</strong></div>
            <div class="comp-row"><span class="comp-k">Weight:</span> <strong class="comp-v">${carA.specs.weight}</strong></div>
            <div class="comp-row"><span class="comp-k">Engine:</span> <strong class="comp-v">${carA.specs.engine}</strong></div>
            <div class="comp-row"><span class="comp-k">Top Velocity:</span> <strong class="comp-v text-yellow">${carA.specs.topSpeed}</strong></div>
            <div class="comp-row"><span class="comp-k">Transmission:</span> <strong class="comp-v">${carA.specs.transmission}</strong></div>
            <div class="comp-row"><span class="comp-k">Suspension:</span> <strong class="comp-v">${carA.specs.suspension}</strong></div>
          </div>
        </div>

        <!-- VS Divider Badge -->
        <div class="comparator-vs-badge">VS</div>

        <!-- Car B Card -->
        <div class="comparator-col-card">
          <div class="comparator-header">
            <span class="timeline-award-badge">${carB.badge}</span>
            <h4 class="comparator-car-name">${carB.name}</h4>
            <span class="comparator-season text-accent">${carB.season}</span>
          </div>
          <div class="comparator-img-box">
            <img src="${carB.image}" alt="${carB.name}" onerror="this.onerror=null; this.src='${carB.fallbackImage}';">
          </div>
          <div class="comparator-specs-list">
            <div class="comp-row"><span class="comp-k">Drivetrain:</span> <strong class="comp-v">${carB.specs.drivetrain}</strong></div>
            <div class="comp-row"><span class="comp-k">Weight:</span> <strong class="comp-v">${carB.specs.weight}</strong></div>
            <div class="comp-row"><span class="comp-k">Engine:</span> <strong class="comp-v">${carB.specs.engine}</strong></div>
            <div class="comp-row"><span class="comp-k">Top Velocity:</span> <strong class="comp-v text-yellow">${carB.specs.topSpeed}</strong></div>
            <div class="comp-row"><span class="comp-k">Transmission:</span> <strong class="comp-v">${carB.specs.transmission}</strong></div>
            <div class="comp-row"><span class="comp-k">Suspension:</span> <strong class="comp-v">${carB.specs.suspension}</strong></div>
          </div>
        </div>
      </div>
    `;
  };

  renderComparisonTable();
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

window.openCarComparator = openCarComparator;

/* ==========================================================================
   4. TEAM ROSTER & DEPARTMENT FILTERING (7 LEADS)
   ========================================================================== */
function initTeamRoster() {
  const teamGrid = document.getElementById('team-members-grid');
  const filterBtns = document.querySelectorAll('.team-filter-btn');
  if (!teamGrid || !BAJA_DATA.teamMembers) return;

  const renderMembers = (filter) => {
    const filtered = filter === 'all' 
      ? BAJA_DATA.teamMembers 
      : BAJA_DATA.teamMembers.filter(m => m.dept === filter);

    teamGrid.innerHTML = filtered.map(member => `
      <div class="team-card" data-dept="${member.dept}">
        <div class="team-card-image">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
          <div class="team-card-dept-badge">${member.dept.toUpperCase()}</div>
        </div>
        <div class="team-card-body">
          <h4 class="team-card-name">${member.name}</h4>
          <p class="team-card-role text-accent">${member.role}</p>
          <p class="team-card-discipline"><i class="fa-solid fa-graduation-cap"></i> ${member.discipline}</p>
          <div class="team-card-quote">
            <i class="fa-solid fa-quote-left"></i> ${member.quote}
          </div>
        </div>
      </div>
    `).join('');
  };

  renderMembers('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const dept = btn.getAttribute('data-filter');
      renderMembers(dept);
    });
  });
}

/* ==========================================================================
   5. LIVE GARAGE BUILD TRACKER
   ========================================================================== */
function initGarageTracker() {
  const progressFill = document.getElementById('garage-progress-fill');
  const progressPercent = document.getElementById('garage-progress-percent');
  const milestoneList = document.getElementById('garage-milestone-list');

  if (!BAJA_DATA.liveGarage) return;

  if (progressFill && progressPercent) {
    progressFill.style.width = `${BAJA_DATA.liveGarage.progress}%`;
    progressPercent.textContent = `${BAJA_DATA.liveGarage.progress}%`;
  }

  if (milestoneList) {
    milestoneList.innerHTML = BAJA_DATA.liveGarage.milestones.map(m => `
      <div class="milestone-item ${m.done ? 'done' : 'pending'}">
        <div class="milestone-icon">
          <i class="fa-solid ${m.done ? 'fa-circle-check text-accent' : 'fa-clock text-muted'}"></i>
        </div>
        <div class="milestone-text">
          <div class="milestone-name">${m.name}</div>
          <div class="milestone-status">${m.date}</div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   6. CURRENT VALUED SPONSORS SHOWCASE
   ========================================================================== */
function initCurrentSponsors() {
  const sponsorsContainer = document.getElementById('current-sponsors-grid');
  if (!sponsorsContainer || !BAJA_DATA.currentSponsors) return;

  sponsorsContainer.innerHTML = BAJA_DATA.currentSponsors.map(sponsor => `
    <div class="current-sponsor-card">
      <div class="sponsor-logo-box">
        <img src="${sponsor.logo}" alt="${sponsor.name} Official Logo" loading="lazy">
      </div>
      <div class="sponsor-card-info">
        <span class="sponsor-category-badge">${sponsor.category}</span>
        <h4 class="sponsor-brand-name">${sponsor.name}</h4>
        <p class="sponsor-brand-desc">${sponsor.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. SPONSORSHIP TIERS
   ========================================================================== */
function initSponsorshipTiers() {
  const tiersContainer = document.getElementById('sponsorship-tiers-grid');
  if (!tiersContainer || !BAJA_DATA.sponsorshipTiers) return;

  tiersContainer.innerHTML = BAJA_DATA.sponsorshipTiers.map(tier => `
    <div class="sponsor-tier-card ${tier.tier}">
      <div class="tier-badge">${tier.badge}</div>
      <h3 class="tier-name">${tier.name}</h3>
      <div class="tier-amount">${tier.amount}</div>
      <div class="tier-divider"></div>
      <ul class="tier-benefits-list">
        ${tier.benefits.map(b => `
          <li><i class="fa-solid fa-chevron-right text-accent"></i> <span>${b}</span></li>
        `).join('')}
      </ul>
      <button class="btn-tier-action" onclick="openSponsorModal('${tier.name}')">
        ${tier.ctaText} <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   8. MEDIA GALLERY & LIGHTBOX
   ========================================================================== */
function initMediaGallery() {
  const mediaGrid = document.getElementById('media-gallery-grid');
  if (!mediaGrid || !BAJA_DATA.mediaGallery) return;

  mediaGrid.innerHTML = BAJA_DATA.mediaGallery.map((item, idx) => `
    <div class="media-gallery-card" onclick="openMediaLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="media-overlay">
        <span class="media-tag">${item.tag}</span>
        <h4 class="media-title">${item.title}</h4>
        <div class="media-zoom-icon"><i class="fa-solid fa-expand"></i> VIEW FULL</div>
      </div>
    </div>
  `).join('');
}

function openMediaLightbox(index) {
  const modal = document.getElementById('media-lightbox-modal');
  const data = BAJA_DATA.mediaGallery[index];
  if (!modal || !data) return;

  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const tagEl = document.getElementById('lightbox-tag');

  if (imgEl) imgEl.src = data.image;
  if (titleEl) titleEl.textContent = data.title;
  if (tagEl) tagEl.textContent = data.tag;

  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

window.openMediaLightbox = openMediaLightbox;

/* ==========================================================================
   9. CONTACT & SPONSORSHIP DISPATCHER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('baja-contact-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> TRANSMITTING...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast(`Transmission received, ${name}! Team Baja Bhais management will respond shortly.`, 'success');
    }, 900);
  });
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast-popup show ${type}`;

  setTimeout(() => {
    toast.className = 'toast-popup';
  }, 4000);
}

/* ==========================================================================
   10. MODALS (SPONSOR DECK & LIGHTBOX)
   ========================================================================== */
function initModals() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });
}

function openSponsorModal(tierName = 'Title') {
  const modal = document.getElementById('sponsor-deck-modal');
  const modalTierField = document.getElementById('contact-type');
  if (modalTierField && tierName) {
    modalTierField.value = 'sponsorship';
  }
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.classList.remove('modal-open');
}

window.openSponsorModal = openSponsorModal;
window.closeAllModals = closeAllModals;

/* ==========================================================================
   11. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.glass-card, .subsystem-card, .team-card, .current-sponsor-card');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}
