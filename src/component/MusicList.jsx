import { useEffect, useState } from "react"
import {MdQueueMusic,MdOutlineClose} from "react-icons/md"
import Timer from '../utils/Timer'

function MusicList({closeList,audioData,openList,musicNumber,setMusicNumber}) {
  return (
    <section className={`text-primary absolute w-full ${openList? "bottom-0":"-bottom-full"} duration-1000 left-0 rounded-2xl overflow-hidden`}>
        <div className="flex justify-between items-center text-2xl text-primary p-4 bg-white">
            <MdQueueMusic/>
            <h4 className="font-semibold">Music List</h4>
            <MdOutlineClose onClick={closeList} className="cursor-pointer hover:scale-125 hover:text-secondary duration-300"/>
        </div>
        {audioData.map((item,index) => {

            return (
                <div onClick={() => {setMusicNumber(index)}} className={`${musicNumber === index? "bg-sky-200":"bg-white"} flex justify-between p-4 hover:bg-sky-200 duration-200 cursor-pointer`} key={item.id}>
                    <span className="font-medium">{item.title}</span>
                    <Duration music={item.src}/>
                </div>
            )
        })}
    </section>
  )
}

export default MusicList

function Duration({music}) {
    const [duration,setDuration] = useState(0);
    useEffect(() => {
        const audioMusic = new Audio(music);
        audioMusic.onloadedmetadata = () => {
            if(audioMusic.readyState > 0){
                setDuration(audioMusic.duration)
            }
        }
    },[music])
    
    return <span>{Timer(duration)}</span>
}