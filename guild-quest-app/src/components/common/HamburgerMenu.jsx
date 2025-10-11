import { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'ホーム', path: '/', icon: '🏠' },
        { name: '機能紹介', path: '#features', icon: '⚡' },
        { name: 'クエスト', path: '#quests', icon: '⚔️' },
        { name: 'ダウンロード', path: '#download', icon: '📱' },
    ];

    const handleClick = (path) => {
        setIsOpen(false);

        // アンカーリンクの場合はスムーススクロール
        if (path.startsWith('#')) {
            const element = document.querySelector(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* ハンバーガーボタン */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-50 bg-gray-900/80 hover:bg-gray-800/80 backdrop-blur-md text-white p-3 rounded-full shadow-2xl transition-all duration-300"
                aria-label="メニュー"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}
                    />
                </div>
            </button>

            {/* オーバーレイ */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* メニュー */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 shadow-2xl z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-8 pt-24">
                    <nav className="space-y-2">
                        {menuItems.map((item) => (
                            item.path.startsWith('#') ? (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => handleClick(item.path)}
                                    className="flex items-center gap-4 px-6 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-semibold"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => handleClick(item.path)}
                                    className="flex items-center gap-4 px-6 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-semibold"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;