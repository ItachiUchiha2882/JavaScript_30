# Day 04 - Array Cardio Day 01 💪 ✅

**Date:** 29/06/2022

<img width="1440" alt="04 - Array cardio part 1" src="https://user-images.githubusercontent.com/93050571/176391799-07e70ad3-476d-49f5-a49a-8afc1e8c534b.png">


## About HTML and CSS

Not much here today.

## About JavaScript

We did a lot of array exercises! 💪

### Filtering Things

We start with `Array.prototype.filter()`.

According [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter):

> The [`filter()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all elements that pass the test implemented by the provided function.

Here, We used it to determine what inventor was born in a period of years:

```javascript
const fifteen = inventors.filter( (inventor) => (inventor.year >=1500 && inventor.year < 1600));
``` 

This returns a list of objects stored in new array, about the inventors who lived on that period.

### Mapping Things

After, we mapped things using `Array.prototype.map()`.

According [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map):

>The [`map()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method creates a new array populated with the results of calling a provided function on every element in the calling array. i.e. `map()` creates a new array from calling a function for every array element. It calls a function once for each element in an array.

```javascript
 const fullName = inventors.map((inventor) => (`${inventor.first} ${inventor.last}`));
```

This returns a list of the all inventors' full name.

### Sorting Things

After, We ordered an object array with `Array.prototype.sort()`.

According to the [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):

> The [`sort()`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values

The aim here was to order the inventor by was born year.

```javascript
const sortByYear = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
``` 

Reading [MDN site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) about it, I understood this numbers on this way:

If we have this function format:

```javascript
function compareFunction(x, y){
    if(x < y) return -1;
    if(x === y) return 0;
    if(x > y) return 1;
}
```

- `x < y` - it returns `1` and `x` is sorted to an index lower than of the `y` position. (`x` comes first than `y`).
- `x == y` - it returns `0` and this element isn't moved of the current index position.
- `x > y` - it returns `-1` and `x` is sorted to an index greater than of the `y` position. (`x` comes first than `y`).

### More about `.sort()` on [W3](https://www.w3schools.com/js/js_array_sort.asp)

> arr.sort(compareFunction), where compare function should return a negative, zero, or positive value, depending on the arguments.

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value. 

- If the result is negative a is sorted before b.             
- If the result is positive b is sorted before a.
- If the result is 0 no changes are done with the sort order of the two values.

### Reducing Things

We reduce an object array with `Array.prototype.reduce()`.

```javascript
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);   
```

This function finds the inventor age, sums them and returns the total. 

### More about `.reduce()` on [W3](https://www.w3schools.com/jsref/jsref_reduce.asp)

>array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

Here, function() : (*Required) A function to be run for each element in the array.

total : (*Required) The initialValue, or the previously returned value of the function.

currentValue : (*Required) The value of the current element.

currentIndex : (*Optional) The index of the current element.

arr	: (*Optional) The array the current element belongs to.

initialValue : (*Optional) A value to be passed to the function as the initial value.

And important to not that the first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

### Other Learnings

`querySelectorAll` does not return an Array but returns a NodeList,
Array.from(some_nodeList); converts a NodeList into Array.


That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

## Features to add-on

Put the console's tables into html page and add css to it. 😁

---

credits to [@vanribeiro](https://github.com/vanribeiro) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
