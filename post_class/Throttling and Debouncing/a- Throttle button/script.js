let counter = 1;
let isthrotled = false;
const clickHandler = () => {
  if(!isthrotled){
    let display = document.getElementById("onButtonClick");
    display.innerHTML = "You clicked me " + counter + " times";
    counter += 1;

    isthrotled = true;
    setTimeout(()=>{
      isthrotled = false;
    }, 1000);
  }
}



document.getElementById('myButton').addEventListener('click', clickHandler);