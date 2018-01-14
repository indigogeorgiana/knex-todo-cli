/* global test expect */
const testEnv = require('./test-environment')
const todos = require('../todo')

let testDb = null

// Create a separate in-memory database before each test.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

// This will fail until you:
//  - export the `getAll` function
//  - modify it to allow a test database to be passed in as a function parameter
test('getAll returns three todos', () => {
  // Arrange
  const expected = 3

  // Act
  // Be sure to always use `return` when testing with promises
  return todos.getAll(testDb)
    .then(results => {
      const actual = results.length

      // When testing async functions, we always assert inside `.then`. Why?

      // Assert
      expect(actual).toBe(expected)
    })
})

test('addTodo creates a new todo', () => {
  const expected = 4

  return todos.addTodo('Yup.', testDb)
    .then(() => { return testDb('todos').select() })
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('completeTodo completes the correct todo', () => {
  const id = 2
  return todos.completeTodo(id, testDb)
    .then(() => { return testDb('todos').where('id', id).select() })
    .then(results => {
      expect(results[0].completed).toBeTruthy()
    })
})

test('deleteTodo removes the correct todo', () => {
  const id = 2
  const expected = 0

  return todos.deleteTodo(id, testDb)
    .then(() => { return testDb('todos').where('id', id).select() })
    .then(results => {
      const actual = results.length
      expect(actual).toBe(expected)
    })
})

test('updateTodo alters the task', () => {
  const id = 2
  const expected = '!!!'

  return todos.updateTodo(id, expected, testDb)
    .then(() => testDb('todos').select())
    .then(results => {
      const actual = results.find(todo => todo.id === id).task
      expect(actual).toBe(expected)
    })
})

test('searchTodos returns the correct todos', () => {
  // Only ids 1 and 3 have a task with full-stops in it
  const expected = [1, 3]
  return todos.searchTodos('.', testDb)
    .then(results => {
      const actual = results.map(todo => todo.id)
      expect(actual).toEqual(expected)
    })
})
