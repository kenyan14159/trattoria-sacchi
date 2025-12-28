"use client";

import { ReactNode, useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // タッチデバイスかどうかをチェック
    const checkMobile = () => {
      const isTouchDevice =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isTouchDevice);

      // モバイルの場合はbodyのoverflow-hiddenを解除
      if (isTouchDevice) {
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // モバイルではLenisを使わずにそのまま表示
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}
