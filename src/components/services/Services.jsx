import './Services.css'
import Services_Data from '../../assets/services_data'
import { FaArrowRight } from "react-icons/fa6";

function Services() {
  return (
    <div id='services' className='services flex flex-col items-center justify-between gap-20 my-20 mx-16 font-Lora'>
        <h2 className='px-7 text-7xl font-semibold'>My Services</h2>
        <div className='services-container grid grid-cols-3 gap-10 mb-20'>
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services-formate flex flex-col justify-center gap-5 p-8 rounded-[10px] cursor-pointer border-2 border-[gold] transition-all duration-400' > 
                    <h3 className='text-2xl font-semibold'>{service.s_no}</h3>
                    <h2 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-pink-500 whitespace-nowrap'>{service.s_name}</h2>
                    <p className='text-xl max-w-80'>{service.s_desc}</p>
                    <div className='flex gap-5 items-center mt-5'>
                        <p>Read More</p>
                        <FaArrowRight />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services