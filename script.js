// ===== INTERVIEW DATA =====
const interviewData = {
  hr: [
    { q: "Tell me about yourself.", a: "Hi, I'm Zaneera Taj. I have around 1.5+ years of experience in application support and software-related roles — production issue handling, API validation, SQL troubleshooting, debugging, and backend issue analysis. I've supported business and ERP-based applications, handled user-reported issues, release support, and coordination with development and QA teams. I also have hands-on project experience in React.js, Python, REST APIs, and MySQL." },
    { q: "Why do you want to join our company?", a: "I'm looking for a role where I can use my technical troubleshooting, API, SQL, and application support experience in a more challenging environment. Your company's work culture and technology focus match the kind of role I want to grow in." },
    { q: "What are your strengths?", a: "My strengths are problem-solving, debugging, patience during issue analysis, and communication with technical and non-technical teams. I'm comfortable working with SQL queries, API validation, and production support tasks." },
    { q: "What is your weakness?", a: "Earlier, I used to spend extra time trying to make everything perfect before moving ahead. Over time, I learned to balance quality with deadlines and prioritize tasks more effectively." },
    { q: "Why should we hire you?", a: "I already have hands-on experience in application support, API troubleshooting, SQL validation, and production issue handling. I can contribute from day one while also being eager to learn and grow with the team." },
    { q: "Where do you see yourself in 3 years?", a: "In the next 3 years, I see myself growing into a strong software/application support professional with deeper technical expertise in APIs, databases, debugging, and system workflows — eventually taking ownership of critical modules." },
    { q: "Why are you looking for a job change?", a: "I'm looking for better growth opportunities, more exposure to real-world systems, and a role where I can strengthen both my technical and professional skills." },
    { q: "Are you comfortable working in shifts / support environment?", a: "Yes, I'm comfortable working in a support environment and handling production issues when needed. Support roles require responsiveness, ownership, and calm issue handling — which I'm used to." },
    { q: "How do you handle pressure?", a: "I handle pressure by first understanding the issue clearly, prioritizing tasks, and breaking the problem into smaller steps. In support roles, staying calm and methodical is very important." },
    { q: "What motivates you?", a: "I'm motivated by solving problems, learning new tools and technologies, and being able to contribute to something useful in a real-world environment." },
    { q: "Tell me about a challenging situation you handled.", a: "In my previous role, a production issue caused data mismatch for multiple users. I stayed calm, checked logs, identified a SQL join issue causing wrong data mapping, coordinated with the dev team, and got it resolved within the SLA. That experience taught me the importance of systematic debugging." },
    { q: "How do you handle conflicts in a team?", a: "I believe in open communication. If there's a disagreement, I try to understand the other person's perspective first, then present my view with facts and data. The goal is always to find the best solution for the team, not to win an argument." },
    { q: "Are you a team player or do you prefer working alone?", a: "I'm comfortable with both. In support roles, teamwork is essential — coordinating with QA, dev, and business teams. But I can also work independently when needed, especially during issue analysis and debugging." },
    { q: "What do you know about our company?", a: "I've researched your company and understand that you work on [domain]. I'm particularly interested in how your team handles [relevant area]. I believe my background in application support and software development aligns well with what you're looking for." },
    { q: "Do you have any questions for us?", a: "Yes — What does a typical day look like for this role? What are the key challenges the team is currently facing? And what does the growth path look like for someone in this position?" }
  ],
  technical: [
    { q: "What is an API?", a: "API stands for Application Programming Interface. It allows two systems or applications to communicate with each other by sending and receiving data." },
    { q: "What is REST API?", a: "REST API is a type of web service that follows REST principles and uses HTTP methods like GET, POST, PUT, and DELETE for communication between client and server." },
    { q: "Difference between GET and POST?", a: "GET is used to retrieve data from the server. POST is used to send data to the server to create or submit something. GET parameters go in the URL; POST data goes in the request body." },
    { q: "Difference between PUT and PATCH?", a: "PUT is used to update the entire resource. PATCH is used to update only specific fields of a resource." },
    { q: "What are HTTP status codes?", a: "Status codes indicate whether a request was successful or failed.\n200 – Success\n201 – Created\n400 – Bad Request\n401 – Unauthorized\n403 – Forbidden\n404 – Not Found\n422 – Unprocessable Entity\n500 – Internal Server Error\n503 – Service Unavailable" },
    { q: "What is JSON?", a: "JSON stands for JavaScript Object Notation. It is a lightweight data format used to exchange data between frontend and backend.", code: '{\n  "name": "Zaneera",\n  "role": "Developer",\n  "skills": ["React", "Python", "SQL"]\n}' },
    { q: "What is React.js?", a: "React.js is a JavaScript library used to build fast, reusable, and interactive user interfaces. It uses a component-based architecture and virtual DOM for performance." },
    { q: "What is state in React?", a: "State is data managed inside a component that can change over time and affect the UI. When state changes, React re-renders the component automatically.", code: "const [count, setCount] = useState(0);" },
    { q: "What is props in React?", a: "Props (properties) are read-only data passed from a parent component to a child component. Unlike state, props cannot be modified by the child component." },
    { q: "What is useEffect in React?", a: "useEffect is a React hook used to perform side effects like API calls, subscriptions, or DOM updates after the component renders.", code: "useEffect(() => {\n  fetchData();\n}, []);" },
    { q: "What is a component in React?", a: "A component is a reusable building block in React used to create parts of the user interface. Components can be functional or class-based." },
    { q: "What is authentication?", a: "Authentication is the process of verifying whether a user is valid, usually through login credentials or tokens like JWT." },
    { q: "What is JWT?", a: "JWT (JSON Web Token) is a compact, URL-safe token used for authentication. It contains encoded user info and is sent in the Authorization header of API requests.", code: "Authorization: Bearer <token>" },
    { q: "What is role-based access control (RBAC)?", a: "RBAC is a method of restricting system access based on user roles such as admin, user, or manager. Each role has specific permissions." },
    { q: "What is debugging?", a: "Debugging is the process of identifying, analyzing, and fixing errors or unexpected behavior in an application." },
    { q: "What are logs and why are they important?", a: "Logs are system-generated records that help track application behavior, errors, warnings, and events. They are very useful for debugging and incident analysis." },
    { q: "What is a production issue?", a: "A production issue is a problem that occurs in the live environment and impacts end users or business operations." },
    { q: "What is release validation?", a: "Release validation is the process of checking whether a new deployment or release is working correctly after being moved to a testing or production environment." },
    { q: "What is the difference between synchronous and asynchronous?", a: "Synchronous code runs line by line — each step waits for the previous one to finish. Asynchronous code allows other operations to run while waiting (e.g., API calls using async/await or Promises).", code: "const data = await fetch('/api/users');" },
    { q: "What is CORS?", a: "CORS (Cross-Origin Resource Sharing) is a browser security feature that blocks requests from a different domain unless the server explicitly allows it via headers like Access-Control-Allow-Origin." },
    { q: "What is the difference between frontend and backend?", a: "Frontend is the user-facing part of the application (HTML, CSS, JS, React). Backend is the server-side part that handles business logic, APIs, and database operations (Python, Node.js)." },
    { q: "What is version control / Git?", a: "Git is a version control system that tracks code changes, allows collaboration, and lets you revert to previous versions. Common commands: git clone, git commit, git push, git pull, git branch." },
    { q: "What is the difference between == and === in JavaScript?", a: "== checks value only (loose equality). === checks both value and type (strict equality). Always prefer === to avoid unexpected type coercion bugs.", code: "5 == '5'   // true\n5 === '5'  // false" },
    { q: "What is null vs undefined in JavaScript?", a: "undefined means a variable has been declared but not assigned a value. null is an intentional empty value assigned by the developer." },
    { q: "What is an ORM?", a: "ORM (Object-Relational Mapping) is a technique that lets you interact with a database using objects instead of raw SQL. Examples: SQLAlchemy (Python), Sequelize (Node.js)." }
  ],
  sql: [
    { q: "How do you fetch all records from a table?", a: "Using SELECT * statement:", code: "SELECT * FROM table_name;" },
    { q: "How do you filter records in SQL?", a: "Using the WHERE clause:", code: "SELECT * FROM employees WHERE department = 'IT';" },
    { q: "Difference between WHERE and HAVING?", a: "WHERE filters rows before grouping. HAVING filters grouped data after aggregation. HAVING is used with GROUP BY." },
    { q: "What is JOIN in SQL?", a: "JOIN is used to combine data from multiple tables based on a related column. Types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN." },
    { q: "What is INNER JOIN?", a: "It returns only the matching records from both tables.", code: "SELECT a.name, b.dept\nFROM employees a\nINNER JOIN departments b ON a.dept_id = b.id;" },
    { q: "What is LEFT JOIN?", a: "It returns all records from the left table and matching records from the right table. Non-matching rows from right table show NULL." },
    { q: "What is GROUP BY?", a: "It is used to group rows that have the same values into summary rows, often used with aggregate functions like COUNT, SUM, AVG." },
    { q: "Write a query to find duplicate records.", a: "Using GROUP BY with HAVING COUNT > 1:", code: "SELECT name, COUNT(*)\nFROM employees\nGROUP BY name\nHAVING COUNT(*) > 1;" },
    { q: "How do you update data in SQL?", a: "Using the UPDATE statement:", code: "UPDATE employees\nSET salary = 50000\nWHERE id = 1;" },
    { q: "Difference between DELETE, TRUNCATE, and DROP?", a: "DELETE – removes specific rows (can use WHERE). TRUNCATE – removes all rows but keeps the table structure. DROP – removes the entire table permanently." },
    { q: "What is normalization?", a: "Normalization is the process of organizing database tables to reduce redundancy and improve data consistency. Common forms: 1NF, 2NF, 3NF." },
    { q: "What is a primary key?", a: "A primary key is a column in a table that uniquely identifies each row. It cannot be NULL and must be unique." },
    { q: "What is a foreign key?", a: "A foreign key is a column that creates a relationship between two tables by referencing the primary key of another table." },
    { q: "How do you sort query results?", a: "Using ORDER BY clause:", code: "SELECT * FROM employees\nORDER BY salary DESC;" },
    { q: "How do you count total rows?", a: "Using COUNT(*) aggregate function:", code: "SELECT COUNT(*) FROM employees;" },
    { q: "What is a subquery?", a: "A subquery is a query nested inside another query. It runs first and its result is used by the outer query.", code: "SELECT name FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);" },
    { q: "What is an INDEX in SQL?", a: "An index improves the speed of data retrieval. It works like a book index — instead of scanning all rows, the DB jumps directly to the relevant rows.", code: "CREATE INDEX idx_name ON employees(name);" },
    { q: "What is a VIEW in SQL?", a: "A VIEW is a virtual table based on a SELECT query. It doesn't store data itself but shows data from one or more tables.", code: "CREATE VIEW it_employees AS\nSELECT * FROM employees WHERE dept = 'IT';" },
    { q: "What is DISTINCT in SQL?", a: "DISTINCT removes duplicate values from query results.", code: "SELECT DISTINCT department FROM employees;" },
    { q: "What is LIMIT in SQL?", a: "LIMIT restricts the number of rows returned by a query.", code: "SELECT * FROM employees LIMIT 10;" },
    { q: "What is COALESCE?", a: "COALESCE returns the first non-NULL value from a list of expressions. Useful for handling NULL values.", code: "SELECT COALESCE(phone, 'N/A') FROM users;" },
    { q: "What is the difference between UNION and UNION ALL?", a: "UNION combines results of two queries and removes duplicates. UNION ALL combines results and keeps all duplicates (faster)." },
    { q: "Write a query to get the second highest salary.", a: "Using subquery or LIMIT with OFFSET:", code: "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);" },
    { q: "What is a stored procedure?", a: "A stored procedure is a saved SQL code block that can be executed repeatedly. It accepts parameters and can contain logic like IF/ELSE and loops.", code: "CALL get_employee_by_dept('IT');" },
    { q: "What is a transaction in SQL?", a: "A transaction is a group of SQL operations that execute as a single unit. If any step fails, all changes are rolled back using ROLLBACK.", code: "BEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;" }
  ],
  scenario: [
    { q: "A user says data is not loading in the application. What will you do?", a: "I will first check whether it's a frontend issue, API issue, or database issue. Then I'll verify the request/response flow, check logs, status codes, and data availability in the backend/database to identify the root cause." },
    { q: "An API returns 500 error. What could be the reason?", a: "A 500 error usually means a server-side issue. Possible reasons: null/missing backend data, unhandled exception, database issue, broken logic, or dependency/service failure. I'll check server logs first." },
    { q: "A user reports 'login not working.' How will you troubleshoot?", a: "I will check: whether credentials are valid, authentication API response, token/session issue, backend logs, database/user record, and environment-specific problems if any." },
    { q: "If SQL data is incorrect in the UI, what will you check?", a: "I will verify: actual DB values, API response, frontend mapping, filters or joins in SQL, and recent data updates or release impact." },
    { q: "If an issue is not reproducible, what will you do?", a: "I'll collect more details like screenshots, exact steps, timestamp, user role, environment, and logs. Sometimes issues are data-specific or role-based, so gathering more context is very important." },
    { q: "If multiple teams are involved in an issue, how do you manage it?", a: "I'll clearly document findings, share relevant logs/evidence, communicate status updates, and coordinate with QA/dev/business teams until the issue is resolved." },
    { q: "How do you prioritize multiple issues at the same time?", a: "I prioritize based on: business impact, number of affected users, production severity, urgency, and dependency on other teams. Critical production issues always come first." },
    { q: "What is your approach to root cause analysis?", a: "My approach: Reproduce the issue → Understand expected vs actual behavior → Check logs/API/DB → Identify root cause → Validate fix → Retest and confirm closure." },
    { q: "How do you handle a production issue?", a: "I first understand the severity, gather issue details, reproduce if possible, check logs/API/database, identify the impact, coordinate with relevant teams, validate the fix, and confirm resolution." },
    { q: "What if you don't know the answer during an interview?", a: "I'll be honest, explain my understanding, and tell them how I would approach finding the solution logically. Problem-solving approach matters more than memorized answers." },
    { q: "An API that was working yesterday is now returning 404. What do you check?", a: "I check: endpoint URL change, deployment changes, route configuration, API gateway settings, and whether the service is running. A 404 after a deployment usually means a route was removed or renamed." },
    { q: "Database query is running very slow. How do you optimize it?", a: "I check: missing indexes, full table scans, unnecessary JOINs, large result sets without LIMIT, and N+1 query problems. Adding an index on the WHERE/JOIN column usually gives the biggest improvement." },
    { q: "How would you debug a memory leak in an application?", a: "I would monitor memory usage over time, check for objects not being released, look for event listeners not being removed, and use profiling tools to identify which part of the code is holding memory." },
    { q: "A new release broke something in production. What do you do?", a: "First, assess the impact. If critical, initiate a rollback immediately. If minor, gather logs, identify the breaking change, hotfix it, test in staging, then redeploy. Always communicate status to stakeholders." },
    { q: "How do you ensure quality before releasing a feature?", a: "I follow: unit testing, integration testing, API validation in Postman, SQL data verification, UAT sign-off, and release checklist review. I also check edge cases and error handling." }
  ],
  fullstack: [
    { q: "What is the difference between client-side and server-side rendering?", a: "Client-side rendering (CSR) renders HTML in the browser using JavaScript (React). Server-side rendering (SSR) renders HTML on the server and sends it to the browser. SSR is better for SEO; CSR is better for dynamic apps." },
    { q: "What is a RESTful API design principle?", a: "REST principles: Stateless (no session stored on server), Client-Server separation, Uniform interface (standard HTTP methods), Resource-based URLs (/users/1), and use of HTTP status codes properly." },
    { q: "What is middleware in backend development?", a: "Middleware is a function that runs between the request and response in a web server. It can handle authentication, logging, error handling, and request parsing.", code: "app.use(authMiddleware);\napp.use(express.json());" },
    { q: "What is the difference between SQL and NoSQL databases?", a: "SQL databases are relational, use tables with fixed schema (MySQL, PostgreSQL). NoSQL databases are non-relational, flexible schema, good for unstructured data (MongoDB, Redis). SQL is better for complex queries; NoSQL for scalability." },
    { q: "What is Docker?", a: "Docker is a containerization tool that packages an application and its dependencies into a container. This ensures the app runs the same way in any environment — dev, staging, or production." },
    { q: "What is CI/CD?", a: "CI (Continuous Integration) automatically tests code when pushed. CD (Continuous Deployment) automatically deploys tested code to production. Tools: GitHub Actions, Jenkins, GitLab CI." },
    { q: "What is an environment variable?", a: "Environment variables store configuration values outside the code — like API keys, database URLs, and secrets. They are set per environment (dev/staging/prod) and never hardcoded.", code: "DB_URL=mysql://localhost:3306/mydb\nSECRET_KEY=abc123" },
    { q: "What is the MVC pattern?", a: "MVC (Model-View-Controller) is a design pattern. Model = data/database logic. View = UI/frontend. Controller = handles requests and connects Model and View." },
    { q: "What is caching and why is it used?", a: "Caching stores frequently accessed data in memory (like Redis) so future requests are served faster without hitting the database every time. It reduces load and improves response time." },
    { q: "What is load balancing?", a: "Load balancing distributes incoming traffic across multiple servers to prevent any single server from being overloaded. It improves availability and performance." },
    { q: "What is the difference between monolithic and microservices architecture?", a: "Monolithic: entire app is one codebase, deployed together. Microservices: app is split into small independent services, each deployed separately. Microservices are more scalable but complex to manage." },
    { q: "What is WebSocket?", a: "WebSocket is a protocol that provides full-duplex (two-way) communication between client and server over a single connection. Used for real-time features like chat, notifications, and live updates." },
    { q: "What is an ORM and why use it?", a: "ORM (Object-Relational Mapping) lets you interact with a database using code objects instead of raw SQL. It reduces boilerplate, prevents SQL injection, and makes code more readable. Examples: SQLAlchemy, Sequelize." },
    { q: "What is pagination in APIs?", a: "Pagination splits large datasets into pages to avoid returning thousands of records at once. Common approaches: page/limit params or cursor-based pagination.", code: "GET /api/users?page=2&limit=20" },
    { q: "What is rate limiting?", a: "Rate limiting restricts how many API requests a client can make in a given time period. It prevents abuse, DDoS attacks, and server overload. Example: 100 requests per minute per IP." }
  ],
  linux: [
    { q: "What is Linux?", a: "Linux is an open-source operating system kernel. It is widely used in servers, cloud environments, and DevOps workflows. Most production servers run on Linux." },
    { q: "What is the command to list files in a directory?", a: "Use ls command. Common options:", code: "ls        # basic list\nls -l     # detailed list\nls -la    # include hidden files\nls -lh    # human-readable sizes" },
    { q: "How do you check running processes in Linux?", a: "Use ps or top command:", code: "ps aux          # all running processes\ntop             # live process monitor\nkill -9 <PID>   # force kill a process" },
    { q: "How do you check disk usage in Linux?", a: "Use df and du commands:", code: "df -h           # disk space usage\ndu -sh folder/  # folder size" },
    { q: "How do you search for text inside files?", a: "Use grep command:", code: "grep 'error' app.log\ngrep -r 'keyword' /var/logs/\ngrep -i 'error' app.log   # case insensitive" },
    { q: "How do you view log files in Linux?", a: "Use tail, cat, or less:", code: "tail -f app.log       # live log stream\ntail -100 app.log     # last 100 lines\ncat app.log           # full file\nless app.log          # paginated view" },
    { q: "What is chmod in Linux?", a: "chmod changes file permissions. Permissions: r=read(4), w=write(2), x=execute(1).", code: "chmod 755 script.sh   # rwxr-xr-x\nchmod +x script.sh    # add execute permission" },
    { q: "How do you find a file in Linux?", a: "Use find command:", code: "find / -name 'app.log'\nfind /var -name '*.log' -mtime -1  # modified in last 1 day" },
    { q: "What is the difference between > and >> in Linux?", a: "> redirects output and overwrites the file. >> appends output to the file without overwriting.", code: "echo 'hello' > file.txt   # overwrite\necho 'world' >> file.txt  # append" },
    { q: "How do you check memory usage in Linux?", a: "Use free command:", code: "free -h    # human-readable memory usage" },
    { q: "What is SSH?", a: "SSH (Secure Shell) is a protocol used to securely connect to a remote server over a network.", code: "ssh user@192.168.1.100\nssh -i key.pem user@server-ip" },
    { q: "How do you copy files in Linux?", a: "Use cp command:", code: "cp file.txt /backup/\ncp -r folder/ /backup/   # copy directory" },
    { q: "What is a cron job?", a: "A cron job is a scheduled task in Linux that runs automatically at specified times.", code: "crontab -e\n# Run every day at 9am:\n0 9 * * * /scripts/backup.sh" },
    { q: "How do you check network connectivity in Linux?", a: "Use ping, curl, or netstat:", code: "ping google.com\ncurl -I https://api.example.com\nnetstat -tuln   # open ports" },
    { q: "What is the difference between kill and kill -9?", a: "kill sends SIGTERM (graceful shutdown — process can clean up). kill -9 sends SIGKILL (force kill — immediate termination, no cleanup).", code: "kill <PID>      # graceful\nkill -9 <PID>   # force kill" }
  ],
  api: [
    { q: "What is API authentication?", a: "API authentication verifies the identity of the caller. Common methods: API Key (simple token in header), Basic Auth (username:password), Bearer Token (JWT), OAuth 2.0 (for third-party access)." },
    { q: "What is the difference between authentication and authorization?", a: "Authentication = verifying WHO you are (login). Authorization = verifying WHAT you can do (permissions). Example: You log in (auth) but can't access admin panel (not authorized)." },
    { q: "What is an API endpoint?", a: "An API endpoint is a specific URL where an API can be accessed. Each endpoint represents a resource and action.", code: "GET    /api/users        # get all users\nPOST   /api/users        # create user\nGET    /api/users/1      # get user by id\nDELETE /api/users/1      # delete user" },
    { q: "What is request payload / request body?", a: "Request payload is the data sent from client to server, usually in POST or PUT requests. It is sent in the body of the HTTP request in JSON format.", code: '{\n  "name": "Zaneera",\n  "email": "z@example.com"\n}' },
    { q: "How do you test an API using Postman?", a: "In Postman: 1) Set the HTTP method (GET/POST). 2) Enter the endpoint URL. 3) Add headers (Content-Type, Authorization). 4) Add request body if needed. 5) Click Send. 6) Validate status code and response data." },
    { q: "What is API versioning?", a: "API versioning allows you to release new versions of an API without breaking existing clients. Common approach: include version in URL.", code: "GET /api/v1/users\nGET /api/v2/users" },
    { q: "What is a webhook?", a: "A webhook is a way for an API to send real-time data to another system when an event occurs. Instead of polling, the server pushes data to a URL you provide. Example: payment success notification." },
    { q: "What is API rate limiting?", a: "Rate limiting restricts how many API requests a client can make in a time window. It protects the server from abuse. Response when exceeded: 429 Too Many Requests." },
    { q: "What is the difference between REST and SOAP?", a: "REST uses HTTP, JSON, lightweight, easy to use — modern standard. SOAP uses XML, strict protocol, more complex — used in legacy enterprise systems. REST is preferred for new APIs." },
    { q: "What is idempotency in APIs?", a: "An idempotent operation produces the same result no matter how many times it's called. GET, PUT, DELETE are idempotent. POST is NOT idempotent (calling it twice creates two records)." },
    { q: "How do you handle API errors properly?", a: "Always return meaningful status codes (400, 401, 404, 500) with a clear error message in the response body.", code: '{\n  "error": "User not found",\n  "code": 404\n}' },
    { q: "What is HTTPS and why is it important for APIs?", a: "HTTPS encrypts data between client and server using TLS/SSL. It prevents man-in-the-middle attacks and data interception. All production APIs must use HTTPS." },
    { q: "What is an API gateway?", a: "An API gateway is a server that acts as an entry point for all API requests. It handles routing, authentication, rate limiting, logging, and load balancing. Examples: AWS API Gateway, Kong, Nginx." },
    { q: "What is GraphQL?", a: "GraphQL is an alternative to REST where the client specifies exactly what data it needs in a single query. It avoids over-fetching and under-fetching of data. Developed by Facebook." },
    { q: "How do you secure an API?", a: "API security best practices: Use HTTPS always, implement authentication (JWT/OAuth), validate all inputs, use rate limiting, never expose sensitive data in responses, log all requests, and use API gateway." },
    { q: "What is the difference between synchronous and asynchronous API calls?", a: "Synchronous: client waits for the server response before continuing. Asynchronous: client sends request and continues without waiting — uses callbacks, Promises, or async/await. Most modern APIs are async." },
    { q: "What is API mocking?", a: "API mocking means creating a fake API that simulates real responses. Used during development when the real API isn't ready yet. Tools: Postman Mock Server, WireMock, json-server." },
    { q: "What is the difference between API key and OAuth?", a: "API Key: simple static token passed in headers — easy but less secure. OAuth 2.0: token-based authorization framework — more secure, supports scopes and expiry. Use OAuth for user-facing apps, API keys for server-to-server." },
    { q: "What is a 429 status code?", a: "429 Too Many Requests — the client has exceeded the rate limit. The server may include a Retry-After header indicating when to try again." },
    { q: "What is content negotiation in REST APIs?", a: "Content negotiation allows the client to specify what format it wants in the response using the Accept header. Example: Accept: application/json tells the server to return JSON.", code: "Accept: application/json\nContent-Type: application/json" },
    { q: "What is the difference between 200 OK and 204 No Content?", a: "200 OK: request succeeded and response body contains data. 204 No Content: request succeeded but there is no response body (common for DELETE or PUT operations)." },
    { q: "What is API documentation and why is it important?", a: "API documentation describes endpoints, methods, parameters, request/response formats, and error codes. It helps developers integrate quickly. Tools: Swagger/OpenAPI, Postman Docs, Redoc." },
    { q: "What is idempotency and which HTTP methods are idempotent?", a: "Idempotent = calling the same operation multiple times gives the same result. GET, PUT, DELETE are idempotent. POST is NOT — calling POST twice creates two records." },
    { q: "How do you handle pagination in a REST API?", a: "Common approaches: page/limit (offset-based) or cursor-based. Always paginate large datasets to avoid performance issues.", code: "GET /api/users?page=1&limit=20\nGET /api/users?cursor=abc123&limit=20" }
  ]
};

