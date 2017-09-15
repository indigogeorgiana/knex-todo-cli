exports.seed = function (knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {task: 'Row.'},
        {task: 'Row.'},
        {task: 'Row your boat.'}
      ]);
    });
};
