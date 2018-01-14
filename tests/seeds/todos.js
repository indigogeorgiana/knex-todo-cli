exports.seed = knex => {
  return knex('todos').del()
    .then(() => {
      return knex('todos').insert([
        {id: 1, task: 'Acquire wombats.'},
        {id: 2, task: '???'},
        {id: 3, task: 'Profit.'}
      ])
    })
}
