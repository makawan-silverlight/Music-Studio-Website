import hero from "../assets/images/hero.png"
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Banner() {
  return (
    <section className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-20">
        <div className=" gradient-bg overflow-hidden px-8 py-8 md:p-12 rounded-xl rounded-br-[80px]">
            <motion.h1
            variants={fadeIn("",0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false,amount:0.7}}
            className="text-3xl lg:text-5xl text-sky-200 font-black leading-[3rem] lg:leading-[5rem]">PROFESSIONAL MIXING AND MASTERING SERVICES BY SILVER STUDIO</motion.h1>
            <div className="flex flex-col md:flex-row-reverse items-center">
                <motion.div
                variants={fadeIn("left",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="w-3/5 mt-12 md:mt-0 md:w-1/3">
                    <img className="p-4 lg:p-10" src={hero} alt="hero picture" />
                </motion.div>
                <motion.div
                variants={fadeIn("right",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="w-full md:w-2/3 text-white md:pr-4 mt-12 md:mt-10 lg:mt-0 flex flex-col gap-8">
                    <p className="lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo natus adipisci tempore itaque dolorum, temporibus corporis. Itaque maiores, iusto, nihil perspiciatis nulla aliquam.</p>
                    <div className="text-xs flex gap-4">
                        <button className="p-4 bg-Thirdary rounded-md font-bold hover:bg-primary duration-500">DOWLOAD NOW</button>
                        <button className="p-4 bg-Thirdary rounded-md font-bold hover:bg-primary duration-500">FREE TRIAL</button>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Banner