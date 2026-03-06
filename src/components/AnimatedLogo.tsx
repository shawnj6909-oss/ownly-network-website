interface AnimatedLogoProps {
  size?: 'small' | 'default';
}

export function AnimatedLogo({ size = 'default' }: AnimatedLogoProps) {
  const isSmall = size === 'small';

  if (isSmall) {
    return (
      <svg
        viewBox="0 0 260 130"
        width="96"
        height="48"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pillGrad-s" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7EC8B3" />
            <stop offset="35%" stopColor="#9AD4C0" />
            <stop offset="70%" stopColor="#B8D8CC" />
            <stop offset="100%" stopColor="#D0DDD6" />
          </linearGradient>
          <linearGradient id="pillHighlight-s" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </linearGradient>
          <linearGradient id="oGrad-s" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#55BBA5" />
            <stop offset="50%" stopColor="#6AC7B0" />
            <stop offset="100%" stopColor="#82D2BC" />
          </linearGradient>
          <radialGradient id="oDepth-s" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </radialGradient>
          <linearGradient id="nGrad-s" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#B5CFC4" />
            <stop offset="100%" stopColor="#D5E0DA" />
          </linearGradient>
          <filter id="shadow-s" x="-8%" y="-5%" width="116%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4A8A78" floodOpacity="0.12" />
          </filter>
        </defs>
        <rect x="18" y="18" width="220" height="100" rx="50" ry="50" fill="url(#pillGrad-s)" filter="url(#shadow-s)" />
        <rect x="18" y="18" width="220" height="100" rx="50" ry="50" fill="url(#pillHighlight-s)" />
        <line x1="148" y1="82" x2="148" y2="36" stroke="url(#nGrad-s)" strokeWidth="10" strokeLinecap="round" />
        <line x1="148" y1="36" x2="190" y2="82" stroke="url(#nGrad-s)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="82" x2="190" y2="36" stroke="url(#nGrad-s)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="36" x2="190" y2="12" stroke="url(#nGrad-s)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="12" x2="175" y2="12" stroke="url(#nGrad-s)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="85" cy="68" r="42" fill="url(#oGrad-s)" />
        <circle cx="85" cy="68" r="42" fill="url(#oDepth-s)" />
        <circle cx="85" cy="68" r="21" fill="none" stroke="#1A2F45" strokeWidth="9" />
      </svg>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{
        background: 'radial-gradient(ellipse at center, #EDF3F0 0%, #F5F8F6 40%, #FFFFFF 100%)'
      }}>
      <svg
        viewBox="0 0 260 130"
        width="420"
        height="210"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7EC8B3" />
            <stop offset="35%" stopColor="#9AD4C0" />
            <stop offset="70%" stopColor="#B8D8CC" />
            <stop offset="100%" stopColor="#D0DDD6" />
          </linearGradient>
          <linearGradient id="pillHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </linearGradient>
          <linearGradient id="oGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#55BBA5" />
            <stop offset="50%" stopColor="#6AC7B0" />
            <stop offset="100%" stopColor="#82D2BC" />
          </linearGradient>
          <radialGradient id="oDepth" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </radialGradient>
          <linearGradient id="nGrad" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#B5CFC4" />
            <stop offset="100%" stopColor="#D5E0DA" />
          </linearGradient>
          <filter id="shadow" x="-8%" y="-5%" width="116%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#4A8A78" floodOpacity="0.12" />
          </filter>
        </defs>
        <rect x="18" y="18" width="220" height="100" rx="50" ry="50" fill="url(#pillGrad)" filter="url(#shadow)" />
        <rect x="18" y="18" width="220" height="100" rx="50" ry="50" fill="url(#pillHighlight)" />
        <line x1="148" y1="82" x2="148" y2="36" stroke="url(#nGrad)" strokeWidth="10" strokeLinecap="round" />
        <line x1="148" y1="36" x2="190" y2="82" stroke="url(#nGrad)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="82" x2="190" y2="36" stroke="url(#nGrad)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="36" x2="190" y2="12" stroke="url(#nGrad)" strokeWidth="10" strokeLinecap="round" />
        <line x1="190" y1="12" x2="175" y2="12" stroke="url(#nGrad)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="85" cy="68" r="42" fill="url(#oGrad)" />
        <circle cx="85" cy="68" r="42" fill="url(#oDepth)" />
        <circle cx="85" cy="68" r="21" fill="none" stroke="#1A2F45" strokeWidth="9" />
      </svg>
    </div>
  );
}
