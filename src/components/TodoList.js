import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList props:', props)
    return(
        <div>
            {props.tasks.map(todo => {
                return(
                    <div>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} toggleTask={props.toggleTask} />
                    </div>
                )
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;