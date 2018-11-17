import { createContext } from 'react'

/**
 * addTodo
 *
 * @param {Array} list
 * @param {Object} item
 */
export const addTodo = (list, item) => [item, ...list]

export const removeTodo = (list, todoId) => {
  const todoIndex = list.findIndex(item => item.id === todoId)
  return [...list.slice(0, todoIndex), ...list.slice(todoIndex + 1)]
}

/**
 * generateId
 *
 */
export const generateId = () => Math.floor(Math.random() * 100000)

/**
 * App Context
 */
export const AppContext = createContext()
