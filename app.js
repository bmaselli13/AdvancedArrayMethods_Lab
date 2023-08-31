
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function filterVegetarianDishes(dishes) {
    let vegetarianDishes = dishes.filter(function(dish) {
        return dish.cuisine === "Vegetarian";
    });

    return vegetarianDishes;
}

let vegetarianFood = filterVegetarianDishes(dishes);
console.log('vegetarianFood', vegetarianFood);


//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
function filterDishesByCuisine(dishes) {
    const userInput = prompt("Enter a cuisine type:");
    const cuisineDishes = dishes.filter(function(dish) {
        return dish.cuisine.toLowerCase() === userInput.toLowerCase();
    });

    return cuisineDishes;
}

let selectedCuisine = filterDishesByCuisine(dishes);
console.log('Dishes matching selected cuisine:', selectedCuisine);




//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function filterItalianLargeServings(dishes) {
    let italianLargeServings = dishes.filter(function(dish) {
        return dish.cuisine === "Italian" && dish.servings > 5;
    });

    return italianLargeServings;
}

let italianDishesWithLargeServings = filterItalianLargeServings(dishes);
console.log('Italian dishes with large servings:', italianDishesWithLargeServings);

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function filterDishesByIdAndServingCount(dishes) {
    let matchingDishes = dishes.filter(function(dish) {
        return dish.id === dish.servings;
    });

    return matchingDishes;
}

let dishesWithMatchingIdAndServingCount = filterDishesByIdAndServingCount(dishes);
console.log('Dishes with matching id and serving count:', dishesWithMatchingIdAndServingCount);


//5. Create a function that will return only dishes whose serving count is even.
//Filter
function filterDishesByEvenServingCount(dishes) {
    let evenServingDishes = dishes.filter(function(dish) {
        return dish.servings % 2 === 0;
    });

    return evenServingDishes;
}

let dishesWithEvenServingCount = filterDishesByEvenServingCount(dishes);
console.log('Dishes with even serving count:', dishesWithEvenServingCount);


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function filterDishesWithChickpeaIngredient(dishes) {
    let chickpeaDishes = dishes.filter(function(dish) {
        return dish.ingredients.includes("chickpea");
    });

    return chickpeaDishes;
}

let dishesWithChickpea = filterDishesWithChickpeaIngredient(dishes);
console.log('Dishes with "chickpea" ingredient:', dishesWithChickpea);



//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter
function filterDishesByIngredient(dishes) {
    const userInput = prompt("Enter the name of an ingredient:");
    let dishesWithIngredient = dishes.filter(function(dish) {
        return dish.ingredients.includes(userInput.toLowerCase());
    });

    return dishesWithIngredient;
}

let dishesWithUserIngredient = filterDishesByIngredient(dishes);
console.log('Dishes with user-specified ingredient:', dishesWithUserIngredient);



//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function getCuisineTypes(dishes) {
    let cuisineTypes = dishes.map(function(dish) {
        return dish.cuisine;
    });

    return cuisineTypes;
}

let cuisineTypeArray = getCuisineTypes(dishes);
console.log('Array of cuisine types:', cuisineTypeArray);



//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 
function getCuisineAndDishNames(dishes) {
    let cuisineAndDishNames = dishes.map(function(dish) {
        return dish.cuisine + " " + dish.name;
    });

    return cuisineAndDishNames;
}

let cuisineAndDishNameArray = getCuisineAndDishNames(dishes);
console.log('Array of cuisine and dish names:', cuisineAndDishNameArray);



//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]
function getVegetarianDishNames(dishes) {
    let vegetarianDishNames = dishes
        .filter(function(dish) {
            return dish.cuisine === "Vegetarian";
        })
        .map(function(dish) {
            return dish.cuisine + " " + dish.name;
        });

    return vegetarianDishNames;
}

let vegetarianDishesResult = getVegetarianDishNames(dishes);
console.log('Result:', vegetarianDishesResult);





//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.
function getUniqueCuisineTypes(dishes) {
    let uniqueCuisineTypes = [];
    
    dishes.forEach(function(dish) {
        if (!uniqueCuisineTypes.includes(dish.cuisine)) {
            uniqueCuisineTypes.push(dish.cuisine);
        }
    });

    return uniqueCuisineTypes;
}

let uniqueCuisines = getUniqueCuisineTypes(dishes);
console.log('Unique cuisine types:', uniqueCuisines);


//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function filterDishesWithTomatoOrCheese(dishes) {
    let tomatoOrCheeseDishes = dishes.filter(function(dish) {
        return dish.ingredients.some(function(ingredient) {
            return ingredient === "tomato" || ingredient === "cheese";
        });
    });

    return tomatoOrCheeseDishes;
}

let dishesWithTomatoOrCheese = filterDishesWithTomatoOrCheese(dishes);
console.log('Dishes with "tomato" or "cheese" ingredients:', dishesWithTomatoOrCheese);


//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function getTotalServingCount(dishes) {
    let totalServingCount = dishes.reduce(function(acc, dish) {
        return acc + dish.servings;
    }, 0);

    return totalServingCount;
}

let totalServings = getTotalServingCount(dishes);
console.log('Total serving count of all dishes:', totalServings);


//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
function getUniqueCuisineObjects(dishes) {
    let uniqueCuisineObjects = dishes.filter(function(dish, index) {
        return !dishes.some(function(otherDish, otherIndex) {
            return index !== otherIndex && dish.cuisine === otherDish.cuisine;
        });
    });

    return uniqueCuisineObjects;
}

let uniqueCuisineDishes = getUniqueCuisineObjects(dishes);
console.log('Objects with unique cuisine types:', uniqueCuisineDishes);

