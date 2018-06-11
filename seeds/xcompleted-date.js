
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'work', completed: true, date: '2018/6/11 11:11:11'},
        {id: 2, task: 'play', completed: true, date: '2018/6/11 11:11:11'},
        {id: 3, task: 'sleep all hours', completed: false, date: '2018/6/11 11:11:11'},
        {id: 4, task: 'eat', completed: false, date: '2018/6/11 11:11:11'}
      ])
    })
}
