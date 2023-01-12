const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const getFoodList = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  const mealList = json.meals.slice(0, 15);

  return mealList;
};

export { url, getFoodList };