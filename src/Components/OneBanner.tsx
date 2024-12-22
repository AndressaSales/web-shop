import banner from "../assets/background-one.jpg"

export default function OneBanner(){

    return(
        <div className="bg-gray-100 py-24">
            <div className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover h-[550px] md:h-[600px]" style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                <div className="absolute inset-0 bg-[#000] md:rounded-2xl bg-opacity-50 flex flex-col items-center justify-center">
                    <div className="text-center text-[#fff] px-4">
                        <h1 className="text-3xl md:text-5xl ld:text-6xl font-bols mb-4">Coleção de Inverno 2024</h1>
                        <p className="text-lg md:text-xl mb-6">Descubra as tendências mais quentes para a estação. Oferta por tempo limitado: 20% de desconto em todas as novidades</p>
                        <button className="bg-red-500 hover:bg-red-600 text-[#fff] font-semibold py-2 px-4 md:px-6 rounded-lg transition duration-300">Compre Agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}