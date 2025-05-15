// Enforce Trusted Types (modern browsers)
window.trustedTypes?.createPolicy('default', {
  createHTML: str => str.replace(/[&<>"']/g, "")
});

// Lock down objects
Object.freeze(Object.prototype);
Object.freeze(document);
Object.freeze(document.body);

// Basic sanitization
function sanitize(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Form logic
const form = document.getElementById("f9283");
const textarea = document.getElementById("c7283");
const commentsList = document.getElementById("list8972");

form.addEventListener("submit", e => {
  e.preventDefault();
  const raw = textarea.value;

  // Very strict input validation
  if (/script|<|>|on\w+=|img|iframe|style|svg|math/i.test(raw)) {
    alert("Blocked dangerous input.");
    return;
  }

  const clean = sanitize(raw);
  const p = document.createElement("p");
  p.textContent = clean;
  commentsList.appendChild(p);
  textarea.value = "";
});

// Block mutation/injection attempts
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      alert("DOM injection attempt blocked.");
      location.reload();
    }
  }
});
observer.observe(document.body, { childList: true, subtree: true });