// ===== EXTRA HR QUESTIONS =====
interviewData.hr.push(
  { q: "Describe a time you worked under a tight deadline.", a: "In my previous role, we had a critical production issue that needed to be resolved before a client demo. I quickly analyzed the logs, identified a SQL data mismatch, coordinated with the dev team, and we resolved it 30 minutes before the demo. It taught me to stay focused and communicate clearly under pressure." },
  { q: "How do you keep yourself updated with new technologies?", a: "I follow tech blogs, watch tutorials on YouTube, practice on personal projects, and explore documentation. I also take online courses — I completed Python Programming and Full Stack Web Development training to stay current." },
  { q: "What is your experience with Agile methodology?", a: "I've worked in Agile environments where we had sprint cycles, daily standups, and sprint reviews. I'm familiar with ticket-based workflows, prioritization, and cross-team coordination in Agile settings." },
  { q: "How do you handle a situation where you disagree with your manager?", a: "I would first make sure I fully understand their perspective. Then I'd present my view with data and reasoning in a respectful way. Ultimately, I respect the final decision while ensuring my concern is documented." },
  { q: "What is your notice period?", a: "My current notice period is [X days/months]. However, I'm open to discussing early joining if required, depending on the situation." },
  { q: "Are you open to relocation?", a: "Yes, I'm open to relocation based on the role and opportunity. I'm currently based in Bangalore and comfortable working in any major tech hub." },
  { q: "How do you manage your work-life balance?", a: "I prioritize tasks effectively during work hours to avoid unnecessary overtime. I also make sure to disconnect after work to recharge. A balanced mind leads to better productivity and decision-making." },
  { q: "What type of work environment do you prefer?", a: "I prefer a collaborative environment where communication is open, learning is encouraged, and there's a clear ownership of responsibilities. I'm comfortable in both remote and in-office setups." },
  { q: "Tell me about a mistake you made and what you learned.", a: "Early in my career, I once closed a ticket without fully verifying the fix in all environments. The issue reappeared in production. I learned to always do thorough end-to-end validation before marking anything as resolved." },
  { q: "How do you prioritize your tasks daily?", a: "I start each day by reviewing pending tickets and tasks, then prioritize based on urgency and business impact. I use a simple to-do list and communicate blockers early so nothing gets delayed." }
);

// ===== EXTRA TECHNICAL QUESTIONS =====
interviewData.technical.push(
  { q: "What is the difference between var, let, and const in JavaScript?", a: "var: function-scoped, can be re-declared, hoisted. let: block-scoped, can be reassigned, not re-declared. const: block-scoped, cannot be reassigned. Always prefer const, use let when reassignment is needed.", code: "const name = 'Zaneera'; // can't reassign\nlet count = 0;          // can reassign\nvar old = true;         // avoid" },
  { q: "What is closure in JavaScript?", a: "A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.", code: "function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst inc = counter();\ninc(); // 1\ninc(); // 2" },
  { q: "What is the event loop in JavaScript?", a: "The event loop allows JavaScript (single-threaded) to handle async operations. It continuously checks the call stack and the callback queue — when the stack is empty, it pushes callbacks from the queue to the stack." },
  { q: "What is the difference between == and === in JavaScript?", a: "== checks value only (loose equality, does type coercion). === checks both value AND type (strict equality). Always use === to avoid unexpected bugs.", code: "5 == '5'   // true (type coercion)\n5 === '5'  // false (different types)" },
  { q: "What is async/await in JavaScript?", a: "async/await is syntactic sugar over Promises. It makes asynchronous code look synchronous and easier to read. async marks a function as async; await pauses execution until the Promise resolves.", code: "async function getData() {\n  const res = await fetch('/api/data');\n  const json = await res.json();\n  return json;\n}" },
  { q: "What is the virtual DOM in React?", a: "The virtual DOM is a lightweight in-memory copy of the real DOM. React updates the virtual DOM first, diffs it with the previous version, and only updates the changed parts in the real DOM — making it fast." },
  { q: "What is the difference between controlled and uncontrolled components in React?", a: "Controlled: form input value is managed by React state. Uncontrolled: form input value is managed by the DOM directly using refs. Controlled components are preferred for predictable behavior." },
  { q: "What is React Router?", a: "React Router is a library for client-side routing in React apps. It allows navigation between pages without full page reloads.", code: "<Route path='/home' element={<Home />} />" },
  { q: "What is the difference between class and functional components in React?", a: "Class components use lifecycle methods and this.state. Functional components use hooks (useState, useEffect). Functional components are now the standard — simpler and more readable." },
  { q: "What is Python and why is it popular?", a: "Python is a high-level, interpreted programming language known for its simple syntax and readability. It's popular for web development (Flask, Django), data science, automation, and scripting." }
);

// ===== EXTRA SQL QUESTIONS =====
interviewData.sql.push(
  { q: "What is the difference between CHAR and VARCHAR?", a: "CHAR is fixed-length — always uses the defined space. VARCHAR is variable-length — uses only as much space as needed. Use CHAR for fixed-size data (like country codes), VARCHAR for variable data (like names)." },
  { q: "What is an AUTO_INCREMENT in MySQL?", a: "AUTO_INCREMENT automatically generates a unique number for a column (usually primary key) each time a new row is inserted.", code: "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100)\n);" },
  { q: "What is the difference between INNER JOIN and OUTER JOIN?", a: "INNER JOIN returns only matching rows from both tables. OUTER JOIN (LEFT/RIGHT/FULL) returns matching rows plus unmatched rows from one or both tables with NULL for missing values." },
  { q: "How do you add a new column to an existing table?", a: "Using ALTER TABLE:", code: "ALTER TABLE employees\nADD COLUMN phone VARCHAR(15);" },
  { q: "What is a composite key?", a: "A composite key is a primary key made up of two or more columns together. The combination must be unique, even if individual columns are not.", code: "PRIMARY KEY (student_id, course_id)" },
  { q: "What is the difference between RANK() and DENSE_RANK()?", a: "RANK() skips numbers after ties (1,1,3). DENSE_RANK() does not skip (1,1,2). Both are window functions used for ranking rows.", code: "SELECT name, salary,\n  RANK() OVER (ORDER BY salary DESC) as rnk\nFROM employees;" },
  { q: "How do you get the top 3 highest salaries?", a: "Using ORDER BY with LIMIT:", code: "SELECT DISTINCT salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3;" },
  { q: "What is a self join?", a: "A self join joins a table with itself. Useful for hierarchical data like employee-manager relationships.", code: "SELECT e.name, m.name AS manager\nFROM employees e\nJOIN employees m ON e.manager_id = m.id;" },
  { q: "What is the CASE statement in SQL?", a: "CASE is SQL's if-else logic. It returns different values based on conditions.", code: "SELECT name,\n  CASE\n    WHEN salary > 80000 THEN 'High'\n    WHEN salary > 50000 THEN 'Mid'\n    ELSE 'Low'\n  END AS salary_band\nFROM employees;" },
  { q: "What is the difference between IN and EXISTS?", a: "IN checks if a value matches any value in a list or subquery. EXISTS checks if a subquery returns any rows. EXISTS is generally faster for large datasets.", code: "-- IN\nSELECT * FROM emp WHERE dept_id IN (1,2,3);\n-- EXISTS\nSELECT * FROM emp e WHERE EXISTS\n  (SELECT 1 FROM dept d WHERE d.id = e.dept_id);" }
);

// ===== EXTRA SCENARIO QUESTIONS =====
interviewData.scenario.push(
  { q: "A scheduled job failed overnight. How do you investigate?", a: "I check the job scheduler logs first to see the error message and exit code. Then I check application logs around the failure time, verify DB connectivity, check if any dependency service was down, and reproduce manually if possible." },
  { q: "Users are complaining the application is slow. What do you do?", a: "I check: server CPU/memory usage, slow SQL queries (using EXPLAIN), API response times, network latency, and recent deployments. I also check if the issue is for all users or specific ones." },
  { q: "A new developer pushed code that broke production. What is the process?", a: "Immediately assess impact. If critical, rollback the deployment. Notify stakeholders. Identify the breaking change in the commit. Fix in a branch, test in staging, then redeploy with proper review." },
  { q: "How do you handle a situation where the same bug keeps coming back?", a: "I do a proper root cause analysis instead of just fixing the symptom. I check if the fix was incomplete, if there's a missing test case, or if the underlying design has a flaw. Then I document the fix and add a regression test." },
  { q: "A client reports data loss. How do you respond?", a: "First, I stay calm and acknowledge the issue. I check DB transaction logs, backup records, and recent DELETE/UPDATE operations. I identify what data was lost, when, and why. Then I work on recovery and prevent recurrence." },
  { q: "How do you communicate a production issue to non-technical stakeholders?", a: "I avoid technical jargon. I explain: what is affected, how many users are impacted, what we are doing to fix it, and the estimated resolution time. I give regular updates until the issue is resolved." },
  { q: "You find a critical bug just before a release. What do you do?", a: "I immediately report it to the team lead with severity assessment. If it's critical, the release should be delayed. If it's minor, we document it and plan a hotfix. Never release with a known critical bug." },
  { q: "How do you validate that a bug fix actually worked?", a: "I test the exact scenario that caused the bug, check edge cases, verify in the same environment where it occurred, check related functionality for regression, and confirm with the reporter if possible." },
  { q: "An API that worked in staging is failing in production. Why could this happen?", a: "Common reasons: different environment configs (DB URL, API keys), different data in production, firewall/network rules, missing environment variables, or different server versions. Always compare env configs first." },
  { q: "How do you document an issue after resolving it?", a: "I document: issue description, steps to reproduce, root cause, fix applied, testing done, and prevention steps. This helps the team avoid the same issue in future and builds a knowledge base." }
);

