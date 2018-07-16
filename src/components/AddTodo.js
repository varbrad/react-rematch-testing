import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  state = {
    value: ''
  }

  handleValueChange = event => {
    const value = event.target.value
    this.setState({ value })
  }

  handleSubmit = () => {
    // empty value
    const value = this.state.value
    this.props.onSubmit({ text: value })
    this.setState({ value: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleValueChange}
          type="text"
          value={this.state.value}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default AddTodo
