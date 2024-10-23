import Logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar font-Lora flex justify-between items-center my-5 mx-16'>
        <img className='w-14' src={Logo} alt="logo" />
        <ul className='nav-menu flex items-center gap-7 text-lg font-medium cursor-pointer'>
            <li className='hover:text-rose-700'>Home</li>
            <li className='hover:text-rose-700'>About Me</li>
            <li className='hover:text-rose-700'>Services</li>
            <li className='hover:text-rose-700'>Portfolio</li>
            <li className='hover:text-rose-700'>Contact</li>
        </ul>
        <div className='nav-connect py-3 px-6 rounded-[50px] text-lg cursor-pointer text-fuchsia-100'>Connect With Me</div>
    </div>
  )
}

export default Navbar