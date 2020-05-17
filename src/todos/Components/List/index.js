import React from 'react'
import trashIcon from '../../../assets/trash-solid.svg'
import { Wrapper, Heading, ListWrapper, ListItem, Title, Text, TrashButton, TrashImage } from './styles'

const List = ({list, handleRemove}) => {
  const [isAnimated, setAnimation] = React.useState('')
  const handleRemoveClick = id => {
    handleRemove(id)
  }

  return <Wrapper>
    <Heading>Todo List:</Heading>
    <ListWrapper>
      {list.map(todo => <ListItem isAnimated={isAnimated==todo.id} onAnimationEnd={() => handleRemoveClick(todo.id)} key={todo.id}><div><Title>{todo.title}</Title><Text>{todo.description}</Text></div><TrashButton onClick={() => setAnimation(todo.id)}><TrashImage src={trashIcon} alt="trash-icon"/></TrashButton></ListItem>)}
    </ListWrapper>
  </Wrapper>
}

List.defaultProps = {
  list: [],
}

export default List
