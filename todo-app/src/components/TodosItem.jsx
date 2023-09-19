import React from 'react'


export const TodosItem = ({completed,text,toggleCheck,isclicked,deleteTodo}) => {

  return (
    <div className='todo-item'>
      <div className="todos-text">

     
        <input type="checkbox" 
        checked={completed}
        onClick={()=>toggleCheck()}
        
        />
        <span >{text}</span>
        </div>
        <img src="./images/icon-cross.svg" style={isclicked?{display:"block"}:{display:"none"}} onClick={deleteTodo} alt="" />
    </div>
  )
}
