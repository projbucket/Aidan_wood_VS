var slider = document.getElementById('slider');
var sliderInner = document.getElementById('slider-inner');

let pressed = false;
let startX;
let x;

// Add event listeners to slider 
slider.addEventListener('mousedown', (e) => {
    pressed = true;
    // Get the position of the click
    startX = e.offsetX - sliderInner.offsetLeft;
    slider.style.cursor = 'grabbing';
})

// Change cursor on mouse enter
slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab';
})

// Change the cursor on mouseup
slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
    pressed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    // Prevent highlighting all the text
    e.preventDefault();

    x = e.offsetX;

    sliderInner.style.left = `${x - startX}px`;
    CheckBoundary();
})

function CheckBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = sliderInner.getBoundingClientRect();

    if(parseInt(sliderInner.style.left) > 0) {
        sliderInner.style.left = '0px';
    } 
    
    //Does not work as expected!
    
    // else if (inner.right = outer.right){
    //     sliderInner.style.left = `-${inner.width - outer.width}px`;
    // }
}