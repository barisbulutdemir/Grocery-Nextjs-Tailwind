import Menu from "@/companents/Menu";
import Image from "next/image";
import {PlusIcon} from "@heroicons/react/24/outline";
import React from "react";

export default function Products( {filteredProducts}) {
    return (
        <>
            <div className="grid grid-cols-4 px-5 mt-10 space-x-4 ">
                {filteredProducts.map((val) => (
                    <div key={val.id} className="flex flex-col items-center justify-center bg-slate-50 rounded-3xl py-4">
                        <div className="border-b-2 border-b-slate-200 pb-1">
                            <Image src={val.img} width={100} height={100} alt="img/fruit" className="h-20 w-24" />
                        </div>
                        <div>
                            <h4 className="text-sm line-clamp-1">{val.title}</h4>
                            <p className="text-slate-600">{val.category}</p>
                        </div>
                        <div className="flex space-x-2 pb-1">
                            <p className="text-md text-slate-600 font-light">
                                Unit <span className="font-bold">${val.price}</span>
                            </p>
                            <div className="bg-yellow-500 w-6 text-white rounded-full cursor-pointer">
                                <PlusIcon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <Menu />
        </>
    );
}
