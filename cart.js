///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const sumCallback = (acc, curr) => {
    return acc + curr.price
}
const totalPrice = cart.reduce(sumCallback, 0)

console.log(totalPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal,couponValue,tax) => {
    cartTotal *= 1 + tax
    cartTotal -= couponValue
    return cartTotal
}

console.log(calcFinalPrice(totalPrice,6,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The customer object will include things that help staff cater to the guests needs, including what they might order, and what kind of customer service they might like
customer object properties ----
name: String ... to greet guest by name
age : Number ... helps staff accomodate needs and what kind of dining experience they might have.
favorite food: String ... their most commonly ordered food item, so waiters can be like 'having the eggplant sammy today?' which is kinda cool
accomodations: Array ... other accomodations that can help give guest best experience
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const mrWalters = {
    name: 'Tom Walters',
    age: 73,
    'favorite Food': 'Pasta Fettucino & tea',
    accommodations: ['Sit by window','Sit in quiet area','Likes his food SUPER hot','Usually comes alone']
}

console.log(mrWalters)