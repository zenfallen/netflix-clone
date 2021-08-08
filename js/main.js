// Variables
const row = document.querySelector('.carousel-container');
const movies = document.querySelectorAll('.movie');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
// Variables

// Next Arrow Event Listener
nextArrow.addEventListener('click', () => {
  row.scrollLeft += row.offsetWidth;

  const activeIndicator = document.querySelector('.indicators .active');

  if (activeIndicator.nextSibling) {
    activeIndicator.nextSibling.classList.add('active');
    activeIndicator.classList.remove('active');
  }
});
// Next Arrow Event Listener

// Prev Arrow Event Listener
prevArrow.addEventListener('click', () => {
  row.scrollLeft -= row.offsetWidth;

  const activeIndicator = document.querySelector('.indicators .active');

  if (activeIndicator.previousSibling) {
    activeIndicator.previousSibling.classList.add('active');
    activeIndicator.classList.remove('active');
  }
});
// Prev Arrow Event Listener

// Pagination
const numPages = movies.length / 5;

for (let i = 0; i < numPages; i++) {
  const indicator = document.createElement('button');

  if (i === 0) {
    indicator.classList.add('active');
  }

  document.querySelector('.indicators').appendChild(indicator);

  indicator.addEventListener('click', (e) => {
    row.scrollLeft = i * row.offsetWidth;
    document.querySelector('.indicators .active').classList.remove('active');
    e.target.classList.add('active');
  });
}
// Pagination

// Image Hover
movies.forEach((movie) => {
  movie.addEventListener('mouseenter', (e) => {
    const element = e.currentTarget;
    setTimeout(() => {
      movies.forEach(movie => movie.classList.remove('hover'));
      element.classList.add('hover');
    }, 100);
  });
});

row.addEventListener('mouseleave', () => {
  movies.forEach(movie => movie.classList.remove('hover'));
})
// Image Hover
