// javascript code goes here
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const fullName = `${user.name.first} ${user.name.last}`;
            const userImg = user.picture.large;
            const age = user.dob.age;
            const email = user.email;
            const phone = user.phone;

            document.getElementById('userName').textContent = fullName;
            document.getElementById('userImage').src = userImg;

            // Event listeners for additional info buttons
            document.querySelector('button[data-attr="age"]').addEventListener('click', () => {
                document.getElementById('info').textContent = `Age: ${age}`;
            });

            document.querySelector('button[data-attr="email"]').addEventListener('click', () => {
                document.getElementById('info').textContent = `Email: ${email}`;
            });

            document.querySelector('button[data-attr="phone"]').addEventListener('click', () => {
                document.getElementById('info').textContent = `Phone: ${phone}`;
            });
        })
        .catch(error => console.log(error));
}

fetchUser();


document.getElementById('getUser').addEventListener('click', fetchUser);