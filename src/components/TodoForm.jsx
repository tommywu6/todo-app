import React from 'react'
import styled from 'styled-components'

const FormInput = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`

const TodoForm = () => (
  <form>
    <FormInput placeholder="Enter new todo" />
  </form>
)

export default TodoForm
