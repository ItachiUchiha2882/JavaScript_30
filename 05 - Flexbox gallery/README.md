# Day 05 - Flexbox Gallery 🏞

**Date:** 30/06/2022

<img width="1440" alt="05 - Flexbox gallery" src="https://user-images.githubusercontent.com/93050571/176751219-c138d7fd-b05f-4623-a668-7640b6481bfc.png">


## About CSS

A lot of use of `flex-box` property today.

> "flex:1;" this propery is used to equally distribute the area into items.

Also `overflow:hidden;` property helped in avoiding the content of display to go beyond page when we add translateY() property.

One more thing to add is, if your transitions regarding `font-size` is not working then try to change the unit from rem to em or px.

## About JavaScript

Here, We used the JavaScript to show the words which are hidden. We used the `toggle()` method.

Accordding to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle):

> The [`toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) method of the [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) interface removes a given token from the list and returns `false`. If token doesn't exist it's added and the function returns `true`.

Here we have the function coded to show the hidden words when we click on image:

```js
    function toggleOpen() {
        this.classList.toggle('open');
    }
```
According with we read before about `toggle()` method, this function verifies if the class `open` exists or not in the `classList` of that element, which is being verified:
- If the class `open` exists on the `classList`, this class is removed from the list and returns `false`. 
- If the class `open` NOT exists on the `classList`, the `open` class is added in the list and returns `true`.

We also added the `open-active` class toggle function whenever the transition ends.

## Features to add-on

- Ability to edit the text and image by button.

- Make it responsive. 😁

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
