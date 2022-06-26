# Day 01 - JavaScript Drum Kit ✅

**Date:** 25/06/2022

![JavaScript Drum Kit](../../Preview-images/01 - JS Drum Kit.png)

## About HTML

Learnings: `<kbd>`.

According to the [w3Schools](https://www.w3schools.com/tags/tag_kbd.asp), it's use to define a keyboard input. In this case, we use to structure our HTML code with letter we will use to play our Drum Kit:

```html
 <kbd>A</kbd>
```

Another things that I learned it was the the attribute `data-*`. Again according to [w3Schools](https://www.w3schools.com/tags/att_global_data.asp):

> The data-* attributes is used to store custom data private to the page or application.

> The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.

In our case, we use to customize the `<div>` with the key code number attribute:

```html
    <div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">clap</span>
    </div>
```

## About CSS

I made a layout with `flex`. 😁

## About JavaScript

He used the HTML attribute `data-key` to select the tag audio and key code number:

```javascript
    const aud = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
```

Then it was necessary to eleminate the keys we don't use:

```javascript
    if(!aud) return;
```

If the key pressed it wasn't our pattern keys, this return nothing.

About the delay key problem, set the `currentTime` to `0`:

```javascript
    aud.currentTime = 0;
```

And then we can play it!

```javascript
    aud.play();
```

For the animation interaction, we add a CSS class `.playing`, that was ready on the started-files.

```javascript
    key.classList.add('playing');
```

But now we have some problems here, even if we have the keyup movement, the animation doesn't disappear. 

To solve it, we select all classes `.key`, then running through an array to take the `transitionend` event listener, which show us when transition aninmation ends.

With this information, we can take the property name to discover when to remove the animation `.playing` class:

```javascript

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(element => element.addEventListener('transitionend', removeTransition));
```

That's all folks! ❤️

Thanks WesBos to share this with us! 

## Features to add-on

Make it clickable to be used on the cell phone. 😁


---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.


edited by [@sourabhb28]((https://github.com/sourabhb28))
