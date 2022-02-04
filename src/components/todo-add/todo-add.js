import React from 'react';
import './todo-add.css';


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
        <form onSubmit={this.onAddNewTodo} className='form'>

          <input
              className="form-control search-input"
            onChange={(event) => this.onValueChange(event.target.value)}
            value={this.state.label}
            type='text'
            placeholder='Feel the todo'
          />
          <input
              className="btn btn-info"
              type='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default TodoAdd;
