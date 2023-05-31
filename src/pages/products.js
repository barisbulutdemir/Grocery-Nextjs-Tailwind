import Header from "@/companents/Header";
import Menu from "@/companents/Menu";
import ProductMenu from "@/companents/ProductMenu";
import { products } from "@/data";
import Image from "next/image";

export default function Products() {
    return (
        <>
            <Header />
            <ProductMenu />
            <div>
                <div>
                    {products.map((val, i) => (

                        <div key={i} className="grid grid-cols-3">
                            <div className="">
                                <Image src={val.img} alt="img" className="w-36 h-auto flex" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Menu />
        </>
    );
}
