import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { AppContext } from '../lib/helper'

const StyledUl = styled.ul`
  padding: 0;
`

const TodoList = () => (
  <AppContext.Consumer>
    {context => {
      const { todos } = context.state
      const todoList = todos.length
        ? todos.map(todo => <TodoItem key={todo.id} id={todo.id} title={todo.name} />)
        : 'Your todo list is empty. Add one.'

      return <StyledUl>{todoList}</StyledUl>
    }}
  </AppContext.Consumer>
)

export default TodoList
