const topics=[
  {id:'what-is-dev',icon:'👨‍💻',title:'Who is a Software Developer?',desc:'What they do, types, and your career path',tags:['Career','Overview'],level:'beginner'},
  {id:'html',icon:'🌐',title:'HTML – Structure of the Web',desc:'Build the skeleton of any website using HTML tags',tags:['Frontend','Basics'],level:'beginner'},
  {id:'css',icon:'🎨',title:'CSS – Style & Design',desc:'Make websites beautiful with colors, layouts, animations',tags:['Frontend','Design'],level:'beginner'},
  {id:'javascript',icon:'⚡',title:'JavaScript – Make it Interactive',desc:'Add logic, events, and dynamic behavior to websites',tags:['Frontend','Logic'],level:'beginner'},
  {id:'python',icon:'🐍',title:'Python – Backend & Automation',desc:'Write clean backend code, scripts, and APIs',tags:['Backend','Scripting'],level:'beginner'},
  {id:'sql',icon:'🗄️',title:'SQL & MySQL – Database Mastery',desc:'Store, query, and manage data like a pro',tags:['Database','MySQL'],level:'beginner'},
  {id:'api',icon:'🔌',title:'APIs & REST – Connect Everything',desc:'How apps talk to each other — GET, POST, JSON',tags:['Backend','REST'],level:'intermediate'},
  {id:'react',icon:'⚛️',title:'React.js – Modern Frontend',desc:'Build fast, reusable UI components with React',tags:['Frontend','Hooks'],level:'intermediate'},
  {id:'linux',icon:'🐧',title:'Linux – Command Line Power',desc:'Navigate servers, manage files, debug like a pro',tags:['DevOps','Server'],level:'intermediate'},
  {id:'git',icon:'🌿',title:'Git & GitHub – Version Control',desc:'Track code changes, collaborate, never lose work',tags:['Tools','DevOps'],level:'beginner'},
  {id:'devops',icon:'🚀',title:'DevOps – Deploy & Scale',desc:'CI/CD, Docker, cloud deployment basics',tags:['DevOps','Docker'],level:'advanced'},
  {id:'plsql',icon:'📊',title:'PL/SQL – Advanced Database',desc:'Stored procedures, triggers, cursors — Oracle power',tags:['Database','Oracle'],level:'advanced'},
];

const lessons = {};

lessons['what-is-dev'] = `<div class='lesson-intro'>👨‍💻 A <strong>Software Developer</strong> builds apps and systems using code. They solve real-world problems. Think of them as digital architects.</div><div class='lesson-section'><h3>🏢 Types of Developers</h3><div class='concept-grid'><div class='concept-card'><div class='cc-icon'>🎨</div><div class='cc-title'>Frontend</div><div class='cc-desc'>HTML, CSS, React — what users see</div></div><div class='concept-card'><div class='cc-icon'>⚙️</div><div class='cc-title'>Backend</div><div class='cc-desc'>Python, Node, APIs — server logic</div></div><div class='concept-card'><div class='cc-icon'>🌐</div><div class='cc-title'>Full Stack</div><div class='cc-desc'>Both frontend + backend</div></div><div class='concept-card'><div class='cc-icon'>🗄️</div><div class='cc-title'>Database Dev</div><div class='cc-desc'>SQL, MySQL, Oracle</div></div><div class='concept-card'><div class='cc-icon'>🚀</div><div class='cc-title'>DevOps</div><div class='cc-desc'>Deploy and maintain systems</div></div><div class='concept-card'><div class='cc-icon'>📱</div><div class='cc-title'>Mobile Dev</div><div class='cc-desc'>Android / iOS apps</div></div></div></div><div class='lesson-section'><h3>📋 What Devs Do Daily</h3><ul class='lesson-points'><li><span class='lp-icon'>💻</span>Write and review code for new features</li><li><span class='lp-icon'>🐛</span>Debug and fix issues in applications</li><li><span class='lp-icon'>🔌</span>Build and test APIs</li><li><span class='lp-icon'>📊</span>Work with databases — SQL queries</li><li><span class='lp-icon'>🤝</span>Collaborate with QA, design, product teams</li><li><span class='lp-icon'>🚀</span>Deploy code to staging and production</li></ul></div><div class='lesson-section'><h3>🛣️ Your Path</h3><div class='roadmap-steps'><div class='rs-step'><div class='rs-num'>1</div><div class='rs-content'><h4>Learn Basics</h4><p>HTML, CSS, JS, Python, SQL</p></div></div><div class='rs-step'><div class='rs-num'>2</div><div class='rs-content'><h4>Build Projects</h4><p>Task Manager, ERP, Portfolio</p></div></div><div class='rs-step'><div class='rs-num'>3</div><div class='rs-content'><h4>Learn Tools</h4><p>Git, Postman, VS Code, Linux</p></div></div><div class='rs-step'><div class='rs-num'>4</div><div class='rs-content'><h4>Get Experience</h4><p>Internship or support role ✅ Zaneera done!</p></div></div><div class='rs-step'><div class='rs-num'>5</div><div class='rs-content'><h4>Apply and Interview</h4><p>Resume, mock tests, land the job!</p></div></div></div></div><div class='lesson-tip'>💡 Zaneera — you are already at Step 4! Focus on Step 5 now.</div>`;

