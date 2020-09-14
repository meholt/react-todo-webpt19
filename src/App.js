import React from 'react';

// Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
      task: 'Start React Project',
      id: 4564654,
      complete: false
  },
  {
      task: 'Study Advanced React',
      id: 45646548,
      complete: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Create constructor to hold state
  constructor(){
    super();
    this.state = {
      tasks: list
    };
  }

  // Action to take to add new task to list... needs to be passed to component
  addTask = (e, taskName) => {
    e.preventDefault();
    const newTask = {
      task: taskName,
      id: Date.now(), //generates unique ID,
      completed: false, //initially set to false 
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  // Giving each task a toggle functionality so we can eventually clear completed tasks
  toggleTask = taskId => {
    console.log('toggleTask taskId', taskId);
    this.setState({
      //Mapping over the task and checking to see if the IDs match, toggle completed
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  // Action to filter and clear completed items
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm addTask={this.addTask} />
        <TodoList 
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;
