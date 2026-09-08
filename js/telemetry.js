/**
 * TEAM BAJA BHAIS — Telemetry & Web Audio Engine Synthesizer
 */

class BajaTelemetry {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.isRevving = false;
    this.initClock();
    this.initAudioIgnition();
    this.initTachometer();
  }

  // Live HUD race timer & status
  initClock() {
    const clockEl = document.getElementById('hud-clock');
    const updateTime = () => {
      if (!clockEl) return;
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      clockEl.textContent = `${hours}:${mins}:${secs}.${ms} IST`;
    };
    setInterval(updateTime, 40);
    updateTime();
  }

  // Web Audio API engine rev synthesizer
  initAudioIgnition() {
    const igniteBtn = document.getElementById('btn-ignition');
    const muteBtn = document.getElementById('btn-mute');

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        muteBtn.classList.toggle('muted', this.isMuted);
        muteBtn.innerHTML = this.isMuted 
          ? '<i class="fa-solid fa-volume-xmark"></i> <span>MUTED</span>' 
          : '<i class="fa-solid fa-volume-high"></i> <span>AUDIO ON</span>';
      });
    }

    if (igniteBtn) {
      igniteBtn.addEventListener('click', () => {
        this.revEngine();
      });
    }
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  revEngine() {
    if (this.isRevving) return;
    this.isRevving = true;

    // Visual feedback
    const igniteBtn = document.getElementById('btn-ignition');
    const tachNeedle = document.getElementById('tach-needle');
    const rpmValue = document.getElementById('rpm-value');
    const sparkEffect = document.getElementById('ignition-spark');

    if (igniteBtn) igniteBtn.classList.add('active-rev');
    if (sparkEffect) sparkEffect.classList.add('firing');

    // Animate RPM to 3800 RPM
    this.animateRPM(850, 3800, 1600);

    if (!this.isMuted) {
      try {
        const ctx = this.getAudioContext();
        if (ctx) {
          this.synthesizeEngineSound(ctx);
        }
      } catch (err) {
        console.warn('Audio synthesis note:', err);
      }
    }

    setTimeout(() => {
      this.animateRPM(3800, 850, 1200);
      if (igniteBtn) igniteBtn.classList.remove('active-rev');
      if (sparkEffect) sparkEffect.classList.remove('firing');
      this.isRevving = false;
    }, 1800);
  }

  synthesizeEngineSound(ctx) {
    const now = ctx.currentTime;
    
    // Low frequency thump (Cylinder strokes)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Distortion for aggressive exhaust rasp
    const waveShaper = ctx.createWaveShaper();
    waveShaper.curve = this.makeDistortionCurve(18);

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    // Pitch sweep (Idle 55Hz -> Rev 140Hz -> Idle 55Hz)
    osc1.frequency.setValueAtTime(50, now);
    osc1.frequency.exponentialRampToValueAtTime(145, now + 0.5);
    osc1.frequency.exponentialRampToValueAtTime(160, now + 1.1);
    osc1.frequency.exponentialRampToValueAtTime(52, now + 2.4);

    osc2.frequency.setValueAtTime(100, now);
    osc2.frequency.exponentialRampToValueAtTime(290, now + 0.5);
    osc2.frequency.exponentialRampToValueAtTime(320, now + 1.1);
    osc2.frequency.exponentialRampToValueAtTime(104, now + 2.4);

    // Filter cutoff opening with throttle
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(400, now + 2.4);

    // Gain envelope
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.linearRampToValueAtTime(0.4, now + 0.15);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 1.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    // Exhaust crackle noise burst
    this.synthesizeExhaustPuffs(ctx, now + 0.4, 6);

    osc1.connect(waveShaper);
    osc2.connect(waveShaper);
    waveShaper.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.6);
    osc2.stop(now + 2.6);
  }

  synthesizeExhaustPuffs(ctx, startTime, count) {
    for (let i = 0; i < count; i++) {
      const puffTime = startTime + (i * 0.18) + (Math.random() * 0.05);
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        output[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.25));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const puffFilter = ctx.createBiquadFilter();
      puffFilter.type = 'bandpass';
      puffFilter.frequency.value = 450 + Math.random() * 300;
      puffFilter.Q.value = 3.0;

      const puffGain = ctx.createGain();
      puffGain.gain.setValueAtTime(0.2, puffTime);
      puffGain.gain.exponentialRampToValueAtTime(0.001, puffTime + 0.08);

      noise.connect(puffFilter);
      puffFilter.connect(puffGain);
      puffGain.connect(ctx.destination);

      noise.start(puffTime);
      noise.stop(puffTime + 0.08);
    }
  }

  makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  initTachometer() {
    this.animateRPM(0, 850, 1000);
  }

  animateRPM(startRPM, endRPM, duration) {
    const tachNeedle = document.getElementById('tach-needle');
    const rpmValue = document.getElementById('rpm-value');
    if (!tachNeedle && !rpmValue) return;

    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentRPM = Math.round(startRPM + (endRPM - startRPM) * ease);

      // Max RPM scale 4500 (angle from -120deg to +120deg)
      const angle = -120 + (currentRPM / 4500) * 240;

      if (tachNeedle) tachNeedle.style.transform = `rotate(${angle}deg)`;
      if (rpmValue) rpmValue.textContent = currentRPM.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  // Count up animations for stat numbers
  static initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.getAttribute('data-target'));
          const decimals = target % 1 !== 0 ? 1 : 0;
          const duration = 1800;
          const startTime = performance.now();

          const updateCounter = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = (target * ease).toFixed(decimals);
            entry.target.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              entry.target.textContent = target;
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(counter => observer.observe(counter));
  }
}

// Initialize telemetry on window load
window.addEventListener('DOMContentLoaded', () => {
  window.bajaTelemetry = new BajaTelemetry();
  BajaTelemetry.initCounters();
});
