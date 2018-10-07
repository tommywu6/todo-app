import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const Container = styled.div`
    width: 250px;
    margin: 10px auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px
`

const App = () => (
    <Container>
        <TodoForm />
        <TodoList />
    </Container>
)

render(<App />, document.getElementById('app'))
