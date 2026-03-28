const mockQuestions = [
  // ===== HR =====
  {
    category: "HR",
    q: "What is the best way to start a self-introduction in an interview?",
    options: ["Start with your family background", "Start with your name, experience, and skills", "Start with your hobbies", "Start with your salary expectation"],
    answer: 1,
    explanation: "Always start with your name, years of experience, and key skills. Keep it professional and relevant to the role."
  },
  {
    category: "HR",
    q: "When asked 'What is your weakness?', what is the best approach?",
    options: ["Say you have no weaknesses", "Mention a real weakness and how you improved it", "Say you work too hard", "Avoid answering the question"],
    answer: 1,
    explanation: "Mention a genuine weakness but always follow up with how you've worked to improve it. This shows self-awareness."
  },
  {
    category: "HR",
    q: "Why should we hire you? — What should your answer focus on?",
    options: ["Your personal needs", "Your relevant skills and how you add value", "Your previous salary", "Your educational background only"],
    answer: 1,
    explanation: "Focus on your relevant experience, skills, and how you can contribute to the company from day one."
  },
  {
    category: "HR",
    q: "What does 'Where do you see yourself in 3 years?' test?",
    options: ["Your prediction skills", "Your career goals and ambition", "Your personal life plans", "Your salary expectations"],
    answer: 1,
    explanation: "This question tests whether your career goals align with the company's growth and whether you're serious about the role."
  },
  {
    category: "HR",
    q: "How should you handle pressure according to best interview practice?",
    options: ["Say you never feel pressure", "Explain your calm, methodical approach to problem-solving", "Say you ignore pressure", "Say you ask others to handle it"],
    answer: 1,
    explanation: "Describe a structured approach: understand the issue, prioritize, break it into steps, and stay calm."
  },
  // ===== TECHNICAL =====
  {
    category: "Technical",
    q: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Process Integration", "Application Process Interface", "Advanced Programming Interface"],
    answer: 0,
    explanation: "API = Application Programming Interface. It allows two systems to communicate with each other."
  },
  {
    category: "Technical",
    q: "Which HTTP method is used to RETRIEVE data from a server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    answer: 2,
    explanation: "GET is used to retrieve/read data. POST creates, PUT updates, DELETE removes."
  },
  {
    category: "Technical",
    q: "What HTTP status code means 'Not Found'?",
    options: ["200", "401", "500", "404"],
    answer: 3,
    explanation: "404 = Not Found. 200 = Success, 401 = Unauthorized, 500 = Internal Server Error."
  },
  {
    category: "Technical",
    q: "What is the difference between PUT and PATCH?",
    options: ["No difference", "PUT updates entire resource, PATCH updates specific fields", "PATCH updates entire resource, PUT updates specific fields", "PUT deletes, PATCH creates"],
    answer: 1,
    explanation: "PUT replaces the entire resource. PATCH only updates the specific fields you send."
  },
  {
    category: "Technical",
    q: "What is JSON used for?",
    options: ["Styling web pages", "Exchanging data between frontend and backend", "Running server commands", "Managing databases"],
    answer: 1,
    explanation: "JSON (JavaScript Object Notation) is a lightweight format for data exchange between client and server."
  },
  {
    category: "Technical",
    q: "What is 'state' in React.js?",
    options: ["A CSS property", "Data managed inside a component that can change over time", "A database table", "A server response"],
    answer: 1,
    explanation: "State is local data inside a React component. When state changes, the component re-renders automatically."
  },
  {
    category: "Technical",
    q: "What does RBAC stand for?",
    options: ["React-Based Access Control", "Role-Based Access Control", "Resource-Based API Control", "Role-Based API Configuration"],
    answer: 1,
    explanation: "RBAC = Role-Based Access Control. It restricts system access based on user roles like admin, user, manager."
  },
  {
    category: "Technical",
    q: "What is the purpose of logs in an application?",
    options: ["To style the UI", "To track application behavior, errors, and events for debugging", "To store user passwords", "To speed up the database"],
    answer: 1,
    explanation: "Logs record what happens in an application — errors, warnings, events. They are essential for debugging and incident analysis."
  },
  {
    category: "Technical",
    q: "What is authentication?",
    options: ["Giving users admin access", "Verifying whether a user is valid through credentials or tokens", "Encrypting the database", "Caching API responses"],
    answer: 1,
    explanation: "Authentication verifies identity — usually via username/password or tokens like JWT."
  },
  {
    category: "Technical",
    q: "What does a 500 Internal Server Error usually indicate?",
    options: ["Client sent wrong data", "Resource not found", "Server-side issue like unhandled exception or DB failure", "User is not authorized"],
    answer: 2,
    explanation: "500 means something went wrong on the server — could be a code bug, database issue, or unhandled exception."
  },
  // ===== SQL =====
  {
    category: "SQL",
    q: "Which SQL statement is used to fetch all records from a table?",
    options: ["FETCH * FROM table", "GET ALL FROM table", "SELECT * FROM table", "READ * FROM table"],
    answer: 2,
    explanation: "SELECT * FROM table_name; — The asterisk (*) means all columns."
  },
  {
    category: "SQL",
    q: "What is the difference between WHERE and HAVING?",
    options: ["No difference", "WHERE filters before grouping, HAVING filters after grouping", "HAVING filters before grouping, WHERE filters after", "WHERE is for numbers only"],
    answer: 1,
    explanation: "WHERE filters rows before GROUP BY. HAVING filters the grouped results after aggregation."
  },
  {
    category: "SQL",
    q: "Which JOIN returns only matching records from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
    answer: 3,
    explanation: "INNER JOIN returns only rows where there is a match in both tables."
  },
  {
    category: "SQL",
    q: "What does TRUNCATE do in SQL?",
    options: ["Removes specific rows using WHERE", "Removes the entire table structure", "Removes all rows but keeps the table structure", "Renames the table"],
    answer: 2,
    explanation: "TRUNCATE removes all rows from a table but keeps the table structure. DELETE removes specific rows. DROP removes the entire table."
  },
  {
    category: "SQL",
    q: "Which query finds duplicate names in a table?",
    options: [
      "SELECT name FROM employees WHERE name = name",
      "SELECT name, COUNT(*) FROM employees GROUP BY name HAVING COUNT(*) > 1",
      "SELECT DISTINCT name FROM employees",
      "SELECT name FROM employees ORDER BY name"
    ],
    answer: 1,
    explanation: "GROUP BY name with HAVING COUNT(*) > 1 finds names that appear more than once — those are duplicates."
  },
  {
    category: "SQL",
    q: "What is a PRIMARY KEY?",
    options: ["A column that can have duplicate values", "A column that uniquely identifies each row and cannot be NULL", "A foreign reference to another table", "An index for faster search only"],
    answer: 1,
    explanation: "Primary key uniquely identifies each row. It must be unique and cannot be NULL."
  },
  {
    category: "SQL",
    q: "What is normalization in SQL?",
    options: ["Speeding up queries", "Organizing tables to reduce redundancy and improve consistency", "Adding indexes to all columns", "Backing up the database"],
    answer: 1,
    explanation: "Normalization organizes data into tables to eliminate redundancy. Common forms: 1NF, 2NF, 3NF."
  },
  {
    category: "SQL",
    q: "Which clause is used to sort query results?",
    options: ["GROUP BY", "SORT BY", "ORDER BY", "FILTER BY"],
    answer: 2,
    explanation: "ORDER BY sorts results. Use ASC for ascending (default) or DESC for descending."
  },
  // ===== SCENARIO =====
  {
    category: "Scenario",
    q: "A user says 'data is not loading'. What is your FIRST step?",
    options: ["Restart the server immediately", "Check if it's a frontend, API, or database issue", "Ask the user to clear cache", "Escalate to senior immediately"],
    answer: 1,
    explanation: "First identify where the issue is — frontend rendering, API response, or database data. Then investigate that layer."
  },
  {
    category: "Scenario",
    q: "An API returns 500 error. What do you check FIRST?",
    options: ["Frontend CSS", "Server logs for exceptions or errors", "User's browser", "Network speed"],
    answer: 1,
    explanation: "500 = server-side issue. Always check server logs first to find the exception or error causing it."
  },
  {
    category: "Scenario",
    q: "User reports 'login not working'. What do you check?",
    options: ["Only the UI design", "Credentials, auth API response, token/session, backend logs", "Database backup", "Server hardware"],
    answer: 1,
    explanation: "Login issues can be credential, API, token, session, or DB related. Check all layers systematically."
  },
  {
    category: "Scenario",
    q: "If an issue is NOT reproducible, what do you do?",
    options: ["Close the ticket immediately", "Collect screenshots, steps, timestamp, user role, environment, and logs", "Blame the user", "Restart the application"],
    answer: 1,
    explanation: "Non-reproducible issues are often data-specific or role-based. Gather maximum context before concluding."
  },
  {
    category: "Scenario",
    q: "How do you prioritize when multiple issues come at the same time?",
    options: ["Handle in order of arrival", "Prioritize based on business impact, severity, and number of affected users", "Handle easiest first", "Ask manager to decide every time"],
    answer: 1,
    explanation: "Always prioritize by business impact and severity. Production-critical issues affecting many users come first."
  }
];

