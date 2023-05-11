import React from 'react';
import del from '../images/delete-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';

const List = ({task,result,setResult,handleDelete,saveStorage}) => {

  const navigate = useNavigate()

  const goBack=()=>{
    navigate(-1)
  }
 
  return (
    <>
    <button onClick={goBack} className='back'>Back</button>
    <div className='list-group sh' >
      <li 
      className='list-group-item h'>{task.msg} 
      <span>
        <img onClick={()=>handleDelete(task.id)}
        className='icon' src={del} alt='delete'/>
      </span>
      </li>
    </div>
    </>
  )
}

export default List