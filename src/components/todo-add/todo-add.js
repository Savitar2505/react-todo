import React from 'react';


class TodoAdd extends React.Component {
  state = {
    label: ''
  }

  onValueChange = (text) => {
    this.setState({
      label: text.toLowerCase()
    })
  }

  onAddNewTodo = (event) => {
    event.preventDefault();
    this.props.addNewTodo(this.state.label)

    this.setState({
      label:''
    })
  }


  render() {

    return (
      <div>
        <form onSubmit={this.onAddNewTodo}>
          <input
            onChange={(event) => this.onValueChange(event.target.value)}
            type='text'
            placeholder='Feel the todo'
          />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}

export default TodoAdd;