lessons['html'] = `<div class='lesson-intro'>🌐 <strong>HTML</strong> is the skeleton of every website. It defines structure — headings, paragraphs, images, links, forms. Every website starts with HTML.</div><div class='lesson-section'><h3>🏗️ Basic Structure</h3><pre class='lesson-code'>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;a href="https://google.com"&gt;Click here&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre></div><div class='lesson-section'><h3>🏷️ Most Used Tags</h3><div class='concept-grid'><div class='concept-card'><div class='cc-icon'>📰</div><div class='cc-title'>h1 to h6</div><div class='cc-desc'>Headings</div></div><div class='concept-card'><div class='cc-icon'>📝</div><div class='cc-title'>p</div><div class='cc-desc'>Paragraph</div></div><div class='concept-card'><div class='cc-icon'>🔗</div><div class='cc-title'>a href</div><div class='cc-desc'>Links</div></div><div class='concept-card'><div class='cc-icon'>🖼️</div><div class='cc-title'>img src</div><div class='cc-desc'>Images</div></div><div class='concept-card'><div class='cc-icon'>📋</div><div class='cc-title'>ul / li</div><div class='cc-desc'>Lists</div></div><div class='concept-card'><div class='cc-icon'>📦</div><div class='cc-title'>div / span</div><div class='cc-desc'>Containers</div></div><div class='concept-card'><div class='cc-icon'>📝</div><div class='cc-title'>form / input</div><div class='cc-desc'>User input</div></div><div class='concept-card'><div class='cc-icon'>📊</div><div class='cc-title'>table / tr / td</div><div class='cc-desc'>Data tables</div></div></div></div><div class='lesson-section'><h3>📝 Form Example</h3><pre class='lesson-code'>&lt;form&gt;
  &lt;input type="text" placeholder="Your Name" /&gt;
  &lt;input type="email" placeholder="Email" /&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</pre></div><div class='lesson-tip'>💡 HTML is NOT a programming language — no logic. CSS makes it look good. JS makes it work.</div><div class='lesson-warn'>⚠️ Always close your tags! &lt;div&gt; needs &lt;/div&gt;</div>`;

lessons['css'] = `<div class='lesson-intro'>🎨 <strong>CSS</strong> makes HTML beautiful. Without CSS every website is plain black text. CSS controls colors, fonts, spacing, layout, animations — everything visual.</div><div class='lesson-section'><h3>🎯 How CSS Works</h3><pre class='lesson-code'>h1 {
  color: purple;
  font-size: 2rem;
  text-align: center;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}</pre></div><div class='lesson-section'><h3>📦 Box Model</h3><ul class='lesson-points'><li><span class='lp-icon'>📦</span><strong>Content</strong> — actual text/image</li><li><span class='lp-icon'>🔲</span><strong>Padding</strong> — space inside border</li><li><span class='lp-icon'>🔳</span><strong>Border</strong> — line around element</li><li><span class='lp-icon'>↔️</span><strong>Margin</strong> — space outside border</li></ul></div><div class='lesson-section'><h3>🏗️ Flexbox</h3><pre class='lesson-code'>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}</pre></div><div class='lesson-section'><h3>📱 Responsive</h3><pre class='lesson-code'>@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}</pre></div><div class='lesson-tip'>💡 Learn Flexbox and Grid — they handle 90% of all layouts.</div>`;

