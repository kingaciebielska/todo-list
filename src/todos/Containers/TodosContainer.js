import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../actions'
import List from '../Components/List'

const TodosContainer = () => {
  const dispatch = useDispatch()
  const todos =  useSelector(state => state.todos)

  const handleRemove = id => {
    dispatch(actions.remove(id))
  }

  return <List list={todos} handleRemove={handleRemove}/>
}

export default TodosContainer
