// Protection basique : bloque clic droit
document.addEventListener('contextmenu', e => e.preventDefault());

document.getElementById('commentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('comment').value;

  // Protection basique (ne bloque pas tout)
  if (input.includes('<script')) {
    alert("Script détecté !");
    return;
  }

  // Vulnérable à XSS simple
  document.getElementById('commentsList').innerHTML += `<p>${input}</p>`;
});