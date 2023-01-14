import commentCounter from './commentCounter.js';

const header = document.querySelector('.comments-counter');

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iHlfVWj35yMMl9mYGaLB/';

const fetchComment = async (id) => {
  header.innerHTML = 'comments (0)';

const res = await fetch(`${baseUrl}comments?item_id=${id}`)
const data = await res.json()
let newData = data

if (!res.ok) {
  newData = []
}
    
      const commentList = document.querySelector('.comments-generator');
      commentList.innerHTML = '';
      newData.map((comment) => { // eslint-disable-line
        const li = document.createElement('li');
        li.className = 'usercomments'
        li.innerHTML = `<span class="date">${comment.creation_date}</span><span class="date">${comment.username}:</span><span class="date">${comment.comment}</span>`;
        commentList.appendChild(li);
      });
    
    const commentCount = commentCounter()
    header.innerHTML = `comment(${commentCount})`;

};

const postComment = async (username, comment, id) => {
  await fetch(`${baseUrl}comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    fetchComment(id);
  });
};

export { fetchComment, postComment };
