import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import HeroImg from "../../assets/user_icon1.png"

function Hero() {
  return (
    <div id='home' className='hero flex items-center gap-6 flex-col font-Lora mt-20 '>
        <img className='rounded-[50px]' src={HeroImg} alt="img" />
        <h1 className='text-center w-[870px] text-7xl font-semibold'><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>I am Junayed Hasan</span> frontend developer based in Bangladesh </h1>
        <p className='w-[650px] text-center text-xl leading-10'>I am a frontend developer from Dhaka with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className='hero-action flex items-center gap-6 text-2xl font-medium mb-12'>
            <div className='text-xl hero-connect py-5 px-10 rounded-[50px] cursor-pointer bg-gradient-to-r to-violet-500 from-pink-500 text-fuchsia-100'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className='text-xl hero-resume py-5 px-16 border-2 cursor-pointer rounded-[50px]'>My resume</div>
        </div>
    </div>
  )
}

export default Hero