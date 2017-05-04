try {
  _.chunk(['a',  'b',  'c',  'd'],  2);
  // => [['a', 'b'], ['c', 'd']]
   
  _.chunk(['a',  'b',  'c',  'd'],  3);
  // => [['a', 'b', 'c'], ['d']]
} catch (e) {}



try {
  _.compact([0,  1,  false,  2,  '',  3]);
  // => [1, 2, 3]
} catch (e) {}



try {
  var  array  =   [1];
  var  other  =  _.concat(array,  2,   [3],   [
    [4]
  ]); 
  console.log(other);
  // => [1, 2, 3, [4]]
   
  console.log(array);
  // => [1]
} catch (e) {}



try {
  _.difference([2,  1],   [2,  3]);
  // => [1]
} catch (e) {}



try {
  _.differenceBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
  // => [1.2]
   
  // The `_.property` iteratee shorthand.
  _.differenceBy([{ 
    'x':  2 
  },   { 
    'x':  1 
  }],   [{ 
    'x':  1 
  }],  'x');
  // => [{ 'x': 2 }]
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  2,
     'y':  1 
  }]; 
  _.differenceWith(objects,   [{ 
    'x':  1,
     'y':  2 
  }],  _.isEqual);
  // => [{ 'x': 2, 'y': 1 }]
} catch (e) {}



try {
  _.drop([1,  2,  3]);
  // => [2, 3]
   
  _.drop([1,  2,  3],  2);
  // => [3]
   
  _.drop([1,  2,  3],  5);
  // => []
   
  _.drop([1,  2,  3],  0);
  // => [1, 2, 3]
} catch (e) {}



try {
  _.dropRight([1,  2,  3]);
  // => [1, 2]
   
  _.dropRight([1,  2,  3],  2);
  // => [1]
   
  _.dropRight([1,  2,  3],  5);
  // => []
   
  _.dropRight([1,  2,  3],  0);
  // => [1, 2, 3]
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  true 
  },    { 
    'user':   'fred',
        'active':  false 
  },    { 
    'user':   'pebbles',
     'active':  false 
  }]; 
  _.dropRightWhile(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['barney']
   
  // The `_.matches` iteratee shorthand.
  _.dropRightWhile(users,   { 
    'user':   'pebbles',
     'active':  false 
  });
  // => objects for ['barney', 'fred']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.dropRightWhile(users,   ['active',  false]);
  // => objects for ['barney']
   
  // The `_.property` iteratee shorthand.
  _.dropRightWhile(users,  'active');
  // => objects for ['barney', 'fred', 'pebbles']
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  false 
  },    { 
    'user':   'fred',
        'active':  false 
  },    { 
    'user':   'pebbles',
     'active':  true 
  }]; 
  _.dropWhile(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['pebbles']
   
  // The `_.matches` iteratee shorthand.
  _.dropWhile(users,   { 
    'user':   'barney',
     'active':  false 
  });
  // => objects for ['fred', 'pebbles']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.dropWhile(users,   ['active',  false]);
  // => objects for ['pebbles']
   
  // The `_.property` iteratee shorthand.
  _.dropWhile(users,  'active');
  // => objects for ['barney', 'fred', 'pebbles']
} catch (e) {}



try {
  var  array  =   [1,  2,  3]; 
  _.fill(array,  'a');
  console.log(array);
  // => ['a', 'a', 'a']
   
  _.fill(Array(3),  2);
  // => [2, 2, 2]
   
  _.fill([4,  6,  8,  10],  '*',  1,  3);
  // => [4, '*', '*', 10]
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  false 
  },    { 
    'user':   'fred',
        'active':  false 
  },    { 
    'user':   'pebbles',
     'active':  true 
  }]; 
  _.findIndex(users,  function(o)  { 
    return  o.user  ==  'barney'; 
  });
  // => 0
   
  // The `_.matches` iteratee shorthand.
  _.findIndex(users,   { 
    'user':   'fred',
     'active':  false 
  });
  // => 1
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findIndex(users,   ['active',  false]);
  // => 0
   
  // The `_.property` iteratee shorthand.
  _.findIndex(users,  'active');
  // => 2
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  true 
  },    { 
    'user':   'fred',
        'active':  false 
  },    { 
    'user':   'pebbles',
     'active':  false 
  }]; 
  _.findLastIndex(users,  function(o)  { 
    return  o.user  ==  'pebbles'; 
  });
  // => 2
   
  // The `_.matches` iteratee shorthand.
  _.findLastIndex(users,   { 
    'user':   'barney',
     'active':  true 
  });
  // => 0
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findLastIndex(users,   ['active',  false]);
  // => 2
   
  // The `_.property` iteratee shorthand.
  _.findLastIndex(users,  'active');
  // => 0
} catch (e) {}



try {
  _.flatten([1,   [2,   [3,   [4]],  5]]);
  // => [1, 2, [3, [4]], 5]
} catch (e) {}



try {
  _.flattenDeep([1,   [2,   [3,   [4]],  5]]);
  // => [1, 2, 3, 4, 5]
} catch (e) {}



try {
  var  array  =   [1,   [2,   [3,   [4]],  5]]; 
  _.flattenDepth(array,  1);
  // => [1, 2, [3, [4]], 5]
   
  _.flattenDepth(array,  2);
  // => [1, 2, 3, [4], 5]
} catch (e) {}



try {
  _.fromPairs([
    ['a',  1],  
    ['b',  2]
  ]);
  // => { 'a': 1, 'b': 2 }
} catch (e) {}



try {
  _.head([1,  2,  3]);
  // => 1
   
  _.head([]);
  // => undefined
} catch (e) {}



try {
  _.indexOf([1,  2,  1,  2],  2);
  // => 1
   
  // Search from the `fromIndex`.
  _.indexOf([1,  2,  1,  2],  2,  2);
  // => 3
} catch (e) {}



try {
  _.initial([1,  2,  3]);
  // => [1, 2]
} catch (e) {}



try {
  _.intersection([2,  1],   [2,  3]);
  // => [2]
} catch (e) {}



try {
  _.intersectionBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
  // => [2.1]
   
  // The `_.property` iteratee shorthand.
  _.intersectionBy([{ 
    'x':  1 
  }],   [{ 
    'x':  2 
  },   { 
    'x':  1 
  }],  'x');
  // => [{ 'x': 1 }]
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  2,
     'y':  1 
  }];
  var  others  =   [{ 
    'x':  1,
     'y':  1 
  },   { 
    'x':  1,
     'y':  2 
  }]; 
  _.intersectionWith(objects,  others,  _.isEqual);
  // => [{ 'x': 1, 'y': 2 }]
} catch (e) {}



try {
  _.join(['a',  'b',  'c'],  '~');
  // => 'a~b~c'
} catch (e) {}



try {
  _.last([1,  2,  3]);
  // => 3
} catch (e) {}



try {
  _.lastIndexOf([1,  2,  1,  2],  2);
  // => 3
   
  // Search from the `fromIndex`.
  _.lastIndexOf([1,  2,  1,  2],  2,  2);
  // => 1
} catch (e) {}



try {
  var  array  =   ['a',  'b',  'c',  'd']; 
  _.nth(array,  1);
  // => 'b'
   
  _.nth(array,  -2);
  // => 'c';
} catch (e) {}



try {
  var  array  =   ['a',  'b',  'c',  'a',  'b',  'c']; 
  _.pull(array,  'a',  'c');
  console.log(array);
  // => ['b', 'b']
} catch (e) {}



try {
  var  array  =   ['a',  'b',  'c',  'a',  'b',  'c']; 
  _.pullAll(array,   ['a',  'c']);
  console.log(array);
  // => ['b', 'b']
} catch (e) {}



try {
  var  array  =   [{ 
    'x':  1 
  },   { 
    'x':  2 
  },   { 
    'x':  3 
  },   { 
    'x':  1 
  }]; 
  _.pullAllBy(array,   [{ 
    'x':  1 
  },   { 
    'x':  3 
  }],  'x');
  console.log(array);
  // => [{ 'x': 2 }]
} catch (e) {}



try {
  var  array  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  3,
     'y':  4 
  },   { 
    'x':  5,
     'y':  6 
  }]; 
  _.pullAllWith(array,   [{ 
    'x':  3,
     'y':  4 
  }],  _.isEqual);
  console.log(array);
  // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
} catch (e) {}



try {
  var  array  =   ['a',  'b',  'c',  'd'];
  var  pulled  =  _.pullAt(array,   [1,  3]); 
  console.log(array);
  // => ['a', 'c']
   
  console.log(pulled);
  // => ['b', 'd']
} catch (e) {}



try {
  var  array  =   [1,  2,  3,  4];
  var  evens  =  _.remove(array,  function(n)  {  
    return  n  %  2  ==  0;
  }); 
  console.log(array);
  // => [1, 3]
   
  console.log(evens);
  // => [2, 4]
} catch (e) {}



try {
  var  array  =   [1,  2,  3]; 
  _.reverse(array);
  // => [3, 2, 1]
   
  console.log(array);
  // => [3, 2, 1]
} catch (e) {}



try {
  _.sortedIndex([30,  50],  40);
  // => 1
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  4 
  },   { 
    'x':  5 
  }]; 
  _.sortedIndexBy(objects,   { 
    'x':  4 
  },  function(o)  { 
    return  o.x; 
  });
  // => 0
   
  // The `_.property` iteratee shorthand.
  _.sortedIndexBy(objects,   { 
    'x':  4 
  },  'x');
  // => 0
} catch (e) {}



try {
  _.sortedIndexOf([4,  5,  5,  5,  6],  5);
  // => 1
} catch (e) {}



try {
  _.sortedLastIndex([4,  5,  5,  5,  6],  5);
  // => 4
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  4 
  },   { 
    'x':  5 
  }]; 
  _.sortedLastIndexBy(objects,   { 
    'x':  4 
  },  function(o)  { 
    return  o.x; 
  });
  // => 1
   
  // The `_.property` iteratee shorthand.
  _.sortedLastIndexBy(objects,   { 
    'x':  4 
  },  'x');
  // => 1
} catch (e) {}



try {
  _.sortedLastIndexOf([4,  5,  5,  5,  6],  5);
  // => 3
} catch (e) {}



try {
  _.sortedUniq([1,  1,  2]);
  // => [1, 2]
} catch (e) {}



try {
  _.sortedUniqBy([1.1,  1.2,  2.3,  2.4],  Math.floor);
  // => [1.1, 2.3]
} catch (e) {}



