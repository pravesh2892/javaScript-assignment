function handleSubmit() {
    var username = document.getElementById('name').value;
    var email = document.getElementById("mail").value;
    var contact = document.getElementById("contact").value;
    
    var message = "Username: " + username + "\nEmail: " + email + "\nMobile no.: " + contact;
    
    alert(message);
    console.log(message);
  }
  
  document.getElementById('subBtn').addEventListener("submit", function(event) {
    event.preventDefault();
    handleSubmit();
  });

// var submit = document.getElementById("sub");
// submit.addEventListener('click', function(event){
//     // event.preventDefault();
//     var Name = document.getElementById("name").value;
//     var email = document.getElementById("mail").value;

//     alert("Name: " + Name + "Email: " + email);
// });