import types from './types'

const add = todo => ({
  type: types.ADD_TODO, todo
})

export default {
  add
}
