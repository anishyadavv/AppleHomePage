import appleWatch9 from "../assets/large_2x.mp4";
import appleWatch9sm from "../assets/small_2x.mp4";
import appleWatch9md from "../assets/medium_2x.mp4"

import logo from "../assets/logo.svg"
const AppleWatch9 = () => {
  return (
    <div className="mt-3 relative w-auto">
        <video autoPlay muted className="hidden lg:block">
            <source src={appleWatch9} type="video/mp4" />
        </video>
        <video autoPlay muted className="md:hidden h-[600px] object-cover"  >
            <source src={appleWatch9sm} type="video/mp4" />
        </video>
        <video autoPlay muted className="hidden md:block lg:hidden" >
            <source src={appleWatch9md} type="video/mp4" />
        </video>

        <div className="flex flex-col items-center pt-8 -mt-72 md:-mt-96 lg:-mt-80 left-2/4 -translate-x-2/4 lg:pt-6 absolute text-white">
            <h1 className=" text-[25px] sm:text-[30px] md:text-[45px] flex items-center font-semibold"><img className=" w-5 md:w-10 mr-2" src={logo} alt="logo" />WATCH</h1>
            <p className="text-bold -mt-4 md:-mt-8 lg:-mt-9 md:text-[20px]">SERIES 9</p>
            <p className=" text-[20px] md:text-[30px] lg:w-screen text-center ">Double tap. A magical new way to use Apple Watch.</p>
            <div className=" text-[18px] md:text-[20px] mt-6 flex justify-around w-60 text-black">
                <div><a className=" mr-1 bg-white rounded-full px-5 py-3" href="#">Learn more</a></div> 
                <div><a className=" mr-1 bg-white rounded-full px-5 py-3"href="#">Buy</a></div>
            </div>
        </div>

    </div>
  )
}

export default AppleWatch9
