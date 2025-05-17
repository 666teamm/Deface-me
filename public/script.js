const form = document.getElementById("f9283");
const textarea = document.getElementById("c7283");
const commentsList = document.getElementById("list8972");

// Charge les commentaires depuis l'API serverless
fetch("/api/comments")
  .then(res => res.json())
  .then(data => {
    data.forEach(msg => {
      const p = document.createElement("p");
      p.innerHTML = msg; // volontairement vulnérable XSS
      commentsList.appendChild(p);
    });
  });

form.addEventListener("submit", e => {
  e.preventDefault();
  const message = textarea.value;

  fetch("/api/comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  }).then(() => location.reload());
});
