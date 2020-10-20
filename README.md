# levenshtein-distance
An Open Implementation of Levenshtein Distance Algorithm


```js
const levenshtein = require('./levenshtein');

levenshtein('', '').distance; // 0
levenshtein('fast', '').distance; // 4
levenshtein('fast', 'faster').distance; // 2
```
