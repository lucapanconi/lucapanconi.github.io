/* Renders shared chrome and every data-driven block on the page.
   Blocks are declared in the HTML as <div data-render="key"> and filled from
   window.SITE (see assets/data/content.js). */
(function () {
  "use strict";

  var S = window.SITE || {};

  var PAGES = [
    { href: "index.html", label: "Home" },
    { href: "research.html", label: "Research" },
    { href: "publications.html", label: "Publications" },
    { href: "cv.html", label: "CV" },
  ];

  var ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    sun: '<svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>',
    moon: '<svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  };

  /* ---------------------------------------------------------------- helpers */
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function highlightSelf(authors) {
    return esc(authors).replace(/L\. Panconi/g, "<b>L. Panconi</b>");
  }

  function currentPage() {
    var file = location.pathname.split("/").pop();
    return file === "" ? "index.html" : file;
  }

  /* ------------------------------------------------------------------ theme */
  function initTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {}
    var prefersDark =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    var dark = stored === "dark" || (stored === null && prefersDark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }

  function toggleTheme() {
    var next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  /* -------------------------------------------------------------------- nav */
  function renderNav(host) {
    var here = currentPage();
    var links = PAGES.map(function (p) {
      var active = p.href === here ? ' aria-current="page"' : "";
      return (
        '<a class="nav__link" href="' +
        p.href +
        '"' +
        active +
        ">" +
        esc(p.label) +
        "</a>"
      );
    }).join("");

    host.className = "nav";
    host.innerHTML =
      '<div class="container nav__inner">' +
      '<a class="nav__brand" href="index.html">' +
      '<img class="nav__photo" src="' +
      esc(S.profile.photo) +
      '" width="36" height="36" alt="">' +
      "<span>" +
      esc(S.profile.name) +
      "</span>" +
      "</a>" +
      '<div class="nav__actions">' +
      '<nav class="nav__links" id="nav-links">' +
      links +
      "</nav>" +
      '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Switch colour theme">' +
      ICON.sun +
      ICON.moon +
      "</button>" +
      '<button class="icon-btn nav__toggle" id="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">' +
      ICON.menu +
      "</button>" +
      "</div>" +
      "</div>";

    host.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

    var burger = host.querySelector("#nav-toggle");
    var list = host.querySelector("#nav-links");
    burger.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        list.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    var onScroll = function () {
      host.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------- hero */
  function renderHero(host) {
    var p = S.profile;
    var links = p.links
      .map(function (l) {
        return (
          '<a href="' +
          esc(l.href) +
          '"' +
          (l.href.indexOf("http") === 0
            ? ' target="_blank" rel="noopener"'
            : "") +
          ">" +
          esc(l.label) +
          "</a>"
        );
      })
      .join('<span aria-hidden="true">·</span> ');

    host.innerHTML =
      '<div class="container hero__inner">' +
      "<div>" +
      '<h1 class="hero__name">' +
      esc(p.name) +
      "</h1>" +
      '<p class="hero__degrees">' +
      esc(p.postnominals) +
      "</p>" +
      '<p class="hero__role">' +
      esc(p.role) +
      " <em>at " +
      esc(p.affiliation) +
      "</em></p>" +
      '<div class="hero__expertise">' +
      '<p class="hero__expertise-lead">' +
      esc(p.expertise.lead) +
      "</p>" +
      '<ul class="hero__expertise-list">' +
      p.expertise.items
        .map(function (item) {
          return "<li>" + esc(item) + "</li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
      '<div class="hero__actions">' +
      '<a class="btn btn--primary" href="#research">' +
      ICON.arrow +
      "My work</a>" +
      '<a class="btn btn--ghost" href="publications.html">' +
      ICON.arrow +
      "View publications</a>" +
      "</div>" +
      '<div class="hero__meta">' +
      "<span>" +
      ICON.pin +
      esc(p.location) +
      "</span>" +
      "<span>" +
      ICON.mail +
      '<a href="mailto:' +
      esc(p.email) +
      '">' +
      esc(p.email) +
      "</a></span>" +
      "</div>" +
      '<div class="hero__meta">' +
      links +
      "</div>" +
      "</div>" +
      '<figure class="hero__portrait">' +
      '<img src="' +
      p.photo +
      '" width="720" height="720" alt="Portrait of ' +
      esc(p.name) +
      '">' +
      "</figure>" +
      "</div>";
  }

  /* ------------------------------------------------------------------ about */
  function renderAbout(host) {
    var paras = S.about
      .map(function (t) {
        return "<p>" + esc(t) + "</p>";
      })
      .join("");

    host.innerHTML = '<div class="about__body">' + paras + "</div>";
    host.classList.add("about");
  }

  /* ------------------------------------------------------------------ focus */
  function renderFocus(host) {
    host.className = "grid grid--2";
    host.innerHTML = S.focus
      .map(function (f, i) {
        return (
          '<article class="card reveal">' +
          '<span class="card__index">0' +
          (i + 1) +
          "</span>" +
          '<h3 class="card__title">' +
          esc(f.title) +
          "</h3>" +
          '<p class="card__body">' +
          esc(f.body) +
          "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ----------------------------------------------------------- publications */
  function pubMarkup(pub) {
    var title = pub.doi
      ? '<a href="' +
        esc(pub.doi) +
        '" target="_blank" rel="noopener">' +
        esc(pub.title) +
        "</a>"
      : esc(pub.title);

    var meta = [];
    if (pub.venue)
      meta.push('<span class="pub__venue">' + esc(pub.venue) + "</span>");
    if (pub.type) meta.push('<span class="chip">' + esc(pub.type) + "</span>");
    if (pub.status)
      meta.push('<span class="chip chip--accent">' + esc(pub.status) + "</span>");
    if (pub.doi)
      meta.push(
        '<a href="' + esc(pub.doi) + '" target="_blank" rel="noopener">DOI</a>'
      );

    return (
      '<article class="pub reveal">' +
      '<div class="pub__year">' +
      esc(pub.year || "—") +
      "</div>" +
      "<div>" +
      '<h3 class="pub__title">' +
      title +
      "</h3>" +
      '<p class="pub__authors">' +
      highlightSelf(pub.authors) +
      "</p>" +
      '<div class="pub__meta">' +
      meta.join("") +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderPublications(host) {
    var list = S.publications.slice();
    if (host.dataset.featured === "true") {
      list = list.filter(function (p) {
        return p.featured;
      });
    }
    var limit = parseInt(host.dataset.limit, 10);
    if (!isNaN(limit)) list = list.slice(0, limit);

    host.className = "pubs";
    host.innerHTML = list.map(pubMarkup).join("");
  }

  function renderReviewing(host) {
    host.className = "pubs";
    host.innerHTML = S.reviewing.map(pubMarkup).join("");
  }

  /* --------------------------------------------------------------- timeline */
  function renderTimeline(host) {
    var items = S[host.dataset.source] || [];
    host.className = "timeline";
    host.innerHTML = items
      .map(function (it) {
        var points = (it.points || [])
          .map(function (pt) {
            return "<li>" + esc(pt) + "</li>";
          })
          .join("");
        return (
          '<article class="entry reveal">' +
          '<div class="entry__period">' +
          esc(it.period) +
          "</div>" +
          "<div>" +
          '<h3 class="entry__role">' +
          esc(it.role) +
          "</h3>" +
          '<p class="entry__org">' +
          esc(it.org) +
          "</p>" +
          (points ? '<ul class="entry__points">' + points + "</ul>" : "") +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------------- contact */
  function renderContact(host) {
    host.className = "section";
    host.id = host.id || "contact";
    host.innerHTML =
      '<div class="container">' +
      '<div class="contact">' +
      "<div>" +
      '<h2 class="contact__title">Get in touch</h2>' +
      '<p class="contact__text">' +
      "I am always happy to hear about new collaborations, projects, " +
      "or applications of machine learning." +
      "</p>" +
      "</div>" +
      '<a class="btn btn--primary" href="mailto:' +
      esc(S.profile.email) +
      '">' +
      esc(S.profile.email) +
      "</a>" +
      "</div>" +
      "</div>";
  }

  /* ----------------------------------------------------------------- footer */
  function renderFooter(host) {
    var links = PAGES.map(function (p) {
      return '<a href="' + p.href + '">' + esc(p.label) + "</a>";
    }).join("");

    host.className = "footer";
    host.innerHTML =
      '<div class="container footer__inner">' +
      "<span>© " +
      new Date().getFullYear() +
      " " +
      esc(S.profile.name) +
      "</span>" +
      '<nav class="footer__links">' +
      links +
      "</nav>" +
      "</div>";
  }

  /* ---------------------------------------------------------------- reveals */
  function initReveals() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (!entry.isIntersecting) return;
          var node = entry.target;
          setTimeout(function () {
            node.classList.add("is-visible");
          }, Math.min(i * 60, 240));
          io.unobserve(node);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    nodes.forEach(function (n) {
      io.observe(n);
    });
  }

  /* -------------------------------------------------------------- bootstrap */
  var RENDERERS = {
    nav: renderNav,
    hero: renderHero,
    about: renderAbout,
    focus: renderFocus,
    publications: renderPublications,
    reviewing: renderReviewing,
    timeline: renderTimeline,
    contact: renderContact,
    footer: renderFooter,
  };

  function boot() {
    document.title = document.title.replace("{{name}}", S.profile.name);

    document.querySelectorAll("[data-render]").forEach(function (host) {
      var fn = RENDERERS[host.dataset.render];
      if (fn) fn(host);
    });

    initReveals();
  }

  initTheme();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
