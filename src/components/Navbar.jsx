import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import search from '../assets/search.svg';

const Navbar = () => {
  return (
    <div className='bg-black/30 fixed z-10 backdrop-blur text-white/80 flex items-center w-full justify-between px-4 lg:px-44 text-xs'>
      <div><img className='text-white w-5 lg:w-4' src={logo} alt="logo" /></div>
      <div className='lg:flex items-center justify-between w-full px-10 hidden'>
        <a  className="hover:text-white" href="#">Store</a>
        <a className="hover:text-white" href="#">Mac</a>
        <a className="hover:text-white" href="#">iPad</a>
        <a className="hover:text-white" href="#">iPhone</a>
        <a className="hover:text-white" href="#">Watch</a>
        <a className="hover:text-white" href="#">AirPods</a>
        <a className="hover:text-white" href="#">TV & Home</a>
        <a className="hover:text-white" href="#">Entertainment</a>
        <a className="hover:text-white" href="#">Accessories</a>
        <a className="hover:text-white" href="#">Support</a>
      </div>
      <div className='flex items-center w-28 justify-around'>
        <img className='cursor-pointer w-5 lg:w-4' src={search} alt="search" />
        <img className='cursor-pointer w-5 lg:w-4' src={cart} alt="cart" />
        {/* <img className='cursor-pointer w-5 lg:w-4' src={hamburger} alt="hamburger" /> */}
        <div className='flex flex-col justify-between h-3 cursor-pointer lg:hidden'>
            <div className='w-4 bg-white h-0.5 rounded'>
            </div>
            <div className='w-4 bg-white h-0.5 rounded'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
