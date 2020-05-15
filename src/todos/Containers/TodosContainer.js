import React from 'react'
import { useSelector } from 'react-redux'
import List from '../Components/List'

const TodosContainer = () => {
  const todos =  useSelector(state => state.todos)

  return <List list={todos}/>
}

export default TodosContainer
