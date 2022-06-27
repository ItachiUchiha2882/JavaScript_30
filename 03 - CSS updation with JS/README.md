# Day 03 - CSS Variables and JS ✅

**Date:** 27/06/2022

<img width="1440" alt="03 - CSS updation with JS" src="https://user-images.githubusercontent.com/93050571/175924117-dd20c980-de0e-4f6f-b717-275784c798ae.png">

## About HTML

Learnings:

The [range input](https://www.w3schools.com/tags/att_input_type_range.asp) tag, which define a range control. On this case [0, 200]:

```html
<input type="range" min="0" max="200" value="10">
```
Also used `data-*` property to add suffix like `px` and access it in JS file.

## About CSS

Learnings: property `blur`

```css
    filter : blur(10px);
```

## About JavaScript

We used the CSS Variables to manipulate the HTML tags values. 

On the HTML tags, we set the property `data-sizing` with `px` unit:

```html
    <input type="range" data-sizing="px">
```

And we used it to create a suffix, which is used to specify the unit values:

```javascript
    const suffix = this.dataset.sizing;
```

Then we used the `setProperty()` to set CSS properties and change the variables values using String Template:

```javascript
    document.documentElement.style
    .setProperty(`--${this.name}`, this.value + suffix);
```

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

## Features to add-on

Make it responsive. 

Add more CSS properties.

Add an option to upload an image to site. 😁

---
credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
