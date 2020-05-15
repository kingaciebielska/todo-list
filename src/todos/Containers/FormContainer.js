import React from 'react'
import { useDispatch } from 'react-redux'
import nextId from "react-id-generator"
import actions from '../actions'
import { FormWrapper, InputsWrapper, StyledInput, StyledButton } from '../Components/Form/styles'

const FormContainer = () => {
  const titleInput = React.createRef()
  const descriptionInput = React.createRef()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newId = nextId()

    dispatch(actions.add({id: newId, title: titleInput.current.value, description: descriptionInput.current.value}))
  }

  return <FormWrapper onSubmit={handleSubmit}>
    <InputsWrapper>
      <StyledInput ref={titleInput} placeholder="title" type="text" />
      <StyledInput ref={descriptionInput} placeholder="description" type="text" />
    </InputsWrapper>
    <StyledButton type="submit">+</StyledButton>
  </FormWrapper>
}

export default FormContainer
