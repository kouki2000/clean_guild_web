import { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5"
            >
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            <div className={`fixed inset-0 bg-gray-900 z-40 transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="h-full flex flex-col items-center justify-center relative">
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                            ⚔️
                        </div>
                        <span className="text-xl font-bold text-white">GUILD QUEST</span>
                    </div>

                    <nav className="space-y-8 text-center">
                        <Link to="/" onClick={closeMenu} className="block text-4xl sm:text-5xl font-bold text-amber-400 hover:text-amber-300 transition-all">
                            HOME
                        </Link>
                        <Link to="/quests" onClick={closeMenu} className="block text-4xl sm:text-5xl font-bold text-white hover:text-amber-400 transition-all">
                            QUESTS
                        </Link>
                        <Link to="/map" onClick={closeMenu} className="block text-4xl sm:text-5xl font-bold text-white hover:text-amber-400 transition-all">
                            MAP
                        </Link>
                        <Link to="/stats" onClick={closeMenu} className="block text-4xl sm:text-5xl font-bold text-white hover:text-amber-400 transition-all relative inline-block">
                            STATS
                            <span className="absolute -top-2 -right-8 bg-amber-500 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center border-2 border-white">2</span>
                        </Link>
                    </nav>

                    <div className="absolute bottom-12 flex gap-6">
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                            <span className="text-white text-xl">𝕏</span>
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                            <span className="text-white text-xl">📷</span>
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                            <span className="text-white text-xl">💼</span>
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                            <span className="text-white text-xl">▶️</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;