import React, {  useState } from 'react'
import { TodosItem } from './TodosItem'
import './Todos.css'

const crossBtnStyle ={
  display:"none"
}

export const Todos = ({id}) => {
    const[todos,setTodos] = useState('')
    const[todosList,setTodosList]= useState([])
    const[showCompletedTodos,setShowCompletedTodos] = useState(false)
    const[filteredTodos,setFilteredTodos] =useState([])
    const[btnActive,setBtnActive] = useState('all')

  

    function saveTodo(){
      if(todos.trim()!==""){
        const newTodo={
          text:todos,
          checked :false,
      
        };
        setTodosList([...todosList,newTodo])
        setTodos('')
      }
      
      
    }
    function toggleCheck(index){
      const updatedTodos =[...todosList]
      updatedTodos[index].checked = !updatedTodos[index].checked
      setTodosList(updatedTodos)

    }

 
    function deleteTodo(index){
      const updatedTodos = [...todosList]
      updatedTodos.splice(index,1)
      setTodosList(updatedTodos)

    }

  function completedTodos(){
    setShowCompletedTodos(true)
    const completedTodo = todosList.filter((tod)=> tod.checked === true)
    setFilteredTodos(completedTodo)
    setBtnActive('completed')

  }

  function allTodo(){
    setShowCompletedTodos(false)
    setBtnActive('all')
  }
  function clearCompleted(){
            setTodosList(todosList.filter((todo)=>todo.checked===false))
            setFilteredTodos([])
  }
  function activeTodo(){
    setFilteredTodos(todosList.filter((todo)=>todo.checked === false))
    setShowCompletedTodos(true)
    setBtnActive('active')

  }
  return (
    <div className='todos-comp ' id={id}>
        <section className='add-todo'>
            <input type="text" placeholder='create new todo'
            value={todos}
            onChange={(e)=>setTodos( e.target.value) }
            
            />
            <button onClick={()=>saveTodo()}>save</button>
        </section>
        <div className="todos">
          <div className="todo-items">

       
          {!showCompletedTodos? todosList.map((todo,index)=>(
            <article>
          <TodosItem 
            text={todo.text}
            completed={todo.checked}
            toggleCheck={()=>toggleCheck(index)}
            key={index} 
            isclicked={true}
            deleteTodo={()=>deleteTodo(index)}

            />
           </article>
          )): filteredTodos.map((todo,index)=>(
            <TodosItem 
              text={todo.text}
              completed={todo.checked}
              toggleCheck={()=>toggleCheck(index)}
              key={index}
              isclicked={false}
              deleteTodo={()=>deleteTodo(index)}
              
              />))}   </div>
          <div className='btn'>
            <section>
            <p>{!showCompletedTodos? todosList.length: filteredTodos.length} items</p></section>
            <section>
            <button onClick={()=>allTodo()} className={btnActive==="all"?'active-btn':'just-btn'}>All</button>
            <button onClick={()=>activeTodo()} className={btnActive==="active"?'active-btn':'just-btn'}>Active</button>
            <button onClick={()=>completedTodos()} className={btnActive==="completed"?'active-btn':'just-btn'}>completed</button>
            
            </section>
            <button onClick={()=> clearCompleted()} className='just-btn'>clear completed</button>
          </div>
          

        </div>

    </div>
  )
}