try {
  _.tail([1,  2,  3]);
  // => [2, 3]
} catch (e) {}



try {
  _.take([1,  2,  3]);
  // => [1]
   
  _.take([1,  2,  3],  2);
  // => [1, 2]
   
  _.take([1,  2,  3],  5);
  // => [1, 2, 3]
   
  _.take([1,  2,  3],  0);
  // => []
} catch (e) {}



try {
  _.takeRight([1,  2,  3]);
  // => [3]
   
  _.takeRight([1,  2,  3],  2);
  // => [2, 3]
   
  _.takeRight([1,  2,  3],  5);
  // => [1, 2, 3]
   
  _.takeRight([1,  2,  3],  0);
  // => []
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  true 
  },    { 
    'user':   'fred',
        'active':  false 
  },    { 
    'user':   'pebbles',
     'active':  false 
  }]; 
  _.takeRightWhile(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['fred', 'pebbles']
   
  // The `_.matches` iteratee shorthand.
  _.takeRightWhile(users,   { 
    'user':   'pebbles',
     'active':  false 
  });
  // => objects for ['pebbles']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.takeRightWhile(users,   ['active',  false]);
  // => objects for ['fred', 'pebbles']
   
  // The `_.property` iteratee shorthand.
  _.takeRightWhile(users,  'active');
  // => []
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'active':  false 
  },    { 
    'user':   'fred',
        'active':  false
  },    { 
    'user':   'pebbles',
     'active':  true 
  }]; 
  _.takeWhile(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['barney', 'fred']
   
  // The `_.matches` iteratee shorthand.
  _.takeWhile(users,   { 
    'user':   'barney',
     'active':  false 
  });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.takeWhile(users,   ['active',  false]);
  // => objects for ['barney', 'fred']
   
  // The `_.property` iteratee shorthand.
  _.takeWhile(users,  'active');
  // => []
} catch (e) {}



try {
  _.union([2],   [1,  2]);
  // => [2, 1]
} catch (e) {}



try {
  _.unionBy([2.1],   [1.2,  2.3],  Math.floor);
  // => [2.1, 1.2]
   
  // The `_.property` iteratee shorthand.
  _.unionBy([{ 
    'x':  1 
  }],   [{ 
    'x':  2 
  },   { 
    'x':  1 
  }],  'x');
  // => [{ 'x': 1 }, { 'x': 2 }]
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  2,
     'y':  1 
  }];
  var  others  =   [{ 
    'x':  1,
     'y':  1 
  },   { 
    'x':  1,
     'y':  2 
  }]; 
  _.unionWith(objects,  others,  _.isEqual);
  // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
} catch (e) {}



try {
  _.uniq([2,  1,  2]);
  // => [2, 1]
} catch (e) {}



try {
  _.uniqBy([2.1,  1.2,  2.3],  Math.floor);
  // => [2.1, 1.2]
   
  // The `_.property` iteratee shorthand.
  _.uniqBy([{ 
    'x':  1 
  },   { 
    'x':  2 
  },   { 
    'x':  1 
  }],  'x');
  // => [{ 'x': 1 }, { 'x': 2 }]
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  2,
     'y':  1 
  },   { 
    'x':  1,
     'y':  2 
  }]; 
  _.uniqWith(objects,  _.isEqual);
  // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
} catch (e) {}



try {
  var  zipped  =  _.zip(['a',  'b'],   [1,  2],   [true,  false]);
  // => [['a', 1, true], ['b', 2, false]]
   
  _.unzip(zipped);
  // => [['a', 'b'], [1, 2], [true, false]]
} catch (e) {}



try {
  var  zipped  =  _.zip([1,  2],   [10,  20],   [100,  200]);
  // => [[1, 10, 100], [2, 20, 200]]
   
  _.unzipWith(zipped,  _.add);
  // => [3, 30, 300]
} catch (e) {}



try {
  _.without([2,  1,  2,  3],  1,  2);
  // => [3]
} catch (e) {}



try {
  _.xor([2,  1],   [2,  3]);
  // => [1, 3]
} catch (e) {}



try {
  _.xorBy([2.1,  1.2],   [2.3,  3.4],  Math.floor);
  // => [1.2, 3.4]
   
  // The `_.property` iteratee shorthand.
  _.xorBy([{ 
    'x':  1 
  }],   [{ 
    'x':  2 
  },   { 
    'x':  1 
  }],  'x');
  // => [{ 'x': 2 }]
} catch (e) {}



try {
  var  objects  =   [{ 
    'x':  1,
     'y':  2 
  },   { 
    'x':  2,
     'y':  1 
  }];
  var  others  =   [{ 
    'x':  1,
     'y':  1 
  },   { 
    'x':  1,
     'y':  2 
  }]; 
  _.xorWith(objects,  others,  _.isEqual);
  // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
} catch (e) {}



try {
  _.zip(['a',  'b'],   [1,  2],   [true,  false]);
  // => [['a', 1, true], ['b', 2, false]]
} catch (e) {}



try {
  _.zipObject(['a',  'b'],   [1,  2]);
  // => { 'a': 1, 'b': 2 }
} catch (e) {}



try {
  _.zipObjectDeep(['a.b[0].c',  'a.b[1].d'],   [1,  2]);
  // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
} catch (e) {}



try {
  _.zipWith([1,  2],   [10,  20],   [100,  200],  function(a,  b,  c)  {  
    return  a  +  b  +  c;
  });
  // => [111, 222]
} catch (e) {}



try {
  _.countBy([6.1,  4.2,  6.3],  Math.floor);
  // => { '4': 1, '6': 2 }
   
  // The `_.property` iteratee shorthand.
  _.countBy(['one',  'two',  'three'],  'length');
  // => { '3': 2, '5': 1 }
} catch (e) {}



try {
  _.every([true,  1,  null,  'yes'],  Boolean);
  // => false
   
  var  users  =   [  { 
    'user':   'barney',
     'age':  36,
     'active':  false 
  },    { 
    'user':   'fred',
       'age':  40,
     'active':  false 
  }]; 
  // The `_.matches` iteratee shorthand.
  _.every(users,   { 
    'user':   'barney',
     'active':  false 
  });
  // => false
   
  // The `_.matchesProperty` iteratee shorthand.
  _.every(users,   ['active',  false]);
  // => true
   
  // The `_.property` iteratee shorthand.
  _.every(users,  'active');
  // => false
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
     'age':  36,
     'active':  true 
  },    { 
    'user':   'fred',
       'age':  40,
     'active':  false 
  }]; 
  _.filter(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  _.filter(users,   { 
    'age':  36,
     'active':  true 
  });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.filter(users,   ['active',  false]);
  // => objects for ['fred']
   
  // The `_.property` iteratee shorthand.
  _.filter(users,  'active');
  // => objects for ['barney']
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'age':  36,
     'active':  true 
  },    { 
    'user':   'fred',
        'age':  40,
     'active':  false 
  },    { 
    'user':   'pebbles',
     'age':  1,
      'active':  true 
  }]; 
  _.find(users,  function(o)  { 
    return  o.age  <  40; 
  });
  // => object for 'barney'
   
  // The `_.matches` iteratee shorthand.
  _.find(users,   { 
    'age':  1,
     'active':  true 
  });
  // => object for 'pebbles'
   
  // The `_.matchesProperty` iteratee shorthand.
  _.find(users,   ['active',  false]);
  // => object for 'fred'
   
  // The `_.property` iteratee shorthand.
  _.find(users,  'active');
  // => object for 'barney'
} catch (e) {}



try {
  _.findLast([1,  2,  3,  4],  function(n)  {  
    return  n  %  2  ==  1;
  });
  // => 3
} catch (e) {}



try {
  function  duplicate(n)  {  
    return  [n,  n];
  } 
  _.flatMap([1,  2],  duplicate);
  // => [1, 1, 2, 2]
} catch (e) {}



try {
  function  duplicate(n)  {  
    return  [
      [
        [n,  n]
      ]
    ];
  } 
  _.flatMapDeep([1,  2],  duplicate);
  // => [1, 1, 2, 2]
} catch (e) {}



try {
  function  duplicate(n)  {  
    return  [
      [
        [n,  n]
      ]
    ];
  } 
  _.flatMapDepth([1,  2],  duplicate,  2);
  // => [[1, 1], [2, 2]]
} catch (e) {}



try {
  _.forEach([1,  2],  function(value)  {  
    console.log(value);
  });
  // => Logs `1` then `2`.
   
  _.forEach({ 
    'a':  1,
     'b':  2 
  },  function(value,  key)  {  
    console.log(key);
  });
  // => Logs 'a' then 'b' (iteration order is not guaranteed).
} catch (e) {}



try {
  _.forEachRight([1,  2],  function(value)  {  
    console.log(value);
  });
  // => Logs `2` then `1`.
} catch (e) {}



try {
  _.groupBy([6.1,  4.2,  6.3],  Math.floor);
  // => { '4': [4.2], '6': [6.1, 6.3] }
   
  // The `_.property` iteratee shorthand.
  _.groupBy(['one',  'two',  'three'],  'length');
  // => { '3': ['one', 'two'], '5': ['three'] }
} catch (e) {}



try {
  _.includes([1,  2,  3],  1);
  // => true
   
  _.includes([1,  2,  3],  1,  2);
  // => false
   
  _.includes({ 
    'a':  1,
     'b':  2 
  },  1);
  // => true
   
  _.includes('abcd',  'bc');
  // => true
} catch (e) {}



try {
  _.invokeMap([
    [5,  1,  7],  
    [3,  2,  1]
  ],  'sort');
  // => [[1, 5, 7], [1, 2, 3]]
   
  _.invokeMap([123,  456],  String.prototype.split,  '');
  // => [['1', '2', '3'], ['4', '5', '6']]
} catch (e) {}



try {
  var  array  =   [  { 
    'dir':   'left',
     'code':  97 
  },    { 
    'dir':   'right',
     'code':  100 
  }]; 
  _.keyBy(array,  function(o)  {  
    return  String.fromCharCode(o.code);
  });
  // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   
  _.keyBy(array,  'dir');
  // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
} catch (e) {}



