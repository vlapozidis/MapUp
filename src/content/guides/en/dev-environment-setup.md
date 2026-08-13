---
title: "Tools Setup"
description: Get Git, VS Code, and Node.js installed so you're ready to actually start coding.
order: 1
role: developer
---

💻 Before you write a single line of real code here, there's a short list of tools to get installed. Ten minutes now saves you a lot of "wait, why doesn't this work" later.

## Why this matters now

Every task from here on — cloning a repo, running a project locally, opening a pull request — assumes these tools are already on your machine. Get them sorted today, and the next roadmap step is about *learning to code*, not fighting your setup.

## 🧰 What to install

- **[Git](https://git-scm.com/downloads)** — version control. Basically everything else on this list, and every repo you'll touch, assumes Git is already installed. Get this one first.
- **[VS Code](https://code.visualstudio.com/)** — the editor most of the team uses. Once it's installed, grab a couple of extensions that pay for themselves immediately: **ESLint** (flags issues as you type) and **Prettier** (auto-formats your code so you're not arguing with a linter about spacing). Both are one click away in the Extensions panel.
- **[Node.js](https://nodejs.org/)** — the JavaScript runtime behind most of our tooling. Installing it also installs **npm**, which you'll use constantly.
- **A package manager** — npm comes bundled with Node.js, so you already have it. Some teams prefer **yarn** or **pnpm** instead; they all do roughly the same job. Whichever the project you're on already uses, stick with that one rather than mixing them.

## 🏷️ What you'll be using

`Git` `VS Code` `Node.js` `npm`

## 🚀 Running something locally

Most projects follow the same rhythm: clone the repo, run `npm install` to pull down dependencies, then `npm run dev` (or something similar) to start a local server. If a project's README describes different commands, trust the README over any general assumption — including this one.

## 💡 Tips

- Installers will throw a bunch of options at you that you're not sure about — the defaults are almost always fine. Don't overthink it.
- On Windows, Git installs **Git Bash** alongside it, which is worth reaching for anything that gives you trouble in the regular terminal.
- If `npm install` fails right after a fresh install, closing and reopening your terminal (or restarting your machine) fixes it more often than you'd expect — it's usually just a PATH that hasn't refreshed yet.

Next up: head back to the roadmap and continue with **[Programming Fundamentals](/roadmap?role=developer)**.
