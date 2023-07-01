import React,{useState} from 'react';
import Camera from '../components/camera/Camera';

const GamePortal = () => {
  const [info,setInfo] = useState(false)
  return (
    <Camera />
  )
}

export default GamePortal