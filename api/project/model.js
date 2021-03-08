// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db('projects')
};


function insert(data) {
    return db('projects')
        .insert(data);
};

module.exports = {
    find,
    insert
};