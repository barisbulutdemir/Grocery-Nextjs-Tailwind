import {
    ChevronDownIcon,
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon
} from "@heroicons/react/24/outline";


export default function Header(){
    return(
        <>
            <div className="bg-app-blue space-y-14  ">
               <div className="flex justify-between px-10 pt-10">
                  <h1 className="text-2xl text-white ">Hey, Seloş</h1>
                    <div className="flex ">
                         <div className="relative ">
                            <ShoppingBagIcon className="w-10 h-auto "/>
                             <div className="absolute  top-0 right-0 px-1 bg-yellow-500 rounded-full text-white">
                                 <p className=" ">3</p></div>
                         </div>
                    </div>
               </div>

                {/* Search Start */}


                <div className=" flex justify-center rounded-full w-[90%] mx-auto py-5 text-md bg-blue-950 gap-3 ">
                    <MagnifyingGlassIcon className="text-white w-6 " />


                    <input type="text" className="w-[80%] bg-blue-950 outline-none text-white"
                           placeholder="Search Products or store"/>
                </div>

                {/* Search end  */}

                {/* Address start */}

                <div className=" flex justify-between items-center pb-3">
                    <div className="  text-sm  px-5 ">
                        <p className="text-xs text-slate-300  filter shadow-md">DELIVERY TO</p>
                        <p className="text-slate-100 shadow-md filter cursor-pointer flex items-center hover:underline active:text-slate-300 ">Caferaga 87/2 Cigdem Mah.
                            <span className="mx-2 "><ChevronDownIcon className="w-3 h-auto"/> </span>
                        </p>
                    </div>
                    <div className="px-6">
                        <p className="text-xs text-slate-300 ">WITH IN</p>
                        <p className="text-white flex items-center gap-2">1 Hour
                        <span><ChevronDownIcon className="w-3 h-auto"/></span>
                        </p>
                    </div>
                </div>

                {/* address end */}


            </div>

        </>
    )
}

