---
title: "Tools Setup"
description: Install the Azure CLI, VS Code with Azure Tools, Docker Desktop, and kubectl before the rest of this roadmap.
order: 1
role: cloud-engineer
---

🧰 The Azure Portal is a fine start, but almost everything you'll actually do as a cloud engineer happens from a terminal. Let's get that terminal ready.

## Why this comes first

Scripting a deployment, checking a resource's state, debugging a pipeline — none of that happens by clicking around the Portal. Get the CLI and its friends installed now, and the networking, compute, and containers topics later are hands-on from the first exercise instead of stalled on an install.

## 🧰 Tools to install

- **Azure CLI** — [learn.microsoft.com/en-us/cli/azure/install-azure-cli](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli). The command-line tool for scripting Azure instead of clicking through the Portal — you'll use `az` constantly once you're past the fundamentals.
- **VS Code + the Azure Tools extension pack** — [code.visualstudio.com](https://code.visualstudio.com/). Lets you browse and manage Azure resources right from the editor, plus syntax help once you start writing IaC files.
- **Docker Desktop** — [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/). You'll need this before the Containers & Kubernetes topic on this roadmap — get it installed now so it's one less thing blocking you later.
- **kubectl** — [kubernetes.io/docs/tasks/tools](https://kubernetes.io/docs/tasks/tools/). The CLI for talking to a Kubernetes cluster. Same story as Docker — needed for that same containers topic, so may as well knock it out now.
- **Terraform CLI** (optional, nice-to-have) — [developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install). Comes up later in the Infrastructure as Code topic. No rush — just worth knowing it exists.

## 🏷️ Skills you'll pick up

`Azure CLI` `IDE Setup` `kubectl`

## 💡 Tips

- After installing the Azure CLI, run `az login` once to make sure it's actually talking to your account before you assume it's set up correctly.
- Docker Desktop needs virtualization enabled in some BIOS/Windows setups — if the install hangs or complains, that's usually why.
- Don't stress about Terraform yet — it's mentioned here so the name is familiar, not so you install it today.

Next up: head back to the [roadmap](/roadmap?role=cloud-engineer) and continue with **Cloud Fundamentals (AZ-900)**. 🚀
