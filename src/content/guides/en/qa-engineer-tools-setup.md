---
title: "Tools Setup"
description: Get a code editor, Postman, and browser DevTools ready before your first test case.
order: 1
role: qa-engineer
---

🧰 You don't need to be a programmer to be a great QA engineer — but a few tools make the job dramatically easier from day one.

## Why this comes first

Bug reports are more convincing with a request and response pasted in, and "have you checked the console?" stops being a scary question once you know where the console is. None of this is complicated — it just needs to be installed before you're mid-ticket and scrambling.

## 🧰 Tools to set up

- **A code editor** — [VS Code](https://code.visualstudio.com/) is the safe pick. You don't need to write code to get value out of it: find-in-file across a whole project and a built-in terminal panel alone are worth the install.
- **Postman** — [postman.com/downloads](https://www.postman.com/downloads/). For manually sending API requests and inspecting what comes back — status codes, headers, response bodies — without needing a developer to do it for you.
- **Browser DevTools** — already built into Chrome, Edge, and Firefox, so nothing to install. Just make sure you know how to open them: **F12**, or right-click anywhere on a page → **Inspect**. The **Console** and **Network** tabs are the two you'll live in.

## 🏷️ Skills you'll pick up

`IDE Setup` `Postman` `Browser DevTools`

## 💡 Tips

- Don't worry about Selenium or browser-driver setup yet — that's covered once you reach the automation-fundamentals topic. No need to install anything for it now.
- In DevTools, the Network tab only records requests made *while it's open* — open it before you reproduce the issue, not after.
- Save a couple of real API requests in Postman as you go; a working example beats re-typing one from memory every time.

Next up: head back to the [roadmap](/roadmap?role=qa-engineer) and continue with **QA Fundamentals**. 🔍
