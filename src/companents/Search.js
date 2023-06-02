import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { products } from "@/data";
import SearchResult from "@/companents/SearchResult";
import Link from "next/link";

let timeout = null;

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);



    {/* Search yaparken bekleme veriyoruz. Performans için. Arama yapmaya başladıktan belli
     bir süre sonra aramayı çalıştırır. */}
    const onSearch = (searchText) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            if (searchText.trim() === "") {
                setShowResults(false);
            } else {
                const results = products.filter(product =>
                    product.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setSearchResults(results);
                setShowResults(true);
            }
        }, 500);
    };

    return (
        <div className="relative">
            <div className="flex justify-center rounded-full w-[90%] mx-auto py-5 text-md bg-blue-950 gap-3 ">
                <MagnifyingGlassIcon className="text-white w-6 " />
                <input
                    type="text"
                    className="w-[80%] bg-blue-950 outline-none text-white"
                    placeholder="Search Products or store"
                    onChange={(e) => onSearch(e.target.value)}
                />

                {showResults && (
                    <div className="search-results absolute bg-slate-200 top-16  w-[80%] rounded space-y-2 px-3">
                        {searchResults.map(result => (
                            <Link key={result.id} href={'/'}>
                                {result.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
