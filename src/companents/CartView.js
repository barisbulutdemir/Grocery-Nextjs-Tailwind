import {useSelector} from "react-redux";
import {selectItems} from "@/redux/cartSlice";


export default function CartView(){

    const items = useSelector(selectItems);


    return(
        <>
            <div className="bg-slate-50 p-5 rounded shadow shadow-gray-300 ">
                <div className="text-sm ">Total: $108,00 </div>
                <div className="w-[85%] h-0.5 bg-slate-600 mx-auto"></div>
                <div className=" grid ">
                    <div className="flex items-center space-x-2 text-sm mt-2 justify-between  ">
                        <p className=""><span>- </span>Banana</p>
                        <p>1 kg</p>
                        <p>$12</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm mt-2 justify-between">
                        <p><span>- </span>Watermelon</p>
                        <p>1 kg</p>
                        <p>$12</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm mt-2 justify-between">
                        <p><span>- </span>Cucumber</p>
                        <p>1 kg</p>
                        <p>$12</p>
                    </div>

                </div>
                <div className="flex bg-app-blue items-center justify-center rounded-xl text-white mt-5">
                    <button>Checkout</button>
                </div>

            </div>

        </>
    )

}