// ===== STATE =====
let selectedCategories = [];
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let userAnswers = [];

// ===== CATEGORY SELECT =====
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.cat;
    if (cat === 'all') {
      selectedCategories = ['HR', 'Technical', 'SQL', 'Scenario'];
      document.querySelectorAll('.cat-card').forEach(c => c.classList.toggle('selected', c.dataset.cat === 'all'));
    } else {
      document.querySelector('[data-cat="all"]').classList.remove('selected');
      card.classList.toggle('selected');
      selectedCategories = [...document.querySelectorAll('.cat-card.selected')].map(c => c.dataset.cat);
    }
  });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

function startMock() {
  if (selectedCategories.length === 0) {
    alert('Please select at least one category!');
    return;
  }

  const countEl = document.querySelector('.diff-btn.selected');
  const count = countEl ? parseInt(countEl.dataset.count) : 10;

  let pool = mockQuestions.filter(q => selectedCategories.includes(q.category));
  pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

  currentQuestions = pool;
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById('setup-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('result-screen').style.display = 'none';

  loadQuestion();
}

function loadQuestion() {
  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  const q = currentQuestions[currentIndex];
  const total = currentQuestions.length;

  document.querySelector('.quiz-progress-text').textContent = `Question ${currentIndex + 1} of ${total}`;
  document.querySelector('.progress-bar-fill').style.width = `${((currentIndex) / total) * 100}%`;
  document.querySelector('.question-category-tag').textContent = q.category;
  document.querySelector('.question-text').textContent = q.q;

  const optionsGrid = document.querySelector('.options-grid');
  optionsGrid.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${labels[i]}</span> ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optionsGrid.appendChild(btn);
  });

  document.querySelector('.explanation-box').classList.remove('show');
  document.querySelector('.explanation-box').textContent = '';
  document.getElementById('next-btn').style.display = 'none';

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoSkip();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.querySelector('.timer-box');
  el.textContent = `⏱ ${timeLeft}s`;
  el.classList.toggle('danger', timeLeft <= 10);
}

