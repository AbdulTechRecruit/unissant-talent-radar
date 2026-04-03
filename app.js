// Unissant Talent Radar — Application Logic

let filteredJobs = [];
let sortCol = 'date_posted';
let sortDir = 'desc';
let activeTrack = 'all';

// ─── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderClearanceGuide();
  renderTrackGuide();
  renderClosedJobs();
  applyFilters();
  updateKPIs(JOBS);
  setNavCounts();
});

// ─── Track filter ─────────────────────────────────────────────
function filterTrack(track, el) {
  activeTrack = track;
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

// ─── Main filter + render pipeline ───────────────────────────
function applyFilters() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const filterRemote = document.getElementById('filter-remote').checked;
  const filterNoClr = document.getElementById('filter-no-clearance').checked;
  const filterContingent = document.getElementById('filter-not-contingent').checked;
  const filterClearance = document.getElementById('filter-clearance').value;
  const filterLevel = document.getElementById('filter-level').value;

  filteredJobs = JOBS.filter(job => {
    // Track filter
    if (activeTrack !== 'all') {
      if (job.track !== activeTrack) return false;
    }

    // Search
    if (search) {
      const searchable = [
        job.title, job.location, job.skills, job.contract,
        job.clearance, job.description, job.track, job.level
      ].join(' ').toLowerCase();
      if (!searchable.includes(search)) return false;
    }

    // Remote checkbox
    if (filterRemote && !job.remote) return false;

    // No clearance required
    if (filterNoClr && job.clearance_key !== 'none') return false;

    // Exclude contingent roles
    if (filterContingent && job.contract.toLowerCase().includes('contingent')) return false;

    // Clearance dropdown
    if (filterClearance && job.clearance_key !== filterClearance) return false;

    // Level dropdown
    if (filterLevel && job.level_key !== filterLevel) return false;

    return true;
  });

  filteredJobs = sortJobs(filteredJobs, sortCol, sortDir);
  renderTable(filteredJobs);
  updateResultCount(filteredJobs.length);
  renderActiveFilters();
  updateKPIs(filteredJobs);
}

// ─── Sorting ─────────────────────────────────────────────────
function sortBy(col) {
  if (sortCol === col) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortCol = col;
    sortDir = col === 'date_posted' ? 'desc' : 'asc';
  }
  document.querySelectorAll('.th-sortable').forEach(th => {
    const icon = th.querySelector('.sort-icon');
    if (icon) {
      if (th.dataset.col === col) {
        icon.textContent = sortDir === 'asc' ? '↑' : '↓';
        th.classList.add('sorted');
      } else {
        icon.textContent = '↕';
        th.classList.remove('sorted');
      }
    }
  });
  applyFilters();
}

function sortJobs(jobs, col, dir) {
  return [...jobs].sort((a, b) => {
    let valA, valB;
    if (col === 'date_posted') { valA = new Date(a.date_posted); valB = new Date(b.date_posted); }
    else if (col === 'title') { valA = a.title.toLowerCase(); valB = b.title.toLowerCase(); }
    else if (col === 'location') { valA = a.location.toLowerCase(); valB = b.location.toLowerCase(); }
    else if (col === 'track') { valA = a.track; valB = b.track; }
    else { valA = a[col]; valB = b[col]; }

    if (valA < valB) return dir === 'asc' ? -1 : 1;
    if (valA > valB) return dir === 'asc' ? 1 : -1;
    return 0;
  });
}

