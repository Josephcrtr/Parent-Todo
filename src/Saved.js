import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './components/notes/index.css'


const Saved = ({result,mapContent}) => {
  const navigate = useNavigate()
  const outcome = JSON.parse(localStorage.getItem('saved'))
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <>
    <button onClick={goBack} className='back'>back</button>
    <ul className='list-group'>
      <li className='list-group-item'>
    {
      outcome.map((o)=>{
        return(<li>{o}</li>)
      })
      }</li>
    </ul>
    </>
  )
}

export default Saved