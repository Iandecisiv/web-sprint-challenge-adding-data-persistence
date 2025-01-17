module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations:{
      directory:"./data/migrations"
    }
  },
pool:{
  afterCreate:(conn,done)=>{
    conn.run("PRAGMA forien_keys =ON", done)
  }
}
};
