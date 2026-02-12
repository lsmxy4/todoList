import './App.css';
import Header from './compunents/Header';
import TodoEditor from './compunents/TodoEditor';
import TodoList from './compunents/TodoList';
import { useState,useRef } from 'react';

const mockData = [
  {
    id:0,
    isDone:false,
    content:'react 공부',
    date:new Date().getTime()
  },
  {
    id:2,
    isDone:false,
    content:'청소',
    date:new Date().getTime()
  },
  {
    id:3,
    isDone:false,
    content:'빨래',
    date:new Date().getTime()
  },
]
  
function App() {
  const [todos,setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate =(content)=>{

    const newTodo = {
      id:idRef.current++,
      isDone:false,
      content:content,
      date:new Date().getTime()
    }

    setTodos([newTodo,...todos])
  }

  const onUpdate =(targetId)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === targetId ? {...todo, isDone:todo.isDone}:todo
      )
    )
  }

  const onDelete =(targetId)=>{
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate = {onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete ={onDelete}/>
    </div>
  );
}

export default App;
