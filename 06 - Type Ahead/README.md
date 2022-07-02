# Day 06 - Type Ahead 🔎

**Date:** 05/04/2020

<img width="1440" alt="06 - Type Ahead" src="https://user-images.githubusercontent.com/93050571/176998269-dcb96820-3b42-454c-8b3e-7eb3054cf5c2.png">


## About

This website provides an ability to search cities and states in USA and displays their population according to data of json file.

## About HTML and CSS

To include `placeholder` of input element, do 
```css
::placeholder{...}
```

Also we used following for special effect of list items of `suggestions` class.
Read more about it on [W3](https://www.w3schools.com/cssref/css3_pr_perspective.asp) and [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective).

```css
.suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(0px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff 0%, #EFEFEF 100%);
}
```

## About JavaScript

We used [`fetch()`](developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from a `JSON` file like an API. According to [MDN](developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch):

> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global [`fetch()`](developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method that provides an easy, logical way to fetch resources asynchronously across the network.

This is  `fetch()` code:

```javascript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));
```

As we can see the `endpoint` variable is an URL that points to the `cites.json` file. We passed it as an argumunt in `fetch()`:

After, We chose `response` type and its format. Here, it is `.json()`. but, according to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch), if wanted read an image, for example, I could use `blob()`. (Not all browsers offer support to the `blob()`):

```javascript
    .then(blob => blob.json())
```

And then, finally, we storaged data in an array, using `push()` method. '…' is spread, which is used to spread all arguments passed to the array as their own elements.

```javascript
    .then(data => cities.push(...data));
```
Then after that made functions for finding match and displaying them on search.

It is always preferable to extract the data first and then display it.

To put a variable `wordToMatch` into regular expression, we do following:
```js
const regex = new RegExp(wordToMatch, ‘gi’);
```
>where g stands for global and i is for case-insensitive.




Also added a function to format the numbers, which is copy-pasted from google 🥲 which look like

```js
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
```


It's important to understand that Fetch API is new feature on the browser, which means it may not works in some old browser. Then, [as it recommended by MDN site](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch),  we can write an `XMLHttpRequest()` conditionally:

```javascript
if(window.fetch){
    // do fetch things
} else {
    // do XMLHttpRequest things
}
```

To add an `XMLHttpRequest()`, here is the code (if needed): 

```javascript
    const request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.responseType = "json";
    request.send();
    request.onload = () => {
        const data = request.response;
        cities.push(...data);
    }
```


## Features to add-on

- Do fetch any live api here to keep the data updated.
- Make it responsive. 😁

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
