import type { Locale } from '../i18n';

type SkillEntry = { en: string; el: string };

export const skillInfo: Record<string, SkillEntry> = {
	AKS: {
		en: 'Azure Kubernetes Service — a managed way to run containers at scale without babysitting the Kubernetes control plane yourself.\n\nAzure handles the control plane upgrades and health, you focus on the workloads. Most teams reach for AKS once a single VM or App Service can’t handle the number of moving pieces anymore.',
		el: 'Azure Kubernetes Service — διαχειριζόμενος τρόπος εκτέλεσης containers σε κλίμακα, χωρίς να συντηρείς εσύ το Kubernetes control plane.\n\nΤο Azure αναλαμβάνει τα upgrades και την υγεία του control plane, εσύ ασχολείσαι με τα workloads. Οι ομάδες καταλήγουν στο AKS όταν ένα απλό VM ή App Service δεν αντέχει άλλο την πολυπλοκότητα.',
	},
	APIs: {
		en: 'Application Programming Interfaces — the contracts that let one piece of software ask another for data or actions.\n\nAlmost every feature you build talks to an API somewhere, whether it’s your own backend or a third-party service. A poorly designed API — inconsistent naming, missing error details — makes every integration on top of it harder than it should be.',
		el: 'Application Programming Interfaces — τα «συμβόλαια» που επιτρέπουν σε ένα λογισμικό να ζητά δεδομένα ή ενέργειες από ένα άλλο.\n\nΣχεδόν κάθε feature που φτιάχνεις μιλάει με κάποιο API, είτε δικό σου backend είτε τρίτου. Ένα κακοσχεδιασμένο API — ασυνέπεια στα ονόματα, ελλιπή error messages — κάνει κάθε integration πάνω του πιο δύσκολο απ’ όσο θα έπρεπε.',
	},
	'ARM Templates': {
		en: 'JSON files that describe Azure resources declaratively, so infrastructure can be deployed the same way every time.\n\nInstead of clicking through the Portal and hoping you remember every setting, you check the template into source control and deploy it repeatedly. The tradeoff is verbosity — a non-trivial deployment can balloon into hundreds of lines of JSON, which is part of why Bicep exists.',
		el: 'Αρχεία JSON που περιγράφουν πόρους Azure δηλωτικά, ώστε η υποδομή να αναπτύσσεται με τον ίδιο τρόπο κάθε φορά.\n\nΑντί να κάνεις κλικ στο Portal και να ελπίζεις ότι θυμάσαι κάθε ρύθμιση, βάζεις το template σε source control και το τρέχεις ξανά και ξανά. Το μειονέκτημα είναι το μέγεθος — ένα σοβαρό deployment μπορεί να φτάσει σε εκατοντάδες γραμμές JSON, γι’ αυτό υπάρχει και το Bicep.',
	},
	'Active Listening': {
		en: 'Fully concentrating on what someone says before responding — used constantly on calls, in support, and in 1:1s.\n\nIt sounds obvious but most people are half-drafting their reply while the other person is still talking, and it shows. In support especially, actually listening before typing a canned response is what tells an angry customer you got what they’re actually upset about.',
		el: 'Πλήρης συγκέντρωση σε αυτό που λέει κάποιος πριν απαντήσεις — χρησιμοποιείται συνεχώς σε κλήσεις, support και 1:1.\n\nΑκούγεται προφανές, αλλά οι περισσότεροι ήδη σκέφτονται την απάντησή τους ενώ ο άλλος μιλάει ακόμα, και φαίνεται. Στο support ειδικά, το να ακούσεις πραγματικά πριν στείλεις μια έτοιμη απάντηση δείχνει στον πελάτη ότι κατάλαβες το πρόβλημά του.',
	},
	'Alert Thresholds': {
		en: 'The values that decide when a monitoring alert should fire — set too tight and you get noise, too loose and you miss incidents.\n\nA classic mistake is copying default thresholds from a tutorial that don’t match your actual traffic, which either floods everyone with false alarms or stays silent during a real outage. Good thresholds get tuned over time based on what past incidents actually looked like.',
		el: 'Οι τιμές που καθορίζουν πότε θα ενεργοποιηθεί ένα alert — πολύ αυστηρές φέρνουν θόρυβο, πολύ χαλαρές χάνουν incidents.\n\nΈνα συχνό λάθος είναι να αντιγράφεις default thresholds από κάποιο tutorial που δεν ταιριάζουν με την πραγματική σου κίνηση, με αποτέλεσμα είτε ψεύτικα alerts συνέχεια είτε σιωπή σε ένα πραγματικό πρόβλημα. Τα καλά thresholds ρυθμίζονται με τον καιρό, με βάση τα πραγματικά incidents.',
	},
	Alerts: {
		en: 'Automated notifications that something needs attention, so you find out from a dashboard instead of an angry user.\n\nA good alert tells you what’s wrong and where to look, not just that something is red. Too many low-value alerts train people to ignore all of them, which is how a real incident slips through.',
		el: 'Αυτοματοποιημένες ειδοποιήσεις ότι κάτι χρειάζεται προσοχή, ώστε να το μάθεις από ένα dashboard και όχι από θυμωμένο χρήστη.\n\nΈνα καλό alert σου λέει τι πάει στραβά και πού να ψάξεις, όχι απλά ότι κάτι είναι κόκκινο. Πολλά alerts χαμηλής αξίας μαθαίνουν τον κόσμο να τα αγνοεί, κι έτσι ένα πραγματικό incident περνάει απαρατήρητο.',
	},
	Assertions: {
		en: 'The checks inside a test that confirm the actual result matches what was expected.\n\nA test without an assertion just runs code and proves nothing — it can pass forever even after the feature breaks. The skill is picking assertions specific enough to actually catch a regression, not so loose they’d pass on almost any output.',
		el: 'Οι έλεγχοι μέσα σε ένα test που επιβεβαιώνουν ότι το πραγματικό αποτέλεσμα ταιριάζει με το αναμενόμενο.\n\nΈνα test χωρίς assertion απλά τρέχει κώδικα και δεν αποδεικνύει τίποτα — μπορεί να «περνάει» για πάντα ακόμα κι όταν το feature έχει σπάσει. Η τέχνη είναι να διαλέγεις assertions αρκετά συγκεκριμένα ώστε να πιάνουν πραγματικά ένα regression.',
	},
	Authentication: {
		en: 'Verifying that a user or system is who it claims to be, usually the first gate before any real access.\n\nGet this wrong and everything behind it — permissions, data access, audit logs — is built on sand. It’s also the layer attackers go after first, which is why things like multi-factor login exist on top of a plain password.',
		el: 'Επιβεβαίωση ότι ένας χρήστης ή σύστημα είναι όντως αυτό που ισχυρίζεται — συνήθως η πρώτη «πύλη» πριν από κάθε πρόσβαση.\n\nΑν αυτό χαλάσει, όλα από πάνω — δικαιώματα, πρόσβαση σε δεδομένα, audit logs — χτίζονται σε αστάθεια. Είναι επίσης το πρώτο σημείο που στοχεύουν οι επιτιθέμενοι, γι’ αυτό υπάρχει και το multi-factor login πάνω από έναν απλό κωδικό.',
	},
	'Automated Testing': {
		en: 'Tests that run themselves as part of a pipeline, catching regressions without anyone clicking through the app by hand.\n\nThe payoff shows up weeks later, when someone changes unrelated code and the suite immediately flags the thing that broke. Without it, that same bug ships quietly and gets found by a customer instead.',
		el: 'Tests που τρέχουν μόνα τους μέσα σε ένα pipeline, εντοπίζοντας regressions χωρίς να χρειάζεται κανείς να τα τρέξει χειροκίνητα.\n\nΤο όφελος φαίνεται εβδομάδες μετά, όταν κάποιος αλλάζει άσχετο κώδικα και το suite εντοπίζει αμέσως τι χάλασε. Χωρίς αυτό, το ίδιο bug φτάνει σιωπηλά στο production και το βρίσκει πρώτος ο πελάτης.',
	},
	'Automation Basics': {
		en: 'Turning a repeatable manual task into something a script or scheduled job does for you.\n\nIf you find yourself doing the exact same clicks or copy-paste more than a couple of times, it’s usually worth the ten minutes to script it. The habit of noticing "I’ve done this three times now" is the actual skill, more than any specific tool.',
		el: 'Μετατροπή μιας επαναλαμβανόμενης χειροκίνητης εργασίας σε κάτι που κάνει αυτόματα ένα script ή προγραμματισμένη εργασία.\n\nΑν κάνεις τα ίδια κλικ ή copy-paste πάνω από δύο φορές, συνήθως αξίζει τα δέκα λεπτά για να το κάνεις script. Η συνήθεια να προσέχεις «αυτό το έχω κάνει ήδη τρεις φορές» είναι η ουσιαστική δεξιότητα, πιο πολύ από κάθε συγκεκριμένο εργαλείο.',
	},
	Autoscaling: {
		en: 'Automatically adding or removing compute capacity based on real-time demand, instead of guessing how much you need.\n\nIt saves you from paying for peak capacity 24/7 when traffic is only heavy for a few hours a day. The pitfall is scaling too slowly to react to a sudden spike, so it still needs sane minimums and realistic thresholds, not just "turn it on and forget it."',
		el: 'Αυτόματη προσθήκη ή αφαίρεση υπολογιστικής ισχύος ανάλογα με τη ζήτηση, αντί να μαντεύεις πόση χρειάζεσαι.\n\nΣε γλιτώνει από το να πληρώνεις για μέγιστη χωρητικότητα όλο το 24ωρο όταν η κίνηση είναι έντονη μόνο λίγες ώρες. Η παγίδα είναι να αντιδρά αργά σε ξαφνικές αυξήσεις, οπότε χρειάζεται λογικά ελάχιστα και ρεαλιστικά thresholds — όχι απλά «το ανάβω και το ξεχνάω».',
	},
	'Azure Administration': {
		en: 'The day-to-day work of managing Azure resources, users, and policies once things are already running.\n\nThis is less about building new things and more about keeping what exists healthy — patching, right-sizing, cleaning up orphaned resources nobody remembers creating. It’s where a lot of unexpected cloud cost quietly comes from if nobody owns it.',
		el: 'Η καθημερινή διαχείριση πόρων, χρηστών και πολιτικών στο Azure, αφού τα πράγματα λειτουργούν ήδη.\n\nΕίναι λιγότερο δημιουργία νέων πραγμάτων και περισσότερο διατήρηση υγιών όσων υπάρχουν — patching, σωστό μέγεθος, καθαρισμός πόρων που έχουν ξεχαστεί. Εκεί κρύβεται συχνά αχρείαστο κόστος cloud, αν κανείς δεν το προσέχει.',
	},
	'Azure DevOps': {
		en: "Microsoft's suite for planning work, hosting code, and running CI/CD pipelines in one place.\n\nInstead of stitching together separate tools for boards, repos, and builds, teams that are already in the Microsoft ecosystem often keep it all here. Knowing your way around Boards and Pipelines specifically covers most of what you'll actually touch day to day.",
		el: 'Η σουίτα της Microsoft για σχεδιασμό εργασιών, φιλοξενία κώδικα και εκτέλεση CI/CD pipelines σε ένα μέρος.\n\nΑντί να συνδυάζεις ξεχωριστά εργαλεία για boards, repos και builds, οι ομάδες στο οικοσύστημα Microsoft συχνά τα κρατούν όλα εδώ. Η εξοικείωση με τα Boards και τα Pipelines καλύπτει το μεγαλύτερο μέρος της καθημερινής δουλειάς.',
	},
	'Azure Monitor': {
		en: "Azure's built-in service for collecting metrics and logs so you can see what your resources are actually doing.\n\nIt's the layer underneath the dashboards and alerts you actually look at — without it configured properly, an incident shows up as silence instead of a warning. Most teams pair it with Log Analytics to actually query what happened.",
		el: 'Η ενσωματωμένη υπηρεσία του Azure για συλλογή metrics και logs, ώστε να βλέπεις τι κάνουν πραγματικά οι πόροι σου.\n\nΕίναι το επίπεδο κάτω από τα dashboards και τα alerts που βλέπεις καθημερινά — χωρίς σωστή ρύθμιση, ένα incident περνάει σιωπηλά αντί να δώσει προειδοποίηση. Συνήθως συνδυάζεται με το Log Analytics για να ψάξεις τι πραγματικά συνέβη.',
	},
	'Azure Portal': {
		en: 'The web-based dashboard for creating and managing every Azure resource by hand, point-and-click style.\n\nIt’s the natural place to start when you’re learning a service, since you can see every option laid out instead of guessing at a CLI flag. Once you’re doing the same setup repeatedly, though, most teams move that into ARM templates or Bicep instead of clicking through the Portal each time.',
		el: 'Ο web-based πίνακας ελέγχου για δημιουργία και διαχείριση κάθε πόρου Azure χειροκίνητα, με κλικ.\n\nΕίναι το φυσικό σημείο εκκίνησης όταν μαθαίνεις μια υπηρεσία, γιατί βλέπεις όλες τις επιλογές παρατεταγμένες αντί να μαντεύεις ένα CLI flag. Όταν όμως κάνεις την ίδια ρύθμιση ξανά και ξανά, οι ομάδες συνήθως τη μεταφέρουν σε ARM templates ή Bicep.',
	},
	'Azure SQL': {
		en: "Microsoft's managed SQL Server database service in the cloud — same engine, no server to patch yourself.\n\nYou keep writing the same T-SQL you'd write against an on-prem SQL Server, but Microsoft handles patching, backups, and high availability underneath. The tradeoff is less control over the underlying OS and some SQL Server features that only exist on the full on-prem edition.",
		el: 'Η διαχειριζόμενη υπηρεσία βάσης δεδομένων SQL Server της Microsoft στο cloud — ίδια μηχανή, χωρίς server να συντηρείς.\n\nΓράφεις την ίδια T-SQL που θα έγραφες σε on-prem SQL Server, αλλά η Microsoft αναλαμβάνει patching, backups και high availability από πίσω. Το κόστος είναι λιγότερος έλεγχος στο υποκείμενο OS και κάποια features που υπάρχουν μόνο στην πλήρη on-prem έκδοση.',
	},
	Backups: {
		en: 'Regular copies of data kept so a mistake, failure, or attack doesn’t mean permanent data loss.\n\nThe part people skip is testing the restore — a backup nobody has ever tried to recover from is really just a hope. A good rule of thumb: if you haven’t restored from it, you don’t actually know it works.',
		el: 'Τακτικά αντίγραφα δεδομένων ώστε ένα λάθος, βλάβη ή επίθεση να μη σημαίνει μόνιμη απώλεια δεδομένων.\n\nΤο κομμάτι που συχνά παραλείπεται είναι το test restore — ένα backup που δεν έχεις δοκιμάσει ποτέ να ανακτήσεις είναι στην ουσία μια ελπίδα. Ένας καλός κανόνας: αν δεν το έχεις κάνει restore, δεν ξέρεις πραγματικά αν δουλεύει.',
	},
	Bash: {
		en: 'The scripting language and shell used to automate tasks on Linux and macOS systems.\n\nOnce you can chain a few commands with pipes and write a basic loop, you can automate most of the repetitive stuff you’d otherwise do by hand in a terminal. It’s also the language most server setup scripts and CI pipeline steps end up written in.',
		el: 'Η γλώσσα scripting και το shell που χρησιμοποιείται για αυτοματοποίηση εργασιών σε Linux και macOS.\n\nΜόλις μπορείς να συνδέσεις μερικές εντολές με pipes και να γράψεις ένα βασικό loop, μπορείς να αυτοματοποιήσεις τα περισσότερα επαναλαμβανόμενα πράγματα στο terminal. Είναι επίσης η γλώσσα στην οποία καταλήγουν τα περισσότερα scripts ρύθμισης servers και βήματα CI pipeline.',
	},
	Bicep: {
		en: 'A cleaner, simpler language that compiles down to ARM templates for defining Azure infrastructure.\n\nIt keeps the same declarative idea as ARM templates but drops most of the JSON boilerplate, so the same deployment is far shorter and easier to read. Most teams starting fresh on Azure infrastructure-as-code reach for Bicep instead of hand-writing ARM JSON.',
		el: 'Μια πιο απλή γλώσσα που μεταγλωττίζεται σε ARM templates για τον ορισμό υποδομής Azure.\n\nΔιατηρεί την ίδια δηλωτική λογική με τα ARM templates αλλά αφαιρεί το μεγαλύτερο μέρος του JSON boilerplate, οπότε το ίδιο deployment γίνεται πολύ πιο σύντομο και ευανάγνωστο. Οι ομάδες που ξεκινούν φρέσκες με infrastructure-as-code στο Azure προτιμούν συνήθως το Bicep.',
	},
	'Blob Storage': {
		en: "Azure's object storage for unstructured data like files, images, and backups — cheap, durable, and massively scalable.\n\nIt's not a filesystem in the traditional sense — you store and retrieve objects by key, not by browsing folders like a drive. It's the go-to place to dump things like uploaded images, log archives, or backup files that don't belong in a database.",
		el: 'Η object storage υπηρεσία του Azure για μη δομημένα δεδομένα όπως αρχεία, εικόνες και backups — φθηνή και εξαιρετικά επεκτάσιμη.\n\nΔεν είναι filesystem με την παραδοσιακή έννοια — αποθηκεύεις και ανακτάς objects με key, όχι περιήγηση σε φακέλους. Είναι το φυσικό μέρος για uploaded εικόνες, log αρχεία ή backups που δεν έχουν θέση σε μια βάση δεδομένων.',
	},
	'Bottleneck Analysis': {
		en: 'Figuring out exactly which part of a system is slowing everything else down under load.\n\nIt’s easy to guess wrong — the slow database query everyone blames might actually be fine, while a chatty API call nobody looked at is the real culprit. Real bottleneck analysis means measuring each part under load instead of trusting a hunch.',
		el: 'Εντοπισμός του ακριβούς σημείου ενός συστήματος που επιβραδύνει τα πάντα υπό φόρτο.\n\nΕίναι εύκολο να μαντέψεις λάθος — το αργό query που κατηγορούν όλοι μπορεί να είναι μια χαρά, ενώ ένα «φλύαρο» API call που κανείς δεν πρόσεξε να είναι ο πραγματικός ένοχος. Η σωστή ανάλυση σημαίνει μέτρηση κάθε κομματιού υπό φόρτο, όχι εμπιστοσύνη στη διαίσθηση.',
	},
	Branching: {
		en: 'Creating an isolated copy of code to work on a change without disturbing the main codebase.\n\nIt means several people can work on different features at once without stepping on each other’s half-finished code. The tradeoff is that branches left alone too long drift apart and turn a simple merge into a painful one.',
		el: 'Δημιουργία ενός ξεχωριστού αντιγράφου κώδικα για να δουλέψεις μια αλλαγή χωρίς να επηρεάσεις τον κύριο κώδικα.\n\nΈτσι πολλοί άνθρωποι δουλεύουν σε διαφορετικά features ταυτόχρονα χωρίς να πατάνε ο ένας στη δουλειά του άλλου. Το ρίσκο είναι ότι ένα branch που μένει ανοιχτό πολύ καιρό απομακρύνεται από το main και το merge γίνεται πονοκέφαλος.',
	},
	'Bug Lifecycle': {
		en: 'The stages a bug moves through — reported, triaged, fixed, verified, closed — and who owns each step.\n\nWithout clear ownership at each stage, bugs stall in limbo — reported but never triaged, or fixed but never actually verified as fixed. Knowing the lifecycle lets you tell at a glance whether a ticket is stuck and with whom.',
		el: 'Τα στάδια από τα οποία περνάει ένα bug — αναφορά, triage, διόρθωση, επαλήθευση, κλείσιμο — και ποιος είναι υπεύθυνος σε κάθε βήμα.\n\nΧωρίς σαφή ιδιοκτησία σε κάθε στάδιο, τα bugs κολλάνε στη μέση — αναφέρθηκαν αλλά δεν έγιναν triage, ή διορθώθηκαν αλλά δεν επιβεβαιώθηκαν ποτέ. Γνωρίζοντας τον κύκλο ζωής βλέπεις με μια ματιά πού έχει κολλήσει ένα ticket.',
	},
	'Bug Triage': {
		en: 'Deciding how serious a bug is and who should fix it next, so effort goes where it matters most.\n\nA crash blocking every customer obviously outranks a typo in a rarely used settings page, but the ranking isn’t always that obvious. Triage is where severity, priority, and how many people are actually affected get weighed against each other.',
		el: 'Απόφαση για το πόσο σοβαρό είναι ένα bug και ποιος πρέπει να το διορθώσει, ώστε η προσπάθεια να πηγαίνει εκεί που χρειάζεται.\n\nΈνα crash που μπλοκάρει κάθε πελάτη σαφώς προηγείται ενός τυπογραφικού λάθους σε σπάνια χρησιμοποιούμενη σελίδα ρυθμίσεων, αλλά η κατάταξη δεν είναι πάντα τόσο προφανής. Στο triage ζυγίζονται severity, priority και πόσοι πραγματικά επηρεάζονται.',
	},
	'Build Pipelines': {
		en: 'The automated steps that turn source code into a deployable artifact — compile, test, package.\n\nA reliable pipeline means every build goes through the exact same steps, so "it worked on my machine" stops being an excuse. When a build fails, the pipeline logs are usually the fastest way to find out which step actually broke.',
		el: 'Τα αυτοματοποιημένα βήματα που μετατρέπουν τον πηγαίο κώδικα σε παραδοτέο — compile, test, packaging.\n\nΈνα αξιόπιστο pipeline σημαίνει ότι κάθε build περνάει από τα ίδια ακριβώς βήματα, οπότε το «στο μηχάνημά μου δούλευε» δεν πιάνει πια. Όταν ένα build αποτύχει, τα logs του pipeline είναι συνήθως ο πιο γρήγορος τρόπος να βρεις ποιο βήμα έσπασε.',
	},
	'CRM Basics': {
		en: 'The fundamentals of using a Customer Relationship Management tool to track contacts, deals, and communication history.\n\nEvery call, email, and note about a prospect should end up logged in the CRM, not scattered across someone’s personal notes. That way, if the rep who owns a deal is out sick, anyone can pick it up without starting from zero.',
		el: 'Τα βασικά χρήσης ενός εργαλείου CRM για την παρακολούθηση επαφών, συμφωνιών και ιστορικού επικοινωνίας.\n\nΚάθε κλήση, email και σημείωση για έναν πιθανό πελάτη πρέπει να καταγράφεται στο CRM, όχι σκόρπια στις προσωπικές σημειώσεις κάποιου. Έτσι, αν ο υπεύθυνος μιας συμφωνίας απουσιάζει, οποιοσδήποτε μπορεί να τη συνεχίσει χωρίς να ξεκινήσει από το μηδέν.',
	},
	CSAT: {
		en: 'Customer Satisfaction score — a quick survey rating that shows whether a support interaction actually helped.\n\nOne bad CSAT rating rarely means much on its own, but a pattern across many tickets points at a real problem — a confusing product flow, a rep who needs coaching, slow response times. It’s a lagging signal, so treat it as feedback to act on, not a score to defend.',
		el: 'Δείκτης Ικανοποίησης Πελατών — μια σύντομη βαθμολογία που δείχνει αν μια αλληλεπίδραση support βοήθησε πραγματικά.\n\nΜια μεμονωμένη κακή βαθμολογία σπάνια σημαίνει πολλά, αλλά ένα μοτίβο σε πολλά tickets δείχνει πραγματικό πρόβλημα — μπερδεμένο flow προϊόντος, agent που χρειάζεται coaching, αργούς χρόνους απόκρισης. Είναι σήμα που πρέπει να αξιοποιείς, όχι νούμερο που πρέπει να υπερασπίζεσαι.',
	},
	'Change Management': {
		en: 'The formal process for reviewing and approving changes to production systems before they go live.\n\nIt exists because a small, unreviewed tweak has taken down production more than once, at more or less every company. The friction is intentional — it trades a little speed for someone else catching the risk you didn’t see.',
		el: 'Η επίσημη διαδικασία ελέγχου και έγκρισης αλλαγών σε συστήματα production πριν τεθούν σε λειτουργία.\n\nΥπάρχει γιατί μια μικρή, μη ελεγμένη αλλαγή έχει ρίξει production πάνω από μία φορά, σε σχεδόν κάθε εταιρεία. Η τριβή είναι σκόπιμη — ανταλλάσσεις λίγη ταχύτητα με το να πιάσει κάποιος άλλος το ρίσκο που εσύ δεν είδες.',
	},
	'Closing Techniques': {
		en: 'The specific moves a salesperson uses to move a ready buyer from "interested" to "signed."\n\nThe best closing technique is usually just asking directly for the decision once the prospect has no real objections left, rather than a clever trick. Pushing to close too early, before real objections are handled, is the classic way to lose a deal that was actually winnable.',
		el: 'Οι συγκεκριμένες τεχνικές που χρησιμοποιεί ένας πωλητής για να μεταφέρει έναν έτοιμο αγοραστή από το «ενδιαφέρομαι» στο «υπέγραψα».\n\nΗ καλύτερη τεχνική κλεισίματος είναι συνήθως απλά να ζητήσεις ευθέως την απόφαση όταν δεν υπάρχουν πια πραγματικές αντιρρήσεις, όχι κάποιο κόλπο. Το να πιέσεις για κλείσιμο πολύ πρόωρα, πριν λυθούν οι αντιρρήσεις, είναι ο κλασικός τρόπος να χάσεις μια συμφωνία που μπορούσες να κερδίσεις.',
	},
	'Cloud Economics': {
		en: 'Understanding how cloud pricing, pay-as-you-go, and cost optimization actually work before you provision anything.\n\nCloud makes it trivially easy to spin up something expensive and forget it’s running, so costs can creep up fast without anyone noticing. Knowing the pricing model up front — reserved vs. pay-as-you-go, storage tiers, egress fees — is what keeps a proof of concept from turning into a surprise bill.',
		el: 'Κατανόηση του πώς λειτουργεί η τιμολόγηση cloud, το pay-as-you-go και η βελτιστοποίηση κόστους, πριν δημιουργήσεις οτιδήποτε.\n\nΤο cloud κάνει πολύ εύκολο να ανοίξεις κάτι ακριβό και να το ξεχάσεις να τρέχει, οπότε το κόστος ανεβαίνει χωρίς να το προσέξει κανείς. Η γνώση της τιμολόγησης εκ των προτέρων — reserved vs pay-as-you-go, storage tiers, egress fees — είναι αυτό που εμποδίζει ένα proof of concept να γίνει απρόσμενος λογαριασμός.',
	},
	'Code Review': {
		en: 'Having another developer read your code before it merges — catches bugs and spreads knowledge of the codebase.\n\nA second pair of eyes catches things the author is too close to see, like an edge case or a naming choice that’ll confuse the next person. It also means more than one person understands any given piece of code, so nothing depends on a single developer’s memory.',
		el: 'Ανάγνωση του κώδικά σου από άλλον developer πριν το merge — εντοπίζει bugs και διαδίδει τη γνώση του codebase.\n\nΈνα δεύτερο μάτι πιάνει πράγματα που ο συγγραφέας είναι πολύ κοντά για να δει, όπως ένα edge case ή μια ονομασία που θα μπερδέψει τον επόμενο. Σημαίνει επίσης ότι πάνω από ένα άτομο κατανοεί κάθε κομμάτι κώδικα, οπότε τίποτα δεν εξαρτάται από τη μνήμη ενός μόνο developer.',
	},
	'Code Review Etiquette': {
		en: 'How to give and receive feedback on code without it turning into a personal attack or a rubber stamp.\n\nComment on the code, not the person — "this could leak memory" lands very differently than "why would you write it this way." On the receiving end, treat a hard comment as information about the code, not a verdict on your skill.',
		el: 'Πώς να δίνεις και να δέχεσαι feedback σε κώδικα χωρίς να γίνεται προσωπική επίθεση ή τυπική έγκριση χωρίς νόημα.\n\nΣχολίασε τον κώδικα, όχι το άτομο — το «αυτό μπορεί να προκαλέσει memory leak» ακούγεται πολύ διαφορετικά από το «γιατί το έγραψες έτσι». Ως αποδέκτης, αντιμετώπισε ένα σκληρό σχόλιο ως πληροφορία για τον κώδικα, όχι κρίση για τις ικανότητές σου.',
	},
	'Cold Outreach': {
		en: 'Reaching out to a potential customer who has never talked to you before, cold email or cold call.\n\nThe hit rate is low by design, so it’s a numbers game where personalization is what separates a reply from an instant delete. A generic template blasted to a thousand contacts performs worse than a shorter, specific message sent to a hundred of the right ones.',
		el: 'Επικοινωνία με έναν πιθανό πελάτη που δεν σου έχει μιλήσει ποτέ πριν, μέσω email ή τηλεφώνου.\n\nΤο ποσοστό επιτυχίας είναι εξ ορισμού χαμηλό, οπότε είναι παιχνίδι αριθμών όπου η εξατομίκευση κάνει τη διαφορά ανάμεσα σε απάντηση και άμεση διαγραφή. Ένα γενικό template σε χίλιες επαφές αποδίδει χειρότερα από ένα πιο σύντομο, συγκεκριμένο μήνυμα σε εκατό σωστές επαφές.',
	},
	'Common Issues': {
		en: 'The handful of problems that generate most support tickets — knowing them by heart saves everyone time.\n\nMost support queues follow the 80/20 rule: a small set of recurring issues accounts for most of the volume. Learning those first means you can resolve the bulk of tickets fast, instead of researching from scratch every single time.',
		el: 'Τα λίγα προβλήματα που δημιουργούν τα περισσότερα tickets — το να τα ξέρεις απ’ έξω γλιτώνει χρόνο σε όλους.\n\nΟι περισσότερες ουρές support ακολουθούν τον κανόνα 80/20: λίγα επαναλαμβανόμενα προβλήματα καλύπτουν τον μεγαλύτερο όγκο. Μαθαίνοντάς τα πρώτα, λύνεις το μεγαλύτερο μέρος των tickets γρήγορα, αντί να ψάχνεις από την αρχή κάθε φορά.',
	},
	'Company Tools': {
		en: 'The internal software stack — chat, CRM, docs, calendars — that everyone is expected to know their way around.\n\nNone of it is complicated on its own, but not knowing where things live is one of the most common ways new hires lose their first few days. Ask early where the "source of truth" lives for each tool instead of guessing and creating a duplicate.',
		el: 'Το εσωτερικό σύνολο εργαλείων — chat, CRM, docs, ημερολόγια — που όλοι πρέπει να ξέρουν να χρησιμοποιούν.\n\nΤίποτα από αυτά δεν είναι δύσκολο μόνο του, αλλά το να μη ξέρεις πού βρίσκονται τα πράγματα είναι ένας από τους πιο συχνούς τρόπους που χάνονται οι πρώτες μέρες ενός νεοεισερχόμενου. Ρώτα από νωρίς πού είναι η «πηγή αλήθειας» για κάθε εργαλείο, αντί να μαντεύεις και να φτιάχνεις διπλότυπα.',
	},
	'Continuous Integration': {
		en: 'Automatically building and testing code every time it changes, so integration problems surface in minutes, not weeks.\n\nThe name comes from continuously merging small changes into a shared branch instead of everyone working in isolation for weeks. A red build should get fixed almost immediately — letting it stay broken defeats the entire point.',
		el: 'Αυτόματο build και testing του κώδικα σε κάθε αλλαγή, ώστε τα προβλήματα ενσωμάτωσης να φαίνονται σε λεπτά, όχι εβδομάδες.\n\nΤο όνομα προέρχεται από τη συνεχή ενσωμάτωση μικρών αλλαγών σε ένα κοινό branch, αντί να δουλεύει ο καθένας απομονωμένος για εβδομάδες. Ένα «κόκκινο» build πρέπει να διορθώνεται σχεδόν αμέσως — αν το αφήσεις χαλασμένο, χάνεται όλο το νόημα.',
	},
	'Control Flow': {
		en: 'The if/else, loops, and branching logic that decide which code actually runs.\n\nMost real bugs live in control flow — a condition that’s slightly wrong, a loop that runs one time too many or too few. Reading unfamiliar code usually means tracing the control flow first to understand which branches can actually happen.',
		el: 'Το if/else, οι βρόχοι (loops) και η λογική διακλάδωσης που καθορίζουν ποιος κώδικας εκτελείται τελικά.\n\nΤα περισσότερα πραγματικά bugs κρύβονται στο control flow — μια συνθήκη λίγο λάθος, ένα loop που τρέχει μία φορά παραπάνω ή παρακάτω. Η ανάγνωση άγνωστου κώδικα συνήθως ξεκινά με το ίχνος του control flow, για να καταλάβεις ποιοι κλάδοι μπορούν πραγματικά να συμβούν.',
	},
	'Cosmos DB': {
		en: "Azure's globally distributed NoSQL database, built for apps that need low latency anywhere in the world.\n\nIt automatically replicates data across regions you pick, so a user in another continent still gets a fast response. That flexibility comes with a different mental model than a relational database — you design around partition keys and access patterns up front, not tables and joins.",
		el: 'Η παγκοσμίως κατανεμημένη NoSQL βάση δεδομένων του Azure, φτιαγμένη για εφαρμογές που χρειάζονται χαμηλή καθυστέρηση παντού.\n\nΑντιγράφει αυτόματα τα δεδομένα στις regions που επιλέγεις, ώστε ένας χρήστης σε άλλη ήπειρο να παίρνει γρήγορη απάντηση. Αυτή η ευελιξία έρχεται με διαφορετικό μοντέλο σκέψης από μια σχεσιακή βάση — σχεδιάζεις γύρω από partition keys και access patterns, όχι πίνακες και joins.',
	},
	'Cost Management': {
		en: 'Tracking cloud spend against budget and spotting waste before the invoice is a surprise.\n\nThe usual culprits are forgotten test resources, oversized VMs nobody downsized after launch, and storage nobody bothered to archive or delete. Setting up budget alerts before spend gets out of hand is far easier than untangling a bloated bill after the fact.',
		el: 'Παρακολούθηση δαπανών cloud σε σχέση με τον προϋπολογισμό και εντοπισμός σπατάλης πριν γίνει έκπληξη στο τιμολόγιο.\n\nΟι συνήθεις ένοχοι είναι ξεχασμένοι test πόροι, υπερμεγέθη VMs που κανείς δεν μίκρυνε μετά την κυκλοφορία, και αποθηκευτικός χώρος που κανείς δεν αρχειοθέτησε. Το να στήσεις budget alerts πριν ξεφύγει το κόστος είναι πολύ πιο εύκολο από το να ξεδιαλύνεις έναν διογκωμένο λογαριασμό μετά.',
	},
	CSS: {
		en: 'The language that controls how a web page looks — layout, color, spacing, and responsiveness.\n\nModern CSS (flexbox, grid) handles most layout needs without hacks, but it still has a learning curve around specificity and the cascade — why one rule wins over another. Getting a layout to hold up on a phone screen as well as a desktop is usually where the real work is.',
		el: 'Η γλώσσα που ελέγχει την εμφάνιση μιας ιστοσελίδας — διάταξη, χρώμα, αποστάσεις και responsiveness.\n\nΤο σύγχρονο CSS (flexbox, grid) καλύπτει τις περισσότερες ανάγκες διάταξης χωρίς κόλπα, αλλά έχει καμπύλη εκμάθησης στο specificity και το cascade — γιατί νικά ένας κανόνας έναντι άλλου. Το να «κρατήσει» μια διάταξη το ίδιο καλά σε κινητό όσο και σε desktop είναι συνήθως εκεί που βρίσκεται η πραγματική δουλειά.',
	},
	'Cross-team Collaboration': {
		en: "Getting work done that depends on people outside your own team — knowing who to loop in and when.\n\nThe skill is less about the work itself and more about timing: looping someone in early enough that they can actually influence the outcome, not after the decision is basically made. Most cross-team friction comes from someone finding out about a change that affects them too late to react.",
		el: 'Ολοκλήρωση εργασίας που εξαρτάται από ανθρώπους εκτός της ομάδας σου — γνωρίζοντας ποιον να ενημερώσεις και πότε.\n\nΗ δεξιότητα είναι λιγότερο η ίδια η δουλειά και περισσότερο ο χρόνος — να ενημερώσεις κάποιον αρκετά νωρίς ώστε να μπορεί όντως να επηρεάσει το αποτέλεσμα, όχι αφού η απόφαση έχει ουσιαστικά παρθεί. Οι περισσότερες τριβές μεταξύ ομάδων προκύπτουν όταν κάποιος μαθαίνει για μια αλλαγή που τον αφορά πολύ αργά.',
	},
	'Customer Success Handoff': {
		en: 'Passing a newly closed customer to the team that keeps them happy long-term, with enough context that nothing gets dropped.\n\nA good handoff includes the deal history, what was promised during the sales process, and any red flags — not just a name and an account ID. A bad handoff means the new customer has to re-explain their own situation, which is a rough first impression right after signing.',
		el: 'Παράδοση ενός νέου πελάτη στην ομάδα που θα τον φροντίζει μακροπρόθεσμα, με αρκετό context ώστε να μη χαθεί τίποτα.\n\nΈνα καλό handoff περιλαμβάνει το ιστορικό της συμφωνίας, τι υποσχέθηκε η πώληση και τυχόν προειδοποιητικά σημάδια — όχι μόνο ένα όνομα και ένα account ID. Ένα κακό handoff σημαίνει ότι ο νέος πελάτης πρέπει να ξαναεξηγήσει την κατάστασή του, κακή πρώτη εντύπωση αμέσως μετά την υπογραφή.',
	},
	DNS: {
		en: 'The system that translates human-readable domain names into the IP addresses computers actually use.\n\nIt works like a phone book for the internet, and it’s cached at multiple layers, which is exactly why DNS changes can take time to "propagate" everywhere. It’s also one of the first things to check when a site is unreachable — half the time it’s not the server that’s down, it’s a DNS record pointing at the wrong place.',
		el: 'Το σύστημα που μεταφράζει τα ονόματα domain σε IP διευθύνσεις που χρησιμοποιούν πραγματικά οι υπολογιστές.\n\nΛειτουργεί σαν τηλεφωνικός κατάλογος του internet, και είναι cached σε πολλά επίπεδα — γι’ αυτό οι αλλαγές DNS χρειάζονται χρόνο να «διαδοθούν» παντού. Είναι και το πρώτο πράγμα που ελέγχεις όταν ένας ιστότοπος δεν φορτώνει — συχνά δεν είναι ο server που έχει πρόβλημα, αλλά μια εγγραφή DNS που δείχνει λάθος σημείο.',
	},
	DOM: {
		en: "The Document Object Model — the browser's live tree representation of a page that JavaScript reads and changes.\n\nWhen JavaScript adds a button or updates some text on screen without reloading the page, it's manipulating the DOM directly. Frameworks like React don't replace the DOM — they just manage those updates for you more efficiently than doing it by hand.",
		el: 'Το Document Object Model — η ζωντανή αναπαράσταση μιας σελίδας που διαβάζει και αλλάζει η JavaScript.\n\nΌταν η JavaScript προσθέτει ένα κουμπί ή αλλάζει κείμενο στην οθόνη χωρίς reload, χειρίζεται απευθείας το DOM. Frameworks όπως το React δεν αντικαθιστούν το DOM — απλά διαχειρίζονται αυτές τις αλλαγές πιο αποτελεσματικά από το να το κάνεις με το χέρι.',
	},
	Dashboards: {
		en: 'Visual summaries of live system data — the first place to look when something might be wrong.\n\nA good dashboard answers "is everything okay?" at a glance, without needing to run a query first. Cluttering it with every metric you can collect defeats the purpose — the useful ones are the few that actually change your next action.',
		el: 'Οπτικές συνόψεις δεδομένων συστήματος σε πραγματικό χρόνο — το πρώτο σημείο ελέγχου όταν κάτι πάει στραβά.\n\nΈνα καλό dashboard απαντά με μια ματιά στο «είναι όλα καλά;», χωρίς να χρειάζεται πρώτα ένα query. Το να το παραφορτώσεις με κάθε δυνατό metric αναιρεί τον σκοπό του — χρήσιμα είναι τα λίγα που πραγματικά αλλάζουν την επόμενη ενέργειά σου.',
	},
	'Data Hygiene': {
		en: 'Keeping CRM records accurate and up to date, because a messy pipeline makes every report wrong.\n\nDuplicate contacts, stale deal stages, and missing fields quietly poison every forecast and report built on top of that data. Five minutes cleaning up a record after a call is much cheaper than someone untangling it months later.',
		el: 'Διατήρηση ακριβών και ενημερωμένων εγγραφών στο CRM — ένα ακατάστατο pipeline κάνει κάθε αναφορά λάθος.\n\nΔιπλότυπες επαφές, ξεχασμένα στάδια συμφωνιών και κενά πεδία δηλητηριάζουν σιωπηλά κάθε forecast και αναφορά που χτίζεται πάνω σε αυτά τα δεδομένα. Πέντε λεπτά καθαρισμού μιας εγγραφής μετά από μια κλήση κοστίζουν πολύ λιγότερο από το να το ξεδιαλύνει κάποιος μήνες μετά.',
	},
	Databases: {
		en: 'Where an application actually stores and retrieves its data — the thing behind almost every feature.\n\nEvery button click that shows or saves something eventually hits a database, so its design shapes how fast and reliable the whole app feels. A schema that made sense at launch can become the bottleneck once real usage and real data volume show up.',
		el: 'Εκεί όπου μια εφαρμογή αποθηκεύει και ανακτά τα δεδομένα της — αυτό που κρύβεται πίσω από σχεδόν κάθε λειτουργία.\n\nΚάθε κλικ που εμφανίζει ή αποθηκεύει κάτι καταλήγει τελικά σε μια βάση δεδομένων, οπότε ο σχεδιασμός της καθορίζει πόσο γρήγορη και αξιόπιστη νιώθει όλη η εφαρμογή. Ένα schema που είχε νόημα στην αρχή μπορεί να γίνει το bottleneck μόλις έρθει πραγματική χρήση και όγκος δεδομένων.',
	},
	'De-escalation': {
		en: 'Techniques for calming down a frustrated customer before the conversation goes anywhere useful.\n\nAcknowledging the frustration out loud — "I get why that’s annoying" — before jumping to a fix usually defuses more than the fix itself. Trying to solve the problem while the customer still feels unheard almost always backfires.',
		el: 'Τεχνικές για να ηρεμήσεις έναν εκνευρισμένο πελάτη πριν η συζήτηση πάει κάπου χρήσιμα.\n\nΤο να αναγνωρίσεις την απογοήτευση φωναχτά — «καταλαβαίνω γιατί σε ενοχλεί αυτό» — πριν πας κατευθείαν στη λύση, συχνά ηρεμεί πιο πολύ από την ίδια τη λύση. Το να προσπαθήσεις να λύσεις το πρόβλημα ενώ ο πελάτης νιώθει ακόμα ότι δεν τον άκουσαν, σχεδόν πάντα φέρνει αντίθετο αποτέλεσμα.',
	},
	'Deal Strategy': {
		en: "Planning how to win a specific deal — who's involved, what they care about, and what could go wrong.\n\nBigger deals usually have more than one decision-maker, and each one may care about something different — cost, ease of rollout, risk. Mapping that out ahead of a key call beats improvising and discovering a blocker halfway through.",
		el: 'Σχεδιασμός για το πώς θα κερδηθεί μια συγκεκριμένη συμφωνία — ποιος εμπλέκεται, τι τον ενδιαφέρει και τι μπορεί να πάει στραβά.\n\nΟι μεγαλύτερες συμφωνίες συνήθως έχουν πάνω από έναν decision-maker, και ο καθένας μπορεί να ενδιαφέρεται για κάτι διαφορετικό — κόστος, ευκολία υλοποίησης, ρίσκο. Το να το χαρτογραφήσεις πριν από μια κρίσιμη κλήση είναι καλύτερο από τον αυτοσχεδιασμό.',
	},
	Debugging: {
		en: 'The process of finding out why code isn’t doing what you expect, one clue at a time.\n\nThe fastest debuggers aren’t the ones who know the codebase best — they’re the ones who form a hypothesis and test it, instead of randomly changing things and hoping. Reproducing the bug reliably is almost always the hardest and most valuable step.',
		el: 'Η διαδικασία εύρεσης του γιατί ο κώδικας δεν κάνει αυτό που περιμένεις, βήμα προς βήμα.\n\nΟι πιο αποτελεσματικοί στο debugging δεν είναι απαραίτητα όσοι ξέρουν καλύτερα τον κώδικα — είναι όσοι φτιάχνουν μια υπόθεση και τη δοκιμάζουν, αντί να αλλάζουν πράγματα τυχαία ελπίζοντας. Η σταθερή αναπαραγωγή του bug είναι σχεδόν πάντα το πιο δύσκολο και πιο πολύτιμο βήμα.',
	},
	Deployment: {
		en: 'Getting a new version of software running somewhere real users can reach it.\n\nThe scary part isn’t writing the code, it’s the moment it goes live — which is why teams lean on things like staged rollouts, feature flags, and quick rollbacks to make that moment less risky. A deployment that can’t be undone quickly turns a small bug into a long outage.',
		el: 'Η διαδικασία να τεθεί μια νέα έκδοση λογισμικού σε λειτουργία εκεί όπου φτάνουν οι πραγματικοί χρήστες.\n\nΤο τρομακτικό κομμάτι δεν είναι η συγγραφή του κώδικα, είναι η στιγμή που βγαίνει live — γι’ αυτό οι ομάδες χρησιμοποιούν staged rollouts, feature flags και γρήγορα rollbacks για να το κάνουν λιγότερο ριψοκίνδυνο. Ένα deployment που δεν αναιρείται γρήγορα μετατρέπει ένα μικρό bug σε μεγάλο outage.',
	},
	'Discovery Calls': {
		en: 'The first real sales conversation, focused on understanding a prospect’s problem before pitching anything.\n\nThe goal is to talk less and ask more — a rep who pitches features before understanding the actual pain point is guessing at what matters. Good discovery makes every later conversation, from the demo to the proposal, far more targeted.',
		el: 'Η πρώτη πραγματική συζήτηση πωλήσεων, με στόχο να καταλάβεις το πρόβλημα του πελάτη πριν προτείνεις οτιδήποτε.\n\nΟ στόχος είναι να μιλάς λιγότερο και να ρωτάς περισσότερο — ένας πωλητής που παρουσιάζει features πριν καταλάβει το πραγματικό πρόβλημα απλά μαντεύει. Ένα καλό discovery κάνει κάθε επόμενη συζήτηση, από το demo μέχρι την προσφορά, πολύ πιο στοχευμένη.',
	},
	Docker: {
		en: 'A tool for packaging an application with everything it needs to run, so it behaves the same everywhere.\n\nThat "everything it needs" — the runtime, libraries, config — is what ends the classic "works on my machine but not on the server" problem. It’s also the standard building block underneath most modern deployment pipelines and orchestration tools like Kubernetes.',
		el: 'Ένα εργαλείο για να «πακετάρεις» μια εφαρμογή με ό,τι χρειάζεται για να τρέξει, ώστε να συμπεριφέρεται ίδια παντού.\n\nΑυτό το «ό,τι χρειάζεται» — runtime, βιβλιοθήκες, ρυθμίσεις — τερματίζει το κλασικό «στο μηχάνημά μου δουλεύει αλλά στον server όχι». Είναι επίσης το βασικό δομικό στοιχείο κάτω από τα περισσότερα σύγχρονα pipelines deployment και εργαλεία όπως το Kubernetes.',
	},
	Documentation: {
		en: 'Writing down how something works so the next person — including future you — doesn’t have to guess.\n\nThe test of good documentation is whether someone with no prior context could follow it and get the same result. Undocumented tribal knowledge feels fine until the one person who knew it goes on vacation, or leaves.',
		el: 'Γραπτή καταγραφή του πώς λειτουργεί κάτι, ώστε ο επόμενος — ακόμα κι εσύ στο μέλλον — να μη χρειάζεται να μαντέψει.\n\nΤο τεστ για καλή τεκμηρίωση είναι αν κάποιος χωρίς προηγούμενη γνώση θα μπορούσε να την ακολουθήσει και να καταλήξει στο ίδιο αποτέλεσμα. Η άγραφη γνώση φαίνεται εντάξει μέχρι να πάρει άδεια — ή να φύγει — το ένα άτομο που την είχε στο κεφάλι του.',
	},
	'Email & Calendar': {
		en: 'The most basic company tools — knowing how meetings, invites, and shared calendars actually work here.\n\nHow a company actually uses these tools varies a lot — some treat calendar invites as optional, others treat a declined invite as a real signal. Learning the local etiquette in your first week saves a lot of small, avoidable friction later.',
		el: 'Τα πιο βασικά εργαλεία της εταιρείας — το πώς λειτουργούν πραγματικά οι συναντήσεις, οι προσκλήσεις και τα κοινόχρηστα ημερολόγια.\n\nΤο πώς χρησιμοποιεί μια εταιρεία αυτά τα εργαλεία διαφέρει πολύ — άλλες θεωρούν τις προσκλήσεις προαιρετικές, άλλες θεωρούν μια απόρριψη σοβαρό σήμα. Το να μάθεις τους άγραφους κανόνες από την πρώτη εβδομάδα γλιτώνει πολλή αχρείαστη τριβή αργότερα.',
	},
	'Email Sequences': {
		en: 'A series of automated, timed emails designed to nurture a lead without manually sending each one.\n\nA good sequence adds something new in each email — a case study, an answer to a common objection — instead of just repeating the same pitch. Sending too many too fast is the fastest way to get marked as spam instead of getting a reply.',
		el: 'Μια σειρά αυτοματοποιημένων emails με χρονισμό, σχεδιασμένη να «θρέψει» έναν lead χωρίς να τα στέλνεις ένα-ένα χειροκίνητα.\n\nΜια καλή ακολουθία προσθέτει κάτι νέο σε κάθε email — ένα case study, απάντηση σε συχνή αντίρρηση — αντί να επαναλαμβάνει το ίδιο μήνυμα. Το να στείλεις πολλά πολύ γρήγορα είναι ο πιο σίγουρος τρόπος να καταλήξεις στο spam αντί για απάντηση.',
	},
	'Engineering Handoff': {
		en: 'Passing a bug or issue to engineering with enough detail that they don’t have to ask "can you reproduce this?"\n\nA solid handoff includes exact steps, what you expected versus what happened, and the environment it occurred in. Skipping that detail just bounces the ticket back to you a day later with the same question you could have answered up front.',
		el: 'Παράδοση ενός bug στο engineering με αρκετή λεπτομέρεια ώστε να μη χρειαστεί να ρωτήσουν «μπορείς να το αναπαράγεις;».\n\nΈνα σωστό handoff περιλαμβάνει ακριβή βήματα, τι περίμενες έναντι τι έγινε, και σε ποιο περιβάλλον συνέβη. Το να παραλείψεις αυτή τη λεπτομέρεια απλά επιστρέφει το ticket σε σένα μια μέρα μετά, με την ίδια ερώτηση που θα μπορούσες να απαντήσεις εξαρχής.',
	},
	'Environment Variables': {
		en: 'Configuration values kept outside the codebase — like passwords and API keys — so they never get committed by accident.\n\nThe same code can then run against different databases or API endpoints in dev, staging, and production, just by changing values outside the code itself. A leaked secret committed to a public repo is one of the most common, most avoidable security incidents there is.',
		el: 'Τιμές ρύθμισης που κρατιούνται εκτός του κώδικα — όπως κωδικοί και API keys — ώστε να μην καταλήγουν ποτέ κατά λάθος στο repository.\n\nΈτσι ο ίδιος κώδικας μπορεί να τρέξει με διαφορετικές βάσεις ή API endpoints σε dev, staging και production, αλλάζοντας μόνο τιμές έξω από τον κώδικα. Ένα secret που καταλήγει κατά λάθος σε δημόσιο repository είναι από τα πιο συχνά και πιο αποφευκτά security incidents.',
	},
	'Escalation Etiquette': {
		en: 'How to raise an issue to someone more senior without sounding alarmist or burying the real problem.\n\nThe useful version leads with what you’ve already tried and what you actually need from them, not just "this is broken, help." Escalating too early on everything trains people to tune you out; escalating too late lets a small problem grow.',
		el: 'Πώς να αναφέρεις ένα ζήτημα σε κάποιον πιο έμπειρο χωρίς να ακούγεσαι πανικόβλητος ή να θάβεις το πραγματικό πρόβλημα.\n\nΗ χρήσιμη εκδοχή ξεκινά με τι έχεις ήδη δοκιμάσει και τι χρειάζεσαι πραγματικά από αυτόν, όχι απλά «χάλασε, βοήθεια». Το να κάνεις escalate πολύ συχνά μαθαίνει τους ανθρώπους να σε αγνοούν· το να το κάνεις πολύ αργά αφήνει ένα μικρό πρόβλημα να μεγαλώσει.',
	},
	'Escalation Paths': {
		en: 'The predefined chain of who gets contacted next when an issue is too big to handle alone.\n\nHaving this decided ahead of time means nobody wastes precious minutes during an actual incident figuring out who to call. It also protects the person handling the issue — they’re following an agreed process, not making a judgment call alone under pressure.',
		el: 'Η προκαθορισμένη αλυσίδα του ποιος ενημερώνεται όταν ένα ζήτημα είναι πολύ μεγάλο για να το χειριστείς μόνος/η σου.\n\nΤο να είναι αυτό αποφασισμένο εκ των προτέρων σημαίνει ότι κανείς δεν χάνει πολύτιμα λεπτά σε ένα πραγματικό incident ψάχνοντας ποιον να καλέσει. Προστατεύει επίσης τον χειριστή — ακολουθεί συμφωνημένη διαδικασία, δεν αποφασίζει μόνος υπό πίεση.',
	},
	'Exploratory Testing': {
		en: 'Testing without a script — poking around the product with curiosity to find bugs a checklist would miss.\n\nA scripted test only checks what someone already thought to write down, while exploratory testing catches the weird combination nobody predicted. It works best when paired with structured testing, not as a replacement for it.',
		el: 'Testing χωρίς σενάριο — εξερεύνηση του προϊόντος με περιέργεια για να βρεις bugs που θα προσπερνούσε ένα checklist.\n\nΈνα scripted test ελέγχει μόνο ό,τι κάποιος σκέφτηκε να γράψει, ενώ το exploratory testing πιάνει τον περίεργο συνδυασμό που κανείς δεν προέβλεψε. Δουλεύει καλύτερα σε συνδυασμό με δομημένο testing, όχι ως αντικατάσταση.',
	},
	FAQs: {
		en: 'The pre-written answers to the questions customers ask most often — your fastest way to resolve a ticket.\n\nA good FAQ entry saves everyone time, but it only stays useful if someone keeps it updated as the product changes. A stale FAQ pointing at a button that moved is often worse than no FAQ at all.',
		el: 'Οι έτοιμες απαντήσεις στις πιο συχνές ερωτήσεις πελατών — ο γρηγορότερος τρόπος να κλείσεις ένα ticket.\n\nΜια καλή απάντηση στο FAQ γλιτώνει χρόνο σε όλους, αλλά παραμένει χρήσιμη μόνο αν κάποιος τη κρατά ενημερωμένη καθώς αλλάζει το προϊόν. Ένα ξεπερασμένο FAQ που δείχνει σε κουμπί που έχει μετακινηθεί είναι συχνά χειρότερο από το να μην υπάρχει καθόλου.',
	},
	'Feature Flags': {
		en: 'Toggles that turn a feature on or off in production without a new deployment — great for safe rollouts.\n\nThey let you ship code to production dark, then turn it on gradually for a small percentage of users before flipping it on for everyone. Left forgotten in the codebase after a rollout, though, flags pile up and quietly make the code harder to follow.',
		el: 'Διακόπτες που ενεργοποιούν ή απενεργοποιούν ένα feature σε production χωρίς νέο deployment — ιδανικό για ασφαλή rollout.\n\nΣου επιτρέπουν να στείλεις κώδικα σε production «σβηστό», και μετά να τον ενεργοποιήσεις σταδιακά σε λίγους χρήστες πριν τον ανοίξεις σε όλους. Αν ξεχαστούν στον κώδικα μετά το rollout, οι flags συσσωρεύονται και κάνουν τον κώδικα πιο δύσκολο να διαβαστεί.',
	},
	'Feedback Loops': {
		en: 'Getting information back from customers or engineering about whether a fix actually worked.\n\nWithout closing the loop, the same complaint can quietly reopen weeks later because nobody confirmed the fix actually landed for the customer who reported it. A quick "does this look fixed on your end?" is a small habit that prevents a lot of repeat tickets.',
		el: 'Λήψη πληροφορίας από πελάτες ή engineering για το αν μια διόρθωση όντως λειτούργησε.\n\nΧωρίς να κλείσει ο βρόχος, το ίδιο παράπονο μπορεί να ξανανοίξει σιωπηλά εβδομάδες μετά, γιατί κανείς δεν επιβεβαίωσε ότι η διόρθωση όντως έφτασε στον πελάτη που το αναφέρθηκε. Ένα σύντομο «φαίνεται διορθωμένο σε εσένα;» γλιτώνει πολλά επαναλαμβανόμενα tickets.',
	},
	'Follow-ups': {
		en: 'The habit of checking back in after a conversation instead of letting things quietly go cold.\n\nMost deals and tickets don’t die from a hard "no" — they die from silence, where nobody follows up and the thread just fades out. A short, low-pressure check-in is often all it takes to keep something moving.',
		el: 'Η συνήθεια να επικοινωνείς ξανά μετά από μια συζήτηση αντί να αφήνεις τα πράγματα να «κρυώσουν».\n\nΟι περισσότερες συμφωνίες και tickets δεν χάνονται από ένα σκληρό «όχι» — χάνονται από σιωπή, όταν κανείς δεν κάνει follow-up και το thread απλά ξεθωριάζει. Ένα σύντομο, χαμηλής πίεσης μήνυμα συχνά αρκεί για να κρατήσει κάτι ζωντανό.',
	},
	Forecasting: {
		en: 'Predicting how much revenue is likely to close based on the current pipeline and past patterns.\n\nAn accurate forecast depends on the pipeline data actually being kept up to date — a stale deal stage anywhere quietly skews the whole number. Reps are also naturally optimistic about their own deals, so good forecasting weighs past close rates, not just gut feel.',
		el: 'Πρόβλεψη του πόσα έσοδα είναι πιθανό να κλείσουν, με βάση το τρέχον pipeline και τα ιστορικά στοιχεία.\n\nΈνα ακριβές forecast εξαρτάται από το να είναι το pipeline ενημερωμένο — ένα ξεχασμένο στάδιο συμφωνίας αλλοιώνει σιωπηλά όλο τον αριθμό. Οι πωλητές είναι φυσικά αισιόδοξοι για τις δικές τους συμφωνίες, οπότε το καλό forecasting ζυγίζει τα ιστορικά ποσοστά κλεισίματος, όχι μόνο το ένστικτο.',
	},
	Functions: {
		en: 'Reusable, named blocks of code that take input and return output — the basic unit of most programs.\n\nInstead of copy-pasting the same five lines everywhere, you wrap them once in a function and call it by name — fix a bug in one place, and it’s fixed everywhere it’s used. A function that tries to do too many unrelated things at once is usually a sign it should be split into smaller ones.',
		el: 'Επαναχρησιμοποιήσιμα κομμάτια κώδικα με όνομα, που δέχονται είσοδο και επιστρέφουν αποτέλεσμα — η βασική μονάδα κάθε προγράμματος.\n\nΑντί να κάνεις copy-paste τις ίδιες πέντε γραμμές παντού, τις τυλίγεις μία φορά σε μια function και την καλείς με το όνομά της — διορθώνεις ένα bug σε ένα μέρος και διορθώνεται παντού. Μια function που προσπαθεί να κάνει πολλά άσχετα πράγματα ταυτόχρονα συνήθως πρέπει να χωριστεί σε μικρότερες.',
	},
	Git: {
		en: 'The version control system almost every codebase uses to track changes and let people work in parallel.\n\nEvery change has a history and an author, so you can always see who changed what and why — and undo it if needed. A messy commit history with vague messages like "fix stuff" makes that history far less useful when you actually need it.',
		el: 'Το σύστημα version control που χρησιμοποιεί σχεδόν κάθε codebase για να καταγράφει αλλαγές και να επιτρέπει παράλληλη δουλειά.\n\nΚάθε αλλαγή έχει ιστορικό και συγγραφέα, οπότε πάντα βλέπεις ποιος άλλαξε τι και γιατί — και μπορείς να το αναιρέσεις αν χρειαστεί. Ένα ακατάστατο ιστορικό commits με ασαφή μηνύματα όπως «fix stuff» κάνει αυτό το ιστορικό πολύ λιγότερο χρήσιμο όταν το χρειαστείς.',
	},
	'GitHub Actions': {
		en: "GitHub's built-in automation — run tests, builds, and deployments directly from your repository on every push.\n\nBecause it lives right next to the code, there's no separate CI server to maintain — the pipeline config is just another file in the repo. It's a common first choice for teams already hosting their code on GitHub who don't want to stand up a separate CI tool.",
		el: 'Η ενσωματωμένη αυτοματοποίηση του GitHub — τρέξε tests, builds και deployments απευθείας από το repository σε κάθε push.\n\nΕπειδή βρίσκεται δίπλα στον κώδικα, δεν υπάρχει ξεχωριστός CI server να συντηρείς — το config του pipeline είναι απλά ένα αρχείο μέσα στο repo. Είναι συχνά η πρώτη επιλογή για ομάδες που ήδη φιλοξενούν τον κώδικά τους στο GitHub.',
	},
	GitOps: {
		en: 'Managing infrastructure by treating your Git repository as the single source of truth for what should be running.\n\nInstead of someone SSH-ing in and manually tweaking a server, every change goes through a pull request and gets applied automatically once merged. That means the current state of production is always exactly what’s in Git — no more "what actually changed and who did it."',
		el: 'Διαχείριση υποδομής θεωρώντας το Git repository ως τη μοναδική πηγή αλήθειας για το τι πρέπει να τρέχει.\n\nΑντί κάποιος να συνδεθεί με SSH και να αλλάξει χειροκίνητα έναν server, κάθε αλλαγή περνάει από pull request και εφαρμόζεται αυτόματα μόλις γίνει merge. Έτσι η τρέχουσα κατάσταση του production είναι πάντα ακριβώς όσα υπάρχουν στο Git — τέλος το «τι άλλαξε και ποιος το έκανε».',
	},
	HADR: {
		en: 'High Availability / Disaster Recovery — the strategies that keep a database up during failures and recoverable after disasters.\n\nHigh availability is about surviving a single failure — a node dies and traffic fails over without anyone noticing. Disaster recovery is the bigger insurance policy for when an entire site or region goes down, and the two get planned together, not as an afterthought.',
		el: 'High Availability / Disaster Recovery — οι στρατηγικές που κρατούν μια βάση δεδομένων διαθέσιμη σε βλάβες και ανακτήσιμη μετά από καταστροφές.\n\nΤο high availability είναι για να επιβιώσεις μια μεμονωμένη βλάβη — ένας κόμβος πεθαίνει και η κίνηση κάνει failover χωρίς να το προσέξει κανείς. Το disaster recovery είναι η μεγαλύτερη ασφάλεια για όταν χάνεται ολόκληρη η region, και τα δύο σχεδιάζονται μαζί, όχι εκ των υστέρων.',
	},
	HTML: {
		en: 'The markup language that structures the content of every web page.\n\nIt’s where headings, paragraphs, links, and forms get defined before any styling or interactivity gets layered on top. Using the right semantic tags — a `<button>` instead of a styled `<div>` — matters more than it looks, especially for accessibility and screen readers.',
		el: 'Η γλώσσα markup που δομεί το περιεχόμενο κάθε ιστοσελίδας.\n\nΕκεί ορίζονται οι τίτλοι, οι παράγραφοι, τα links και οι φόρμες, πριν προστεθεί από πάνω οποιοδήποτε στυλ ή διαδραστικότητα. Η χρήση του σωστού semantic tag — ένα `<button>` αντί για ένα `<div>` με στυλ — έχει μεγαλύτερη σημασία απ’ όσο φαίνεται, ειδικά για accessibility.',
	},
	Helm: {
		en: 'A package manager for Kubernetes that bundles related resources so you can deploy an app in one command.\n\nInstead of applying a dozen separate YAML files by hand for every deployment, you install a "chart" that describes the whole app and its config together. It also makes upgrades and rollbacks of a whole app much less error-prone than editing raw manifests one by one.',
		el: 'Ένας package manager για Kubernetes που ομαδοποιεί σχετικούς πόρους ώστε να αναπτύσσεις μια εφαρμογή με μία εντολή.\n\nΑντί να εφαρμόζεις μια ντουζίνα ξεχωριστά αρχεία YAML χειροκίνητα σε κάθε deployment, εγκαθιστάς ένα «chart» που περιγράφει όλη την εφαρμογή και τις ρυθμίσεις της μαζί. Κάνει επίσης τα upgrades και τα rollbacks πολύ λιγότερο επιρρεπή σε λάθη.',
	},
	'Helpdesk Software': {
		en: 'The platform where support tickets live — assigned, tracked, and closed from request to resolution.\n\nIt’s the shared memory of support — without it, there’s no way to see who’s handling what, or whether a customer already asked this question last week. Knowing the queues, filters, and macros of whatever tool your team uses is most of the day-to-day job.',
		el: 'Η πλατφόρμα όπου «ζουν» τα tickets υποστήριξης — ανάθεση, παρακολούθηση και κλείσιμο από το αίτημα μέχρι τη λύση.\n\nΕίναι η κοινή μνήμη του support — χωρίς αυτό, δεν υπάρχει τρόπος να δεις ποιος χειρίζεται τι, ή αν ο πελάτης έχει ήδη ρωτήσει το ίδιο πράγμα την προηγούμενη εβδομάδα. Η γνώση των ουρών, φίλτρων και macros του εργαλείου είναι το μεγαλύτερο κομμάτι της καθημερινής δουλειάς.',
	},
	IAM: {
		en: 'Identity and Access Management — controlling who can do what across cloud resources.\n\nIt’s the layer that decides whether a request is not just authenticated but actually allowed to do what it’s asking. Getting IAM permissions too broad "just to make it work" is a common shortcut that turns into a real security gap later.',
		el: 'Identity and Access Management — έλεγχος του ποιος μπορεί να κάνει τι στους πόρους cloud.\n\nΕίναι το επίπεδο που αποφασίζει αν ένα αίτημα δεν είναι μόνο επιβεβαιωμένο αλλά και επιτρεπόμενο να κάνει αυτό που ζητά. Το να δώσεις πολύ ευρεία δικαιώματα «για να δουλέψει» είναι συχνή συντόμευση που γίνεται πρόβλημα ασφάλειας αργότερα.',
	},
	IaaS: {
		en: 'Infrastructure as a Service — renting raw compute, storage, and networking instead of buying physical servers.\n\nYou still manage the operating system, patching, and everything above it — the cloud provider is just handling the physical hardware. It sits at the "most control, most responsibility" end of the cloud spectrum, compared to PaaS or SaaS.',
		el: 'Infrastructure as a Service — ενοικίαση υπολογιστικής ισχύος, αποθήκευσης και δικτύωσης αντί για αγορά φυσικών servers.\n\nΣυνεχίζεις να διαχειρίζεσαι το λειτουργικό σύστημα, το patching και όλα από πάνω — ο πάροχος αναλαμβάνει μόνο το φυσικό hardware. Βρίσκεται στο άκρο «περισσότερος έλεγχος, περισσότερη ευθύνη» του φάσματος cloud, σε σχέση με PaaS ή SaaS.',
	},
	'IDE Setup': {
		en: 'Configuring your code editor with the extensions and settings that make you productive from day one.\n\nA few minutes setting up a linter, formatter, and debugger integration pays off constantly, catching mistakes before you even run the code. Copying a teammate’s known-good setup is usually faster than configuring everything from a blank slate.',
		el: 'Ρύθμιση του editor κώδικα με τα extensions και τις ρυθμίσεις που σε κάνουν παραγωγικό/ή από την πρώτη μέρα.\n\nΛίγα λεπτά ρύθμισης ενός linter, formatter και debugger αποδίδουν συνεχώς, πιάνοντας λάθη πριν καν τρέξεις τον κώδικα. Το να αντιγράψεις τη ρύθμιση ενός συναδέλφου είναι συνήθως πιο γρήγορο από το να ξεκινήσεις από το μηδέν.',
	},
	'ITIL Basics': {
		en: 'The widely used framework of best practices for how IT services should be requested, delivered, and supported.\n\nIt gives names to things most IT teams already do informally — incident, problem, and change management — so everyone means the same thing by "priority" or "change request." You don’t need certification to benefit from it, just the shared vocabulary.',
		el: 'Το ευρέως χρησιμοποιούμενο πλαίσιο βέλτιστων πρακτικών για το πώς ζητούνται, παραδίδονται και υποστηρίζονται οι υπηρεσίες IT.\n\nΔίνει ονόματα σε πράγματα που οι περισσότερες ομάδες IT κάνουν ήδη ανεπίσημα — incident, problem, change management — ώστε όλοι να εννοούν το ίδιο πράγμα με το «priority». Δεν χρειάζεται πιστοποίηση για να το αξιοποιήσεις, μόνο το κοινό λεξιλόγιο.',
	},
	'Identity Management': {
		en: 'Managing who exists as a user across your systems and what they’re allowed to access.\n\nThe messy part is usually offboarding — an employee leaves but their account and access linger in five different systems nobody remembered to check. Centralizing identity is what makes turning off access everywhere a single action instead of a scavenger hunt.',
		el: 'Διαχείριση του ποιος υπάρχει ως χρήστης στα συστήματά σου και σε τι έχει πρόσβαση.\n\nΤο πιο μπερδεμένο κομμάτι είναι συνήθως το offboarding — ένας εργαζόμενος φεύγει αλλά ο λογαριασμός του παραμένει ενεργός σε πέντε συστήματα που κανείς δεν θυμήθηκε να ελέγξει. Η κεντρικοποίηση της ταυτότητας κάνει το κλείσιμο πρόσβασης μία ενέργεια αντί για κυνήγι θησαυρού.',
	},
	'Independent Ticket Handling': {
		en: 'Resolving support tickets on your own, using judgment built up from your earlier shadowed shifts.\n\nThe transition point isn’t knowing every answer — it’s knowing when a ticket is actually outside your depth and needs to be escalated instead of guessed at. Asking a good question at the right moment is still a normal part of working independently, not a failure of it.',
		el: 'Επίλυση tickets υποστήριξης μόνος/η σου, χρησιμοποιώντας την κρίση που έχτισες στις προηγούμενες βάρδιες παρακολούθησης.\n\nΤο σημείο μετάβασης δεν είναι το να ξέρεις κάθε απάντηση — είναι το να ξέρεις πότε ένα ticket είναι πραγματικά πέρα από τις δυνατότητές σου και πρέπει να γίνει escalate. Το να ρωτήσεις κάτι σωστά τη σωστή στιγμή δεν είναι αποτυχία, είναι κομμάτι της ανεξάρτητης δουλειάς.',
	},
	Indexes: {
		en: 'Database structures that make lookups fast by avoiding a full table scan on every query.\n\nThink of it like the index at the back of a book — without it, finding one fact means reading every page. They aren’t free, though: every index speeds up reads but slows down writes a little, since it has to be updated too.',
		el: 'Δομές βάσης δεδομένων που κάνουν τις αναζητήσεις γρήγορες, αποφεύγοντας πλήρη σάρωση πίνακα σε κάθε query.\n\nΣκέψου το σαν το ευρετήριο ενός βιβλίου — χωρίς αυτό, η εύρεση ενός γεγονότος σημαίνει ανάγνωση κάθε σελίδας. Δεν είναι όμως δωρεάν: κάθε index επιταχύνει τις αναγνώσεις αλλά επιβραδύνει λίγο τις εγγραφές, αφού πρέπει να ενημερώνεται και αυτό.',
	},
	Intranet: {
		en: 'The internal, company-only website used for announcements, policies, and shared resources.\n\nIt’s usually the fastest way to check something like a holiday schedule or an expense policy without pinging someone directly. Its usefulness lives or dies on whether people actually keep it current — a stale intranet just becomes another place nobody trusts.',
		el: 'Ο εσωτερικός ιστότοπος της εταιρείας για ανακοινώσεις, πολιτικές και κοινόχρηστους πόρους.\n\nΣυνήθως είναι ο πιο γρήγορος τρόπος να ελέγξεις κάτι όπως το πρόγραμμα αργιών ή μια πολιτική εξόδων, χωρίς να ρωτήσεις κάποιον απευθείας. Η χρησιμότητά του εξαρτάται πλήρως από το αν κάποιος τον κρατά ενημερωμένο.',
	},
	JMeter: {
		en: 'An open-source tool for simulating heavy load against an application to see how it holds up.\n\nYou script a realistic set of requests, then ramp up virtual users to see exactly where response times start climbing or errors start appearing. It’s most useful before a launch or a known traffic spike, when finding the breaking point in advance beats finding it live.',
		el: 'Ένα open-source εργαλείο για προσομοίωση υψηλού φόρτου σε μια εφαρμογή, ώστε να δεις πώς αντέχει.\n\nΦτιάχνεις ένα ρεαλιστικό σύνολο requests και μετά ανεβάζεις εικονικούς χρήστες για να δεις πού ανεβαίνουν οι χρόνοι απόκρισης ή εμφανίζονται σφάλματα. Είναι πιο χρήσιμο πριν από ένα launch ή γνωστή αύξηση κίνησης, ώστε να βρεις το σημείο θραύσης εκ των προτέρων.',
	},
	JavaScript: {
		en: 'The programming language that makes web pages interactive instead of just static documents.\n\nIt runs in the browser and reacts to what the user does — clicks, typing, scrolling — updating the page without a full reload. It also runs on servers via Node.js, which is why so much of the modern web stack is JavaScript end to end.',
		el: 'Η γλώσσα προγραμματισμού που κάνει τις ιστοσελίδες διαδραστικές αντί για απλά στατικά έγγραφα.\n\nΤρέχει στον browser και αντιδρά σε ό,τι κάνει ο χρήστης — κλικ, πληκτρολόγηση, scroll — ενημερώνοντας τη σελίδα χωρίς πλήρες reload. Τρέχει επίσης σε servers μέσω Node.js, γι’ αυτό μεγάλο μέρος του σύγχρονου web stack είναι JavaScript από άκρη σε άκρη.',
	},
	Jira: {
		en: 'A widely used tool for tracking tickets, bugs, and project work across a team.\n\nIt’s where "what are we working on" actually lives — sprints, backlogs, and who owns what — instead of scattered across chat threads. Knowing how your team structures its boards and statuses matters more than knowing every Jira feature that exists.',
		el: 'Ένα ευρέως χρησιμοποιούμενο εργαλείο για παρακολούθηση tickets, bugs και εργασιών μιας ομάδας.\n\nΕκεί ζει το «τι δουλεύουμε τώρα» — sprints, backlog, ποιος είναι υπεύθυνος — αντί να είναι σκόρπιο σε chat. Η γνώση του πώς η ομάδα σου δομεί τα boards έχει μεγαλύτερη αξία από τη γνώση κάθε δυνατότητας του Jira.',
	},
	Joins: {
		en: 'The SQL operation that combines rows from two or more tables based on a related column.\n\nThey’re how relational databases avoid duplicating the same data everywhere — customer info lives in one table, orders in another, joined by a customer ID. Getting the join type wrong (inner vs. left, say) is a classic way to silently drop or duplicate rows without an error being thrown.',
		el: 'Η λειτουργία SQL που συνδυάζει γραμμές από δύο ή περισσότερους πίνακες με βάση μια κοινή στήλη.\n\nΈτσι οι σχεσιακές βάσεις αποφεύγουν να επαναλαμβάνουν τα ίδια δεδομένα παντού — τα στοιχεία πελάτη σε έναν πίνακα, οι παραγγελίες σε άλλον, ενωμένα με ένα customer ID. Το λάθος τύπου join (inner vs left) είναι κλασικός τρόπος να χαθούν ή να διπλασιαστούν γραμμές χωρίς σφάλμα.',
	},
	KPIs: {
		en: 'Key Performance Indicators — the specific numbers used to judge whether the work is actually succeeding.\n\nGood KPIs are chosen to reflect real outcomes, not just activity — "tickets closed" without also tracking quality can quietly reward closing tickets badly and fast. Picking the wrong KPI is how a team optimizes for the metric instead of the actual goal.',
		el: 'Key Performance Indicators — οι συγκεκριμένοι αριθμοί που χρησιμοποιούνται για να κριθεί αν η δουλειά πετυχαίνει.\n\nΤα καλά KPIs αντικατοπτρίζουν πραγματικά αποτελέσματα, όχι απλά δραστηριότητα — το «tickets που κλείστηκαν» χωρίς μέτρηση ποιότητας μπορεί να ανταμείψει το κλείσιμο tickets βιαστικά και άσχημα. Το λάθος KPI κάνει μια ομάδα να βελτιστοποιεί το metric αντί για τον πραγματικό στόχο.',
	},
	'Key Vault': {
		en: "Azure's managed service for storing secrets, keys, and certificates so they don't end up hardcoded in source code.\n\nApps request what they need from Key Vault at runtime instead of having it baked into config files anyone with repo access could read. It also handles things like certificate rotation, so nobody has to remember to swap an expiring cert by hand.",
		el: 'Η διαχειριζόμενη υπηρεσία του Azure για αποθήκευση secrets, keys και πιστοποιητικών, ώστε να μην καταλήγουν hardcoded στον κώδικα.\n\nΟι εφαρμογές ζητούν ό,τι χρειάζονται από το Key Vault κατά την εκτέλεση, αντί να είναι μέσα σε αρχεία config που μπορεί να δει όποιος έχει πρόσβαση στο repo. Χειρίζεται επίσης πράγματα όπως rotation πιστοποιητικών, ώστε κανείς να μη ξεχάσει να αλλάξει ένα πιστοποιητικό που λήγει.',
	},
	'Knowledge Base': {
		en: 'The searchable library of articles that lets customers — and support agents — self-serve answers.\n\nA well-maintained knowledge base deflects a meaningful chunk of tickets before they’re even opened, since the customer finds the answer themselves. It only stays valuable if agents actually write up new answers as they resolve novel issues, instead of letting that knowledge stay in their heads.',
		el: 'Η αναζητήσιμη βιβλιοθήκη άρθρων που επιτρέπει σε πελάτες — και agents υποστήριξης — να βρίσκουν μόνοι τους απαντήσεις.\n\nΜια καλά συντηρημένη βάση γνώσης αποτρέπει σημαντικό αριθμό tickets πριν καν ανοίξουν, αφού ο πελάτης βρίσκει μόνος την απάντηση. Παραμένει χρήσιμη μόνο αν οι agents γράφουν νέες απαντήσεις όταν λύνουν κάτι καινούριο, αντί να το κρατούν στο κεφάλι τους.',
	},
	'Lead Qualification': {
		en: 'Figuring out whether a prospect is actually a good fit before investing more time in them.\n\nA common framework checks budget, authority, need, and timeline — chasing a lead who loves the product but has no budget or authority to buy wastes everyone’s time. Disqualifying a bad-fit lead early is just as valuable as identifying a good one.',
		el: 'Εκτίμηση του αν ένας πιθανός πελάτης είναι όντως κατάλληλος πριν επενδύσεις άλλο χρόνο σε αυτόν.\n\nΈνα συχνό πλαίσιο ελέγχει προϋπολογισμό, εξουσία απόφασης, ανάγκη και χρονοδιάγραμμα — το να κυνηγάς έναν lead που λατρεύει το προϊόν αλλά δεν έχει προϋπολογισμό χάνει τον χρόνο όλων. Ο αποκλεισμός ενός ακατάλληλου lead νωρίς αξίζει όσο η αναγνώριση ενός καλού.',
	},
	'Lead Scoring': {
		en: 'Ranking leads by how likely they are to convert, so reps focus on the ones worth chasing.\n\nScores usually combine firmographic fit (right company size, right industry) with behavior (opened emails, visited pricing page). Without it, reps end up splitting attention evenly across leads that have wildly different odds of actually closing.',
		el: 'Κατάταξη leads ανάλογα με το πόσο πιθανό είναι να μετατραπούν σε πελάτες, ώστε οι πωλητές να εστιάζουν εκεί που αξίζει.\n\nΤα scores συνήθως συνδυάζουν εταιρικά χαρακτηριστικά (σωστό μέγεθος, σωστός κλάδος) με συμπεριφορά (άνοιξε emails, επισκέφτηκε τη σελίδα τιμών). Χωρίς αυτό, οι πωλητές μοιράζουν την προσοχή τους εξίσου σε leads με πολύ διαφορετικές πιθανότητες κλεισίματος.',
	},
	'LinkedIn Outreach': {
		en: 'Using LinkedIn to find and message prospects directly, as an alternative to cold email.\n\nIt works well because you can see shared context — a mutual connection, a recent post — that makes a message feel less cold than an anonymous email. A generic connection request with a canned pitch attached gets ignored just as fast as a bad cold email.',
		el: 'Χρήση του LinkedIn για εντοπισμό και απευθείας επικοινωνία με πιθανούς πελάτες, ως εναλλακτική του cold email.\n\nΔουλεύει καλά γιατί βλέπεις κοινό context — κοινή επαφή, πρόσφατο post — που κάνει το μήνυμα να μη φαίνεται τόσο ψυχρό. Ένα γενικό αίτημα σύνδεσης με έτοιμο pitch αγνοείται εξίσου εύκολα με ένα κακό cold email.',
	},
	Linting: {
		en: 'Automated style and error checking on code before it’s even reviewed by a human.\n\nIt catches the boring stuff — unused variables, inconsistent formatting, obvious mistakes — so a human reviewer’s time goes toward logic and design instead. Most teams run it automatically on every commit or pull request so nobody has to remember to run it manually.',
		el: 'Αυτόματος έλεγχος στυλ και σφαλμάτων στον κώδικα, πριν καν τον δει άνθρωπος.\n\nΠιάνει τα βαρετά πράγματα — αχρησιμοποίητες μεταβλητές, ασυνεπής μορφοποίηση, προφανή λάθη — ώστε ο χρόνος του reviewer να πηγαίνει στη λογική και τον σχεδιασμό. Οι περισσότερες ομάδες το τρέχουν αυτόματα σε κάθε commit ή pull request.',
	},
	'Load Balancers': {
		en: 'Traffic distributors that spread incoming requests across multiple servers so no single one gets overwhelmed.\n\nThey also mean one server can go down for maintenance or crash without users noticing, since traffic just routes around it. Without one, scaling out to multiple servers doesn’t actually help — all the traffic still hits whichever one users happen to be pointed at.',
		el: 'Κατανεμητές κίνησης που μοιράζουν τα εισερχόμενα αιτήματα σε πολλούς servers, ώστε κανείς να μην υπερφορτώνεται.\n\nΣημαίνουν επίσης ότι ένας server μπορεί να πάει για συντήρηση ή να πέσει χωρίς να το προσέξουν οι χρήστες, αφού η κίνηση απλά τον προσπερνά. Χωρίς αυτόν, το scale-out σε πολλούς servers δεν βοηθά πραγματικά.',
	},
	'Load Testing': {
		en: 'Deliberately hammering a system with traffic to see where it breaks before real users find out.\n\nIt answers a concrete question — "can we handle Black Friday traffic" — that no amount of code review alone can answer. Skipping it before a big launch means finding the system’s actual limit live, in front of real customers, which is a much worse way to learn it.',
		el: 'Σκόπιμη επιβάρυνση ενός συστήματος με κίνηση, για να βρεις πού σπάει πριν το βρουν οι πραγματικοί χρήστες.\n\nΑπαντά σε ένα συγκεκριμένο ερώτημα — «αντέχουμε την κίνηση της Black Friday» — που κανένα code review από μόνο του δεν απαντά. Το να το παραλείψεις πριν από ένα μεγάλο launch σημαίνει να μάθεις το πραγματικό όριο live, μπροστά σε πραγματικούς πελάτες.',
	},
	'Local Servers': {
		en: 'Running a version of the application on your own machine so you can build and test without touching production.\n\nIt’s the fastest feedback loop there is — see a change instantly instead of waiting on a deployment to a shared environment. The catch is keeping local config close enough to production that "works on my local server" doesn’t turn into a surprise once deployed.',
		el: 'Εκτέλεση μιας έκδοσης της εφαρμογής στον δικό σου υπολογιστή, ώστε να χτίζεις και να δοκιμάζεις χωρίς να αγγίζεις το production.\n\nΕίναι ο πιο γρήγορος βρόχος ανατροφοδότησης που υπάρχει — βλέπεις μια αλλαγή αμέσως αντί να περιμένεις ένα deployment. Το ζητούμενο είναι να κρατάς το local config αρκετά κοντά στο production ώστε να μην υπάρξουν εκπλήξεις.',
	},
	Locators: {
		en: 'The selectors an automated test uses to find a specific button, field, or element on a page.\n\nA fragile locator tied to something like exact text or position breaks the moment a designer tweaks the page slightly. Stable locators — dedicated test IDs, for instance — are what keep a test suite from needing constant babysitting.',
		el: 'Οι selectors που χρησιμοποιεί ένα αυτοματοποιημένο test για να βρει ένα συγκεκριμένο στοιχείο σε μια σελίδα.\n\nΈνας ασταθής locator, δεμένος σε ακριβές κείμενο ή θέση, σπάει τη στιγμή που ένας designer αλλάζει λίγο τη σελίδα. Οι σταθεροί locators — π.χ. αφιερωμένα test IDs — είναι αυτό που κρατά ένα test suite χωρίς συνεχή συντήρηση.',
	},
	'Log Analytics': {
		en: "Azure's tool for querying and analyzing log data across your resources in one place.\n\nInstead of SSHing into individual machines to grep through log files, you write a query and search across everything at once. It's usually the first place you go during an incident to piece together the timeline of what happened.",
		el: 'Το εργαλείο του Azure για αναζήτηση και ανάλυση log δεδομένων από όλους τους πόρους σου σε ένα μέρος.\n\nΑντί να συνδέεσαι μεμονωμένα σε μηχανές για να ψάξεις log αρχεία, γράφεις ένα query και ψάχνεις παντού ταυτόχρονα. Είναι συνήθως το πρώτο μέρος που κοιτάς σε ένα incident για να συνθέσεις το χρονολόγιο.',
	},
	'Log Reading': {
		en: 'Making sense of raw application logs to figure out what actually happened before an error.\n\nThe skill isn’t reading every line — it’s knowing what to search for and reading backward from the error to find the actual trigger. Logs full of noise and no timestamps make this much harder, which is why teams push for structured logging.',
		el: 'Κατανόηση των raw logs μιας εφαρμογής για να βρεις τι πραγματικά συνέβη πριν από ένα σφάλμα.\n\nΗ δεξιότητα δεν είναι να διαβάζεις κάθε γραμμή — είναι να ξέρεις τι να ψάξεις και να διαβάζεις προς τα πίσω από το σφάλμα για να βρεις την πραγματική αιτία. Logs γεμάτα θόρυβο και χωρίς timestamps το κάνουν πολύ πιο δύσκολο.',
	},
	'Maintenance Plans': {
		en: 'Scheduled database upkeep — index rebuilds, integrity checks, backups — so performance doesn’t quietly degrade.\n\nIndexes fragment and statistics go stale as data changes, and a query that was fast six months ago can slowly get worse without anyone changing a line of code. Running these jobs on a schedule catches that decline before users notice it as "the app feels slow lately."',
		el: 'Προγραμματισμένη συντήρηση βάσης δεδομένων — rebuild indexes, έλεγχοι ακεραιότητας, backups — ώστε η απόδοση να μη χειροτερεύει σιωπηλά.\n\nΤα indexes θρυμματίζονται και τα στατιστικά ξεπερνιούνται καθώς αλλάζουν τα δεδομένα, και ένα query που ήταν γρήγορο πριν έξι μήνες μπορεί σιγά-σιγά να χειροτερεύσει. Το προγραμματισμένο τρέξιμο αυτών των εργασιών πιάνει αυτή την πτώση πριν τη νιώσουν οι χρήστες.',
	},
	'Managed Disks': {
		en: "Azure's block storage for virtual machines, handled without you worrying about the underlying hardware.\n\nYou pick a performance tier and size, and Azure handles the redundancy and physical placement behind the scenes. It's the equivalent of a hard drive for a VM, except you never have to think about which physical disk it actually lives on.",
		el: 'Η block storage υπηρεσία του Azure για virtual machines, χωρίς να χρειάζεται να ασχολείσαι με το υποκείμενο hardware.\n\nΕπιλέγεις επίπεδο απόδοσης και μέγεθος, και το Azure αναλαμβάνει την πλεονασμότητα και την τοποθέτηση από πίσω. Είναι το αντίστοιχο ενός δίσκου για ένα VM, χωρίς να σκέφτεσαι ποτέ σε ποιο φυσικό δίσκο βρίσκεται.',
	},
	Mentorship: {
		en: 'Learning directly from someone more experienced — and eventually paying it forward to the next new hire.\n\nThe fastest ramp-up for most new hires isn’t documentation, it’s having someone to ask "is this normal?" without feeling silly. Once you’ve been through it, being on the other side of that question is usually the easiest way to give back.',
		el: 'Εκμάθηση απευθείας από κάποιον πιο έμπειρο — και τελικά η μετάδοση αυτής της γνώσης στον επόμενο νεοεισερχόμενο.\n\nΗ πιο γρήγορη εκμάθηση για τους περισσότερους νεοεισερχόμενους δεν είναι η τεκμηρίωση, είναι το να έχεις κάποιον να ρωτήσεις «είναι φυσιολογικό αυτό;» χωρίς να νιώσεις άβολα. Μόλις το περάσεις εσύ, το να είσαι στην άλλη πλευρά είναι ο πιο εύκολος τρόπος να το ανταποδώσεις.',
	},
	'Merge Conflicts': {
		en: 'What happens when two people change the same lines of code — resolving them is a normal part of teamwork.\n\nGit can’t guess which version you actually want, so it stops and asks — that pause is a feature, not a sign something went wrong. Small, frequent merges keep conflicts small and manageable; long-lived branches are what turn them into a genuine headache.',
		el: 'Αυτό που συμβαίνει όταν δύο άτομα αλλάζουν τις ίδιες γραμμές κώδικα — η επίλυσή τους είναι φυσιολογικό κομμάτι της ομαδικής δουλειάς.\n\nΤο Git δεν μπορεί να μαντέψει ποια έκδοση θέλεις πραγματικά, οπότε σταματά και ρωτά — αυτή η παύση είναι λειτουργία, όχι σημάδι ότι κάτι πήγε στραβά. Μικρά, συχνά merges κρατούν τα conflicts μικρά· τα branches που ζουν πολύ καιρό είναι αυτά που τα κάνουν πονοκέφαλο.',
	},
	'Metrics & KPIs': {
		en: 'The measurable numbers a team tracks to know whether operations are actually improving over time.\n\nWithout consistent tracking, "things feel better lately" is just a feeling — metrics turn it into something you can actually compare month over month. The trick is tracking a small set that reflects real outcomes, not a dashboard so wide nobody looks at it.',
		el: 'Οι μετρήσιμοι αριθμοί που παρακολουθεί μια ομάδα για να ξέρει αν οι λειτουργίες βελτιώνονται με τον καιρό.\n\nΧωρίς συνεπή παρακολούθηση, το «τα πράγματα είναι καλύτερα τελευταία» είναι απλά αίσθημα — τα metrics το μετατρέπουν σε κάτι συγκρίσιμο μήνα με μήνα. Το κόλπο είναι να παρακολουθείς λίγα που αντικατοπτρίζουν πραγματικά αποτελέσματα.',
	},
	'Negotiation Tactics': {
		en: 'Structured approaches to reaching a deal both sides feel good about, without just discounting to close.\n\nThe strongest negotiators trade things that cost little but matter to the other side — payment terms, onboarding support — instead of only touching price. Discounting fast to close is the easiest concession to make and often the most expensive one long-term.',
		el: 'Δομημένες προσεγγίσεις για να φτάσεις σε μια συμφωνία με την οποία νιώθουν καλά και οι δύο πλευρές, χωρίς απλή έκπτωση για να κλείσει.\n\nΟι καλύτεροι διαπραγματευτές ανταλλάσσουν πράγματα που κοστίζουν λίγο αλλά έχουν αξία για την άλλη πλευρά — όρους πληρωμής, υποστήριξη onboarding — αντί να αγγίζουν μόνο την τιμή. Η γρήγορη έκπτωση είναι η πιο εύκολη παραχώρηση και συχνά η πιο ακριβή μακροπρόθεσμα.',
	},
	'Networking Basics': {
		en: 'How machines actually talk to each other — IP addresses, ports, and the basics of getting connected.\n\nEvery "can’t connect" problem eventually comes down to one of a few things: wrong address, blocked port, or a routing issue in between. Knowing that short list turns a scary networking problem into a checklist instead of a mystery.',
		el: 'Πώς επικοινωνούν πραγματικά οι υπολογιστές μεταξύ τους — IP διευθύνσεις, ports και βασικά της σύνδεσης.\n\nΚάθε πρόβλημα «δεν μπορώ να συνδεθώ» καταλήγει τελικά σε κάτι από μια μικρή λίστα: λάθος διεύθυνση, μπλοκαρισμένο port, ή πρόβλημα δρομολόγησης ανάμεσα. Η γνώση αυτής της λίστας μετατρέπει ένα τρομακτικό πρόβλημα δικτύου σε checklist.',
	},
	'Non-relational Data': {
		en: "Data that doesn't fit neatly into rows and tables — documents, key-value pairs, graphs — and the databases built for it.\n\nIt tends to fit data whose shape varies a lot from record to record, or that needs to scale horizontally across many machines more easily than a traditional relational schema. The tradeoff is usually weaker guarantees around consistency and relationships between records, which is a real design decision, not a downgrade.",
		el: 'Δεδομένα που δεν χωρούν εύκολα σε γραμμές και πίνακες — έγγραφα, key-value ζεύγη, γράφοι — και οι βάσεις που φτιάχτηκαν γι’ αυτά.\n\nΤαιριάζει σε δεδομένα που η μορφή τους διαφέρει πολύ από εγγραφή σε εγγραφή, ή που χρειάζονται οριζόντια επεκτασιμότητα ευκολότερα από ένα σχεσιακό schema. Το κόστος είναι συνήθως πιο αδύναμες εγγυήσεις γύρω από τη συνέπεια, κάτι που είναι πραγματική σχεδιαστική επιλογή, όχι υποβάθμιση.',
	},
	'Objection Handling': {
		en: 'Responding to a prospect’s hesitations or pushback without getting defensive or losing the conversation.\n\nAn objection is usually a request for more information, not a rejection — "too expensive" often really means "I don’t see the value yet." The reps who handle it best acknowledge the concern first instead of immediately arguing against it.',
		el: 'Απάντηση στους ενδοιασμούς ή τις αντιρρήσεις ενός πελάτη χωρίς να γίνεσαι αμυντικός/ή ή να χάνεις τη συζήτηση.\n\nΜια αντίρρηση είναι συνήθως αίτημα για περισσότερη πληροφορία, όχι απόρριψη — το «είναι ακριβό» συχνά σημαίνει «δεν βλέπω ακόμα την αξία». Οι καλύτεροι πωλητές αναγνωρίζουν πρώτα την ανησυχία, αντί να αντιλέγουν άμεσα.',
	},
	'On-call Rotations': {
		en: "A shared schedule where team members take turns being the first responder to off-hours incidents.\n\nSpreading the burden fairly matters, because a rotation that quietly falls on the same one or two people burns them out fast. Good runbooks make a huge difference here — the on-call person shouldn't need to wake up the original author just to understand what broke.",
		el: 'Ένα κοινό πρόγραμμα όπου τα μέλη της ομάδας εναλλάσσονται στο να είναι οι πρώτοι που ανταποκρίνονται σε incidents εκτός ωραρίου.\n\nΗ δίκαιη κατανομή του φόρτου έχει σημασία, γιατί μια βάρδια που πέφτει σιωπηλά στα ίδια ένα-δύο άτομα τα εξαντλεί γρήγορα. Τα καλά runbooks κάνουν μεγάλη διαφορά εδώ — ο on-call δεν πρέπει να ξυπνήσει τον αρχικό συγγραφέα για να καταλάβει τι χάλασε.',
	},
	PaaS: {
		en: 'Platform as a Service — the cloud provider manages the infrastructure and runtime, you just deploy your app.\n\nYou stop thinking about patching operating systems or configuring load balancers and just push code — the platform figures out the rest. The tradeoff for that convenience is less control over the underlying environment when something unusual goes wrong.',
		el: 'Platform as a Service — ο πάροχος cloud διαχειρίζεται την υποδομή και το runtime, εσύ απλώς αναπτύσσεις την εφαρμογή σου.\n\nΣταματάς να σκέφτεσαι patching λειτουργικών συστημάτων ή ρυθμίσεις load balancer και απλά κάνεις push τον κώδικα — η πλατφόρμα κάνει τα υπόλοιπα. Το κόστος αυτής της ευκολίας είναι λιγότερος έλεγχος όταν κάτι ασυνήθιστο πάει στραβά.',
	},
	'Package Managers': {
		en: 'Tools like npm or pip that install and track the external libraries your code depends on.\n\nThey record exact versions in a lock file, so everyone on the team — and your build server — installs the identical set of dependencies. Blindly upgrading everything at once is a common way to introduce a breaking change you didn’t ask for.',
		el: 'Εργαλεία όπως npm ή pip που εγκαθιστούν και παρακολουθούν τις εξωτερικές βιβλιοθήκες από τις οποίες εξαρτάται ο κώδικάς σου.\n\nΚαταγράφουν ακριβείς εκδόσεις σε ένα lock file, ώστε όλοι στην ομάδα — και ο build server — να εγκαθιστούν τις ίδιες ακριβώς εξαρτήσεις. Το να κάνεις upgrade τα πάντα μαζί χωρίς σκέψη είναι συχνός τρόπος να εισάγεις ένα breaking change που δεν ζήτησες.',
	},
	'Pair Programming': {
		en: 'Two developers working on the same code together, one typing, one reviewing in real time.\n\nIt catches mistakes as they happen instead of in a review hours or days later, and it spreads knowledge of the code between two people immediately. It’s tiring to do all day, so most teams use it for specific hard problems, not as the default way of working.',
		el: 'Δύο developers που δουλεύουν μαζί στον ίδιο κώδικα — ο ένας πληκτρολογεί, ο άλλος κάνει review σε πραγματικό χρόνο.\n\nΠιάνει λάθη τη στιγμή που συμβαίνουν αντί σε review ώρες ή μέρες μετά, και διαδίδει τη γνώση του κώδικα ανάμεσα σε δύο άτομα αμέσως. Είναι κουραστικό να γίνεται όλη μέρα, οπότε οι περισσότερες ομάδες το χρησιμοποιούν για συγκεκριμένα δύσκολα προβλήματα.',
	},
	'Peer Review': {
		en: 'Having a colleague check your work before it goes out — a second set of eyes catches what you missed.\n\nIt applies to far more than code — a support reply, a proposal, a release note all benefit from someone else reading it before it reaches a customer. The value comes from picking a reviewer who’ll actually push back, not just rubber-stamp it.',
		el: 'Έλεγχος της δουλειάς σου από συνάδελφο πριν βγει προς τα έξω — ένα δεύτερο βλέμμα πιάνει αυτό που πρόσεξες.\n\nΙσχύει για πολύ περισσότερα από κώδικα — μια απάντηση support, μια πρόταση, ένα release note ωφελούνται όλα από ένα δεύτερο μάτι πριν φτάσουν στον πελάτη. Η αξία έρχεται από το να διαλέξεις έναν reviewer που θα σχολιάσει ουσιαστικά, όχι απλή τυπική έγκριση.',
	},
	'Performance Tuning': {
		en: 'Finding and fixing whatever is making a database or query slower than it needs to be.\n\nThe fix is often something small — a missing index, an unnecessary join, a query fetching far more columns than it needs. The trap is guessing at a fix without measuring first; the actual bottleneck is rarely the thing that looks the most complicated.',
		el: 'Εντοπισμός και διόρθωση οτιδήποτε κάνει μια βάση δεδομένων ή ένα query πιο αργό απ’ όσο χρειάζεται.\n\nΗ διόρθωση είναι συχνά κάτι μικρό — ένα λείπον index, ένα άχρηστο join, ένα query που φέρνει πολύ περισσότερες στήλες απ’ όσες χρειάζεται. Η παγίδα είναι να μαντέψεις τη διόρθωση χωρίς να μετρήσεις πρώτα.',
	},
	'Pipeline Stages': {
		en: 'The named steps a deal moves through in a CRM — from lead to negotiation to closed-won.\n\nHaving clear, consistent stage definitions is what makes forecasting possible — if everyone defines "qualified" differently, the pipeline numbers mean nothing. A deal that sits in the same stage for months without moving is usually a sign it needs attention, not patience.',
		el: 'Τα ονομασμένα στάδια από τα οποία περνάει μια συμφωνία στο CRM — από lead μέχρι διαπραγμάτευση και κλείσιμο.\n\nΟι σαφείς, συνεπείς ορισμοί σταδίων είναι αυτό που κάνει το forecasting δυνατό — αν ο καθένας ορίζει διαφορετικά το «qualified», οι αριθμοί του pipeline δεν σημαίνουν τίποτα. Μια συμφωνία που κάθεται στο ίδιο στάδιο για μήνες συνήθως χρειάζεται προσοχή, όχι υπομονή.',
	},
	'Pods & Services': {
		en: 'The basic building blocks of Kubernetes — a Pod runs your containers, a Service exposes them to traffic.\n\nPods are disposable by design — Kubernetes kills and replaces them constantly, so nothing important should live only inside one. A Service gives that shifting group of Pods a stable address, so the rest of the app doesn’t need to care which Pod is currently running.',
		el: 'Τα βασικά δομικά στοιχεία του Kubernetes — ένα Pod τρέχει τα containers σου, ένα Service τα εκθέτει στην κίνηση.\n\nΤα Pods είναι σχεδιασμένα να είναι αναλώσιμα — το Kubernetes τα σκοτώνει και τα αντικαθιστά συνεχώς, οπότε τίποτα σημαντικό δεν πρέπει να ζει μόνο σε ένα. Ένα Service δίνει σε αυτή τη μεταβαλλόμενη ομάδα Pods μια σταθερή διεύθυνση.',
	},
	Postman: {
		en: 'A popular tool for manually sending API requests and inspecting the responses while testing.\n\nIt lets you poke at an API directly — set headers, pass a body, see the raw response — without writing a single line of client code. Saved collections of requests also double as informal documentation of how an API is actually meant to be used.',
		el: 'Ένα δημοφιλές εργαλείο για χειροκίνητη αποστολή API requests και έλεγχο των απαντήσεων κατά το testing.\n\nΣου επιτρέπει να δοκιμάσεις ένα API απευθείας — headers, body, να δεις το raw response — χωρίς να γράψεις καμία γραμμή κώδικα. Οι αποθηκευμένες συλλογές requests λειτουργούν και ως ανεπίσημη τεκμηρίωση του πώς πρέπει να χρησιμοποιείται ένα API.',
	},
	Postmortems: {
		en: 'A blame-free written review of an incident — what happened, why, and what changes to prevent it next time.\n\nThe "blame-free" part matters — if people worry about getting in trouble, they leave out details, and the real cause never surfaces. A good postmortem ends with specific, assigned follow-up actions, not just a description of what went wrong.',
		el: 'Μια γραπτή ανασκόπηση ενός incident χωρίς επίρριψη ευθυνών — τι έγινε, γιατί, και τι αλλάζει ώστε να μην ξανασυμβεί.\n\nΤο «χωρίς επίρριψη ευθυνών» έχει σημασία — αν κάποιος φοβάται τις συνέπειες, παραλείπει λεπτομέρειες και η πραγματική αιτία δεν βγαίνει ποτέ στην επιφάνεια. Ένα καλό postmortem καταλήγει σε συγκεκριμένες, ανατεθειμένες ενέργειες, όχι μόνο περιγραφή του τι πήγε στραβά.',
	},
	PowerShell: {
		en: 'The scripting language and shell used to automate tasks across Windows and Azure environments.\n\nUnlike older Windows batch scripting, it works with structured objects instead of plain text, which makes chaining commands together far more reliable. It’s also the standard way to script Azure automation outside the Portal, alongside the Azure CLI.',
		el: 'Η γλώσσα scripting και το shell που χρησιμοποιείται για αυτοματοποίηση εργασιών σε περιβάλλοντα Windows και Azure.\n\nΣε αντίθεση με τα παλιά batch scripts των Windows, δουλεύει με δομημένα objects αντί για απλό κείμενο, κάτι που κάνει την αλυσίδα εντολών πολύ πιο αξιόπιστη. Είναι επίσης ο τυπικός τρόπος για automation στο Azure εκτός Portal, μαζί με το Azure CLI.',
	},
	'Pricing Strategy': {
		en: 'Understanding how and why a product is priced the way it is, so you can defend it in a negotiation.\n\nWithout knowing the reasoning behind the price, a rep either caves to every discount request or defends the number with nothing to back it up. Knowing what’s actually included at each tier is what turns "it’s just expensive" into a real conversation about value.',
		el: 'Κατανόηση του πώς και γιατί τιμολογείται ένα προϊόν, ώστε να μπορείς να το υποστηρίξεις σε μια διαπραγμάτευση.\n\nΧωρίς να ξέρεις τη λογική πίσω από την τιμή, ένας πωλητής είτε υποχωρεί σε κάθε αίτημα έκπτωσης είτε υπερασπίζεται τον αριθμό χωρίς επιχειρήματα. Η γνώση του τι περιλαμβάνεται σε κάθε επίπεδο μετατρέπει το «είναι ακριβό» σε πραγματική συζήτηση για την αξία.',
	},
	'Process Mapping': {
		en: 'Drawing out how a workflow actually happens, step by step, so gaps and bottlenecks become visible.\n\nThe real value shows up when you map how a process actually runs, warts and all, instead of the clean version everyone describes from memory. Seeing it on paper is usually what makes an obvious inefficiency finally get noticed and fixed.',
		el: 'Χαρτογράφηση του πώς λειτουργεί πραγματικά μια διαδικασία, βήμα-βήμα, ώστε τα κενά να γίνονται ορατά.\n\nΗ πραγματική αξία φαίνεται όταν χαρτογραφείς πώς η διαδικασία τρέχει στην πραγματικότητα, με όλες τις ατέλειες, όχι την «καθαρή» εκδοχή που όλοι περιγράφουν από μνήμης. Το να το δεις γραμμένο συνήθως κάνει μια προφανή αναποτελεσματικότητα να τη προσέξει επιτέλους κάποιος.',
	},
	'Process Optimization': {
		en: 'Making an existing workflow faster or less error-prone based on what a retrospective revealed.\n\nThe best changes come from a specific, observed pain point — not a generic "let’s be more efficient." Small, incremental tweaks that the team actually sticks with beat a big process overhaul that gets abandoned within a month.',
		el: 'Βελτίωση μιας υπάρχουσας διαδικασίας ώστε να είναι πιο γρήγορη ή λιγότερο επιρρεπής σε λάθη, με βάση τα ευρήματα ενός retrospective.\n\nΟι καλύτερες αλλαγές προέρχονται από ένα συγκεκριμένο, παρατηρημένο πρόβλημα — όχι ένα γενικό «να είμαστε πιο αποδοτικοί». Μικρές, σταδιακές αλλαγές που η ομάδα όντως τηρεί ξεπερνούν μια μεγάλη αναδιάρθρωση που εγκαταλείπεται σε έναν μήνα.',
	},
	'Product Demos': {
		en: "A live walkthrough of the product tailored to what a specific prospect actually cares about.\n\nA demo built off a generic script and shown to everyone the same way tends to lose people the moment it drifts from their actual problem. The strongest demos spend most of the time on the two or three features that map directly to what came up in discovery.",
		el: 'Μια ζωντανή παρουσίαση του προϊόντος, προσαρμοσμένη σε αυτό που πραγματικά ενδιαφέρει τον συγκεκριμένο πελάτη.\n\nΈνα demo χτισμένο σε γενικό σενάριο και δειγμένο με τον ίδιο τρόπο σε όλους συχνά χάνει τον κόσμο τη στιγμή που απομακρύνεται από το πραγματικό τους πρόβλημα. Τα πιο δυνατά demos εστιάζουν στα δύο-τρία features που ταιριάζουν με το discovery.',
	},
	'Product Knowledge': {
		en: 'Knowing what the product actually does, in enough depth to answer questions without checking with someone else.\n\nIt’s the difference between reciting a feature list and actually understanding why a customer would care about it in their specific situation. The fastest way to build it is usually just using the product yourself the way a real customer would.',
		el: 'Γνώση του τι κάνει πραγματικά το προϊόν, σε βάθος τέτοιο ώστε να απαντάς ερωτήσεις χωρίς να ρωτάς κάποιον άλλο.\n\nΕίναι η διαφορά ανάμεσα στο να απαγγέλλεις μια λίστα λειτουργιών και στο να καταλαβαίνεις γιατί θα ενδιαφέρει τον συγκεκριμένο πελάτη στη δική του κατάσταση. Ο πιο γρήγορος τρόπος να το χτίσεις είναι συνήθως να χρησιμοποιήσεις το προϊόν όπως θα το έκανε ένας πραγματικός πελάτης.',
	},
	'Pull Requests': {
		en: 'A formal request to merge your branch into the main codebase, opening it up for review first.\n\nA small, focused pull request gets reviewed fast and thoroughly; a giant one touching fifty files gets a tired skim at best. Writing a clear description of what changed and why saves the reviewer from having to reverse-engineer your intent from the diff alone.',
		el: 'Ένα επίσημο αίτημα να ενσωματωθεί το branch σου στον κύριο κώδικα, ανοίγοντάς το πρώτα για review.\n\nΈνα μικρό, εστιασμένο pull request γίνεται review γρήγορα και σε βάθος· ένα γιγάντιο που αγγίζει πενήντα αρχεία παίρνει στην καλύτερη περίπτωση μια κουρασμένη ματιά. Μια σαφής περιγραφή του τι άλλαξε και γιατί γλιτώνει τον reviewer από το να μαντέψει την πρόθεσή σου.',
	},
	'Quality Reviews': {
		en: 'Periodically checking a sample of resolved tickets to make sure support answers are accurate and on-brand.\n\nIt catches drift — a rep who’s picked up a bad habit, or an answer that was correct last year but is now outdated. It works best framed as coaching, not a gotcha, or people start writing for the reviewer instead of the customer.',
		el: 'Περιοδικός έλεγχος δείγματος επιλυμένων tickets, για να βεβαιωθείς ότι οι απαντήσεις είναι σωστές και συνεπείς.\n\nΠιάνει την απόκλιση — έναν agent που απέκτησε κακή συνήθεια, ή μια απάντηση που ήταν σωστή πέρυσι αλλά τώρα είναι ξεπερασμένη. Δουλεύει καλύτερα ως coaching, όχι ως «σε έπιασα», αλλιώς ο κόσμος γράφει για τον reviewer αντί για τον πελάτη.',
	},
	'Query Tuning': {
		en: 'Rewriting a slow SQL query — or adding the right index — so it runs in milliseconds instead of seconds.\n\nThe execution plan is the map that shows what the database is actually doing under the hood, and reading it is what separates a guess from a real fix. A query that’s fine on a small dev database can fall apart completely once it hits production-scale data.',
		el: 'Επανασχεδιασμός ενός αργού SQL query — ή προσθήκη του σωστού index — ώστε να τρέχει σε milliseconds αντί για δευτερόλεπτα.\n\nΤο execution plan είναι ο χάρτης που δείχνει τι κάνει πραγματικά η βάση από κάτω, και η ανάγνωσή του ξεχωρίζει μια πραγματική διόρθωση από μια μαντεψιά. Ένα query που είναι μια χαρά σε μικρή dev βάση μπορεί να καταρρεύσει σε πραγματικό όγκο δεδομένων.',
	},
	'Quota Tracking': {
		en: 'Monitoring how close a sales rep is to their target for the period, and what’s left to hit it.\n\nIt turns a vague monthly goal into a concrete daily question — how much pipeline needs to close this week to stay on pace. Falling behind early and only noticing at the end of the period is the most common way a quota gets missed.',
		el: 'Παρακολούθηση του πόσο κοντά είναι ένας πωλητής στον στόχο του για την περίοδο, και τι απομένει για να τον πετύχει.\n\nΜετατρέπει έναν ασαφή μηνιαίο στόχο σε συγκεκριμένη καθημερινή ερώτηση — πόσο πρέπει να κλείσει αυτή την εβδομάδα για να είναι εντάξει. Το να καθυστερήσεις νωρίς και να το προσέξεις μόνο στο τέλος είναι ο πιο συνηθισμένος τρόπος να χάσεις τον στόχο.',
	},
	RBAC: {
		en: 'Role-Based Access Control — granting permissions based on a user’s role instead of one by one.\n\nInstead of individually deciding what each new hire can access, you assign them a role and they inherit exactly what that role needs — nothing more. It also makes offboarding and audits far simpler, since permissions live on the role, not scattered across individual accounts.',
		el: 'Role-Based Access Control — παραχώρηση δικαιωμάτων βάσει του ρόλου ενός χρήστη, αντί ένα-ένα.\n\nΑντί να αποφασίζεις μεμονωμένα τι μπορεί να δει κάθε νεοεισερχόμενος, του αναθέτεις έναν ρόλο και κληρονομεί ακριβώς όσα χρειάζεται αυτός ο ρόλος — τίποτα παραπάνω. Κάνει επίσης το offboarding και τα audits πολύ πιο απλά.',
	},
	'REST APIs': {
		en: 'The most common style of web API, using standard HTTP methods to create, read, update, and delete data.\n\nBecause it reuses the same HTTP verbs and status codes every web browser already speaks, most developers can start using a new REST API without much explanation. Consistency across endpoints — using the same patterns for similar resources — is what separates a REST API that’s pleasant to use from one that feels random.',
		el: 'Το πιο συνηθισμένο στυλ web API, που χρησιμοποιεί τυπικές μεθόδους HTTP για δημιουργία, ανάγνωση, ενημέρωση και διαγραφή δεδομένων.\n\nΕπειδή επαναχρησιμοποιεί τα ίδια HTTP verbs και status codes που ήδη μιλά κάθε browser, οι περισσότεροι developers μπορούν να χρησιμοποιήσουν ένα νέο REST API χωρίς πολλή εξήγηση. Η συνέπεια ανάμεσα σε endpoints είναι αυτό που ξεχωρίζει ένα ευχάριστο API από ένα τυχαίο.',
	},
	Refactoring: {
		en: 'Improving how code is written internally without changing what it actually does from the outside.\n\nIt only counts as refactoring if the behavior stays identical — if functionality changes, that’s a feature or a fix, not a refactor. Having good test coverage beforehand is what makes refactoring safe instead of a leap of faith.',
		el: 'Βελτίωση του τρόπου που είναι γραμμένος ο κώδικας εσωτερικά, χωρίς να αλλάζει αυτό που κάνει εξωτερικά.\n\nΜετράει ως refactoring μόνο αν η συμπεριφορά παραμένει ίδια — αν αλλάζει η λειτουργία, είναι feature ή fix, όχι refactor. Η καλή κάλυψη από tests πριν το κάνει ασφαλές, αντί για άλμα πίστης.',
	},
	'Regression Testing': {
		en: 'Re-running old tests after a change to make sure something that used to work didn’t just break.\n\nIt’s the safety net that catches "fixing bug A quietly broke feature B," which is one of the most common ways a small change causes an unrelated outage. Automating it is what makes running the full suite after every change actually practical.',
		el: 'Επανάληψη παλιών tests μετά από μια αλλαγή, για να βεβαιωθείς ότι κάτι που δούλευε δεν χάλασε.\n\nΕίναι το δίχτυ ασφαλείας που πιάνει το «διορθώνοντας το bug A χάλασε σιωπηλά το feature B», ένας από τους πιο συνηθισμένους τρόπους που μια μικρή αλλαγή προκαλεί άσχετο πρόβλημα. Η αυτοματοποίησή του κάνει εφικτό να τρέχει η πλήρης σουίτα σε κάθε αλλαγή.',
	},
	'Relational Data': {
		en: 'Data organized into tables with defined relationships between them — the classic SQL database model.\n\nEach table has a strict schema — every row has the same columns — and relationships between tables (like a customer to their orders) are enforced by the database itself. That structure is what makes it possible to trust that the data is internally consistent, at the cost of being less flexible when the shape of your data changes.',
		el: 'Δεδομένα οργανωμένα σε πίνακες με καθορισμένες σχέσεις μεταξύ τους — το κλασικό μοντέλο βάσης δεδομένων SQL.\n\nΚάθε πίνακας έχει αυστηρό schema — κάθε γραμμή έχει τις ίδιες στήλες — και οι σχέσεις μεταξύ πινάκων επιβάλλονται από την ίδια τη βάση. Αυτή η δομή είναι που εγγυάται εσωτερική συνέπεια, με κόστος τη λιγότερη ευελιξία όταν αλλάζει η μορφή των δεδομένων.',
	},
	'Release Notes': {
		en: 'The public summary of what changed in a new release — your cheat sheet for what customers will ask about.\n\nA good release note tells customers what changed and why it matters to them, not just an internal changelog entry copy-pasted verbatim. Reading them before a release ships is the fastest way for support to get ahead of the questions that follow.',
		el: 'Η δημόσια σύνοψη του τι άλλαξε σε μια νέα έκδοση — το «σημείωμα» σου για ό,τι θα ρωτήσουν οι πελάτες.\n\nΈνα καλό release note λέει στους πελάτες τι άλλαξε και γιατί έχει σημασία γι’ αυτούς, όχι απλά ένα εσωτερικό changelog αντιγραμμένο αυτολεξεί. Η ανάγνωσή τους πριν την κυκλοφορία είναι ο πιο γρήγορος τρόπος για το support να προλάβει τις ερωτήσεις.',
	},
	'Release Pipelines': {
		en: 'The automated sequence that takes a build through testing environments and out to production.\n\nEach stage — dev, staging, production — is a checkpoint that catches problems before they reach real users, so nothing skips straight from a laptop to production. A pipeline that lets a human manually push a broken build past a failed stage defeats most of the point of having one.',
		el: 'Η αυτοματοποιημένη ακολουθία που περνάει ένα build από περιβάλλοντα δοκιμών μέχρι το production.\n\nΚάθε στάδιο — dev, staging, production — είναι ένα σημείο ελέγχου που πιάνει προβλήματα πριν φτάσουν σε πραγματικούς χρήστες. Ένα pipeline που επιτρέπει να προσπεράσεις χειροκίνητα ένα αποτυχημένο στάδιο αναιρεί τον σκοπό του.',
	},
	'Release Sign-off': {
		en: 'The formal go-ahead from QA confirming a release meets the bar to ship.\n\nIt exists so shipping a release is a deliberate decision backed by test results, not just "it’s Friday, let’s ship it." Skipping sign-off under deadline pressure is one of the most common ways a preventable bug reaches production.',
		el: 'Η επίσημη έγκριση από το QA ότι μια έκδοση πληροί τα κριτήρια για να κυκλοφορήσει.\n\nΥπάρχει ώστε η κυκλοφορία μιας έκδοσης να είναι συνειδητή απόφαση με βάση αποτελέσματα tests, όχι απλά «είναι Παρασκευή, ας το βγάλουμε». Το να παραλείψεις το sign-off υπό πίεση προθεσμίας είναι συνήθης τρόπος να φτάσει ένα αποφευκτό bug στο production.',
	},
	Renewals: {
		en: "Getting an existing customer to renew their subscription or contract instead of churning.\n\nThe conversation should start well before the renewal date, not the week it's due — a surprised customer at the deadline is a warning sign something was missed earlier. Usage data is the best early indicator here: a customer who's barely logging in is at real risk, whatever the contract says.",
		el: 'Διασφάλιση ότι ένας υπάρχων πελάτης θα ανανεώσει τη συνδρομή ή το συμβόλαιό του αντί να φύγει.\n\nΗ συζήτηση πρέπει να ξεκινά πολύ πριν την ημερομηνία ανανέωσης, όχι την εβδομάδα που λήγει — ένας ξαφνιασμένος πελάτης στη λήξη είναι προειδοποίηση ότι κάτι χάθηκε νωρίτερα. Τα δεδομένα χρήσης είναι ο καλύτερος πρώιμος δείκτης — ένας πελάτης που σχεδόν δεν συνδέεται κινδυνεύει πραγματικά.',
	},
	'Reproducing Bugs': {
		en: 'Recreating the exact steps that trigger a bug — the single most useful thing you can hand engineering.\n\nA bug that can be reproduced on demand is halfway to being fixed; one that only happens "sometimes" for reasons nobody can pin down can eat days of engineering time. Noting the environment, browser, and exact sequence of actions is what turns "it’s broken" into something actionable.',
		el: 'Αναπαραγωγή των ακριβών βημάτων που προκαλούν ένα bug — το πιο χρήσιμο πράγμα που μπορείς να δώσεις στο engineering.\n\nΈνα bug που αναπαράγεται στο βούλευμα είναι στα μισά προς τη διόρθωση· ένα που συμβαίνει «κάπου-κάπου» για λόγους που κανείς δεν εντοπίζει μπορεί να φάει μέρες από το engineering. Η καταγραφή περιβάλλοντος, browser και ακριβούς σειράς ενεργειών μετατρέπει το «χάλασε» σε κάτι αξιοποιήσιμο.',
	},
	'Reproduction Steps': {
		en: 'The precise, ordered instructions that let anyone else trigger the bug you found.\n\nVague steps like "go to settings and it breaks" force the next person to redo your entire investigation from scratch. Numbered steps with exact clicks and inputs mean anyone — not just you — can confirm the bug and later confirm the fix.',
		el: 'Οι ακριβείς, σε σειρά οδηγίες που επιτρέπουν σε οποιονδήποτε άλλον να προκαλέσει το bug που βρήκες.\n\nΑσαφή βήματα όπως «πήγαινε στις ρυθμίσεις και χαλάει» αναγκάζουν τον επόμενο να ξανακάνει όλη την έρευνά σου από την αρχή. Αριθμημένα βήματα με ακριβή κλικ και δεδομένα σημαίνουν ότι οποιοσδήποτε μπορεί να επιβεβαιώσει το bug και μετά τη διόρθωση.',
	},
	'Request Validation': {
		en: 'Checking that an API request has the right shape and data before the system acts on it.\n\nWithout it, a malformed or malicious request can crash the app or corrupt data instead of getting a clean, immediate error back. Validating at the edge, before the request reaches business logic, keeps errors clear and keeps bad data out of the database entirely.',
		el: 'Έλεγχος ότι ένα API request έχει τη σωστή μορφή και δεδομένα, πριν το σύστημα ενεργήσει βάσει αυτού.\n\nΧωρίς αυτό, ένα κακοσχηματισμένο ή κακόβουλο request μπορεί να ρίξει την εφαρμογή ή να αλλοιώσει δεδομένα, αντί να πάρει πίσω ένα καθαρό, άμεσο σφάλμα. Ο έλεγχος στην άκρη, πριν φτάσει το request στη business logic, κρατά τα λάθη σαφή και τη βάση καθαρή.',
	},
	'Resolution Time': {
		en: 'How long it takes to fully close a ticket, from first contact to confirmed fix.\n\nIt’s different from response time — a ticket can get a fast first reply and still take days to actually resolve if it needs engineering input. Tracking it by issue type shows you where the process itself, not individual effort, is the actual bottleneck.',
		el: 'Πόσος χρόνος χρειάζεται για να κλείσει πλήρως ένα ticket, από την πρώτη επαφή μέχρι την επιβεβαιωμένη λύση.\n\nΕίναι διαφορετικό από τον χρόνο απόκρισης — ένα ticket μπορεί να πάρει γρήγορη πρώτη απάντηση και να χρειαστεί μέρες για να λυθεί πραγματικά αν χρειάζεται engineering. Η παρακολούθησή του ανά τύπο ζητήματος δείχνει πού η ίδια η διαδικασία είναι το bottleneck.',
	},
	'Resource Governance': {
		en: "Policies and structure that keep cloud resources organized, tagged, and under control as they multiply.\n\nWithout naming conventions and tags, a cloud account after a year of growth turns into hundreds of resources nobody can confidently say are safe to delete. Governance is what makes it possible to answer 'who owns this and can we turn it off' without guessing.",
		el: 'Πολιτικές και δομή που κρατούν τους πόρους cloud οργανωμένους, με σωστά tags και υπό έλεγχο καθώς πολλαπλασιάζονται.\n\nΧωρίς συμβάσεις ονομασίας και tags, ένας λογαριασμός cloud μετά από έναν χρόνο ανάπτυξης γίνεται εκατοντάδες πόρους που κανείς δεν είναι σίγουρος αν είναι ασφαλές να σβήσει. Η governance είναι αυτό που επιτρέπει να απαντήσεις «ποιος είναι υπεύθυνος» χωρίς να μαντεύεις.',
	},
	'Response Time': {
		en: 'How quickly a customer hears back after opening a ticket — often the first thing they judge you on.\n\nEven a quick "we got your message, looking into it" buys a lot of patience compared to total silence, even before the actual issue is solved. Teams often measure it separately from resolution time precisely because the two get judged so differently by customers.',
		el: 'Πόσο γρήγορα παίρνει απάντηση ένας πελάτης μετά το άνοιγμα ενός ticket — συχνά το πρώτο πράγμα που κρίνουν.\n\nΈνα σύντομο «το είδαμε, το κοιτάμε» χαρίζει πολλή υπομονή σε σχέση με πλήρη σιωπή, ακόμα και πριν λυθεί το ίδιο το πρόβλημα. Οι ομάδες συχνά τον μετρούν ξεχωριστά από τον χρόνο επίλυσης, γιατί οι πελάτες τους κρίνουν πολύ διαφορετικά.',
	},
	Retention: {
		en: "Keeping existing customers instead of losing them to churn — often cheaper than winning new ones.\n\nAcquiring a new customer typically costs far more than keeping one you already have happy, which is why retention gets so much attention even after the deal is signed. It's rarely one big thing that causes churn — usually it's a slow buildup of small friction nobody addressed.",
		el: 'Διατήρηση υπαρχόντων πελατών αντί να χαθούν — συνήθως φθηνότερο από την απόκτηση νέων.\n\nΗ απόκτηση νέου πελάτη συνήθως κοστίζει πολύ περισσότερο από τη διατήρηση ενός ήδη ικανοποιημένου, γι’ αυτό η retention προσέχεται τόσο και μετά την υπογραφή. Σπάνια είναι ένα μεγάλο πράγμα που προκαλεί churn — συνήθως είναι μια αργή συσσώρευση μικρής τριβής που κανείς δεν αντιμετώπισε.',
	},
	Retrospectives: {
		en: 'A recurring team meeting to look back at recent work and agree on what to change going forward.\n\nIt only works if people feel safe being honest — a retro where nobody says anything critical is basically a wasted hour. The follow-through matters more than the meeting itself: an action item that nobody actually does just makes the next retrospective feel pointless too.',
		el: 'Μια επαναλαμβανόμενη συνάντηση ομάδας για να δείτε πίσω στην πρόσφατη δουλειά και να συμφωνήσετε τι θα αλλάξει.\n\nΔουλεύει μόνο αν ο κόσμος νιώθει ασφαλής να είναι ειλικρινής — ένα retro όπου κανείς δεν λέει τίποτα κριτικό είναι στην ουσία χαμένη ώρα. Η υλοποίηση μετράει περισσότερο από τη συνάντηση — ένα action item που κανείς δεν κάνει κάνει και το επόμενο retro να φαίνεται άχρηστο.',
	},
	Rollbacks: {
		en: 'Reverting to the previous working version of an app fast, when a new deployment causes problems.\n\nSpeed is the whole point — the faster you can get back to a known-good state, the shorter the outage. A deployment process that doesn’t support an easy rollback turns every release into a much bigger risk than it needs to be.',
		el: 'Γρήγορη επαναφορά στην προηγούμενη λειτουργική έκδοση μιας εφαρμογής, όταν ένα νέο deployment προκαλεί προβλήματα.\n\nΗ ταχύτητα είναι το ζητούμενο — όσο πιο γρήγορα γυρίσεις σε γνωστή καλή κατάσταση, τόσο πιο σύντομο το outage. Μια διαδικασία deployment που δεν υποστηρίζει εύκολο rollback κάνει κάθε release πολύ μεγαλύτερο ρίσκο.',
	},
	'Root Cause Analysis': {
		en: 'Digging past the symptom to find the actual underlying reason something went wrong.\n\nFixing the symptom — restarting the service, clearing the queue — buys time but the same incident just comes back later if the actual cause never gets found. Asking "why" a few times in a row past the obvious answer is usually what gets you there.',
		el: 'Αναζήτηση πέρα από το σύμπτωμα, για να βρεθεί η πραγματική υποκείμενη αιτία ενός προβλήματος.\n\nΤο να διορθώσεις το σύμπτωμα — restart, άδειασμα ουράς — κερδίζει χρόνο, αλλά το ίδιο incident απλά ξανασυμβαίνει αν δεν βρεθεί η πραγματική αιτία. Το να ρωτήσεις «γιατί» μερικές φορές πέρα από την προφανή απάντηση συνήθως σε φέρνει εκεί.',
	},
	Runbooks: {
		en: 'Step-by-step written instructions for handling a specific, recurring operational task or incident.\n\nA good runbook means whoever’s on call — not just the person who wrote it — can handle the incident calmly at 3am instead of improvising from memory. It only stays useful if someone updates it after the system it describes changes.',
		el: 'Γραπτές οδηγίες βήμα-βήμα για τον χειρισμό μιας συγκεκριμένης, επαναλαμβανόμενης εργασίας ή incident.\n\nΈνα καλό runbook σημαίνει ότι όποιος είναι on-call — όχι μόνο ο συγγραφέας — μπορεί να χειριστεί ένα incident στις 3 το πρωί χωρίς αυτοσχεδιασμό. Παραμένει χρήσιμο μόνο αν κάποιος το ενημερώνει όταν αλλάζει το σύστημα που περιγράφει.',
	},
	SDLC: {
		en: 'Software Development Lifecycle — the stages software moves through from idea to release to maintenance.\n\nKnowing the stages by name helps you place where a given task actually sits — a bug found in testing is a very different conversation than the same bug found in production. Most of a piece of software’s life is spent in maintenance, well after the "exciting" build stage everyone thinks of first.',
		el: 'Software Development Lifecycle — τα στάδια από τα οποία περνάει το λογισμικό, από την ιδέα μέχρι την κυκλοφορία και τη συντήρηση.\n\nΗ γνώση των σταδίων με το όνομά τους βοηθά να τοποθετήσεις πού βρίσκεται μια εργασία — ένα bug στο testing είναι πολύ διαφορετική συζήτηση από το ίδιο bug στο production. Το μεγαλύτερο μέρος της ζωής ενός λογισμικού είναι στη συντήρηση, πολύ μετά το «συναρπαστικό» στάδιο ανάπτυξης.',
	},
	SLAs: {
		en: 'Service Level Agreements — the promised response or resolution times a team is measured against.\n\nThey turn a vague promise of "good support" into a specific, checkable number a customer can hold you to. Missing an SLA repeatedly is often a signal the team needs more staffing or a process fix, not just individuals trying harder.',
		el: 'Service Level Agreements — οι υποσχόμενοι χρόνοι απόκρισης ή επίλυσης βάσει των οποίων αξιολογείται μια ομάδα.\n\nΜετατρέπουν μια ασαφή υπόσχεση «καλού support» σε συγκεκριμένο, ελεγχόμενο αριθμό που μπορεί να επικαλεστεί ο πελάτης. Το να χάνεις επανειλημμένα ένα SLA συχνά σημαίνει ότι η ομάδα χρειάζεται περισσότερο προσωπικό, όχι απλά μεγαλύτερη προσπάθεια.',
	},
	SOPs: {
		en: 'Standard Operating Procedures — written, repeatable instructions for doing a task the same way every time.\n\nThey’re what makes a task not depend on one specific person remembering all the details correctly. When something goes wrong doing a task the "normal" way, the first question is usually whether the SOP was followed or whether it needs updating.',
		el: 'Standard Operating Procedures — γραπτές, επαναλήψιμες οδηγίες για να γίνεται μια εργασία με τον ίδιο τρόπο κάθε φορά.\n\nΚάνουν μια εργασία να μην εξαρτάται από το να θυμάται ένα συγκεκριμένο άτομο σωστά όλες τις λεπτομέρειες. Όταν κάτι πάει στραβά κάνοντας μια εργασία με τον «κανονικό» τρόπο, το πρώτο ερώτημα είναι αν τηρήθηκε το SOP ή αν χρειάζεται ενημέρωση.',
	},
	'SQL Basics': {
		en: 'The fundamental commands for querying and manipulating data in a relational database.\n\nSELECT, INSERT, UPDATE, and DELETE cover the vast majority of what you’ll actually write day to day, well before you need anything fancy. Getting comfortable with WHERE clauses and basic joins early makes almost everything else in a DBA or dev role easier to pick up.',
		el: 'Οι βασικές εντολές για αναζήτηση και επεξεργασία δεδομένων σε μια σχεσιακή βάση δεδομένων.\n\nΤα SELECT, INSERT, UPDATE και DELETE καλύπτουν τη μεγάλη πλειοψηφία όσων θα γράφεις καθημερινά, πολύ πριν χρειαστείς κάτι πιο σύνθετο. Η εξοικείωση με WHERE και βασικά joins νωρίς κάνει σχεδόν όλα τα υπόλοιπα πιο εύκολα.',
	},
	'SQL Server': {
		en: "Microsoft's relational database engine — the software a DBA spends most of their time actually administering.\n\nBeyond just running queries, a DBA's real job is keeping it healthy — backups actually restoring, performance not degrading, permissions staying tight. Most day-to-day DBA work happens through SSMS or T-SQL scripts, not the graphical setup wizards.",
		el: 'Η σχεσιακή μηχανή βάσης δεδομένων της Microsoft — το λογισμικό που διαχειρίζεται κυρίως ένας DBA.\n\nΠέρα από το τρέξιμο queries, η πραγματική δουλειά ενός DBA είναι να το κρατά υγιές — backups που όντως κάνουν restore, απόδοση που δεν χειροτερεύει, δικαιώματα που παραμένουν αυστηρά. Η καθημερινή δουλειά γίνεται κυρίως μέσω SSMS ή T-SQL scripts.',
	},
	SSMS: {
		en: "SQL Server Management Studio — the primary desktop tool for writing queries and administering SQL Server.\n\nIt's where most of a DBA's day actually happens — running queries, checking execution plans, managing backups and permissions all from one interface. Getting fast with its keyboard shortcuts and execution plan viewer pays off constantly once you're using it daily.",
		el: 'SQL Server Management Studio — το βασικό εργαλείο desktop για query και διαχείριση SQL Server.\n\nΕκεί γίνεται το μεγαλύτερο μέρος της καθημερινής δουλειάς ενός DBA — queries, execution plans, backups και δικαιώματα, όλα από μία διεπαφή. Η εξοικείωση με τα shortcuts και το execution plan viewer αποδίδει συνεχώς μόλις το χρησιμοποιείς καθημερινά.',
	},
	SaaS: {
		en: 'Software as a Service — fully managed software you access over the web, no installation or upkeep required.\n\nYou log in and use it, and the provider handles hosting, updates, and scaling entirely behind the scenes. It’s the "least control, least responsibility" end of the cloud spectrum — great for speed, but you’re fully dependent on the vendor’s uptime and roadmap.',
		el: 'Software as a Service — πλήρως διαχειριζόμενο λογισμικό στο οποίο έχεις πρόσβαση μέσω web, χωρίς εγκατάσταση ή συντήρηση.\n\nΣυνδέεσαι και το χρησιμοποιείς, και ο πάροχος αναλαμβάνει hosting, updates και scaling εντελώς από πίσω. Είναι το άκρο «λιγότερος έλεγχος, λιγότερη ευθύνη» — ιδανικό για ταχύτητα, αλλά εξαρτάσαι πλήρως από τον πάροχο.',
	},
	'Sandbox Environments': {
		en: 'Safe, isolated spaces to practice and break things without any risk to real systems.\n\nIt’s where you’re supposed to click the scary button and see what happens, because nothing there is connected to a real customer or real data. If your only environment is production, everyone naturally becomes too cautious to actually learn by doing.',
		el: 'Ασφαλείς, απομονωμένοι χώροι για εξάσκηση χωρίς κανέναν κίνδυνο για πραγματικά συστήματα.\n\nΕκεί είναι που πρέπει να πατήσεις το τρομακτικό κουμπί και να δεις τι γίνεται, γιατί τίποτα δεν είναι συνδεδεμένο με πραγματικό πελάτη ή δεδομένα. Αν το μόνο περιβάλλον σου είναι το production, όλοι φυσικά γίνονται πολύ προσεκτικοί για να μάθουν κάνοντας.',
	},
	'Scheduled Tasks': {
		en: 'Jobs configured to run automatically on a timer, instead of someone remembering to trigger them manually.\n\nAnything that needs to happen "every night at 2am" or "every Monday morning" belongs here, not on a human’s to-do list. A silent failure is the real risk — a scheduled job that stops running with no alert can go unnoticed for weeks.',
		el: 'Εργασίες ρυθμισμένες να τρέχουν αυτόματα σε χρονοπρογραμματισμό, αντί να τις θυμάται κάποιος να τις εκτελεί χειροκίνητα.\n\nΟτιδήποτε πρέπει να συμβαίνει «κάθε βράδυ στις 2» ή «κάθε Δευτέρα πρωί» ανήκει εδώ, όχι στη λίστα εργασιών κάποιου ανθρώπου. Ο πραγματικός κίνδυνος είναι η σιωπηλή αποτυχία — μια εργασία που σταματά χωρίς alert μπορεί να περάσει απαρατήρητη για εβδομάδες.',
	},
	'Security & RBAC': {
		en: 'Controlling exactly who can access or change a database, down to specific tables and actions.\n\nThe principle of least privilege applies directly here — an application account should be able to do exactly what it needs and nothing more, not sit on admin rights out of convenience. A leaked connection string with overly broad permissions turns a minor mistake into a major breach.',
		el: 'Έλεγχος του ποιος μπορεί να έχει πρόσβαση ή να αλλάξει μια βάση δεδομένων, μέχρι το επίπεδο συγκεκριμένων πινάκων.\n\nΗ αρχή του ελάχιστου δικαιώματος ισχύει εδώ ακριβώς — ένας λογαριασμός εφαρμογής πρέπει να μπορεί να κάνει μόνο ό,τι χρειάζεται, όχι να έχει admin δικαιώματα για ευκολία. Ένα διαρρεύσαν connection string με υπερβολικά δικαιώματα μετατρέπει ένα μικρό λάθος σε σοβαρή παραβίαση.',
	},
	Selenium: {
		en: 'A widely used framework for automating browser actions to test web applications.\n\nIt drives a real browser — clicking, typing, navigating — the same way a human would, which is why it can catch problems a unit test never touches. The tradeoff is that browser tests are slower and more brittle than unit tests, so most teams use them for critical flows rather than everything.',
		el: 'Ένα ευρέως χρησιμοποιούμενο framework για αυτοματοποίηση ενεργειών browser κατά το testing web εφαρμογών.\n\nΟδηγεί έναν πραγματικό browser — κλικ, πληκτρολόγηση, πλοήγηση — όπως θα το έκανε άνθρωπος, γι’ αυτό πιάνει προβλήματα που ένα unit test δεν αγγίζει ποτέ. Το κόστος είναι ότι είναι πιο αργά και ασταθή από unit tests, οπότε οι ομάδες τα χρησιμοποιούν για κρίσιμα flows.',
	},
	'Severity Levels': {
		en: 'A shared scale for rating how bad a ticket or bug actually is, so priority isn’t just a guess.\n\nHaving agreed definitions — what actually counts as "critical" versus "minor" — stops every reporter from calling their own issue the worst one ever. It’s the shared language that lets triage actually be consistent across different people reporting different bugs.',
		el: 'Μια κοινή κλίμακα για την αξιολόγηση του πόσο σοβαρό είναι ένα ticket ή bug, ώστε η προτεραιότητα να μην είναι τυχαία.\n\nΟι κοινά αποδεκτοί ορισμοί — τι μετράει πραγματικά ως «critical» έναντι «minor» — εμποδίζουν τον καθένα να θεωρεί το δικό του πρόβλημα το χειρότερο όλων. Είναι το κοινό λεξιλόγιο που κάνει το triage συνεπές.',
	},
	'Severity vs Priority': {
		en: 'Knowing that how bad a bug is (severity) and how soon it must be fixed (priority) aren’t always the same thing.\n\nA critical bug that only affects one obscure feature used by nobody might be low priority, while a cosmetic bug on the login page everyone sees might jump the queue. Confusing the two is a common way teams end up fixing the wrong thing first.',
		el: 'Κατανόηση ότι το πόσο σοβαρό είναι ένα bug (severity) και το πόσο σύντομα πρέπει να διορθωθεί (priority) δεν είναι πάντα το ίδιο.\n\nΈνα critical bug που αγγίζει μόνο ένα ασήμαντο feature μπορεί να έχει χαμηλή priority, ενώ ένα κοσμητικό bug στη σελίδα login που βλέπουν όλοι μπορεί να προσπεράσει την ουρά. Η σύγχυση των δύο κάνει τις ομάδες να διορθώνουν λάθος πράγμα πρώτα.',
	},
	'Single Sign-On': {
		en: 'Logging in once to access every connected company system, instead of a separate password for each.\n\nBesides the daily convenience, it’s a real security win — turning off one account instantly cuts access everywhere, instead of chasing down five separate passwords when someone leaves. It also means a single compromised login is a bigger deal, so it’s usually paired with strong multi-factor authentication.',
		el: 'Μία σύνδεση για πρόσβαση σε όλα τα συνδεδεμένα συστήματα της εταιρείας, αντί για ξεχωριστό κωδικό για το καθένα.\n\nΕκτός από την καθημερινή ευκολία, είναι πραγματικό κέρδος ασφάλειας — το κλείσιμο ενός λογαριασμού κόβει αμέσως την πρόσβαση παντού. Σημαίνει επίσης ότι μια παραβιασμένη σύνδεση έχει μεγαλύτερη σημασία, γι’ αυτό συνήθως συνοδεύεται από ισχυρό multi-factor.',
	},
	'Smoke Tests': {
		en: 'A quick set of checks confirming the most critical paths work before running the full test suite.\n\nThe idea is borrowed from hardware testing — plug it in and see if it smokes before you bother with anything more detailed. If a smoke test fails, there’s no point running the full suite; something fundamental is already broken.',
		el: 'Ένα σύντομο σύνολο ελέγχων που επιβεβαιώνει ότι λειτουργούν οι πιο κρίσιμες λειτουργίες, πριν τρέξει η πλήρης σουίτα tests.\n\nΗ ιδέα δανείζεται από το testing hardware — το βάζεις στην πρίζα και βλέπεις αν βγάζει καπνό πριν ασχοληθείς με κάτι πιο λεπτομερές. Αν αποτύχει ένα smoke test, δεν έχει νόημα να τρέξεις την πλήρη σουίτα.',
	},
	'Stakeholder Updates': {
		en: 'Keeping the people who care about an issue informed, even when there’s nothing new to report yet.\n\n"Still investigating, next update in an hour" is a real update — it tells people you haven’t forgotten about them. Silence during an ongoing issue is what makes stakeholders start pinging you individually, which just slows down the actual work.',
		el: 'Ενημέρωση των ανθρώπων που ενδιαφέρονται για ένα ζήτημα, ακόμα κι όταν δεν υπάρχει κάτι νέο να αναφερθεί.\n\nΤο «ακόμα το ερευνούμε, επόμενη ενημέρωση σε μία ώρα» είναι πραγματική ενημέρωση — λέει στον κόσμο ότι δεν τον έχεις ξεχάσει. Η σιωπή κάνει τους ενδιαφερόμενους να στέλνουν μηνύματα μεμονωμένα, κάτι που καθυστερεί την ίδια τη δουλειά.',
	},
	'Status Codes': {
		en: "The three-digit numbers an API returns (like 200 or 404) that tell you what actually happened to your request.\n\nThe first digit tells the whole story at a glance: 2xx means it worked, 4xx means you asked for something wrong, 5xx means the server itself broke. Returning a 200 for a request that actually failed is a common mistake that makes debugging much harder for whoever calls that API.",
		el: 'Οι τριψήφιοι αριθμοί που επιστρέφει ένα API (όπως 200 ή 404) και δείχνουν τι πραγματικά συνέβη στο αίτημά σου.\n\nΤο πρώτο ψηφίο λέει την ιστορία με μια ματιά: 2xx σημαίνει επιτυχία, 4xx σημαίνει λάθος αίτημα, 5xx σημαίνει ότι έσπασε ο ίδιος ο server. Το να επιστρέφεις 200 για αίτημα που στην πραγματικότητα αποτυχία δυσκολεύει πολύ το debugging για όποιον καλεί αυτό το API.',
	},
	'Status Reporting': {
		en: 'Communicating where things stand clearly and regularly, so nobody has to ask.\n\nGood status reporting anticipates the question people are about to ask and answers it before they type it. A report full of jargon that only the writer understands isn’t really reporting — it’s just noise with a timestamp on it.',
		el: 'Σαφής και τακτική ενημέρωση για την πορεία των πραγμάτων, ώστε κανείς να μη χρειάζεται να ρωτήσει.\n\nΜια καλή ενημέρωση προβλέπει την ερώτηση που πρόκειται να κάνει κάποιος και την απαντά πριν τη γράψει. Μια αναφορά γεμάτη τεχνική ορολογία που καταλαβαίνει μόνο ο συγγραφέας δεν είναι πραγματική ενημέρωση.',
	},
	'Stored Procedures': {
		en: 'Reusable, precompiled blocks of SQL saved in the database for consistent, faster execution.\n\nBecause the logic lives in one place inside the database, different applications can call the same procedure and always get the same behavior instead of each reimplementing the query slightly differently. The tradeoff is that business logic split between application code and the database can get harder to trace when debugging.',
		el: 'Επαναχρησιμοποιήσιμα, προμεταγλωττισμένα κομμάτια SQL αποθηκευμένα στη βάση για συνεπή, ταχύτερη εκτέλεση.\n\nΕπειδή η λογική ζει σε ένα μέρος μέσα στη βάση, διαφορετικές εφαρμογές μπορούν να καλούν την ίδια διαδικασία και να παίρνουν πάντα την ίδια συμπεριφορά. Το κόστος είναι ότι η λογική μοιρασμένη ανάμεσα σε κώδικα και βάση γίνεται πιο δύσκολο να εντοπιστεί κατά το debugging.',
	},
	Subnets: {
		en: 'Smaller, logically divided sections of a larger network, used to organize and isolate resources.\n\nPutting a database in a subnet that only your app servers can reach, separate from a public-facing web subnet, is a basic but effective security boundary. Getting the sizing and address ranges right up front avoids painful re-architecting later once you run out of addresses.',
		el: 'Μικρότερα, λογικά διαχωρισμένα τμήματα ενός μεγαλύτερου δικτύου, που χρησιμοποιούνται για οργάνωση και απομόνωση πόρων.\n\nΤο να βάλεις μια βάση σε subnet που μόνο οι app servers φτάνουν, ξεχωριστό από ένα δημόσιο web subnet, είναι βασικό αλλά αποτελεσματικό όριο ασφάλειας. Το σωστό μέγεθος εξ αρχής αποφεύγει επαναρχιτεκτονική αργότερα.',
	},
	'T-SQL': {
		en: "Microsoft's extended SQL dialect used to write and run queries against SQL Server and Azure SQL.\n\nIt adds procedural features on top of standard SQL — variables, loops, error handling — that let you write real logic, not just single queries. Most stored procedures, triggers, and maintenance scripts on SQL Server are written in it.",
		el: 'Η επεκταμένη διάλεκτος SQL της Microsoft, που χρησιμοποιείται για queries σε SQL Server και Azure SQL.\n\nΠροσθέτει διαδικαστικά χαρακτηριστικά πάνω από το standard SQL — μεταβλητές, loops, χειρισμό σφαλμάτων — που επιτρέπουν πραγματική λογική, όχι μόνο queries. Οι περισσότερες stored procedures και scripts συντήρησης γράφονται σε αυτή.',
	},
	'Target Market': {
		en: 'The specific type of customer a product is actually built and priced for.\n\nKnowing it keeps sales and marketing pointed at the accounts most likely to actually buy and stay, instead of chasing every lead that shows any interest. Selling to someone clearly outside the target market often leads to a customer who churns fast because the fit was never really there.',
		el: 'Ο συγκεκριμένος τύπος πελάτη για τον οποίο έχει φτιαχτεί και τιμολογηθεί πραγματικά ένα προϊόν.\n\nΗ γνώση του κρατά τις πωλήσεις και το marketing εστιασμένα στους λογαριασμούς που πραγματικά θα αγοράσουν και θα παραμείνουν. Η πώληση σε κάποιον ξεκάθαρα εκτός target market συχνά καταλήγει σε πελάτη που φεύγει γρήγορα.',
	},
	'Team Chat': {
		en: 'The always-on messaging tool a team uses for quick questions instead of email.\n\nIt’s meant for the fast, informal back-and-forth — decisions and anything that needs a permanent record still belong somewhere more durable than a scrolling feed. Using the right channel instead of DMing everything is what keeps information findable for people who weren’t online at the time.',
		el: 'Το εργαλείο άμεσων μηνυμάτων που χρησιμοποιεί μια ομάδα για γρήγορες ερωτήσεις αντί για email.\n\nΠροορίζεται για τον γρήγορο, ανεπίσημο διάλογο — αποφάσεις και ό,τι χρειάζεται μόνιμο αρχείο ανήκουν κάπου πιο σταθερό. Η χρήση του σωστού channel αντί για DM κρατά την πληροφορία ανιχνεύσιμη.',
	},
	Terraform: {
		en: 'A popular, cloud-agnostic infrastructure-as-code tool for defining and provisioning resources across providers.\n\nUnlike ARM templates or Bicep, the same tool and syntax work across AWS, Azure, and GCP, which matters a lot for teams that aren’t locked into one cloud. Its "plan" step — showing exactly what will change before it changes anything — is what makes it safe to run against real infrastructure.',
		el: 'Ένα δημοφιλές εργαλείο infrastructure-as-code, ανεξάρτητο cloud provider, για ορισμό και δημιουργία πόρων.\n\nΣε αντίθεση με τα ARM templates ή το Bicep, το ίδιο εργαλείο δουλεύει σε AWS, Azure και GCP, κάτι που έχει μεγάλη σημασία για ομάδες που δεν είναι κλειδωμένες σε ένα cloud. Το βήμα «plan» — δείχνοντας τι θα αλλάξει πριν αλλάξει τίποτα — το κάνει ασφαλές.',
	},
	'Test Case Design': {
		en: 'Writing test cases that actually cover the ways a feature could break, not just the happy path.\n\nGood test cases deliberately try weird inputs — empty fields, huge numbers, special characters — that a normal user might stumble into by accident. Only testing the intended, expected flow gives a false sense of confidence about how solid a feature actually is.',
		el: 'Σχεδιασμός test cases που καλύπτουν πραγματικά τους τρόπους που μπορεί να χαλάσει ένα feature, όχι μόνο το ιδανικό σενάριο.\n\nΤα καλά test cases δοκιμάζουν επίτηδες περίεργες εισόδους — άδεια πεδία, τεράστιους αριθμούς, ειδικούς χαρακτήρες — που ένας κανονικός χρήστης μπορεί να συναντήσει κατά λάθος. Ο έλεγχος μόνο του αναμενόμενου flow δίνει ψεύτικη αίσθηση σιγουριάς.',
	},
	'Test Case Reviews': {
		en: 'Having someone else check that your test cases actually cover what they claim to before a release ships.\n\nIt catches the gap between "I tested this" and what was actually tested, which are surprisingly often not the same thing. A second reviewer often spots an edge case the original author was too close to the feature to think of.',
		el: 'Έλεγχος από κάποιον άλλον ότι τα test cases σου καλύπτουν πραγματικά αυτό που υποστηρίζουν, πριν κυκλοφορήσει μια έκδοση.\n\nΠιάνει το κενό ανάμεσα στο «το δοκίμασα» και τι πραγματικά δοκιμάστηκε, που εκπληκτικά συχνά δεν είναι το ίδιο πράγμα. Ένας δεύτερος reviewer συχνά εντοπίζει ένα edge case που ο συγγραφέας ήταν πολύ κοντά για να δει.',
	},
	'Test Coverage': {
		en: 'A measure of how much of the codebase is actually exercised by automated tests.\n\nIt’s a useful signal, but a high number can be misleading — a test that runs a function without checking its output raises coverage without actually testing anything meaningful. It’s worth treating as a way to find untested code, not a target to chase for its own sake.',
		el: 'Ένα μέτρο του πόσο από τον κώδικα καλύπτεται πραγματικά από αυτοματοποιημένα tests.\n\nΕίναι χρήσιμο σήμα, αλλά ένα υψηλό ποσοστό μπορεί να είναι παραπλανητικό — ένα test που τρέχει μια function χωρίς να ελέγχει το αποτέλεσμα ανεβάζει το coverage χωρίς να ελέγχει ουσιαστικά τίποτα. Αξίζει να το βλέπεις ως τρόπο εντοπισμού αδοκίμαστου κώδικα, όχι ως στόχο από μόνο του.',
	},
	'Test Pipelines': {
		en: 'Automated stages that run tests as part of the build process, before code ever reaches production.\n\nA broken test blocking a merge feels annoying in the moment, but it’s exactly the point — it’s far cheaper to catch a bug there than after it’s live. Flaky tests that fail randomly are the main thing that erodes trust in a pipeline, since people start ignoring failures altogether.',
		el: 'Αυτοματοποιημένα στάδια που τρέχουν tests μέσα στη διαδικασία build, πριν ο κώδικας φτάσει ποτέ σε production.\n\nΈνα χαλασμένο test που μπλοκάρει ένα merge είναι ενοχλητικό τη στιγμή που συμβαίνει, αλλά αυτό είναι το νόημα — είναι πολύ πιο φθηνό να πιάσεις ένα bug εκεί. Τα ασταθή tests που αποτυχαίνουν τυχαία είναι το κύριο πράγμα που διαβρώνει την εμπιστοσύνη σε ένα pipeline.',
	},
	'Test Plans': {
		en: 'A written outline of what will be tested, how, and with what data before testing actually starts.\n\nWriting it out ahead of time forces you to think about coverage and edge cases before you’re in the middle of testing and just reacting to what you see. It also gives stakeholders a chance to say "wait, what about this scenario" before it’s too late to add it.',
		el: 'Ένα γραπτό σχέδιο για το τι θα ελεγχθεί, πώς και με ποια δεδομένα, πριν ξεκινήσει το testing.\n\nΤο να το γράψεις εκ των προτέρων σε αναγκάζει να σκεφτείς κάλυψη και edge cases πριν βρεθείς στη μέση του testing απλά αντιδρώντας. Δίνει επίσης στους stakeholders την ευκαιρία να πουν «τι γίνεται με αυτό το σενάριο» πριν είναι αργά.',
	},
	'Test Reporting': {
		en: 'Summarizing what was tested and what was found, in a way stakeholders can actually act on.\n\nA report that just says "10 tests passed, 2 failed" without context makes someone else do the work of figuring out whether those failures actually matter. Good reporting connects results back to risk — what’s covered, what isn’t, and what that means for shipping.',
		el: 'Σύνοψη του τι ελέγχθηκε και τι βρέθηκε, με τρόπο που οι stakeholders μπορούν να αξιοποιήσουν.\n\nΜια αναφορά που λέει απλά «10 tests πέτυχαν, 2 αποτύχαν» χωρίς context αναγκάζει κάποιον άλλον να καταλάβει αν αυτές οι αποτυχίες έχουν σημασία. Η καλή αναφορά συνδέει τα αποτελέσματα με το ρίσκο.',
	},
	'Test Scripts': {
		en: 'The actual code that automates a test case — click here, check that, assert this.\n\nA well-written one reads almost like a checklist, so anyone on the team can understand what it’s verifying without tracing through implementation details. Scripts that break every time an unrelated part of the UI changes are usually relying on something too fragile, like exact pixel position.',
		el: 'Ο πραγματικός κώδικας που αυτοματοποιεί ένα test case — κάνε κλικ εδώ, έλεγξε αυτό, επιβεβαίωσε εκείνο.\n\nΈνα καλογραμμένο script διαβάζεται σχεδόν σαν checklist, ώστε όλοι στην ομάδα να καταλαβαίνουν τι ελέγχει. Scripts που σπάνε σε κάθε άσχετη αλλαγή UI συνήθως βασίζονται σε κάτι πολύ εύθραυστο, όπως ακριβή θέση pixel.',
	},
	'Testing Basics': {
		en: 'The core mindset of QA — assume it’s broken until proven otherwise, and try to break it on purpose.\n\nIt’s a different mode of thinking than building the feature — a developer thinks "how do I make this work," a tester thinks "how do I make this fail." Both mindsets are needed, and switching into the second one deliberately is most of what testing actually is.',
		el: 'Η βασική νοοτροπία του QA — υπόθεσε ότι κάτι είναι χαλασμένο μέχρι αποδείξεως του αντιθέτου, και προσπάθησε να το χαλάσεις επίτηδες.\n\nΕίναι διαφορετική νοοτροπία από το να φτιάξεις το feature — ο developer σκέφτεται «πώς θα το κάνω να δουλέψει», ο tester «πώς θα το κάνω να χαλάσει». Χρειάζονται και οι δύο, και το να μπεις σκόπιμα στη δεύτερη είναι στην ουσία το testing.',
	},
	'Ticket Breakdown': {
		en: 'Splitting a vague or large piece of work into small, clear, estimable tickets.\n\nA ticket like "improve the dashboard" can’t really be estimated or assigned — breaking it into specific, bounded pieces is what makes it actually plannable. It also makes progress visible: five small tickets closing feels like movement, one giant ticket sitting open for a month doesn’t.',
		el: 'Διάσπαση μιας ασαφούς ή μεγάλης εργασίας σε μικρά, σαφή και εκτιμήσιμα tickets.\n\nΈνα ticket όπως «βελτίωσε το dashboard» δεν εκτιμάται ή αναθέτεται πραγματικά — το να το σπάσεις σε συγκεκριμένα, οριοθετημένα κομμάτια το κάνει σχεδιάσιμο. Κάνει επίσης ορατή την πρόοδο: πέντε μικρά tickets που κλείνουν δείχνουν κίνηση, ένα γιγάντιο ανοιχτό για έναν μήνα όχι.',
	},
	'Ticket Routing': {
		en: 'Getting a support ticket to the right person or team the first time, without unnecessary bouncing around.\n\nEvery time a ticket bounces from person to person, the customer has to repeat themselves and the resolution clock keeps running the whole time. Good routing rules based on keywords or category catch most of this automatically, before a human even has to think about it.',
		el: 'Δρομολόγηση ενός ticket στο σωστό άτομο ή ομάδα από την πρώτη φορά, χωρίς περιττές μεταφορές.\n\nΚάθε φορά που ένα ticket μεταφέρεται από άτομο σε άτομο, ο πελάτης πρέπει να επαναλάβει το πρόβλημά του και ο χρόνος επίλυσης συνεχίζει να τρέχει. Καλοί κανόνες δρομολόγησης πιάνουν το μεγαλύτερο μέρος αυτού αυτόματα.',
	},
	'Ticket Triage': {
		en: 'Sorting incoming tickets by urgency and type before deciding who works on what.\n\nWithout it, whoever happens to be free grabs whatever’s next in the queue, regardless of whether it’s actually the most urgent thing. A few minutes of sorting at the start of the day usually saves far more time than it costs.',
		el: 'Ταξινόμηση εισερχόμενων tickets ανά επείγον και τύπο, πριν αποφασιστεί ποιος αναλαμβάνει τι.\n\nΧωρίς αυτό, όποιος είναι ελεύθερος παίρνει το επόμενο στην ουρά, ανεξάρτητα από το αν είναι όντως το πιο επείγον. Λίγα λεπτά ταξινόμησης στην αρχή της μέρας συνήθως γλιτώνουν πολύ περισσότερο χρόνο απ’ όσο κοστίζουν.',
	},
	'Ticketing Systems': {
		en: 'The software that tracks a request from "submitted" to "resolved," with a full history in between.\n\nThe history is the real value — anyone picking up the ticket later can see every prior message and action instead of starting blind. Without it, tracking status means remembering it yourself or asking around, which doesn’t scale past a handful of requests.',
		el: 'Το λογισμικό που παρακολουθεί ένα αίτημα από την υποβολή μέχρι την επίλυση, με πλήρες ιστορικό.\n\nΤο ιστορικό είναι η πραγματική αξία — όποιος αναλάβει το ticket μετά βλέπει κάθε προηγούμενο μήνυμα και ενέργεια αντί να ξεκινά στα σκοτεινά. Χωρίς αυτό, η παρακολούθηση κατάστασης σημαίνει να το θυμάσαι μόνος σου.',
	},
	'Tone & Empathy': {
		en: 'Writing and speaking in a way that shows you actually understand the customer’s frustration.\n\nThe exact words matter less than whether the customer feels heard — a template that never acknowledges their specific situation reads as robotic no matter how polite it is. A short, human sentence before the fix — "sorry, that sounds frustrating" — does more work than most people expect.',
		el: 'Γραφή και ομιλία με τρόπο που δείχνει ότι πραγματικά κατανοείς την απογοήτευση του πελάτη.\n\nΟι ακριβείς λέξεις έχουν λιγότερη σημασία από το αν ο πελάτης νιώθει ότι τον άκουσαν — ένα template που δεν αναγνωρίζει τη συγκεκριμένη κατάστασή του ακούγεται ρομποτικό. Μια σύντομη, ανθρώπινη πρόταση πριν τη λύση κάνει περισσότερα απ’ όσα περιμένουν οι περισσότεροι.',
	},
	Triage: {
		en: 'The first-pass sorting of an incoming incident or ticket by severity and type.\n\nIt’s the same idea as ticket triage but applied more broadly to any incoming item that needs sorting before it gets acted on. Getting it wrong at this stage — misjudging severity — tends to cascade into every decision made afterward.',
		el: 'Η πρώτη ταξινόμηση ενός εισερχόμενου incident ή ticket ανά σοβαρότητα και τύπο.\n\nΕίναι η ίδια ιδέα με το triage tickets αλλά πιο γενική, για οτιδήποτε εισερχόμενο χρειάζεται ταξινόμηση πριν αναληφθεί δράση. Ένα λάθος εδώ — λάθος εκτίμηση σοβαρότητας — συνήθως επηρεάζει κάθε επόμενη απόφαση.',
	},
	'Troubleshooting Basics': {
		en: 'A systematic first approach to a problem — check the obvious things before assuming the worst.\n\n"Is it plugged in, is the service running, did anything change recently" solves more problems than people expect before you need to dig any deeper. Jumping straight to the most exotic explanation without ruling out the boring ones wastes far more time than it saves.',
		el: 'Μια συστηματική πρώτη προσέγγιση σε ένα πρόβλημα — έλεγξε τα προφανή πριν υποθέσεις το χειρότερο.\n\nΤο «είναι στην πρίζα, τρέχει η υπηρεσία, άλλαξε κάτι πρόσφατα» λύνει περισσότερα προβλήματα απ’ όσα περιμένει κανείς, πριν χρειαστεί να σκάψεις πιο βαθιά. Το να πηδήξεις κατευθείαν στην πιο εξωτική εξήγηση χωρίς να αποκλείσεις τις βαρετές χάνει περισσότερο χρόνο απ’ όσο γλιτώνει.',
	},
	'Unit Testing': {
		en: 'Automated tests that check one small piece of code in isolation, run constantly as code changes.\n\nBecause each test targets one small function, a failure points almost directly at the problem instead of leaving you to search a whole feature for what broke. They’re fast enough to run on every save, which is what makes catching a bug in seconds instead of hours realistic.',
		el: 'Αυτοματοποιημένα tests που ελέγχουν ένα μικρό κομμάτι κώδικα μεμονωμένα, εκτελούμενα συνεχώς καθώς αλλάζει ο κώδικας.\n\nΕπειδή κάθε test στοχεύει μια μικρή function, μια αποτυχία δείχνει σχεδόν κατευθείαν το πρόβλημα αντί να ψάχνεις όλο το feature. Είναι αρκετά γρήγορα για να τρέχουν σε κάθε save, κάτι που κάνει ρεαλιστικό να πιάσεις ένα bug σε δευτερόλεπτα.',
	},
	VNets: {
		en: 'Virtual Networks — your own private, isolated network inside Azure to control how resources connect.\n\nIt’s the container everything else networking-related sits inside — subnets, VPN gateways, and the rules about what can talk to what all start here. Planning the address space before you have dozens of resources deployed is much easier than trying to redesign it after the fact.',
		el: 'Virtual Networks — το δικό σου ιδιωτικό, απομονωμένο δίκτυο μέσα στο Azure για έλεγχο της συνδεσιμότητας πόρων.\n\nΕίναι το «δοχείο» μέσα στο οποίο μπαίνει όλο το υπόλοιπο δίκτυο — subnets, VPN gateways και οι κανόνες του τι μιλά με τι ξεκινούν εδώ. Ο σχεδιασμός του χώρου διευθύνσεων εκ των προτέρων είναι πολύ πιο εύκολος από την επανασχεδίαση αργότερα.',
	},
	'VPN Gateways': {
		en: 'A secure tunnel connecting an on-premises network to a cloud network over the public internet.\n\nIt lets a company’s office network and its cloud resources talk to each other as if they were on the same local network, encrypted the whole way. It’s the common bridge companies use during a gradual migration to the cloud, before everything actually lives there.',
		el: 'Ένα ασφαλές «τούνελ» που συνδέει ένα τοπικό δίκτυο με ένα δίκτυο cloud μέσω του δημόσιου internet.\n\nΕπιτρέπει στο δίκτυο ενός γραφείου και τους πόρους cloud να επικοινωνούν σαν να ήταν στο ίδιο τοπικό δίκτυο, κρυπτογραφημένα. Είναι η συνηθισμένη γέφυρα που χρησιμοποιούν εταιρείες σε σταδιακή μετάβαση στο cloud.',
	},
	'Value Proposition': {
		en: 'The clear, specific reason a customer should choose your product over doing nothing — or a competitor.\n\nA weak value proposition lists features; a strong one names the specific outcome or pain it removes for a specific kind of customer. If a rep can’t state it in one sentence without jargon, the pitch that follows tends to wander.',
		el: 'Ο σαφής, συγκεκριμένος λόγος για τον οποίο ένας πελάτης θα επέλεγε το προϊόν σου αντί να μην κάνει τίποτα — ή έναν ανταγωνιστή.\n\nΜια αδύναμη πρόταση αξίας απαριθμεί features· μια δυνατή ονομάζει το συγκεκριμένο αποτέλεσμα ή πρόβλημα που λύνει για συγκεκριμένο τύπο πελάτη. Αν ένας πωλητής δεν μπορεί να το πει σε μία πρόταση χωρίς ορολογία, το υπόλοιπο pitch τείνει να χάνεται.',
	},
	'Variables & Types': {
		en: 'The basic way programs store and label data — and the rules about what kind of data each variable holds.\n\nA type mismatch — treating text as a number, or the reverse — is one of the most common sources of bugs for anyone new to programming. Languages that check types strictly catch that mistake immediately; looser languages let it slip through until it causes a weird result somewhere downstream.',
		el: 'Ο βασικός τρόπος αποθήκευσης και ονομασίας δεδομένων σε ένα πρόγραμμα — και οι κανόνες για το τι είδος δεδομένων κρατά κάθε μεταβλητή.\n\nΈνα λάθος τύπου — να χειρίζεσαι κείμενο σαν αριθμό, ή το αντίστροφο — είναι από τις πιο συχνές πηγές bugs για κάποιον νέο στον προγραμματισμό. Γλώσσες με αυστηρό έλεγχο τύπων το πιάνουν αμέσως· πιο χαλαρές το αφήνουν να περάσει μέχρι να προκαλέσει παράξενο αποτέλεσμα αλλού.',
	},
	'Virtual Machines': {
		en: 'Software-based computers running on shared physical hardware, the basic unit of cloud compute.\n\nSeveral VMs can run on one physical machine, each acting like its own isolated computer with its own OS, unaware of the others sharing the same hardware. They’re more flexible than a physical server — resize, clone, or destroy one in minutes — but you still patch and manage the OS inside just like a real machine.',
		el: 'Υπολογιστές λογισμικού που τρέχουν σε κοινό φυσικό hardware — η βασική μονάδα υπολογιστικής ισχύος στο cloud.\n\nΠολλά VMs μπορούν να τρέχουν σε ένα φυσικό μηχάνημα, κάθε ένα σαν δικός του απομονωμένος υπολογιστής με δικό του OS. Είναι πιο ευέλικτα από έναν φυσικό server — αλλάζεις μέγεθος ή το σβήνεις σε λεπτά — αλλά συνεχίζεις να διαχειρίζεσαι το OS μέσα όπως σε πραγματικό μηχάνημα.',
	},
	'Wiki Maintenance': {
		en: 'Keeping shared internal documentation accurate over time instead of letting it quietly go stale.\n\nA wiki nobody maintains slowly fills with contradictory or outdated pages, until people stop trusting it and start asking in chat instead, defeating its purpose. Assigning clear ownership per page or section is usually what keeps a wiki from decaying.',
		el: 'Διατήρηση της εσωτερικής τεκμηρίωσης ενημερωμένης με τον καιρό, αντί να ξεχνιέται σιωπηλά.\n\nΈνα wiki που κανείς δεν συντηρεί γεμίζει σιγά-σιγά με αντικρουόμενες ή ξεπερασμένες σελίδες, μέχρι ο κόσμος να σταματήσει να το εμπιστεύεται. Η σαφής ιδιοκτησία ανά σελίδα είναι συνήθως αυτό που το κρατά ενημερωμένο.',
	},
	'Win/Loss Analysis': {
		en: 'Reviewing closed deals — won and lost — to understand the real reasons behind the outcome.\n\nThe stated reason a prospect gives for walking away ("bad timing") is often a polite cover for the real one (price, missing a feature, lost trust). Actually talking to lost prospects, not just guessing internally, is what surfaces the pattern worth fixing.',
		el: 'Ανασκόπηση κλεισμένων συμφωνιών — κερδισμένων και χαμένων — για κατανόηση των πραγματικών λόγων πίσω από το αποτέλεσμα.\n\nΟ λόγος που δίνει ένας πελάτης που αποχωρεί («κακή στιγμή») είναι συχνά ευγενική κάλυψη για τον πραγματικό (τιμή, λείπον feature, χαμένη εμπιστοσύνη). Το να μιλήσεις πραγματικά με χαμένους πελάτες, όχι απλά να μαντεύεις, φέρνει στην επιφάνεια το μοτίβο που αξίζει να διορθωθεί.',
	},
	'Written Communication': {
		en: 'Writing clearly enough over email or chat that tone and meaning don’t get lost.\n\nWithout tone of voice or facial expression to soften things, a short, blunt message can land far harsher in writing than it would spoken out loud. Reading a message back before sending, imagining how it sounds to the other person, catches most of these problems before they cause one.',
		el: 'Γραφή αρκετά σαφής μέσω email ή chat, ώστε ο τόνος και το νόημα να μη χάνονται.\n\nΧωρίς τόνο φωνής ή έκφραση προσώπου, ένα σύντομο, απευθείας μήνυμα μπορεί να ακουστεί πολύ πιο σκληρό γραπτά απ’ όσο θα ακουγόταν προφορικά. Το να ξαναδιαβάσεις το μήνυμα πριν το στείλεις πιάνει τα περισσότερα από αυτά τα προβλήματα.',
	},
	'Zero Trust': {
		en: 'A security model that verifies every request regardless of where it comes from, instead of trusting anything inside the network by default.\n\nThe old model assumed anything inside the office network was safe; Zero Trust assumes nothing is, and checks identity and permissions on every single request. It matters more now than ever because remote work and cloud services mean there’s no clean "inside the network" left to trust in the first place.',
		el: 'Ένα μοντέλο ασφάλειας που επαληθεύει κάθε αίτημα ανεξάρτητα από την προέλευσή του, αντί να εμπιστεύεται από προεπιλογή οτιδήποτε είναι εντός δικτύου.\n\nΤο παλιό μοντέλο υπέθετε ότι όλο το εσωτερικό δίκτυο ήταν ασφαλές· το Zero Trust δεν υποθέτει τίποτα, και ελέγχει ταυτότητα και δικαιώματα σε κάθε αίτημα. Έχει μεγαλύτερη σημασία τώρα, γιατί η απομακρυσμένη εργασία και το cloud σημαίνουν ότι δεν υπάρχει πια καθαρό «εντός δικτύου» για να εμπιστευτείς.',
	},
};

export function getSkillInfo(skill: string, locale: Locale): string {
	const entry = skillInfo[skill];
	if (!entry) return '';
	return entry[locale] ?? entry.en;
}
