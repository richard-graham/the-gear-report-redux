
exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', (table) => {
        table.increments('id').primary()
        table.string('island_name')
        table.string('region_name')
        table.string('area_name')
        table.string('crag_name')
        table.string('wall_name')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('locations')
};
