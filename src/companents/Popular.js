import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Popular({ popularitems: { title, items } }) {
    return (
        <>
            <div className="px-5 py-10">
                <div className="text-3xl drop-shadow-lg filter text-slate-900">{title}</div>
                <div className="relative flex items-center pt-5">
                    <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap space-x-4">
                    {items.map((item, i) => (
                        <div key={i} className=" inline-block  " >
                            <Image src={item.img} alt="img" className="w-[15vh] " />
                            <div className="w-[80%] bg-slate-300 h-0.5 my-2 flex items-center"></div>
                            <div className="">
                                <h3 className="">{item.title}</h3>
                                <p>{item.category}</p>
                                <div className="flex items-center gap-2 border-b-2">
                                    <p className="font-light text-md text-slate-800 text-center">
                                        Unit <span className="font-bold">${item.price}</span> </p>
                                    <div className=" bg-yellow-500 w-6 text-white rounded-full cursor-pointer"><PlusIcon /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
}
