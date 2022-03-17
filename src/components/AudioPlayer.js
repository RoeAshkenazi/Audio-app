import React, {useState, useRef, useEffect} from 'react'
import styles from "../styles/AudioPlayer.module.css";
import Switch from './Switch'

const AudioPlayer = ({src, playing, isLoop}) => {
   // states
    const [currentTime,setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);
    const [isTog, setIsTog] = useState(true);
    
  // references 
    const audios = useRef();        // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

  // functions
  const calcTime = (duration) =>{
    return '00:' + (duration>9? duration: '0'+duration);
  }

  const changeRange = () =>{
    audios.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value/duration *100}%`)
    setCurrentTime(progressBar.current.value);
  }

  useEffect(()=>{
    const sec = Math.floor(audios.current.duration)    
    setDuration(sec);
    progressBar.current.max=sec;
     audios.current.loop = isLoop;
    if(playing) {
        audios.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
    else
    {
      audios.current.pause();
      audios.current.load();
      cancelAnimationFrame(animationRef.current);
    }
    if(!isTog)
        audios.current.muted=true;
    else
        audios.current.muted=false;
        
  },[playing, isTog, isLoop])

  const whilePlaying = () => {
    progressBar.current.value = audios.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }


  return (
    <div className={styles.AudioPlayer}>
      
        <audio ref={audios} preload="metadata">
            <source src={src} />
        </audio>
        <div className={styles.currentTime}>{calcTime(currentTime)}</div>
        <div><input type="range" disabled ref={progressBar} className={styles.progressBar} defaultValue="0" onChange={changeRange}/>
        <div className={styles.duration}>{(duration && !isNaN(duration)) && calcTime(duration) }</div>
        <Switch isTog={isTog} onTog={()=>setIsTog(!isTog) }>    
        </Switch>
        </div>
    </div>
  )
}
 

export { AudioPlayer }