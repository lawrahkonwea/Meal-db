import {getFoodList, url} from './fetchApi.js';

const getMeals = async () => {
    // create empty array
    const mealsArr = [];
    // await api data
    const foodList = await getFoodList(url);
    // loop to get indidual data and populate it

    foodList.forEach ((food) => {
        const foodObj = {
            id: food.idMeal,
            name: food.strMeal,
            image: food.strMealThumb,
        };
        mealsArr.push(foodObj);
    });
    return mealsArr;
};

export default getMeals;
