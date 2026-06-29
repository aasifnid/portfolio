/* PostHog semantic events that autocapture can't infer on its own:
   how deep into a case study a visitor read, whether they reached the contact
   section, and the hero caricature hover (autocapture records clicks, not hovers).
   Clicks, pageviews, scroll, time and UTM are all handled natively by PostHog. */
(function () {
  function cap(name, props) { try { if (window.posthog && posthog.capture) posthog.capture(name, props || {}); } catch (e) {} }

  if ('IntersectionObserver' in window) {
    // case-study section reached — once per section heading as it scrolls into view
    var heads = document.querySelectorAll('article.cs .sec-top h2');
    if (heads.length) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting) { cap('cs_section_reached', { section: (en.target.textContent || '').trim().slice(0, 60) }); io.unobserve(en.target); }
        });
      }, { threshold: 0.6 });
      [].forEach.call(heads, function (h) { io.observe(h); });
    }
    // contact section reached (home)
    var contact = document.getElementById('contact');
    if (contact) {
      var io2 = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { cap('contact_reached', {}); io2.unobserve(en.target); } });
      }, { threshold: 0.4 });
      io2.observe(contact);
    }
  }

  // hero caricature hover — fired once per page
  var cari = document.querySelector('.portrait-col');
  if (cari) { var hovered = false; cari.addEventListener('mouseenter', function () { if (hovered) return; hovered = true; cap('caricature_hover', {}); }); }
})();
