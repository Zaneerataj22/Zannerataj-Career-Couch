// ===== DARK / LIGHT MODE TOGGLE =====
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ===== SKILLS PROGRESS BARS (animate on scroll) =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        const pct = bar.dataset.pct;
        bar.style.width = pct + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

// ===== ATS CHECKLIST SCORE =====
document.querySelectorAll('#atsChecklist input').forEach(cb => {
  cb.addEventListener('change', () => {
    const total = document.querySelectorAll('#atsChecklist input').length;
    const checked = document.querySelectorAll('#atsChecklist input:checked').length;
    const fill = document.getElementById('atsScoreFill');
    const pct = Math.round((checked / total) * 100);
    fill.textContent = `${checked} / ${total} — ATS Score: ${pct}%`;
    fill.style.color = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
  });
});

// ===== INTERVIEW COUNTDOWN =====
function setCountdown() {
  const val = document.getElementById('cwDateInput').value;
  if (!val) return;
  localStorage.setItem('zt_interview_date', val);
  showCountdown();
}

function showCountdown() {
  const saved = localStorage.getItem('zt_interview_date');
  if (!saved) return;
  const target = new Date(saved);
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  document.getElementById('cwSetup').style.display = 'none';
  document.getElementById('cwDisplay').style.display = 'block';
  document.getElementById('cwDays').textContent = diff > 0 ? diff : '🎉';
  document.getElementById('cwDate').textContent = target.toDateString();
}

function clearCountdown() {
  localStorage.removeItem('zt_interview_date');
  document.getElementById('cwSetup').style.display = 'block';
  document.getElementById('cwDisplay').style.display = 'none';
}

function toggleCountdown() {
  const body = document.getElementById('cwBody');
  const btn = document.getElementById('cwToggle');
  const hidden = body.style.display === 'none';
  body.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? '▲' : '▼';
}

showCountdown();

// ===== BROWSER PUSH NOTIFICATIONS =====
const notifMessages = [
  { title: "🌟 Daily Interview Question Ready!", body: "Today's question is waiting. Answer it and keep your streak alive! 🔥" },
  { title: "📋 Apply to 3 Jobs Today!", body: "Consistency wins. Open LinkedIn/Naukri and apply to at least 3 companies today." },
  { title: "💪 Practice Time!", body: "Spend 15 mins on Mock Test today. Every question makes you sharper." },
  { title: "🗄️ SQL Practice Reminder", body: "Review one SQL query today — GROUP BY, JOIN, or subquery. Stay sharp!" },
  { title: "🎤 Self Intro Practice", body: "Say your self introduction out loud once today. Confidence comes from repetition." },
  { title: "📊 Update Your Job Tracker!", body: "Did you apply anywhere today? Log it in your Job Tracker — track every step." },
  { title: "🔌 API Question of the Day", body: "What is the difference between PUT and PATCH? Open Interview Prep to review!" },
  { title: "🧠 Scenario Practice!", body: "How would you debug a 500 error? Think through it — then check the answer." },
  { title: "🐧 Linux Tip Today", body: "Practice: tail -f app.log — view live logs. Used daily in support roles!" },
  { title: "🚀 You're Closer Than You Think!", body: "One more application. One more practice. The right job is coming. Keep going 💜" },
  { title: "📅 Follow Up on Applications!", body: "Check your Job Tracker — any applications need a follow-up today?" },
  { title: "🔥 Streak Alert!", body: "Don't break your streak! Open the site and answer today's question." },
  { title: "💬 HR Round Prep!", body: "Practice answering: 'Why should we hire you?' — out loud, confidently." },
  { title: "🎯 Interview Prep Reminder", body: "Review 5 questions from the Interview Prep section today. Small steps = big results." },
];

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getStreak() {
  return parseInt(localStorage.getItem('zt_streak') || '0');
}

// Request permission and setup notifications
async function requestNotifPermission() {
  if (!('Notification' in window)) return;
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    localStorage.setItem('zt_notif_enabled', 'true');
    updateNotifBtn();
    scheduleNotifications();
    // Send welcome notification immediately
    sendNotif(
      "✅ Notifications Enabled!",
      "You'll get daily reminders to practice, apply, and stay on track. Let's go Zaneera! 🚀"
    );
  }
}

function sendNotif(title, body) {
  if (Notification.permission !== 'granted') return;
  const n = new Notification(title, {
    body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    tag: 'zt-daily',
    requireInteraction: false
  });
  n.onclick = () => { window.focus(); n.close(); };
}

function scheduleNotifications() {
  // Send one notification per session (once per day)
  const lastNotif = localStorage.getItem('zt_last_notif');
  const today = getTodayKey();
  if (lastNotif === today) return;

  const hour = new Date().getHours();
  const idx = parseInt(today.replace(/-/g, '')) % notifMessages.length;
  const msg = notifMessages[idx];

  // Send after 3 seconds on page load
  setTimeout(() => {
    sendNotif(msg.title, msg.body);
    localStorage.setItem('zt_last_notif', today);
  }, 3000);

  // Schedule a second reminder if it's morning (before 10am)
  if (hour < 10) {
    setTimeout(() => {
      sendNotif(
        "🎯 Morning Prep Reminder!",
        "Start your day with 10 mins of interview practice. You've got this! 💪"
      );
    }, 8000);
  }
}

function updateNotifBtn() {
  const btn = document.getElementById('notifBtn');
  if (!btn) return;
  const enabled = Notification.permission === 'granted';
  btn.textContent = enabled ? '🔔 Notifications ON' : '🔕 Enable Notifications';
  btn.style.borderColor = enabled ? 'var(--green)' : 'var(--yellow)';
  btn.style.color = enabled ? 'var(--green)' : 'var(--yellow)';
}

// Auto-run on page load
window.addEventListener('load', () => {
  updateNotifBtn();
  if (Notification.permission === 'granted') {
    scheduleNotifications();
  }
});
