/* =========================================================
   PORTFOLIO – Roua Melliti
   PARTIE 1 : TES DONNÉES (c'est ici que tu modifies ton contenu)
   PARTIE 2 : construction des sections
   PARTIE 3 : fenêtre de détail
   PARTIE 4 : animations (GSAP)
   ========================================================= */

/* =========================================================
   PARTIE 1 – DONNÉES
   Documents : mets tes fichiers dans le dossier assets/ puis écris leur nom
   (ex. image: "assets/attestation-pfe.pdf"). Les images (.png, .jpg) et les
   PDF (.pdf) sont acceptés. Sans champ image, aucune vignette ne s'affiche.
   ========================================================= */
var LIENS = {
  linkedin: "https://www.linkedin.com/in/roua-melliti-438146288"
};

/* Icônes fines (traits 1.5 px) : la clé sert dans COMPETENCES, STAGES et ACTIVITES */
var ICONES = {
  server:   '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  window:   '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M12 10v10"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>',
  activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  network:  '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
  globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  layers:   '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  route:    '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a3 3 0 010 6h-4a3 3 0 000 6h5.5"/>',
  share:    '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  grid:     '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  cpu:      '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  shield:   '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  search:   '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  bug:      '<path d="M9 8a3 3 0 016 0v1H9V8z"/><rect x="8" y="9" width="8" height="10" rx="4"/><path d="M4 12h4M16 12h4M5 6l3 2M19 6l-3 2M5 19l3-2M19 19l-3-2M12 9v10"/>',
  alert:    '<path d="M12 4l9 16H3L12 4z"/><path d="M12 10v4.5M12 17.5h.01"/>',
  radar:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l6-6"/>',
  waves:    '<path d="M2 12c2.5-6 4.5-6 7 0s4.5 6 7 0 4.5-6 6 0"/>',
  zap:      '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  eye:      '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  target:   '<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
  scan:     '<path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16"/>',
  lock:     '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  cloud:    '<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0117.7 8.5 4 4 0 0117 18H7z"/>',
  cloudup:  '<path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0117.7 8.5 4 4 0 0117 18H7z"/><path d="M12 15v-4M10 13l2-2 2 2"/>',
  code:     '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  braces:   '<path d="M8 4c-2 0-3 1-3 3v2c0 1.5-1 3-3 3 2 0 3 1.5 3 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1.5 1 3 3 3-2 0-3 1.5-3 3v2c0 2-1 3-3 3"/>',
  flask:    '<path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 006.2 21h11.6a2 2 0 001.7-2.5L14 9V3"/>',
  browser:  '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M6.5 6.5h.01M9.5 6.5h.01"/>',
  workflow: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-7 6M12 11l7 6"/>',
  coffee:   '<path d="M4 9h13v5a5 5 0 01-5 5H9a5 5 0 01-5-5V9z"/><path d="M17 10h1.5a2.5 2.5 0 010 5H17M8 3c0 1.5 1.5 1.5 1.5 3M12 3c0 1.5 1.5 1.5 1.5 3"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  folder:   '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>',
  filter:   '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5z"/>',
  language: '<path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 7 8M11 5c0 3.5-3 6.5-7 8"/><path d="M13 20l4-9 4 9M14.5 17h5"/>',
  users:    '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.2a3.2 3.2 0 010 5.6M21 20c0-2.6-1.5-4.8-3.6-5.6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  flag:     '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  file:     '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'
};
function icone(nom) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONES[nom] || ICONES.code) + "</svg>"; }

