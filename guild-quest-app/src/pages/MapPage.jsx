import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../hooks/usePlatform';
import { questsData } from '../data/questsData';

const MapPage = () => {
    const { isApp } = usePlatform();
    const navigate = useNavigate();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [hoveredRoom, setHoveredRoom] = useState(null);

    // 各部屋の情報（SVG座標で指定 - 画像サイズ 1200x900 基準）
    const rooms = [
        {
            id: 'living',
            nameJp: 'リビング',
            nameCn: '探险起点',
            icon: '🏠',
            // SVG座標（画像の実際の位置に合わせて調整）
            path: 'M 60 96 L 480 96 L 480 438 L 60 438 Z', // 左上の部屋
            center: { x: 270, y: 267 }, // アイコン表示位置
            quests: questsData.filter(q => q.area === 'リビング'),
        },
        {
            id: 'bedroom',
            nameJp: '寝室',
            nameCn: '神秘宝箱',
            icon: '🛏️',
            path: 'M 540 96 L 900 96 L 900 438 L 540 438 Z', // 中央上の部屋
            center: { x: 720, y: 267 },
            quests: questsData.filter(q => q.area === '寝室'),
        },
        {
            id: 'toilet',
            nameJp: 'トイレ',
            nameCn: '秘密の小部屋',
            icon: '🚽',
            path: 'M 60 450 L 396 450 L 396 828 L 60 828 Z', // 左下の部屋
            center: { x: 228, y: 639 },
            quests: questsData.filter(q => q.area === 'トイレ'),
        },
        {
            id: 'kitchen',
            nameJp: 'キッチン',
            nameCn: '魔法厨房',
            icon: '🔥',
            path: 'M 420 450 L 804 450 L 804 828 L 420 828 Z', // 中央下の部屋
            center: { x: 612, y: 639 },
            quests: questsData.filter(q => q.area === 'キッチン'),
        },
        {
            id: 'bathroom',
            nameJp: '浴室',
            nameCn: '治愈之泉',
            icon: '🚿',
            path: 'M 816 450 L 1140 450 L 1140 828 L 816 828 Z', // 右下の部屋
            center: { x: 978, y: 639 },
            quests: questsData.filter(q => q.area === '浴室'),
        },
        {
            id: 'washroom',
            nameJp: '洗面所',
            nameCn: '清浄之間',
            icon: '🪞',
            path: 'M 936 96 L 1140 96 L 1140 438 L 936 438 Z', // 右上の小部屋
            center: { x: 1038, y: 267 },
            quests: questsData.filter(q => q.area === '洗面所'),
        },
    ];

    // 部屋の状態を計算
    const getRoomStatus = (room) => {
        if (room.quests.length === 0) return 'normal';
        const hasUrgent = room.quests.some(q => q.status === 'urgent');
        const allCompleted = room.quests.every(q => q.status === 'completed');

        if (hasUrgent) return 'urgent';
        if (allCompleted) return 'completed';
        return 'normal';
    };

    const getStatusColor = (status) => {
        const colors = {
            urgent: { fill: 'rgba(239, 68, 68, 0.3)', glow: '#DC2626' },
            normal: { fill: 'rgba(234, 179, 8, 0.3)', glow: '#CA8A04' },
            completed: { fill: 'rgba(34, 197, 94, 0.3)', glow: '#16A34A' },
        };
        return colors[status];
    };

    return (
        <div className="relative min-h-screen">
            {/* 固定背景 */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}images/areas/map.jpeg)`,
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
            </div>

            {/* コンテンツ */}
            <div className={`relative z-10 ${isApp ? 'pb-20' : ''}`}>
                {/* ヘッダー */}
                <div className="container mx-auto px-6 pt-8 pb-6">
                    <h1 className="text-4xl font-bold text-amber-200 mb-2 drop-shadow-lg" style={{ fontFamily: 'serif' }}>
                        🗺️ 冒険マップ
                    </h1>
                    <p className="text-amber-100/80 drop-shadow mb-6">
                        部屋をタップしてクエストを確認しよう
                    </p>

                    {/* 凡例 */}
                    <div className="flex gap-4 mb-6 flex-wrap">
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                            <span className="text-sm text-amber-100">緊急</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                            <span className="text-sm text-amber-100">通常</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                            <span className="text-sm text-amber-100">完了</span>
                        </div>
                    </div>
                </div>

                {/* 冒険マップ（SVG） */}
                <div className="container mx-auto px-6 pb-12">
                    <div className="relative max-w-5xl mx-auto">
                        <svg
                            viewBox="0 0 1200 900"
                            className="w-full h-auto rounded-2xl"
                            style={{
                                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.8))',
                            }}
                        >
                            {/* 背景画像 */}
                            <image
                                href={`${import.meta.env.BASE_URL}images/map/adventure_map.jpeg`}
                                width="1200"
                                height="900"
                                preserveAspectRatio="xMidYMid slice"
                            />

                            {/* 各部屋のインタラクティブエリア */}
                            {rooms.map((room) => {
                                const status = getRoomStatus(room);
                                const colors = getStatusColor(status);
                                const isHovered = hoveredRoom === room.id;

                                return (
                                    <g key={room.id}>
                                        {/* クリック可能エリア */}
                                        <path
                                            d={room.path}
                                            fill={isHovered ? colors.fill.replace('0.3', '0.5') : colors.fill}
                                            stroke={colors.glow}
                                            strokeWidth="3"
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                filter: `drop-shadow(0 0 ${isHovered ? '20' : '10'}px ${colors.glow})`,
                                            }}
                                            onClick={() => setSelectedRoom(room)}
                                            onMouseEnter={() => setHoveredRoom(room.id)}
                                            onMouseLeave={() => setHoveredRoom(null)}
                                        />

                                        {/* クエスト数バッジ */}
                                        {room.quests.length > 0 && (
                                            <>
                                                <circle
                                                    cx={room.center.x + 80}
                                                    cy={room.center.y - 60}
                                                    r="24"
                                                    fill={colors.glow}
                                                    stroke="white"
                                                    strokeWidth="4"
                                                    style={{
                                                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
                                                    }}
                                                />
                                                <text
                                                    x={room.center.x + 80}
                                                    y={room.center.y - 52}
                                                    textAnchor="middle"
                                                    fontSize="20"
                                                    fontWeight="bold"
                                                    fill="white"
                                                >
                                                    {room.quests.length}
                                                </text>
                                            </>
                                        )}

                                        {/* ホバー時の部屋名表示 */}
                                        {isHovered && (
                                            <>
                                                <rect
                                                    x={room.center.x - 60}
                                                    y={room.center.y - 20}
                                                    width="120"
                                                    height="40"
                                                    rx="8"
                                                    fill="rgba(0, 0, 0, 0.8)"
                                                    stroke={colors.glow}
                                                    strokeWidth="2"
                                                />
                                                <text
                                                    x={room.center.x}
                                                    y={room.center.y + 8}
                                                    textAnchor="middle"
                                                    fontSize="18"
                                                    fontWeight="bold"
                                                    fill="white"
                                                >
                                                    {room.nameJp}
                                                </text>
                                            </>
                                        )}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* 座標調整ヒント（開発時のみ表示） */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="mt-4 text-center text-amber-100 text-sm">
                            💡 ヒント: クリック領域がずれている場合は、各部屋の <code>path</code> の座標を調整してください
                        </div>
                    )}
                </div>
            </div>

            {/* 部屋詳細モーダル */}
            {selectedRoom && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedRoom(null)}
                >
                    <div
                        className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 rounded-xl shadow-2xl max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.5)',
                        }}
                    >
                        {/* 焼けた縁 */}
                        <div
                            className="absolute inset-0 pointer-events-none rounded-xl"
                            style={{
                                background: 'radial-gradient(circle at 5% 5%, rgba(139, 69, 19, 0.3) 0%, transparent 15%), radial-gradient(circle at 95% 5%, rgba(101, 67, 33, 0.3) 0%, transparent 15%), radial-gradient(circle at 5% 95%, rgba(120, 81, 45, 0.3) 0%, transparent 15%), radial-gradient(circle at 95% 95%, rgba(139, 69, 19, 0.3) 0%, transparent 15%)',
                            }}
                        />

                        {/* コンテンツ */}
                        <div className="relative">
                            {/* ヘッダー */}
                            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-amber-800/30">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl drop-shadow">{selectedRoom.icon}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                                            {selectedRoom.nameJp}
                                        </h3>
                                        <p className="text-sm text-amber-700">{selectedRoom.nameCn}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedRoom(null)}
                                    className="text-amber-700 hover:text-amber-900 text-2xl font-bold"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* クエスト一覧 */}
                            <div className="space-y-3 mb-4">
                                <h4 className="font-bold text-amber-800 border-b-2 border-amber-700 pb-2" style={{ fontFamily: 'serif' }}>
                                    この部屋のクエスト
                                </h4>
                                {selectedRoom.quests.length > 0 ? (
                                    selectedRoom.quests.map((quest) => (
                                        <div
                                            key={quest.id}
                                            className="bg-white/50 rounded-lg p-3 border-2 border-amber-700/30"
                                        >
                                            <div className="flex items-start gap-2">
                                                <span className="text-2xl">{quest.icon}</span>
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-amber-900">{quest.name}</h5>
                                                    <p className="text-sm text-amber-800 mt-1">{quest.description}</p>
                                                    <div className="flex gap-3 mt-2 text-xs text-amber-700 font-semibold">
                                                        <span>⏱️ {quest.estimatedTime}分</span>
                                                        <span>+{quest.exp} EXP</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-amber-700 text-center py-4">クエストがありません</p>
                                )}
                            </div>

                            {/* アクションボタン */}
                            <button
                                onClick={() => {
                                    setSelectedRoom(null);
                                    navigate('/quests');
                                }}
                                className="w-full py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                クエスト一覧へ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapPage;