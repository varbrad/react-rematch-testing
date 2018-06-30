import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HomeScreen from './screens/home/HomeScreen'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <div>
          <h1>
Hello!
          </h1>
          <Link to="/">
            {'Home'}
          </Link>
          <Route
            exact
              path="/"
              component={HomeScreen}
          />
        </div>
      </Router>
    )
  }
}

export default App
