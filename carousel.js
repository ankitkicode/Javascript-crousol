document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    // Clone first and last items to create infinite effect
    const firstItemClone = items[0].cloneNode(true);
    const lastItemClone = items[totalItems - 1].cloneNode(true);
    carousel.appendChild(firstItemClone);
    carousel.insertBefore(lastItemClone, items[0]);
  
    const updateCarousel = () => {
      const offset = -(currentIndex + 1) * 100; // account for cloned item
      carousel.style.transform = `translateX(${offset}%)`;
    };
  
    const resetTransition = () => {
      carousel.style.transition = 'none';
    };
  
    const restoreTransition = () => {
      carousel.style.transition = 'transform 0.5s ease-in-out';
    };
  
    document.getElementById('prev').addEventListener('click', () => {
      currentIndex--;
      updateCarousel();
      if (currentIndex < 0) {
        setTimeout(() => {
          resetTransition();
          currentIndex = totalItems - 1;
          updateCarousel();
          setTimeout(restoreTransition, 50);
        }, 500);
      }
    });
  
    document.getElementById('next').addEventListener('click', () => {
      currentIndex++;
      updateCarousel();
      if (currentIndex >= totalItems) {
        setTimeout(() => {
          resetTransition();
          currentIndex = 0;
          updateCarousel();
          setTimeout(restoreTransition, 50);
        }, 500);
      }
    });
  
    updateCarousel();
  });
  