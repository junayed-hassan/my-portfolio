import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().max(5),
  email: yup.string(),
  subject: yup.string(),
  message: yup.string(),
}).required();

import './Contact.css';

function Contacrt() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

    const onSubmit = async (event) => {
        handleSubmit(onSubmit);
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "16e7bc05-ef2d-4744-a7f2-601057c80a1b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


  return (
    <div id="contact" className='contact flex flex-col items-center justify-between gap-20 my-20 mx-16'>
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
            <form onSubmit={onSubmit} className="flex flex-col items-start gap-2 bg-pink-50 py-5 px-5 rounded-md">
                <div className="flex gap-5 mb-2">
                  <div>
                    <input  {...register("name")} id="name" className="border-none  w-[312px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="text" placeholder="Enter your name" name="name"/>
                    <p className="text-xs text-red-600">{errors.name?.message}</p>
                  </div>
                  <div>
                    <input  {...register("email")} id="email" className="border-none  w-[312px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="email" placeholder="Enter your email" name="email"/>
                    <p className="text-xs text-red-600">{errors.email?.message}</p>
                  </div>
                </div>
                <input {...register("subject")} id="subject" className="border-none  w-[650px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="text" placeholder="Enter your Subject" name="Subject"/>
                <p className="text-xs text-red-600">{errors.subject?.message}</p>
                <textarea {...register("message")}  id="message" className="w-[650px] border-none p-6 rounded-[4px] text-base shadow-md text-[#A0A0A0] font-Lora outline-none" name="message" placeholder="Enter your message" rows={3} ></textarea>
                <p className="text-xs text-red-600">{errors.message?.message}</p>
                <button className='contact-submit py-5 px-14 rounded-[50px] text-xl border-none cursor-pointer text-fuchsia-100' type="submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contacrt