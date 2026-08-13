---
title: "Ρύθμιση Εργαλείων"
description: Εγκατάσταση SSMS, Azure Data Studio και ρύθμιση του editor σου πριν από το υπόλοιπο training σου ως DBA.
order: 0
role: dba
---

🧰 Πριν αγγίξεις το AZ-900 ή ανοίξεις το πρώτο σου lab, ας τακτοποιήσουμε το toolbox σου. Λίγες εγκαταστάσεις τώρα σου γλιτώνουν πολύ τρέξιμο αργότερα.

## Γιατί έρχεται πρώτο αυτό

Όλο το υπόλοιπο αυτού του οδικού χάρτη υποθέτει ότι το SSMS είναι ήδη ανοιχτό στο μηχάνημά σου. Εγκατέστησέ το τώρα, στη σωστή έκδοση, και τα labs του AZ-900/DP-900 αργότερα δεν θα κολλήσουν περιμένοντας ένα εργαλείο που λείπει.

## 🧰 Εργαλεία για εγκατάσταση

- **SSMS (SQL Server Management Studio)** — [κατέβασέ το από τη Microsoft](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms). Είναι το βασικό σου καθημερινό εργαλείο για να συνδέεσαι και να διαχειρίζεσαι SQL Server. **Βεβαιώσου ότι έχεις έκδοση 20 ή νεότερη — είναι απαραίτητη**, όχι απλά καλή ιδέα.
- **Azure Data Studio** — [azure.microsoft.com/en-us/products/data-studio](https://azure.microsoft.com/en-us/products/data-studio). Δωρεάν, πιο ελαφρύ και cross-platform. Η επιλογή σου αν είσαι σε Mac, ή όταν θέλεις απλά να τρέξεις ένα γρήγορο query χωρίς όλο το βάρος του SSMS.
- **VS Code + το extension "SQL Server (mssql)"** — [code.visualstudio.com](https://code.visualstudio.com/). Προαιρετική τρίτη επιλογή — μερικοί DBAs προτιμούν να γράφουν T-SQL σε έναν πιο σύγχρονο editor, με terminal, git και άλλα extensions ένα tab μακριά. Δεν είναι απαραίτητο, απλά καλό να το ξέρεις.

## 🏷️ Δεξιότητες που θα αποκτήσεις

`SSMS` `Azure Data Studio` `IDE Setup`

## 💡 Συμβουλές

- Εγκατέστησε πρώτα το SSMS — κάθε άλλος οδηγός σε αυτό το πρόγραμμα υποθέτει ότι υπάρχει ήδη.
- Η απαίτηση για έκδοση 20+ μπερδεύει κόσμο όταν κατεβάζει installer από παλιό link ή shared drive. Έλεγξε από το **Help → About** μέσα στο SSMS αν δεν είσαι σίγουρος/η τι έχεις.
- Το SSMS και το Azure Data Studio συνυπάρχουν μια χαρά — δεν χρειάζεται να διαλέξεις ένα για πάντα, χρησιμοποίησε όποιο ταιριάζει στη στιγμή.

## 📥 Λήψη σχετικού υλικού

- **[DBA Training Program — Trainee's Handout](/downloads/Trainees_Handout_ClassterDBA.pdf)** — το πλήρες 12-εβδομάδων πρόγραμμα στο οποίο βασίζεται αυτός ο οδικός χάρτης, σε PDF για μελλοντική αναφορά.

Επόμενο βήμα: [Microsoft Learn – Εγγραφή](/guides/ms-learn-setup) — ώρα να στήσεις τον λογαριασμό σου. 👋
