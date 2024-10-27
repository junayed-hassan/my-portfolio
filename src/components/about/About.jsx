import aboutImg from '../../assets/about.jpg'
import './About.css'
function About() {
  return (
    <div id='about' className='about font-Lora flex items-center justify-center flex-col gap-12 my-14 mx-16'>
        <h2 className='px-7 text-7xl font-semibold'>About Me</h2>
        <div className='about-section flex gap-20'>
            <div className='about-left mt-3'>
                <img src={aboutImg } alt="img" />
            </div>
            <div className='about-right flex gap-12 flex-col mt-4'>
                <div className='about-para flex flex-col gap-5 text-xl font-medium'>
                    <p>I am an experienced frontend developer with over a decade of  professional experience in the field  Throughout my career, I have had the privilege  of collaborating with prestigious organizations,  contributing to success and growth.</p>
                    <p>My passion for frontend developnent   is not anly reflected in my extensive experience  but also in the enthusiasm and dedication  I bring to each project.</p>
                </div>
                <div className='about-skills flex flex-col gap-5 '>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5'>
                        <p className='min-w-[150px] text-2xl font-medium'>HTML & CSS </p>
                        <hr className='outline-none border-none w-[50%] h-2 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"50%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5'>
                        <p className='min-w-[150px] text-2xl font-medium'>JavaScript </p>
                        <hr className='outline-none border-none w-[50%] h-2 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"70%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5'>
                        <p className='min-w-[150px] text-2xl font-medium'>ReactJs</p>
                        <hr className='outline-none border-none w-[50%] h-2 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"60%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5'>
                        <p className='min-w-[150px] text-2xl font-medium'>TailwindCss </p>
                        <hr className='outline-none border-none w-[50%] h-2 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"50%"}} />
                        </div>
                </div>
            </div>
        </div>
        <div className='about-acbS flex justify-around w-[100%] mb-20'>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5'>
                <h2 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>10+</h2>
                <p className='text-xl font-medium'>YEARS OF EXPERIENCE</p>
            </div>
            <span className='block  w-1 h-30 bg-gradient-to-b from-pink-500 to-violet-500'></span>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5'>
                <h2 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>90+</h2>
                <p className='text-xl font-medium'>PROJECTS COMPLETED</p>
            </div>
            <span className='block  w-1 h-30 bg-gradient-to-b from-pink-500 to-violet-500'></span>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5'>
                <h2 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>15+</h2>
                <p className='text-xl font-medium'>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About