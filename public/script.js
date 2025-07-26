// (function foo(){
//     console.log("Hello, world!");
//     // document.getElementById("tag1")?.innerHTML = "Hello, world! from java script";
//     // document.getElementById("tag1").innerHTML = "Hello, world! from java script";
// if (document.getElementById("tag1")) {
//     tag1.innerHTML = "Hello, world! from java script";
// }
// })();
// This is an immediately invoked function expression (IIFE) that logs "Hello, world!"
// ? will check if the element with id "tag1" exists before trying to set its innerHTML
// If the element does not exist, it will not throw an error due to the optional chaining


// when we use let it shows error because let is block scoped and not hoisted like var
// console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = "Hello, world!";
// my var is hoisted but it is placed in Special zone called temporal dead zone (TDZ)
// TDZ is the time between the start of the block and the declaration of the variable
// where the variavle exists but cannot be accessed
// so it will throw an reference error if we try to access it before initialization
// when we use const it shows error because const is block scoped and not hoisted like var
// console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = "Hello, world!"; 
// when we use var it shows undefined because var is hoisted and initialized with undefined
// but it is not block scoped, so it can be accessed before initialization 
// but it will return undefined
//hoisting in javascript with variables
console.log(myVar); // undefined
var myVar = "Hello, world!";
//hoisting in javascript with functions
console.log(myFunction()); // "Hello, world!"       
function myFunction() {
    return "Hello, world!";
}


// ✅ Purpose of setTimeout(fn, 0)
// It is used to defer execution of a function until the current call stack is clear.

// 🔄 What does that mean?
// When JavaScript runs, it uses a single-threaded model and maintains a call stack to keep track of function calls. If you call a function directly, it executes immediately. But if you use setTimeout(fn, 0), it puts fn at the end of the event queue, allowing the browser to finish current tasks before running it.




// function foo(){
//     console.log("Hello, world!");
//     // document.getElementById("tag1")?.innerHTML = "Hello, world! from java script";
//     // document.getElementById("tag1").innerHTML = "Hello, world! from java script";
// if (document.getElementById("tag1")) {
//     tag1.innerHTML = "Hello, world! from java script";
// }
// }
// setTimeout(foo,5000);
// setTimeout(() => {
//     console.log("Hello, world! from arrow function");
// }, 5000);


var productlist = [];

function loadproduct(loaddata){
    setTimeout(() => {
    productlist=productlistfromServer; // Simulating data fetch from serve
    console.log("Product data loaded");
    loaddata();
    }, 2000);
}

// annonymous function to load product data
const foo = (arg1) => {    console.log(`Hello, ${arg1}!`); };


function loaddata(){

    if(productlist.length === 0) {
        document.getElementById("data").innerHTML = "<p>No products available.</p>";
        return;
    }
    let table = `<table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Availability</th>
            </tr>
        </thead>
        <tbody>`;
    table += productlist.map((product,index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.availability}</td>
        </tr>`;
    }).join('');
    table += `</tbody>
    </table>`;
    document.getElementById("data").innerHTML = table;
}


// function loaddata(){
//     let table = `<table>
//         <thead>
//             <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Availability</th>
//             </tr>
//         </thead>
//         <tbody>`;
//     for (let i = 0; i < productlist.length; i++) {
//         table += `<tr>
//             <td>${productlist[i].name}</td>
//             <td>$${productlist[i].price}</td>
//             <td>${productlist[i].availability}</td>
//         </tr>`;
//     }
//     table += `</tbody></table>`;
//     document.getElementById("data").innerHTML = table;
// }
// setTimeout(loadproduct, 2000);
// Load product data after 2 seconds
// setTimeout(loaddata,5000);


loadproduct(loaddata);
loaddata();;

function greetWithTime(name, timeOfDay) {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

// Call the function with two parameters using setTimeout
setTimeout(greetWithTime, 3000, "Alice", "morning");

var arr=[1,2,3,4,5,6,7,8,9,10];
function renderproducts() {
    document.getElementById("tag2").innerHTML = arr;
}
renderproducts();