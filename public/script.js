const form = document.getElementById("f9283");
const textarea = document.getElementById("c7283");
const commentsList = document.getElementById("list8972");

// Charge les commentaires depuis l'API backend (non sécurisée)
fetch("/api/comments")
  .then(res => res.json())
  .then(data => {
    data.forEach(msg => {
      const p = document.createElement("p");
      p.innerHTML = msg; // Injection directe sans filtrage = XSS
      commentsList.appendChild(p);
    });
  });

form.addEventListener("submit", e => {
  e.preventDefault();
  const message = textarea.value;

  // Pas de validation frontend
  fetch("/api/comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  }).then(() => location.reload());
});
