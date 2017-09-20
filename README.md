## happy-m-post-trello

Small module for another my app, just to add new card in trello fast.

``
const { HappyMTrello, getBoardTypes } = require('./src/post-to-trello');
``

``
const myTrello = new HappyMTrello();
``

``
myTrello.addCard('my_board_type', 'card_header', 'card_desc');
``

Use __getBoardTypes__ to get available boards.