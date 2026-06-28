document.addEventListener('DOMContentLoaded', () => {
  createModal();
  renderDayNav();
  renderDays();
  showDay(1);
});

let activeDay = 1;
const allOptions = []; // flat index for modal lookup

// ===== Inline SVG icons =====
const IC = {
  walk: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 21l3-9 4 1.5V7l-4 4M17 8l3 3"/></svg>`,
  star: `<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>`,
  euro: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 8.5A4 4 0 009 12a4 4 0 006 3.5M8 11h6M8 13h6"/></svg>`,
  ext: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>`
};

function renderHeatWarning() {
  document.getElementById('heat-warning').innerHTML =
    `<strong>☀ Heat Wave Alert</strong>${TRIP_DATA.meta.heatWarning}`;
}

function renderDayNav() {
  document.getElementById('day-nav').innerHTML = TRIP_DATA.days.map(d => `
    <button onclick="showDay(${d.dayNumber})" id="nav-${d.dayNumber}">
      Day ${d.dayNumber}
      <span class="nav-theme">${d.theme}</span>
    </button>
  `).join('');
}

function showDay(n) {
  activeDay = n;
  document.querySelectorAll('.day-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.day-nav button').forEach(el => el.classList.remove('active'));
  const sec = document.getElementById(`day-${n}`);
  const btn = document.getElementById(`nav-${n}`);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: document.querySelector('main').offsetTop - 60, behavior: 'smooth' });
}

// ===== Render Days =====
function renderDays() {
  document.getElementById('days-container').innerHTML = TRIP_DATA.days.map(d => `
    <section class="day-section" id="day-${d.dayNumber}">
      <div class="day-header">
        <h2>Day ${d.dayNumber} — ${d.date}</h2>
        <p class="day-subtitle">${d.subtitle}</p>
        <span class="day-budget">Est. ${d.budgetEstimate}</span>
      </div>
      <div class="timeline">
        ${d.slots.map(s => renderNode(s)).join('')}
      </div>
    </section>
  `).join('');
}

// ===== Timeline Node =====
function renderNode(slot) {
  const empty = slot.options.length === 0;
  const cls = empty ? 'tl-node empty' : 'tl-node';

  const cards = slot.options.length > 0
    ? `<div class="options-row">${slot.options.map(o => renderCard(o)).join('')}</div>`
    : '';

  return `
    <div class="${cls}">
      <div class="tl-dot"></div>
      <span class="tl-time">${slot.time}</span>
      <div class="tl-content">
        <div class="tl-label">${slot.label}</div>
        <p class="tl-desc">${slot.description}</p>
        ${cards}
      </div>
    </div>
  `;
}

// ===== Option Card =====
function renderCard(o) {
  const idx = allOptions.length;
  allOptions.push(o);

  const tag = o.type === 'food'
    ? `<span class="opt-tag food">${o.cuisine || 'Food'}</span>`
    : `<span class="opt-tag activity">Activity</span>`;

  const meta = [];
  if (o.distance && o.distance !== '—') meta.push(`<span>${IC.walk} ${o.distance}</span>`);
  if (o.rating && o.rating !== 'N/A') meta.push(`<span>${IC.star} ${o.rating}</span>`);
  if (o.price) meta.push(`<span>${IC.euro} ${o.price}</span>`);

  const link = o.link
    ? `<a href="${o.link}" target="_blank" rel="noopener" class="opt-link" onclick="event.stopPropagation()">${IC.ext} View / Book</a>`
    : '';

  const booking = o.bookingInfo
    ? `<div class="opt-booking">${o.bookingRequired ? '⚠ ' : ''}${o.bookingInfo}</div>`
    : o.bookingRequired
      ? `<div class="opt-booking">⚠ Reservation recommended</div>`
      : '';

  const cuisine = o.cuisine ? `<div class="opt-cuisine">${o.cuisine}</div>` : '';

  return `
    <div class="opt-card" onclick="openModal(${idx})">
      <div class="opt-head">
        <span class="opt-name">${o.name}</span>
        ${tag}
      </div>
      ${cuisine}
      <p class="opt-desc">${o.description}</p>
      <div class="opt-meta">${meta.join('')}</div>
      ${link}
      ${booking}
    </div>
  `;
}

// ===== Modal =====
function createModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';
  overlay.innerHTML = '<div class="modal-card" id="modal-card"></div>';
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(idx) {
  const o = allOptions[idx];
  if (!o) return;

  const tag = o.type === 'food'
    ? `<span class="opt-tag food">${o.cuisine || 'Food'}</span>`
    : `<span class="opt-tag activity">Activity</span>`;

  const meta = [];
  if (o.distance && o.distance !== '—') meta.push(`<span>${IC.walk} ${o.distance}</span>`);
  if (o.rating && o.rating !== 'N/A') meta.push(`<span>${IC.star} ${o.rating}</span>`);
  if (o.price) meta.push(`<span>${IC.euro} ${o.price}</span>`);

  const link = o.link
    ? `<a href="${o.link}" target="_blank" rel="noopener" class="opt-link" onclick="event.stopPropagation()">${IC.ext} View / Book</a>`
    : '';

  const booking = o.bookingInfo
    ? `<div class="opt-booking">${o.bookingRequired ? '⚠ ' : ''}${o.bookingInfo}</div>`
    : o.bookingRequired
      ? `<div class="opt-booking">⚠ Reservation recommended</div>`
      : '';

  const cuisine = o.cuisine ? `<div class="opt-cuisine">${o.cuisine}</div>` : '';

  document.getElementById('modal-card').innerHTML = `
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="opt-head">
      <span class="opt-name">${o.name}</span>
      ${tag}
    </div>
    ${cuisine}
    <p class="opt-desc">${o.description}</p>
    <div class="opt-meta">${meta.join('')}</div>
    ${link}
    ${booking}
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== Budget =====
function renderBudgetSummary() {
  const rows = TRIP_DATA.days.map(d => `
    <tr>
      <td>Day ${d.dayNumber}</td>
      <td>${d.theme}</td>
      <td>${d.budgetEstimate}</td>
    </tr>
  `).join('');

  document.getElementById('budget-summary').innerHTML = `
    <h3>Budget Overview</h3>
    <table class="budget-table">
      <thead><tr><th>Day</th><th>Theme</th><th>Est. Cost</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot>
        <tr>
          <td colspan="2">Trip Total (estimated)</td>
          <td>€3,850–5,700</td>
        </tr>
      </tfoot>
    </table>
    <div class="budget-remaining">
      Total budget: €10,000 (5 × €2,000) — leaves €4,300–6,150 for splurges, shopping &amp; spontaneous experiences.
    </div>
  `;
}

// ===== Info =====
function renderInfoSection() {
  document.getElementById('info-section').innerHTML = `
    <h3>Useful Info</h3>
    <div class="info-grid">
      <div class="info-item">
        <h4>Emergency Numbers</h4>
        <ul>
          <li>General / Police: <strong>112</strong></li>
          <li>Ambulance: <strong>118</strong></li>
        </ul>
      </div>
      <div class="info-item">
        <h4>Getting Around</h4>
        <p>Florence SMN station is a 5-min walk from the hotel. Most of central Florence is walkable (15–20 min across centro). Official white taxis only — Uber is limited.</p>
      </div>
      <div class="info-item">
        <h4>Restaurant Tips</h4>
        <p>Book 2–3 days ahead for popular trattorias. Many close Sundays or Mondays — always check. Dinner service peaks 8:30–10pm.</p>
      </div>
      <div class="info-item">
        <h4>Key Italian Phrases</h4>
        <ul>
          <li>"Un tavolo per [X], per favore" — A table for [X]</li>
          <li>"Il conto, per favore" — The check, please</li>
          <li>"Posso avere dell'acqua?" — Can I have water?</li>
          <li>"Dove si trova...?" — Where is...?</li>
        </ul>
      </div>
    </div>
  `;
}
