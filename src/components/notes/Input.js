import React from 'react'
import { useState } from 'react'

const Input = ({notes,setNotes, preview,setPreview}) => {

  const handleChange =e=>{
    var value = e.target.value
    setNotes(value)
   
  }
  const handleAdd =()=>{
    console.log(notes)
    setPreview(notes)
  }
  const handleDelete=()=>{
    setNotes('')
    setPreview('')
  }
 const handleShare=()=>{
  console.log('shared')
 }
  return (
    <div className='container d-flex p-5 border border-secondary rounded mt-4'>
        <textarea type='text'
        className='notes'
        placeholder='Add note..'
        value={notes}
        onChange={handleChange}
        />
        
    <div className='buttons d-flex mt-3 ml-4'>
        <button className='add mb-3' onClick={handleAdd}>Add note</button>
        <button className='del mb-3' onClick={handleDelete}>Delete all</button>
        <button className='share mb-3' onClick={handleShare}>Share</button>
    </div>
    <div className='preview'>
      <h1>Preview</h1>
    <textarea type='text'
        className='notess'
        onChange={handleChange}
        value={preview}
        readOnly
        />
        </div>
    </div>
  )
}

export default Input