// ─── Table rendering ──────────────────────────────────────────
function renderTable(jobs) {
  const tbody = document.getElementById('jobs-tbody');

  if (jobs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" class="no-results">No roles match the current filters.<br><span style="color:var(--color-text-muted);font-size:0.875rem">Try removing a filter or broadening your search.</span></td></tr>';
    return;
  }

  tbody.innerHTML = jobs.map(job => {
    const trackBadge = `<span class="track-badge track-${job.track}">${trackLabel(job.track)}</span>`;
    const clrBadge = clearanceBadge(job.clearance_key, job.clearance);
    const remoteLabel = job.work_type === 'Remote'
      ? '<span class="bool-yes">✓ Remote</span>'
      : job.work_type === 'Hybrid'
        ? '<span class="bool-neutral">Hybrid</span>'
        : '<span class="bool-no">Onsite</span>';
    const contingentTag = job.contract.toLowerCase().includes('contingent')
      ? '<span class="contingent-tag">Contingent</span>'
      : '';

    return `<tr class="job-row" onclick="openDetail(${job.id})" style="cursor:pointer" title="Click for details">
      <td class="td-title">
        <div class="role-title">${job.title}</div>
        <div class="role-meta">${levelBadge(job.level_key, job.level)}</div>
      </td>
      <td class="td-location">${job.location}</td>
      <td>${trackBadge}</td>
      <td>${clrBadge}</td>
      <td>${remoteLabel}</td>
      <td class="td-contract"><span class="contract-label">${job.contract}</span>${contingentTag}</td>
      <td class="td-skills">${skillsPreview(job.skills)}</td>
      <td class="tabular">${formatDate(job.date_posted)}</td>
      <td class="td-exp">${job.experience}</td>
      <td><a href="${job.url}" target="_blank" rel="noopener" class="apply-link" onclick="event.stopPropagation()">View →</a></td>
    </tr>`;
  }).join('');
}

