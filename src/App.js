import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/home/HomeScreen'

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <h1 className="bob">Hello!</h1>
          <Link to="/">Home</Link>
          <Route component={HomeScreen} />
        </div>
      </Router>
    )
  }
}

export default App
