import { usePlatform } from '../hooks/usePlatform';
import { questsData } from '../data/questsData';

const QuestsPage = () => {
    const { isApp } = usePlatform();

    return (
        <div className="relative min-h-screen">
            {/* 固定背景画像 */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/quests/bulletin_board.jpeg)`,
                    backgroundAttachment: 'fixed',
                }}
            >
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
            </div>

            {/* コンテンツ（スクロール可能） */}
            <div className={`relative z-10 ${isApp ? 'pb-20' : ''}`}>
                {/* ヘッダー */}
                <div className="container mx-auto px-6 pt-8 pb-6">
                    <h1 className="text-4xl font-bold text-amber-200 mb-2 drop-shadow-lg" style={{ fontFamily: 'serif' }}>
                        ⚔️ クエスト掲示板
                    </h1>
                    <p className="text-amber-100/80 drop-shadow">
                        掃除クエストを選んで冒険に出よう
                    </p>
                </div>

                {/* クエストリスト */}
                <div className="container mx-auto px-6 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {questsData.map((quest) => (
                            <QuestCard key={quest.id} quest={quest} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// クエストカードコンポーネント（羊皮紙風）
const QuestCard = ({ quest }) => {
    // 状態に応じた色
    const statusColors = {
        urgent: 'text-red-600',
        normal: 'text-amber-700',
        completed: 'text-green-700',
    };

    const statusLabels = {
        urgent: '🔥 緊急クエスト',
        normal: '📋 通常クエスト',
        completed: '✅ 完了',
    };

    return (
        <div className="relative group cursor-pointer">
            {/* 羊皮紙風の背景 */}
            <div
                className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
            >
                {/* 焼けた縁のエフェクト */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 10% 10%, rgba(139, 69, 19, 0.3) 0%, transparent 20%), radial-gradient(circle at 90% 10%, rgba(101, 67, 33, 0.3) 0%, transparent 20%), radial-gradient(circle at 10% 90%, rgba(120, 81, 45, 0.3) 0%, transparent 20%), radial-gradient(circle at 90% 90%, rgba(139, 69, 19, 0.3) 0%, transparent 20%)',
                    }}
                />

                {/* シミ・汚れのテクスチャ */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(139, 69, 19, 0.4) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />

                {/* コンテンツ */}
                <div className="relative p-6">
                    {/* タイトル部分 */}
                    <div className="text-center mb-4 pb-3 border-b-2 border-amber-800/30">
                        <h2 className="text-2xl font-bold text-amber-900 mb-1" style={{ fontFamily: 'serif', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                            {quest.name}
                        </h2>
                        <div className={`text-sm font-bold ${statusColors[quest.status]}`}>
                            {statusLabels[quest.status]}
                        </div>
                    </div>

                    {/* アイコン */}
                    <div className="text-center text-6xl mb-4 drop-shadow-lg">
                        {quest.icon}
                    </div>

                    {/* 情報セクション */}
                    <div className="space-y-3 text-amber-900">
                        {/* 目標 */}
                        <div className="border-l-4 border-amber-700 pl-3">
                            <div className="text-xs font-bold text-amber-800 mb-1" style={{ fontFamily: 'serif' }}>目標:</div>
                            <div className="text-sm leading-relaxed">{quest.description}</div>
                        </div>

                        {/* 地点 */}
                        <div className="border-l-4 border-amber-700 pl-3">
                            <div className="text-xs font-bold text-amber-800 mb-1" style={{ fontFamily: 'serif' }}>地点:</div>
                            <div className="text-sm">📍 {quest.area}</div>
                        </div>

                        {/* 制限時間 */}
                        <div className="border-l-4 border-amber-700 pl-3">
                            <div className="text-xs font-bold text-amber-800 mb-1" style={{ fontFamily: 'serif' }}>制限:</div>
                            <div className="text-sm">⏱️ {quest.estimatedTime}分以内に完成</div>
                        </div>

                        {/* 難易度 */}
                        <div className="border-l-4 border-amber-700 pl-3">
                            <div className="text-xs font-bold text-amber-800 mb-1" style={{ fontFamily: 'serif' }}>難易度:</div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-lg ${i < quest.difficulty ? 'text-amber-600' : 'text-gray-400'
                                            }`}
                                    >
                                        ⭐
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 報酬 */}
                        <div className="mt-4 pt-3 border-t-2 border-amber-800/30">
                            <div className="text-xs font-bold text-amber-800 mb-2" style={{ fontFamily: 'serif' }}>奨励:</div>
                            <div className="flex justify-around items-center">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-700">+{quest.exp}</div>
                                    <div className="text-xs text-amber-800">経験値</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-600">+{quest.exp * 5}</div>
                                    <div className="text-xs text-amber-800">金貨</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 受注ボタン */}
                    <button className="w-full mt-4 py-2 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold rounded shadow-lg transition-all duration-200 transform hover:scale-105">
                        クエスト受注
                    </button>
                </div>

                {/* ホバー時の光エフェクト */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/0 via-yellow-200/0 to-yellow-200/0 group-hover:from-yellow-200/20 group-hover:via-transparent group-hover:to-yellow-200/20 transition-all duration-500 pointer-events-none rounded-lg" />
            </div>

            {/* 影 */}
            <div className="absolute inset-0 bg-black/30 blur-xl -z-10 transform translate-y-2" />
        </div>
    );
};

export default QuestsPage;