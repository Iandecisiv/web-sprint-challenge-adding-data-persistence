
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table)=>{
        table.increments("project_id")
        table.text("project_name").notNull().unique()
        table.string("project_description")
        table.boolean("project_completed").defaultTo(0)
    })
    await knex.schema.createTable("resources",(table)=>{
        table.increments("resource_id")
        table.text("resource_name")
        table.string("resource_description")
    })
    await knex.schema.createTable("tasks",(table)=>{
        table.increments("task_id")
        table.string("task_description").notNull()
        table.string("task_notes")
        table.boolean("task_completed").defaultTo(0)
        table.integer("project_id").notNull().references("id").inTable("projects")
    })
    await knex.schema.createTable("project_resources",(table)=>{
        table.integer("project_id").notNull().references("id").inTable("projects")
        table.integer("resources_id").notNull().references("id").inTable("resources")
        table.primary(["project_id","resources_id"])
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
