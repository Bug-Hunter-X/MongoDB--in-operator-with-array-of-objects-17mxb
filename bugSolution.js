```javascript
//Correct usage of $or operator
db.collection('myCollection').find({$or: [{field: {a: 1}}, {field: {a: 2}}]});
```