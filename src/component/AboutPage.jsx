import disc from '../assets/images/disc.png'
import discCover from '../assets/images/discCover.png'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'
function AboutPage() {
  return (
    <section id="about" className="max-w-screen-2xl p-4 md:px-14 mx-auto md:mt-10">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <motion.div
        variants={fadeIn("right",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false}}
        className='group relative w-full py-16 lg:w-1/2 flex items-center cursor-pointer'>
          <img className='w-8/12 lg:w-10/12 shadow-[-15px_20px_50px_0px_rgba(0,0,0,0.2)]' src={discCover} alt="disc-cover" />
          <img className='w-7/12 lg:w-9/12 absolute -z-10 left-1/4 lg:left-1/3 group-hover:translate-x-6 lg:group-hover:translate-x-16 duration-700 ' src={disc} alt="disc" />
        </motion.div>
        <motion.div
        variants={fadeIn("left",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false}}
        className='w-full lg:w-1/3 space-y-7'>
          <h2 className='text-3xl md:text-5xl font-black text-primary'>About <span className='text-secondary'>Silver Studio</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis. Velit provident omnis, a laborum veniam molestias, et quo quisquam qui id esse ea quas ratione ab voluptatibus. Nobis, vel.</p>
          <button className='font-bold text-base bg-secondary hover:bg-primary p-4 duration-500 rounded-md text-white'>GET STARTED</button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage