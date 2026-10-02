const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle("hidden", value !== "all" && card.dataset.category !== value);
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
