import React, { useEffect, useState } from 'react'
import Task from './form'
import List from './List'
import saved from '../../Saved'
import Saved from '../../Saved'
import './index.css'
const Parent = () => {


    const getStorage=()=>{
      let list = localStorage.getItem('todos')
      if(list){
        return(list = JSON.parse(localStorage.getItem('todos')))
      }else{
        return []
      }
    }
  const [task, setTask] = useState('')
  const [result, setResult] = useState(getStorage(),[])


    const mappedMsg = (result.map(a=>a.msg))
    console.log('parent', mappedMsg)
    useEffect(()=>{
    localStorage.setItem('saved', JSON.stringify(mappedMsg))
   },[result])

  const addTodo=(todo)=>{
   setResult([...result,{msg:todo,id:Math.floor(Math.random()*10000),isDeleted: false,completed: false}])
  } 

  const reducedTodos = [...result]
  const handleDelete=(id)=>{
    setResult(reducedTodos.filter(
      (reduced)=> reduced.id !== id
    ))
    console.log(result)
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(result))
  }, [result])

  return (
    <div>
        <Task task={task} setTask={setTask} result={result} setResult={setResult} addTodo={addTodo}/>
        {result.map((res,index)=>{
          return(
          <List task={res} key={index} setTask={setTask} result={result} setResult={setResult} addTodo={addTodo}
          handleDelete={handleDelete} />
          )
        })}
        <saved getStorage={getStorage} />
        <div className='hide'><Saved result={result}/></div>
    </div>
  )
      }

export default Parent