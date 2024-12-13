import myWork_data from '../../assets/mywork_data'
import './My_Work.css'
// import { FaArrowRight } from "react-icons/fa6";


function My_Work() {
  return (
    <div id='work' className='myWork flex flex-col items-center justify-between lg:gap-16 md:gap-7 max-[448px]:gap-6 my-10 mx-16 max-[448px]:mx-7'>
        <h2 className='px-7 lg:text-7xl md:text-6xl font-semibold max-[448px]:text-4xl max-[320px]:text-2xl whitespace-nowrap'>My latest work</h2>
        <div className='myWork-container grid lg:grid-cols-3 md:grid-cols-2 xl:gap-10 md:gap-6 '>
            {myWork_data.map((work,index)=>{
                return <img className='h-[200px] w-[350px] max-[448px]:mb-5  cursor-pointer box-border transition duration-300' key={index} src={work.w_img} alt="#" />
            })}
        </div>
        {/* <div className='show-more flex gap-3.5 rounded-[50px] py-5 px-10 border-2 border-solid	divide-black text-xl font-medium cursor-pointer max-[448px]:hidden'>
            <p>Show More</p>
            <FaArrowRight className='mt-1.5'/>
        </div> */}
    </div>
  )
}

export default My_Work