import { addTodo, removeTodo } from './helper'

describe('addTodo', () => {
  it('should add todo to the list', () => {
    const startTodos = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }]

    const newTodo = { id: 3, name: 'three', isComplete: false }
    const expected = [
      { id: 3, name: 'three', isComplete: false },
      { id: 1, name: 'one', isComplete: false },
      { id: 2, name: 'two', isComplete: false }
    ]
    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
  })

  it('should not mutate the existing todo array', () => {
    const startTodos = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }]

    const newTodo = { id: 3, name: 'three', isComplete: false }

    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)
  })
})

describe('removeTodo', () => {
  test('removeTodo should remove todo from todos by id', () => {
    const startTodos = [
      { id: 1, name: 'one', isComplete: false },
      { id: 2, name: 'two', isComplete: false },
      { id: 3, name: 'three', isComplete: false }
    ]

    const expected = [{ id: 1, name: 'one', isComplete: false }, { id: 3, name: 'three', isComplete: false }]

    const result = removeTodo(startTodos, 2)

    expect(result).toEqual(expected)
  })

  test('removeTodo by id should not mutate', () => {
    const startTodos = [
      { id: 1, name: 'one', isComplete: false },
      { id: 2, name: 'two', isComplete: false },
      { id: 3, name: 'three', isComplete: false }
    ]

    const expected = [{ id: 1, name: 'one', isComplete: false }, { id: 3, name: 'three', isComplete: false }]

    const result = removeTodo(startTodos, 2)

    expect(result).not.toBe(expected)
  })
})
