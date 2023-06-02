export default function Login(){

    return(
        <>
            <div className="mt-24">
                <h1 className="text-6xl text-center text-slate-400">login</h1>
            </div>
            <div className="mt-10 flex justify-center rounded-3xl">
                <input
                    placeholder="Email"
                    className="w-[80%] h-16 bg-yellow-500 overflow-hidden rounded-3xl px-7
                    placeholder:text-white"/>
            </div>
            <div className="mt-5 flex justify-center rounded-3xl">
                <input
                    placeholder="Password"
                    className="w-[80%] h-16 bg-yellow-500 overflow-hidden rounded-3xl px-7
                    placeholder:text-white"/>
            </div>
            <div className="flex justify-center">

                <button className="bg-app-blue hover:bg-app-blue/70 cursor-pointer text-white w-[50%] h-16 rounded-3xl mt-5 ">
                    Login
                </button>
            </div>

        </>
    )
}