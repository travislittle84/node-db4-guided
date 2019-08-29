
exports.up = function(knex) {
    return knex.schema.createTable('zoos', tbl => {
        tbl.increments()
        tbl.string('zoo_name', 128).notNullable()
        tbl.string('address', 128).notNullable().unique()
    })
    .createTable('species', tbl => {
        tbl.increments()
        tbl.string('species_name', 128).notNullable().unique()
    })
    .createTable('animals', tbl => {
        tbl.increments()
        tbl.string('animal_name', 128).notNullable()
        tbl.integer('species_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('species')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('zoo_animals', tbl => {
        tbl.integer('zoo_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('zoos')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('animal_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('animals')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.primary(['zoo_id', 'animal_id'])
    })
  
};

exports.down = function(knex) {
    return knex.schema
        // Reverse order of creation
        .dropTableIfExists('zoo_animals')
        .dropTableIfExists('animals')
        .dropTableIfExists('species')
        .dropTableIfExists('zoos')
};
