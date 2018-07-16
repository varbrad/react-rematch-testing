import produce from 'immer'

export default (state, id) =>
  produce(state, nextState => {
    delete nextState[id]
  })
