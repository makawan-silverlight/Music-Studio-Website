import feature1 from '../assets/images/feature-1.png'
import feature2 from '../assets/images/feature-2.png'
import feature3 from '../assets/images/feature-3.png'
function Feature() {
  return (
    <section id="feature" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-10" >

        <div className=' flex flex-col lg:flex-row w-full gap-10 '>
            <div className='lg:mt-16 lg:w-1/3 space-y-7'>
                <h2 className="text-3xl md:text-5xl font-black text-secondary">Why we are better than other</h2>
                <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore provident error, molestiae voluptate exercitationem omnis adipisci nemo temporibus, nulla ipsa rerum dolores hic. Harum unde perspiciatis qui provident, eos commodi?</p>
            </div>
            {/* feature card */}
            <div className='lg:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                <div className='px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 text-secondary shadow-[0px_10px_50px_0px_rgba(0,0,0,0.15)] hover:-translate-y-4 duration-500 cursor-pointer'>
                    <img className='w-full' src={feature1} alt="feature1" />
                    <h2 className="text-3xl font-black">Vocal & mixing tools</h2>
                </div>
                <div className='px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 text-secondary shadow-[0px_10px_50px_0px_rgba(0,0,0,0.15)] lg:translate-y-16 hover:-translate-y-4 lg:hover:translate-y-12 duration-500 cursor-pointer'>
                    <img className='w-full p-4' src={feature2} alt="feature2" />
                    <h2 className="text-3xl font-black">Virtual instruments</h2>
                </div>
                <div className='px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 text-secondary shadow-[0px_10px_50px_0px_rgba(0,0,0,0.15)] hover:-translate-y-4 duration-500 cursor-pointer'>
                    <img className='w-full' src={feature3} alt="feature3" />
                    <h2 className="text-3xl font-black">Royalty-free sounds</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feature