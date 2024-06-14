import { useState,useRef,useEffect } from "react"
import logoWhite from '../assets/images/logo-white.png'
import { MdQueueMusic,MdSkipNext,MdSkipPrevious,MdOutlinePause,MdPlayArrow,MdStop,MdVolumeUp,MdVolumeOff,MdShuffleOn ,MdOutlineRepeatOneOn,MdRepeat } from "react-icons/md";
import { audioData } from '../../data'
import MusicList from './MusicList'
import Timer from "../utils/Timer";
import randomMusic from "../utils/randomMusic";
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function AudioPlayer() {
    const [musicNumber,setMusicNumber] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    const [openList,setOpenList] = useState(false);
    const [duration,setDuration] = useState(0);
    const [currentTime,setCurrentTime] = useState(0);
    const [volume,setVolume] = useState(50);
    const [repeatShuffle,setRepeatShuffle] = useState(<MdRepeat/>);
    const [strShuffle,setStrShuffle] = useState("MdRepeat");
    const [volumeState,setVolumeState] = useState(volume);
    
    const audioCurrent = useRef();
    const shuffleBtn = useRef();

    function togglePlayPause () {
        if(isPlaying){
            audioCurrent.current.pause();
            setIsPlaying(false);
        }else{
            audioCurrent.current.play();
            setIsPlaying(true);
        }
    }

    function toggleOpenList () {
        setOpenList(!openList);
    }

    function closeList () {
        setOpenList(false);
    }

    function handleOnLoadMetadata () {
        if(audioCurrent.current.readyState > 0){
            setDuration(audioCurrent.current.duration)
        }
        if(isPlaying){
            audioCurrent.current.play()
        }
    }

    function handleTimeUpdate() {
        const sec = audioCurrent.current.currentTime;
        setCurrentTime(sec)
    }

    function handleChangeCurrentTime(e){
        const current = e.target.value
        audioCurrent.current.currentTime = current;
        if(isPlaying){
            audioCurrent.current.play()
        }
    }

    function handleStopReset(){
        audioCurrent.current.pause();
        setIsPlaying(false);
        audioCurrent.current.currentTime = 0;
        setCurrentTime(0)
    }

    function handleNextPrevMusic(n){
        if(n>0){
            if(musicNumber + n > audioData.length - 1){
                setMusicNumber(0)
            }else{
                setMusicNumber(musicNumber + n)
            }
        }else{
            if(musicNumber + n < 0){
                setMusicNumber(audioData.length - 1)
            }else{
                setMusicNumber(musicNumber + n)
            }
        }
    }

    function handleRepeatShuffle(){
        switch (shuffleBtn.current.id) {
            case "MdRepeat":
                setRepeatShuffle(<MdOutlineRepeatOneOn/>)
                setStrShuffle("MdOutlineRepeatOneOn")
                break;
            case "MdOutlineRepeatOneOn":
                setRepeatShuffle(<MdShuffleOn/>)
                setStrShuffle("MdShuffleOn")
                break;
            case "MdShuffleOn":
                setRepeatShuffle(<MdRepeat/>)
                setStrShuffle("MdRepeat")
                break;
            default: setRepeatShuffle(<MdRepeat/>)
                break;
        }
        
    }

    function handleEnded(){
        switch (shuffleBtn.current.id) {
            case "MdRepeat":
                handleNextPrevMusic(1);
                break;
            case "MdOutlineRepeatOneOn":
                audioCurrent.current.play();
                break;
            case "MdShuffleOn":
                const randomNextMusic = randomMusic(musicNumber,audioData.length);
                setMusicNumber(randomNextMusic);
                break;
            default:
                handleNextPrevMusic(1)
                break;
        }
    }

    function handleVolumeChange (e) {
        const changeVol = e.target.value
        audioCurrent.current.volume = changeVol/100;
        setVolume(changeVol);
    }

    function handleMute(){
        if(volume == 0){ 
            setVolume(volumeState) 
        } else {
            setVolumeState(volume)
            setVolume(0)
        } 
    }

    useEffect(() => {
        audioCurrent.current.volume = volume/100
    },[volume])

    return (
        <div className="w-full md:w-1/2 text-white flex justify-center items-center relative">

            <div className="w-40 h-40 blur-sm circle-gradient rounded-full absolute -top-10 -left-10 lg:-top-8 lg:left-12"></div>
            <div className="w-60 h-60 blur-sm circle-gradient2 rounded-full absolute -bottom-10 -right-10 lg:-bottom-8 lg:right-12"></div>
            <div className="w-20 h-20 blur-xl bg-[#08e2ff] rounded-full absolute -top-6 -right-4 lg:-top-2 lg:right-28"></div>
            <motion.main
            variants={fadeIn("left",0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false}}
            className=" w-full lg:w-[360px] max-w-[360px] p-6 relative overflow-hidden rounded-2xl border border-Thirdary backdrop-blur-sm shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] space-y-2 lg:space-y-4">
                {/* navigation bar */}
                <nav className="flex justify-between items-center text-xl">
                    <div className="cursor-pointer" onClick={toggleOpenList}>
                        {isPlaying && <div className="w-8 h-8 opacity-20 rounded-full absolute bg-white animate-ping"></div>}
                        <img className="w-8" src={logoWhite} />
                    </div>
                    <p>Now Playing {musicNumber + 1}/{audioData.length}</p>
                    <MdQueueMusic className="cursor-pointer" onClick={toggleOpenList}/>
                </nav>

                {/* thumbnail */}
                <div className="w-full py-4 flex justify-center items-center">
                    <img className={`${isPlaying?"play":"pause-spin"} animate-spin-slow w-40 h-40 lg:w-52 lg:h-52 object-cover border-8 border-white rounded-full`} src={audioData[musicNumber].thumbnail} alt="thumbnail" />
                </div>

                {/* details */}
                <div className="text-center">
                    <h4 className="text-xl font-medium ">{audioData[musicNumber].title}</h4>
                    <p className="text-sm font-extralight text-slate-300">{audioData[musicNumber].artist}</p>
                </div>

                {/* progress */}
                <div className="w-full">
                    <input className="w-full h-2 cursor-pointer rounded-full appearance-none" style={{background: `linear-gradient(to right,#010851 ${currentTime/duration*100}%,#d1d5db ${currentTime/duration*100}%)`}}  type="range" min={0} max={duration} value={currentTime} onChange={handleChangeCurrentTime} />
                    {/* Timer */}
                    <div className="flex justify-between">
                        <span>{Timer(currentTime)}</span>
                        <span>{Timer(duration)}</span>
                    </div>
                </div>

                {/* controls */}
                <div className="text-4xl flex justify-between w-full">
                    <button id={strShuffle} className="text-3xl hover:text-slate-300 duration-300" onClick={handleRepeatShuffle} ref={shuffleBtn} >{repeatShuffle}</button>
                    <button className="hover:text-slate-300 duration-300" onClick={() => {handleNextPrevMusic(-1)}}><MdSkipPrevious/></button>
                    <button className="w-12 h-12 gradient-btn rounded-full flex justify-center items-center" onClick={togglePlayPause}>
                        <div className="w-9 h-9 gradient-bg rounded-full flex justify-center items-center text-2xl">
                            {isPlaying? <MdOutlinePause/>:<MdPlayArrow />}
                        </div>
                    </button>
                    <button className="hover:text-slate-300 duration-300" onClick={() => {handleNextPrevMusic(1)}}><MdSkipNext/></button>
                    <button className="text-3xl hover:text-slate-300 duration-300" onClick={handleStopReset} ><MdStop/></button>
                </div>

                {/* volume */}
                <div className="text-2xl flex justify-around items-center bg-Thirdary bg-opacity-40 rounded-md p-1 px-4">
                    <div onClick={handleMute}>{volume == 0? <MdVolumeOff/> : <MdVolumeUp/>}</div>
                    <input className="w-[70%] h-1 cursor-pointer appearance-none" type="range" min={0} max={100} value={volume} onChange={handleVolumeChange} />
                    <span className="text-base">{volume}</span>
                </div>

                <audio src={audioData[musicNumber].src} hidden onLoadedMetadata={handleOnLoadMetadata} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} ref={audioCurrent}></audio>
                <MusicList closeList={closeList} audioData={audioData} openList={openList} musicNumber={musicNumber} setMusicNumber={setMusicNumber} />

            </motion.main>

            

        </div>
    )
}

export default AudioPlayer