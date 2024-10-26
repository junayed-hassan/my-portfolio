import { useState } from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import { LuDot } from "react-icons/lu";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {

  const [menu,setMenu] = useState("");

  return (
    <div className='navbar font-Lora flex justify-between items-center my-5 mx-16'>
        <img className='w-14' src={Logo} alt="logo" />
        <ul className='nav-menu flex items-center gap-7 text-lg font-medium cursor-pointer'>
            <li className='flex cursor-pointer hover:text-rose-700 '><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <LuDot className='mt-3' /> :<></>}</li>
            <li className='flex cursor-pointer hover:text-rose-700 '><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <LuDot className='mt-3' />  :<></>}</li>
            <li className='flex cursor-pointer hover:text-rose-700 '><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <LuDot className='mt-3' /> :<></>}</li>
            <li className='flex cursor-pointer hover:text-rose-700 '><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"? <LuDot className='mt-3'/> :<></>}</li>
            <li className='flex cursor-pointer hover:text-rose-700 '><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <LuDot className='mt-3' /> :<></>}</li>
        </ul>
        <div className='nav-connect py-3 px-6 rounded-[50px] text-lg cursor-pointer text-fuchsia-100'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar