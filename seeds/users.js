
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Michael', last_name: 'Donovan', dob: 05/07/1991, is_authenticated: true},
        {id: 2, first_name: 'Brendon', last_name: 'Graff', dob: 02/02/1990, is_authenticated: false},
        {id: 3, first_name: 'John', last_name: 'Palmer', dob: 12/07/1981, is_authenticated: true},
      ]);
    });
};
