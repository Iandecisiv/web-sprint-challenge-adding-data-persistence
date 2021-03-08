exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_id: '1',
      resource_name: 'foo',
      resource_description: 'null',
    },
  ]);
};