lessons['javascript'] = `<div class='lesson-intro'>⚡ <strong>JavaScript</strong> is the programming language of the web. HTML = structure, CSS = style, JS = behavior. Makes websites interactive — clicks, forms, API calls, animations.</div><div class='lesson-section'><h3>📦 Variables</h3><pre class='lesson-code'>const name = "Zaneera";  // can't change
let age = 25;            // can change
console.log(name, age);</pre></div><div class='lesson-section'><h3>🔀 Conditions and Loops</h3><pre class='lesson-code'>if (age >= 18) {
  console.log("Adult");
}
for (let i = 0; i < 5; i++) {
  console.log("Count:", i);
}</pre></div><div class='lesson-section'><h3>🔧 Functions</h3><pre class='lesson-code'>// Arrow function
const greet = (name) => "Hello " + name;
console.log(greet("Zaneera")); // Hello Zaneera</pre></div><div class='lesson-section'><h3>🌐 DOM + Events</h3><pre class='lesson-code'>const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
});</pre></div><div class='lesson-section'><h3>⏳ Async / Fetch</h3><pre class='lesson-code'>async function getData() {
  const res = await fetch("/api/users");
  const data = await res.json();
  console.log(data);
}</pre></div><div class='lesson-tip'>💡 Open browser DevTools (F12) → Console to practice JS right now!</div>`;

lessons['python'] = `<div class='lesson-intro'>🐍 <strong>Python</strong> is simple, readable, and powerful. Used for backend APIs, automation, data science. Zaneera uses Python for REST APIs in her projects!</div><div class='lesson-section'><h3>📦 Variables</h3><pre class='lesson-code'>name = "Zaneera"
age = 25
skills = ["Python", "SQL", "React"]
print(name, age)</pre></div><div class='lesson-section'><h3>🔀 Conditions and Loops</h3><pre class='lesson-code'>if age >= 18:
    print("Adult")

for skill in skills:
    print("I know:", skill)</pre></div><div class='lesson-section'><h3>🔧 Functions</h3><pre class='lesson-code'>def greet(name):
    return f"Hello, {name}!"

print(greet("Zaneera"))  # Hello, Zaneera!</pre></div><div class='lesson-section'><h3>🔌 Flask REST API</h3><pre class='lesson-code'>from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/users", methods=["GET"])
def get_users():
    return jsonify({"users": ["Zaneera"]})

app.run(debug=True)</pre></div><div class='lesson-tip'>💡 Python indentation matters! Use 4 spaces — no curly braces.</div><div class='lesson-warn'>⚠️ Mixing tabs and spaces causes IndentationError. Always use spaces.</div>`;

lessons['sql'] = `<div class='lesson-intro'>🗄️ <strong>SQL</strong> is used to communicate with databases. Every app stores data. SQL lets you CREATE, READ, UPDATE, DELETE that data. Used in every software job!</div><div class='lesson-section'><h3>📋 CRUD Operations</h3><pre class='lesson-code'>-- Create table
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  salary DECIMAL(10,2)
);
-- Insert
INSERT INTO employees (name, salary) VALUES ('Zaneera', 55000);
-- Read
SELECT * FROM employees WHERE salary > 50000;
-- Update
UPDATE employees SET salary = 60000 WHERE id = 1;
-- Delete
DELETE FROM employees WHERE id = 1;</pre></div><div class='lesson-section'><h3>🔗 JOINs</h3><pre class='lesson-code'>-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;

-- LEFT JOIN (all employees even without dept)
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;</pre></div><div class='lesson-section'><h3>📊 Aggregates</h3><pre class='lesson-code'>SELECT COUNT(*) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT department, COUNT(*) as total
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;</pre></div><div class='lesson-tip'>💡 Practice SELECT, JOIN, GROUP BY, subqueries daily — these come in every interview.</div>`;

lessons['api'] = `<div class='lesson-intro'>🔌 <strong>API</strong> is how two apps talk to each other. When you open Instagram, your phone sends an API request — server sends back your feed. APIs are everywhere!</div><div class='lesson-section'><h3>🌐 HTTP Methods</h3><div class='concept-grid'><div class='concept-card'><div class='cc-icon'>📖</div><div class='cc-title'>GET</div><div class='cc-desc'>Read data from server</div></div><div class='concept-card'><div class='cc-icon'>➕</div><div class='cc-title'>POST</div><div class='cc-desc'>Create new data</div></div><div class='concept-card'><div class='cc-icon'>✏️</div><div class='cc-title'>PUT</div><div class='cc-desc'>Update entire resource</div></div><div class='concept-card'><div class='cc-icon'>🩹</div><div class='cc-title'>PATCH</div><div class='cc-desc'>Update specific fields</div></div><div class='concept-card'><div class='cc-icon'>🗑️</div><div class='cc-title'>DELETE</div><div class='cc-desc'>Remove data</div></div></div></div><div class='lesson-section'><h3>📊 Status Codes</h3><ul class='lesson-points'><li><span class='lp-icon'>✅</span><strong>200</strong> — OK, success</li><li><span class='lp-icon'>✅</span><strong>201</strong> — Created</li><li><span class='lp-icon'>❌</span><strong>400</strong> — Bad Request</li><li><span class='lp-icon'>🔒</span><strong>401</strong> — Unauthorized</li><li><span class='lp-icon'>🔍</span><strong>404</strong> — Not Found</li><li><span class='lp-icon'>💥</span><strong>500</strong> — Server Error</li></ul></div><div class='lesson-section'><h3>📦 JSON Format</h3><pre class='lesson-code'>// Request
{ "name": "Zaneera", "role": "developer" }

// Response
{ "status": "success", "id": 42 }</pre></div><div class='lesson-tip'>💡 Use Postman to test APIs — free tool used in every company.</div>`;

