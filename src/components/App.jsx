import React from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const Container = styled.div`
  width: 250px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
`

const App = () => (
  <Container>
    <TodoForm />
    <TodoList />
  </Container>
)

export default App
