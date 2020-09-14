import React from 'react';

class TodoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            task: []
        };
    };
// Set the value of task w/ e.target.value
    changeHandler = e => {
        this.setState({ task: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({ task: '' });
        this.props.addTask(e, this.state.task)
    }

    render() {
        console.log('ToDo form props:', this.props);
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Task'
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.changeHandler}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;