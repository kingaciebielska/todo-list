import React from 'react'
import { Wrapper, Heading, ListWrapper, ListItem, Title, Text } from './styles'

const List = ({list}) => {
  return <Wrapper>
    <Heading>Todo List:</Heading>
    <ListWrapper>
        {list.map(todo => <ListItem key={todo.id}><Title>{todo.title}</Title><Text>{todo.description}</Text></ListItem>)}
    </ListWrapper>
  </Wrapper>
}

export default List
