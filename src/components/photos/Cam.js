import React from 'react'
import { useState,useEffect,useRef } from 'react'
import './index.css'

const Cam = () => {

    const videoRef = useRef(null)
    const photoRef  = useRef(null)
    const [hasPhoto,setHasphoto]  = useState(false)
    
    const getVid=()=>{
        navigator.mediaDevices.getUserMedia({
            video:{
                width: 1920,
                height: 1080
            }
        }).then(stream =>{
            let video = videoRef.current
            video.srcObject = stream
            video.play()
        })
    }

    useEffect(()=>{
        getVid()
    },[videoRef])

  return (
    <div className='app'>
    <div className='text-center'>
        <video ref={videoRef}/>
        <button className='btn btn-primary rounded-pill b fs-5'>Take photo</button>
    </div>
    <div className={'result' + (hasPhoto ? 'hasPhoto': '')}>
        <canvas ref={photoRef}></canvas>
        <button className='btn btn-danger rounded-pill b fs-5'>close</button>
    </div>
    </div>
  )
}

export default Cam