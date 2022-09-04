const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    // e.pageX => x cordinate of the page 
    // slider.offsetLeft => how much left is our slider from the body 
    // startX => we are subtracting them b/c we want x cordinate of slider , not the page itself
   
    // startX will tell us exactly where we first clicked i.e. mouseDown
    startX = e.pageX - slider.offsetLeft;


    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if(!isDown) return; //Stop the fn from running whenever isDown is false

    // prevent any default behaviour of the browser like selecting the text of our items. 
    e.preventDefault();

    // x cordinates of How much we move 
    const x = e.pageX - slider.offsetLeft;

    // exactly how much we move our mouse once we clicked
    // we are multiplying it by 3 b/c for every pixel we move 3 times of that
    const walk = ( x - startX ) * 3;
    
    // setting how much we want to scroll the slider
    slider.scrollLeft = scrollLeft - walk;
});
