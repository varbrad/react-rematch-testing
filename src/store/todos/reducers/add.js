import produce from 'immer'
import uuid from 'uuid/v4'

export default (state, payload) =>
  produce(state, nextState => {
    const id = payload.id || uuid()
    payload.id = id
    nextState[id] = payload
  })
