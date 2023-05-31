import {Bars4Icon, EllipsisVerticalIcon, HeartIcon, HomeIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Menu(){
    const activeMenu = "p-2 bg-slate-500 rounded-full -mt-5 text-yellow-500 -m-2"
    const passiveMenu = "menuicons"

    const router = useRouter();
    const {asPath:pathname} = router;
    return (
        <>
            <div className=" sticky bottom-5 z-10  h-[8vh] bg-slate-400 px-16 rounded-3xl ">
                 <div className=" flex  justify-between  items-center pt-3">
                     <Link className={pathname === '/' ? activeMenu : passiveMenu} href="/">
                         <HomeIcon className="menuicons " />
                     </Link>
                     <Link className={pathname === '/productlist' ? activeMenu : passiveMenu} href="/productlist">
                         <Bars4Icon className="menuicons" />
                     </Link>
                     <Link className={pathname === '/favorite' ? activeMenu : passiveMenu} href="/favorite">
                         <HeartIcon className="menuicons"/>
                     </Link>
                     <Link className={pathname === '/profile' ? activeMenu : passiveMenu} href="/profile">
                         <EllipsisVerticalIcon className="menuicons" />
                     </Link>

                 </div>
            </div>

        </>
    )
}