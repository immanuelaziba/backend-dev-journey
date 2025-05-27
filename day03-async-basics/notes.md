# 🧠 Day 3 – Chapter 3: Fetch, File System & Async Operations

**Topic:** Working with APIs, File System, and Async Patterns  
**Date:** May 27, 2025  
**Time Spent:** 3.5 hours  
**Skill Level:** Beginner-Intermediate  
**Confidence Rating:** ⭐⭐⭐⭐✩  
**Status:** Complete

---

## 🔧 What I Built Today

- Used Node’s built-in `fetch()` to get live data from a public API (JSONPlaceholder)
- Practiced reading from a text file using 3 methods: Callback, Promise, and Async/Await
- Simulated async behavior with `setTimeout()` to mimic real-world API latency

## 🧠 What I Learned

- `fetch()` is available natively from Node.js v18+ — no need for `node-fetch` unless you're on older versions
- There are multiple ways to read files with `fs`: callbacks, promises, and async/await — each with its own syntax and benefits
- Async simulation helps understand delay, execution order, and callback handling in real apps

## 🔁 What I’d Do Differently

- Use `try...catch` even with promise chains to keep error logs consistent
- Add timestamp logs to async operations to better track flow of execution

## 🔮 What’s Next

- Dive deeper into Node’s core modules like `fs`, `path`, and `os`
- Start building small CLI tools to apply these concepts in mini-projects