/* i = icône, note = petite précision sous le nom (facultatif) */
var COMPETENCES = [
  { groupe: "Administration des systèmes", items: [
    { n: "Windows Server", i: "window" }, { n: "Linux (Ubuntu)", i: "terminal" },
    { n: "Utilisateurs et services réseau", i: "users" }, { n: "Zabbix", i: "activity" } ] },
  { groupe: "Réseaux informatiques", items: [
    { n: "TCP/IP", i: "network" }, { n: "VLAN", i: "layers" }, { n: "Routage", i: "route" },
    { n: "DNS", i: "globe" }, { n: "DHCP", i: "share" }, { n: "Segmentation réseau", i: "grid" },
    { n: "Cisco Packet Tracer", i: "server" }, { n: "Mininet", i: "workflow" }, { n: "EVE-NG", i: "cpu" } ] },
  { groupe: "Cybersécurité", items: [
    { n: "Analyse de vulnérabilités", i: "search" }, { n: "Tests d'intrusion", i: "bug" },
    { n: "Gestion d'incidents", i: "alert" }, { n: "Nmap", i: "radar" }, { n: "Wireshark", i: "waves" },
    { n: "Kali Linux", i: "terminal" }, { n: "OWASP ZAP", i: "lock" }, { n: "Nuclei", i: "zap" },
    { n: "Wapiti", i: "scan" }, { n: "Naabu", i: "target" }, { n: "WhatWeb", i: "eye" } ] },
  { groupe: "Cloud et virtualisation", items: [
    { n: "AWS Cloud Foundations", i: "cloud", note: "Initiation" },
    { n: "Microsoft Azure", i: "cloudup", note: "Initiation" } ] },
  { groupe: "Programmation et scripts", items: [
    { n: "Python", i: "code" }, { n: "C", i: "braces" }, { n: "Java", i: "coffee" }, { n: "PL/SQL", i: "database" },
    { n: "Flask", i: "flask" }, { n: "Playwright", i: "browser" }, { n: "Scrapy", i: "workflow" } ] },
  { groupe: "Big Data et bases de données", items: [
    { n: "HDFS", i: "folder" }, { n: "MapReduce", i: "filter" }, { n: "SQL*Plus", i: "terminal" }, { n: "Oracle", i: "database" } ] },
  { groupe: "Langues", items: [
    { n: "Anglais", i: "language", note: "B2" }, { n: "Français", i: "language", note: "B2" } ] }
];

var FORMATION = [
  {
    titre: "Licence appliquée en ingénierie des systèmes informatiques et réseaux",
    org: "Institut Supérieur d'Informatique (ISI), Université de Tunis El Manar",
    lieu: "Ariana, Tunisie",
    dates: "Diplômée",
    badges: ["Formation principale"],
    resume: "Formation en systèmes informatiques et réseaux, complétée par trois stages dont un projet de fin d'études en sécurité informatique.",
    details: [
      "Administration des systèmes, réseaux informatiques, cybersécurité, programmation.",
      "Trois stages en entreprise : réseau, développement web et sécurité informatique."
    ],
    image: "assets/diplome-1.png",
    imageLabel: "Diplôme de licence"
  },
  {
    titre: "Formation Qualité et RSE",
    org: "Formation complémentaire",
    lieu: "Codex Junior Entreprise",
    dates: "2024",
    badges: ["Formation"],
    resume: "Compréhension de la responsabilité sociétale des entreprises (RSE) et des normes ISO, et de leur importance pour le progrès de chaque entreprise.",
    details: []
  },
  {
    titre: "Introduction to Cybersecurity",
    org: "Cisco",
    lieu: "Plateforme Netacad",
    dates: "Août 2026",
    badges: ["Certification"],
    resume: "Badge de fin de cours d'introduction à la cybersécurité de l'académie Cisco, obtenu à la fin du cours.",
    details: [],
    image: "assets/certificat-cybersecurite.png",
    imageLabel: "Badge de certification"
  },
  {
    titre: "Cycle Ingénieur",
    org: "Tek-Up University",
    lieu: "Ariana",
    dates: "Commencé",
    badges: ["En cours"],
    resume: "Poursuite d'études débutée après la licence, en cycle ingénieur en sécurité des systèmes informatiques et réseaux.",
    details: []
  }
];

