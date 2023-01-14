import { grid } from './constant.js';
import getMeals from './mealList.js';

const populateMeal = async () => {
  const foods = await getMeals();
  foods.forEach((food) => {
    const pop = `
        <div class = "grid-item">
        <div><img src="${food.image}" alt="${food.name}"></div>
        <div class ="card-title">
        <h2>${food.name}</h2>
        <span class="material-symbols-outlined">favorite</span>
        </div>
        <div class="likes">
        <p>0 likes</p>
        <button data-id="${food.id}" onclick="openPopupWindow()">comment</button>
        </div>
        </div>
        `;
    grid.innerHTML += pop;
  });
};

export default populateMeal;
