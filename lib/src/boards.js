const boards = {
    'my_books': '59bf7a2f1de2efa9d28d3d9b',
    'my_music': '59c268659effe9432459d8e5',
    'my_sport': '59c2687e937cf485be84646c',
    'my_work_notes': '59c26871ffa0b7e1b2d42c1d',
    'my_films': '59c2688f006764af89b5c1e4',
};

const lists = {
    'my_books': '59bf7a32e7e5bf17eb49756d',
    'my_music': '59c26ed41c08a88882129eee',
    'my_sport': '59c26ee3d858afa40d42f6b1',
    'my_work_notes': '59c26e670e00eb3cac276b99',
    'my_films': '59c26eca937d13540a85b54c',
};

const checkObject = function(obj, item) {
    try {
        const res = obj[item];
        if(!res) {
            throw new Error('Wrong type!');
        }
        return res;
    } catch (e) {
        return null;
    }
}

const getBoardTypes = function(){
    return boards;
}

const getBoardId = function(type) {
    return checkObject(boards, type);
}

const getListTypes = function(){
    return lists;
}

const getListId = function(type) {
    return checkObject(lists, type);
}

module.exports = {
    getBoardId,
    getBoardTypes,
    getListId,
    getListTypes
};