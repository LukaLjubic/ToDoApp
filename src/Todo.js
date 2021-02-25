import React from 'react'
import './Todo.css'
import {db} from './firebase'
import {List, ListItem, ListItemText, ListItemAvatar, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {

    const todoTextStyle={
        fontSize: "1rem"
    }

    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemText style={todoTextStyle} className="todo__text" primary = {props.todo.todo} secondary = "Dummy Deadline"/>
            </ListItem>
            <DeleteForeverIcon className="todo__delete" onClick = {event => db.collection('todo').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
