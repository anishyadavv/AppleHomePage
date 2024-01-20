import Iphone15prolg from "../assets/apple1.jpg";
import Iphone15prosm from "../assets/apple2.jpg";

const HeroSection = () => {
  return (
    <div className=' relative text-white bg-no-repeat'>
        <div className=" w-full absolute flex flex-col items-center pt-8 lg:pt-6">
            <h1 className=" text-[30px] md:text-[55px] font-semibold">iPhone 15 Pro</h1>
            <p className=" text-[20px] md:text-[30px] lg:-mt-3">Titanium. So strong. So light. So Pro.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 font-semibold flex justify-around w-60 text-sky-600">
                <div><a className="hover:underline mr-1" href="#">Learn more</a><span>&gt;</span></div>
                <div><a className="hover:underline mr-1"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className=" h-[557px]  object-cover hidden md:block" src={Iphone15prolg} alt="iphone 15 pro" />
        <img className=" h-[557px]  object-cover md:hidden" src={Iphone15prosm} alt="iphone 15 pro" />
    </div>
  )
}

export default HeroSection
