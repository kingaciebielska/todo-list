import types from './types'

const INITIAL_STATE = {
  listName: 'Todo list',
  todos: [
    {id: "1", title: 'First task', description: 'Lorem ipsum ...'},
    {id: "2", title: 'Second task', description: 'Lorem ipsum ...'},
    {id: "3", title: 'Third task', description: 'Lorem ipsum ...'}
  ]
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
