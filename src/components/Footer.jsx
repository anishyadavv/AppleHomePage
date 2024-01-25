
const Footer = () => {

    const handleClick = (e)=>{
       const id = e.target.getAttribute('id');
        const accordian = document.getElementById(`${id}1`);
        accordian.classList.toggle('hidden');
        accordian.classList.toggle('flex');
    }
  return (
    <div className="mt-2 bg-stone-100 text-[13px] lg:px-[10vw] px-3 pt-4 text-gray-500">
        <div className=" mb-5 text-[12px]">
            <p>
                *Instant savings, otherwise referred to as instant cashback, is available with the purchase of an <a className="text-gray-800 underline" href="">eligible product</a> for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. <a className=" text-gray-800 underline" href="">Click here</a> to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. <a className=" text-gray-800 underline" href="">Additional terms apply</a>. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
                <br />
                <br />
                ‡No Cost EMI is available with the purchase of an <a className="text-gray-800 underline" href="">eligible product</a> made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. <a className="text-gray-800 underline" href="">Additional terms apply</a>. <br /><br />
                Representative example: Based on a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00. <br /><br />
                A subscription is required for Apple TV+.
            </p>
        </div>
        <hr/>

        <div className="grid lg:grid-cols-5 mt-4">
            <div className="flex flex-col">
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="shop" onClick={handleClick}> Shop and Learn</p>
                <div className="flex-col hidden lg:flex" id="shop1">
                    <a className="mt-2 hover:underline" href="">Store</a>
                    <a className="mt-2 hover:underline" href="">Mac</a>
                    <a className="mt-2 hover:underline" href="">iPad</a>
                    <a className="mt-2 hover:underline" href="">iPhone</a>
                    <a className="mt-2 hover:underline" href="">Watch</a>
                    <a className="mt-2 hover:underline" href="">AirPods</a>
                    <a className="mt-2 hover:underline" href="">TV & Home</a>
                    <a className="mt-2 hover:underline" href="">AirTag</a>
                    <a className="mt-2 hover:underline" href="">Accessories</a>
                    <a className="mt-2 hover:underline" href="">Gift Cards</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default mt-2" id="wallet" onClick={handleClick}>Apple Wallet</p>
                <div className="mt-2 hidden lg:block" id="wallet1">
                    <a className="hover:underline" href="">Wallet</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
            </div>
            <div className="flex flex-col">
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="account" onClick={handleClick}> Account</p>
                <div className="hidden flex-col lg:flex" id="account1">
                    <a className="mt-2 hover:underline" href="">Manage Your Apple ID</a>
                    <a className="mt-2 hover:underline" href="">Apple Store Account</a>
                    <a className="mt-2 hover:underline" href="">iCloud.com</a>
                    <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2 hover:underline">Entertainment</p>
                    <a className="mt-2 hover:underline" href="">Apple One</a>
                    <a className="mt-2 hover:underline" href="">Apple TV+</a>
                    <a className="mt-2 hover:underline" href="">Apple Music</a>
                    <a className="mt-2 hover:underline" href="">Apple Arcade</a>
                    <a className="mt-2 hover:underline" href="">Apple Podcasts</a>
                    <a className="mt-2 hover:underline" href="">Apple Books</a>
                    <a className="mt-2 hover:underline" href="">Apple Store</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
            </div>
            <div className="flex flex-col">
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="store" onClick={handleClick}>
                    Apple Store
                </p>
                <div className="hidden flex-col lg:flex" id="store1">
                    <a className="mt-2 hover:underline" href="">Find a Store</a>
                    <a className="mt-2 hover:underline" href="">Genius Bar</a>
                    <a className="mt-2 hover:underline" href="">Today at Apple</a>
                    <a className="mt-2 hover:underline" href="">Apple Camp</a>
                    <a className="mt-2 hover:underline" href="">Apple Trade In</a>
                    <a className="mt-2 hover:underline" href="">Ways to Buy</a>
                    <a className="mt-2 hover:underline" href="">Recycling Programme</a>
                    <a className="mt-2 hover:underline" href="">Order Status</a>
                    <a className="mt-2 hover:underline" href="">Shopping Help</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
            </div>
            <div className="flex flex-col">
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="business" onClick={handleClick}>For Business</p>
                <div className="hidden flex-col lg:flex" id="business1">
                    <a className="mt-2 hover:underline" href="">Apple and Business</a>
                    <a className="mt-2 hover:underline" href="">Shop for Business</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2 " id="education" onClick={handleClick}>
                    For Education
                </p>
                <div className="hidden flex-col lg:flex" id="education1">
                    <a className="mt-2 hover:underline" href="">Apple and Education</a>
                    <a className="mt-2 hover:underline" href="">Shop for Education</a>
                    <a className="mt-2 hover:underline" href="">Shop for Univesity</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>

                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2 " id="health" onClick={handleClick}>For Healthcare</p>
                    <div className="hidden flex-col lg:flex" id="health1">
                        <a className="mt-2 hover:underline" href="">Apple in Healthcare</a>
                        <a className="mt-2 hover:underline" href="">Healt on Apple Watch</a>
                    </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
            </div>
            <div className="flex flex-col">
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="values" onClick={handleClick}>
                    Apple Values
                </p>
                <div className="hidden flex-col lg:flex" id="values1">
                    <a className="mt-2 hover:underline" href="">Acdessibilty</a>
                    <a className="mt-2 hover:underline" href="">Education</a>
                    <a className="mt-2 hover:underline" href="">Environment</a>
                    <a className="mt-2 hover:underline" href="">Privacy</a>
                    <a className="mt-2 hover:underline" href="">Supplier Responsibility</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
                <p className=" text-gray-800 lg:font-semibold  cursor-pointer lg:cursor-default  mt-2" id="about" onClick={handleClick}>About Apple</p>
                <div className="hidden flex-col lg:flex" id="about1">
                    <a className="mt-2 hover:underline" href="">Newsroom</a>
                    <a className="mt-2 hover:underline" href="">Apple Leadership</a>
                    <a className="mt-2 hover:underline" href="">Career Opportunities</a>
                    <a className="mt-2 hover:underline" href="">Investors</a>
                    <a className="mt-2 hover:underline" href="">Ethics & Compliance</a>
                    <a className="mt-2 hover:underline" href="">Events</a>
                    <a className="mt-2 hover:underline" href="">Contact Apple</a>
                </div>
                <div className="mt-2 lg:hidden">
                    <hr />
                </div>
            </div>
        </div>
        <div className="mt-6 mb-5">
            <p>More ways to shop: <a className="underline text-blue-600" href="">Find an Apple Store</a> or <a className="underline text-blue-600" href="">other retailer</a> near you. Or call 000800 040 1966.</p>
        </div>
        <hr />
        <div className="md:flex md:flex-row flex-col-reverse flex justify-between mt-4 pb-4">
            <div className="lg:flex">
                <div>Copyright © 2024 Apple Inc. All rights reserved.</div>
                <div className=" lg:ms-5 text-gray-800">
                    <a className="hover:underline" href="">Privacy Policy</a>
                    &nbsp;|&nbsp;
                    <a className="hover:underline"href="">Terms of Use</a>&nbsp;|&nbsp;
                    <a className="hover:underline"href="">Sales Policy</a>&nbsp;|&nbsp;
                    <a className="hover:underline"href="">Legal</a>&nbsp;|&nbsp;
                    <a className="hover:underline"href="">Site Map</a>
                </div>
            </div>
            <p className=" text-gray-800 mb-3">India</p>
        </div>
    </div>
  )
}

export default Footer