var STAGES = [
  {
    titre: "Stagiaire réseau",
    org: "Attijari Bank, siège social",
    dates: "Juin 2025",
    icone: "network",
    resume: "Configuration et simulation d'environnements réseau, en équipe avec les réseaux de la banque.",
    details: [
      "Configuration et simulation d'environnements réseau sur EVE-NG.",
      "Travail collaboratif avec l'équipe réseau sur la sécurisation et l'optimisation du système.",
      "Participation à l'intégration de solutions et à la résolution de problématiques techniques."
    ],
    outils: ["EVE-NG", "Réseaux", "Sécurisation"],
    image: "assets/attestation-reseau.pdf",
    imageLabel: "Attestation de stage"
  },
  {
    titre: "Stagiaire développement web",
    org: "Elite Info",
    dates: "Août 2025",
    icone: "code",
    resume: "Développement d'une application web selon le modèle MVC avec ASP.NET Core.",
    details: [
      "Développement d'une application web via le modèle MVC (ASP.NET Core).",
      "Participation au cycle complet du projet : conception, développement et tests."
    ],
    outils: ["ASP.NET Core", "MVC", "Conception", "Tests"],
    image: "assets/attestation-elite-info.pdf",
    imageLabel: "Attestation de stage"
  },
  {
    titre: "Stagiaire sécurité informatique (PFE)",
    org: "Attijari Bank, siège social, département sécurité informatique",
    dates: "Février 2026 – Mai 2026",
    icone: "shield",
    resume: "Conception et développement from scratch d'un outil DAST open source en Python pour l'audit automatisé des applications web du SOC.",
    details: [
      "Conception et développement from scratch d'un outil DAST (Dynamic Application Security Testing) open source en Python, pour l'audit automatisé de la sécurité des applications web du SOC.",
      "Détection de SQLi, XSS, CSRF, IDOR et Broken Authentication, avec Nuclei, Scrapy et Playwright pour les applications à page unique.",
      "Validation sur DVWA et OWASP Juice Shop : 39 vulnérabilités confirmées, aucun faux positif."
    ],
    outils: ["Python", "Flask", "Scrapy", "Playwright", "Nuclei", "DAST"],
    image: "assets/attestation-pfe.pdf",
    imageLabel: "Attestation de stage"
  }
];

var PROJETS = [
  {
    titre: "Scanner DAST open source",
    type: "Projet de fin d'études",
    resume: "Un outil DAST en Python pour le SOC d'Attijari Bank : exploration automatique, détection, confirmation et rapport, avec un crawler dédié aux applications à page unique et un fuzzer XSS basé sur le DOM.",
    details: [
      "Détection de SQLi, XSS (reflected, stored, DOM-based), CSRF, IDOR et Broken Authentication.",
      "Exploration des applications classiques et des SPA grâce à Scrapy et Playwright : analyse des templates littéraux Angular pour retrouver les routes d'API, détection fiable de la méthode HTTP et extraction des clés JSON dans leur contexte.",
      "Fuzzer XSS basé sur le DOM, réécrit selon une architecture en quatre phases, de la découverte des points d'entrée à la confirmation, pour des détections fiables sans faux positif.",
      "Intégration de Nuclei et de Wapiti, avec un périmètre adaptatif (--scope) selon le type d'application.",
      "Tests locaux sous Docker sur DVWA et OWASP Juice Shop."
    ],
    outils: ["Python", "Flask", "Scrapy", "Playwright", "Nuclei", "Wapiti", "Docker"],
    chiffres: [
      { n: 39, suffixe: "", label: "vulnérabilités confirmées" },
      { n: 0,  suffixe: "", label: "faux positif" },
      { n: 80, suffixe: " %", label: "détection sur DVWA" },
      { n: 60, suffixe: " %", label: "détection sur Juice Shop" }
    ],
    image: "assets/projet-scanner.png",
    imageLabel: "Capture du scanner",
    video: "assets/demo-scanner.mp4",
    videoLabel: "Démonstration du scanner",
    liens: []
  }
];

var ACTIVITES = [
  {
    titre: "Codex Junior Entreprise",
    org: "Alumni et trésorière sortante",
    dates: "Trésorière 2024-2025 / alumni depuis 2025",
    icone: "users",
    resume: "Missions variées en équipe : prospection digitale et prospection dans des salons d'exposition.",
    details: [
      "Trésorière sortante, aujourd'hui alumni de la junior entreprise.",
      "Membre du Bureau Exécutif durant le mandat 2024-2025, distinguée par un certificat de reconnaissance.",
      "Gestion budgétaire et suivi de trésorerie de l'association, facturation et reporting financier.",
      "Collaboration avec l'équipe sur des missions variées : prospection digitale et prospection dans des salons d'exposition."
    ],
    outils: ["Trésorerie", "Gestion budgétaire", "Facturation", "Reporting financier", "Excel", "Prospection", "Travail d'équipe"],
    image: "assets/certificat-codex.pdf",
    imageLabel: "Certificat de reconnaissance"
  },
  {
    titre: "Forum ISI Entreprise",
    org: "Membre organisatrice",
    dates: "2024-2025-2026",
    icone: "calendar",
    resume: "Participation à l'organisation du grand événement Forum ISI Entreprise.",
    details: ["Participation, en tant que membre organisatrice, au grand événement Forum ISI Entreprise."],
    outils: ["Organisation d'événement", "Relations entreprises"]
  },
  {
    titre: "Securinets ISI",
    org: "Compétitions Capture The Flag",
    dates: "",
    icone: "flag",
    resume: "Participation à plusieurs compétitions Capture The Flag (CTF) avec Securinets ISI.",
    details: ["Participation à plusieurs Capture The Flag (CTF) avec Securinets ISI."],
    outils: ["CTF", "Cybersécurité"]
  }
];