lessons['react'] = `<div class='lesson-intro'>⚛️ <strong>React.js</strong> is a JS library for building UIs. Write reusable components. React updates only changed parts — super fast!</div><div class='lesson-section'><h3>🧩 Components</h3><pre class='lesson-code'>function Welcome({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}
// Use it:
&lt;Welcome name="Zaneera" /&gt;</pre></div><div class='lesson-section'><h3>🔄 useState</h3><pre class='lesson-code'>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  );
}</pre></div><div class='lesson-section'><h3>⚡ useEffect — API Call</h3><pre class='lesson-code'>import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => setUsers(data));
  }, []);
  return users.map(u => &lt;p key={u.id}&gt;{u.name}&lt;/p&gt;);
}</pre></div><div class='lesson-tip'>💡 React = Components + State + Props. Master these 3 and you can build anything.</div>`;

lessons['linux'] = `<div class='lesson-intro'>🐧 <strong>Linux</strong> runs most servers in the world. As a developer or support engineer, you WILL use Linux daily — logs, files, scripts, debugging.</div><div class='lesson-section'><h3>📁 File Commands</h3><pre class='lesson-code'>ls -la              # list all files
cd /var/logs        # change directory
mkdir myapp         # create folder
rm -rf folder/      # delete folder
cp file.txt backup/ # copy
mv old.txt new.txt  # rename</pre></div><div class='lesson-section'><h3>📋 Log Commands (Daily in Support!)</h3><pre class='lesson-code'>tail -f app.log          # live log stream
tail -100 app.log        # last 100 lines
grep "ERROR" app.log     # find errors
grep -i "error" app.log  # case insensitive
grep -r "keyword" /logs/ # search all files</pre></div><div class='lesson-section'><h3>⚙️ System Commands</h3><pre class='lesson-code'>ps aux          # all processes
top             # live monitor
kill -9 1234    # force kill
free -h         # memory
df -h           # disk space
netstat -tuln   # open ports</pre></div><div class='lesson-tip'>💡 tail -f and grep are your best friends in production support!</div>`;

lessons['git'] = `<div class='lesson-intro'>🌿 <strong>Git</strong> tracks every code change. Break something? Go back. GitHub stores and shares repos online. Every software job requires Git!</div><div class='lesson-section'><h3>🚀 Basic Workflow</h3><pre class='lesson-code'>git init                   # new repo
git clone &lt;url&gt;            # copy repo
git status                 # see changes
git add .                  # stage all
git commit -m "Add login"  # save
git push origin main       # upload
git pull                   # get latest</pre></div><div class='lesson-section'><h3>🌿 Branching</h3><pre class='lesson-code'>git checkout -b feature-login  # create + switch
git merge feature-login        # merge to main
git branch -d feature-login    # delete branch</pre></div><div class='lesson-section'><h3>⏪ Undo</h3><pre class='lesson-code'>git log --oneline      # history
git revert &lt;id&gt;        # undo safely
git stash              # save temporarily
git stash pop          # restore</pre></div><div class='lesson-tip'>💡 Always work on a branch — never directly on main. Standard in every company.</div>`;

