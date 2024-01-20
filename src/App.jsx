
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Iphone15 from './components/Iphone15'
import AppleWatch9 from './components/AppleWatch9'
import Products from './components/Products'
import Carousel from './components/Carousel'

function App() {
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <>
    <Navbar/>
    <main>
      <div className='bg-black/90 text-center lg:flex justify-center text-white pt-16 lg:pt-14 pb-2 px-2 px-md-10 lg:px-44 text-sm/8 h-auto lg:h-22 items-center'>
        <p>Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* Plus No Cost EMI from most leading banks.‡ <a className=' ml-2 text-blue-700 hover:underline' href="#">Shop now &gt;</a></p>
      </div>
      <HeroSection/>
      <Iphone15/>
      <AppleWatch9/>
      <Products/>
      <Carousel items = {items}/>
    </main>
    </>
  )
}

export default App
