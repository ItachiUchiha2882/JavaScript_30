# Day 08 - Fun with HTML5 Canvas 🌈

**Date:** 06/07/2022

<img width="1440" alt="08 - Fun with HTML5 Canvas" src="https://user-images.githubusercontent.com/93050571/177490705-ae052b28-785f-4385-8ae4-23612acae2e3.png">

## About

This webpage is built with HTML5 canvas and JS. Draw on the provided space by clicking and draggind the mouse pointer. Drawing will be multicolor, and will increase and decrease in width. Have fun !! 😉

## About HTML and CSS

Simple use of `<canvas>`.

## About JavaScript

### Canvas

Canvas is an HTML5 element for graphics that we can manipulate using the JavaScript. According to [w3School](https://www.w3schools.com/html/html5_canvas.asp):

> The HTML `<canvas>` element is used to draw graphics on a web page.

We created a function to draw on canvas container. Briefly, to draw with canvas, thinking about this challenge, we need to:

- select the `<canvas>` element.
- get the context.
- choose the color.
- choose a line type.
- determine how to draw it.

Here, we have the function thi coded to draw in canvas:

```javascript
function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
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

    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}
```

Here:
- This function basically use the mouse coordinates passed by the event listener to determine where the JavaScript is going to the draw the lines.
- A nice thing  coded is about the HSL color circle. He used this circle to make the colors of line change dynamically. He limited the `hue` (degrees) using the condition to say to this variable that if it goes up to the 360deg the hue value is set to the 0;
- By last, we created conditions to change the width line dynamiclly.

#### Mouses Event Listeners

- `mousedown`: when the mouse is clicked down;
- `mousemove`: when the mouse is moved;
- `mouseup`: when the mouse button is released;
- `mouseout`: when the mouse is out of an element.


We can apply some more effects on the context.
like [globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).

## About adjustments 

Using an [MDN tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events), we could adapt this challenge to touch screen, which means now we can draw on mobile devices! 

## Other learnings 

An ES6 way to define multiple variables in one statement

>[lastX, lastY] = [e.offsetX, e.offsetY];

A nice way to set an implicit function
()=>{}
Example:
>canvas.addEventListener('mousedown', ()=> isDrawing = true);

The website [mothereffinghsl.com](https://mothereffinghsl.com) shows you the figure of HSL. The [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)(seel the "hsl()" section) is the Hue-saturation-lightness model using the hsl() function notation.

Also I personally liked the clever use of `if-else` using `direction` flag for line-width.

## Features to add-on

- Add different functionalities like clear space, undo, resize brush etc. 

- Make it responsive. 😁

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
