# Day 02 - JS and CSS Clock ✅

**Date:** 26/06/2020

![CSS Clock](JavaScript_30/Preview-images/02 - JS Clock.png)

## About CSS

Learnings:

### The `transform-origin` property:

According to [w3School](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp), this property:

> The transform-origin property allows you to change the position of transformed elements.

In this JS and Clock CSS, we used:

```css
    transform-origin: 100%;
```
This puts the bottom `.hand` extremity on the right side, which gives us the impression that the clock hand is centered.

### The `cubic-bezier()` function:

According to [w3School](https://www.w3schools.com/cssref/func_cubic-bezier.asp) again, this function:

>The cubic-bezier() function defines a Cubic Bezier curve.

```css
    transition-timing-function: cubic-bezier(0.49, 2.41, 0.25, 1.08);
```
```
- x1 = 0.49
- y1 = 2.41 
- x2 = 0.25
- y2 = 1.08
```

The `x1` and `x2` determine where the curve start and where it finishes. And must be have the [0, 1] range.

The y1 and y2 are control this curve. According the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function), if we set y1 and y2 with more than [0, 1] range value may generate _bouncing effects_:

> Cubic Bézier curves with the P1(y1) or P2(y2) ordinate outside the [0, 1] range may generate bouncing effects.
We have some rules to right here:

This makes the analogical tic-tac clock effects.

And not to mention but, you will learn a lot about positioning of clock hands. By experimenting with it add respective css-properties like `box-shadow` to make it look more attractive.  

## About JavaScript

Using the object `Date()`, the JavaScript give to us many functions to manupulate the time and dates:

```javascript
    const now = new Date();
```

Here, we use the `getSeconds()`, `getMinutes()` and `getHours()`:

```javascript
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
```

A way to set values to CSS using template strings:

```javascript
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
```

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---
credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
