import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-black text-white py-4 px-4 md:px-6 fixed top-0 w-full z-40 opacity-90">
            <div className="flex justify-between items-center">
                {/* Logo and title for medium and up screens */}
                <div className="hidden md:block leading-8">
                    <h3 className="text-[24px] md:text-[32px] font-black">BISTRO BOSS</h3>
                    <h4 className="text-lg md:text-2xl font-normal tracking-widest">Restaurant</h4>
                </div>

                {/* Mobile Navigation */}
                <nav className="block md:hidden">
                    <ul className="flex space-x-2 sm:space-x-4 text-center">
                        <li><Link to="/" className="text-yellow-400 text-base sm:text-xl font-extrabold">Home</Link></li>
                        <li><Link to="" className="hover:text-gray-300 text-base sm:text-xl font-extrabold">Contact Us</Link></li>
                        <li><Link to="" className="hover:text-gray-300 text-base sm:text-xl font-extrabold">Dashboard</Link></li>
                        <li><Link to="" className="hover:text-gray-300 text-base sm:text-xl font-extrabold">Our Menu</Link></li>
                        <li><Link to="" className="hover:text-gray-300 text-base sm:text-xl font-extrabold">Our Shop</Link></li>
                    </ul>
                </nav>

                {/* Large devices */}
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-[#EEFF25] hover:text-gray-300 text-xl font-extrabold">Home</Link></li>
                        <li><Link to="/FooterSection" className="hover:text-gray-300 text-xl font-extrabold">Contact Us</Link></li>
                        <li><Link to="/FromSection" className="hover:text-gray-300 text-xl font-extrabold">Dashboard</Link></li>
                        <li><Link to="/ShefSection" className="hover:text-gray-300 text-xl font-extrabold">Our Menu</Link></li>
                        <li><Link to="/MenuSection" className="hover:text-gray-300 text-xl font-extrabold">Our Shop</Link></li>
                    </ul>
                    <img src="/Images/Header.png" alt="Icon" className="w-6 h-6 md:w-8 md:h-8" />
                    <div className="flex items-center space-x-2">
                        <h4 className="hidden lg:block text-xl font-extrabold">Sign Out</h4>
                        <i className="fa-solid fa-user text-lg md:text-xl"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
