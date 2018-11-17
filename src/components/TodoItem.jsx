import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppContext } from '../lib/helper'

const StyledList = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
`

const StyledLabel = styled.label`
  float: left;
  cursor: pointer;
`

const StyledButton = styled.button`
  float: right;
  background: palevioletred;
  color: #fff;
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 3px 10px;
  outline: none;
  cursor: pointer;
`

const TodoItem = props => {
  const { id, title } = props

  return (
    <AppContext.Consumer>
      {context => {
        const handleDeleteTodo = () => context.handleDeleteTodo(id)

        return (
          <StyledList>
            <StyledLabel htmlFor={id}>
              <input type="checkbox" id={id} /> {title}
            </StyledLabel>
            <StyledButton type="button" onClick={handleDeleteTodo}>
              Delete
            </StyledButton>
          </StyledList>
        )
      }}
    </AppContext.Consumer>
  )
}

TodoItem.defaultProps = {
  title: '',
  id: 1
}

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number
}
export default TodoItem
