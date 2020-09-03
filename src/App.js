import React from 'react';

// Components


const list = [
  {
      task: 'Start React Project',
      id: 0001,
      complete: false
  },
  {
      task: 'Study Advanced React',
      id: 0002,
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
      item: item
    };
  }

  // Action to take to add new task to list... needs to be passed to component
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(), //generates unique ID,
      completed: false, //initially set to false 
    };
    this.setState({
      task: [...this.state.task, newTask]
    })
  }

  // Giving each task a toggle functionality so we can eventually clear completed tasks
  toggleTask = taskId => {
    console.log('toggleTask taskId', taskId);
    this.setState({
      //Mapping over the task and checking to see if the IDs match, toggle completed
      task: this.state.task.map(task => {
        if (taskId === task.id) {
          return {
            ...task, completed: !task.completed
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
      task: this.state.task.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
