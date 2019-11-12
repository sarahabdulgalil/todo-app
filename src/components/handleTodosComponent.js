import React, { Component } from 'react';
import NewTodoComponent from './newTodoComponent'
import TodosListComponent from './todosListComponent';

class HandleTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            currentItem: {
                todo:"",
                key: ""
            }
        }
    }

    handleInput = e =>{
        const newInput = e.target.value;

        const currentItem = {
            todo: newInput,
            key: Date.now()
        }

        this.setState({
            currentItem,
           
        })
    }

    addTodo = (e) => {
        e.preventDefault()
        const currentItem = this.state.currentItem;
        if(currentItem.todo != ""){
            console.log(currentItem)
            const todos = [...this.state.todos , currentItem];

            this.setState({
                todos,
                currentItem: {
                    todo: "",
                    key: ""
                }
            })
        }
        
    }

    removeItem = (key)=> {
        const newTodos = this.state.todos.filter( todo => {
            return todo.key != key;
        })

        this.setState({
            todos: newTodos
        })
    }

    

    render() {
        return (
            <div>
                <NewTodoComponent
                    onChange = {this.handleInput}
                    onSubmit = {this.addTodo}
                    value = {this.state.currentItem.todo}
                />

                <p  style = {{textAlign : 'center'}}> ----------------------------------------------------------------------- </p>
            
                <TodosListComponent todos = {this.state.todos} removeItem = {this.removeItem}/>
            </div>
        );
    }
}

export default HandleTodosComponent;