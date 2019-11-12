import React, { Component } from 'react';



class TodosListComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo =>
                        <li style = {{display: 'inline-block', marginRight: '5em'}} onClick = {()=> this.props.removeItem(todo.key)}>
                            {todo.todo}            
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default(TodosListComponent);