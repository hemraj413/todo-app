import React from 'react'


export const TodosItem = ({completed,text,toggleCheck,isclicked,deleteTodo}) => {

  return (
    <div className='todo-item'>
      <div className="todos-text">

     
        <input type="checkbox" 
        className='todo-checkbox'

        checked={completed}
        onChange={()=>toggleCheck()}
        
        />
        <span >{text.length<25?text:text.substring(0,25)}</span>
        </div>
        <img src="./images/icon-cross.svg" style={isclicked?{display:"block"}:{display:"none"}} onClick={deleteTodo} alt="" />
    </div>
  )
}
