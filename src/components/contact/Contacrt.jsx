import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


import './Contact.css'
function Contacrt() {
  return (
    <div className='contact flex flex-col items-center justify-between gap-20 my-20 mx-16'>
        <h1 className="px-7 text-7xl font-semibold">Gat in touch</h1>
        <div className='contact-section flex gap-32'>
            <div className='contact-left flex flex-col gap-7'>
                <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-pink-500 whitespace-nowrap">Lats talk</h2>
                <p className="text-xl leading-8 max-w-[530px] ">Im currently  avaliable to take on new projects, so feel to send me a message  about anything that you want me to work on. you can contact anytime. </p>
                <div className='flex flex-col gap-5 text-[22px]'>
                    <div className='flex items-center gap-5'>
                        <MdOutlineMarkEmailUnread className="text-2xl" />
                        <p className="text-base">junayedhassan102045@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <MdAddCall className="text-2xl" />
                        <p className="text-base">+8801948493880</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <FaLocationDot className="text-2xl" />
                        <p className="text-base">Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <form className="flex flex-col items-start gap-5">
                <label className="text-xl font-medium" htmlFor="">Your Name</label>
                <input className="border-none w-[700px] h-[78px] pl-5 rounded-[4px] text-xl bg-purple-50 text-[#A0A0A0] font-Lora outline-none" type="text" placeholder="Enter your name" name="name"/>
                <label className="text-xl font-medium" htmlFor="">Your Email</label>
                <input className="border-none w-[700px] h-[78px] pl-5 rounded-[4px] text-xl bg-purple-50 text-[#A0A0A0] font-Lora outline-none" type="email" placeholder="Enter your email" name="email"/>
                <label className="text-xl font-medium" htmlFor="">Wright your message here</label>
                <textarea className="w-[650px] border-none p-6 rounded-[4px] text-xl bg-purple-50 text-[#A0A0A0] font-Lora outline-none" name="message" placeholder="Enter your message" rows={4} ></textarea>
                <button className='contact-submit py-5 px-14 rounded-[50px] text-xl border-none cursor-pointer text-fuchsia-100' type="submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contacrt