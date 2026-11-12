/**
 * Cross-browser smooth scrolling helper that compensates for the sticky header height.
 *
 * @param {React.MouseEvent|Event} e - Click event
 * @param {string} targetSelector - Target element ID or hash (e.g. '#register')
 */
export function smoothScrollTo(e, targetSelector = '#register') {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const id = targetSelector.replace('#', '');
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const targetElement = document.getElementById(id);
  if (targetElement) {
    const stickyHeaderOffset = 88;
    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const targetY = Math.max(0, elementTop - stickyHeaderOffset);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    // Update URL hash without abrupt jump
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    }

    // Set keyboard focus for accessibility if focusable
    const firstInput = targetElement.querySelector('input, button, [tabindex="0"]');
    if (firstInput) {
      setTimeout(() => {
        firstInput.focus({ preventScroll: true });
      }, 500);
    }
  }
}
