/* Exercise 1: The Pizza Order 🍕
Write a function orderPizza(topping) that returns a Promise. Inside the Promise:

Use setTimeout to wait 1 second (pretend it's cooking).
If topping is 'pineapple', call reject('Sorry, we ran out of pineapple!').
Otherwise, call resolve("Your ${topping} pizza is ready!").

Then:

Call orderPizza('pepperoni') and use .then() to log the success message.
Call orderPizza('pineapple') and use .then() + .catch() to log the success OR the error message.

Hint: you'll need two separate calls to orderPizza, each with their own .then()/.catch() chain. */


function orderPizza(topping){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(topping=="pinenapple"){
                reject("Sorry, we ran out of pineapple!");
            }else {
                resolve(`Your ${topping} pizza is ready!`);
            }
        },1000);
    });
}
orderPizza('pepperoni').then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
});