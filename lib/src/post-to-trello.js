const Trello = require('trello');
const { getBoardTypes, getListId } = require('./boards');

const APP_ID = 'c29ce1a10ed51bc86a2b5cc710fdebe9';
const APP_TOKEN = '156f8c8e0022afd5b727b51f1cef9dae872a307ad04d84e6b6310d752a7a5751';
const USER_ID = 'a9c2ac02-4bcb-2ae5-a6f1-9cbed9713580';
const MEMBER_ID = '59bf74cacf76c1ff58d25f7b';

const post_to_trello = function(board_type, name, desc) {
    const trello = new Trello(APP_ID, APP_TOKEN);
    const listId = getListId(board_type);
    return trello.addCard(name, desc, listId);
};

module.exports = {
    post_to_trello,
    getBoardTypes
};