try {
  function  square(n)  {  
    return  n  *  n;
  } 
  _.map([4,  8],  square);
  // => [16, 64]
   
  _.map({ 
    'a':  4,
     'b':  8 
  },  square);
  // => [16, 64] (iteration order is not guaranteed)
   
  var  users  =   [  { 
    'user':   'barney' 
  },    { 
    'user':   'fred' 
  }]; 
  // The `_.property` iteratee shorthand.
  _.map(users,  'user');
  // => ['barney', 'fred']
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'fred',
       'age':  48 
  },    { 
    'user':   'barney',
     'age':  34 
  },    { 
    'user':   'fred',
       'age':  40 
  },    { 
    'user':   'barney',
     'age':  36 
  }]; 
  // Sort by `user` in ascending order and by `age` in descending order.
  _.orderBy(users,   ['user',  'age'],   ['asc',  'desc']);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'age':  36,
     'active':  false 
  },    { 
    'user':   'fred',
        'age':  40,
     'active':  true 
  },    { 
    'user':   'pebbles',
     'age':  1,
      'active':  false 
  }]; 
  _.partition(users,  function(o)  { 
    return  o.active; 
  });
  // => objects for [['fred'], ['barney', 'pebbles']]
   
  // The `_.matches` iteratee shorthand.
  _.partition(users,   { 
    'age':  1,
     'active':  false 
  });
  // => objects for [['pebbles'], ['barney', 'fred']]
   
  // The `_.matchesProperty` iteratee shorthand.
  _.partition(users,   ['active',  false]);
  // => objects for [['barney', 'pebbles'], ['fred']]
   
  // The `_.property` iteratee shorthand.
  _.partition(users,  'active');
  // => objects for [['fred'], ['barney', 'pebbles']]
} catch (e) {}



try {
  _.reduce([1,  2],  function(sum,  n)  {  
    return  sum  +  n;
  },  0);
  // => 3
   
  _.reduce({ 
    'a':  1,
     'b':  2,
     'c':  1 
  },  function(result,  value,  key)  {  
    (result[value]  ||  (result[value]  =   [])).push(key);  
    return  result;
  },   {});
  // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
} catch (e) {}



try {
  var  array  =   [
    [0,  1],  
    [2,  3],  
    [4,  5]
  ]; 
  _.reduceRight(array,  function(flattened,  other)  {  
    return  flattened.concat(other);
  },   []);
  // => [4, 5, 2, 3, 0, 1]
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
     'age':  36,
     'active':  false 
  },    { 
    'user':   'fred',
       'age':  40,
     'active':  true 
  }]; 
  _.reject(users,  function(o)  { 
    return  !o.active; 
  });
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  _.reject(users,   { 
    'age':  40,
     'active':  true 
  });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.reject(users,   ['active',  false]);
  // => objects for ['fred']
   
  // The `_.property` iteratee shorthand.
  _.reject(users,  'active');
  // => objects for ['barney']
} catch (e) {}



try {
  _.sample([1,  2,  3,  4]);
  // => 2
} catch (e) {}



try {
  _.sampleSize([1,  2,  3],  2);
  // => [3, 1]
   
  _.sampleSize([1,  2,  3],  4);
  // => [2, 3, 1]
} catch (e) {}



try {
  _.shuffle([1,  2,  3,  4]);
  // => [4, 1, 3, 2]
} catch (e) {}



try {
  _.size([1,  2,  3]);
  // => 3
   
  _.size({ 
    'a':  1,
     'b':  2 
  });
  // => 2
   
  _.size('pebbles');
  // => 7
} catch (e) {}



try {
  _.some([null,  0,  'yes',  false],  Boolean);
  // => true
   
  var  users  =   [  { 
    'user':   'barney',
     'active':  true 
  },    { 
    'user':   'fred',
       'active':  false 
  }]; 
  // The `_.matches` iteratee shorthand.
  _.some(users,   { 
    'user':   'barney',
     'active':  false 
  });
  // => false
   
  // The `_.matchesProperty` iteratee shorthand.
  _.some(users,   ['active',  false]);
  // => true
   
  // The `_.property` iteratee shorthand.
  _.some(users,  'active');
  // => true
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'fred',
       'age':  48 
  },    { 
    'user':   'barney',
     'age':  36 
  },    { 
    'user':   'fred',
       'age':  40 
  },    { 
    'user':   'barney',
     'age':  34 
  }]; 
  _.sortBy(users,   [function(o)  { 
    return  o.user; 
  }]);
  // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
   
  _.sortBy(users,   ['user',  'age']);
  // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
} catch (e) {}



try {
  _.defer(function(stamp)  {  
    console.log(_.now()  -  stamp);
  },  _.now());
  // => Logs the number of milliseconds it took for the deferred invocation.
} catch (e) {}



try {
  var  saves  =   ['profile',  'settings']; 
  var  done  =  _.after(saves.length,  function()  {  
    console.log('done saving!');
  }); 
  _.forEach(saves,  function(type)  {  
    asyncSave({ 
      'type':  type,
       'complete':  done 
    });
  });
  // => Logs 'done saving!' after the two async saves have completed.
} catch (e) {}



try {
  _.map(['6',  '8',  '10'],  _.ary(parseInt,  1));
  // => [6, 8, 10]
} catch (e) {}



try {
  jQuery(element).on('click',  _.before(5,  addContactToList));
  // => Allows adding up to 4 contacts to the list.
} catch (e) {}



try {
  function  greet(greeting,  punctuation)  {  
    return  greeting  +  ' '  +  this.user  +  punctuation;
  } 
  var  object  =   { 
    'user':   'fred' 
  }; 
  var  bound  =  _.bind(greet,  object,  'hi');
  bound('!');
  // => 'hi fred!'
   
  // Bound with placeholders.
  var  bound  =  _.bind(greet,  object,  _,  '!');
  bound('hi');
  // => 'hi fred!'
} catch (e) {}



try {
  var  object  =   {  
    'user':   'fred',
      'greet':   function(greeting,  punctuation)  {    
      return  greeting  +  ' '  +  this.user  +  punctuation;  
    }
  }; 
  var  bound  =  _.bindKey(object,  'greet',  'hi');
  bound('!');
  // => 'hi fred!'
   
  object.greet  =   function(greeting,  punctuation)  {  
    return  greeting  +  'ya '  +  this.user  +  punctuation;
  }; 
  bound('!');
  // => 'hiya fred!'
   
  // Bound with placeholders.
  var  bound  =  _.bindKey(object,  'greet',  _,  '!');
  bound('hi');
  // => 'hiya fred!'
} catch (e) {}



try {
  var  abc  =   function(a,  b,  c)  {  
    return  [a,  b,  c];
  }; 
  var  curried  =  _.curry(abc); 
  curried(1)(2)(3);
  // => [1, 2, 3]
   
  curried(1,  2)(3);
  // => [1, 2, 3]
   
  curried(1,  2,  3);
  // => [1, 2, 3]
   
  // Curried with placeholders.
  curried(1)(_,  3)(2);
  // => [1, 2, 3]
} catch (e) {}



try {
  var  abc  =   function(a,  b,  c)  {  
    return  [a,  b,  c];
  }; 
  var  curried  =  _.curryRight(abc); 
  curried(3)(2)(1);
  // => [1, 2, 3]
   
  curried(2,  3)(1);
  // => [1, 2, 3]
   
  curried(1,  2,  3);
  // => [1, 2, 3]
   
  // Curried with placeholders.
  curried(3)(1,  _)(2);
  // => [1, 2, 3]
} catch (e) {}



try {
  // Avoid costly calculations while the window size is in flux.
  jQuery(window).on('resize',  _.debounce(calculateLayout,  150)); 
  // Invoke `sendMail` when clicked, debouncing subsequent calls.
  jQuery(element).on('click',  _.debounce(sendMail,  300,   {  
    'leading':  true,
      'trailing':  false
  })); 
  // Ensure `batchLog` is invoked once after 1 second of debounced calls.
  var  debounced  =  _.debounce(batchLog,  250,   { 
    'maxWait':  1000 
  });
  var  source  =  new  EventSource('/stream');
  jQuery(source).on('message',  debounced); 
  // Cancel the trailing debounced invocation.
  jQuery(window).on('popstate',  debounced.cancel);
} catch (e) {}



try {
  _.defer(function(text)  {  
    console.log(text);
  },  'deferred');
  // => Logs 'deferred' after one millisecond.
} catch (e) {}



try {
  _.delay(function(text)  {  
    console.log(text);
  },  1000,  'later');
  // => Logs 'later' after one second.
} catch (e) {}



try {
  var  flipped  =  _.flip(function()  {  
    return  _.toArray(arguments);
  }); 
  flipped('a',  'b',  'c',  'd');
  // => ['d', 'c', 'b', 'a']
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':  2 
  };
  var  other  =   { 
    'c':  3,
     'd':  4 
  }; 
  var  values  =  _.memoize(_.values);
  values(object);
  // => [1, 2]
   
  values(other);
  // => [3, 4]
   
  object.a  =  2;
  values(object);
  // => [1, 2]
   
  // Modify the result cache.
  values.cache.set(object,   ['a',  'b']);
  values(object);
  // => ['a', 'b']
   
  // Replace `_.memoize.Cache`.
  _.memoize.Cache  =  WeakMap;
} catch (e) {}



try {
  function  isEven(n)  {  
    return  n  %  2  ==  0;
  } 
  _.filter([1,  2,  3,  4,  5,  6],  _.negate(isEven));
  // => [1, 3, 5]
} catch (e) {}



try {
  var  initialize  =  _.once(createApplication);
  initialize();
  initialize();
  // => `createApplication` is invoked once
} catch (e) {}



try {
  function  doubled(n)  {  
    return  n  *  2;
  } 
  function  square(n)  {  
    return  n  *  n;
  } 
  var  func  =  _.overArgs(function(x,  y)  {  
    return  [x,  y];
  },   [square,  doubled]); 
  func(9,  3);
  // => [81, 6]
   
  func(10,  5);
  // => [100, 10]
} catch (e) {}



try {
  function  greet(greeting,  name)  {  
    return  greeting  +  ' '  +  name;
  } 
  var  sayHelloTo  =  _.partial(greet,  'hello');
  sayHelloTo('fred');
  // => 'hello fred'
   
  // Partially applied with placeholders.
  var  greetFred  =  _.partial(greet,  _,  'fred');
  greetFred('hi');
  // => 'hi fred'
} catch (e) {}



try {
  function  greet(greeting,  name)  {  
    return  greeting  +  ' '  +  name;
  } 
  var  greetFred  =  _.partialRight(greet,  'fred');
  greetFred('hi');
  // => 'hi fred'
   
  // Partially applied with placeholders.
  var  sayHelloTo  =  _.partialRight(greet,  'hello',  _);
  sayHelloTo('fred');
  // => 'hello fred'
} catch (e) {}



