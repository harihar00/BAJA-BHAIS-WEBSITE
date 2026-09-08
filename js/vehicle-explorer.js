/**
 * TEAM BAJA BHAIS — Buggy Perspective & 4 Core Subsystem Explorer
 */

class VehicleExplorer {
  constructor() {
    this.currentSubsystem = 'powertrain';
    this.currentView = 'hero';
    this.initSubsystemTabs();
    this.initViewSwitcher();
    this.initParallaxTilt();
    this.renderSubsystemDetails('powertrain');
  }

  initSubsystemTabs() {
    const selectorBtns = document.querySelectorAll('.subsystem-tab-btn');
    selectorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subsystemId = btn.getAttribute('data-subsystem');
        this.selectSubsystem(subsystemId);
      });
    });
  }

  selectSubsystem(id) {
    if (!BAJA_DATA.vehicle || !BAJA_DATA.vehicle.subsystems || !BAJA_DATA.vehicle.subsystems[id]) return;
    this.currentSubsystem = id;

    // Update active tabs
    document.querySelectorAll('.subsystem-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subsystem') === id);
    });

    this.renderSubsystemDetails(id);
  }

  renderSubsystemDetails(id) {
    const data = BAJA_DATA.vehicle && BAJA_DATA.vehicle.subsystems && BAJA_DATA.vehicle.subsystems[id];
    if (!data) return;

    const detailContainer = document.getElementById('subsystem-detail-content');
    if (!detailContainer) return;

    detailContainer.style.opacity = '0';
    detailContainer.style.transform = 'translateY(10px)';

    setTimeout(() => {
      detailContainer.innerHTML = `
        <div class="subsystem-header">
          <div class="subsystem-meta">
            <span class="subsystem-tag"><i class="fa-solid fa-bolt"></i> ${data.tag}</span>
            <span class="subsystem-badge">${data.badge}</span>
          </div>
          <h3 class="subsystem-title">${data.title}</h3>
          <p class="subsystem-desc">${data.description}</p>
        </div>

        <div class="spec-matrix-grid">
          ${data.specs.map(spec => `
            <div class="spec-matrix-item">
              <span class="spec-matrix-label">${spec.label}</span>
              <span class="spec-matrix-value">${spec.value}</span>
            </div>
          `).join('')}
        </div>

        <div class="subsystem-highlights">
          <h4 class="highlights-title"><i class="fa-solid fa-crosshairs"></i> CORE ENGINEERING OBJECTIVES</h4>
          <ul class="highlights-list">
            ${data.highlights.map(item => `
              <li><i class="fa-solid fa-check-double text-accent"></i> <span>${item}</span></li>
            `).join('')}
          </ul>
        </div>
      `;

      detailContainer.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      detailContainer.style.opacity = '1';
      detailContainer.style.transform = 'translateY(0)';
    }, 150);
  }

  initViewSwitcher() {
    const viewButtons = document.querySelectorAll('.view-angle-btn');
    const mainCarImage = document.getElementById('main-car-view');
    const viewLabel = document.getElementById('current-view-label');

    const views = {
      hero: { src: 'assets/hero_buggy.jpg', label: 'PERSPECTIVE: STUDIO GARAGE 3/4' },
      cad: { src: 'assets/cad_wireframe.jpg', label: 'PERSPECTIVE: 3D CAD & SUSPENSION' },
      action: { src: 'assets/race_action.jpg', label: 'PERSPECTIVE: TRACK ACTION' },
      weld: { src: 'assets/workshop_weld.jpg', label: 'PERSPECTIVE: PSG WORKSHOP FABRICATION' }
    };

    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const viewKey = btn.getAttribute('data-view');
        if (!views[viewKey] || !mainCarImage) return;

        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        mainCarImage.style.opacity = '0.3';
        mainCarImage.style.transform = 'scale(0.98)';

        setTimeout(() => {
          mainCarImage.src = views[viewKey].src;
          if (viewLabel) viewLabel.textContent = views[viewKey].label;
          mainCarImage.style.opacity = '1';
          mainCarImage.style.transform = 'scale(1)';
        }, 200);
      });
    });
  }

  initParallaxTilt() {
    const container = document.querySelector('.car-stage-wrapper');
    const image = document.getElementById('main-car-view');

    if (!container || !image) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / (rect.height / 2)) * -4;
      const tiltY = (x / (rect.width / 2)) * 4;

      image.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    container.addEventListener('mouseleave', () => {
      image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.vehicleExplorer = new VehicleExplorer();
});
