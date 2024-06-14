import AudioPlayer from './AudioPlayer'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Home() {
  return (
    <section id="home" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-20">
        <div className=" lg:min-h-[85vh] gradient-bg flex flex-col md:flex-row-reverse justify-center items-center overflow-hidden px-4 py-8 md:p-12 rounded-xl rounded-br-[80px]">
            
            <AudioPlayer/>
            <div className="w-full md:w-1/2 text-white md:pr-4 mt-12 md:mt-0 flex flex-col gap-4 lg:gap-8 lead">
                <motion.h1 
                variants={fadeIn("up",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="text-3xl md:text-5xl lg:text-6xl font-black">Listen to New Music</motion.h1>
                <motion.p
                variants={fadeIn("up",0.5)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum suscipit aut sequi at, reiciendis repellendus, natus.</motion.p>
                <motion.div
                variants={fadeIn("up",0.8)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="text-xs flex gap-4">
                    <button className="p-4 bg-Thirdary rounded-md font-bold hover:bg-primary duration-500">DOWLOAD NOW</button>
                    <button className="p-4 bg-Thirdary rounded-md font-bold hover:bg-primary duration-500">FREE TRIAL</button>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Home