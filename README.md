## happy-m-post-to-trello

Small module for another my app, just to add new card in trello fast.

```
npm install --save happy-m-post-to-trello
```

```
const { HappyMTrello, getBoardTypes } = require('happy-m-post-to-trello');

const myTrello = new HappyMTrello();
myTrello.addCard('my_board_type', 'card_header', 'card_desc');
```

Use __getBoardTypes__ to get available boards.