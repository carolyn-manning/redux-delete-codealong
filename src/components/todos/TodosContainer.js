import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map((todo) => (
      <Todo delete={this.props.delete} key={todo.id} todo={todo} />
    ));
  };
    
  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
  
  export default connect(mapStateToProps)(TodosContainer);