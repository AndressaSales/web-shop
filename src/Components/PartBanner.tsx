import banner from "../assets/banner.png"

export default function PartBanner(){
    return(
        <div className="bg-gray-100 pt-40">
            <div className="relative max-w-7xl mx-auto pt-28 md:rounded-2xl bg-cover bg-center h-[550px] md:h-[600px]" style={{backgroundImage: `url(${banner})`}}>
                <div className="absolute inset-0 bg-[#000] md:rounded-2xl bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-[#fff] px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4  ">Descubra Seu Estilo</h1>
                        <p className="text-lg md:text-xl mb-6">Compre as últimas tendências e encontre seu look perfeito </p>
                        <button className="bg-[#f00] hover:bg-red-600 text-[#fff] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">Compre Agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}