// Function to toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Animation for elements when they come into view
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Sticky navigation
function stickyNav() {
  const nav = document.querySelector("nav");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  if (window.scrollY > 100) {
    nav.style.padding = "0 10%";
    nav.style.height = "70px";
    if (hamburgerNav) {
      hamburgerNav.style.height = "60px";
    }
  } else {
    nav.style.padding = "0 10%";
    nav.style.height = "80px";
    if (hamburgerNav) {
      hamburgerNav.style.height = "70px";
    }
  }
}

// Initialize animations
function initAnimations() {
  // Add reveal classes to elements
  document.querySelectorAll(".section__pic-container").forEach((el) => {
    el.classList.add("reveal", "fade-right");
  });

  document.querySelectorAll(".section__text").forEach((el) => {
    el.classList.add("reveal", "fade-left");
  });

  document.querySelectorAll(".details-container").forEach((el) => {
    el.classList.add("reveal", "fade-up");
  });

  document.querySelectorAll(".text-container").forEach((el) => {
    el.classList.add("reveal", "fade-up");
  });

  document.querySelectorAll(".color-container").forEach((el) => {
    el.classList.add("reveal", "fade-up");
  });

  document.querySelectorAll(".contact-info-upper-container").forEach((el) => {
    el.classList.add("reveal", "fade-up");
  });
}

// Type animation for the title
function typeEffect() {
  const titles = document.querySelectorAll(".title");
  titles.forEach((title) => {
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
  });
}

// Event listeners
window.addEventListener("scroll", revealElements);
window.addEventListener("scroll", stickyNav);
window.addEventListener("load", () => {
  initAnimations();
  revealElements();
  setTimeout(typeEffect, 500);
});

// Update copyright year
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});