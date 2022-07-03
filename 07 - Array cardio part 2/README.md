# Day 07 - Array Cardio Day 02 💪 ✅

**Date:** 03/07/2022

<img width="1440" alt="07 - Array Cardio Part 2" src="https://user-images.githubusercontent.com/93050571/177024527-df9c16ca-a3bf-4f96-9052-661a050713d3.png">

## About HTML and CSS

Not much here today.

## About JavaScript

### `Array.prototype.some()` 

We used [`some()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) to discover whether atleast one person out of the set of people is adult or not. According the [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some):

> The [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 

```javascript
const isAdult = people.some((person) => (new Date().getFullYear() - person.year >= 19));
```

### `Array.prototype.every()`

We used [`every()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) to discover whether every person in one set of people is an adult or not. According [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every):

> The [`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
const allAdults = people.every((person) => (new Date().getFullYear() - person.year >= 19));
```

### `Array.prototype.find()`

We used the [`find()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) to find one determined comment. According to [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find):

> The [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method returns the value of the first element in the provided array that satisfies the provided testing function.

[`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) is similar to [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). The difference between them is that [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) returns the first value found and [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) returns all values related that was found.

This is the code used:

```javascript
const findComment = comments.find((comment) => (comment.id === 823423));
```

### `Array.prototype.findIndex()`

We used the `findIndex() method` to find the index position of value search in the array comments. According to [MDN Site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex):

> The [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```javascript
const index = comments.findIndex((comment) => (comment.id === 823423));
```
## Other learnings

>console.log(allAdult) // gives the value of allAdult variable.

>console.log({allAdult})  // gives the allAdult object itself

- `Array.prototype.slice()`

The slice() method returns shallow copy of a portion of an array into a new array object selected from begin to end (end NOT included). The original array will not be modified.

Here we made entirely new array without including particular index by:
```js
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
```

## Features to add-on

- Put the console's tables into html page and add css to it. 😁

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
