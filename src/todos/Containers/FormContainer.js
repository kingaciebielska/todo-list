import React from 'react'
import { useDispatch } from 'react-redux'
import nextId from "react-id-generator"
import actions from '../actions'
import { FormWrapper, InputsWrapper, StyledInput, StyledButton, ErrorMessage } from '../Components/Form/styles'

const validateForm = form => {
  if(!form.title) {
    return "Title is required"
  } else if (form.title.length <= 1) {
    return "Title is too short"
  }

  if(!form.description) {
    return "Description is required"
  } else if (form.description.length <= 2) {
    return "Description is too short"
  }

  return null
}

const FormContainer = () => {
  const dispatch = useDispatch()
  const titleInput = React.createRef()
  const descriptionInput = React.createRef()

  const [errorMessage, setError] = React.useState(null)
  const [form, setForm] = React.useState({
    title: '',
    description: ''
  })

  const upadeField = event => {
    setForm({
      ...form,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newId = nextId()

    const error = validateForm(form)
    if(error) {
      setError(error)
      return
    }

    setError(null)
    setForm({
      title: '',
      description: ''
    })
    dispatch(actions.add({id: newId, title: titleInput.current.value, description: descriptionInput.current.value}))
    titleInput.current.value = ''
    descriptionInput.current.value = ''
  }

  return <>
    <FormWrapper onSubmit={handleSubmit}>
      <InputsWrapper>
        <StyledInput onChange={upadeField} ref={titleInput} name="title" placeholder="title" type="text" />
        <StyledInput onChange={upadeField} ref={descriptionInput} name="description" placeholder="description" type="text" />
      </InputsWrapper>
      <StyledButton type="submit">+</StyledButton>
    </FormWrapper>
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </>
}

export default FormContainer
