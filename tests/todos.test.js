/* global test expect */
const knex = require('knex')

// Notice that we require the `.test` property from the knexfile
const config = require('../knexfile').test
const todos = require('../todo')

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  t.context.db = knex(config)
  return t.context.db.migrate.latest()
    .then(function () {
      return t.context.db.seed.run('test')
    })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

// This will fail until you:
//  - export the `getAll` function
//  - modify it to allow a test database to be passed in as a function parameter
test('getAll returns three todos', function (t) {
  // Arrange
  const expected = 3

  // Act
  // Be sure to always use `return` when testing with promises
  return todos.getAll(t.context.db)
    .then(function (results) {
      const actual = results.length

      // When testing async functions, we always assert inside `.then`. Why?

      // Assert
      t.is(actual, expected)
    })
})

test('addTodo creates a new todo', function (t) {
  const expected = 4

  return todos.addTodo('Yup.', t.context.db)
    .then(function () { return t.context.db('todos').select() })
    .then(function (results) {
      const actual = results.length
      t.is(actual, expected)
    })
})

test('completeTodo completes the correct todo', function (t) {
  const id = 2
  return todos.completeTodo(id, t.context.db)
    .then(function () { return t.context.db('todos').where('id', id).select() })
    .then(function (results) {
      t.truthy(results[0].completed)
    })
})

test('deleteTodo removes the correct todo', function (t) {
  const id = 2
  const expected = 0

  return todos.deleteTodo(id, t.context.db)
    .then(function () { return t.context.db('todos').where('id', id).select() })
    .then(function (results) {
      const actual = results.length
      t.is(actual, expected)
    })
})

test('updateTodo alters the task', function (t) {
  const id = 2
  const expected = '!!!'

  return todos.updateTodo(id, expected, t.context.db)
    .then(function () { return t.context.db('todos').select() })
    .then(function (results) {
      const actual = results.find(function (todo) { return todo.id === id }).task
      t.is(actual, expected)
    })
})

test('searchTodos returns the correct todos', function (t) {
  // Only ids 1 and 3 have a task with full-stops in it
  const expected = [1, 3]
  return todos.searchTodos('.', t.context.db)
    .then(function (results) {
      const actual = results.map(function (todo) { return todo.id })
      t.deepEqual(actual, expected)
    })
})
