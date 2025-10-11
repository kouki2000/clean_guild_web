import { useState, useRef } from 'react';

const QuestsShowcase = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const quests = [
        {
            id: 1,
            category: '初級クエスト',
            categoryColor: 'bg-green-500',
            title: '安らぎの聖域を浄化せよ',
            description: '混沌に侵された寝室に秩序を取り戻せ。安らぎの力が冒険者を待っている。',
            difficulty: '★☆☆☆☆',
            reward: { exp: 100, gold: 50 },
            image: '/images/quests/bedroom.jpeg',
            realTask: '寝室の掃除'
        },
        {
            id: 2,
            category: '初級クエスト',
            categoryColor: 'bg-green-500',
            title: '衣装の魔力を回復せよ',
            description: '洗濯の泉で清められた布を丁寧に畳み、装備庫へ収納するのだ。',
            difficulty: '★☆☆☆☆',
            reward: { exp: 80, gold: 40 },
            image: '/images/quests/laundry.jpeg',
            realTask: '洗濯物を畳む'
        },
        {
            id: 3,
            category: '中級クエスト',
            categoryColor: 'bg-yellow-500',
            title: '魔法の厨房を清めよ',
            description: '調理の魔法陣に溜まった汚れを払い、食材の力を最大限に引き出せ。',
            difficulty: '★★★☆☆',
            reward: { exp: 300, gold: 150 },
            image: '/images/quests/kitchen.jpeg',
            realTask: 'キッチンの掃除'
        },
        {
            id: 4,
            category: '中級クエスト',
            categoryColor: 'bg-yellow-500',
            title: '浄化の間を守護せよ',
            description: '聖なる水の力が宿る場所を穢れから守り、清浄の結界を維持するのだ。',
            difficulty: '★★☆☆☆',
            reward: { exp: 250, gold: 120 },
            image: '/images/quests/toilet.jpeg',
            realTask: 'トイレ掃除'
        },
        {
            id: 5,
            category: '中級クエスト',
            categoryColor: 'bg-yellow-500',
            title: '透視の結界を磨け',
            description: '外界を見通す水晶の壁から塵を取り除き、世界の美しさを取り戻せ。',
            difficulty: '★★★☆☆',
            reward: { exp: 280, gold: 140 },
            image: '/images/quests/window.jpeg',
            realTask: '窓ガラス掃除'
        },
        {
            id: 6,
            category: '上級クエスト',
            categoryColor: 'bg-red-500',
            title: '城塞全域の浄化作戦',
            description: '汝の居城すべてを混沌から解放せよ。これは真の勇者への試練なり。',
            difficulty: '★★★★★',
            reward: { exp: 1000, gold: 500 },
            image: '/images/quests/whole-house.jpeg',
            realTask: '家全体の大掃除'
        },
        {
            id: 7,
            category: '上級クエスト',
            categoryColor: 'bg-red-500',
            title: '水源の三聖域制覇',
            description: '風呂・洗面台・浄化の間、水の力が宿る三つの聖域を完全浄化せよ。',
            difficulty: '★★★★☆',
            reward: { exp: 800, gold: 400 },
            image: '/images/quests/bathroom.jpeg',
            realTask: '水回り全体の掃除'
        },
        {
            id: 8,
            category: 'デイリークエスト',
            categoryColor: 'bg-blue-500',
            title: '混沌の欠片を封印せよ',
            description: '日々生まれる混沌の残骸を集め、所定の場所に封印するのだ。',
            difficulty: '★☆☆☆☆',
            reward: { exp: 50, gold: 30 },
            image: '/images/quests/trash.jpeg',
            realTask: 'ゴミ出し'
        },
        {
            id: 9,
            category: 'デイリークエスト',
            categoryColor: 'bg-blue-500',
            title: '食の器を聖別せよ',
            description: '食事の儀式に使われた器を清め、次なる食の魔法に備えよ。',
            difficulty: '★☆☆☆☆',
            reward: { exp: 60, gold: 35 },
            image: '/images/quests/dishes.jpeg',
            realTask: '食器洗い'
        },
        {
            id: 10,
            category: 'ウィークリークエスト',
            categoryColor: 'bg-purple-500',
            title: '保存の魔法庫を整理せよ',
            description: '時の力に侵された食材を取り除き、新鮮な魔力を保て。',
            difficulty: '★★☆☆☆',
            reward: { exp: 220, gold: 110 },
            image: '/images/quests/fridge.jpeg',
            realTask: '冷蔵庫整理'
        },
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -400 : 400;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* 背景画像 */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/backgrounds/quest-board-bg.jpeg')" }}
            >
                {/* 暗めのオーバーレイでテキストを読みやすく */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
            </div>

            {/* 装飾的なオーバーレイ（オプション） */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-8xl">⚔️</div>
                <div className="absolute top-40 right-20 text-8xl">🏰</div>
                <div className="absolute bottom-20 left-1/4 text-8xl">🛡️</div>
                <div className="absolute bottom-40 right-1/3 text-8xl">⭐</div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* セクションヘッダー */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
                        ⚔️ クエスト一覧 ⚔️
                    </h2>
                    <p className="text-xl text-white mb-2 drop-shadow-md">
                        日常の掃除がRPGのクエストに！
                    </p>
                    <p className="text-gray-200 drop-shadow-md">
                        様々な難易度のクエストで経験値とゴールドを獲得しよう
                    </p>
                </div>

                {/* スクロール可能なカードコンテナ */}
                <div className="relative">
                    {/* 左スクロールボタン */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:bg-amber-100 transition-all duration-300 hover:scale-110"
                            aria-label="左にスクロール"
                        >
                            ←
                        </button>
                    )}

                    {/* カードコンテナ */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScrollButtons}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {quests.map((quest) => (
                            <div
                                key={quest.id}
                                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* カードヘッダー */}
                                <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                    <img
                                        src={quest.image}
                                        alt={quest.title}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* カテゴリータグ */}
                                    {/* <div className={`absolute top-4 left-0 ${quest.categoryColor} text-white px-4 py-1 text-sm font-bold shadow-lg z-10`}>
                                        {quest.category}
                                    </div> */}

                                    {/* 難易度 */}
                                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold z-10">
                                        {quest.difficulty}
                                    </div>
                                </div>

                                {/* カード本体 */}
                                <div className="p-6">
                                    {/* タイトル */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {quest.title}
                                    </h3>

                                    {/* 実際のタスク */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-500">📍 実際のタスク:</span>
                                        <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                                            {quest.realTask}
                                        </span>
                                    </div>

                                    {/* 説明 */}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {quest.description}
                                    </p>

                                    {/* 報酬 */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-1">
                                            <span className="text-lg">✨</span>
                                            <span className="text-sm font-bold text-blue-600">
                                                +{quest.reward.exp}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-lg">💰</span>
                                            <span className="text-sm font-bold text-yellow-600">
                                                +{quest.reward.gold}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 右スクロールボタン */}
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:bg-amber-100 transition-all duration-300 hover:scale-110"
                            aria-label="右にスクロール"
                        >
                            →
                        </button>
                    )}
                </div>

                {/* 追加のCTA */}
                <div className="text-center mt-12">
                    <p className="text-white mb-4 drop-shadow-md">
                        これらのクエストはほんの一部！アプリでもっと多くのクエストに挑戦しよう
                    </p>
                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                        🎮 今すぐ冒険を始める
                    </button>
                </div>
            </div>

            {/* CSSハック：スクロールバーを非表示 */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default QuestsShowcase;