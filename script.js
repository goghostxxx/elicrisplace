document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach(img => {
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
    } else {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImg = entry.target;
            if (lazyImg.dataset.src) lazyImg.src = lazyImg.dataset.src;
            observer.unobserve(lazyImg);
          }
        });
      });
      io.observe(img);
    }
  });
});


const viewBtn = document.getElementById('viewAllBtn');
const hiddenCards = document.querySelectorAll('.amenity-card.hidden');

if (viewBtn && hiddenCards.length) {
  viewBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.style.display = 'block');
    viewBtn.style.display = 'none';
  });
}

const text = "Experience the perfect blend of Luxury hotel comfort and Airbnb flexibility. If you need a cozy room for the night or a spacious rental for your extended stay, we've created a warm, welcoming space just for you.";
const words = text.split(" ");
const heroText = document.getElementById("heroText");
let index = 0;

function typeWords() {
  if (!heroText) return;
  if (index < words.length) {
    heroText.innerHTML += words[index] + " ";
    index++;
    setTimeout(typeWords, 180);
  } else {
    setTimeout(() => {
      heroText.innerHTML = "";
      index = 0;
      typeWords();
    }, 10000);
  }
}
typeWords();

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}