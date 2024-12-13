import Logo from '../../assets/logo.png';
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className='footer flex flex-col gap-7 my-20 max-[448px]:mx-3 mx-16 font-Lora'>
        <div className='footer-top md:flex max-[448px]:block justify-between'>
            <div className='footer-top-left max-[448px]:ml-2'>
              <img className='w-10' src={Logo} alt="" />
               <p className='text-lx max-[375px]:w-[310px] w-[350px]'>I am a frontend developer from,Bangladesh  with 10 Month of experience in companies all over the world...</p>
            </div>
            <div className='footer-top-right m-5 max-[448px]:ml-[13%]'>
              <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-pink-500 whitespace-nowrap'>social media activity</h3>
              <div className='flex items-center gap-3 ms-3 mt-5 text-xl'>
                <a target="_blank" href="https://www.linkedin.com/in/junayed-hassan/"><ImLinkedin /></a>
                <a target="_blank" href="https://x.com/JHassan96185"><FaXTwitter /></a>
                <a target="_blank" href="https://www.instagram.com/junayedhassan83/"><FaInstagramSquare /></a>
                <a target="_blank" href="https://t.me/+88001948493880"><FaTelegramPlane /></a>
                <a target="_blank" href="https://www.facebook.com/junayed.hassan.50999"><FaFacebook /></a>
              </div>
            </div>
        </div>
        <hr />
        <div className='footer-top-button flex justify-around text-[16px]'>
            <p className='whitespace-nowrap max-[448px]:text-[14px]'> @  2024 junayed hassan . All rights reserved.</p>
            <div className='flex gap-5 md:hidden max-[448px]:hidden '>
              <p> Term of services </p>
              <p>Privacy policy</p>
              <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer