import React from "react";
import Image from "next/image";
import {PlusIcon} from "@heroicons/react/24/outline";
export default function Recommended({ recommendedItems : { title ,items} }) {
    return (
        <>
            <div className="  rounded-t-3xl w-full px-5 space-y-10">

                <div className="pt-5">
                 <h1 className="text-3xl grow ">{title}</h1>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center justify-center  gap-5">
                    {
                        items.map((val,i) => (
                            <div key={val.id} className="flex flex-col items-center justify-center bg-slate-50  rounded-3xl py-4 ">
                                <div className="border-b-2 border-b-slate-200 pb-1 ">
                                     <Image src={val.img} width={100} height={100} alt="img/fruit" className="h-20 w-24" />
                                </div>
                                <div>
                                    <h4 className="text-xl ">{val.title}</h4>
                                    <p className="text-slate-600">{val.category}</p>
                                </div>
                                <div className="flex space-x-2 border-b-2 pb-1">
                                    <p className="text-md text-slate-600 font-light">Unit <span className="font-bold">${val.price}</span></p>
                                    <div className=" bg-yellow-500 w-6 text-white rounded-full cursor-pointer"><PlusIcon /></div>
                                </div>



                            </div>
                        ))
                    }
                </div>




            </div>

        </>
    )
}