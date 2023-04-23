import React from 'react'
import '../index.css'

const Reg = () => {
  return (
    <div className='text-center mt-5'>
    <p className='lead'>Want to save your tasks and review later?</p>
    <p className='h5'>Connect..</p>
    <div className="btn-group log">
     <button type="button" className="btn btn-outline-danger">Email</button>
    <button type="button" className="btn btn-outline-success">Google</button>
    <button type="button" className="btn btn-outline-primary">Twitter</button>
    </div>
    </div>
  )
}

export default Reg