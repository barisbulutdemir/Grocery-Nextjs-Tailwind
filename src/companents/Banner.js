import Image from "next/image";
import bag from "../assets/bagicon.png"

export default function Banner(){
    return(
        <>

            {/* First Card */}

            <div className="relative items-center  flex space-x-3 overflow-x-scroll  scroll-smooth scroll-hidden ">
                <div className="flex flex-shrink-0">

                <div id="reklam" className=" my-10 mx-5 w-9/12 rounded-3xl overflow-hidden  block ">
                    <div className="bg-yellow-500 p-5 flex items-center gap-10">
                        <div >
                            <Image src={bag} alt="bag/icon" width={100}  />
                        </div>
                        <div className=" text-slate-100 ">
                            <p className=" text-3xl font-light">Get</p>
                            <p className="text-3xl font-bold">50% OFF</p>
                            <p className="text-lg font-light">On first <span className="font-normal">03</span> order</p>
                        </div>
                    </div>
                </div>
                <div id="reklam" className=" my-10 mx-5 w-9/12 rounded-3xl overflow-hidden block  ">
                    <div className="bg-yellow-500 p-5 flex items-center gap-10">
                        <div >
                            <Image src={bag} alt="bag/icon" width={100}  />
                        </div>
                        <div className=" text-slate-100 ">
                            <p className=" text-3xl font-light">Get</p>
                            <p className="text-3xl font-bold">50% OFF</p>
                            <p className="text-lg font-light">On first <span className="font-normal">03</span> order</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>


        </>
    )
}