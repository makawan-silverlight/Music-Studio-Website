import { useState } from "react"
import PricingCard from './PricingCard'
import { pricingInfo } from '../../data'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Pricing() {
    const [toggle,setToggle] = useState(true);
    
    function handleToggle () {
        setToggle(!toggle);
    }

    return (
        <section id="pricing" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-10">
            <div className="md:text-center flex flex-col items-center gap-12">
                <motion.div className="md:text-center flex flex-col items-center gap-12"
                variants={fadeIn("",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false}}>
                    <h2 className='text-3xl md:text-5xl font-black text-primary'>Get Started Your Project</h2>
                    <p className="lg:w-4/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, labore enim officiis ab nobis doloribus porro aspernatur necessitatibus quae, id nulla impedit repellendus quas amet, adipisci harum?</p>
                    <div className="flex gap-4 md:gap-8 justify-center items-center text-primary text-3xl font-black">
                        <h2 className="w-[125px]">Monthly</h2>
                        <div onClick={handleToggle} className={`w-24 h-11 ${toggle? "bg-Thirdary":"bg-slate-200" } duration-500 relative rounded-full flex items-center`}>
                            <div className={`${toggle? "right-1":"right-14" } duration-500 absolute h-9 w-9 rounded-full bg-white shadow-[2px_2px_5px_2px_rgba(0,0,0,0.3)]`}></div>
                        </div>
                        <h2 className="w-[125px]">Yearly</h2>
                    </div>
                </motion.div>
                
                <motion.div
                variants={fadeIn("up",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false}}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {pricingInfo.map((data,index) => (<PricingCard key={data.name+index} data={data} toggle={toggle}/>))}
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing