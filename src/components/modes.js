import React from 'react'
import Task from './task/Parent'
import {useNavigate} from 'react-router-dom'
const Modes = () => {
  let navigate = useNavigate()
  return (
    <>
    <div className='w d-flex border border-secondary rounded mt-4'>
        <div className='task m-3' onClick={()=>{navigate('/addtask')}}>
            <a className='link'>
              <p className='badge bg-danger p-3 fs-3 text-start'>Add<br/>Tasks</p>
              </a>
        </div>
        <div className='task m-3'  onClick={()=>{navigate('/addnote')}}>
            <a className='link'>
              <p className='badge bg-primary p-3 fs-3 text-start'>Add<br/>Notes</p>
              </a>
        </div>
        <div className='container  d-flex '>
        <div className='task m-3'onClick={()=>{navigate('/addphoto')}} >
            <a className='link'>
              <p className='badge bg-danger p-3 fs-3 text-start'>Add<br/>Photos</p>
              </a>
        </div>
        <div className='task m-3'>
            <a className='link'>
              <p className='badge bg-secondary p-3 fs-3 text-starts'>Add<br/>Other</p>
              </a>
        </div>
       <div className='task m-3' onClick={()=>{navigate('/saved')}}>
            <a className='link'>
              <p className='badge bg-warning p-3 fs-3 text-starts'>Saved<br/>Tasks</p>
              </a>
        </div>
    </div>
    </div>
    <div className='d-flex justify-content-center mt-3'>
      <p className='h3 text-danger'>Happy Tasking!👋</p>
    </div>
    </>
  )
}

export default Modes