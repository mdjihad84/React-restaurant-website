const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 fixed top-0 w-full z-40">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">BISTRO BOSS</h3>
                    <h4 className="text-sm">Restaurant</h4>
                </div>
                
                {/* Mobile Navigation */}
                <nav className="block md:hidden mt-4">
                    <ul className="flex flex-col space-y-2 text-center">
                        <li><a href="#" className="hover:text-gray-300 text-white">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Shop</a></li>
                    </ul>
                </nav>
                
                {/* Hide this section on small devices */}
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300">Our Shop</a></li>
                    </ul>
                    <img src="/public/Images/Header.png" alt="Icon" className="w-8 h-8" />
                    <div className="flex items-center space-x-2">
                        <h4 className="hidden md:block">Sign Out</h4>
                        <i className="fa-solid fa-user text-xl"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;

