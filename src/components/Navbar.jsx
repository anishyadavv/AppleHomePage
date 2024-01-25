import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import search from '../assets/search.svg';

const Navbar = () => {
  const openMenu = () => {
    document.getElementById('menu').classList.remove('hidden');
  }
  const closePopup = () => {
    document.getElementById('menu').classList.add('hidden');
  }
  return (

  <>
    <div id='menu' className=' bg-neutral-800 z-20 hidden text-white pt-16 h-screen w-screen fixed'>
      <div className='absolute right-10 top-6 w-4 cursor-pointer' onClick={closePopup}><svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </div>
      <div className='flex flex-col ps-10 text-3xl font-semibold'>
        <a  className="hover:text-white mb-4" href="#">Store</a>
        <a className="hover:text-white mb-4" href="#">Mac</a>
        <a className="hover:text-white mb-4" href="#">iPad</a>
        <a className="hover:text-white mb-4" href="#">iPhone</a>
        <a className="hover:text-white mb-4" href="#">Watch</a>
        <a className="hover:text-white mb-4" href="#">AirPods</a>
        <a className="hover:text-white mb-4" href="#">TV & Home</a>
        <a className="hover:text-white mb-4" href="#">Entertainment</a>
        <a className="hover:text-white mb-4" href="#">Accessories</a>
        <a className="hover:text-white mb-4" href="#">Support</a>
      </div>
    </div>
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
        <div className='flex flex-col justify-between h-3 cursor-pointer lg:hidden' onClick={openMenu}>
            <div className='w-4 bg-white h-0.5 rounded'>
            </div>
            <div className='w-4 bg-white h-0.5 rounded'>

            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar
