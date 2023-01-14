import { fetchComment, postComment } from './comments.js';

const image = document.querySelector('.popup-image img');
const dishName = document.querySelector('.dish-name');
const addComment = document.querySelector('.add-comment');
const commentModal = document.querySelector('.popup-container');
const instruction = document.querySelector('.instruction');
const close = document.querySelector('#close');

// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const form = (id) => {
  addComment.innerHTML = '<h4>Add a comment</h4>';
  const commentForm = document.createElement('form');
  commentForm.innerHTML = `
  <div class="input-con">
         <input class='name' name='name' type="text" placeholder="Your Name" required>
          <input class='new-comment' name='comment' type="text" placeholder="Write your insight" required>
          <input class="btn" id='${id}' name='comment-button' type="submit" value="Comment">
          </div>
  `;

  addComment.appendChild(commentForm);
  const formName = document.querySelector('.name');
  const formcomment = document.querySelector('.new-comment');
  const formButton = document.querySelector('.btn');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target, commentForm.element)
    // console.log(formName.value,formcomment.value,formButton.id)
    if (formName.value && formcomment.value) {
      // console.log(formName.value,formcomment.value,formButton.id)
      postComment(formName.value, formcomment.value, formButton.id);
      commentForm.reset();
    }
  });
};

const modalcomment = () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      form(btn.id);
      fetchComment(btn.id);
      fetch(`${url}${btn.id}`)
        .then((response) => response.json())
        .then((data) => {
          const mealDetail = data.meals[0];
          // console.log(data.meals[0])
          commentModal.classList.remove('hidden');
          image.setAttribute('src', mealDetail.strMealThumb);
          dishName.innerHTML = mealDetail.strMeal;
          instruction.innerHTML = mealDetail.strInstructions;
        });
    });
  });
  close.addEventListener('click', () => {
    commentModal.classList.add('hidden');
  });
};

export default modalcomment;