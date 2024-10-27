import Logo from '../../assets/logo.png';
import { ImLinkedin } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import './Footer.css';

function Footer() {
  return (
    <div className='footer flex flex-col gap-7 my-20 mx-16 font-Lora'>
        <div className='footer-top flex justify-between'>
            <div className='footer-top-left'>
              <img className='w-10' src={Logo} alt="" />
               <p className='text-lx w-[350px]'>I am a frontend developer from,Bangladesh  with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className='footer-top-right m-5'>
              <h3 className='text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-pink-500 whitespace-nowrap'>social media activity</h3>
              <div className='flex items-center gap-3 ms-3 mt-5 text-xl'>
                <ImLinkedin />
                <FaXTwitter />
                <FaInstagramSquare />
                <FaTelegramPlane />
                <BsYoutube />
                <FaFacebook />
              </div>
            </div>
        </div>
        <hr />
        <div className='footer-top-button flex justify-between text-[16px]'>
            <p> @  2024 junayed hassan . All rights reserved.</p>
            <div className='flex gap-5'>
              <p> Term of services </p>
              <p>Privacy policy</p>
              <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer