const config = require('./knexfile').development
const knex = require('knex')
const db = knex(config)

db('todos')
  .select('id', 'task')
  .then((tasks) => {
    tasks.forEach(i => {
      console.log(`${i.id}: ${i.task} `)
    })
    db.destroy()
  })
