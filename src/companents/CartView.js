import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "@/redux/cartSlice";


export default function CartView(){

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);




    return(
        <>
            <div className="bg-slate-200 p-5 rounded shadow shadow-gray-300 z-50 ">
                <div className="text-sm  text-black ">Total: $ {total} </div>
                <div className="w-[90%] h-0.5 bg-slate-600 mx-auto"></div>
                <div className=" grid  ">
                    {items?.map((item,index) => (
                        <div key={index}  className="flex items-center justify-between space-x-4 space-y-4 border-b-2 border-slate-300  ">
                            <div className="">
                                <div className="  w-24 h-auto overflow-hidden mt-4 ">{item.title}</div>
                            </div>
                            <div>
                                <div className=" w-1/10 h-auto  ">{item.quantity}</div>
                            </div>
                            <div>
                                <div className=" w-2/10 h-auto ">${item.price}</div>
                            </div>
                        </div>


                    ))}

                </div>
                <div className="flex bg-app-blue items-center justify-center rounded-xl text-white mt-5">
                    <button>Checkout</button>
                </div>

            </div>

        </>
    )

}