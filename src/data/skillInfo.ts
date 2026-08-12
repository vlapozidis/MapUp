import type { Locale } from '../i18n';

type SkillEntry = { en: string; el: string };

export const skillInfo: Record<string, SkillEntry> = {
	AKS: {
		en: 'Azure Kubernetes Service — a managed way to run containers at scale without babysitting the Kubernetes control plane yourself.',
		el: 'Azure Kubernetes Service — διαχειριζόμενος τρόπος εκτέλεσης containers σε κλίμακα, χωρίς να συντηρείς εσύ το Kubernetes control plane.',
	},
	APIs: {
		en: 'Application Programming Interfaces — the contracts that let one piece of software ask another for data or actions.',
		el: 'Application Programming Interfaces — τα «συμβόλαια» που επιτρέπουν σε ένα λογισμικό να ζητά δεδομένα ή ενέργειες από ένα άλλο.',
	},
	'ARM Templates': {
		en: 'JSON files that describe Azure resources declaratively, so infrastructure can be deployed the same way every time.',
		el: 'Αρχεία JSON που περιγράφουν πόρους Azure δηλωτικά, ώστε η υποδομή να αναπτύσσεται με τον ίδιο τρόπο κάθε φορά.',
	},
	'Active Listening': {
		en: 'Fully concentrating on what someone says before responding — used constantly on calls, in support, and in 1:1s.',
		el: 'Πλήρης συγκέντρωση σε αυτό που λέει κάποιος πριν απαντήσεις — χρησιμοποιείται συνεχώς σε κλήσεις, support και 1:1.',
	},
	'Alert Thresholds': {
		en: 'The values that decide when a monitoring alert should fire — set too tight and you get noise, too loose and you miss incidents.',
		el: 'Οι τιμές που καθορίζουν πότε θα ενεργοποιηθεί ένα alert — πολύ αυστηρές φέρνουν θόρυβο, πολύ χαλαρές χάνουν incidents.',
	},
	Alerts: {
		en: 'Automated notifications that something needs attention, so you find out from a dashboard instead of an angry user.',
		el: 'Αυτοματοποιημένες ειδοποιήσεις ότι κάτι χρειάζεται προσοχή, ώστε να το μάθεις από ένα dashboard και όχι από θυμωμένο χρήστη.',
	},
	Assertions: {
		en: 'The checks inside a test that confirm the actual result matches what was expected.',
		el: 'Οι έλεγχοι μέσα σε ένα test που επιβεβαιώνουν ότι το πραγματικό αποτέλεσμα ταιριάζει με το αναμενόμενο.',
	},
	Authentication: {
		en: 'Verifying that a user or system is who it claims to be, usually the first gate before any real access.',
		el: 'Επιβεβαίωση ότι ένας χρήστης ή σύστημα είναι όντως αυτό που ισχυρίζεται — συνήθως η πρώτη «πύλη» πριν από κάθε πρόσβαση.',
	},
	'Automated Testing': {
		en: 'Tests that run themselves as part of a pipeline, catching regressions without anyone clicking through the app by hand.',
		el: 'Tests που τρέχουν μόνα τους μέσα σε ένα pipeline, εντοπίζοντας regressions χωρίς να χρειάζεται κανείς να τα τρέξει χειροκίνητα.',
	},
	'Automation Basics': {
		en: 'Turning a repeatable manual task into something a script or scheduled job does for you.',
		el: 'Μετατροπή μιας επαναλαμβανόμενης χειροκίνητης εργασίας σε κάτι που κάνει αυτόματα ένα script ή προγραμματισμένη εργασία.',
	},
	Autoscaling: {
		en: 'Automatically adding or removing compute capacity based on real-time demand, instead of guessing how much you need.',
		el: 'Αυτόματη προσθήκη ή αφαίρεση υπολογιστικής ισχύος ανάλογα με τη ζήτηση, αντί να μαντεύεις πόση χρειάζεσαι.',
	},
	'Azure Administration': {
		en: 'The day-to-day work of managing Azure resources, users, and policies once things are already running.',
		el: 'Η καθημερινή διαχείριση πόρων, χρηστών και πολιτικών στο Azure, αφού τα πράγματα λειτουργούν ήδη.',
	},
	'Azure DevOps': {
		en: "Microsoft's suite for planning work, hosting code, and running CI/CD pipelines in one place.",
		el: 'Η σουίτα της Microsoft για σχεδιασμό εργασιών, φιλοξενία κώδικα και εκτέλεση CI/CD pipelines σε ένα μέρος.',
	},
	'Azure Monitor': {
		en: "Azure's built-in service for collecting metrics and logs so you can see what your resources are actually doing.",
		el: 'Η ενσωματωμένη υπηρεσία του Azure για συλλογή metrics και logs, ώστε να βλέπεις τι κάνουν πραγματικά οι πόροι σου.',
	},
	'Azure Portal': {
		en: 'The web-based dashboard for creating and managing every Azure resource by hand, point-and-click style.',
		el: 'Ο web-based πίνακας ελέγχου για δημιουργία και διαχείριση κάθε πόρου Azure χειροκίνητα, με κλικ.',
	},
	'Azure SQL': {
		en: "Microsoft's managed SQL Server database service in the cloud — same engine, no server to patch yourself.",
		el: 'Η διαχειριζόμενη υπηρεσία βάσης δεδομένων SQL Server της Microsoft στο cloud — ίδια μηχανή, χωρίς server να συντηρείς.',
	},
	Backups: {
		en: 'Regular copies of data kept so a mistake, failure, or attack doesn’t mean permanent data loss.',
		el: 'Τακτικά αντίγραφα δεδομένων ώστε ένα λάθος, βλάβη ή επίθεση να μη σημαίνει μόνιμη απώλεια δεδομένων.',
	},
	Bash: {
		en: 'The scripting language and shell used to automate tasks on Linux and macOS systems.',
		el: 'Η γλώσσα scripting και το shell που χρησιμοποιείται για αυτοματοποίηση εργασιών σε Linux και macOS.',
	},
	Bicep: {
		en: 'A cleaner, simpler language that compiles down to ARM templates for defining Azure infrastructure.',
		el: 'Μια πιο απλή γλώσσα που μεταγλωττίζεται σε ARM templates για τον ορισμό υποδομής Azure.',
	},
	'Blob Storage': {
		en: "Azure's object storage for unstructured data like files, images, and backups — cheap, durable, and massively scalable.",
		el: 'Η object storage υπηρεσία του Azure για μη δομημένα δεδομένα όπως αρχεία, εικόνες και backups — φθηνή και εξαιρετικά επεκτάσιμη.',
	},
	'Bottleneck Analysis': {
		en: 'Figuring out exactly which part of a system is slowing everything else down under load.',
		el: 'Εντοπισμός του ακριβούς σημείου ενός συστήματος που επιβραδύνει τα πάντα υπό φόρτο.',
	},
	Branching: {
		en: 'Creating an isolated copy of code to work on a change without disturbing the main codebase.',
		el: 'Δημιουργία ενός ξεχωριστού αντιγράφου κώδικα για να δουλέψεις μια αλλαγή χωρίς να επηρεάσεις τον κύριο κώδικα.',
	},
	'Bug Lifecycle': {
		en: 'The stages a bug moves through — reported, triaged, fixed, verified, closed — and who owns each step.',
		el: 'Τα στάδια από τα οποία περνάει ένα bug — αναφορά, triage, διόρθωση, επαλήθευση, κλείσιμο — και ποιος είναι υπεύθυνος σε κάθε βήμα.',
	},
	'Bug Triage': {
		en: 'Deciding how serious a bug is and who should fix it next, so effort goes where it matters most.',
		el: 'Απόφαση για το πόσο σοβαρό είναι ένα bug και ποιος πρέπει να το διορθώσει, ώστε η προσπάθεια να πηγαίνει εκεί που χρειάζεται.',
	},
	'Build Pipelines': {
		en: 'The automated steps that turn source code into a deployable artifact — compile, test, package.',
		el: 'Τα αυτοματοποιημένα βήματα που μετατρέπουν τον πηγαίο κώδικα σε παραδοτέο — compile, test, packaging.',
	},
	'CRM Basics': {
		en: 'The fundamentals of using a Customer Relationship Management tool to track contacts, deals, and communication history.',
		el: 'Τα βασικά χρήσης ενός εργαλείου CRM για την παρακολούθηση επαφών, συμφωνιών και ιστορικού επικοινωνίας.',
	},
	CSAT: {
		en: 'Customer Satisfaction score — a quick survey rating that shows whether a support interaction actually helped.',
		el: 'Δείκτης Ικανοποίησης Πελατών — μια σύντομη βαθμολογία που δείχνει αν μια αλληλεπίδραση support βοήθησε πραγματικά.',
	},
	'Change Management': {
		en: 'The formal process for reviewing and approving changes to production systems before they go live.',
		el: 'Η επίσημη διαδικασία ελέγχου και έγκρισης αλλαγών σε συστήματα production πριν τεθούν σε λειτουργία.',
	},
	'Closing Techniques': {
		en: 'The specific moves a salesperson uses to move a ready buyer from "interested" to "signed."',
		el: 'Οι συγκεκριμένες τεχνικές που χρησιμοποιεί ένας πωλητής για να μεταφέρει έναν έτοιμο αγοραστή από το «ενδιαφέρομαι» στο «υπέγραψα».',
	},
	'Cloud Economics': {
		en: 'Understanding how cloud pricing, pay-as-you-go, and cost optimization actually work before you provision anything.',
		el: 'Κατανόηση του πώς λειτουργεί η τιμολόγηση cloud, το pay-as-you-go και η βελτιστοποίηση κόστους, πριν δημιουργήσεις οτιδήποτε.',
	},
	'Code Review': {
		en: 'Having another developer read your code before it merges — catches bugs and spreads knowledge of the codebase.',
		el: 'Ανάγνωση του κώδικά σου από άλλον developer πριν το merge — εντοπίζει bugs και διαδίδει τη γνώση του codebase.',
	},
	'Code Review Etiquette': {
		en: 'How to give and receive feedback on code without it turning into a personal attack or a rubber stamp.',
		el: 'Πώς να δίνεις και να δέχεσαι feedback σε κώδικα χωρίς να γίνεται προσωπική επίθεση ή τυπική έγκριση χωρίς νόημα.',
	},
	'Cold Outreach': {
		en: 'Reaching out to a potential customer who has never talked to you before, cold email or cold call.',
		el: 'Επικοινωνία με έναν πιθανό πελάτη που δεν σου έχει μιλήσει ποτέ πριν, μέσω email ή τηλεφώνου.',
	},
	'Common Issues': {
		en: 'The handful of problems that generate most support tickets — knowing them by heart saves everyone time.',
		el: 'Τα λίγα προβλήματα που δημιουργούν τα περισσότερα tickets — το να τα ξέρεις απ’ έξω γλιτώνει χρόνο σε όλους.',
	},
	'Company Tools': {
		en: 'The internal software stack — chat, CRM, docs, calendars — that everyone is expected to know their way around.',
		el: 'Το εσωτερικό σύνολο εργαλείων — chat, CRM, docs, ημερολόγια — που όλοι πρέπει να ξέρουν να χρησιμοποιούν.',
	},
	'Continuous Integration': {
		en: 'Automatically building and testing code every time it changes, so integration problems surface in minutes, not weeks.',
		el: 'Αυτόματο build και testing του κώδικα σε κάθε αλλαγή, ώστε τα προβλήματα ενσωμάτωσης να φαίνονται σε λεπτά, όχι εβδομάδες.',
	},
	'Control Flow': {
		en: 'The if/else, loops, and branching logic that decide which code actually runs.',
		el: 'Το if/else, οι βρόχοι (loops) και η λογική διακλάδωσης που καθορίζουν ποιος κώδικας εκτελείται τελικά.',
	},
	'Cosmos DB': {
		en: "Azure's globally distributed NoSQL database, built for apps that need low latency anywhere in the world.",
		el: 'Η παγκοσμίως κατανεμημένη NoSQL βάση δεδομένων του Azure, φτιαγμένη για εφαρμογές που χρειάζονται χαμηλή καθυστέρηση παντού.',
	},
	'Cost Management': {
		en: 'Tracking cloud spend against budget and spotting waste before the invoice is a surprise.',
		el: 'Παρακολούθηση δαπανών cloud σε σχέση με τον προϋπολογισμό και εντοπισμός σπατάλης πριν γίνει έκπληξη στο τιμολόγιο.',
	},
	CSS: {
		en: 'The language that controls how a web page looks — layout, color, spacing, and responsiveness.',
		el: 'Η γλώσσα που ελέγχει την εμφάνιση μιας ιστοσελίδας — διάταξη, χρώμα, αποστάσεις και responsiveness.',
	},
	'Cross-team Collaboration': {
		en: "Getting work done that depends on people outside your own team — knowing who to loop in and when.",
		el: 'Ολοκλήρωση εργασίας που εξαρτάται από ανθρώπους εκτός της ομάδας σου — γνωρίζοντας ποιον να ενημερώσεις και πότε.',
	},
	'Customer Success Handoff': {
		en: 'Passing a newly closed customer to the team that keeps them happy long-term, with enough context that nothing gets dropped.',
		el: 'Παράδοση ενός νέου πελάτη στην ομάδα που θα τον φροντίζει μακροπρόθεσμα, με αρκετό context ώστε να μη χαθεί τίποτα.',
	},
	DNS: {
		en: 'The system that translates human-readable domain names into the IP addresses computers actually use.',
		el: 'Το σύστημα που μεταφράζει τα ονόματα domain σε IP διευθύνσεις που χρησιμοποιούν πραγματικά οι υπολογιστές.',
	},
	DOM: {
		en: "The Document Object Model — the browser's live tree representation of a page that JavaScript reads and changes.",
		el: 'Το Document Object Model — η ζωντανή αναπαράσταση μιας σελίδας που διαβάζει και αλλάζει η JavaScript.',
	},
	Dashboards: {
		en: 'Visual summaries of live system data — the first place to look when something might be wrong.',
		el: 'Οπτικές συνόψεις δεδομένων συστήματος σε πραγματικό χρόνο — το πρώτο σημείο ελέγχου όταν κάτι πάει στραβά.',
	},
	'Data Hygiene': {
		en: 'Keeping CRM records accurate and up to date, because a messy pipeline makes every report wrong.',
		el: 'Διατήρηση ακριβών και ενημερωμένων εγγραφών στο CRM — ένα ακατάστατο pipeline κάνει κάθε αναφορά λάθος.',
	},
	Databases: {
		en: 'Where an application actually stores and retrieves its data — the thing behind almost every feature.',
		el: 'Εκεί όπου μια εφαρμογή αποθηκεύει και ανακτά τα δεδομένα της — αυτό που κρύβεται πίσω από σχεδόν κάθε λειτουργία.',
	},
	'De-escalation': {
		en: 'Techniques for calming down a frustrated customer before the conversation goes anywhere useful.',
		el: 'Τεχνικές για να ηρεμήσεις έναν εκνευρισμένο πελάτη πριν η συζήτηση πάει κάπου χρήσιμα.',
	},
	'Deal Strategy': {
		en: "Planning how to win a specific deal — who's involved, what they care about, and what could go wrong.",
		el: 'Σχεδιασμός για το πώς θα κερδηθεί μια συγκεκριμένη συμφωνία — ποιος εμπλέκεται, τι τον ενδιαφέρει και τι μπορεί να πάει στραβά.',
	},
	Debugging: {
		en: 'The process of finding out why code isn’t doing what you expect, one clue at a time.',
		el: 'Η διαδικασία εύρεσης του γιατί ο κώδικας δεν κάνει αυτό που περιμένεις, βήμα προς βήμα.',
	},
	Deployment: {
		en: 'Getting a new version of software running somewhere real users can reach it.',
		el: 'Η διαδικασία να τεθεί μια νέα έκδοση λογισμικού σε λειτουργία εκεί όπου φτάνουν οι πραγματικοί χρήστες.',
	},
	'Discovery Calls': {
		en: 'The first real sales conversation, focused on understanding a prospect’s problem before pitching anything.',
		el: 'Η πρώτη πραγματική συζήτηση πωλήσεων, με στόχο να καταλάβεις το πρόβλημα του πελάτη πριν προτείνεις οτιδήποτε.',
	},
	Docker: {
		en: 'A tool for packaging an application with everything it needs to run, so it behaves the same everywhere.',
		el: 'Ένα εργαλείο για να «πακετάρεις» μια εφαρμογή με ό,τι χρειάζεται για να τρέξει, ώστε να συμπεριφέρεται ίδια παντού.',
	},
	Documentation: {
		en: 'Writing down how something works so the next person — including future you — doesn’t have to guess.',
		el: 'Γραπτή καταγραφή του πώς λειτουργεί κάτι, ώστε ο επόμενος — ακόμα κι εσύ στο μέλλον — να μη χρειάζεται να μαντέψει.',
	},
	'Email & Calendar': {
		en: 'The most basic company tools — knowing how meetings, invites, and shared calendars actually work here.',
		el: 'Τα πιο βασικά εργαλεία της εταιρείας — το πώς λειτουργούν πραγματικά οι συναντήσεις, οι προσκλήσεις και τα κοινόχρηστα ημερολόγια.',
	},
	'Email Sequences': {
		en: 'A series of automated, timed emails designed to nurture a lead without manually sending each one.',
		el: 'Μια σειρά αυτοματοποιημένων emails με χρονισμό, σχεδιασμένη να «θρέψει» έναν lead χωρίς να τα στέλνεις ένα-ένα χειροκίνητα.',
	},
	'Engineering Handoff': {
		en: 'Passing a bug or issue to engineering with enough detail that they don’t have to ask "can you reproduce this?"',
		el: 'Παράδοση ενός bug στο engineering με αρκετή λεπτομέρεια ώστε να μη χρειαστεί να ρωτήσουν «μπορείς να το αναπαράγεις;».',
	},
	'Environment Variables': {
		en: 'Configuration values kept outside the codebase — like passwords and API keys — so they never get committed by accident.',
		el: 'Τιμές ρύθμισης που κρατιούνται εκτός του κώδικα — όπως κωδικοί και API keys — ώστε να μην καταλήγουν ποτέ κατά λάθος στο repository.',
	},
	'Escalation Etiquette': {
		en: 'How to raise an issue to someone more senior without sounding alarmist or burying the real problem.',
		el: 'Πώς να αναφέρεις ένα ζήτημα σε κάποιον πιο έμπειρο χωρίς να ακούγεσαι πανικόβλητος ή να θάβεις το πραγματικό πρόβλημα.',
	},
	'Escalation Paths': {
		en: 'The predefined chain of who gets contacted next when an issue is too big to handle alone.',
		el: 'Η προκαθορισμένη αλυσίδα του ποιος ενημερώνεται όταν ένα ζήτημα είναι πολύ μεγάλο για να το χειριστείς μόνος/η σου.',
	},
	'Exploratory Testing': {
		en: 'Testing without a script — poking around the product with curiosity to find bugs a checklist would miss.',
		el: 'Testing χωρίς σενάριο — εξερεύνηση του προϊόντος με περιέργεια για να βρεις bugs που θα προσπερνούσε ένα checklist.',
	},
	FAQs: {
		en: 'The pre-written answers to the questions customers ask most often — your fastest way to resolve a ticket.',
		el: 'Οι έτοιμες απαντήσεις στις πιο συχνές ερωτήσεις πελατών — ο γρηγορότερος τρόπος να κλείσεις ένα ticket.',
	},
	'Feature Flags': {
		en: 'Toggles that turn a feature on or off in production without a new deployment — great for safe rollouts.',
		el: 'Διακόπτες που ενεργοποιούν ή απενεργοποιούν ένα feature σε production χωρίς νέο deployment — ιδανικό για ασφαλή rollout.',
	},
	'Feedback Loops': {
		en: 'Getting information back from customers or engineering about whether a fix actually worked.',
		el: 'Λήψη πληροφορίας από πελάτες ή engineering για το αν μια διόρθωση όντως λειτούργησε.',
	},
	'Follow-ups': {
		en: 'The habit of checking back in after a conversation instead of letting things quietly go cold.',
		el: 'Η συνήθεια να επικοινωνείς ξανά μετά από μια συζήτηση αντί να αφήνεις τα πράγματα να «κρυώσουν».',
	},
	Forecasting: {
		en: 'Predicting how much revenue is likely to close based on the current pipeline and past patterns.',
		el: 'Πρόβλεψη του πόσα έσοδα είναι πιθανό να κλείσουν, με βάση το τρέχον pipeline και τα ιστορικά στοιχεία.',
	},
	Functions: {
		en: 'Reusable, named blocks of code that take input and return output — the basic unit of most programs.',
		el: 'Επαναχρησιμοποιήσιμα κομμάτια κώδικα με όνομα, που δέχονται είσοδο και επιστρέφουν αποτέλεσμα — η βασική μονάδα κάθε προγράμματος.',
	},
	Git: {
		en: 'The version control system almost every codebase uses to track changes and let people work in parallel.',
		el: 'Το σύστημα version control που χρησιμοποιεί σχεδόν κάθε codebase για να καταγράφει αλλαγές και να επιτρέπει παράλληλη δουλειά.',
	},
	'GitHub Actions': {
		en: "GitHub's built-in automation — run tests, builds, and deployments directly from your repository on every push.",
		el: 'Η ενσωματωμένη αυτοματοποίηση του GitHub — τρέξε tests, builds και deployments απευθείας από το repository σε κάθε push.',
	},
	GitOps: {
		en: 'Managing infrastructure by treating your Git repository as the single source of truth for what should be running.',
		el: 'Διαχείριση υποδομής θεωρώντας το Git repository ως τη μοναδική πηγή αλήθειας για το τι πρέπει να τρέχει.',
	},
	HADR: {
		en: 'High Availability / Disaster Recovery — the strategies that keep a database up during failures and recoverable after disasters.',
		el: 'High Availability / Disaster Recovery — οι στρατηγικές που κρατούν μια βάση δεδομένων διαθέσιμη σε βλάβες και ανακτήσιμη μετά από καταστροφές.',
	},
	HTML: {
		en: 'The markup language that structures the content of every web page.',
		el: 'Η γλώσσα markup που δομεί το περιεχόμενο κάθε ιστοσελίδας.',
	},
	Helm: {
		en: 'A package manager for Kubernetes that bundles related resources so you can deploy an app in one command.',
		el: 'Ένας package manager για Kubernetes που ομαδοποιεί σχετικούς πόρους ώστε να αναπτύσσεις μια εφαρμογή με μία εντολή.',
	},
	'Helpdesk Software': {
		en: 'The platform where support tickets live — assigned, tracked, and closed from request to resolution.',
		el: 'Η πλατφόρμα όπου «ζουν» τα tickets υποστήριξης — ανάθεση, παρακολούθηση και κλείσιμο από το αίτημα μέχρι τη λύση.',
	},
	IAM: {
		en: 'Identity and Access Management — controlling who can do what across cloud resources.',
		el: 'Identity and Access Management — έλεγχος του ποιος μπορεί να κάνει τι στους πόρους cloud.',
	},
	IaaS: {
		en: 'Infrastructure as a Service — renting raw compute, storage, and networking instead of buying physical servers.',
		el: 'Infrastructure as a Service — ενοικίαση υπολογιστικής ισχύος, αποθήκευσης και δικτύωσης αντί για αγορά φυσικών servers.',
	},
	'IDE Setup': {
		en: 'Configuring your code editor with the extensions and settings that make you productive from day one.',
		el: 'Ρύθμιση του editor κώδικα με τα extensions και τις ρυθμίσεις που σε κάνουν παραγωγικό/ή από την πρώτη μέρα.',
	},
	'ITIL Basics': {
		en: 'The widely used framework of best practices for how IT services should be requested, delivered, and supported.',
		el: 'Το ευρέως χρησιμοποιούμενο πλαίσιο βέλτιστων πρακτικών για το πώς ζητούνται, παραδίδονται και υποστηρίζονται οι υπηρεσίες IT.',
	},
	'Identity Management': {
		en: 'Managing who exists as a user across your systems and what they’re allowed to access.',
		el: 'Διαχείριση του ποιος υπάρχει ως χρήστης στα συστήματά σου και σε τι έχει πρόσβαση.',
	},
	'Independent Ticket Handling': {
		en: 'Resolving support tickets on your own, using judgment built up from your earlier shadowed shifts.',
		el: 'Επίλυση tickets υποστήριξης μόνος/η σου, χρησιμοποιώντας την κρίση που έχτισες στις προηγούμενες βάρδιες παρακολούθησης.',
	},
	Indexes: {
		en: 'Database structures that make lookups fast by avoiding a full table scan on every query.',
		el: 'Δομές βάσης δεδομένων που κάνουν τις αναζητήσεις γρήγορες, αποφεύγοντας πλήρη σάρωση πίνακα σε κάθε query.',
	},
	Intranet: {
		en: 'The internal, company-only website used for announcements, policies, and shared resources.',
		el: 'Ο εσωτερικός ιστότοπος της εταιρείας για ανακοινώσεις, πολιτικές και κοινόχρηστους πόρους.',
	},
	JMeter: {
		en: 'An open-source tool for simulating heavy load against an application to see how it holds up.',
		el: 'Ένα open-source εργαλείο για προσομοίωση υψηλού φόρτου σε μια εφαρμογή, ώστε να δεις πώς αντέχει.',
	},
	JavaScript: {
		en: 'The programming language that makes web pages interactive instead of just static documents.',
		el: 'Η γλώσσα προγραμματισμού που κάνει τις ιστοσελίδες διαδραστικές αντί για απλά στατικά έγγραφα.',
	},
	Jira: {
		en: 'A widely used tool for tracking tickets, bugs, and project work across a team.',
		el: 'Ένα ευρέως χρησιμοποιούμενο εργαλείο για παρακολούθηση tickets, bugs και εργασιών μιας ομάδας.',
	},
	Joins: {
		en: 'The SQL operation that combines rows from two or more tables based on a related column.',
		el: 'Η λειτουργία SQL που συνδυάζει γραμμές από δύο ή περισσότερους πίνακες με βάση μια κοινή στήλη.',
	},
	KPIs: {
		en: 'Key Performance Indicators — the specific numbers used to judge whether the work is actually succeeding.',
		el: 'Key Performance Indicators — οι συγκεκριμένοι αριθμοί που χρησιμοποιούνται για να κριθεί αν η δουλειά πετυχαίνει.',
	},
	'Key Vault': {
		en: "Azure's managed service for storing secrets, keys, and certificates so they don't end up hardcoded in source code.",
		el: 'Η διαχειριζόμενη υπηρεσία του Azure για αποθήκευση secrets, keys και πιστοποιητικών, ώστε να μην καταλήγουν hardcoded στον κώδικα.',
	},
	'Knowledge Base': {
		en: 'The searchable library of articles that lets customers — and support agents — self-serve answers.',
		el: 'Η αναζητήσιμη βιβλιοθήκη άρθρων που επιτρέπει σε πελάτες — και agents υποστήριξης — να βρίσκουν μόνοι τους απαντήσεις.',
	},
	'Lead Qualification': {
		en: 'Figuring out whether a prospect is actually a good fit before investing more time in them.',
		el: 'Εκτίμηση του αν ένας πιθανός πελάτης είναι όντως κατάλληλος πριν επενδύσεις άλλο χρόνο σε αυτόν.',
	},
	'Lead Scoring': {
		en: 'Ranking leads by how likely they are to convert, so reps focus on the ones worth chasing.',
		el: 'Κατάταξη leads ανάλογα με το πόσο πιθανό είναι να μετατραπούν σε πελάτες, ώστε οι πωλητές να εστιάζουν εκεί που αξίζει.',
	},
	'LinkedIn Outreach': {
		en: 'Using LinkedIn to find and message prospects directly, as an alternative to cold email.',
		el: 'Χρήση του LinkedIn για εντοπισμό και απευθείας επικοινωνία με πιθανούς πελάτες, ως εναλλακτική του cold email.',
	},
	Linting: {
		en: 'Automated style and error checking on code before it’s even reviewed by a human.',
		el: 'Αυτόματος έλεγχος στυλ και σφαλμάτων στον κώδικα, πριν καν τον δει άνθρωπος.',
	},
	'Load Balancers': {
		en: 'Traffic distributors that spread incoming requests across multiple servers so no single one gets overwhelmed.',
		el: 'Κατανεμητές κίνησης που μοιράζουν τα εισερχόμενα αιτήματα σε πολλούς servers, ώστε κανείς να μην υπερφορτώνεται.',
	},
	'Load Testing': {
		en: 'Deliberately hammering a system with traffic to see where it breaks before real users find out.',
		el: 'Σκόπιμη επιβάρυνση ενός συστήματος με κίνηση, για να βρεις πού σπάει πριν το βρουν οι πραγματικοί χρήστες.',
	},
	'Local Servers': {
		en: 'Running a version of the application on your own machine so you can build and test without touching production.',
		el: 'Εκτέλεση μιας έκδοσης της εφαρμογής στον δικό σου υπολογιστή, ώστε να χτίζεις και να δοκιμάζεις χωρίς να αγγίζεις το production.',
	},
	Locators: {
		en: 'The selectors an automated test uses to find a specific button, field, or element on a page.',
		el: 'Οι selectors που χρησιμοποιεί ένα αυτοματοποιημένο test για να βρει ένα συγκεκριμένο στοιχείο σε μια σελίδα.',
	},
	'Log Analytics': {
		en: "Azure's tool for querying and analyzing log data across your resources in one place.",
		el: 'Το εργαλείο του Azure για αναζήτηση και ανάλυση log δεδομένων από όλους τους πόρους σου σε ένα μέρος.',
	},
	'Log Reading': {
		en: 'Making sense of raw application logs to figure out what actually happened before an error.',
		el: 'Κατανόηση των raw logs μιας εφαρμογής για να βρεις τι πραγματικά συνέβη πριν από ένα σφάλμα.',
	},
	'Maintenance Plans': {
		en: 'Scheduled database upkeep — index rebuilds, integrity checks, backups — so performance doesn’t quietly degrade.',
		el: 'Προγραμματισμένη συντήρηση βάσης δεδομένων — rebuild indexes, έλεγχοι ακεραιότητας, backups — ώστε η απόδοση να μη χειροτερεύει σιωπηλά.',
	},
	'Managed Disks': {
		en: "Azure's block storage for virtual machines, handled without you worrying about the underlying hardware.",
		el: 'Η block storage υπηρεσία του Azure για virtual machines, χωρίς να χρειάζεται να ασχολείσαι με το υποκείμενο hardware.',
	},
	Mentorship: {
		en: 'Learning directly from someone more experienced — and eventually paying it forward to the next new hire.',
		el: 'Εκμάθηση απευθείας από κάποιον πιο έμπειρο — και τελικά η μετάδοση αυτής της γνώσης στον επόμενο νεοεισερχόμενο.',
	},
	'Merge Conflicts': {
		en: 'What happens when two people change the same lines of code — resolving them is a normal part of teamwork.',
		el: 'Αυτό που συμβαίνει όταν δύο άτομα αλλάζουν τις ίδιες γραμμές κώδικα — η επίλυσή τους είναι φυσιολογικό κομμάτι της ομαδικής δουλειάς.',
	},
	'Metrics & KPIs': {
		en: 'The measurable numbers a team tracks to know whether operations are actually improving over time.',
		el: 'Οι μετρήσιμοι αριθμοί που παρακολουθεί μια ομάδα για να ξέρει αν οι λειτουργίες βελτιώνονται με τον καιρό.',
	},
	'Negotiation Tactics': {
		en: 'Structured approaches to reaching a deal both sides feel good about, without just discounting to close.',
		el: 'Δομημένες προσεγγίσεις για να φτάσεις σε μια συμφωνία με την οποία νιώθουν καλά και οι δύο πλευρές, χωρίς απλή έκπτωση για να κλείσει.',
	},
	'Networking Basics': {
		en: 'How machines actually talk to each other — IP addresses, ports, and the basics of getting connected.',
		el: 'Πώς επικοινωνούν πραγματικά οι υπολογιστές μεταξύ τους — IP διευθύνσεις, ports και βασικά της σύνδεσης.',
	},
	'Non-relational Data': {
		en: "Data that doesn't fit neatly into rows and tables — documents, key-value pairs, graphs — and the databases built for it.",
		el: 'Δεδομένα που δεν χωρούν εύκολα σε γραμμές και πίνακες — έγγραφα, key-value ζεύγη, γράφοι — και οι βάσεις που φτιάχτηκαν γι’ αυτά.',
	},
	'Objection Handling': {
		en: 'Responding to a prospect’s hesitations or pushback without getting defensive or losing the conversation.',
		el: 'Απάντηση στους ενδοιασμούς ή τις αντιρρήσεις ενός πελάτη χωρίς να γίνεσαι αμυντικός/ή ή να χάνεις τη συζήτηση.',
	},
	'On-call Rotations': {
		en: "A shared schedule where team members take turns being the first responder to off-hours incidents.",
		el: 'Ένα κοινό πρόγραμμα όπου τα μέλη της ομάδας εναλλάσσονται στο να είναι οι πρώτοι που ανταποκρίνονται σε incidents εκτός ωραρίου.',
	},
	PaaS: {
		en: 'Platform as a Service — the cloud provider manages the infrastructure and runtime, you just deploy your app.',
		el: 'Platform as a Service — ο πάροχος cloud διαχειρίζεται την υποδομή και το runtime, εσύ απλώς αναπτύσσεις την εφαρμογή σου.',
	},
	'Package Managers': {
		en: 'Tools like npm or pip that install and track the external libraries your code depends on.',
		el: 'Εργαλεία όπως npm ή pip που εγκαθιστούν και παρακολουθούν τις εξωτερικές βιβλιοθήκες από τις οποίες εξαρτάται ο κώδικάς σου.',
	},
	'Pair Programming': {
		en: 'Two developers working on the same code together, one typing, one reviewing in real time.',
		el: 'Δύο developers που δουλεύουν μαζί στον ίδιο κώδικα — ο ένας πληκτρολογεί, ο άλλος κάνει review σε πραγματικό χρόνο.',
	},
	'Peer Review': {
		en: 'Having a colleague check your work before it goes out — a second set of eyes catches what you missed.',
		el: 'Έλεγχος της δουλειάς σου από συνάδελφο πριν βγει προς τα έξω — ένα δεύτερο βλέμμα πιάνει αυτό που πρόσεξες.',
	},
	'Performance Tuning': {
		en: 'Finding and fixing whatever is making a database or query slower than it needs to be.',
		el: 'Εντοπισμός και διόρθωση οτιδήποτε κάνει μια βάση δεδομένων ή ένα query πιο αργό απ’ όσο χρειάζεται.',
	},
	'Pipeline Stages': {
		en: 'The named steps a deal moves through in a CRM — from lead to negotiation to closed-won.',
		el: 'Τα ονομασμένα στάδια από τα οποία περνάει μια συμφωνία στο CRM — από lead μέχρι διαπραγμάτευση και κλείσιμο.',
	},
	'Pods & Services': {
		en: 'The basic building blocks of Kubernetes — a Pod runs your containers, a Service exposes them to traffic.',
		el: 'Τα βασικά δομικά στοιχεία του Kubernetes — ένα Pod τρέχει τα containers σου, ένα Service τα εκθέτει στην κίνηση.',
	},
	Postman: {
		en: 'A popular tool for manually sending API requests and inspecting the responses while testing.',
		el: 'Ένα δημοφιλές εργαλείο για χειροκίνητη αποστολή API requests και έλεγχο των απαντήσεων κατά το testing.',
	},
	Postmortems: {
		en: 'A blame-free written review of an incident — what happened, why, and what changes to prevent it next time.',
		el: 'Μια γραπτή ανασκόπηση ενός incident χωρίς επίρριψη ευθυνών — τι έγινε, γιατί, και τι αλλάζει ώστε να μην ξανασυμβεί.',
	},
	PowerShell: {
		en: 'The scripting language and shell used to automate tasks across Windows and Azure environments.',
		el: 'Η γλώσσα scripting και το shell που χρησιμοποιείται για αυτοματοποίηση εργασιών σε περιβάλλοντα Windows και Azure.',
	},
	'Pricing Strategy': {
		en: 'Understanding how and why a product is priced the way it is, so you can defend it in a negotiation.',
		el: 'Κατανόηση του πώς και γιατί τιμολογείται ένα προϊόν, ώστε να μπορείς να το υποστηρίξεις σε μια διαπραγμάτευση.',
	},
	'Process Mapping': {
		en: 'Drawing out how a workflow actually happens, step by step, so gaps and bottlenecks become visible.',
		el: 'Χαρτογράφηση του πώς λειτουργεί πραγματικά μια διαδικασία, βήμα-βήμα, ώστε τα κενά να γίνονται ορατά.',
	},
	'Process Optimization': {
		en: 'Making an existing workflow faster or less error-prone based on what a retrospective revealed.',
		el: 'Βελτίωση μιας υπάρχουσας διαδικασίας ώστε να είναι πιο γρήγορη ή λιγότερο επιρρεπής σε λάθη, με βάση τα ευρήματα ενός retrospective.',
	},
	'Product Demos': {
		en: "A live walkthrough of the product tailored to what a specific prospect actually cares about.",
		el: 'Μια ζωντανή παρουσίαση του προϊόντος, προσαρμοσμένη σε αυτό που πραγματικά ενδιαφέρει τον συγκεκριμένο πελάτη.',
	},
	'Product Knowledge': {
		en: 'Knowing what the product actually does, in enough depth to answer questions without checking with someone else.',
		el: 'Γνώση του τι κάνει πραγματικά το προϊόν, σε βάθος τέτοιο ώστε να απαντάς ερωτήσεις χωρίς να ρωτάς κάποιον άλλο.',
	},
	'Pull Requests': {
		en: 'A formal request to merge your branch into the main codebase, opening it up for review first.',
		el: 'Ένα επίσημο αίτημα να ενσωματωθεί το branch σου στον κύριο κώδικα, ανοίγοντάς το πρώτα για review.',
	},
	'Quality Reviews': {
		en: 'Periodically checking a sample of resolved tickets to make sure support answers are accurate and on-brand.',
		el: 'Περιοδικός έλεγχος δείγματος επιλυμένων tickets, για να βεβαιωθείς ότι οι απαντήσεις είναι σωστές και συνεπείς.',
	},
	'Query Tuning': {
		en: 'Rewriting a slow SQL query — or adding the right index — so it runs in milliseconds instead of seconds.',
		el: 'Επανασχεδιασμός ενός αργού SQL query — ή προσθήκη του σωστού index — ώστε να τρέχει σε milliseconds αντί για δευτερόλεπτα.',
	},
	'Quota Tracking': {
		en: 'Monitoring how close a sales rep is to their target for the period, and what’s left to hit it.',
		el: 'Παρακολούθηση του πόσο κοντά είναι ένας πωλητής στον στόχο του για την περίοδο, και τι απομένει για να τον πετύχει.',
	},
	RBAC: {
		en: 'Role-Based Access Control — granting permissions based on a user’s role instead of one by one.',
		el: 'Role-Based Access Control — παραχώρηση δικαιωμάτων βάσει του ρόλου ενός χρήστη, αντί ένα-ένα.',
	},
	'REST APIs': {
		en: 'The most common style of web API, using standard HTTP methods to create, read, update, and delete data.',
		el: 'Το πιο συνηθισμένο στυλ web API, που χρησιμοποιεί τυπικές μεθόδους HTTP για δημιουργία, ανάγνωση, ενημέρωση και διαγραφή δεδομένων.',
	},
	Refactoring: {
		en: 'Improving how code is written internally without changing what it actually does from the outside.',
		el: 'Βελτίωση του τρόπου που είναι γραμμένος ο κώδικας εσωτερικά, χωρίς να αλλάζει αυτό που κάνει εξωτερικά.',
	},
	'Regression Testing': {
		en: 'Re-running old tests after a change to make sure something that used to work didn’t just break.',
		el: 'Επανάληψη παλιών tests μετά από μια αλλαγή, για να βεβαιωθείς ότι κάτι που δούλευε δεν χάλασε.',
	},
	'Relational Data': {
		en: 'Data organized into tables with defined relationships between them — the classic SQL database model.',
		el: 'Δεδομένα οργανωμένα σε πίνακες με καθορισμένες σχέσεις μεταξύ τους — το κλασικό μοντέλο βάσης δεδομένων SQL.',
	},
	'Release Notes': {
		en: 'The public summary of what changed in a new release — your cheat sheet for what customers will ask about.',
		el: 'Η δημόσια σύνοψη του τι άλλαξε σε μια νέα έκδοση — το «σημείωμα» σου για ό,τι θα ρωτήσουν οι πελάτες.',
	},
	'Release Pipelines': {
		en: 'The automated sequence that takes a build through testing environments and out to production.',
		el: 'Η αυτοματοποιημένη ακολουθία που περνάει ένα build από περιβάλλοντα δοκιμών μέχρι το production.',
	},
	'Release Sign-off': {
		en: 'The formal go-ahead from QA confirming a release meets the bar to ship.',
		el: 'Η επίσημη έγκριση από το QA ότι μια έκδοση πληροί τα κριτήρια για να κυκλοφορήσει.',
	},
	Renewals: {
		en: "Getting an existing customer to renew their subscription or contract instead of churning.",
		el: 'Διασφάλιση ότι ένας υπάρχων πελάτης θα ανανεώσει τη συνδρομή ή το συμβόλαιό του αντί να φύγει.',
	},
	'Reproducing Bugs': {
		en: 'Recreating the exact steps that trigger a bug — the single most useful thing you can hand engineering.',
		el: 'Αναπαραγωγή των ακριβών βημάτων που προκαλούν ένα bug — το πιο χρήσιμο πράγμα που μπορείς να δώσεις στο engineering.',
	},
	'Reproduction Steps': {
		en: 'The precise, ordered instructions that let anyone else trigger the bug you found.',
		el: 'Οι ακριβείς, σε σειρά οδηγίες που επιτρέπουν σε οποιονδήποτε άλλον να προκαλέσει το bug που βρήκες.',
	},
	'Request Validation': {
		en: 'Checking that an API request has the right shape and data before the system acts on it.',
		el: 'Έλεγχος ότι ένα API request έχει τη σωστή μορφή και δεδομένα, πριν το σύστημα ενεργήσει βάσει αυτού.',
	},
	'Resolution Time': {
		en: 'How long it takes to fully close a ticket, from first contact to confirmed fix.',
		el: 'Πόσος χρόνος χρειάζεται για να κλείσει πλήρως ένα ticket, από την πρώτη επαφή μέχρι την επιβεβαιωμένη λύση.',
	},
	'Resource Governance': {
		en: "Policies and structure that keep cloud resources organized, tagged, and under control as they multiply.",
		el: 'Πολιτικές και δομή που κρατούν τους πόρους cloud οργανωμένους, με σωστά tags και υπό έλεγχο καθώς πολλαπλασιάζονται.',
	},
	'Response Time': {
		en: 'How quickly a customer hears back after opening a ticket — often the first thing they judge you on.',
		el: 'Πόσο γρήγορα παίρνει απάντηση ένας πελάτης μετά το άνοιγμα ενός ticket — συχνά το πρώτο πράγμα που κρίνουν.',
	},
	Retention: {
		en: "Keeping existing customers instead of losing them to churn — often cheaper than winning new ones.",
		el: 'Διατήρηση υπαρχόντων πελατών αντί να χαθούν — συνήθως φθηνότερο από την απόκτηση νέων.',
	},
	Retrospectives: {
		en: 'A recurring team meeting to look back at recent work and agree on what to change going forward.',
		el: 'Μια επαναλαμβανόμενη συνάντηση ομάδας για να δείτε πίσω στην πρόσφατη δουλειά και να συμφωνήσετε τι θα αλλάξει.',
	},
	Rollbacks: {
		en: 'Reverting to the previous working version of an app fast, when a new deployment causes problems.',
		el: 'Γρήγορη επαναφορά στην προηγούμενη λειτουργική έκδοση μιας εφαρμογής, όταν ένα νέο deployment προκαλεί προβλήματα.',
	},
	'Root Cause Analysis': {
		en: 'Digging past the symptom to find the actual underlying reason something went wrong.',
		el: 'Αναζήτηση πέρα από το σύμπτωμα, για να βρεθεί η πραγματική υποκείμενη αιτία ενός προβλήματος.',
	},
	Runbooks: {
		en: 'Step-by-step written instructions for handling a specific, recurring operational task or incident.',
		el: 'Γραπτές οδηγίες βήμα-βήμα για τον χειρισμό μιας συγκεκριμένης, επαναλαμβανόμενης εργασίας ή incident.',
	},
	SDLC: {
		en: 'Software Development Lifecycle — the stages software moves through from idea to release to maintenance.',
		el: 'Software Development Lifecycle — τα στάδια από τα οποία περνάει το λογισμικό, από την ιδέα μέχρι την κυκλοφορία και τη συντήρηση.',
	},
	SLAs: {
		en: 'Service Level Agreements — the promised response or resolution times a team is measured against.',
		el: 'Service Level Agreements — οι υποσχόμενοι χρόνοι απόκρισης ή επίλυσης βάσει των οποίων αξιολογείται μια ομάδα.',
	},
	SOPs: {
		en: 'Standard Operating Procedures — written, repeatable instructions for doing a task the same way every time.',
		el: 'Standard Operating Procedures — γραπτές, επαναλήψιμες οδηγίες για να γίνεται μια εργασία με τον ίδιο τρόπο κάθε φορά.',
	},
	'SQL Basics': {
		en: 'The fundamental commands for querying and manipulating data in a relational database.',
		el: 'Οι βασικές εντολές για αναζήτηση και επεξεργασία δεδομένων σε μια σχεσιακή βάση δεδομένων.',
	},
	'SQL Server': {
		en: "Microsoft's relational database engine — the software a DBA spends most of their time actually administering.",
		el: 'Η σχεσιακή μηχανή βάσης δεδομένων της Microsoft — το λογισμικό που διαχειρίζεται κυρίως ένας DBA.',
	},
	SSMS: {
		en: "SQL Server Management Studio — the primary desktop tool for writing queries and administering SQL Server.",
		el: 'SQL Server Management Studio — το βασικό εργαλείο desktop για query και διαχείριση SQL Server.',
	},
	SaaS: {
		en: 'Software as a Service — fully managed software you access over the web, no installation or upkeep required.',
		el: 'Software as a Service — πλήρως διαχειριζόμενο λογισμικό στο οποίο έχεις πρόσβαση μέσω web, χωρίς εγκατάσταση ή συντήρηση.',
	},
	'Sandbox Environments': {
		en: 'Safe, isolated spaces to practice and break things without any risk to real systems.',
		el: 'Ασφαλείς, απομονωμένοι χώροι για εξάσκηση χωρίς κανέναν κίνδυνο για πραγματικά συστήματα.',
	},
	'Scheduled Tasks': {
		en: 'Jobs configured to run automatically on a timer, instead of someone remembering to trigger them manually.',
		el: 'Εργασίες ρυθμισμένες να τρέχουν αυτόματα σε χρονοπρογραμματισμό, αντί να τις θυμάται κάποιος να τις εκτελεί χειροκίνητα.',
	},
	'Security & RBAC': {
		en: 'Controlling exactly who can access or change a database, down to specific tables and actions.',
		el: 'Έλεγχος του ποιος μπορεί να έχει πρόσβαση ή να αλλάξει μια βάση δεδομένων, μέχρι το επίπεδο συγκεκριμένων πινάκων.',
	},
	Selenium: {
		en: 'A widely used framework for automating browser actions to test web applications.',
		el: 'Ένα ευρέως χρησιμοποιούμενο framework για αυτοματοποίηση ενεργειών browser κατά το testing web εφαρμογών.',
	},
	'Severity Levels': {
		en: 'A shared scale for rating how bad a ticket or bug actually is, so priority isn’t just a guess.',
		el: 'Μια κοινή κλίμακα για την αξιολόγηση του πόσο σοβαρό είναι ένα ticket ή bug, ώστε η προτεραιότητα να μην είναι τυχαία.',
	},
	'Severity vs Priority': {
		en: 'Knowing that how bad a bug is (severity) and how soon it must be fixed (priority) aren’t always the same thing.',
		el: 'Κατανόηση ότι το πόσο σοβαρό είναι ένα bug (severity) και το πόσο σύντομα πρέπει να διορθωθεί (priority) δεν είναι πάντα το ίδιο.',
	},
	'Single Sign-On': {
		en: 'Logging in once to access every connected company system, instead of a separate password for each.',
		el: 'Μία σύνδεση για πρόσβαση σε όλα τα συνδεδεμένα συστήματα της εταιρείας, αντί για ξεχωριστό κωδικό για το καθένα.',
	},
	'Smoke Tests': {
		en: 'A quick set of checks confirming the most critical paths work before running the full test suite.',
		el: 'Ένα σύντομο σύνολο ελέγχων που επιβεβαιώνει ότι λειτουργούν οι πιο κρίσιμες λειτουργίες, πριν τρέξει η πλήρης σουίτα tests.',
	},
	'Stakeholder Updates': {
		en: 'Keeping the people who care about an issue informed, even when there’s nothing new to report yet.',
		el: 'Ενημέρωση των ανθρώπων που ενδιαφέρονται για ένα ζήτημα, ακόμα κι όταν δεν υπάρχει κάτι νέο να αναφερθεί.',
	},
	'Status Codes': {
		en: "The three-digit numbers an API returns (like 200 or 404) that tell you what actually happened to your request.",
		el: 'Οι τριψήφιοι αριθμοί που επιστρέφει ένα API (όπως 200 ή 404) και δείχνουν τι πραγματικά συνέβη στο αίτημά σου.',
	},
	'Status Reporting': {
		en: 'Communicating where things stand clearly and regularly, so nobody has to ask.',
		el: 'Σαφής και τακτική ενημέρωση για την πορεία των πραγμάτων, ώστε κανείς να μη χρειάζεται να ρωτήσει.',
	},
	'Stored Procedures': {
		en: 'Reusable, precompiled blocks of SQL saved in the database for consistent, faster execution.',
		el: 'Επαναχρησιμοποιήσιμα, προμεταγλωττισμένα κομμάτια SQL αποθηκευμένα στη βάση για συνεπή, ταχύτερη εκτέλεση.',
	},
	Subnets: {
		en: 'Smaller, logically divided sections of a larger network, used to organize and isolate resources.',
		el: 'Μικρότερα, λογικά διαχωρισμένα τμήματα ενός μεγαλύτερου δικτύου, που χρησιμοποιούνται για οργάνωση και απομόνωση πόρων.',
	},
	'T-SQL': {
		en: "Microsoft's extended SQL dialect used to write and run queries against SQL Server and Azure SQL.",
		el: 'Η επεκταμένη διάλεκτος SQL της Microsoft, που χρησιμοποιείται για queries σε SQL Server και Azure SQL.',
	},
	'Target Market': {
		en: 'The specific type of customer a product is actually built and priced for.',
		el: 'Ο συγκεκριμένος τύπος πελάτη για τον οποίο έχει φτιαχτεί και τιμολογηθεί πραγματικά ένα προϊόν.',
	},
	'Team Chat': {
		en: 'The always-on messaging tool a team uses for quick questions instead of email.',
		el: 'Το εργαλείο άμεσων μηνυμάτων που χρησιμοποιεί μια ομάδα για γρήγορες ερωτήσεις αντί για email.',
	},
	Terraform: {
		en: 'A popular, cloud-agnostic infrastructure-as-code tool for defining and provisioning resources across providers.',
		el: 'Ένα δημοφιλές εργαλείο infrastructure-as-code, ανεξάρτητο cloud provider, για ορισμό και δημιουργία πόρων.',
	},
	'Test Case Design': {
		en: 'Writing test cases that actually cover the ways a feature could break, not just the happy path.',
		el: 'Σχεδιασμός test cases που καλύπτουν πραγματικά τους τρόπους που μπορεί να χαλάσει ένα feature, όχι μόνο το ιδανικό σενάριο.',
	},
	'Test Case Reviews': {
		en: 'Having someone else check that your test cases actually cover what they claim to before a release ships.',
		el: 'Έλεγχος από κάποιον άλλον ότι τα test cases σου καλύπτουν πραγματικά αυτό που υποστηρίζουν, πριν κυκλοφορήσει μια έκδοση.',
	},
	'Test Coverage': {
		en: 'A measure of how much of the codebase is actually exercised by automated tests.',
		el: 'Ένα μέτρο του πόσο από τον κώδικα καλύπτεται πραγματικά από αυτοματοποιημένα tests.',
	},
	'Test Pipelines': {
		en: 'Automated stages that run tests as part of the build process, before code ever reaches production.',
		el: 'Αυτοματοποιημένα στάδια που τρέχουν tests μέσα στη διαδικασία build, πριν ο κώδικας φτάσει ποτέ σε production.',
	},
	'Test Plans': {
		en: 'A written outline of what will be tested, how, and with what data before testing actually starts.',
		el: 'Ένα γραπτό σχέδιο για το τι θα ελεγχθεί, πώς και με ποια δεδομένα, πριν ξεκινήσει το testing.',
	},
	'Test Reporting': {
		en: 'Summarizing what was tested and what was found, in a way stakeholders can actually act on.',
		el: 'Σύνοψη του τι ελέγχθηκε και τι βρέθηκε, με τρόπο που οι stakeholders μπορούν να αξιοποιήσουν.',
	},
	'Test Scripts': {
		en: 'The actual code that automates a test case — click here, check that, assert this.',
		el: 'Ο πραγματικός κώδικας που αυτοματοποιεί ένα test case — κάνε κλικ εδώ, έλεγξε αυτό, επιβεβαίωσε εκείνο.',
	},
	'Testing Basics': {
		en: 'The core mindset of QA — assume it’s broken until proven otherwise, and try to break it on purpose.',
		el: 'Η βασική νοοτροπία του QA — υπόθεσε ότι κάτι είναι χαλασμένο μέχρι αποδείξεως του αντιθέτου, και προσπάθησε να το χαλάσεις επίτηδες.',
	},
	'Ticket Breakdown': {
		en: 'Splitting a vague or large piece of work into small, clear, estimable tickets.',
		el: 'Διάσπαση μιας ασαφούς ή μεγάλης εργασίας σε μικρά, σαφή και εκτιμήσιμα tickets.',
	},
	'Ticket Routing': {
		en: 'Getting a support ticket to the right person or team the first time, without unnecessary bouncing around.',
		el: 'Δρομολόγηση ενός ticket στο σωστό άτομο ή ομάδα από την πρώτη φορά, χωρίς περιττές μεταφορές.',
	},
	'Ticket Triage': {
		en: 'Sorting incoming tickets by urgency and type before deciding who works on what.',
		el: 'Ταξινόμηση εισερχόμενων tickets ανά επείγον και τύπο, πριν αποφασιστεί ποιος αναλαμβάνει τι.',
	},
	'Ticketing Systems': {
		en: 'The software that tracks a request from "submitted" to "resolved," with a full history in between.',
		el: 'Το λογισμικό που παρακολουθεί ένα αίτημα από την υποβολή μέχρι την επίλυση, με πλήρες ιστορικό.',
	},
	'Tone & Empathy': {
		en: 'Writing and speaking in a way that shows you actually understand the customer’s frustration.',
		el: 'Γραφή και ομιλία με τρόπο που δείχνει ότι πραγματικά κατανοείς την απογοήτευση του πελάτη.',
	},
	Triage: {
		en: 'The first-pass sorting of an incoming incident or ticket by severity and type.',
		el: 'Η πρώτη ταξινόμηση ενός εισερχόμενου incident ή ticket ανά σοβαρότητα και τύπο.',
	},
	'Troubleshooting Basics': {
		en: 'A systematic first approach to a problem — check the obvious things before assuming the worst.',
		el: 'Μια συστηματική πρώτη προσέγγιση σε ένα πρόβλημα — έλεγξε τα προφανή πριν υποθέσεις το χειρότερο.',
	},
	'Unit Testing': {
		en: 'Automated tests that check one small piece of code in isolation, run constantly as code changes.',
		el: 'Αυτοματοποιημένα tests που ελέγχουν ένα μικρό κομμάτι κώδικα μεμονωμένα, εκτελούμενα συνεχώς καθώς αλλάζει ο κώδικας.',
	},
	VNets: {
		en: 'Virtual Networks — your own private, isolated network inside Azure to control how resources connect.',
		el: 'Virtual Networks — το δικό σου ιδιωτικό, απομονωμένο δίκτυο μέσα στο Azure για έλεγχο της συνδεσιμότητας πόρων.',
	},
	'VPN Gateways': {
		en: 'A secure tunnel connecting an on-premises network to a cloud network over the public internet.',
		el: 'Ένα ασφαλές «τούνελ» που συνδέει ένα τοπικό δίκτυο με ένα δίκτυο cloud μέσω του δημόσιου internet.',
	},
	'Value Proposition': {
		en: 'The clear, specific reason a customer should choose your product over doing nothing — or a competitor.',
		el: 'Ο σαφής, συγκεκριμένος λόγος για τον οποίο ένας πελάτης θα επέλεγε το προϊόν σου αντί να μην κάνει τίποτα — ή έναν ανταγωνιστή.',
	},
	'Variables & Types': {
		en: 'The basic way programs store and label data — and the rules about what kind of data each variable holds.',
		el: 'Ο βασικός τρόπος αποθήκευσης και ονομασίας δεδομένων σε ένα πρόγραμμα — και οι κανόνες για το τι είδος δεδομένων κρατά κάθε μεταβλητή.',
	},
	'Virtual Machines': {
		en: 'Software-based computers running on shared physical hardware, the basic unit of cloud compute.',
		el: 'Υπολογιστές λογισμικού που τρέχουν σε κοινό φυσικό hardware — η βασική μονάδα υπολογιστικής ισχύος στο cloud.',
	},
	'Wiki Maintenance': {
		en: 'Keeping shared internal documentation accurate over time instead of letting it quietly go stale.',
		el: 'Διατήρηση της εσωτερικής τεκμηρίωσης ενημερωμένης με τον καιρό, αντί να ξεχνιέται σιωπηλά.',
	},
	'Win/Loss Analysis': {
		en: 'Reviewing closed deals — won and lost — to understand the real reasons behind the outcome.',
		el: 'Ανασκόπηση κλεισμένων συμφωνιών — κερδισμένων και χαμένων — για κατανόηση των πραγματικών λόγων πίσω από το αποτέλεσμα.',
	},
	'Written Communication': {
		en: 'Writing clearly enough over email or chat that tone and meaning don’t get lost.',
		el: 'Γραφή αρκετά σαφής μέσω email ή chat, ώστε ο τόνος και το νόημα να μη χάνονται.',
	},
	'Zero Trust': {
		en: 'A security model that verifies every request regardless of where it comes from, instead of trusting anything inside the network by default.',
		el: 'Ένα μοντέλο ασφάλειας που επαληθεύει κάθε αίτημα ανεξάρτητα από την προέλευσή του, αντί να εμπιστεύεται από προεπιλογή οτιδήποτε είναι εντός δικτύου.',
	},
};

export function getSkillInfo(skill: string, locale: Locale): string {
	const entry = skillInfo[skill];
	if (!entry) return '';
	return entry[locale] ?? entry.en;
}
