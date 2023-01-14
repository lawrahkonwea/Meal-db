const commentCounter = (data, link) => {
  if (data.length) {
    link.innerHtml = `comment(${data.length})`;
  }
  return data.length;
};

export default commentCounter;