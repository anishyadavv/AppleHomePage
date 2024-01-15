
const HeroSection = () => { 
  return (
    <div className='h-screen relative bg-top bg-150% lg:bg-90% text-white bg-no-repeat md:bg-iPhonemd bg-iPhonesm lg:bg-iPhone15l lg:bg-top' style={{backgroundSize:"auto 100%"}}>
        <div className="flex flex-col items-center pt-8 lg:pt-6">
            <h1 className=" text-[30px] md:text-[55px] font-semibold">iPhone 15 Pro</h1>
            <p className=" text-[20px] md:text-[30px] lg:-mt-3">Titanium. So strong. So light. So Pro.</p>
            <div className=" text-[18px] md:text-[20px] mt-2 font-semibold flex justify-around w-60 text-sky-600">
                <div><a className="hover:underline mr-1" href="#">Learn more</a><span>&gt;</span></div> 
                <div><a className="hover:underline mr-1"href="#">Buy</a><span>&gt;</span></div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
