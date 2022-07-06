const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 50;      // Width matches the available window width by .innerWidth
canvas.height = window.innerHeight - 160;       // Height matches the available window height ny .innerHeight
// canvas.width = canvas.parentNode.clientWidth;
// canvas.height = canvas.parentNode.clientHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';     // Intersecting/connected lines will have a smooth join.
ctx.lineCap = 'round';      // End of line will be smooth
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;     // stop the fn from running when they are not moused down.
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to 
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth > 100 || ctx.lineWidth < 5) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
    // heading.style.color = `hsl(${hue}, 100%, 50%)`;
    // footer.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}
// const heading = document.querySelector('.heading');
// const footer = document.querySelector('.footer');

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