try {
  var  rearged  =  _.rearg(function(a,  b,  c)  {  
    return  [a,  b,  c];
  },   [2,  0,  1]); 
  rearged('b',  'c',  'a')
    // => ['a', 'b', 'c']
} catch (e) {}



try {
  var  say  =  _.rest(function(what,  names)  {  
    return  what  +  ' '  +  _.initial(names).join(', ')  +     (_.size(names)  >  1  ?  ', & '  :  '')  +  _.last(names);
  }); 
  say('hello',  'fred',  'barney',  'pebbles');
  // => 'hello fred, barney, & pebbles'
} catch (e) {}



try {
  var  say  =  _.spread(function(who,  what)  {  
    return  who  +  ' says '  +  what;
  }); 
  say(['fred',  'hello']);
  // => 'fred says hello'
   
  var  numbers  =  Promise.all([  Promise.resolve(40),   Promise.resolve(36)]); 
  numbers.then(_.spread(function(x,  y)  {  
    return  x  +  y;
  }));
  // => a Promise of 76
} catch (e) {}



try {
  // Avoid excessively updating the position while scrolling.
  jQuery(window).on('scroll',  _.throttle(updatePosition,  100)); 
  // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
  var  throttled  =  _.throttle(renewToken,  300000,   { 
    'trailing':  false 
  });
  jQuery(element).on('click',  throttled); 
  // Cancel the trailing throttled invocation.
  jQuery(window).on('popstate',  throttled.cancel);
} catch (e) {}



try {
  _.map(['6',  '8',  '10'],  _.unary(parseInt));
  // => [6, 8, 10]
} catch (e) {}



try {
  var  p  =  _.wrap(_.escape,  function(func,  text)  {  
    return  '<p>'  +  func(text)  +  '</p>';
  }); 
  p('fred, barney, & pebbles');
  // => '<p>fred, barney, &amp; pebbles</p>'
} catch (e) {}



try {
  _.castArray(1);
  // => [1]
   
  _.castArray({ 
    'a':  1 
  });
  // => [{ 'a': 1 }]
   
  _.castArray('abc');
  // => ['abc']
   
  _.castArray(null);
  // => [null]
   
  _.castArray(undefined);
  // => [undefined]
   
  _.castArray();
  // => []
   
  var  array  =   [1,  2,  3];
  console.log(_.castArray(array)  ===  array);
  // => true
} catch (e) {}



try {
  var  objects  =   [{ 
    'a':  1 
  },   { 
    'b':  2 
  }]; 
  var  shallow  =  _.clone(objects);
  console.log(shallow[0]  ===  objects[0]);
  // => true
} catch (e) {}



try {
  var  objects  =   [{ 
    'a':  1 
  },   { 
    'b':  2 
  }]; 
  var  deep  =  _.cloneDeep(objects);
  console.log(deep[0]  ===  objects[0]);
  // => false
} catch (e) {}



try {
  function  customizer(value)  {  
    if  (_.isElement(value))  {    
      return  value.cloneNode(true);  
    }
  } 
  var  el  =  _.cloneDeepWith(document.body,  customizer); 
  console.log(el  ===  document.body);
  // => false
  console.log(el.nodeName);
  // => 'BODY'
  console.log(el.childNodes.length);
  // => 20
} catch (e) {}



try {
  function  customizer(value)  {  
    if  (_.isElement(value))  {    
      return  value.cloneNode(false);  
    }
  } 
  var  el  =  _.cloneWith(document.body,  customizer); 
  console.log(el  ===  document.body);
  // => false
  console.log(el.nodeName);
  // => 'BODY'
  console.log(el.childNodes.length);
  // => 0
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':  2 
  }; 
  _.conformsTo(object,   { 
    'b':   function(n)  { 
      return  n  >  1; 
    } 
  });
  // => true
   
  _.conformsTo(object,   { 
    'b':   function(n)  { 
      return  n  >  2; 
    } 
  });
  // => false
} catch (e) {}



try {
  var  object  =   { 
    'a':  1 
  };
  var  other  =   { 
    'a':  1 
  }; 
  _.eq(object,  object);
  // => true
   
  _.eq(object,  other);
  // => false
   
  _.eq('a',  'a');
  // => true
   
  _.eq('a',  Object('a'));
  // => false
   
  _.eq(NaN,  NaN);
  // => true
} catch (e) {}



try {
  _.gt(3,  1);
  // => true
   
  _.gt(3,  3);
  // => false
   
  _.gt(1,  3);
  // => false
} catch (e) {}



try {
  _.gte(3,  1);
  // => true
   
  _.gte(3,  3);
  // => true
   
  _.gte(1,  3);
  // => false
} catch (e) {}



try {
  _.isArguments(function()  { 
    return  arguments; 
  }());
  // => true
   
  _.isArguments([1,  2,  3]);
  // => false
} catch (e) {}



try {
  _.isArray([1,  2,  3]);
  // => true
   
  _.isArray(document.body.children);
  // => false
   
  _.isArray('abc');
  // => false
   
  _.isArray(_.noop);
  // => false
} catch (e) {}



try {
  _.isArrayBuffer(new  ArrayBuffer(2));
  // => true
   
  _.isArrayBuffer(new  Array(2));
  // => false
} catch (e) {}



try {
  _.isArrayLike([1,  2,  3]);
  // => true
   
  _.isArrayLike(document.body.children);
  // => true
   
  _.isArrayLike('abc');
  // => true
   
  _.isArrayLike(_.noop);
  // => false
} catch (e) {}



try {
  _.isArrayLikeObject([1,  2,  3]);
  // => true
   
  _.isArrayLikeObject(document.body.children);
  // => true
   
  _.isArrayLikeObject('abc');
  // => false
   
  _.isArrayLikeObject(_.noop);
  // => false
} catch (e) {}



try {
  _.isBoolean(false);
  // => true
   
  _.isBoolean(null);
  // => false
} catch (e) {}



try {
  _.isBuffer(new  Buffer(2));
  // => true
   
  _.isBuffer(new  Uint8Array(2));
  // => false
} catch (e) {}



try {
  _.isDate(new  Date);
  // => true
   
  _.isDate('Mon April 23 2012');
  // => false
} catch (e) {}



try {
  _.isElement(document.body);
  // => true
   
  _.isElement('<body>');
  // => false
} catch (e) {}



try {
  _.isEmpty(null);
  // => true
   
  _.isEmpty(true);
  // => true
   
  _.isEmpty(1);
  // => true
   
  _.isEmpty([1,  2,  3]);
  // => false
   
  _.isEmpty({ 
    'a':  1 
  });
  // => false
} catch (e) {}



try {
  var  object  =   { 
    'a':  1 
  };
  var  other  =   { 
    'a':  1 
  }; 
  _.isEqual(object,  other);
  // => true
   
  object  ===  other;
  // => false
} catch (e) {}



try {
  function  isGreeting(value)  {  
    return  /^h(?:i|ello)$/.test(value);
  } 
  function  customizer(objValue,  othValue)  {  
    if  (isGreeting(objValue)  &&  isGreeting(othValue))  {    
      return  true;  
    }
  } 
  var  array  =   ['hello',  'goodbye'];
  var  other  =   ['hi',  'goodbye']; 
  _.isEqualWith(array,  other,  customizer);
  // => true
} catch (e) {}



try {
  _.isError(new  Error);
  // => true
   
  _.isError(Error);
  // => false
} catch (e) {}



try {
  _.isFinite(3);
  // => true
   
  _.isFinite(Number.MIN_VALUE);
  // => true
   
  _.isFinite(Infinity);
  // => false
   
  _.isFinite('3');
  // => false
} catch (e) {}



try {
  _.isFunction(_);
  // => true
   
  _.isFunction(/abc/);
  // => false
} catch (e) {}



try {
  _.isInteger(3);
  // => true
   
  _.isInteger(Number.MIN_VALUE);
  // => false
   
  _.isInteger(Infinity);
  // => false
   
  _.isInteger('3');
  // => false
} catch (e) {}



try {
  _.isLength(3);
  // => true
   
  _.isLength(Number.MIN_VALUE);
  // => false
   
  _.isLength(Infinity);
  // => false
   
  _.isLength('3');
  // => false
} catch (e) {}



try {
  _.isMap(new  Map);
  // => true
   
  _.isMap(new  WeakMap);
  // => false
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':  2 
  }; 
  _.isMatch(object,   { 
    'b':  2 
  });
  // => true
   
  _.isMatch(object,   { 
    'b':  1 
  });
  // => false
} catch (e) {}



try {
  function  isGreeting(value)  {  
    return  /^h(?:i|ello)$/.test(value);
  } 
  function  customizer(objValue,  srcValue)  {  
    if  (isGreeting(objValue)  &&  isGreeting(srcValue))  {    
      return  true;  
    }
  } 
  var  object  =   { 
    'greeting':   'hello' 
  };
  var  source  =   { 
    'greeting':   'hi' 
  }; 
  _.isMatchWith(object,  source,  customizer);
  // => true
} catch (e) {}



try {
  _.isNaN(NaN);
  // => true
   
  _.isNaN(new  Number(NaN));
  // => true
   
  isNaN(undefined);
  // => true
   
  _.isNaN(undefined);
  // => false
} catch (e) {}



try {
  _.isNative(Array.prototype.push);
  // => true
   
  _.isNative(_);
  // => false
} catch (e) {}



try {
  _.isNil(null);
  // => true
   
  _.isNil(void  0);
  // => true
   
  _.isNil(NaN);
  // => false
} catch (e) {}



try {
  _.isNull(null);
  // => true
   
  _.isNull(void  0);
  // => false
} catch (e) {}



try {
  _.isNumber(3);
  // => true
   
  _.isNumber(Number.MIN_VALUE);
  // => true
   
  _.isNumber(Infinity);
  // => true
   
  _.isNumber('3');
  // => false
} catch (e) {}



try {
  _.isObject({});
  // => true
   
  _.isObject([1,  2,  3]);
  // => true
   
  _.isObject(_.noop);
  // => true
   
  _.isObject(null);
  // => false
} catch (e) {}



