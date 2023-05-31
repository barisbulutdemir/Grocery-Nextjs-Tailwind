export default function ProductMenu(){
    return(
        <>

            <div>
                <div className="flex items-center justify-center relative w-full  mt-4">
                    <div className="w-full px-5 py-2 overflow-x-scroll scroll whitespace-nowrap space-x-4" >
                        <button className="product-category">Organic</button>
                        <button className="product-category">Food</button>
                        <button className="product-category">Electronic</button>
                        <button className="product-category">House</button>
                        <button className="product-category">Pet</button>
                    </div>
                </div>
            </div>


        </>
    )
}