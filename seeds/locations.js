
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, island_name: 'North', region_name: 'Auckland', area_name: 'Coromandel', crag_name: 'Castle Rock', wall_name: 'Quiet Earth Wall'},
        {id: 2, island_name: 'North', region_name: 'Waikato', area_name: 'Wharepapa', crag_name: 'Froggatt Edge', wall_name: 'Hold on to your face'},
        {id: 3, island_name: 'South', region_name: 'Golden Bay', area_name: 'Takaka', crag_name: 'Paynes Ford', wall_name: 'Track One'},
      ]);
    });
};