try {
  _.isObjectLike({});
  // => true
   
  _.isObjectLike([1,  2,  3]);
  // => true
   
  _.isObjectLike(_.noop);
  // => false
   
  _.isObjectLike(null);
  // => false
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;
  } 
  _.isPlainObject(new  Foo);
  // => false
   
  _.isPlainObject([1,  2,  3]);
  // => false
   
  _.isPlainObject({ 
    'x':  0,
     'y':  0 
  });
  // => true
   
  _.isPlainObject(Object.create(null));
  // => true
} catch (e) {}



try {
  _.isRegExp(/abc/);
  // => true
   
  _.isRegExp('/abc/');
  // => false
} catch (e) {}



try {
  _.isSafeInteger(3);
  // => true
   
  _.isSafeInteger(Number.MIN_VALUE);
  // => false
   
  _.isSafeInteger(Infinity);
  // => false
   
  _.isSafeInteger('3');
  // => false
} catch (e) {}



try {
  _.isSet(new  Set);
  // => true
   
  _.isSet(new  WeakSet);
  // => false
} catch (e) {}



try {
  _.isString('abc');
  // => true
   
  _.isString(1);
  // => false
} catch (e) {}



try {
  _.isSymbol(Symbol.iterator);
  // => true
   
  _.isSymbol('abc');
  // => false
} catch (e) {}



try {
  _.isTypedArray(new  Uint8Array);
  // => true
   
  _.isTypedArray([]);
  // => false
} catch (e) {}



try {
  _.isUndefined(void  0);
  // => true
   
  _.isUndefined(null);
  // => false
} catch (e) {}



try {
  _.isWeakMap(new  WeakMap);
  // => true
   
  _.isWeakMap(new  Map);
  // => false
} catch (e) {}



try {
  _.isWeakSet(new  WeakSet);
  // => true
   
  _.isWeakSet(new  Set);
  // => false
} catch (e) {}



try {
  _.lt(1,  3);
  // => true
   
  _.lt(3,  3);
  // => false
   
  _.lt(3,  1);
  // => false
} catch (e) {}



try {
  _.lte(1,  3);
  // => true
   
  _.lte(3,  3);
  // => true
   
  _.lte(3,  1);
  // => false
} catch (e) {}



try {
  _.toArray({ 
    'a':  1,
     'b':  2 
  });
  // => [1, 2]
   
  _.toArray('abc');
  // => ['a', 'b', 'c']
   
  _.toArray(1);
  // => []
   
  _.toArray(null);
  // => []
} catch (e) {}



try {
  _.toFinite(3.2);
  // => 3.2
   
  _.toFinite(Number.MIN_VALUE);
  // => 5e-324
   
  _.toFinite(Infinity);
  // => 1.7976931348623157e+308
   
  _.toFinite('3.2');
  // => 3.2
} catch (e) {}



try {
  _.toInteger(3.2);
  // => 3
   
  _.toInteger(Number.MIN_VALUE);
  // => 0
   
  _.toInteger(Infinity);
  // => 1.7976931348623157e+308
   
  _.toInteger('3.2');
  // => 3
} catch (e) {}



try {
  _.toLength(3.2);
  // => 3
   
  _.toLength(Number.MIN_VALUE);
  // => 0
   
  _.toLength(Infinity);
  // => 4294967295
   
  _.toLength('3.2');
  // => 3
} catch (e) {}



try {
  _.toNumber(3.2);
  // => 3.2
   
  _.toNumber(Number.MIN_VALUE);
  // => 5e-324
   
  _.toNumber(Infinity);
  // => Infinity
   
  _.toNumber('3.2');
  // => 3.2
} catch (e) {}



try {
  function  Foo()  {  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.assign({ 
    'a':  1 
  },  new  Foo);
  // => { 'a': 1, 'b': 2 }
   
  _.assign({ 
    'a':  1 
  },  _.toPlainObject(new  Foo));
  // => { 'a': 1, 'b': 2, 'c': 3 }
} catch (e) {}



try {
  _.toSafeInteger(3.2);
  // => 3
   
  _.toSafeInteger(Number.MIN_VALUE);
  // => 0
   
  _.toSafeInteger(Infinity);
  // => 9007199254740991
   
  _.toSafeInteger('3.2');
  // => 3
} catch (e) {}



try {
  _.toString(null);
  // => ''
   
  _.toString(-0);
  // => '-0'
   
  _.toString([1,  2,  3]);
  // => '1,2,3'
} catch (e) {}



try {
  _.add(6,  4);
  // => 10
} catch (e) {}



try {
  _.ceil(4.006);
  // => 5
   
  _.ceil(6.004,  2);
  // => 6.01
   
  _.ceil(6040,  -2);
  // => 6100
} catch (e) {}



try {
  _.divide(6,  4);
  // => 1.5
} catch (e) {}



try {
  _.floor(4.006);
  // => 4
   
  _.floor(0.046,  2);
  // => 0.04
   
  _.floor(4060,  -2);
  // => 4000
} catch (e) {}



try {
  _.max([4,  2,  8,  6]);
  // => 8
   
  _.max([]);
  // => undefined
} catch (e) {}



try {
  var  objects  =   [{ 
    'n':  1 
  },   { 
    'n':  2 
  }]; 
  _.maxBy(objects,  function(o)  { 
    return  o.n; 
  });
  // => { 'n': 2 }
   
  // The `_.property` iteratee shorthand.
  _.maxBy(objects,  'n');
  // => { 'n': 2 }
} catch (e) {}



try {
  _.mean([4,  2,  8,  6]);
  // => 5
} catch (e) {}



try {
  var  objects  =   [{ 
    'n':  4 
  },   { 
    'n':  2 
  },   { 
    'n':  8 
  },   { 
    'n':  6 
  }]; 
  _.meanBy(objects,  function(o)  { 
    return  o.n; 
  });
  // => 5
   
  // The `_.property` iteratee shorthand.
  _.meanBy(objects,  'n');
  // => 5
} catch (e) {}



try {
  _.min([4,  2,  8,  6]);
  // => 2
   
  _.min([]);
  // => undefined
} catch (e) {}



try {
  var  objects  =   [{ 
    'n':  1 
  },   { 
    'n':  2 
  }]; 
  _.minBy(objects,  function(o)  { 
    return  o.n; 
  });
  // => { 'n': 1 }
   
  // The `_.property` iteratee shorthand.
  _.minBy(objects,  'n');
  // => { 'n': 1 }
} catch (e) {}



try {
  _.multiply(6,  4);
  // => 24
} catch (e) {}



try {
  _.round(4.006);
  // => 4
   
  _.round(4.006,  2);
  // => 4.01
   
  _.round(4060,  -2);
  // => 4100
} catch (e) {}



try {
  _.subtract(6,  4);
  // => 2
} catch (e) {}



try {
  _.sum([4,  2,  8,  6]);
  // => 20
} catch (e) {}



try {
  var  objects  =   [{ 
    'n':  4 
  },   { 
    'n':  2 
  },   { 
    'n':  8 
  },   { 
    'n':  6 
  }]; 
  _.sumBy(objects,  function(o)  { 
    return  o.n; 
  });
  // => 20
   
  // The `_.property` iteratee shorthand.
  _.sumBy(objects,  'n');
  // => 20
} catch (e) {}



try {
  _.clamp(-10,  -5,  5);
  // => -5
   
  _.clamp(10,  -5,  5);
  // => 5
} catch (e) {}



try {
  _.inRange(3,  2,  4);
  // => true
   
  _.inRange(4,  8);
  // => true
   
  _.inRange(4,  2);
  // => false
   
  _.inRange(2,  2);
  // => false
   
  _.inRange(1.2,  2);
  // => true
   
  _.inRange(5.2,  4);
  // => false
   
  _.inRange(-3,  -2,  -6);
  // => true
} catch (e) {}



try {
  _.random(0,  5);
  // => an integer between 0 and 5
   
  _.random(5);
  // => also an integer between 0 and 5
   
  _.random(5,  true);
  // => a floating-point number between 0 and 5
   
  _.random(1.2,  5.2);
  // => a floating-point number between 1.2 and 5.2
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;
  } 
  function  Bar()  {  
    this.c  =  3;
  } 
  Foo.prototype.b  =  2;
  Bar.prototype.d  =  4; 
  _.assign({ 
    'a':  0 
  },  new  Foo,  new  Bar);
  // => { 'a': 1, 'c': 3 }
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;
  } 
  function  Bar()  {  
    this.c  =  3;
  } 
  Foo.prototype.b  =  2;
  Bar.prototype.d  =  4; 
  _.assignIn({ 
    'a':  0 
  },  new  Foo,  new  Bar);
  // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
} catch (e) {}



try {
  function  customizer(objValue,  srcValue)  {  
    return  _.isUndefined(objValue)  ?  srcValue  :  objValue;
  } 
  var  defaults  =  _.partialRight(_.assignInWith,  customizer); 
  defaults({ 
    'a':  1 
  },   { 
    'b':  2 
  },   { 
    'a':  3 
  });
  // => { 'a': 1, 'b': 2 }
} catch (e) {}



try {
  function  customizer(objValue,  srcValue)  {  
    return  _.isUndefined(objValue)  ?  srcValue  :  objValue;
  } 
  var  defaults  =  _.partialRight(_.assignWith,  customizer); 
  defaults({ 
    'a':  1 
  },   { 
    'b':  2 
  },   { 
    'a':  3 
  });
  // => { 'a': 1, 'b': 2 }
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  3 
      } 
    },  4] 
  }; 
  _.at(object,   ['a[0].b.c',  'a[1]']);
  // => [3, 4]
} catch (e) {}



try {
  function  Shape()  {  
    this.x  =  0;  
    this.y  =  0;
  } 
  function  Circle()  {  
    Shape.call(this);
  } 
  Circle.prototype  =  _.create(Shape.prototype,   {  
    'constructor':  Circle
  }); 
  var  circle  =  new  Circle;
  circle  instanceof  Circle;
  // => true
   
  circle  instanceof  Shape;
  // => true
} catch (e) {}



try {
  _.defaults({ 
    'a':  1 
  },   { 
    'b':  2 
  },   { 
    'a':  3 
  });
  // => { 'a': 1, 'b': 2 }
} catch (e) {}



try {
  _.defaultsDeep({ 
    'a':  { 
      'b':  2 
    } 
  },   { 
    'a':  { 
      'b':  1,
       'c':  3 
    } 
  });
  // => { 'a': { 'b': 2, 'c': 3 } }
} catch (e) {}



