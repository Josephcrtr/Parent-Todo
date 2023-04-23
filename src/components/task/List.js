import React from 'react';
import del from '../images/delete-svgrepo-com.svg'

const List = ({task,result,setResult,handleDelete}) => {

 
  return (
    <div className='list-group sh' >
      <li 
      className='list-group-item h'>{task.msg} 
      <span>
        <img onClick={()=>handleDelete(task.id)}
        className='icon' src={del} alt='delete'/>
      </span>
      </li>
    </div>
  )
}

export default List