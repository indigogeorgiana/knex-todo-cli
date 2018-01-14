exports.seed = function (knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {id: 1, task: 'Row.'},
        {id: 2, task: 'Row.'},
        {id: 3, task: 'Row your boat.'}
      ]);
    });
};
