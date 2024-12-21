import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ResponsiveNavbar({menu, setMenu}){
    return(
        <div className={`${menu ? "left-0" : "left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-[#fff] px-8 pb-6 pt-16 text-[#000] md:hidden rounded-r-xl shadow-md`}>
            <div>
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Olá User</h1>
                        <h1 className="text-sm text-slate-500">User Premium</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="flex flex-col space-y-4 text-xl text-[#f00]">
                        <Link to='/'>Home</Link>
                        <Link to='/mens'>Homens</Link>
                        <Link to='/womens'>Mulheres</Link>
                        <Link to='/kids'>Kids</Link>
                        <Link to='/login'>Login</Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}