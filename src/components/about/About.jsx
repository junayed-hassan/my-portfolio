import aboutImg from '../../assets/about.jpg'
import './About.css'
function About() {
  return (
    <div id='about' className='about font-Lora flex items-center justify-center flex-col lg:gap-12 md:gap-6 lg:my-14 md:my-7 max-[448px]:mx-7 mx-16'>
        <h2 className='px-7 lg:text-7xl font-semibold md:text-6xl max-[448px]:text-4xl whitespace-nowrap'>About Me</h2>
        <div className='about-section flex gap-20 lg:gap-10 md:gap-0 max-[448px]:gap-0'>
            <div className='about-left mt-3 '>
                <img className='max-[1440px]:object-cover max-[1440px]:w-[850px] max-[1440px]:h-[400px] max-[1024px]:w-[950px] max-[1024px]:h-[450px] max-[1024px]:object-cover max-[768px]:hidden' src={aboutImg } alt="img" />
            </div>
            <div className='about-right flex lg:gap-12 md:gap-6 max-[448px]:gap-5 flex-col mt-4'>
                <div className='about-para flex flex-col gap-5 text-xl font-medium  max-[448px]:gap-2 max-[448px]:text-justify'>
                    <p className='max-[448px]:text-sm'>I am an experienced frontend developer with over a decade of  professional experience in the field  Throughout my career, I have had the privilege  of collaborating with prestigious organizations,  contributing to success and growth.</p>
                    <p className='max-[448px]:text-sm'>My passion for frontend developnent   is not anly reflected in my extensive experience  but also in the enthusiasm and dedication  I bring to each project.</p>
                </div>
                <div className='about-skills flex flex-col lg:gap-5 md:gap-2 '>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2'>
                        <p className='min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium'>HTML & CSS </p>
                        <hr className='outline-none border-none w-[50%] h-2 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"50%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2'>
                        <p className='min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium'>JavaScript </p>
                        <hr className='outline-none border-none w-[50%] h-2 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"70%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2'>
                        <p className='min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium'>ReactJs</p>
                        <hr className='outline-none border-none w-[50%] h-2 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"60%"}} />
                        </div>
                    <div className='transition-all ease-linear duration-300 hover:scale-105 flex items-center gap-5 max-[320px]:gap-2'>
                        <p className='min-w-[150px] max-[448px]:min-w-[70px] lg:text-2xl md:text-[22px] max-[448px]:text-xs font-medium'>TailwindCss </p>
                        <hr className='outline-none border-none w-[50%] h-2 max-[448px]:h-1 rounded-[50px] bg-gradient-to-r from-pink-500 to-violet-500' style={{width:"50%"}} />
                        </div>
                </div>
            </div>
        </div>
        <div className='about-acbS flex justify-around w-[100%] mb-20 max-[448px]:mt-3'>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0'>
                <h2 className='lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>10+</h2>
                <p className='lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium'>Month OF EXPERIENCE</p>
            </div>
            <span className='block  w-1 h-30 bg-gradient-to-b from-pink-500 to-violet-500'></span>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0'>
                <h2 className='lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>20+</h2>
                <p className='lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium'>PROJECTS COMPLETED</p>
            </div>
            <span className='block  w-1 h-30 bg-gradient-to-b from-pink-500 to-violet-500'></span>
            <div className='about-acb transition-all ease-linear duration-500 hover:scale-105 flex flex-col items-center gap-2.5 max-[448px]:gap-0'>
                <h2 className='lg:text-5xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>05+</h2>
                <p className='lg:text-xl md:text-base max-[448px]:text-[7px] max-[320px]:text-[5px] font-medium'>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About