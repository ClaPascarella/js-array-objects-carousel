const images = [
    {
      image: '01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: '02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: '03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: '04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: '05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
  ];
  
  let currentIndex = 0;
  const carouselImage = document.getElementById('carousel-image');
  const carouselTitle = document.getElementById('carousel-title');
  const carouselText = document.getElementById('carousel-text');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  
  function updateCarousel() {
    const currentImage = images[currentIndex];
    carouselImage.src = currentImage.image;
    carouselImage.alt = currentImage.title;
    carouselTitle.textContent = currentImage.title;
    carouselText.textContent = currentImage.text;
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });
  
  // Inizializza il carosello con la prima immagine
  updateCarousel();