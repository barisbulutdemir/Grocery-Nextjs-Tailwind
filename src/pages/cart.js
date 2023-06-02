import {ArrowDownIcon, ArrowLeftIcon} from "@heroicons/react/24/outline";
import icon from "../assets/lemon.png"
import Image from "next/image";

export default function Cart(){
    return(
        <>
            <div className="mt-10 w-[90%]  mx-auto h-screen">
                <div className="h-[10%]">
                    <h1 className="text-slate-500 text-5xl flex items-center gap-5">
                        <span ><ArrowLeftIcon className="h-10" /></span> Shopping Card</h1>
                </div>

                    {/* Items start */}
                <div className="flex flex-col justify-between h-[80%]">

                    <div className="mt-14 space-y-5 ">
                        <div className="flex items-center mx-auto justify-between w-[70%]">
                            <div className="flex space-x-6 my-auto ">
                                <Image src={icon} alt="icon" className="w-14"/>
                                <div className="mt-1">
                                    <p>Bananas</p>
                                    <p>$<span>7,90</span></p>
                                </div>
                            </div>
                            <div className="flex space-x-5 text-xl">
                                <button className="font-bold">-</button>
                                <p>2</p>
                                <button className="font-bold ">+</button>
                            </div>
                        </div>
                        <div className="flex items-center mx-auto justify-between w-[70%]">
                            <div className="flex space-x-6 my-auto ">
                                <Image src={icon} alt="icon" className="w-14"/>
                                <div className="mt-1">
                                    <p>Bananas</p>
                                    <p>$<span>7,90</span></p>
                                </div>
                            </div>
                            <div className="flex space-x-5 text-xl">
                                <button className="font-bold">-</button>
                                <p>2</p>
                                <button className="font-bold ">+</button>
                            </div>
                        </div>
                        <div className="flex items-center mx-auto justify-between w-[70%]">
                            <div className="flex space-x-6 my-auto ">
                                <Image src={icon} alt="icon" className="w-14"/>
                                <div className="mt-1">
                                    <p>Bananas</p>
                                    <p>$<span>7,90</span></p>
                                </div>
                            </div>
                            <div className="flex space-x-5 text-xl ">
                                <button className="font-bold">-</button>
                                <p>2</p>
                                <button className="font-bold ">+</button>
                            </div>
                        </div>

                    </div>

                    {/* items end */}
                    <div className=" ">
                            <div className=" grid justify-end mb-5">
                                <p className="text-slate-500 font-light text-right">Address:</p>
                                <p className="text-right "> caferağa 87 no:2 Beykoz Istanbul</p>
                                <button className="text-right underline text-blue-600 hover:text-red-500 transition-all duration-300 active:scale-95">Edit</button>
                            </div>
                            <div className="pb-12">
                                <div className="checktext">
                                    <p>Subtotal</p>
                                    <p>$35,96</p>
                                </div>
                                <div className="checktext">
                                    <p>Delivery</p>
                                    <p>$2,0</p>
                                </div>
                                <div className="checktext ">
                                    <p>Total</p>
                                    <p>$37,96</p>
                                </div>
                            </div>

                            <div className="flex justify-center ">
                            <button className="bg-app-blue rounded-3xl text-white w-[70%] h-12 hover:bg-app-blue/80 transition-all duration-300 active:scale-95   ">
                                Proceed To Checkout
                            </button>
                            </div>
                        </div>
                </div>

            </div>


        </>
    )
}