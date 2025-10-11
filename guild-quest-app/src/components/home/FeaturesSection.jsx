const FeaturesSection = () => {
  const features = [
    {
      icon: '⚔️',
      title: 'RPG風クエスト',
      description: '掃除をゲーム感覚で楽しめる。経験値を稼いでレベルアップ！',
      gradient: 'from-red-600 to-orange-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
      borderColor: 'border-red-300',
      iconBg: 'bg-red-100'
    },
    {
      icon: '🗺️',
      title: '冒険マップ',
      description: '家全体を冒険マップとして可視化。未制覇エリアを一目で確認。',
      gradient: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-300',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '📊',
      title: '統計・分析',
      description: '掃除の記録を分析。習慣化をサポートする詳細なレポート。',
      gradient: 'from-green-600 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-300',
      iconBg: 'bg-green-100'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgrounds/features-bg.jpeg')" }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-orange-900/50 to-amber-900/60"></div>
      </div>

      {/* 装飾的な背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl rotate-12">🏰</div>
        <div className="absolute top-40 right-20 text-9xl -rotate-12">⚔️</div>
        <div className="absolute bottom-20 left-1/4 text-9xl rotate-6">🛡️</div>
        <div className="absolute bottom-40 right-1/4 text-9xl -rotate-6">📜</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            ⚔️ 主な機能 ⚔️
          </h2>
          <p className="text-xl text-amber-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            冒険者を支援する強力な装備
          </p>
        </div>

        {/* 機能カード */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* カード本体 */}
              <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 ${feature.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}>
                {/* 装飾的なコーナー（RPG風） */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-600 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-600 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-600 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-600 rounded-br-2xl"></div>

                {/* アイコン */}
                <div className={`${feature.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-amber-300 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-5xl">{feature.icon}</span>
                </div>

                {/* タイトル */}
                <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text`}>
                  {feature.title}
                </h3>

                {/* 説明 */}
                <p className="text-gray-700 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* 装飾的なライン */}
                <div className="mt-6 flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                </div>
              </div>

              {/* ホバー時の光るエフェクト */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* 追加の説明 */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border-4 border-amber-400">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-bold text-amber-600">🎮 ゲーム感覚</span>で楽しく掃除を習慣化
            </p>
            {/* <p className="text-gray-600">
              レベルアップ、報酬獲得、実績解除など、RPG要素満載！
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;