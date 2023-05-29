import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/companents/Header";
import Banner from "@/companents/Banner";
import Recommended from "@/companents/Recommended";
import {popularitems, recommendedItems} from "@/data"
import Popular from "@/companents/Popular";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <div className="bg-slate-100 w-full h-full">
          <Header />
          <Banner />
          <Recommended  recommendedItems={recommendedItems}/>
          <Popular popularitems={popularitems}/>

          </div>


      </>


  )
}
