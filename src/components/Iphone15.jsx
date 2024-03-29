import Iphone15lg from "../assets/iphone15lg.jpg";
import Iphone15sm from "../assets/iphone15sm.jpg";

const Iphone15 = () => {
  return (
    <div className='mt-3 text-black '>
        <div className="absolute w-full flex flex-col items-center pt-8 lg:pt-6">
            <h1 className=" text-[30px] md:text-[55px] font-semibold">iPhone 15</h1>
            <p className=" text-[20px] md:text-[30px] lg:-mt-3">New camerra. New design. Newphoria.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 font-semibold flex justify-around w-60 text-sky-600">
                <div><a className="hover:underline mr-1" href="#">Learn more</a><span>&gt;</span></div>
                <div><a className="hover:underline mr-1"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className=" h-[557px]  object-cover hidden md:block" src={Iphone15lg} alt="iphone 15 pro" />
        <img className=" h-[557px]  object-cover md:hidden" src={Iphone15sm} alt="iphone 15 pro" />
    </div>
  )
}

export default Iphone15
