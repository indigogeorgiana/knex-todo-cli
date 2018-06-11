
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'vacuum'},
        {id: 2, task: 'buy groceries'},
        {id: 3, task: 'kick my flatmate out'},
        {id: 4, task: 'seek revenge'},
        {id: 5, task: 'get my shit together'}
      ])
    })
}
