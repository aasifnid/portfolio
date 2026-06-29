/* Custom interaction events for Vercel Web Analytics (pageviews are automatic).
   Delegated tracking — one set of listeners, every page, no markup changes.
   Runs in capture phase so it records before the page's own lightbox/video handlers.
   No-ops safely if analytics isn't enabled/loaded. */
(function () {
  function track(name, props) {
    try { if (window.va) window.va('event', Object.assign({ name: name }, props || {})); } catch (e) {}
  }
  function base(u) { return (u || '').split('?')[0].split('#')[0].split('/').pop() || (u || ''); }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;

    // media — case-study videos (open fullscreen / play) and zoomable images (lightbox)
    var vid = t.closest('video');
    if (vid) {
      var vs = vid.currentSrc || (vid.querySelector('source') || {}).src || '';
      return track('video_open', { src: base(vs) });
    }
    var img = t.closest('.cs-img:not(.no-zoom)');
    if (img) return track('media_open', { src: base(img.currentSrc || img.src) });

    var el = t.closest('a,button');
    if (!el) return;
    var href = el.getAttribute('href') || '';

    // home / brand + back-to-top
    if (el.hasAttribute('data-nav-home') || el.classList.contains('nav-name')) return track('home_button', {});
    if (el.classList.contains('foot-top')) return track('back_to_top', {});

    // action CTAs (contact + case-study nav button) — labelled by destination
    if (el.classList.contains('cta') || el.classList.contains('cs-nav-btn')) {
      var kind = /^mailto:/.test(href) ? 'email'
               : /linkedin\.com/.test(href) ? 'linkedin'
               : /drive\.google\.com/.test(href) ? 'resume'
               : 'other';
      return track('cta_click', { kind: kind });
    }

    // cards
    if (el.closest('.cards'))     return track('project_card', { href: base(href) });
    if (el.closest('.play-grid')) return track('playground_card', { href: href });
    if (el.closest('.nid-grid'))  return track('nid_card', { href: href });

    // nav tabs (desktop + mobile) — label by data-nav-link or visible text
    if (el.closest('.nav-links') || el.closest('.nav-mobile-menu'))
      return track('nav_tab', { tab: el.getAttribute('data-nav-link') || (el.textContent || '').trim().slice(0, 40) });

    if (el.classList.contains('cs-nav-back')) return track('case_study_back', {});
    if (el.closest('#roster') || el.classList.contains('peer-by')) return track('recommendation', {});
  }, true);

  // caricature hover — fired once per page load so it doesn't spam events
  var cari = document.querySelector('.portrait-col');
  if (cari) {
    var hovered = false;
    cari.addEventListener('mouseenter', function () { if (hovered) return; hovered = true; track('caricature_hover', {}); });
  }
})();

/* Capture campaign source from UTM tags as a custom event.
   Vercel's native UTM breakdown is a paid (Web Analytics Plus) feature, but custom
   events are free — so a tagged visit shows up under Events as `visit_source`. */
(function () {
  try {
    var q = new URLSearchParams(location.search);
    var s = q.get('utm_source'), c = q.get('utm_campaign'), m = q.get('utm_medium');
    if (!(s || c || m)) return;
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    window.va('event', { name: 'visit_source', source: s || '(none)', campaign: c || '(none)', medium: m || '(none)' });
  } catch (e) {}
})();
