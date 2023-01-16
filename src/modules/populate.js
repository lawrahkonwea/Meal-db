import { grid } from './constant.js';
import getMeals from './mealList.js';
import modalcomment from './commentForm.js';

const populateMeal = async () => {
  const foods = await getMeals();
  grid.innerHTML = '';
  foods.forEach((food) => {
    const pop = `
        <div class="grid-item">
      <div><img src="${food.image}" alt="${food.name}"></div>
      <div class="card-title">
        <h2>${food.name}</h2>
        <span class="material-symbols-outlined card-likes" data-id="${food.id}">
          favorite
        </span>
      </div>
      <div class="likes">
        <p data-id="${food.id}" class="like-counter"></p>
        <button class="comment-btn" id="${food.id}">Comment</button>
      </div>
      </div>
        `;
    grid.innerHTML += pop;
  });
  modalcomment();
};

export default populateMeal;