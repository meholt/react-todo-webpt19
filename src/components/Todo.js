import React from 'react';

const Todo = props => {
    console.log('Todo props:', props);
    return(
        <div className={`task${props.completed ? '-completed' : ''}`}
            onClick={(() => props.toggleTask(props.id))}
        >
            {props.task}
        </div>
    )
}

export default Todo;