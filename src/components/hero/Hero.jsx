import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import HeroImg from "../../assets/user_icon1.png"

function Hero() {
  return (
    <div id='home' className='hero flex items-center gap-6  max-[448px]:gap-3 flex-col font-Lora mt-20 max-[448px]:mt-10'>
        <img className='rounded-[50px]  max-[448px]:w-28' src={HeroImg} alt="img" />
        <h1 className='text-center sm:w-[450px] sm:text-4xl max-[448px]:w-[390px] max-[375px]:w-[300px] lg:w-[870px] lg:text-7xl md:text-5xl max-[448px]:text-3xl max-[376px]:text-[30px]  font-semibold md:w-[650px] '><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>I am Junayed Hasan</span> frontend developer based in Bangladesh </h1>
        <p className='lg:w-[650px] md:w-[490px] sm:w-[430px] max-[448px]:w-[270px] max-[448px]:text-xs text-center lg:text-xl md:text-base sm:text-sm leading-10'>I am a frontend developer from Dhaka with 10 Month of experience in multiple companies...</p>
        <div className='hero-action flex items-center gap-6 text-2xl font-medium mb-12'>
            <div className='lg:text-xl md:text-base sm:text-sm max-[448px]:text-xs max-[448px]:py-2 hero-connect lg:py-5 lg:px-10 md:py-3 md:px-6 sm:py-2 px-4 rounded-[50px] cursor-pointer bg-gradient-to-r to-violet-500 from-pink-500 text-fuchsia-100'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className='lg:text-xl md:text-base sm:text-sm max-[448px]:text-xs max-[448px]:py-2 max-[448px]:hidden hero-resume lg:py-5 lg:px-16 md:py-3 md:px-8 sm:py-2 px-4 border-2 cursor-pointer rounded-[50px]'>My resume</div>
        </div>
    </div>
  )
}

export default Hero