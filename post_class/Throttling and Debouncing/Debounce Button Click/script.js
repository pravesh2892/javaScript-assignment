let counter = 0;
let timeoutId;

const clickHandler = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    let display = document.getElementById("onButtonClick");
    display.innerHTML = "You clicked me " + counter + " times";
  }, 1000);

  counter += 1;
};

const debounce = (callbackFn, wait) => {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callbackFn, wait);
  };
};

document.getElementById("myButton").addEventListener("click", debounce(clickHandler, 1000));