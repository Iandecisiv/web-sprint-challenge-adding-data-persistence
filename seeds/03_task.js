exports.seed = function(knex) {
  return knex('tasks').insert([
    {
        task_id: '1',
        task_description: 'baz',
        task_notes: 'null',
        task_completed: 'false',
        project_id:'1'
    },
  ]);
};
