import React, { useEffect, useState } from "react";
import { products } from "@/data";
import Products from "@/pages/products";
import Header from "@/companents/Header";

export default function ProductMenu() {

    // önce category için bi state oluşturuyoruz. herhangi aktif bir category var mı yada
    // hangi category aktif bunu state'te tutuyoruz. Daha sonrasında da filtrelenmiş ürünler için bir state
    // oluşturuyoruz.
    const [activeCategory, setActiveCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // useEffect kullanarakta her tetiklenmede -- bu en alta yazdığımız fonksiyon her tetiklendiğinde
    // useeffect te tetiklenir.
    useEffect(() => {

        // önce diyoruz ki: eğer aktif kategory boşsa filteredproducts taki ürünlerinde hepsi product
        if (activeCategory === "") {
            setFilteredProducts(products);

            //eğer aktif bir kategory varsa da bu ürünleri filtrele.  en sonda da setFilteredProducts'a
            // filtrelenmiş datayı atıyoruz. ve bunu map ile açıyoruz.
        } else {
            const filteredData = products.filter((item) => item.category === activeCategory);
            setFilteredProducts(filteredData);
        }
    }, [activeCategory]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    console.log(filteredProducts);
    return (

        <>
            <Header />

            <div className=" ">
                <div className="flex items-center justify-center relative w-full  mt-4">
                    <div className="w-full px-5 py-2 overflow-x-scroll scroll whitespace-nowrap space-x-4">
                        <button onClick={() => handleCategoryClick("")} className="product-category">
                            All
                        </button>
                        <button onClick={() => handleCategoryClick("organic")} className="product-category">
                            Organic
                        </button>
                        <button onClick={() => handleCategoryClick("food")} className="product-category">
                            Food
                        </button>
                        <button onClick={() => handleCategoryClick("electronic")} className="product-category">
                            Electronic
                        </button>
                        <button onClick={() => handleCategoryClick("house")} className="product-category">
                            House
                        </button>
                        <button onClick={() => handleCategoryClick("pet")} className="product-category">
                            Pet
                        </button>
                    </div>
                </div>
            </div>

            <Products filteredProducts={filteredProducts} />

        </>
    );
}
