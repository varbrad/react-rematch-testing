import { init } from '@rematch/core'
import persist from '@rematch/persist'

import todos from './todos/'

const persistPlugin = persist({
  throttle: 1000
})

export default init({
  models: {
    todos
  },
  plugins: [persistPlugin]
})
