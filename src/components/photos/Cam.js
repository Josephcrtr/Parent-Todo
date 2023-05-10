import React from 'react'


const Cam = () => {
    const openCam=()=>{
    const video = document.createElement('video')
    video.setAttribute('playsinline', '')
    video.setAttribute('autoplay', '')
    video.setAttribute('muted', '')
    video.style.width = '200px'
    video.style.height= '200px'

    const facingMode = 'user'
    const constraints = {
        audio: false,
        video: {
            facingMode: facingMode
        }
    }

    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream){
        video.srcObject = stream
    })

    }
  return (
    <div>
        <button onClick={openCam}>open cam</button>
    </div>
  )
}

export default Cam