/* =========================================================
   PARTIE 2 – CONSTRUCTION DES SECTIONS
   ========================================================= */
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
}
function $(id) { return document.getElementById(id); }

function initiales(nom) {
  var mots = nom.split(/[\s-]+/);
  if (mots.length > 1) return (mots[0][0] + mots[1][0]).toUpperCase();
  return nom.charAt(0).toUpperCase() + nom.charAt(1).toLowerCase();
}

/* Vrai si le fichier est un PDF */
function estPdf(src) { return /\.pdf$/i.test(src || ""); }

/* Petite vignette (cartes) : image, ou icône de document pour un PDF */
function vignette(src, label) {
  if (!src) return '<div class="thumb empty"><span class="ph">' + esc(label) + "</span></div>";
  if (estPdf(src)) {
    return '<div class="thumb pdf">' + icone("file") + '<span class="ph-pdf">' + esc(label) + " (PDF)</span></div>";
  }
  return '<div class="thumb"><img src="' + esc(src) + '" alt="' + esc(label) + '" loading="lazy" ' +
         'onerror="this.parentNode.classList.add(\'empty\');this.remove()"><span class="ph">' + esc(label) + " à ajouter</span></div>";
}

/* Aperçu complet (fenêtre de détail) : PDF affiché dans la page + bouton pour l'ouvrir */
function apercuDocument(src, label) {
  if (!estPdf(src)) return vignette(src, label);
  return '<div class="doc-pdf">' +
    '<iframe src="' + esc(src) + '#view=FitH" title="' + esc(label) + '" loading="lazy"></iframe>' +
    '<a class="btn small primary" href="' + esc(src) + '" target="_blank" rel="noopener">Ouvrir le PDF</a>' +
    "</div>";
}

/* Lecteur vidéo (fenêtre de détail) : la vidéo ne se lance que si on clique sur lecture */
function apercuVideo(src, label) {
  return '<div class="doc-video">' +
    '<video controls preload="metadata" playsinline aria-label="' + esc(label) + '">' +
    '<source src="' + esc(src) + '" type="video/mp4">' +
    'Ton navigateur ne peut pas lire cette vidéo. <a href="' + esc(src) + '" target="_blank" rel="noopener">Ouvrir la vidéo</a>' +
    "</video></div>";
}

function listeBadges(b) { return b && b.length ? '<ul class="badges">' + b.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : ""; }
function listeOutils(o) { return o && o.length ? '<ul class="tags">' + o.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : ""; }

/* Compétences */
$("skills").innerHTML = COMPETENCES.map(function (g) {
  return '<div class="skill-group"><h3>' + esc(g.groupe) + '</h3><div class="tiles">' +
    g.items.map(function (it) {
      return '<div class="tile"><span class="ic">' + icone(it.i) + '</span><span class="nm">' + esc(it.n) + "</span>" +
             (it.note ? '<span class="note">' + esc(it.note) + "</span>" : "") + "</div>";
    }).join("") + "</div></div>";
}).join("");

/* Formation (cartes horizontales, avec diplôme si une image est renseignée) */
$("education").innerHTML = FORMATION.map(function (f, i) {
  return '<div class="card h' + (f.image ? '' : ' noimg') + '" role="button" tabindex="0" data-kind="education" data-i="' + i + '">' +
    (f.image ? vignette(f.image, f.imageLabel) : '') +
    "<div>" + listeBadges(f.badges) +
    "<h3>" + esc(f.titre) + "</h3>" +
    '<p class="org">' + esc(f.org) + "</p>" +
    '<p class="sub">' + esc([f.lieu, f.dates].filter(Boolean).join(" · ")) + "</p>" +
    '<p class="txt">' + esc(f.resume) + "</p>" +
    '<span class="more">Cliquer pour voir plus →</span></div></div>';
}).join("");

