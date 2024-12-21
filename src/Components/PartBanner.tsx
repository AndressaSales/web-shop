import banner from "../assets/banner.png"

export default function PartBanner(){
    return(
        <div className="bg-gray-100 pt-16 lg:pt-24">
            <div className="pt-28 relative max-w-7xl mx-auto md:rounded-2xl bg-cover bg-center h-[550px] md:h-[600px]" style={{ backgroundPosition: 'top' ,backgroundImage: `url(${banner})`}}>

            </div>
        </div>
    )
}