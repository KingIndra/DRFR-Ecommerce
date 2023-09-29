import {useRef, useEffect} from 'react'

const VideoPlayer = ({token}) => {
  const videoRef = useRef(null)
  useEffect(() => {
    if(videoRef.current) {
      videoRef.current.removeAttribute('src')
      videoRef.current.load()
      videoRef.current.play()
    }
  })
  const searchParams = new URLSearchParams(window.location.search).get("keyword")
  const videoId = searchParams ? searchParams : "cdn"
  console.log(videoId)
  return (
    // width='320' height='240'
    <video ref={videoRef} className='video-player' autoPlay controls>
        <source src={`http://localhost:4000/videos/${token}`} type='video/mp4'></source>
    </video>
  )
}

export default VideoPlayer