const commentCounter = () => {
  const commentCount = document.querySelectorAll('.usercomments').length;
  return commentCount;
};

export default commentCounter;