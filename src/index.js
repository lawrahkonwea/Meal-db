import './style.css';
import populateMeal from './modules/populate.js';
import { createLikes } from './modules/getlikes.js';
import showlike from './modules/displayLikes.js';
import counter from './modules/mealCount.js'

document.addEventListener('DOMContentLoaded', async () => {
  await populateMeal();
  const textLikes = document.querySelectorAll('.like-counter');
  textLikes.forEach(async (textLike) => {
    await showlike(textLike);
  });
  const mealCounter = document.querySelector('.meal-counter');
  const count = document.querySelectorAll('.grid-item');
  counter(mealCounter, count);
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    const mealId = likeBtn.getAttribute('data-id');
    await createLikes(mealId);
    const txtlike = likeBtn.parentElement.nextElementSibling.firstElementChild;
    await showlike(txtlike);
  }
});
