import React, { useEffect } from 'react'


const Saved = ({result,mapContent}) => {
  const outcome = JSON.parse(localStorage.getItem('saved'))
  return (
    <ul className='list-group'>
      <li className='list-group-item'>
    {
      outcome.map((o)=>{
        return(<li>{o}</li>)
      })
      }</li>
    </ul>

  )
}

export default Saved