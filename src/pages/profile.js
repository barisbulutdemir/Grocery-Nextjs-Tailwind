    import Menu from "@/companents/Menu";
    import Login from "@/companents/Login";
    import {CameraIcon} from "@heroicons/react/24/outline";

    export default function Profile(){
        let kullaniciGirisYaptiMi = true;  // bu değeri kullanıcının oturum durumuna göre ayarlayın

        return (


            <>
                {kullaniciGirisYaptiMi ? (
                    <div>
                        {/* Kullanıcı oturum açmışsa bu div gösterilir */}
                        <div>
                            <div className="mt-10 mr-10">
                                <p className="text-right cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300">  Log Out</p>

                            </div>
                            <div className="text-center mt-15">
                                <h1 className="text-4xl"> Selosh</h1>
                                <div className="h-36 w-36 mx-auto rounded-full border bg-yellow-500 mt-10 flex items-center justify-center">
                                    <div className=" h-12 w-12 cursor-pointer hover:text-white">
                                        <CameraIcon className=""/>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h1 className="text-right  mr-10 italic">Address:</h1>
                                <p className="text-center underline">Caferağa 87 çiğdem mahallesi. Beykoz - İstanbul</p>
                                <p className="text-right mr-10 italic cursor-pointer   hover:underline hover:text-blue-900"> + add new adress</p>
                            </div>
                            <div className="mt-10 ml-5 bg-slate-200 rounded-md m-10 p-4 items-center ">
                                <h3 className=""> Last Orders:</h3>
                                <div className="mt-5  ">
                                    <p>30.05.2023</p>
                                    <div className="flex space-x-5 ml-20">
                                        <p>$ 123.20</p>
                                        <p> Caferağa 87 no:2 Beykoz</p>
                                    </div>
                                </div>
                                <div className="mt-5  ">
                                    <p>30.05.2023</p>
                                    <div className="flex space-x-5 ml-20">
                                        <p>$ 123.20</p>
                                        <p> Caferağa 87 no:2 Beykoz</p>
                                    </div>
                                </div>
                                <div className="mt-5  ">
                                    <p>30.05.2023</p>
                                    <div className="flex space-x-5 ml-20">
                                        <p>$ 123.20</p>
                                        <p> Caferağa 87 no:2 Beykoz</p>
                                    </div>
                                </div>
                                <div className="mt-5  ">
                                    <p>30.05.2023</p>
                                    <div className="flex space-x-5 ml-20">
                                        <p>$ 123.20</p>
                                        <p> Caferağa 87 no:2 Beykoz</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="mt-10">
                            <Menu />
                        </div>


                    </div>
                ) : (
                    <div>
                        <Login />
                    </div>
                )}
                {

                }


            </>
        )
    }