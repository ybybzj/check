var check = require('../type');
check.t('number', 1); //pass
check.t('object', 1); //throw a TypeError

//using type checking system from 'typology', please refer to its usage documents
check.t({a: 'string', b: '?number'}, {a: 'a string', b: 1}); //pass
check.t({a: 'string', b: '?number'}, {a: 'a string'}); //pass
check.t({a: 'string', b: {c: '?number'}}, {a: 'a string', b:{c:'b string'}});