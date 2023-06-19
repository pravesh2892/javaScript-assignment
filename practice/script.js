// function handleSubmit() {
//     var username = document.getElementById('name').value;
//     var email = document.getElementById("mail").value;
//     var contact = document.getElementById("contact").value;
    
//     var message = "Username: " + username + "\nEmail: " + email + "\nMobile no.: " + contact;
    
//     alert(message);
//     console.log(message);
//   }
  
//   document.getElementById('subBtn').addEventListener("submit", function(event) {
//     event.preventDefault();
//     handleSubmit();
//   });

// var submit = document.getElementById("sub");
// submit.addEventListener('click', function(event){
//     // event.preventDefault();
//     var Name = document.getElementById("name").value;
//     var email = document.getElementById("mail").value;

//     alert("Name: " + Name + "Email: " + email);
// });

// ----------callback function---------------

// function add(name){
//     //return a+b;
//     console.log("Meena");
// }

// function logging(callback){
//     console.log("hello pravesh");
//     callback(name);
// }

// let result = logging();
// console.log(result);




//==============================================================================


// Function.prototype.myCall = function(context, args) {
//     const func = this;
//     const copyContext = { ...context };
//     copyContext.fnName = func;
//     return copyContext.fnName.apply(copyContext, args);
//   };
  
//   obj2.foo.myCall(obj1, 10, 11, 12, 13);


  function sum(a){
    return function(b){
        return a+b;
    }
  }

  sum(1)(2)






