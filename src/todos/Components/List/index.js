import React from 'react'
import { useDispatch } from 'react-redux'
import trashIcon from '../../../assets/trash-solid.svg'
import { Wrapper, Heading, ListWrapper, ListItem, Title, Text, TrashButton, TrashImage } from './styles'

const List = ({list, handleRemove}) => {
  const handleRemoveClick = id => {
    handleRemove(id)
    console.log('id', id)
  }
  return <Wrapper>
    <Heading>Todo List:</Heading>
    <ListWrapper>
        {list.map(todo => <ListItem key={todo.id}><div><Title>{todo.title}</Title><Text>{todo.description}</Text></div><TrashButton onClick={() => handleRemoveClick(todo.id)}><TrashImage src={trashIcon} alt="trash-icon"/></TrashButton></ListItem>)}
    </ListWrapper>
  </Wrapper>
}

export default List
