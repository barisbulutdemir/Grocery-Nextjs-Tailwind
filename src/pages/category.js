import Header from "@/companents/Header";
import Menu from "@/companents/Menu";
import Link from "next/link";

export default function category(){
    return(
        <>
            <Header />
            <div className="w-full h-auto">
                <h1 className="text-5xl text-slate-500 font-light px-6">category</h1>
                <div className="px-10 grid space-y-6 my-10">
                    <div className="category-div ">
                     <Link href="/products" className="category-link">Organic</Link>
                    </div>
                    <div className="category-div">
                    <Link href="/category/food" className="category-link">Food</Link>
                    </div>
                        <div className="category-div">
                    <Link href="/category/house" className="category-link">House</Link>
                        </div>
                            <div className="category-div">
                    <Link href="/category/electronic" className="category-link">Electronic</Link>
                            </div>
                                <div className="category-div">
                    <Link href="/category/pet" className="category-link">Pet</Link>
                                </div>

                </div>
            </div>

            <Menu />

        </>
    )
}