function autoSkip() {
  userAnswers.push({ index: currentIndex, selected: -1, correct: currentQuestions[currentIndex].answer });
  disableOptions();
  showExplanation();
  document.getElementById('next-btn').style.display = 'inline-block';
}

function selectAnswer(selected) {
  clearInterval(timer);
  const q = currentQuestions[currentIndex];
  const isCorrect = selected === q.answer;

  if (isCorrect) score++;

  userAnswers.push({ index: currentIndex, selected, correct: q.answer });

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    if (i === q.answer) btn.classList.add('correct');
    else if (i === selected && !isCorrect) btn.classList.add('wrong');
  });

  disableOptions();
  showExplanation();
  document.getElementById('next-btn').style.display = 'inline-block';
}

function disableOptions() {
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
}

function showExplanation() {
  const q = currentQuestions[currentIndex];
  const box = document.querySelector('.explanation-box');
  box.textContent = '💡 ' + q.explanation;
  box.classList.add('show');
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

function showResult() {
  clearInterval(timer);
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';

  const total = currentQuestions.length;
  const percent = Math.round((score / total) * 100);
  const wrong = userAnswers.filter(a => a.selected !== -1 && a.selected !== a.correct).length;
  const skipped = userAnswers.filter(a => a.selected === -1).length;

  document.querySelector('.score-num').textContent = `${percent}%`;
  document.querySelector('.score-circle').style.borderColor =
    percent >= 70 ? 'var(--green)' : percent >= 40 ? 'var(--yellow)' : 'var(--red)';
  document.querySelector('.score-num').style.color =
    percent >= 70 ? 'var(--green)' : percent >= 40 ? 'var(--yellow)' : 'var(--red)';

  document.querySelector('.result-message').textContent =
    percent >= 80 ? '🔥 Excellent! Interview Ready!' :
    percent >= 60 ? '👍 Good! Keep Practicing!' :
    percent >= 40 ? '📚 Keep Going! Review the answers.' :
    '💪 Don\'t give up! Practice more!';

  document.querySelector('.result-sub').textContent =
    `You scored ${score} out of ${total} questions`;

  document.querySelector('.correct-stat .stat-num').textContent = score;
  document.querySelector('.wrong-stat .stat-num').textContent = wrong;
  document.querySelector('.skip-stat .stat-num').textContent = skipped;

  // Review
  const reviewList = document.querySelector('.review-list');
  reviewList.innerHTML = '<h3>📋 Answer Review</h3>';

  userAnswers.forEach(ans => {
    const q = currentQuestions[ans.index];
    const item = document.createElement('div');
    const isCorrect = ans.selected === ans.correct;
    const isSkipped = ans.selected === -1;

    item.className = `review-item ${isSkipped ? 'r-skip' : isCorrect ? 'r-ok' : 'r-fail'}`;
    item.innerHTML = `
      <div class="r-q">${isCorrect ? '✅' : isSkipped ? '⏭️' : '❌'} ${q.q}</div>
      ${!isCorrect && !isSkipped ? `<div class="r-your">Your answer: ${q.options[ans.selected]}</div>` : ''}
      ${isSkipped ? `<div class="r-your">Skipped (time ran out)</div>` : ''}
      <div class="r-correct">Correct: ${q.options[ans.correct]}</div>
    `;
    reviewList.appendChild(item);
  });
}

function retryMock() {
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('setup-screen').style.display = 'block';
  selectedCategories = [];
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
}
