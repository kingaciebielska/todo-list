import React from 'react'
import trashIcon from '../../../assets/trash-solid.svg'
import { Wrapper, Heading, ListWrapper, ListItem, Title, Text, TrashButton, TrashImage } from './styles'

const List = ({list, handleRemove}) => {
  const handleRemoveClick = id => {
    handleRemove(id)
  }
  return <Wrapper>
    <Heading>Todo List:</Heading>
    <ListWrapper>
        {list.map(todo => <ListItem key={todo.id}><div><Title>{todo.title}</Title><Text>{todo.description}</Text></div><TrashButton onClick={() => handleRemoveClick(todo.id)}><TrashImage src={trashIcon} alt="trash-icon"/></TrashButton></ListItem>)}
    </ListWrapper>
  </Wrapper>
}

List.defaultProps = {
  list: [],
}

export default List
