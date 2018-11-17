import React, { Fragment } from 'react'
import styled from 'styled-components'
import { AppContext } from '../lib/helper'

const FormInput = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin: 50px 0 20px 0;
  font-size: 20px;
`

const TodoForm = () => (
  <AppContext.Consumer>
    {context => (
      <Fragment>
        <StyledTitle>My Todos</StyledTitle>
        <p>Enter your todo and hit the Enter key </p>
        <form onSubmit={context.handleSubmit}>
          <FormInput
            placeholder="Enter new todo"
            onChange={context.handleOnchangeInput}
            value={context.state.currentTodo}
          />
        </form>
      </Fragment>
    )}
  </AppContext.Consumer>
)

export default TodoForm
