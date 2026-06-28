/* Custom interaction events for Vercel Web Analytics (pageviews are automatic).
   Delegated click tracking — one listener, works on every page, no markup changes.
   No-ops safely if analytics isn't enabled/loaded. */
(function () {
  function track(name, props) {
    try { if (window.va) window.va('event', Object.assign({ name: name }, props || {})); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('a,button');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    if (el.closest('.cards'))            return track('project_card', { href: href });
    if (el.closest('.play-grid'))        return track('playground_card', { href: href });
    if (el.closest('.nid-grid'))         return track('nid_card', { href: href });
    if (el.classList.contains('cta'))    return track('contact_cta', { href: href });
    if (el.classList.contains('cs-nav-back')) return track('case_study_back', {});
    if (el.classList.contains('cs-nav-btn'))  return track('nav', { href: href });
    if (el.closest('.nav-links') || el.closest('.nav-mobile-menu')) return track('nav', { href: href });
    if (el.closest('#roster') || el.classList.contains('peer-by'))  return track('recommendation', {});
  }, true);
})();
