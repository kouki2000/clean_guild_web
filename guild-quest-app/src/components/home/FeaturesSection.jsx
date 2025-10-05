const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'クエスト管理',
      description: '掃除タスクをRPG風のクエストとして管理',
      imagePath: '/images/features/quest.png',
      bgColor: 'from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'レベルシステム',
      description: '掃除するたびに経験値を獲得してレベルアップ',
      imagePath: '/images/features/level.png',
      bgColor: 'from-amber-500 to-orange-600'
    },
    {
      id: 3,
      title: 'エリアマップ',
      description: '家全体を見取り図で視覚的に管理',
      imagePath: '/images/features/map.png',
      bgColor: 'from-blue-500 to-cyan-600'
    },
    {
      id: 4,
      title: 'タイマー機能',
      description: 'クエスト実行中の時間を計測',
      imagePath: '/images/features/timer.png',
      bgColor: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      title: '統計分析',
      description: '掃除習慣を可視化して改善',
      imagePath: '/images/features/stats.png',
      bgColor: 'from-pink-500 to-rose-600'
    },
    {
      id: 6,
      title: '達成報酬',
      description: 'クエスト達成で報酬とバッジを獲得',
      imagePath: '/images/features/reward.png',
      bgColor: 'from-violet-500 to-purple-600'
    },
    {
      id: 7,
      title: 'リマインダー',
      description: '定期的な通知で習慣化をサポート',
      imagePath: '/images/features/reminder.png',
      bgColor: 'from-red-500 to-orange-500'
    },
    {
      id: 8,
      title: 'カスタマイズ',
      description: 'アバターやテーマを自由にカスタマイズ',
      imagePath: '/images/features/custom.png',
      bgColor: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="relative text-white py-16 sm:py-24 w-full overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(./images/features/reception.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">ベネフィット</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">掃除をゲーム化して、毎日の習慣を楽しく継続</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div key={feature.id} className="group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:bg-opacity-10 transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-20 rounded-2xl sm:rounded-3xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl sm:text-4xl lg:text-5xl">🎮</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-center">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-amber-400/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button className="group relative px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-white border-3 border-white rounded-xl sm:rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">今すぐ始める<svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;