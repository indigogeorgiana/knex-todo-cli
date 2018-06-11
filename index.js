const knex = require('knex')

const config = require('./knexfile').development

const db = knex(config)

db('todos')
  .select('id', 'task')
  .then((tasks) => {
    tasks.forEach(t => {
      console.log(`${t.id}: ${t.task}`)
    })
    db.destroy()
  })

function deleteTask () {
  // returns a promise that can delete a row given its id
  const currentID = 
  todos.find({
    where: {}
  })
}