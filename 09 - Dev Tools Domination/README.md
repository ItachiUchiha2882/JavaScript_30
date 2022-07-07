# Day 09 - Dev Tools Domination ✅

**Date:** 07/07/2022

<img width="1440" alt="09 - Dev Tools Domination" src="https://user-images.githubusercontent.com/93050571/177695703-4bd955da-1ee6-44a3-9f7c-ad21a812e370.png">


## About HTML and CSS

Not much here today!

## About JavaScript

### Attributes Modification

Making a break point to see what's going on to the element.


###  `console` tricks

- Some of `console.log`
    - most commonly used `console.log();`
    - but it can be more ways of Interpolation like C programing language with:
        - `%s`: string

    >console.log("Hi %s!", "😊"); // Hi 😊!

        - `%d`: integer

        - `%f`: float

        - `%o`: object

        - `%c`: for styled
    
    >console.log('%c i am great string', 'font-size: 50px; background-color: yellow');

- defaults of `console.log`
  - `console.warn` for warning message

  - `console.error` for error message

  - `console.info` for info message

- Testing with `assert()`
  - nothing returns if true

  - returns the second argument if false

    >console.assert(1 === 0, "It's wrong!"); // It's wrong!

  - You can use `assert()` to check DOM elements also.


- Viewing DOM elements
  - log out only a DOM tag of the element

    >console.log(p);

  - use `console.dir()` to view the properties of the element

    >console.dir(p);

- Log out with console.table()
  - simply `console.table()`

  - specified things out `console.table(dogs, ['age']);`

- Grouping together

`group()`/`groupCollapsed` and `groupEnd()` will automatically grouping thins up

  ```js
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
  dogs.forEach(dog => {
    console.group();                // open up the group
    // console.groupCollapsed();    // close up the group
    console.log(`${dog.name}`);
    console.log(`${dog.age}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd();
  });
  ```

- Counting things

counts only contents inside of `console.count()`

- Processing times

`time('name')` controls the start point and `timeEnd('name')` controls the end point, the `'name'` variables are what we define and must be the same.

```js
console.time('fetching data');
fetch('https://api.github.com/users/sourabhb28')
    .then(data => data.json())
    .then(data => {
        console.log(data);
        console.timeEnd('fetching data');
    });
```

- `console.clear();` clears console's outputs.

## Features to add-on

- Put the console's tables into html page and add css to it. 😁

That's all folks! ❤️

Thanks [WesBos](https://github.com/wesbos) to share this with us! 

---

credits to [@amelieyeh](https://github.com/amelieyeh) for read-me file template.

edited by [@sourabhb28](https://github.com/sourabhb28).
