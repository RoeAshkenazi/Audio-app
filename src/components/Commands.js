import React, {useState} from 'react'
import Switch from './Switch'
import {FaPlay} from "react-icons/fa"
import {FaPause} from "react-icons/fa"

const Commands = (props) => {
 
  const [isLoop,setIsLoop] = useState(true);
  const [isPlay,setIsPlay] = useState(false);

  const toggle = () =>{
    setIsPlay(!isPlay);
    props.onPress(isPlay);
  }
    return (
      <div>
          <button onClick={toggle}>
            {isPlay ?  <FaPlay />  : <FaPause />}
            </button>
          <Switch isTog={isLoop} onTog={()=>{setIsLoop(!isLoop);
          props.onLoopPress(!isLoop)}}>
          </Switch>
      </div>
    )
  }
   
  
  export { Commands }