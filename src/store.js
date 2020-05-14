import { createStore } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import reducerTodos from './todos/reducer'

const store = createStore(reducerTodos, composeWithDevTools())
window.store = store

export default store
