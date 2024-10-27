import myWork_data from '../../assets/mywork_data'
import './My_Work.css'
import { FaArrowRight } from "react-icons/fa6";


function My_Work() {
  return (
    <div id='work' className='myWork flex flex-col items-center justify-between gap-20 my-20 mx-16'>
        <h2 className='px-7 text-7xl font-semibold'>My latest work</h2>
        <div className='myWork-container grid grid-cols-3 gap-10'>
            {myWork_data.map((work,index)=>{
                return <img className='h-[200px] w-[350px]   cursor-pointer box-border transition duration-300' key={index} src={work.w_img} alt="#" />
            })}
        </div>
        <div className='show-more flex gap-3.5 rounded-[50px] py-5 px-10 border-2 border-solid	divide-black text-xl font-medium cursor-pointer '>
            <p>Show More</p>
            <FaArrowRight className='mt-1.5'/>
        </div>
    </div>
  )
}

export default My_Work