lessons['devops'] = `<div class='lesson-intro'>🚀 <strong>DevOps</strong> automates building, testing, and deploying software. CI/CD, Docker, and cloud are the core tools.</div><div class='lesson-section'><h3>🔄 CI/CD Pipeline</h3><ul class='lesson-points'><li><span class='lp-icon'>1️⃣</span><strong>Code</strong> — Push to GitHub</li><li><span class='lp-icon'>2️⃣</span><strong>Build</strong> — Auto compile and install</li><li><span class='lp-icon'>3️⃣</span><strong>Test</strong> — Auto tests run</li><li><span class='lp-icon'>4️⃣</span><strong>Deploy</strong> — Auto deploy to production</li></ul></div><div class='lesson-section'><h3>🐳 Docker</h3><pre class='lesson-code'># Dockerfile
FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

docker build -t myapp .
docker run -p 5000:5000 myapp
docker ps</pre></div><div class='lesson-section'><h3>☁️ Deploy Options</h3><div class='concept-grid'><div class='concept-card'><div class='cc-icon'>▲</div><div class='cc-title'>Vercel</div><div class='cc-desc'>Frontend — free</div></div><div class='concept-card'><div class='cc-icon'>🟣</div><div class='cc-title'>Render</div><div class='cc-desc'>Backend — free</div></div><div class='concept-card'><div class='cc-icon'>🐙</div><div class='cc-title'>GitHub Actions</div><div class='cc-desc'>Free CI/CD</div></div><div class='concept-card'><div class='cc-icon'>☁️</div><div class='cc-title'>AWS/Azure</div><div class='cc-desc'>Enterprise standard</div></div></div></div><div class='lesson-tip'>💡 Start with Vercel + Render — both free and beginner-friendly.</div>`;

lessons['plsql'] = `<div class='lesson-intro'>📊 <strong>PL/SQL</strong> is Oracle's extension of SQL. Adds programming logic — variables, loops, stored procedures, triggers. Used in enterprise, banking, ERP systems.</div><div class='lesson-section'><h3>📦 Basic Block</h3><pre class='lesson-code'>DECLARE
  v_name VARCHAR2(100);
  v_salary NUMBER;
BEGIN
  SELECT name, salary INTO v_name, v_salary
  FROM employees WHERE id = 1;
  DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
END;
/</pre></div><div class='lesson-section'><h3>🔧 Stored Procedure</h3><pre class='lesson-code'>CREATE OR REPLACE PROCEDURE get_emp(p_id IN NUMBER) AS
  v_name VARCHAR2(100);
BEGIN
  SELECT name INTO v_name FROM employees WHERE id = p_id;
  DBMS_OUTPUT.PUT_LINE('Employee: ' || v_name);
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Not found');
END;
/
EXEC get_emp(1);</pre></div><div class='lesson-section'><h3>⚡ Trigger</h3><pre class='lesson-code'>CREATE OR REPLACE TRIGGER log_salary
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO salary_log VALUES
  (:OLD.id, :OLD.salary, :NEW.salary, SYSDATE);
END;
/</pre></div><div class='lesson-tip'>💡 PL/SQL is used in Oracle-based enterprise systems — banking, insurance, ERP.</div>`;

// ===== RENDER TOPICS =====
let currentLevel = 'all';

function renderTopics(filter = '') {
  const grid = document.getElementById('topicsGrid');
  let list = topics;
  if (currentLevel !== 'all') list = list.filter(t => t.level === currentLevel);
  if (filter) list = list.filter(t =>
    t.title.toLowerCase().includes(filter) ||
    t.tags.some(tag => tag.toLowerCase().includes(filter))
  );
  grid.innerHTML = list.map(t => `
    <div class="topic-card" onclick="openLesson('${t.id}')">
      <div class="topic-card-header">
        <div class="topic-icon">${t.icon}</div>
        <div class="topic-header-text">
          <h3>${t.title}</h3>
          <p>${t.desc}</p>
        </div>
      </div>
      <div class="topic-tags">${t.tags.map(tag => `<span class="topic-tag">${tag}</span>`).join('')}</div>
      <div class="topic-card-footer">
        <span>Click to learn →</span>
        <span class="level-badge level-${t.level}">${t.level.charAt(0).toUpperCase() + t.level.slice(1)}</span>
      </div>
    </div>
  `).join('') || '<p style="color:var(--muted);text-align:center;padding:3rem;grid-column:1/-1">No topics found.</p>';
}

function setLevel(btn) {
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentLevel = btn.dataset.level;
  renderTopics(document.getElementById('topicSearch').value.toLowerCase());
}

function filterTopics() {
  renderTopics(document.getElementById('topicSearch').value.toLowerCase());
}

function openLesson(id) {
  const topic = topics.find(t => t.id === id);
  const content = lessons[id];
  if (!topic || !content) return;
  document.getElementById('lessonTitle').innerHTML = `${topic.icon} ${topic.title}`;
  document.getElementById('lessonBody').innerHTML = content;
  document.getElementById('lessonOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLesson() {
  document.getElementById('lessonOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function closeLessonOutside(e) {
  if (e.target === document.getElementById('lessonOverlay')) closeLesson();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLesson(); });

renderTopics();
