import Logo from '../../assets/logo.png';
import { AiOutlineUser } from "react-icons/ai";
import './Footer.css';
function Footer() {
  return (
    <div className='footer flex flex-col gap-7 my-20 mx-16'>
        <div className='footer-top flex justify-between'>
            <div className='footer-top-left'>
              <img className='w-10' src={Logo} alt="" />
               <p className='text-lx w-[350px]'>I am a frontend developer from,Bangladesh  with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className='footer-top-right flex items-center gap-5'>
                <div className='footer-email flex py-5 px-7  gap-5 rounded-[50px] bg-pink-50'> 
                    <AiOutlineUser  className='mt-1'/>
                    <input className='outline-none border-none  bg-transparent' type="email" placeholder='Enter your email here'/>
                </div>
                <div className='subscribe-button py-4 px-10 rounded-[50px] text-xl border-none cursor-pointer text-fuchsia-100'>Subscribe</div>
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