// ===== EXTRA FULLSTACK QUESTIONS =====
interviewData.fullstack.push(
  { q: "What is the difference between cookies, localStorage, and sessionStorage?", a: "Cookies: sent with every HTTP request, can have expiry, accessible server-side. localStorage: persists until manually cleared, client-side only. sessionStorage: cleared when tab closes, client-side only." },
  { q: "What is HTTPS and how does it work?", a: "HTTPS uses TLS/SSL to encrypt data between client and server. The server has a certificate; the client verifies it, then they exchange keys to encrypt all communication. Prevents eavesdropping and tampering." },
  { q: "What is a CDN?", a: "CDN (Content Delivery Network) is a network of servers distributed globally that serve static assets (images, CSS, JS) from the server closest to the user — reducing latency and improving load time." },
  { q: "What is server-side validation vs client-side validation?", a: "Client-side: validation in the browser (fast, good UX) but can be bypassed. Server-side: validation on the server (always required, cannot be bypassed). Always do BOTH — never rely on client-side alone." },
  { q: "What is the difference between authentication and session management?", a: "Authentication verifies identity (login). Session management maintains that identity across multiple requests using cookies, tokens, or sessions. Without session management, users would need to log in on every request." },
  { q: "What is lazy loading?", a: "Lazy loading delays loading of resources (images, components) until they are needed. It improves initial page load time. In React: React.lazy() and Suspense. In HTML: loading='lazy' on images." },
  { q: "What is debouncing and throttling?", a: "Debouncing: delays function execution until after a pause in events (e.g., search input — wait until user stops typing). Throttling: limits function execution to once per time interval (e.g., scroll events)." },
  { q: "What is the difference between PUT and POST in REST?", a: "POST creates a new resource (not idempotent — calling twice creates two records). PUT updates/replaces a resource at a specific URL (idempotent — calling twice gives same result)." },
  { q: "What is a 403 Forbidden error?", a: "403 Forbidden means the server understood the request but refuses to authorize it. The user is authenticated but doesn't have permission. Different from 401 (not authenticated at all)." },
  { q: "What is the purpose of a .env file?", a: "A .env file stores environment-specific configuration like API keys, database URLs, and secrets outside the codebase. It should never be committed to Git. Use .gitignore to exclude it.", code: "DB_URL=mysql://localhost/mydb\nJWT_SECRET=supersecretkey\nPORT=5000" }
);

