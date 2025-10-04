import { useState } from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero/guild.jpeg)'
        }}
      >
        {/* オーバーレイ(画像を少し暗くして文字を読みやすく) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* ヘッダー */}
      <header className="relative z-20">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                ⚔️
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">GUILD QUEST</span>
            </div>

            {/* ナビゲーション */}
            <div className="hidden md:flex items-center gap-8 text-white font-semibold">
              <a href="#" className="hover:text-amber-300 transition-colors">HOME</a>
              <a href="#" className="hover:text-amber-300 transition-colors">QUESTS</a>
              <a href="#" className="hover:text-amber-300 transition-colors">MAP</a>
              <a href="#" className="hover:text-amber-300 transition-colors relative">
                STATS
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  2
                </span>
              </a>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-amber-300 hover:text-white transition-all font-bold">
                🌐 JP
              </button>
            </div>

            {/* モバイルメニューボタン */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center" style={{minHeight: 'calc(100vh - 100px)'}}>
        <div className="text-center max-w-4xl">
          {/* ギルドバッジ */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            オンライン中の冒険者: 1,234名
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-6 animate-fade-in-up tracking-tight">
            GUILD QUEST
          </h1>
          
          <p className="text-3xl md:text-5xl text-white font-light mb-12 animate-fade-in-delay tracking-wide">
            すべてはアソビのために
          </p>

          {/* CTAボタン */}
          <button className="group relative px-10 py-5 text-xl font-bold text-white border-4 border-white rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-2xl animate-fade-in-delay-2">
            <span className="relative z-10 flex items-center gap-3">
              クエストを始める
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          {/* 統計情報 */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delay-3">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1,234</div>
              <div className="text-sm opacity-80">制覇されたクエスト</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-sm opacity-80">平均達成率</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">567h</div>
              <div className="text-sm opacity-80">総掃除時間</div>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-xs font-semibold">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* SNSアイコン(右側固定) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 space-y-4 hidden lg:block">
        {[
          { name: 'X', icon: '𝕏' },
          { name: 'Instagram', icon: '📷' },
          { name: 'LinkedIn', icon: '💼' },
          { name: 'YouTube', icon: '▶️' }
        ].map(({ name, icon }) => (
          <a
            key={name}
            href="#"
            title={name}
            className="block w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-opacity-40 hover:scale-110 transition-all shadow-lg"
          >
            {icon}
          </a>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-up 1.2s ease-out 0.3s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-up 1.2s ease-out 0.6s backwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1.5s ease-out 0.9s backwards;
        }
      `}</style>
    </div>
  );
};

// デモページ全体
export default function Demo() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      
      {/* 次のセクション */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">開発タイトル</h2>
            <p className="text-xl text-gray-300">現在制覇可能なクエスト</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🔥', title: '台所の洞窟', status: '緊急', color: 'from-red-500 to-orange-500' },
              { icon: '🏠', title: '憩いの広場', status: '進行中', color: 'from-blue-500 to-cyan-500' },
              { icon: '🚿', title: '清めの泉', status: '完了', color: 'from-green-500 to-emerald-500' }
            ].map((quest, i) => (
              <div 
                key={i} 
                className="group relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${quest.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">{quest.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{quest.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{quest.status}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>⏱️ 30分</span>
                    <span>⭐ 50 EXP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}