/* Stages et activités (cartes verticales) */
function carteVerticale(kind, e, i) {
  if (e.todo) {
    return '<div class="card v todo"><span class="ico">' + icone(e.icone) + "</span><h3>" + esc(e.titre) + '</h3><p class="sub">' + esc(e.org) + "</p></div>";
  }
  return '<div class="card v" role="button" tabindex="0" data-kind="' + kind + '" data-i="' + i + '">' +
    '<span class="ico">' + icone(e.icone) + "</span>" +
    "<h3>" + esc(e.titre) + "</h3>" +
    '<p class="org">' + esc(e.org) + "</p>" +
    '<p class="sub">' + esc(e.dates) + "</p>" +
    '<p class="txt">' + esc(e.resume) + "</p>" +
    '<span class="more">Cliquer pour voir plus →</span></div>';
}
$("experience").innerHTML = STAGES.map(function (e, i) { return carteVerticale("stage", e, i); }).join("");
$("activities").innerHTML = ACTIVITES.map(function (e, i) { return carteVerticale("activite", e, i); }).join("");

/* Projets (cartes horizontales, avec image si renseignée) */
$("projects").innerHTML = PROJETS.map(function (p, i) {
  var chiffres = p.chiffres ? '<div class="mini-metrics">' + p.chiffres.map(function (c) {
    return '<div><b data-count="' + c.n + '" data-suffix="' + esc(c.suffixe) + '">' + c.n + esc(c.suffixe) + "</b><span>" + esc(c.label) + "</span></div>";
  }).join("") + "</div>" : "";
  return '<div class="card h' + (p.image ? '' : ' noimg') + '" role="button" tabindex="0" data-kind="projet" data-i="' + i + '">' +
    (p.image ? vignette(p.image, p.imageLabel) : '') +
    "<div>" + listeBadges(p.video ? [p.type, "▶ Vidéo démo"] : [p.type]) +
    "<h3>" + esc(p.titre) + "</h3>" +
    '<p class="txt">' + esc(p.resume) + "</p>" +
    chiffres + listeOutils(p.outils) +
    '<span class="more">Cliquer pour voir plus →</span></div></div>';
}).join("");

/* Liens réseaux */
$("linkedin").href = LIENS.linkedin;

/* =========================================================
   PARTIE 3 – FENÊTRE DE DÉTAIL
   ========================================================= */
var dlg = $("dlg"), dlgBody = $("dlgBody");

function contenuDetail(kind, i) {
  var e = kind === "education" ? FORMATION[i] : kind === "stage" ? STAGES[i] : kind === "activite" ? ACTIVITES[i] : PROJETS[i];
  var h = "";
  if (e.badges) h += listeBadges(e.badges);
  if (e.type) h += listeBadges([e.type]);
  h += '<h3 id="dlgTitle">' + esc(e.titre) + "</h3>";
  if (e.org) h += '<p class="org">' + esc(e.org) + "</p>";
  var sub = [e.lieu, e.dates].filter(Boolean).join(" · ");
  if (sub) h += '<p class="sub">' + esc(sub) + "</p>";
  if (e.resume) h += '<p class="txt">' + esc(e.resume) + "</p>";
  if (e.chiffres) {
    h += '<div class="mini-metrics">' + e.chiffres.map(function (c) {
      return "<div><b>" + c.n + esc(c.suffixe) + "</b><span>" + esc(c.label) + "</span></div>";
    }).join("") + "</div>";
  }
  if (e.details && e.details.length) h += "<h4>Réalisation</h4><ul class=\"pts\">" + e.details.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>";
  if (e.outils) h += "<h4>Outils</h4>" + listeOutils(e.outils);
  if (e.video) h += "<h4>" + esc(e.videoLabel || "Vidéo") + "</h4>" + apercuVideo(e.video, e.videoLabel || "Vidéo");
  if (e.image) h += "<h4>" + esc(e.imageLabel || "Document") + "</h4>" + apercuDocument(e.image, e.imageLabel || "Document");
  if (e.liens && e.liens.length) {
    h += '<div class="links">' + e.liens.map(function (l) { return '<a class="btn small primary" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.texte) + "</a>"; }).join("") + "</div>";
  }
  return h;
}
function ouvrir(carte) {
  if (!carte || carte.classList.contains("todo")) return;
  dlgBody.innerHTML = contenuDetail(carte.dataset.kind, +carte.dataset.i);
  if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
}
document.addEventListener("click", function (e) { ouvrir(e.target.closest(".card[data-kind]")); });
document.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[data-kind]")) { e.preventDefault(); ouvrir(e.target); }
});
$("dlgClose").addEventListener("click", function () { dlg.close(); });
dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
/* Vide la fenêtre à la fermeture pour arrêter le chargement du PDF */
dlg.addEventListener("close", function () { dlgBody.innerHTML = ""; });

