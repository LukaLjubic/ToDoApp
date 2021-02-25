import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import {db} from './firebase'
import './App.css';
import Todo from './Todo';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  // Listeneri za database
  useEffect(()=>{
    db.collection('todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc =>doc.data()))
      setTodos(snapshot.docs.map(doc =>({id:doc.id ,todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) =>{
    event.preventDefault();

    // push u database
    db.collection('todo').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="app">
      <h1 className="app__title">Luksor's Todos</h1>
      <form className="app__form">
        <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value = {input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled = {!input} type = "submit" onClick = {addTodo} variant="contained" color="primary">
            Add Todo
        </Button>
        {/* <button >Add todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo = {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
