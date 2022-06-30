# Day 05 - Flexbox Gallery 🏞

**Date:** 30/06/2022

<img width="1440" alt="05 - Flexbox gallery" src="https://user-images.githubusercontent.com/93050571/176751219-c138d7fd-b05f-4623-a668-7640b6481bfc.png">


## About CSS

I researched, learned and understood nice things about `flex` property doing this exercise! If you wanna know more and see [some code example](my-studies/flex-examples.html) about this [you can read my studies and notes about it](my-studies/flex-shortand.md).

## About JavaScript

Here, We used the JavaScript to show the words which are hidden. We used the `toggle()` method.

Accordding to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle):

> The [`toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) method of the [DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) interface removes a given token from the list and returns `false`. If token doesn't exist it's added and the function returns `true`.

Here we have the function coded to show the hidden words when we click on image:

```javascript
    function toggleOpen() {
        this.classList.toggle('open');
    }
```
According with we read before about `toggle()` method, this function verifies if the class `open` exists or not in the `classList` of that element, which is being verified:
- If the class `open` exists on the `classList`, this class is removed from the list and returns `false`. 
- If the class `open` NOT exists on the `classList`, the `open` class is added in the list and returns `true`.

## Conclusion

Learn about it is really funny! 😊💖

You can see final result [here](https://vanribeiro-30daysofjavascript.netlify.app/challenge-files/05%20-%20flex%20panel%20gallery/). 😃😉😍

That's all folks! 😃

Thanks [WesBos](https://github.com/wesbos) to share this with us! 😊💖

---

written by [@vanribeiro](https://github.com/vanribeiro).
