/**
 * Smooth scroll to an element and optionally remove hash from URL
 * @param elementId - The ID of the element to scroll to
 * @param removeHash - Whether to remove the hash from URL after scrolling
 */
export function smoothScrollTo(elementId: string, removeHash: boolean = false) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    if (removeHash) {
      // Wait for scroll to complete, then remove hash
      setTimeout(() => {
        // Use replaceState to remove hash without triggering navigation
        window.history.replaceState(null, '', window.location.pathname);
      }, 100);
    }
  }
}

/**
 * Handle smooth scroll for anchor links
 * @param event - Click event
 * @param href - The href attribute
 * @param removeHash - Whether to remove hash after scrolling
 */
export function handleSmoothScroll(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  removeHash: boolean = false
) {
  if (href.startsWith('#')) {
    event.preventDefault();
    const elementId = href.substring(1);
    smoothScrollTo(elementId, removeHash);
  }
}