try {
  var  users  =   {  
    'barney':   { 
      'age':  36,
       'active':  true 
    },
      'fred':     { 
      'age':  40,
       'active':  false 
    },
      'pebbles':  { 
      'age':  1,
        'active':  true 
    }
  }; 
  _.findKey(users,  function(o)  { 
    return  o.age  <  40; 
  });
  // => 'barney' (iteration order is not guaranteed)
   
  // The `_.matches` iteratee shorthand.
  _.findKey(users,   { 
    'age':  1,
     'active':  true 
  });
  // => 'pebbles'
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findKey(users,   ['active',  false]);
  // => 'fred'
   
  // The `_.property` iteratee shorthand.
  _.findKey(users,  'active');
  // => 'barney'
} catch (e) {}



try {
  var  users  =   {  
    'barney':   { 
      'age':  36,
       'active':  true 
    },
      'fred':     { 
      'age':  40,
       'active':  false 
    },
      'pebbles':  { 
      'age':  1,
        'active':  true 
    }
  }; 
  _.findLastKey(users,  function(o)  { 
    return  o.age  <  40; 
  });
  // => returns 'pebbles' assuming `_.findKey` returns 'barney'
   
  // The `_.matches` iteratee shorthand.
  _.findLastKey(users,   { 
    'age':  36,
     'active':  true 
  });
  // => 'barney'
   
  // The `_.matchesProperty` iteratee shorthand.
  _.findLastKey(users,   ['active',  false]);
  // => 'fred'
   
  // The `_.property` iteratee shorthand.
  _.findLastKey(users,  'active');
  // => 'pebbles'
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.forIn(new  Foo,  function(value,  key)  {  
    console.log(key);
  });
  // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.forInRight(new  Foo,  function(value,  key)  {  
    console.log(key);
  });
  // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.forOwn(new  Foo,  function(value,  key)  {  
    console.log(key);
  });
  // => Logs 'a' then 'b' (iteration order is not guaranteed).
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.forOwnRight(new  Foo,  function(value,  key)  {  
    console.log(key);
  });
  // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  _.constant('a');  
    this.b  =  _.constant('b');
  } 
  Foo.prototype.c  =  _.constant('c'); 
  _.functions(new  Foo);
  // => ['a', 'b']
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  _.constant('a');  
    this.b  =  _.constant('b');
  } 
  Foo.prototype.c  =  _.constant('c'); 
  _.functionsIn(new  Foo);
  // => ['a', 'b', 'c']
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  3 
      } 
    }] 
  }; 
  _.get(object,  'a[0].b.c');
  // => 3
   
  _.get(object,   ['a',  '0',  'b',  'c']);
  // => 3
   
  _.get(object,  'a.b.c',  'default');
  // => 'default'
} catch (e) {}



try {
  var  object  =   { 
    'a':  { 
      'b':  2 
    } 
  };
  var  other  =  _.create({ 
    'a':  _.create({ 
      'b':  2 
    }) 
  }); 
  _.has(object,  'a');
  // => true
   
  _.has(object,  'a.b');
  // => true
   
  _.has(object,   ['a',  'b']);
  // => true
   
  _.has(other,  'a');
  // => false
} catch (e) {}



try {
  var  object  =  _.create({ 
    'a':  _.create({ 
      'b':  2 
    }) 
  }); 
  _.hasIn(object,  'a');
  // => true
   
  _.hasIn(object,  'a.b');
  // => true
   
  _.hasIn(object,   ['a',  'b']);
  // => true
   
  _.hasIn(object,  'b');
  // => false
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':  2,
     'c':  1 
  }; 
  _.invert(object);
  // => { '1': 'c', '2': 'b' }
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':  2,
     'c':  1 
  }; 
  _.invertBy(object);
  // => { '1': ['a', 'c'], '2': ['b'] }
   
  _.invertBy(object,  function(value)  {  
    return  'group'  +  value;
  });
  // => { 'group1': ['a', 'c'], 'group2': ['b'] }
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  [1,  2,  3,  4] 
      } 
    }] 
  }; 
  _.invoke(object,  'a[0].b.c.slice',  1,  3);
  // => [2, 3]
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.keys(new  Foo);
  // => ['a', 'b'] (iteration order is not guaranteed)
   
  _.keys('hi');
  // => ['0', '1']
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.keysIn(new  Foo);
  // => ['a', 'b', 'c'] (iteration order is not guaranteed)
} catch (e) {}



try {
  _.mapKeys({ 
    'a':  1,
     'b':  2 
  },  function(value,  key)  {  
    return  key  +  value;
  });
  // => { 'a1': 1, 'b2': 2 }
} catch (e) {}



try {
  var  users  =   {  
    'fred':     { 
      'user':   'fred',
          'age':  40 
    },
      'pebbles':  { 
      'user':   'pebbles',
       'age':  1 
    }
  }; 
  _.mapValues(users,  function(o)  { 
    return  o.age; 
  });
  // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   
  // The `_.property` iteratee shorthand.
  _.mapValues(users,  'age');
  // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
} catch (e) {}



try {
  var  object  =   {  
    'a':  [{ 
      'b':  2 
    },   { 
      'd':  4 
    }]
  }; 
  var  other  =   {  
    'a':  [{ 
      'c':  3 
    },   { 
      'e':  5 
    }]
  }; 
  _.merge(object,  other);
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
} catch (e) {}



try {
  function  customizer(objValue,  srcValue)  {  
    if  (_.isArray(objValue))  {    
      return  objValue.concat(srcValue);  
    }
  } 
  var  object  =   { 
    'a':  [1],
     'b':  [2] 
  };
  var  other  =   { 
    'a':  [3],
     'b':  [4] 
  }; 
  _.mergeWith(object,  other,  customizer);
  // => { 'a': [1, 3], 'b': [2, 4] }
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':   '2',
     'c':  3 
  }; 
  _.omit(object,   ['a',  'c']);
  // => { 'b': '2' }
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':   '2',
     'c':  3 
  }; 
  _.omitBy(object,  _.isNumber);
  // => { 'b': '2' }
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':   '2',
     'c':  3 
  }; 
  _.pick(object,   ['a',  'c']);
  // => { 'a': 1, 'c': 3 }
} catch (e) {}



try {
  var  object  =   { 
    'a':  1,
     'b':   '2',
     'c':  3 
  }; 
  _.pickBy(object,  _.isNumber);
  // => { 'a': 1, 'c': 3 }
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c1':  3,
         'c2':  _.constant(4) 
      } 
    }] 
  }; 
  _.result(object,  'a[0].b.c1');
  // => 3
   
  _.result(object,  'a[0].b.c2');
  // => 4
   
  _.result(object,  'a[0].b.c3',  'default');
  // => 'default'
   
  _.result(object,  'a[0].b.c3',  _.constant('default'));
  // => 'default'
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  3 
      } 
    }] 
  }; 
  _.set(object,  'a[0].b.c',  4);
  console.log(object.a[0].b.c);
  // => 4
   
  _.set(object,   ['x',  '0',  'y',  'z'],  5);
  console.log(object.x[0].y.z);
  // => 5
} catch (e) {}



try {
  var  object  =   {}; 
  _.setWith(object,  '[0][1]',  'a',  Object);
  // => { '0': { '1': 'a' } }
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.toPairs(new  Foo);
  // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.toPairsIn(new  Foo);
  // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
} catch (e) {}



try {
  _.transform([2,  3,  4],  function(result,  n)  {  
    result.push(n  *=  n);  
    return  n  %  2  ==  0;
  },   []);
  // => [4, 9]
   
  _.transform({ 
    'a':  1,
     'b':  2,
     'c':  1 
  },  function(result,  value,  key)  {  
    (result[value]  ||  (result[value]  =   [])).push(key);
  },   {});
  // => { '1': ['a', 'c'], '2': ['b'] }
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  7 
      } 
    }] 
  };
  _.unset(object,  'a[0].b.c');
  // => true
   
  console.log(object);
  // => { 'a': [{ 'b': {} }] };
   
  _.unset(object,   ['a',  '0',  'b',  'c']);
  // => true
   
  console.log(object);
  // => { 'a': [{ 'b': {} }] };
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  3 
      } 
    }] 
  }; 
  _.update(object,  'a[0].b.c',  function(n)  { 
    return  n  *  n; 
  });
  console.log(object.a[0].b.c);
  // => 9
   
  _.update(object,  'x[0].y.z',  function(n)  { 
    return  n  ?  n  +  1  :  0; 
  });
  console.log(object.x[0].y.z);
  // => 0
} catch (e) {}



try {
  var  object  =   {}; 
  _.updateWith(object,  '[0][1]',  _.constant('a'),  Object);
  // => { '0': { '1': 'a' } }
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.values(new  Foo);
  // => [1, 2] (iteration order is not guaranteed)
   
  _.values('hi');
  // => ['h', 'i']
} catch (e) {}



try {
  function  Foo()  {  
    this.a  =  1;  
    this.b  =  2;
  } 
  Foo.prototype.c  =  3; 
  _.valuesIn(new  Foo);
  // => [1, 2, 3] (iteration order is not guaranteed)
} catch (e) {}



try {
  function  square(n)  {  
    return  n  *  n;
  } 
  var  wrapped  =  _([1,  2,  3]); 
  // Returns an unwrapped value.
  wrapped.reduce(_.add);
  // => 6
   
  // Returns a wrapped value.
  var  squares  =  wrapped.map(square); 
  _.isArray(squares);
  // => false
   
  _.isArray(squares.value());
  // => true
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
      'age':  36 
  },    { 
    'user':   'fred',
        'age':  40 
  },    { 
    'user':   'pebbles',
     'age':  1 
  }]; 
  var  youngest  =  _  .chain(users)  .sortBy('age')  .map(function(o)  {    
    return  o.user  +  ' is '  +  o.age;  
  })  .head()  .value();
  // => 'pebbles is 1'
} catch (e) {}



try {
  _([1,  2,  3]) .tap(function(array)  {
    // Mutate input array.
       
    array.pop(); 
  }) .reverse() .value();
  // => [2, 1]
} catch (e) {}



try {
  _('  abc  ') .chain() .trim() .thru(function(value)  {   
    return  [value]; 
  }) .value();
  // => ['abc']
} catch (e) {}



try {
  var  wrapped  =  _([1,  2]); 
  wrapped[Symbol.iterator]()  ===  wrapped;
  // => true
   
  Array.from(wrapped);
  // => [1, 2]
} catch (e) {}