/* =========================================================
   PARTIE 4 – ANIMATIONS (GSAP + ScrollTrigger)
   Si GSAP n'a pas chargé, ou si le visiteur préfère moins de mouvement,
   la page reste entièrement lisible sans animation.
   ========================================================= */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!window.gsap || !window.ScrollTrigger || reduce) return;
  gsap.registerPlugin(ScrollTrigger);

  /* 1. Ouverture : photo, nom lettre par lettre, puis le reste */
  var nom = document.querySelector(".name");
  var mots = nom.textContent.trim().split(" ");
  nom.innerHTML = mots.map(function (w) {
    return '<span class="word">' + w.split("").map(function (c) { return '<span class="ch">' + c + "</span>"; }).join("") + "</span>";
  }).join(" ");
  nom.setAttribute("aria-label", mots.join(" "));

  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".nav", { y: -30, opacity: 0, duration: .7 })
    .from(".avatar", { scale: .6, opacity: 0, duration: .9, ease: "back.out(1.5)" }, 0.1)
    .from(".eyebrow", { y: 14, opacity: 0, duration: .6 }, "-=.4")
    .from(".name .ch", { yPercent: 115, duration: .85, stagger: .045 }, "-=.35")
    .from(".role, .bio", { y: 18, opacity: 0, duration: .7, stagger: .12 }, "-=.45")
    .from(".btns .btn, .meta li", { y: 12, opacity: 0, duration: .5, stagger: .08 }, "-=.4");

  /* 2. Titres de section : révélés depuis un masque */
  gsap.utils.toArray(".reveal-title").forEach(function (h) {
    h.innerHTML = '<span class="line"><span>' + h.textContent + "</span></span>";
    gsap.from(h.querySelector(".line > span"), {
      yPercent: 110, duration: .9, ease: "power3.out",
      scrollTrigger: { trigger: h, start: "top 88%", once: true }
    });
    gsap.from(h.parentNode.querySelector("p"), {
      y: 14, opacity: 0, duration: .7, delay: .15, ease: "power3.out",
      scrollTrigger: { trigger: h, start: "top 88%", once: true }
    });
  });

  /* 3. Cartes et tuiles : apparition en cascade quand elles entrent à l'écran */
  var cibles = gsap.utils.toArray(".tile, .card, .soon");
  gsap.set(cibles, { y: 34, opacity: 0 });
  ScrollTrigger.batch(cibles, {
    start: "top 92%", once: true,
    onEnter: function (lot) { gsap.to(lot, { y: 0, opacity: 1, duration: .8, stagger: .07, ease: "power3.out", overwrite: true }); }
  });

  /* 4. Chiffres : comptent depuis zéro */
  gsap.utils.toArray("[data-count]").forEach(function (el) {
    var cible = parseFloat(el.dataset.count), suffixe = el.dataset.suffix || "", o = { v: 0 };
    el.textContent = "0" + suffixe;
    gsap.to(o, {
      v: cible, duration: 1.8, ease: "power2.out",
      onUpdate: function () { el.textContent = Math.round(o.v) + suffixe; },
      scrollTrigger: { trigger: el, start: "top 92%", once: true }
    });
  });

  /* 5. Barre de progression + lien actif du menu */
  gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } });

  var liens = document.querySelectorAll(".nav-links a");
  document.querySelectorAll("header.hero, main section").forEach(function (sec) {
    ScrollTrigger.create({
      trigger: sec, start: "top 45%", end: "bottom 45%",
      onToggle: function (self) {
        if (!self.isActive) return;
        liens.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + sec.id); });
      }
    });
  });

  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();