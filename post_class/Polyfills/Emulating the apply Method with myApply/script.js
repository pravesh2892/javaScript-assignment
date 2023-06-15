// let character = {
//     name: "Darth Vader",
// };

// function greet(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
// }

Function.prototype.myApply = function (context = {}, args = []) {
    if(typeof this !== 'function'){
        throw new Error(this +"is not callable...");
    }
    if(!Array.isArray(args)){
        throw new Error(args+"is not Array...");
    }
    return this.bind(context, args)
        
    }
    
    // const boundGreet = greet.myApply(character, ["May the Force be with you"]);
    // boundGreet();