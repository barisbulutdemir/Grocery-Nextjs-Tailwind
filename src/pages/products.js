import Menu from "@/companents/Menu";
import Image from "next/image";
import {PlusIcon} from "@heroicons/react/24/outline";
import React from "react";

import { useDispatch } from 'react-redux';
import {addToCart, removeFromCart} from "@/redux/cartSlice";


export default function Products( {filteredProducts}) {

    const onAddToCart = (product) => {
        console.log(product); // bu satırı ekleyin
        dispatch(addToCart(product));

    };


    const dispatch = useDispatch();

    return (

        <>
            <div className="grid grid-cols-4 px-5 mt-10 space-x-4 ">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col items-center justify-center bg-slate-50 rounded-3xl py-4">
                        <div className="border-b-2 border-b-slate-200 pb-1">
                            <Image src={product.img} width={100} height={100} alt="img/fruit" className="h-20 w-24" />
                        </div>
                        <div>
                            <h4 className="text-sm line-clamp-1">{product.title}</h4>
                            <p className="text-slate-600">{product.category}</p>
                        </div>
                        <div className="flex space-x-2 pb-1">
                            <p className="text-md text-slate-600 font-light">
                                Unit <span className="font-bold">${product.price}</span>
                            </p>
                            <button className="bg-yellow-500 w-6 text-white rounded-full cursor-pointer" onClick={()=> {onAddToCart(product); }}>
                                <PlusIcon/>
                            </button>

                        </div>
                    </div>
                ))}
            </div>


            <Menu />
        </>
    );
}
