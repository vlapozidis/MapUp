---
title: "Ρύθμιση Εργαλείων"
description: Εγκατάσταση Azure CLI, VS Code με Azure Tools, Docker Desktop και kubectl πριν από το υπόλοιπο αυτού του οδικού χάρτη.
order: 1
role: cloud-engineer
---

🧰 Το Azure Portal είναι μια καλή αρχή, αλλά σχεδόν όλα όσα θα κάνεις πραγματικά ως cloud engineer γίνονται από ένα terminal. Ας το ετοιμάσουμε.

## Γιατί έρχεται πρώτο αυτό

Το να scriptάρεις ένα deployment, να ελέγξεις την κατάσταση ενός πόρου, να debugάρεις ένα pipeline — τίποτα από αυτά δεν γίνεται κάνοντας κλικ στο Portal. Εγκατέστησε το CLI και τα υπόλοιπα τώρα, και τα θέματα networking, compute και containers αργότερα θα είναι hands-on από την πρώτη άσκηση, αντί να κολλήσουν σε μια εγκατάσταση.

## 🧰 Εργαλεία για εγκατάσταση

- **Azure CLI** — [learn.microsoft.com/en-us/cli/azure/install-azure-cli](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli). Το command-line εργαλείο για να scriptάρεις το Azure αντί να κάνεις κλικ στο Portal — θα χρησιμοποιείς το `az` συνέχεια μόλις προσπεράσεις τα fundamentals.
- **VS Code + το Azure Tools extension pack** — [code.visualstudio.com](https://code.visualstudio.com/). Σου επιτρέπει να βλέπεις και να διαχειρίζεσαι Azure resources μέσα από τον editor, μαζί με βοήθεια σύνταξης μόλις ξεκινήσεις να γράφεις αρχεία IaC.
- **Docker Desktop** — [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/). Θα το χρειαστείς πριν από το θέμα Containers & Kubernetes σε αυτόν τον οδικό χάρτη — εγκατέστησέ το τώρα ώστε να είναι ένα πράγμα λιγότερο να σε μπλοκάρει αργότερα.
- **kubectl** — [kubernetes.io/docs/tasks/tools](https://kubernetes.io/docs/tasks/tools/). Το CLI για να μιλάς με ένα Kubernetes cluster. Ίδια λογική με το Docker — χρειάζεται για το ίδιο θέμα containers, οπότε καλού-κακού κάν' το τώρα.
- **Terraform CLI** (προαιρετικό, καλό να το έχεις) — [developer.hashicorp.com/terraform/install](https://developer.hashicorp.com/terraform/install). Έρχεται αργότερα στο θέμα Infrastructure as Code. Καμία βιασύνη — απλά καλό να ξέρεις ότι υπάρχει.

## 🏷️ Δεξιότητες που θα αποκτήσεις

`Azure CLI` `IDE Setup` `kubectl`

## 💡 Συμβουλές

- Μετά την εγκατάσταση του Azure CLI, τρέξε `az login` μία φορά για να σιγουρευτείς ότι πραγματικά μιλάει με τον λογαριασμό σου πριν υποθέσεις ότι όλα είναι έτοιμα.
- Το Docker Desktop χρειάζεται ενεργοποιημένο virtualization σε κάποια BIOS/Windows setups — αν η εγκατάσταση κολλάει ή παραπονιέται, συνήθως αυτός είναι ο λόγος.
- Μην αγχώνεσαι ακόμα για το Terraform — αναφέρεται εδώ για να σου είναι γνώριμο το όνομα, όχι για να το εγκαταστήσεις σήμερα.

Επόμενο βήμα: γύρνα στον [οδικό χάρτη](/roadmap?role=cloud-engineer) και συνέχισε με τα **Θεμέλια Cloud (AZ-900)**. 🚀
