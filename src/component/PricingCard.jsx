function PricingCard({ data,toggle }) {
    const { name,year,month,description,service } = data
  return (
    <div className="flex flex-col items-center text-center gap-4 px-4 py-10 shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)] rounded-2xl">
        <h2 className="text-primary text-3xl font-black">{name}</h2>
        <p>{description}</p>
        {toggle? <h3 className="text-secondary text-7xl font-black">{year}<span className="text-primary text-base font-normal">/year</span></h3> : <h3 className="text-secondary text-7xl font-black">{month}<span className="text-primary text-base font-normal">/month</span></h3>}
        <div className="mt-8 space-y-4 w-3/4">
            {service.map(({ title,status },index) => 
                (<div key={name+title} className="text-left flex gap-4 items-center">
                    <div className={`w-4 h-4 ${status? "bg-green-400": "bg-slate-300"} rounded-full flex-shrink-0`}></div>
                    <h4 className="font-bold text-primary">{title}</h4>
                </div>)
                )}
        </div>
        <button className='mt-8 font-bold text-base bg-none border-2 border-secondary hover:bg-secondary hover:text-white py-4 px-8  duration-500 rounded-2xl text-secondary'>GET STARTED</button>
    </div>
  )
}

export default PricingCard