import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add';

import './app.css';


class App extends React.Component {
  state = {
      todos: [
        { label: 'Drink Coffee', important: false, id: 1, done: false },
        { label: 'Make Awesome App', important: true, id: 2, done: false },
        { label: 'Have a lunch', important: false, id: 3, done: false },
        { label: 'Drink vodka', important: true, id: 4, done: false },
        { label: 'Drink mojito', important: false, id: 5, done: false },
      ],
      filter: 'all',
      searchString: '',
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)
      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      return {
        todos: [...prev, ...next]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex((item) => item.id === id)

      const prev = oldState.todos.slice(0, idx)
      const current = oldState.todos[idx]
      const next = oldState.todos.slice(idx + 1)


      return {
        todos: [
          ...prev,
          {...current, important: !current.important},
          ...next
        ]
      }
    })
  }
  onToggleDone =(id)=>{
      this.setState((oldState)=>{
          const idx =oldState.todos.findIndex((item)=>item.id===id)
          const prev = oldState.todos.slice(0, idx,)
          const current =oldState.todos[idx]
          const next =oldState.todos.slice(idx+1)
          return{
              todos:[
                  ...prev,
                  {...current, done: !current.done},
                  ...next
              ]
          }
      })
  }

  onToggleFilter = (status) => {
    this.setState({
      filter: status
    })
  }

  onStatusFilter = (todos, status) => {
    if (status === 'active') {
      return todos.filter((item) => item.done === false)
    } else if (status === 'done') {
      return todos.filter((item) => item.done === true)
    } else {
      return todos
    }
  }

  onSearchFilter = (todos, searchString) => {
    const result = todos.filter((todo) => todo.label.toUpperCase().includes(searchString.toUpperCase()))
    return result
  }

  onSearchChange = (searchString) => {
    this.setState({
      searchString: searchString
    })
  }

  addNewTodo = (labelText) => {
    this.setState((oldState) => {



    const id = (state) => {
        let arr =[]
        state.forEach(elem=>{
            arr.push(elem.id)
        })
        return Math.max.apply(null, arr)
    }
      const newTodo = {
        id: id(oldState.todos)+1,
        label: labelText,
        important: false,
        done: false
      }

      console.log(oldState.todos)
      return {todos: [...oldState.todos, newTodo]}
    })
  }

  render() {
      const filteredTodos = this.onStatusFilter(this.state.todos, this.state.filter);
      const filterBySearchTodos = this.onSearchFilter(filteredTodos, this.state.searchString);

      const doneTodos = this.state.todos.filter((obj)=>{
          return (obj.done===true)
      })
      const todo = this.state.todos.filter( (obj)=>{
          return (obj.done===false)
      })
    return (
      <div className="todo-app">
        <AppHeader toDo={todo.length} done={doneTodos.length} />

        <div className="top-panel d-flex">

          <SearchPanel onSearchChange={this.onSearchChange} />

          <ItemStatusFilter onToggleFilter={this.onToggleFilter} filter={this.state.filter} />

        </div>

        <TodoList
          onDelete={this.onDelete}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          todos={filterBySearchTodos}
        />

        <TodoAdd addNewTodo={this.addNewTodo} />
      </div>
    );
  }
};


export default App;