import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Screen from '../../components/Screen'

import todosSelector from '../../store/todos/selectors'
import AddTodo from '../../components/AddTodo'

class HomeScreen extends React.PureComponent {
  static propTypes = {
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    todos: PropTypes.array
  }

  deleteTodo = todo => () => {
    this.props.removeTodo(todo.id)
  }

  renderTodos() {
    const { todos } = this.props
    return todos.map(todo => (
      <p key={todo.id}>
        {todo.text} <button onClick={this.deleteTodo(todo)}>DELETE</button>
      </p>
    ))
  }

  renderAddTodo() {
    return (
      <div>
        <AddTodo onSubmit={this.props.addTodo} />
      </div>
    )
  }

  render() {
    return (
      <Screen>
        <p>Todos</p>
        {this.renderTodos()}
        {this.renderAddTodo()}
      </Screen>
    )
  }
}

const mapState = state => ({
  todos: todosSelector(state)
})

const mapDispatch = dispatch => ({
  addTodo: payload => dispatch.todos.add(payload),
  removeTodo: id => dispatch.todos.remove(id)
})

export default connect(
  mapState,
  mapDispatch
)(HomeScreen)
