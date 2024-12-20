import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { MdShoppingCart } from "react-icons/md";

export default function Navbar(){
    return(
        <div className="bg-[#fff] px-4 fixed w-full x-50 shadow-sm top-0 shadow-[#ccc]">
            <div className="max-w-7xl mx-auto py-2 flex px-5 justify-between items-center">
                <Link to='/'><img src={logo} alt="logo" className="md:w-24 w-20" /></Link>

                <div className="flex items-center gap-5">
                    <nav className="hidden md:block">
                        <ul className="flex items-center font-semibold text-xl gap-7">
                            <Link to='/'><li>Home</li></Link> 
                            <Link to='/mens'><li>Homens</li></Link>
                            <Link to='/womens'><li>Mulheres</li></Link>
                            <Link to='/kids'><li>Crianças</li></Link>
                            <Link to='/login'><button className="bg-[#f00] text-[#fff] px-4 rounded-[10px] py-1">Login</button></Link>
                        </ul>
                    </nav>
                    <MdShoppingCart />
                </div>
            </div>
        </div>
    )
}