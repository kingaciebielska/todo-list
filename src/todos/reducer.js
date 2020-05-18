import types from './types'

const INITIAL_STATE = {
  listName: 'Todo list',
  todos: []
}

function reducerTodos(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.ADD_TODO:
      return {
        ...state, todos: [...state.todos, action.todo]
      }
    case types.DELETE_TODO:
      return {
        ...state, todos: [...state.todos.filter(todo => todo.id !== action.id)]
      }
    default:
      return state
  }
}

export default reducerTodos
