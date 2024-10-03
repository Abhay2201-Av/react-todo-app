import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
function App() {
  const [todoList,setTodoList] = useState([])
  let addList = (inputText) =>{
    if(inputText!=='')
     setTodoList([...todoList,inputText]);
  }
  const deleteListItem = (key) =>{
    let newListTodo = [...todoList];
    newListTodo.splice(key,1)
    setTodoList([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className='app-heading'>TodoList</h1>
        <TodoInput addList={addList}/>
        <hr/>
        {todoList.map((listItem,i)=>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
     
    </div>
  )
}

export default App