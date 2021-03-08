// build your `Resource` model here
const db = require('../../data/dbConfig');

function findResource() {
    return db('resources')
}
function insert(data) {
    return db('projects')
        .insert(data);
}

module.exports={findResource,
                    insert}