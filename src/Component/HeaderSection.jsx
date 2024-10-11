const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 fixed top-0 w-full z-40">
            <div className="flex justify-between items-center">
                <div className="hidden md:block leading-8">
                    <h3 className="text-[32px] font-black">BISTRO BOSS</h3>
                    <h4 className="text-2xl font-normal tracking-widest">Restaurant</h4>
                </div>
                {/* Mobile Navigation */}
                <nav className="block md:hidden mt-4">
                    <ul className="flex space-x-4 text-center">
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Dashboard</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Our Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Our Shop</a></li>
                    </ul>
                </nav>

                {/* Large devices */}
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Dashboard</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Our Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300 text-xl font-extrabold">Our Shop</a></li>
                    </ul>
                    <img src="/public/Images/Header.png" alt="Icon" className="w-8 h-8" />
                    <div className="flex items-center space-x-2">
                        <h4 className="hidden md:block text-xl font-extrabold">Sign Out</h4>
                        <i className="fa-solid fa-user text-xl"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;

