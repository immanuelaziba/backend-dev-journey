# 🧠 Backend Dev Journey by Manny Aziba

This is my public log of backend development practice using Node.js, Express, MongoDB, JWT, and more.

## 📅 Practice Logs

- ✅ Day 01: Node Setup & Hello World
- ✅ Day 02: Core Modules
- ⏳ Day 03: Async Patterns
- 🔐 Day 07: JWT Auth
- 💬 Day 09: Real-Time Chat with Socket.io

## 📁 Structure

Each folder contains:
- `app.js` or route/controller code
- `notes.md` reflection log
- Optional: screenshots or demo links

## 🧠 Why I'm Doing This

To document growth, build real backend experience, and show proof of skill.



## 📅 Day 01 – Node.js Setup & Hello World

📁 Folder: `day01-node-setup`

### ✅ Summary
Kicked off the journey by setting up the Node.js environment, creating the first Node script, and understanding how JavaScript runs outside the browser. Also explored the terminal and initial project structure.

### 🧠 Key Concepts
- Node.js runtime environment
- Writing and executing JavaScript files using `node`
- Terminal basics
- Starting projects with `npm init`

### 📂 Files Created
- `app.js` → Contains `console.log("Hello from Node.js!")`
- `notes.md` → Daily log and reflections

### 🔍 Reflection Snippet
> “Node allows us to write backend logic using JavaScript. Running `node app.js` for the first time was empowering.”



## 📅 Day 02 – Exploring Core Modules (fs, path, os)

📁 Folder: `day02-node-core-modules`

### ✅ Summary
Practiced using Node.js core modules to interact with the file system, resolve file paths, and read system information. Built small snippets to understand synchronous vs asynchronous methods.

### 🧠 Key Concepts
- `fs` → File system operations (`readFile`, `writeFile`, etc.)
- `path` → Resolving and joining file paths
- `os` → Accessing OS-level data like memory, CPUs, platform

### ⚙️ Mini Projects
- Log system info using `os`
- Create and read text files using `fs`
- Build a CLI utility to resolve absolute paths with `path.resolve()`

### 🔍 Reflection Snippet
> “Using fs to create and read files felt like giving life to the terminal — I could actually shape the file system with code.”



## 📅 Day 3: APIs, Async & File System

**Focus:**  
- Fetching API data using native `fetch()`  
- Reading files via `fs` with 3 approaches  
- Simulating async behavior in Node.js  

**Key Files:**
- `fetchData.js`: Uses `async/await` to pull JSON data from a public API
- `readMethods.js`: Reads a file (`example.txt`) using Callback, Promise, and Async/Await
- `simulateAsync.js`: Uses `setTimeout` to mimic an async operation

**Highlights:**  
✅ Practiced structured async flows  
✅ Improved confidence in using the `fs` module  
✅ Explored version-specific Node.js features



## 📅 Day 04 – Express.js Middleware, Route Parameters & Query Strings

📁 Folder: `day04-express-middleware-routing`

### ✅ Summary
Built an Express server with custom middleware that logs requests and adds timestamps. Practiced route handling, including route parameters and query strings for dynamic behavior.

### 🧠 Key Concepts
- Middleware basics (`app.use`)
- Custom middleware for logging and request enhancement
- Route parameters (`:id`)
- Query strings (`?key=value`)

### ⚙️ Exercises Completed
1. **Logging Middleware**
   - Logs method, URL, and timestamp
2. **Request Time Middleware**
   - Adds a custom timestamp to each request object
3. **Dynamic Route**
   - Accepts `/products/:id?category=value`

### 🔍 Reflection Snippet
> “Understanding how middleware chains work helped me grasp the flow of a request from entry to response.”



## 📅 Day 05 – Modularizing Express App & CRUD Starter

📁 Folder: `day05-express-routing-structure`

### ✅ Summary
Refactored the Express project into a modular structure using routers and middleware folders. Practiced breaking logic into reusable units and setting the foundation for future CRUD operations.

### 🧠 Key Concepts
- Route organization using `express.Router()`
- Folder structure: `routes/`, `controllers/`, `middlewares/`
- Modular imports using `require()`
- Clean code practices for scalable apps

### 📁 Project Structure
