import { useState, useEffect } from 'react';

/**
 * 初期値を推測する関数（SSR対応）
 */
const getInitialPlatform = () => {
    // サーバーサイドではデフォルト値を返す
    if (typeof window === 'undefined') {
        return {
            isApp: false,
            isWeb: true,
            isMobile: false,
            isDesktop: true,
        };
    }

    // クライアントサイドでは即座に判定
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /iPhone|iPad|iPod/i.test(userAgent);
    const screenWidth = window.innerWidth;
    const isFlutterWebView = isMobileDevice && screenWidth <= 430;

    return {
        isApp: isFlutterWebView,
        isWeb: !isFlutterWebView,
        isMobile: isMobileDevice || screenWidth < 768,
        isDesktop: !isMobileDevice && screenWidth >= 768,
    };
};

/**
 * プラットフォームを判定するカスタムフック
 */
export const usePlatform = () => {
    // 初期値を即座に計算（ちらつき防止）
    const [platform, setPlatform] = useState(getInitialPlatform);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileDevice = /iPhone|iPad|iPod/i.test(userAgent);
        const screenWidth = window.innerWidth;
        const isFlutterWebView = isMobileDevice && screenWidth <= 430;

        console.log('🔍 isApp:', isFlutterWebView);
        console.log('🔍 screenWidth:', screenWidth);

        setPlatform({
            isApp: isFlutterWebView,
            isWeb: !isFlutterWebView,
            isMobile: isMobileDevice || screenWidth < 768,
            isDesktop: !isMobileDevice && screenWidth >= 768,
        });
    }, []);

    return platform;
};