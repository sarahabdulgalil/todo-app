import React, { Component } from 'react';

class NewTodoComponent extends Component {


    
  
    
    render() {
        const todo = (
                <div className = "header" style = {{textAlign : 'center'}}>
                    <form onSubmit={this.props.onSubmit}>
                        <input className = 'lg' placeholder="task" onChange= {this.props.onChange} value= {this.props.value}/>
                        <button type="submit">Add Task</button>
                    </form>
                   
                </div>
            )
        return (
            <div>    
                {todo}
              
            </div>
        );
    }
}

export default NewTodoComponent;