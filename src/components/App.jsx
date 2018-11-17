import React, { Component } from 'react'
import styled from 'styled-components'
import { generateId, addTodo, AppContext, removeTodo } from '../lib/helper'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const Container = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
`

class App extends Component {
  state = {
    currentTodo: '',
    todos: []
  }

  handleSubmit = evt => {
    evt.preventDefault()

    const { currentTodo, todos } = this.state

    if (currentTodo) {
      const newTodo = { id: generateId(), name: currentTodo, isComplete: false }

      const updatedTodos = addTodo(todos, newTodo)

      this.setState({ todos: updatedTodos, currentTodo: '' })
    }
  }

  handleOnchangeInput = evt => {
    this.setState({ currentTodo: evt.target.value })
  }

  handleDeleteTodo = id => {
    const { todos } = this.state
    const updatedTodos = removeTodo(todos, id)

    this.setState({ todos: updatedTodos })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          handleDeleteTodo: this.handleDeleteTodo,
          handleSubmit: this.handleSubmit,
          handleOnchangeInput: this.handleOnchangeInput
        }}
      >
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
      </AppContext.Provider>
    )
  }
}

export default App