// ===== EXTRA LINUX QUESTIONS =====
interviewData.linux.push(
  { q: "What is the difference between absolute and relative path?", a: "Absolute path starts from root (/): /home/user/app/logs. Relative path starts from current directory: ./logs or ../config. Use absolute paths in scripts for reliability." },
  { q: "How do you check which port a service is running on?", a: "Use netstat or ss command:", code: "netstat -tuln | grep 8080\nss -tuln | grep 8080\nlsof -i :8080" },
  { q: "How do you monitor CPU usage in Linux?", a: "Use top, htop, or vmstat:", code: "top          # live CPU/memory\nhtop         # interactive (if installed)\nvmstat 1 5   # stats every 1 sec, 5 times" },
  { q: "What is a symbolic link (symlink)?", a: "A symlink is a pointer/shortcut to another file or directory. Like a Windows shortcut.", code: "ln -s /var/app/config.json ./config.json" },
  { q: "How do you compress and extract files in Linux?", a: "Using tar command:", code: "tar -czf archive.tar.gz folder/   # compress\ntar -xzf archive.tar.gz           # extract\nzip -r archive.zip folder/        # zip\nunzip archive.zip                 # unzip" },
  { q: "What is /var/log in Linux?", a: "/var/log is the standard directory for log files in Linux. Common logs: /var/log/syslog (system), /var/log/auth.log (authentication), /var/log/nginx/access.log (web server)." },
  { q: "How do you run a script in the background in Linux?", a: "Use & to run in background, nohup to keep running after logout:", code: "./script.sh &           # background\nnohup ./script.sh &     # survives logout\njobs                    # list background jobs" },
  { q: "What is the difference between su and sudo?", a: "su switches to another user (usually root) — requires that user's password. sudo runs a single command as root — requires your own password. sudo is safer and preferred." },
  { q: "How do you check file permissions in Linux?", a: "Use ls -l. Output format: -rwxr-xr-x. First char: file type. Next 3: owner permissions. Next 3: group. Last 3: others. r=read, w=write, x=execute.", code: "ls -l file.sh\n# -rwxr-xr-x 1 user group 1234 Mar 28 file.sh" },
  { q: "What is the pipe operator | in Linux?", a: "The pipe | sends the output of one command as input to another command.", code: "cat app.log | grep 'ERROR' | tail -20\nps aux | grep python" }
);

