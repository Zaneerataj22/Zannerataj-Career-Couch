// ===== MOTIVATION QUOTES =====
const quotes = [
  { text: "Every rejection is a redirection. The right company is still waiting for you.", author: "Career Wisdom" },
  { text: "You didn't come this far to only come this far. Keep applying.", author: "Unknown" },
  { text: "No response doesn't mean no forever. It means not yet.", author: "Job Search Reality" },
  { text: "Your skills are real. Your experience is real. The right door will open.", author: "For Zaneera" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "The job search is a numbers game. More applications = more chances.", author: "Career Coach" },
  { text: "Don't count the rejections. Count the lessons.", author: "Unknown" },
  { text: "One 'yes' is all it takes. Keep going until you get it.", author: "Job Search Truth" },
  { text: "You are not behind. You are on your own timeline.", author: "Self Reminder" },
  { text: "Every interview — even a rejection — makes you sharper for the next one.", author: "Growth Mindset" },
  { text: "The companies that rejected you just made room for the one that deserves you.", author: "Perspective" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Your resume got you this far. Your preparation will take you further.", author: "Interview Prep" },
  { text: "Silence from a company is not a verdict on your worth.", author: "Mental Health Reminder" },
  { text: "Apply. Follow up. Practice. Repeat. The breakthrough is closer than you think.", author: "Daily Mantra" },
  { text: "You have 1.5+ years of real experience. That is not nothing. That is everything.", author: "For Zaneera 💜" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Consistency beats intensity. Show up every day.", author: "Career Advice" },
  { text: "Every expert was once a beginner who refused to give up.", author: "Unknown" },
  { text: "Your next job is one application away. Don't stop now.", author: "Keep Going" },
  { text: "Rejection is not failure. Stopping is failure.", author: "Mindset" },
  { text: "You are building something. It takes time. Trust the process.", author: "Process" },
  { text: "The interview you're nervous about is the one that will change your life.", author: "Courage" },
  { text: "Skills + Consistency + Patience = Dream Job. You have all three.", author: "Formula" },
  { text: "Don't let one bad interview define your entire journey.", author: "Resilience" }
];

let currentQuoteIndex = 0;

function showQuote(index) {
  const q = quotes[index];
  document.getElementById('quoteText').textContent = q.text;
  document.getElementById('quoteAuthor').textContent = '— ' + q.author;
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentQuoteIndex);
}

function randomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  showQuote(currentQuoteIndex);
}

function renderQuoteGrid() {
  const grid = document.getElementById('quoteGrid');
  const sample = quotes.sort(() => Math.random() - 0.5).slice(0, 6);
  grid.innerHTML = sample.map(q => `
    <div class="mini-quote" onclick="setQuote('${q.text.replace(/'/g,"\\'")}','${q.author}')">
      "${q.text}"
      <div class="mq-author">— ${q.author}</div>
    </div>
  `).join('');
}

function setQuote(text, author) {
  document.getElementById('quoteText').textContent = text;
  document.getElementById('quoteAuthor').textContent = '— ' + author;
}

// ===== JOB TRACKER =====
function getJobs() {
  return JSON.parse(localStorage.getItem('zt_jobs') || '[]');
}

function saveJobs(jobs) {
  localStorage.setItem('zt_jobs', JSON.stringify(jobs));
}

function addJob() {
  const company = document.getElementById('jobCompany').value.trim();
  const role = document.getElementById('jobRole').value.trim();
  const date = document.getElementById('jobDate').value;
  const status = document.getElementById('jobStatus').value;
  const source = document.getElementById('jobSource').value.trim();
  const note = document.getElementById('jobNote').value.trim();

  if (!company || !role) {
    alert('Please enter Company Name and Job Role!');
    return;
  }

  const jobs = getJobs();
  jobs.unshift({
    id: Date.now(),
    company, role,
    date: date || new Date().toISOString().split('T')[0],
    status, source, note
  });
  saveJobs(jobs);

  // clear form
  document.getElementById('jobCompany').value = '';
  document.getElementById('jobRole').value = '';
  document.getElementById('jobDate').value = '';
  document.getElementById('jobSource').value = '';
  document.getElementById('jobNote').value = '';
  document.getElementById('jobStatus').value = 'applied';

  renderJobs('all');
  updateStats();
  checkMotivation();
}

