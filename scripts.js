let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
  currentIndex += direction;

  // проверка выхода за границы
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // если за границей, показываем последний
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // если за границей, показываем первый
  }

  // пдвигаем слайды
  const offset = currentIndex * -10;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}