// ─── Detail drawer ────────────────────────────────────────────
function openDetail(id) {
  const job = JOBS.find(j => j.id === id);
  if (!job) return;

  const contingentNote = job.contract.toLowerCase().includes('contingent')
    ? `<div class="detail-alert">⚠️ This role is contingent upon contract award. Candidate pipeline is being built in advance of award.</div>`
    : '';

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-header">
      <div class="detail-track">${trackLabel(job.track)}</div>
      <h2 class="detail-title">${job.title}</h2>
      <div class="detail-agency">${job.location} &mdash; ${job.level}</div>
    </div>
    ${contingentNote}
    <div class="detail-grid">
      <div class="detail-item">
        <div class="detail-label">Clearance Required</div>
        <div class="detail-value">${job.clearance}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Work Type</div>
        <div class="detail-value">${job.work_type}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Experience</div>
        <div class="detail-value">${job.experience}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Education</div>
        <div class="detail-value">${job.education}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Contract / Program</div>
        <div class="detail-value">${job.contract}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Posted</div>
        <div class="detail-value">${formatDate(job.date_posted)}</div>
      </div>
    </div>
    <div class="detail-section">
      <div class="detail-label">Role Description</div>
      <p class="detail-desc">${job.description}</p>
    </div>
    <div class="detail-section">
      <div class="detail-label">🛠 Key Skills & Tech Stack</div>
      <p class="detail-desc highlight-path">${job.skills}</p>
    </div>
    <a href="${job.url}" target="_blank" rel="noopener" class="detail-apply-btn">View Full Job Posting →</a>
  `;
  document.getElementById('detail-overlay').classList.add('open');
}

function closeDetail(e) {
  if (e.target === document.getElementById('detail-overlay')) closeDetailPanel();
}
function closeDetailPanel() {
  document.getElementById('detail-overlay').classList.remove('open');
}

// ─── KPIs ────────────────────────────────────────────────────
function updateKPIs(jobs) {
  document.getElementById('kpi-total').textContent = jobs.length;
  document.getElementById('kpi-remote').textContent = jobs.filter(j => j.remote).length;
  document.getElementById('kpi-no-clearance').textContent = jobs.filter(j => j.clearance_key === 'none' || j.clearance_key === 'public-trust').length;
  document.getElementById('kpi-tssci').textContent = jobs.filter(j => j.clearance_key === 'tssci-poly').length;
  document.getElementById('kpi-contingent').textContent = jobs.filter(j => j.contract.toLowerCase().includes('contingent')).length;
}

function setNavCounts() {
  const tracks = ['aiml', 'qa', 'cloud', 'engineering', 'leadership', 'intern', 'corporate'];
  tracks.forEach(track => {
    const count = JOBS.filter(j => j.track === track).length;
    const el = document.getElementById(`count-${track}`);
    if (el) el.textContent = count;
  });
  document.getElementById('count-all').textContent = JOBS.length;
}

// ─── Active filter chips ──────────────────────────────────────
function renderActiveFilters() {
  const container = document.getElementById('active-filters');
  const chips = [];

  const search = document.getElementById('search-input').value.trim();
  if (search) chips.push(`Search: "${search}"`);
  if (document.getElementById('filter-remote').checked) chips.push('Remote only');
  if (document.getElementById('filter-no-clearance').checked) chips.push('No clearance required');
  if (document.getElementById('filter-not-contingent').checked) chips.push('Exclude contingent');
  const clr = document.getElementById('filter-clearance').value;
  if (clr) chips.push(`Clearance: ${clearanceLabelShort(clr)}`);
  const lvl = document.getElementById('filter-level').value;
  if (lvl) chips.push(`Level: ${lvl}`);
  if (activeTrack !== 'all') chips.push(`Track: ${trackLabel(activeTrack)}`);

  if (chips.length === 0) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = `<div class="filter-chips">${chips.map(c => `<span class="filter-chip">${c}</span>`).join('')}<button class="clear-filters" onclick="clearAllFilters()">Clear all</button></div>`;
}

function clearAllFilters() {
  document.getElementById('search-input').value = '';
  ['filter-remote', 'filter-no-clearance', 'filter-not-contingent'].forEach(id => {
    document.getElementById(id).checked = false;
  });
  document.getElementById('filter-clearance').value = '';
  document.getElementById('filter-level').value = '';
  activeTrack = 'all';
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-track="all"]').classList.add('active');
  applyFilters();
}

// ─── Result count ─────────────────────────────────────────────
function updateResultCount(count) {
  document.getElementById('result-count').textContent = `${count} of ${JOBS.length} open requisitions`;
}

// ─── Clearance guide panel ────────────────────────────────────
function renderClearanceGuide() {
  const grid = document.getElementById('clearance-grid');
  if (!grid) return;
  grid.innerHTML = CLEARANCE_GUIDE.map(c => `
    <div class="hire-card tier-${c.tier}">
      <div class="hire-agency" style="color:${c.color}">${c.label}</div>
      <div class="hire-days">${c.time}</div>
      <div class="hire-note">${c.desc}</div>
    </div>
  `).join('');
}

// ─── Track guide ─────────────────────────────────────────────
function renderTrackGuide() {
  const grid = document.getElementById('path-grid');
  if (!grid) return;
  grid.innerHTML = TRACK_GUIDE.map(p => `
    <div class="path-card">
      <div class="path-header" style="border-left:3px solid ${p.color}">
        <span class="path-icon">${p.icon}</span>
        <span class="path-track">${p.track}</span>
      </div>
      <div class="path-steps">
        ${p.steps.map(s => `
          <div class="path-step">
            <div class="path-step-label">${s.label}</div>
            <div class="path-step-desc">${s.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ─── Closed jobs table ───────────────────────────────────────
function renderClosedJobs() {
  const tbody = document.getElementById('closed-tbody');
  const countEl = document.getElementById('closed-count');
  if (!tbody) return;

  if (!CLOSED_JOBS || CLOSED_JOBS.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" class="no-results" style="color:var(--color-text-muted);font-size:0.85rem">No closed positions recorded yet. The sync will log roles here automatically when they are removed from the careers site.</td></tr>';
    if (countEl) countEl.style.display = 'none';
    return;
  }

  // Sort most recently closed first
  const sorted = [...CLOSED_JOBS].sort((a, b) => new Date(b.closed_date) - new Date(a.closed_date));
  if (countEl) { countEl.textContent = sorted.length; countEl.style.display = ''; }

  tbody.innerHTML = sorted.map(job => {
    const posted = new Date(job.date_posted + 'T12:00:00');
    const closed = new Date(job.closed_date + 'T12:00:00');
    const daysOpen = Math.ceil((closed - posted) / (1000 * 60 * 60 * 24));
    const clrBadge = clearanceBadge(job.clearance_key, job.clearance);
    const trackBadge = `<span class="track-badge track-${job.track}">${trackLabel(job.track)}</span>`;

    return `<tr class="closed-row">
      <td class="td-title">
        <div class="role-title" style="color:var(--color-text-muted)">${job.title}</div>
        <div class="role-meta">${levelBadge(job.level_key, job.level)}</div>
      </td>
      <td class="td-location">${job.location}</td>
      <td>${trackBadge}</td>
      <td>${clrBadge}</td>
      <td><span style="font-size:0.82rem;color:var(--color-text-muted)">${job.work_type}</span></td>
      <td class="td-contract"><span class="contract-label">${job.contract}</span></td>
      <td class="tabular" style="font-size:0.82rem">${formatDate(job.date_posted)}</td>
      <td class="closed-date-col tabular">${formatDate(job.closed_date)}</td>
      <td class="days-open">${daysOpen}d</td>
      <td><a href="${job.url}" target="_blank" rel="noopener" class="archive-link" title="Archived link — may no longer be active">Archive →</a></td>
    </tr>`;
  }).join('');
}

// ─── CSV Export ───────────────────────────────────────────────
function exportCSV() {
  const headers = [
    'Role Title', 'Location', 'Track', 'Level', 'Clearance Required',
    'Work Type', 'Remote', 'Contract / Program',
    'Experience Required', 'Education Required',
    'Key Skills', 'Date Posted', 'Apply URL'
  ];

  const rows = (filteredJobs.length > 0 ? filteredJobs : JOBS).map(job => {
    return [
      `"${job.title}"`,
      `"${job.location}"`,
      `"${trackLabel(job.track)}"`,
      `"${job.level}"`,
      `"${job.clearance}"`,
      `"${job.work_type}"`,
      job.remote ? 'Yes' : 'No',
      `"${job.contract}"`,
      `"${job.experience.replace(/"/g, '""')}"`,
      `"${job.education.replace(/"/g, '""')}"`,
      `"${job.skills.replace(/"/g, '""')}"`,
      `"${job.date_posted}"`,
      `"${job.url}"`
    ].join(',');
  });

  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `unissant-talent-radar-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── Sidebar toggle ───────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
  document.querySelector('.main-area').classList.toggle('sidebar-collapsed');
}

// ─── Theme toggle ─────────────────────────────────────────────
(function() {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  t && t.addEventListener('click', () => {
    const isDark = r.getAttribute('data-theme') === 'dark';
    r.setAttribute('data-theme', isDark ? 'light' : 'dark');
    t.setAttribute('aria-label', isDark ? 'Switch to dark mode' : 'Switch to light mode');
    t.innerHTML = isDark
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  });
})();

// ─── Helpers ──────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function trackLabel(t) {
  const map = {
    aiml: 'AI / ML',
    qa: 'Automation / QA',
    cloud: 'Cloud / DevSecOps',
    engineering: 'Engineering',
    leadership: 'Program Mgmt',
    intern: 'Intern',
    corporate: 'Corporate'
  };
  return map[t] || t;
}

function clearanceLabelShort(key) {
  const map = {
    'none': 'None',
    'public-trust': 'Public Trust',
    'dhs': 'DHS',
    'cbp-bi': 'CBP BI',
    'ts': 'TS/SCI',
    'tssci-poly': 'TS/SCI+Poly'
  };
  return map[key] || key;
}

function clearanceBadge(key, label) {
  const map = {
    'none': 'clr-none',
    'public-trust': 'clr-public-trust',
    'dhs': 'clr-dhs',
    'cbp-bi': 'clr-cbp',
    'ts': 'clr-ts',
    'tssci-poly': 'clr-tssci-poly'
  };
  const cls = map[key] || 'clr-other';
  const short = {
    'none': 'None',
    'public-trust': 'Public Trust',
    'dhs': 'Active DHS',
    'cbp-bi': 'CBP BI',
    'ts': 'TS/SCI',
    'tssci-poly': 'TS/SCI + Poly'
  }[key] || label;
  return `<span class="clr-badge ${cls}">${short}</span>`;
}

function levelBadge(key, label) {
  const cls = {
    'intern': 'lvl-intern',
    'mid': 'lvl-mid',
    'senior': 'lvl-senior',
    'principal': 'lvl-principal',
    'executive': 'lvl-executive'
  }[key] || 'lvl-mid';
  return `<span class="lvl-badge ${cls}">${label}</span>`;
}

function skillsPreview(skills) {
  const parts = skills.split(',').map(s => s.trim());
  const preview = parts.slice(0, 3).join(', ');
  const more = parts.length > 3 ? ` <span class="skills-more">+${parts.length - 3}</span>` : '';
  return `<span class="skills-preview" title="${skills}">${preview}${more}</span>`;
}
