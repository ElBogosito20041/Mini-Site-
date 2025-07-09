
// Menu burger responsive
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Carrousel
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let index = 0;
let intervalId;

function showSlide(i) {
  carouselImages.style.transform = `translateX(-${i * 100}%)`;

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();
showSlide(index);

const films = [
  {
    title: "Star Wars: A New Hope (Episode IV)",
    year: 1977,
    sagaOrder: 6,
    image: "https://i.etsystatic.com/14140434/r/il/de4702/1526222179/il_570xN.1526222179_kl3i.jpg",
  },
  {
    title: "Star Wars: The Empire Strikes Back (Episode V)",
    year: 1980,
    sagaOrder: 7,
    image: "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Star Wars: Return of the Jedi (Episode VI)",
    year: 1983,
    sagaOrder: 8,
    image: "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Star Wars: The Phantom Menace (Episode I)",
    year: 1999,
    sagaOrder: 1,
    image: "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Star Wars: Attack of the Clones (Episode II)",
    year: 2002,
    sagaOrder: 2,
    image: "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg",
  },
  {
  title: "Star Wars: The Clone Wars",
  year: 2008,
  sagaOrder: 2.5,
  image: "https://lumiere-a.akamaihd.net/v1/images/star-wars-the-clone-wars-poster_eca245da.jpeg",
},
  {
    title: "Star Wars: Revenge of the Sith (Episode III)",
    year: 2005,
    sagaOrder: 3,
    image: "https://lumiere-a.akamaihd.net/v1/images/image_ff356cdb.jpeg",
  },
  {
    title: "Star Wars: The Force Awakens (Episode VII)",
    year: 2015,
    sagaOrder: 9,
    image: "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg",
  },
  {
    title: "Rogue One: A Star Wars Story",
    year: 2016,
    sagaOrder: 5,
    image: "https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_1000_309ed8f6.jpeg",
  },
  {
    title: "Star Wars: The Last Jedi (Episode VIII)",
    year: 2017,
    sagaOrder: 10,
    image: "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg",
  },
  {
    title: "Solo: A Star Wars Story",
    year: 2018,
    sagaOrder: 4,
    image: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg",
  },
  {
    title: "Star Wars: The Rise of Skywalker (Episode IX)",
    year: 2019,
    sagaOrder: 11,
    image: "https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-films-poster-catalog_c46adc71.jpeg",
  }
];

let isChrono = false;
const grid = document.getElementById("films-grid");
const sortBtn = document.getElementById("sort-btn");

function renderFilms(filmsArray) {
  grid.innerHTML = "";
  filmsArray.forEach(film => {
    const card = document.createElement("div");
    card.className = "film-card";
    card.innerHTML = `
      <img src="${film.image}" alt="${film.title}" />
      <h3>${film.title}</h3>
      <p>${film.year}</p>
    `;
    grid.appendChild(card);
  });
}

renderFilms(films.sort((a, b) => a.year - b.year)); // par défaut : ordre de sortie

sortBtn.addEventListener("click", () => {
  isChrono = !isChrono;
  sortBtn.textContent = isChrono
    ? "🎬 Chronological"
    : "📅 Release date";
  const sorted = isChrono
    ? [...films].sort((a, b) => a.sagaOrder - b.sagaOrder)
    : [...films].sort((a, b) => a.year - b.year);
  renderFilms(sorted);
});

// Bouton Back on Top 
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
 

// --- Barre de recherche du header ---
const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");
const actions = document.querySelector(".actions");
const searchResults = document.getElementById("search-results");

searchToggle.addEventListener("click", () => {
  actions.classList.toggle("active");
  if (actions.classList.contains("active")) {
    searchBar.style.display = "inline-block";
    searchBar.focus();
  } else {
    searchBar.style.display = "none";
    searchResults.style.display = "none";
  }
});

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = films.filter(film => film.title.toLowerCase().includes(query));
  if (query && filtered.length > 0) {
    searchResults.innerHTML = filtered.map(f => `<li>${f.title}</li>`).join('');
    searchResults.style.display = "block";
  } else {
    searchResults.style.display = "none";
  }
});

// Ajoute redirection au clic sur un film
searchResults.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selectedTitle = e.target.textContent;
    const found = films.find(f => f.title === selectedTitle);
    if (found && found.image) {
      window.open(found.image, "_blank");
    }
  }
});


const floatingToggle = document.querySelector('.floating-menu-toggle');
const navList = document.querySelector('nav ul');

if (floatingToggle && navList) {
  floatingToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}