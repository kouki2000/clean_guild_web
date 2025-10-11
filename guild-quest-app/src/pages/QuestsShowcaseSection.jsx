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
            icon: '🛏️',
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
            icon: '👕',
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
            icon: '🍳',
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
            icon: '🚽',
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
            icon: '🪟',
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
            icon: '🏰',
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
            icon: '💧',
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
            icon: '🗑️',
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
            icon: '🍽️',
            realTask: '食器洗い'
        },
        {
            id: 10,
            category: 'ウィークリークエスト',
            categoryColor: 'bg-purple-500',
            title: '休息の布を更新せよ',
            description: '週に一度、安らぎの聖域に新たな力を宿らせ、回復の魔力を高めよ。',
            difficulty: '★★☆☆☆',
            reward: { exp: 200, gold: 100 },
            icon: '✨',
            realTask: 'シーツ交換'
        },
        {
            id: 11,
            category: 'ウィークリークエスト',
            categoryColor: 'bg-purple-500',
            title: '保存の魔法庫を整理せよ',
            description: '時の力に侵された食材を取り除き、新鮮な魔力を保て。',
            difficulty: '★★☆☆☆',
            reward: { exp: 220, gold: 110 },
            icon: '🧊',
            realTask: '冷蔵庫整理'
        },
        {
            id: 12,
            category: 'スペシャルクエスト',
            categoryColor: 'bg-pink-500',
            title: '四季の大祓い儀式',
            description: '季節の変わり目に行われる伝統の儀式。城塞に溜まった厄を完全に祓え！',
            difficulty: '★★★★★',
            reward: { exp: 2000, gold: 1000 },
            icon: '🌸',
            realTask: '季節の大掃除'
        }
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
        <section className="relative py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-8xl">⚔️</div>
                <div className="absolute top-40 right-20 text-8xl">🏰</div>
                <div className="absolute bottom-20 left-1/4 text-8xl">🛡️</div>
                <div className="absolute bottom-40 right-1/3 text-8xl">⭐</div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* セクションヘッダー */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                        ⚔️ クエスト一覧 ⚔️
                    </h2>
                    <p className="text-xl text-gray-700 mb-2">
                        日常の掃除がRPGのクエストに！
                    </p>
                    <p className="text-gray-600">
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
                                <div className="relative h-40 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                                    <div className="text-8xl">{quest.icon}</div>

                                    {/* カテゴリータグ */}
                                    <div className={`absolute top-4 left-0 ${quest.categoryColor} text-white px-4 py-1 text-sm font-bold shadow-lg`}>
                                        {quest.category}
                                    </div>

                                    {/* 難易度 */}
                                    <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
                                        {quest.difficulty}
                                    </div>
                                </div>

                                {/* カード本体 */}
                                <div className="p-6">
                                    {/* タイトル */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {quest.title}
                                    </h3>

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
                    <p className="text-gray-600 mb-4">
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