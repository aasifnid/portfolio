/* Scroll reveal — sections/cards rise + fade as they enter the viewport (one-time).
   Shared by the homepage and case studies. Gated by .js-motion (set pre-paint only when
   motion is allowed), so no-JS and reduced-motion users see everything immediately. */
(function () {
  if (!document.documentElement.classList.contains('js-motion')) return;
  var SEL = '.worked-label,.worked .marquee,.sec-top,.cards .card,.play-intro,.play-grid .nid-card,.nid-grid .nid-card,#roster,.quote-card,.peer-ctrl,.about-intro,.about > .wrap > .about-sub,.tl-v,.contact .big,.contact-sub,.contact-rule,.ctas,.cs-list,.cs-img-grid,.cs-img-pair,.cs-table-wrap,article.cs .media';
  var els = [].slice.call(document.querySelectorAll(SEL));
  if (!els.length) return;
  // stagger the home galleries left-to-right (each child is its own reveal target)
  ['.cards', '.nid-grid', '.play-grid'].forEach(function (g) {
    var grid = document.querySelector(g);
    if (!grid) return;
    [].forEach.call(grid.children, function (c, k) { c.style.animationDelay = Math.min(k * 0.1, 0.45) + 's'; });
  });
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
  els.forEach(function (e) { io.observe(e); });
})();
