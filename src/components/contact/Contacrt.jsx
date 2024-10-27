/* eslint-disable react/no-unescaped-entities */

import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Contact.css';

const schema = yup.object({
  name: yup.string().required("Name is required").min(5, "Name must be at least 5 characters"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  subject: yup.string().min(6, "Message must be at least 6 characters"),
  message: yup.string().required("Message is required").min(12, "Message must be at least 12 characters"),
}).required();

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    reset();

    const formData = new FormData();
    formData.append("access_key", "16e7bc05-ef2d-4744-a7f2-601057c80a1b");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className='contact flex flex-col items-center justify-between gap-20 my-20 mx-16'>
      <h1 className="px-7 text-7xl font-semibold">Get in touch</h1>
      <div className='contact-section flex gap-32'>
        <div className='contact-left flex flex-col gap-7'>
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-pink-500 whitespace-nowrap">Let's talk</h2>
          <p className="text-xl leading-8 max-w-[530px]">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-2 bg-pink-50 py-5 px-5 rounded-md shadow-sm">
          <div className="flex gap-5 mb-2">
            <div>
              <input {...register("name")} id="name" className="border-none w-[312px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="text" placeholder="Enter your name" />
              <p className="text-xs text-red-600 ms-1">{errors.name?.message}</p>
            </div>
            <div>
              <input {...register("email")} id="email" className="border-none w-[312px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="email" placeholder="Enter your email" />
              <p className="text-xs text-red-600 ms-1">{errors.email?.message}</p>
            </div>
          </div>
          <input {...register("subject")} id="subject" className="border-none w-[650px] pl-5 rounded-[4px] py-5 shadow-md text-base text-[#A0A0A0] font-Lora outline-none" type="text" placeholder="Enter your Subject" />
          <p className="text-xs text-red-600 ms-1">{errors.subject?.message}</p>
          <textarea {...register("message")} id="message" className="w-[650px] border-none p-6 rounded-[4px] text-base shadow-md text-[#A0A0A0] font-Lora outline-none" placeholder="Enter your message" rows={3}></textarea>
          <p className="text-xs text-red-600 ms-1">{errors.message?.message}</p>
          <button className='contact-submit py-5 px-14 rounded-[50px] text-xl border-none cursor-pointer text-fuchsia-100 shadow-md' type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;