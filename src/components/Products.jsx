import AppleWatchUltralg from "../assets/apple_watch_ultra2_large_2x.jpg";
import AppleWatchUltramd from "../assets/apple_watch_ultra2_medium_2x.jpg";
import AppleWatchUltrasm from "../assets/apple_watch_ultra2_small_2x.jpg";
import MacBookProlg from "../assets/promo_mbp__ek7p477bkp6q_large_2x.jpg";
import MacBookPromd from "../assets/promo_mbp__ek7p477bkp6q_medium_2x.jpg";
import MacBookProsm from "../assets/promo_mbp__ek7p477bkp6q_small_2x.jpg";
import ipadlg from "../assets/promo_ipad__fioegapg12qi_large_2x.jpg";
import ipadmd from "../assets/promo_ipad__fioegapg12qi_medium_2x.jpg";
import ipadsm from "../assets/promo_ipad__fioegapg12qi_small_2x.jpg";
import Airpodlg from "../assets/promo_airpods_pro_order__d8xv36p4uwae_large_2x.jpg";
import Airpodmd from "../assets/promo_airpods_pro_order__d8xv36p4uwae_medium_2x.jpg";
import Airpodsm from "../assets/promo_airpods_pro_order__d8xv36p4uwae_small_2x.jpg";

import logo from "../assets/logoDark.svg"

const Products = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-3 mt-3">
      <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute text-black mt-4">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[25px] flex items-center font-bold"><img className=" w-5 md:w-6 mr-2" src={logo} alt="logo" />WATCH</h1>
            <p className="font-bold text-orange-500 tracking-widest -mt-4 md:-mt-5 lg:-mt-5 md:text-[12px]">ULTRA 2</p>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center font-semibold text-black/80 ">Next-level adventure.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={AppleWatchUltralg} alt="apple watch ultra" />
        <img className=" hidden md:block 2xl:hidden " src={AppleWatchUltramd} alt="apple watch ultra" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={AppleWatchUltrasm} alt="apple watch ultra" />
      </div>

      <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute text-black/80 mt-6">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[25px] lg:text-[35px] flex items-center font-semibold">MacBook Pro</h1>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center font-semibold w-screen">Mind-blowing. Head-turning</p>
            <div className=" text-[18px] md:text-[20px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={MacBookProlg} alt="amacbook Pro" />
        <img className=" hidden md:block 2xl:hidden " src={MacBookPromd} alt="macbook Pro" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={MacBookProsm} alt="macbook Pro" />
      </div>

      <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute  text-black/85 mt-10">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[25px] lg:text-[38px] flex items-center font-bold">iPad</h1>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center font-semibold">Lovable. Drawable. Magical.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={ipadlg} alt="ipad" />
        <img className=" hidden md:block 2xl:hidden " src={ipadmd} alt="ipad" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={ipadsm} alt="ipad" />
      </div>

    <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute text-white mt-10">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[35px] flex items-center font-bold">AirPods Pro</h1>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center font-semibold">Adaptive Audio. Now playing.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={Airpodlg} alt="Airpod" />
        <img className=" hidden md:block 2xl:hidden " src={Airpodmd} alt="Airpod" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={Airpodsm} alt="Airpod" />
      </div>
      <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute text-black mt-4">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[25px] flex items-center font-bold"><img className=" w-5 md:w-6 mr-2" src={logo} alt="logo" />WATCH</h1>
            <p className="font-bold text-orange-500 tracking-widest -mt-4 md:-mt-5 lg:-mt-5 md:text-[12px]">ULTRA 2</p>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center ">Next-level adventure.</p>
            <div className=" text-[18px] md:text-[15px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={AppleWatchUltralg} alt="apple watch ultra" />
        <img className=" hidden md:block 2xl:hidden " src={AppleWatchUltramd} alt="apple watch ultra" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={AppleWatchUltrasm} alt="apple watch ultra" />
      </div>

      <div className=" relative">
        <div className="flex flex-col items-center left-2/4 -translate-x-2/4 absolute text-black mt-4">
            <h1 className=" text-[25px] sm:text-[20px] md:text-[25px] flex items-center font-bold"><img className=" w-5 md:w-6 mr-2" src={logo} alt="logo" />WATCH</h1>
            <p className="font-bold text-orange-500 tracking-widest -mt-4 md:-mt-5 lg:-mt-5 md:text-[12px]">ULTRA 2</p>
            <p className=" text-[18px] md:text-[20px] lg:w-screen text-center ">Next-level adventure.</p>
            <div className=" text-[18px] md:text-[15px] mt-2 flex justify-around w-52 text-black">
                <div className=" text-sky-600"><a className=" mr-1 hover:underline" href="#">Learn more</a><span>&gt;</span></div>
                <div className=" text-sky-600"><a className=" mr-1 hover:underline"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
        <img className="hidden 2xl:block" src={AppleWatchUltralg} alt="apple watch ultra" />
        <img className=" hidden md:block 2xl:hidden " src={AppleWatchUltramd} alt="apple watch ultra" />
        <img className=" md:hidden overflow-hidden h-[550px] object-cover" src={AppleWatchUltrasm} alt="apple watch ultra" />
      </div>

    </div>
  )
}

export default Products
