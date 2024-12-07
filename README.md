# MongoDB $in Operator with Array of Objects
This example demonstrates an uncommon error in MongoDB related to the incorrect usage of the `$in` operator with an array of objects.  The `$in` operator is intended to efficiently check for a value's presence in a given array. However, when dealing with arrays of objects, it behaves differently than one might expect.  This can lead to unexpected behavior and incorrect query results. The solution provides a way to correctly retrieve the expected results using the `$or` operator.

## Bug
The original query attempts to use `$in` to search for documents where the `field` matches either `{a: 1}` or `{a: 2}`.  Because it does a complete object comparison, no matches are found, even if documents exist where the field contains objects with `a: 1` or `a: 2` as part of the object.

## Solution
The solution uses the `$or` operator to correctly check for documents that match any of the specified criteria.