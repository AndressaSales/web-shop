export default function MultBanner(){
    return(
        <div className="bg-gray-100 py-10">
            <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">

                <div className="h-[250px] relative">
                    <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
                        <h2 className="text-[#fff] text-2xl font-bold">Novidades  para Você</h2>
                        <button className="mt-2 px-3 py-1 bg-[#fff] text-green-800 rounded-md shadow hover:bg-green-200">Descubra</button>
                    </div>
                </div>

                <div className="relative h-[250px]">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <div className="absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center justify-center">
                        <h2 className="text-[#fff] text-2xl font-bold">Oferta Limitada</h2>
                    </div>
                </div>

                <div className="relative h-[250px] col-span-1 md:col-span-2">
                    <img src="https://images.pexels.com/photos/581339/pexels-photo-581339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <div className="bg-yellow-800 absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center rounded-lg ">
                        <h2 className="text-[#fff] text-4xl font-bold">Liquidação de Temporada</h2>
                        <p className="text-[#fff] text-xg">Até 70% de Desconto</p>
                        <button className="text-[#fff] bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md">Compre Agora</button>
                    </div>
                </div>

                <div className="relative h-[250px] col-span-1 md:col-span-2">

                    <img src="https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    <div className="inset-0 flex flex-col items-center justify-center rounded-lg bg-opacity-50 bg-orange-800 absolute">
                        <h2 className="text-[#fff] text-4xl font-bold">Liquidação de Temporada</h2>
                        <p className="text-[#fff] text-xg">Até 70% de Desconto</p>
                        <button className="text-[#fff] bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md">Compre Agora</button>
                    </div>

                </div>

                <div className="relative h-[250px]">
                    <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full rounded-lg shadow-md object-cover" />
                    <div className="absolute inset-0 bg-opacity-50 justify-center items-center bg-blue-500 rounded-lg flex flex-col">
                        <h2 className="text-[#fff] text-2xl font-bold">Oferta Limitada</h2>
                    </div>
                </div>

                <div className="relative h-[250px]">
                    <img src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=600"  className="w-full  h-full object-cover rounded-lg shadow-lg"/>
                    <div className="absolute flex flex-col bg-gray-800 justify-center items-center inset-0 bg-opacity-50 rounded-lg">
                        <h2 className="text-[#fff] text-2xl font-bold">Novidades  para Você</h2>
                        <button className="mt-2 px-3 py-1 bg-[#fff] text-green-800 rounded-md shadow hover:bg-green-200">Descubra</button>
                    </div>
                </div>

            </div>
        </div>
    )
}