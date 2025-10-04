const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      <div className="absolute inset-0 bg-cover bg-center w-full h-full" style={{ backgroundImage: 'url(/images/hero/cleaning_with_robot.jpeg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>
      <header className="relative z-20 w-full">
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg">⚔️</div>
              <span className="text-lg sm:text-2xl font-bold text-white tracking-tight">GUILD QUEST</span>
            </div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-white font-semibold">
              <a href="#" className="hover:text-amber-300 transition-colors text-sm xl:text-base">HOME</a>
              <a href="#" className="hover:text-amber-300 transition-colors text-sm xl:text-base">QUESTS</a>
              <a href="#" className="hover:text-amber-300 transition-colors text-sm xl:text-base">MAP</a>
              <a href="#" className="hover:text-amber-300 transition-colors relative text-sm xl:text-base">STATS<span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">2</span></a>
              <button className="px-3 py-1.5 xl:px-4 xl:py-2 bg-white text-purple-600 rounded-lg hover:bg-amber-300 hover:text-white transition-all font-bold text-sm xl:text-base">🌐 JP</button>
            </div>
            <button className="lg:hidden text-white p-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </nav>
      </header>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="text-center max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-semibold mb-6 sm:mb-8"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span><span className="hidden sm:inline">オンライン中の冒険者: 1,234名</span><span className="sm:hidden">冒険者: 1,234名</span></div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">GUILD QUEST</h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-light mb-8 sm:mb-12 tracking-wide">すべてはアソビのために</p>
          <button className="group relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl font-bold text-white border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-2xl"><span className="relative z-10 flex items-center gap-2 sm:gap-3">クエストを始める<svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></span><div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div></button>
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="text-white"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">1,234</div><div className="text-xs sm:text-sm opacity-80">制覇クエスト</div></div>
            <div className="text-white"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">89%</div><div className="text-xs sm:text-sm opacity-80">平均達成率</div></div>
            <div className="text-white"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">567h</div><div className="text-xs sm:text-sm opacity-80">総掃除時間</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;