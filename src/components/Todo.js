import React from 'react';

import { Icon } from 'semantic-ui-react';

const Todo = props => {
    console.log('Todo props:', props);
    return(
        <div className={`task${props.completed ? '-completed' : ''}`}
            onClick={(() => props.toggleTask(props.id))}
        >
            <Icon name='angle right' /> {props.task}
        </div>
    )
}

export default Todo;