function deleteJob(id) {
  if (!confirm('Remove this application?')) return;
  const jobs = getJobs().filter(j => j.id !== id);
  saveJobs(jobs);
  renderJobs(currentFilter);
  updateStats();
}

function updateStatus(id, newStatus) {
  const jobs = getJobs().map(j => j.id === id ? { ...j, status: newStatus } : j);
  saveJobs(jobs);
  renderJobs(currentFilter);
  updateStats();
  checkMotivation();
}

const statusLabels = {
  applied: '📤 Applied',
  replied: '💬 Got Reply',
  interview: '🎯 Interview',
  rejected: '❌ Rejected',
  offer: '🎉 Offer!',
  pending: '⏳ No Response'
};

const badgeClass = {
  applied: 'badge-applied',
  replied: 'badge-replied',
  interview: 'badge-interview',
  rejected: 'badge-rejected',
  offer: 'badge-offer',
  pending: 'badge-pending'
};

let currentFilter = 'all';

function filterJobs(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  renderJobs(currentFilter);
}

function renderJobs(filter) {
  const list = document.getElementById('jobList');
  let jobs = getJobs();
  if (filter !== 'all') jobs = jobs.filter(j => j.status === filter);

  if (jobs.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${filter === 'all' ? '📋' : '🔍'}</div>
        <p>${filter === 'all' ? 'No applications yet. Add your first one above!' : 'No applications with this status.'}</p>
      </div>`;
    return;
  }

  list.innerHTML = jobs.map(j => `
    <div class="job-card status-${j.status}">
      <div class="job-info">
        <div class="job-title">${j.role}</div>
        <div class="job-company">🏢 ${j.company}</div>
        <div class="job-meta">
          <span>📅 ${j.date}</span>
          ${j.source ? `<span>🔗 ${j.source}</span>` : ''}
        </div>
        ${j.note ? `<div class="job-note">📝 ${j.note}</div>` : ''}
        <div style="margin-top:0.5rem">
          <select onchange="updateStatus(${j.id}, this.value)" style="background:var(--bg);border:1px solid var(--border);color:var(--text);padding:0.25rem 0.5rem;border-radius:6px;font-size:0.78rem;cursor:pointer">
            ${Object.entries(statusLabels).map(([val, lbl]) =>
              `<option value="${val}" ${j.status === val ? 'selected' : ''}>${lbl}</option>`
            ).join('')}
          </select>
        </div>
      </div>
      <div class="job-actions">
        <span class="status-badge ${badgeClass[j.status]}">${statusLabels[j.status]}</span>
        <button class="job-del-btn" onclick="deleteJob(${j.id})">🗑 Remove</button>
      </div>
    </div>
  `).join('');
}

function updateStats() {
  const jobs = getJobs();
  document.getElementById('statTotal').textContent = jobs.length;
  document.getElementById('statReplied').textContent = jobs.filter(j => ['replied','interview','offer'].includes(j.status)).length;
  document.getElementById('statInterview').textContent = jobs.filter(j => j.status === 'interview').length;
  document.getElementById('statRejected').textContent = jobs.filter(j => j.status === 'rejected').length;
  document.getElementById('statPending').textContent = jobs.filter(j => j.status === 'pending').length;
}

// Show motivation when rejections/no-response pile up
function checkMotivation() {
  const jobs = getJobs();
  const noResponse = jobs.filter(j => j.status === 'pending' || j.status === 'rejected').length;
  if (noResponse >= 3) {
    document.getElementById('motivation').scrollIntoView({ behavior: 'smooth', block: 'start' });
    randomQuote();
  }
}

// ===== INIT =====
showQuote(Math.floor(Math.random() * quotes.length));
renderQuoteGrid();
renderJobs('all');
updateStats();
