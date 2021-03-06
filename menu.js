///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

let pizza = {
    name: 'The Classic',
    price: 12,
    category: 'Main Dish',
    popularity: '1',
    rating: '10',
    tags: ['Hearty','Comforting','Feel-Good','Sharable']
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

// console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

// console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let {price} = pizza
// console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let {category} = pizza
// console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    {
        name: 'The Eggplant',
        price: 9,
        category: 'Sandwiches',
        popularity: 3,
        rating: 8,
        tags: ['Sandwiches','Vegan','Creamy','Earthy']
    },
    {
        name: 'The Green Salad',
        price: 8,
        category: 'Salads',
        popularity: 3,
        rating: 7,
        tags: ['Salad','Vegan','Hardy','Earthy']
    },
    {
        name: 'The Mushroom StirFry',
        price: 9,
        category: 'Main Dish',
        popularity: 2,
        rating: 8,
        tags: ['Mushrooms','Spicy','Saucy','Earthy']
    },
    {
        name: 'The Fruity One',
        price: 5,
        category: 'Side',
        popularity: 4,
        rating: 5,
        tags: ['Fruity','Salad','Sweet','Earthy']
    },
    {
        name: 'The Mountain',
        price: 20,
        category: 'Main Dish',
        popularity: 2,
        rating: 10,
        tags: ['Veggies','Stir Fry','Spicy','Vegan','Earthy','Filling']
    }
]

// console.log(foodArr)

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// console.log(foodArr[2].tags.includes('Spicy')) // => true

let tagToCheck = 'Spicy'

// const foodArrCallback = (foodItem) => {
//     for(let i=0; i<foodItem.tags.length; i++) {
//         if (foodItem.tags[i] === tagToCheck) {
//             return true
//         }
//     }
//     return false
// }

// const filteredTag = foodArr.filter(foodArrCallback)
// const filteredTag2 = foodArr.filter(foodArrCallback2)

// console.log(filteredTag)
// console.log(filteredTag2)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    ???Inside the function, create a variable to hold
    a filtered array??? 

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE


const filterByProperty5 = (property, number, type) => { // another way to write above foodArrCallback
    return foodArr.filter(elem => {
        return type === 'above' ? (elem[property] > number) : type === 'below' ? (elem[property] < number) : 'enter either "above" or "below".' 
    })}





const filterByProperty4 = (property, number, type) => { // another way to write above foodArrCallback 
    return foodArr.filter(elem => {
        return type === 'above' ? (elem[property] > number)
        : type === 'below' ? (elem[property] < number)
        : 'enter either "above" or "below".' })}

// const filterByProperty3 = (property, number, type) => { // yet another way to write above foodArrCallback
//     return foodArr.filter(elem => {
//         if (type === 'above') {
//             return elem[property] > number
//         } 
//         else if (type === 'below') {
//             return elem[property] < number

//         } 
//     })
// }







const filterByProperty2 = (property,number,type) => {
    console.log(property,number,type)
    return foodArr.filter(foodItem => {
        if (type.toLowerCase() === 'above') {
            if (foodItem[property] > number){ // objects whose number is above the property number
                return true
            } else return false
        }
        if (type.toLowerCase() === 'below') {
            if (foodItem[property] < number) {
                return true
            } else return false
        }    
    })
}








// const filterByProperty = (property,number,type) => {
//     console.log(property,number,type)
//     return foodArr.filter(daCallback)
// }

// const daCallback = foodItem => {
//     if (type.toLowerCase() === 'above') {
//         if (foodItem[property] > number){ // objects whose number is above the property number
//             return true
//         } else return false
//     }
//     if (type.toLowerCase() === 'below') {
//         if (foodItem[property] < number) {
//             return true
//         } else return false
//     }    
// }



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/


const priceAbove7 = filterByProperty2('price', 7, 'above')
console.log(priceAbove7)

const ratingBelow8 = filterByProperty2('rating',8,'below')
console.log(ratingBelow8)


const priceAbove10 = filterByProperty5('price',10,'above')
console.log(priceAbove10)

const priceBelow10 = filterByProperty5('price',10,'below')
console.log(priceBelow10)
