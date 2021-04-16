
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Joon', username: 'myexistance', password: "1234"},
        {id: 2, name: 'Seb', username: 'sebby', password: "1234"},
        {id: 3, name: 'Emily', username: 'emily', password: "1234"},
      ]);
    });
};
