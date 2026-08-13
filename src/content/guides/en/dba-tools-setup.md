---
title: "Tools Setup"
description: Install SSMS, Azure Data Studio, and set up your editor before the rest of your DBA training.
order: 0
role: dba
---

🧰 Before you touch AZ-900 or crack open your first lab, let's get your toolbox sorted. A few installs now save you a scramble later.

## Why this comes first

Everything else on this roadmap assumes SSMS is already open on your machine. Install it now, on the right version, and the AZ-900/DP-900 labs later won't stall waiting on a missing tool.

## 🧰 Tools to install

- **SSMS (SQL Server Management Studio)** — [download from Microsoft](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms). This is your main day-to-day tool for connecting to and administering SQL Server. **Make sure you're on version 20 or later — it's required**, not a nice-to-have.
- **Azure Data Studio** — [azure.microsoft.com/en-us/products/data-studio](https://azure.microsoft.com/en-us/products/data-studio). Free, lighter, and cross-platform. Your go-to if you're on a Mac, or when you just want to run a quick query without SSMS's full weight.
- **VS Code + the "SQL Server (mssql)" extension** — [code.visualstudio.com](https://code.visualstudio.com/). Optional third option — some DBAs like writing T-SQL in a modern editor with a terminal, git, and other extensions one tab away. Not required, just worth knowing it exists.

## 🏷️ Skills you'll pick up

`SSMS` `Azure Data Studio` `IDE Setup`

## 💡 Tips

- Install SSMS first — every other guide in this program assumes it's already there.
- The version-20-or-later requirement trips people up when they grab an installer from an old download link or a shared drive. Check via **Help → About** in SSMS if you're not sure what you've got.
- SSMS and Azure Data Studio play fine side by side — no need to pick one forever, use whichever fits the task.

## 📥 Download related content

- **[DBA Training Program — Trainee's Handout](/downloads/Trainees_Handout_ClassterDBA.pdf)** — the full 12-week program this roadmap is based on, as a PDF you can keep for reference.

Next up: [Microsoft Learn Setup](/guides/ms-learn-setup) — time to get your account set up. 👋
