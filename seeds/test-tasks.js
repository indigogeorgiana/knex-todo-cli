
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(('todos') => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'vacuum'},
        {id: 2, task: 'buy groceries'}
      ])
    })
}
