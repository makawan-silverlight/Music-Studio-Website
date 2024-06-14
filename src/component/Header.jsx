import { useState } from 'react';
import logo from '../assets/images/logo.png'
import { GrLanguage,GrMenu,GrClose } from "react-icons/gr";
import { Link } from 'react-scroll';
function Header({ navItem }) {
    const [openMenu,setOpenMenu] = useState(false);

    
    function toggleMenu () {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <header className='text-xl text-primary flex justify-between items-center max-w-screen-2xl p-4 md:px-14 mx-auto fixed bg-white top-0 left-0 right-0 z-30'>
                <div className='flex gap-4 lg:gap-8 items-center'>
                    <a href='/' id="logo" className='flex items-center gap-4' >
                        <img src={logo} alt="logo" className='w-12 h-12' />
                        <h1 className=' text-4xl font-black '>SILVER</h1>
                    </a>
                    <nav>
                        <ul className='md:flex hidden gap-4 lg:gap-8 font-medium'>
                            {navItem.map(({link,path},index) => {
                                return <Link key={link + index} to={path} className='hover:text-secondary duration-500 cursor-pointer' offset={-100} >{link}</Link>
                            })}              
                        </ul>
                    </nav>
                </div>
                <div className='hidden md:flex gap-4'>
                    <div className='hidden lg:flex gap-2 items-center'>
                        <GrLanguage />
                        Language
                    </div>
                    <a href="/sign-up"><button className='font-bold text-base bg-secondary hover:bg-primary py-2 px-4 duration-500 rounded-md text-white'>LOGIN</button></a>
                </div>

            {/* mobile menu */}
            
                <div onClick={toggleMenu} className='block md:hidden cursor-pointer'>
                    {openMenu? <GrClose /> : <GrMenu />}
                </div>
            </header>
            <div className={`${openMenu? "flex opacity-100" : "opacity-0"} md:hidden flex-col fixed z-20 top-20 left-0 right-0 text-center bg-primary font-medium duration-500 rounded-br-xl rounded-bl-xl overflow-hidden`}>
                {navItem.map(({link,path},index) => {
                    return <div className='w-full h-full' key={link + index} ><Link className='block text-white hover:bg-secondary duration-500 w-full h-full py-4 cursor-pointer' to={path} offset={-100} >{link}</Link></div>
                })}
            </div>
        </>
        
    )
}

export default Header