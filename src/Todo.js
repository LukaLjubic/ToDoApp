import React from 'react'
import './Todo.css'
import {db} from './firebase'
import {List, ListItem, ListItemText, ListItemAvatar, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {

    const today = new Date();
    const date = today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear() + " " + today.getHours() + ':' + today.getMinutes();

    return (
        <List className = "todo__list">
            <ListItem>
                <ListItemText  className="todo__text" primary = {props.todo.todo} secondary = {date}/>
            </ListItem>
            <DeleteForeverIcon className="todo__delete" onClick = {event => db.collection('todo').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
