```javascript
//Incorrect usage of $in operator with an array of objects
db.collection('myCollection').find({field: {$in: [{a:1}, {a:2}]}});
```