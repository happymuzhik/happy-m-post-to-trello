const Trello = require('trello');
const { getBoardTypes, getListId } = require('./boards');

const APP_ID = 'c29ce1a10ed51bc86a2b5cc710fdebe9';
const APP_TOKEN = '156f8c8e0022afd5b727b51f1cef9dae872a307ad04d84e6b6310d752a7a5751';
const USER_ID = 'a9c2ac02-4bcb-2ae5-a6f1-9cbed9713580';
const MEMBER_ID = '59bf74cacf76c1ff58d25f7b';

const HappyMTrello = class {
    constructor(){
        this.trello = new Trello(APP_ID, APP_TOKEN);        
    }
    
    async addCard(board_type, name, desc, att) {
        const listId = getListId(board_type);
        const card = await this.trello.addCard(name, desc, listId);

        if(att && Array.isArray(att) && att.length) {
            for (let i = 0; i <= att.length; i++ ){
                await this.addAttachmentToCard(card.id, att[i]);
            }            
        }
        return card;
    }

    addCommentToCard(cardId, comment) {
        return this.trello.addCommentToCard(cardId, comment);
    }

    addAttachmentToCard(cardId, url) {
        return this.trello.addAttachmentToCard(cardId, url);
    }
}

module.exports = {
    HappyMTrello,
    getBoardTypes
};