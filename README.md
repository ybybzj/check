# Introduction
Invariant checking utility.
## Usage
```js
var check = require('check');

function add(x, y){return x + y;}
check(add(1, 2) === 3, '1 + 2 should be 3');// do nothing
check(add(1, 2) === 4, '1 + 2 should be 4');// throw an error
var check_t = require('check/type');// same as check but has a convience type checker "t"
check_t.t('number', 1); //pass
check_t.t('object', 1); //throw a TypeError

//using type checking system from 'typology', please refer to its usage documents
check_t.t({a: 'string', b: '?number'}, {a: 'a string', b: 1}); //pass
check_t.t({a: 'string', b: '?number'}, {a: 'a string'}); //pass
check_t.t({a: 'string', b: '?number'}, {a: 'a string', b:'b string'}); //throw an error
```