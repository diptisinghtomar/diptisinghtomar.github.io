const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Work filtering
const filters = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    workCards.forEach(card => {
      card.classList.toggle(
        "hidden",
        selected !== "all" && card.dataset.category !== selected
      );
    });
  });
});

// Copywriting demo
const copyData = {
  hook: {
    label: "HOOK / 01",
    text: "“Nobody talks about the part where you actually have to keep showing up.”",
    description: "Short, conversational, scroll-stopping."
  },
  meme: {
    label: "MEME / 02",
    text: "“Bro disappeared like he was never part of the group project.”",
    description: "Relatable setup. Quick payoff. No explanation needed."
  },
  brand: {
    label: "BRAND / 03",
    text: "“If your audience wouldn't send it to a friend, why would they share it?”",
    description: "Brand thinking translated into internet language."
  }
};

const copyLabel = document.querySelector("#copy-label");
const copyText = document.querySelector("#copy-text");
const copyDescription = document.querySelector("#copy-description");

document.querySelectorAll(".copy-tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".copy-tabs button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const item = copyData[button.dataset.copy];
    copyLabel.textContent = item.label;
    copyText.textContent = item.text;
    copyDescription.textContent = item.description;
  });
});

// Scroll reveals
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Cursor
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

window.addEventListener("pointermove", event => {
  if (!dot || !ring) return;
  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;
  ring.style.left = `${event.clientX}px`;
  ring.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    ring?.style.setProperty("transform", "translate(-50%,-50%) scale(1.5)");
  });
  el.addEventListener("mouseleave", () => {
    ring?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
  });
});
