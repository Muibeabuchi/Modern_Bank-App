import { useState } from "react";
import {menu,logo,close}  from '../assets';
import { navLinks } from "../constants";


const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between py-6 items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[`124px] h-[32px]' />
      <ul className="sm:flex items-center flex-1 justify-end list-none hidden">
        {navLinks.map((nav,index)=>(
          <li key={nav.id}  className={`font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0':'mr-10'} font-poppins text-[16px] `}>
            <a href={`#${nav.id}`} >
              {nav.title}
            </a>
          </li>
        ))
        }
      </ul>

      <div className="flex sm:hidden cursor-pointer justify-end items-center" >
        <img src={!toggle ? menu : close} alt="hamburger menu" className="w-[28px] h-[28px] object-contain" onClick={()=>setToggle(prev=>!prev)} />

        <div className={`${toggle?'flex':'hidden'} bg-black-gradient p-6 mx-4 absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar justify-center `}>
          <ul className="flex flex-col items-center list-none ">
          {navLinks.map((nav,index)=>(
            <li key={nav.id}  className={`font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0':'mb-4'} font-poppins text-[16px] `}>
              <a href={`#${nav.id}`} >
                {nav.title}
              </a>
            </li>
          ))
          }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;