try {
  var  object  =   { 
    'a':  [{ 
      'b':  { 
        'c':  3 
      } 
    },  4] 
  }; 
  _(object).at(['a[0].b.c',  'a[1]']).value();
  // => [3, 4]
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
     'age':  36 
  },    { 
    'user':   'fred',
       'age':  40 
  }]; 
  // A sequence without explicit chaining.
  _(users).head();
  // => { 'user': 'barney', 'age': 36 }
   
  // A sequence with explicit chaining.
  _(users)  .chain()  .head()  .pick('user')  .value();
  // => { 'user': 'barney' }
} catch (e) {}



try {
  var  array  =   [1,  2];
  var  wrapped  =  _(array).push(3); 
  console.log(array);
  // => [1, 2]
   
  wrapped  =  wrapped.commit();
  console.log(array);
  // => [1, 2, 3]
   
  wrapped.last();
  // => 3
   
  console.log(array);
  // => [1, 2, 3]
} catch (e) {}



try {
  var  wrapped  =  _([1,  2]); 
  wrapped.next();
  // => { 'done': false, 'value': 1 }
   
  wrapped.next();
  // => { 'done': false, 'value': 2 }
   
  wrapped.next();
  // => { 'done': true, 'value': undefined }
} catch (e) {}



try {
  function  square(n)  {  
    return  n  *  n;
  } 
  var  wrapped  =  _([1,  2]).map(square);
  var  other  =  wrapped.plant([3,  4]); 
  other.value();
  // => [9, 16]
   
  wrapped.value();
  // => [1, 4]
} catch (e) {}



try {
  var  array  =   [1,  2,  3]; 
  _(array).reverse().value()
    // => [3, 2, 1]
     
  console.log(array);
  // => [3, 2, 1]
} catch (e) {}



try {
  _([1,  2,  3]).value();
  // => [1, 2, 3]
} catch (e) {}



try {
  _.camelCase('Foo Bar');
  // => 'fooBar'
   
  _.camelCase('--foo-bar--');
  // => 'fooBar'
   
  _.camelCase('__FOO_BAR__');
  // => 'fooBar'
} catch (e) {}



try {
  _.capitalize('FRED');
  // => 'Fred'
} catch (e) {}



try {
  _.deburr('déjà vu');
  // => 'deja vu'
} catch (e) {}



try {
  _.endsWith('abc',  'c');
  // => true
   
  _.endsWith('abc',  'b');
  // => false
   
  _.endsWith('abc',  'b',  2);
  // => true
} catch (e) {}



try {
  _.escape('fred, barney, & pebbles');
  // => 'fred, barney, &amp; pebbles'
} catch (e) {}



try {
  _.escapeRegExp('[lodash](https://lodash.com/)');
  // => '\[lodash\]\(https://lodash\.com/\)'
} catch (e) {}



try {
  _.kebabCase('Foo Bar');
  // => 'foo-bar'
   
  _.kebabCase('fooBar');
  // => 'foo-bar'
   
  _.kebabCase('__FOO_BAR__');
  // => 'foo-bar'
} catch (e) {}



try {
  _.lowerCase('--Foo-Bar--');
  // => 'foo bar'
   
  _.lowerCase('fooBar');
  // => 'foo bar'
   
  _.lowerCase('__FOO_BAR__');
  // => 'foo bar'
} catch (e) {}



try {
  _.lowerFirst('Fred');
  // => 'fred'
   
  _.lowerFirst('FRED');
  // => 'fRED'
} catch (e) {}



try {
  _.pad('abc',  8);
  // => '  abc   '
   
  _.pad('abc',  8,  '_-');
  // => '_-abc_-_'
   
  _.pad('abc',  3);
  // => 'abc'
} catch (e) {}



try {
  _.padEnd('abc',  6);
  // => 'abc   '
   
  _.padEnd('abc',  6,  '_-');
  // => 'abc_-_'
   
  _.padEnd('abc',  3);
  // => 'abc'
} catch (e) {}



try {
  _.padStart('abc',  6);
  // => '   abc'
   
  _.padStart('abc',  6,  '_-');
  // => '_-_abc'
   
  _.padStart('abc',  3);
  // => 'abc'
} catch (e) {}



try {
  _.parseInt('08');
  // => 8
   
  _.map(['6',  '08',  '10'],  _.parseInt);
  // => [6, 8, 10]
} catch (e) {}



try {
  _.repeat('*',  3);
  // => '***'
   
  _.repeat('abc',  2);
  // => 'abcabc'
   
  _.repeat('abc',  0);
  // => ''
} catch (e) {}



try {
  _.replace('Hi Fred',  'Fred',  'Barney');
  // => 'Hi Barney'
} catch (e) {}



try {
  _.snakeCase('Foo Bar');
  // => 'foo_bar'
   
  _.snakeCase('fooBar');
  // => 'foo_bar'
   
  _.snakeCase('--FOO-BAR--');
  // => 'foo_bar'
} catch (e) {}



try {
  _.split('a-b-c',  '-',  2);
  // => ['a', 'b']
} catch (e) {}



try {
  _.startCase('--foo-bar--');
  // => 'Foo Bar'
   
  _.startCase('fooBar');
  // => 'Foo Bar'
   
  _.startCase('__FOO_BAR__');
  // => 'FOO BAR'
} catch (e) {}



try {
  _.startsWith('abc',  'a');
  // => true
   
  _.startsWith('abc',  'b');
  // => false
   
  _.startsWith('abc',  'b',  1);
  // => true
} catch (e) {}



try {
  // Use the "interpolate" delimiter to create a compiled template.
  var  compiled  =  _.template('hello <%= user %>!');
  compiled({ 
    'user':   'fred' 
  });
  // => 'hello fred!'
   
  // Use the HTML "escape" delimiter to escape data property values.
  var  compiled  =  _.template('<b><%- value %></b>');
  compiled({ 
    'value':   '<script>' 
  });
  // => '<b>&lt;script&gt;</b>'
   
  // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
  var  compiled  =  _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
  compiled({ 
    'users':  ['fred',  'barney'] 
  });
  // => '<li>fred</li><li>barney</li>'
   
  // Use the internal `print` function in "evaluate" delimiters.
  var  compiled  =  _.template('<% print("hello " + user); %>!');
  compiled({ 
    'user':   'barney' 
  });
  // => 'hello barney!'
   
  // Use the ES template literal delimiter as an "interpolate" delimiter.
  // Disable support by replacing the "interpolate" delimiter.
  var  compiled  =  _.template('hello ${ user }!');
  compiled({ 
    'user':   'pebbles' 
  });
  // => 'hello pebbles!'
   
  // Use backslashes to treat delimiters as plain text.
  var  compiled  =  _.template('<%= "\\<%- value %\\>" %>');
  compiled({ 
    'value':   'ignored' 
  });
  // => '<%- value %>'
   
  // Use the `imports` option to import `jQuery` as `jq`.
  var  text  =  '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
  var  compiled  =  _.template(text,   { 
    'imports':  { 
      'jq':  jQuery 
    } 
  });
  compiled({ 
    'users':  ['fred',  'barney'] 
  });
  // => '<li>fred</li><li>barney</li>'
   
  // Use the `sourceURL` option to specify a custom sourceURL for the template.
  var  compiled  =  _.template('hello <%= user %>!',   { 
    'sourceURL':   '/basic/greeting.jst' 
  });
  compiled(data);
  // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
   
  // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
  var  compiled  =  _.template('hi <%= data.user %>!',   { 
    'variable':   'data' 
  });
  compiled.source;
  // => function(data) {
  //   var __t, __p = '';
  //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
  //   return __p;
  // }
   
  // Use custom template delimiters.
  _.templateSettings.interpolate  =  /{{([\s\S]+?)}}/g;
  var  compiled  =  _.template('hello {{ user }}!');
  compiled({ 
    'user':   'mustache' 
  });
  // => 'hello mustache!'
   
  // Use the `source` property to inline compiled templates for meaningful
  // line numbers in error messages and stack traces.
  fs.writeFileSync(path.join(process.cwd(),  'jst.js'),  '\
  var JST = {\
    "main": '  +  _.template(mainText).source  +  '\
  };\
');
} catch (e) {}



try {
  _.toLower('--Foo-Bar--');
  // => '--foo-bar--'
   
  _.toLower('fooBar');
  // => 'foobar'
   
  _.toLower('__FOO_BAR__');
  // => '__foo_bar__'
} catch (e) {}



try {
  _.toUpper('--foo-bar--');
  // => '--FOO-BAR--'
   
  _.toUpper('fooBar');
  // => 'FOOBAR'
   
  _.toUpper('__foo_bar__');
  // => '__FOO_BAR__'
} catch (e) {}



try {
  _.trim('  abc  ');
  // => 'abc'
   
  _.trim('-_-abc-_-',  '_-');
  // => 'abc'
   
  _.map(['  foo  ',  '  bar  '],  _.trim);
  // => ['foo', 'bar']
} catch (e) {}



try {
  _.trimEnd('  abc  ');
  // => '  abc'
   
  _.trimEnd('-_-abc-_-',  '_-');
  // => '-_-abc'
} catch (e) {}



try {
  _.trimStart('  abc  ');
  // => 'abc  '
   
  _.trimStart('-_-abc-_-',  '_-');
  // => 'abc-_-'
} catch (e) {}



try {
  _.truncate('hi-diddly-ho there, neighborino');
  // => 'hi-diddly-ho there, neighbo...'
   
  _.truncate('hi-diddly-ho there, neighborino',   {  
    'length':  24,
      'separator':   ' '
  });
  // => 'hi-diddly-ho there,...'
   
  _.truncate('hi-diddly-ho there, neighborino',   {  
    'length':  24,
      'separator':   /,? +/
  });
  // => 'hi-diddly-ho there...'
   
  _.truncate('hi-diddly-ho there, neighborino',   {  
    'omission':   ' [...]'
  });
  // => 'hi-diddly-ho there, neig [...]'
} catch (e) {}



try {
  _.unescape('fred, barney, &amp; pebbles');
  // => 'fred, barney, & pebbles'
} catch (e) {}



try {
  _.upperCase('--foo-bar');
  // => 'FOO BAR'
   
  _.upperCase('fooBar');
  // => 'FOO BAR'
   
  _.upperCase('__foo_bar__');
  // => 'FOO BAR'
} catch (e) {}



try {
  _.upperFirst('fred');
  // => 'Fred'
   
  _.upperFirst('FRED');
  // => 'FRED'
} catch (e) {}



try {
  _.words('fred, barney, & pebbles');
  // => ['fred', 'barney', 'pebbles']
   
  _.words('fred, barney, & pebbles',  /[^, ]+/g);
  // => ['fred', 'barney', '&', 'pebbles']
} catch (e) {}



try {
  // Avoid throwing errors for invalid selectors.
  var  elements  =  _.attempt(function(selector)  {  
    return  document.querySelectorAll(selector);
  },  '>_>'); 
  if  (_.isError(elements))  {  
    elements  =   [];
  }
} catch (e) {}



try {
  var  view  =   {  
    'label':   'docs',
      'click':   function()  {    
      console.log('clicked '  +  this.label);  
    }
  }; 
  _.bindAll(view,   ['click']);
  jQuery(element).on('click',  view.click);
  // => Logs 'clicked docs' when clicked.
} catch (e) {}



try {
  var  func  =  _.cond([  
    [_.matches({ 
      'a':  1 
    }),            _.constant('matches A')],   
    [_.conforms({ 
      'b':  _.isNumber 
    }),  _.constant('matches B')],   
    [_.stubTrue,                       _.constant('no match')]
  ]); 
  func({ 
    'a':  1,
     'b':  2 
  });
  // => 'matches A'
   
  func({ 
    'a':  0,
     'b':  1 
  });
  // => 'matches B'
   
  func({ 
    'a':   '1',
     'b':   '2' 
  });
  // => 'no match'
} catch (e) {}



try {
  var  objects  =   [  { 
    'a':  2,
     'b':  1 
  },    { 
    'a':  1,
     'b':  2 
  }]; 
  _.filter(objects,  _.conforms({ 
    'b':   function(n)  { 
      return  n  >  1; 
    } 
  }));
  // => [{ 'a': 1, 'b': 2 }]
} catch (e) {}



try {
  var  objects  =  _.times(2,  _.constant({ 
    'a':  1 
  })); 
  console.log(objects);
  // => [{ 'a': 1 }, { 'a': 1 }]
   
  console.log(objects[0]  ===  objects[1]);
  // => true
} catch (e) {}



try {
  _.defaultTo(1,  10);
  // => 1
   
  _.defaultTo(undefined,  10);
  // => 10
} catch (e) {}



try {
  function  square(n)  {  
    return  n  *  n;
  } 
  var  addSquare  =  _.flow([_.add,  square]);
  addSquare(1,  2);
  // => 9
} catch (e) {}



try {
  function  square(n)  {  
    return  n  *  n;
  } 
  var  addSquare  =  _.flowRight([square,  _.add]);
  addSquare(1,  2);
  // => 9
} catch (e) {}



try {
  var  object  =   { 
    'a':  1 
  }; 
  console.log(_.identity(object)  ===  object);
  // => true
} catch (e) {}



try {
  var  users  =   [  { 
    'user':   'barney',
     'age':  36,
     'active':  true 
  },    { 
    'user':   'fred',
       'age':  40,
     'active':  false 
  }]; 
  // The `_.matches` iteratee shorthand.
  _.filter(users,  _.iteratee({ 
    'user':   'barney',
     'active':  true 
  }));
  // => [{ 'user': 'barney', 'age': 36, 'active': true }]
   
  // The `_.matchesProperty` iteratee shorthand.
  _.filter(users,  _.iteratee(['user',  'fred']));
  // => [{ 'user': 'fred', 'age': 40 }]
   
  // The `_.property` iteratee shorthand.
  _.map(users,  _.iteratee('user'));
  // => ['barney', 'fred']
   
  // Create custom iteratee shorthands.
  _.iteratee  =  _.wrap(_.iteratee,  function(iteratee,  func)  {  
    return  !_.isRegExp(func)  ?  iteratee(func)  :   function(string)  {    
      return  func.test(string);  
    };
  }); 
  _.filter(['abc',  'def'],  /ef/);
  // => ['def']
} catch (e) {}



try {
  var  objects  =   [  { 
    'a':  1,
     'b':  2,
     'c':  3 
  },    { 
    'a':  4,
     'b':  5,
     'c':  6 
  }]; 
  _.filter(objects,  _.matches({ 
    'a':  4,
     'c':  6 
  }));
  // => [{ 'a': 4, 'b': 5, 'c': 6 }]
} catch (e) {}



try {
  var  objects  =   [  { 
    'a':  1,
     'b':  2,
     'c':  3 
  },    { 
    'a':  4,
     'b':  5,
     'c':  6 
  }]; 
  _.find(objects,  _.matchesProperty('a',  4));
  // => { 'a': 4, 'b': 5, 'c': 6 }
} catch (e) {}



try {
  var  objects  =   [  { 
    'a':  { 
      'b':  _.constant(2) 
    } 
  },    { 
    'a':  { 
      'b':  _.constant(1) 
    } 
  }]; 
  _.map(objects,  _.method('a.b'));
  // => [2, 1]
   
  _.map(objects,  _.method(['a',  'b']));
  // => [2, 1]
} catch (e) {}



try {
  var  array  =  _.times(3,  _.constant),
        object  =   { 
      'a':  array,
       'b':  array,
       'c':  array 
    }; 
  _.map(['a[2]',  'c[0]'],  _.methodOf(object));
  // => [2, 0]
   
  _.map([
    ['a',  '2'],  
    ['c',  '0']
  ],  _.methodOf(object));
  // => [2, 0]
} catch (e) {}



try {
  function  vowels(string)  {  
    return  _.filter(string,  function(v)  {    
      return  /[aeiou]/i.test(v);  
    });
  } 
  _.mixin({ 
    'vowels':  vowels 
  });
  _.vowels('fred');
  // => ['e']
   
  _('fred').vowels().value();
  // => ['e']
   
  _.mixin({ 
    'vowels':  vowels 
  },   { 
    'chain':  false 
  });
  _('fred').vowels();
  // => ['e']
} catch (e) {}



try {
  var  lodash  =  _.noConflict();


  _.times(2,  _.noop);
  // => [undefined, undefined]
} catch (e) {}



try {
  var  func  =  _.nthArg(1);
  func('a',  'b',  'c',  'd');
  // => 'b'
   
  var  func  =  _.nthArg(-2);
  func('a',  'b',  'c',  'd');
  // => 'c'
} catch (e) {}



try {
  var  func  =  _.over([Math.max,  Math.min]); 
  func(1,  2,  3,  4);
  // => [4, 1]
} catch (e) {}



try {
  var  func  =  _.overEvery([Boolean,  isFinite]); 
  func('1');
  // => true
   
  func(null);
  // => false
   
  func(NaN);
  // => false
} catch (e) {}



try {
  var  func  =  _.overSome([Boolean,  isFinite]); 
  func('1');
  // => true
   
  func(null);
  // => true
   
  func(NaN);
  // => false
} catch (e) {}



try {
  var  objects  =   [  { 
    'a':  { 
      'b':  2 
    } 
  },    { 
    'a':  { 
      'b':  1 
    } 
  }]; 
  _.map(objects,  _.property('a.b'));
  // => [2, 1]
   
  _.map(_.sortBy(objects,  _.property(['a',  'b'])),  'a.b');
  // => [1, 2]
} catch (e) {}



try {
  var  array  =   [0,  1,  2],
        object  =   { 
      'a':  array,
       'b':  array,
       'c':  array 
    }; 
  _.map(['a[2]',  'c[0]'],  _.propertyOf(object));
  // => [2, 0]
   
  _.map([
    ['a',  '2'],  
    ['c',  '0']
  ],  _.propertyOf(object));
  // => [2, 0]
} catch (e) {}



try {
  _.range(4);
  // => [0, 1, 2, 3]
   
  _.range(-4);
  // => [0, -1, -2, -3]
   
  _.range(1,  5);
  // => [1, 2, 3, 4]
   
  _.range(0,  20,  5);
  // => [0, 5, 10, 15]
   
  _.range(0,  -4,  -1);
  // => [0, -1, -2, -3]
   
  _.range(1,  4,  0);
  // => [1, 1, 1]
   
  _.range(0);
  // => []
} catch (e) {}



try {
  _.rangeRight(4);
  // => [3, 2, 1, 0]
   
  _.rangeRight(-4);
  // => [-3, -2, -1, 0]
   
  _.rangeRight(1,  5);
  // => [4, 3, 2, 1]
   
  _.rangeRight(0,  20,  5);
  // => [15, 10, 5, 0]
   
  _.rangeRight(0,  -4,  -1);
  // => [-3, -2, -1, 0]
   
  _.rangeRight(1,  4,  0);
  // => [1, 1, 1]
   
  _.rangeRight(0);
  // => []
} catch (e) {}



try {
  _.mixin({ 
    'foo':  _.constant('foo') 
  }); 
  var  lodash  =  _.runInContext();
  lodash.mixin({ 
    'bar':  lodash.constant('bar') 
  }); 
  _.isFunction(_.foo);
  // => true
  _.isFunction(_.bar);
  // => false
   
  lodash.isFunction(lodash.foo);
  // => false
  lodash.isFunction(lodash.bar);
  // => true
   
  // Create a suped-up `defer` in Node.js.
  var  defer  =  _.runInContext({ 
    'setTimeout':  setImmediate 
  }).defer;
} catch (e) {}



try {
  var  arrays  =  _.times(2,  _.stubArray); 
  console.log(arrays);
  // => [[], []]
   
  console.log(arrays[0]  ===  arrays[1]);
  // => false
} catch (e) {}



try {
  _.times(2,  _.stubFalse);
  // => [false, false]
} catch (e) {}



try {
  var  objects  =  _.times(2,  _.stubObject); 
  console.log(objects);
  // => [{}, {}]
   
  console.log(objects[0]  ===  objects[1]);
  // => false
} catch (e) {}



try {
  _.times(2,  _.stubString);
  // => ['', '']
} catch (e) {}



try {
  _.times(2,  _.stubTrue);
  // => [true, true]
} catch (e) {}



try {
  _.times(3,  String);
  // => ['0', '1', '2']
    
  _.times(4,  _.constant(0));
  // => [0, 0, 0, 0]
} catch (e) {}



try {
  _.toPath('a.b.c');
  // => ['a', 'b', 'c']
   
  _.toPath('a[0].b.c');
  // => ['a', '0', 'b', 'c']
} catch (e) {}



try {
  _.uniqueId('contact_');
  // => 'contact_104'
   
  _.uniqueId();
  // => '105'
} catch (e) {}
