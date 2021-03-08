// build your `Task` model here
const db = require('../../data/dbConfig');

function find() {
    return db('tasks')
};

function insert(data) {
    return db('projects')
        .insert(data);
};

module.exports = {
    find, 
    insert
}