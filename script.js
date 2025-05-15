// Trusted Types (if supported)
window.trustedTypes?.createPolicy('default', {
  createHTML: input => input.replace(/[&<>"'`=\/]/g, '')
});

// Freeze the DOM
Object.freeze(document);
Object.freeze(document.body);
Object.freeze(Object.prototype);

// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Anti-devtools (basic bait)
setInterval(() => {
  const devtoolsOpened = /./;
  devtoolsOpened.toString = function () {
    alert("DevTools detected. Reloading...");
    location.reload();
  };
  console.log(devtoolsOpened);
}, 2000);

// Obfuscated IDs
const form = document.getElementById("f9823");
const textarea = document.getElementById("c1347");
const commentList = document.getElementById("cList");

form.addEventListener("submit", e => {
  e.preventDefault();

  const raw = textarea.value;
  if (/script|<|>|onerror|onload|iframe|img/i.test(raw)) {
    alert("Blocked dangerous content.");
    return;
  }

  const escaped = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const p = document.createElement("p");
  p.textContent = escaped;
  commentList.appendChild(p);

  textarea.value = "";
});
