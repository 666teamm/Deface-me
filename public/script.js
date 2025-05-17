const form = document.getElementById("form");
const textarea = document.getElementById("message");
const commentsList = document.getElementById("commentList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const raw = textarea.value;

  const p = document.createElement("p");
  p.innerHTML = raw;
  commentsList.appendChild(p);

  await fetch("/api/comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: raw })
  });

  textarea.value = "";
});

window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("/api/comments");
  const messages = await res.json();
  messages.forEach(msg => {
    const p = document.createElement("p");
    p.innerHTML = msg;
    commentsList.appendChild(p);
  });
});
