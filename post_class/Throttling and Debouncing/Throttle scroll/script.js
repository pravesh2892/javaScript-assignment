let count = 1;
let isScrolling= false;


const container = document.getElementById("scroll-container");

const addNewChildToScrollContainer = () => {
    const newElement = document.createElement("div");
    newElement.innerHTML = count + 3;
    newElement.classList.add("box");
    container.appendChild(newElement)
}
const throttle = (callback, delay)=>{
    if(isScrolling) return;
    isScrolling=true;
    callback()
    setTimeout(()=>{
        isScrolling= false;
    }, delay);

}

const scrollHandler = () => {
    throttle(()=>{
    const firedCountEl = document.getElementById("event-fired");
    firedCountEl.innerHTML = "Event fired: " + count + " times";
    addNewChildToScrollContainer();
    count++;
    }, 200);
}

container.addEventListener("scroll", scrollHandler);