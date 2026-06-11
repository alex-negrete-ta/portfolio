/**
 * SPA Page Navigation Router
 * Manages view toggles and links navigation tracking.
 */
function showPage(id) {
  // Clear the active block display from all page views
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Remove underline tracking states from all links
  document.querySelectorAll('nav a').forEach(navLink => {
    navLink.classList.remove('active');
  });

  // Uncover the targeted tab pane view context
  const targetPage = document.getElementById('page-' + id);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Bind the highlight class interface to the selected menu anchor item
  const targetNavLink = document.getElementById('nav-' + id);
  if (targetNavLink) {
    targetNavLink.classList.add('active');
  }

  // Snap window viewport positions safely back up to global origin zero coordinates
  window.scrollTo(0, 0);
}

// Ensure local routing registers home element state tracking parameters cleanly on init
document.addEventListener('DOMContentLoaded', () => {
  const homeNav = document.getElementById('nav-home');
  if (homeNav) {
    homeNav.classList.add('active');
  }
});