import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const StyledUl = styled.ul`
    padding: 0
`

const TodoList = () => (
    <StyledUl>
        <TodoItem id="todo-1" title="Learn React.js" />
        <TodoItem id="todo-2" title="Learn Vue.js" />
        <TodoItem id="todo-3" title="Learn Laravel" />
    </StyledUl>
)
export default TodoList