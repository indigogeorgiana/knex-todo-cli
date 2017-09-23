exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todos').insert({id: 1, task: 'groceries'}),
        knex('todos').insert({id: 2, task: 'laundry'}),
        knex('todos').insert({id: 3, task: 'mow lawn'})
      ]);
    });
};
