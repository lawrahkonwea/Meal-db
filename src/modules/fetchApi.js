const url = 'http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getFoodList = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    const mealList = json.meals.slice(0, 12);

    return mealList;
};

export { url, getFoodList};