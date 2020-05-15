import types from './types'

const add = todo => ({
  type: types.ADD_TODO, todo
})

const remove = id => ({
  type: types.DELETE_TODO, id
})

export default {
  add,
  remove
}