// ===== BOOKMARKS =====
function getBookmarks() {
  return JSON.parse(localStorage.getItem('zt_bookmarks') || '[]');
}
function saveBookmarks(bm) {
  localStorage.setItem('zt_bookmarks', JSON.stringify(bm));
}
function isBookmarked(key) {
  return getBookmarks().includes(key);
}
function toggleBookmark(key, btn) {
  let bm = getBookmarks();
  if (bm.includes(key)) {
    bm = bm.filter(k => k !== key);
    btn.textContent = '🤍';
    btn.title = 'Save question';
  } else {
    bm.push(key);
    btn.textContent = '❤️';
    btn.title = 'Saved!';
  }
  saveBookmarks(bm);
}

// ===== RENDER QA =====
function renderQA(category) {
  const list = document.getElementById('qa-list');
  const data = interviewData[category];
  list.innerHTML = '';

  if (!data || data.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem;">No questions found.</p>';
    return;
  }

  data.forEach((item, i) => {
    const key = `${category}_${i}`;
    const bookmarked = isBookmarked(key);
    const card = document.createElement('div');
    card.className = 'qa-card';
    card.innerHTML = `
      <div class="qa-question" onclick="toggleQA(this)">
        <span>Q${i + 1}. ${item.q}</span>
        <div class="qa-actions">
          <button class="qa-btn bm-btn" title="${bookmarked ? 'Saved!' : 'Save question'}" onclick="event.stopPropagation(); toggleBookmark('${key}', this)">${bookmarked ? '❤️' : '🤍'}</button>
          <span class="arrow">▼</span>
        </div>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-text">${item.a.replace(/\n/g, '<br>')}</div>
        ${item.code ? `<code>${item.code}</code>` : ''}
        <button class="qa-btn copy-btn" onclick="copyAnswer(this, \`${(item.a + (item.code ? '\n' + item.code : '')).replace(/`/g, "'")}\`)">📋 Copy Answer</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function copyAnswer(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Copy Answer', 2000);
  });
}

function toggleQA(el) {
  const card = el.parentElement;
  card.classList.toggle('open');
}

// Tab switching — support new tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    if (tab === 'saved') {
      renderSaved();
    } else {
      renderQA(tab);
    }
  });
});

// ===== SAVED QUESTIONS =====
function renderSaved() {
  const list = document.getElementById('qa-list');
  const bm = getBookmarks();
  list.innerHTML = '';

  if (bm.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem;">No saved questions yet. Click ❤️ on any question to save it.</p>';
    return;
  }

  bm.forEach(key => {
    const [cat, idx] = key.split('_');
    const item = interviewData[cat]?.[parseInt(idx)];
    if (!item) return;
    const card = document.createElement('div');
    card.className = 'qa-card';
    card.innerHTML = `
      <div class="qa-question" onclick="toggleQA(this)">
        <span><span style="color:var(--accent);font-size:0.75rem;margin-right:0.5rem;">[${cat.toUpperCase()}]</span>${item.q}</span>
        <div class="qa-actions">
          <button class="qa-btn bm-btn" title="Remove" onclick="event.stopPropagation(); toggleBookmark('${key}', this); renderSaved()">❤️</button>
          <span class="arrow">▼</span>
        </div>
      </div>
      <div class="qa-answer">
        <div class="qa-answer-text">${item.a.replace(/\n/g, '<br>')}</div>
        ${item.code ? `<code>${item.code}</code>` : ''}
        <button class="qa-btn copy-btn" onclick="copyAnswer(this, \`${(item.a + (item.code ? '\n' + item.code : '')).replace(/`/g, "'")}\`)">📋 Copy Answer</button>
      </div>
    `;
    list.appendChild(card);
  });
}

// Initial render
renderQA('hr');

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
