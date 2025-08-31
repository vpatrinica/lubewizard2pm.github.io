import React, { useEffect, useState } from 'react';
import videoSrc from '../src/assets/The_Product_s_Price_Tag.mp4';
import posterImg from '../src/assets/background.png';

/**
 * ExplainerVideo
 * Zeigt das hinzugefügte MP4 Erklärvideo prominent oben auf der Seite.
 * - Responsive 16:9 Wrapper
 * - Autoplay (muted + inline) – respektiert prefers-reduced-motion
 * - Fallback Controls
 */
const ExplainerVideo: React.FC = () => {
  const [shouldAutoplay, setShouldAutoplay] = useState(true);

  useEffect(() => {
    // Respektiere Nutzerpräferenz für reduzierte Bewegung
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) setShouldAutoplay(false);
  }, []);

  return (
    <div className="mt-2 mb-4">
      <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-800/60 bg-black/40 backdrop-blur-sm w-[60%] max-w-3xl min-w-[300px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/15 to-transparent pointer-events-none" />
        <video
          className="w-full h-full aspect-video object-cover"
          poster={posterImg}
          // Autoplay nur falls erlaubt
          autoPlay={shouldAutoplay}
          muted
            // eslint-disable-next-line jsx-a11y/media-has-caption
          loop
          playsInline
          controls={!shouldAutoplay}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-2 left-3 right-3 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-amber-200 drop-shadow">
          <span className="px-2 py-0.5 bg-black/55 rounded-md border border-amber-400/30">Explainer Video</span>
          <span className="px-2 py-0.5 bg-black/35 rounded-md border border-slate-600/60 text-slate-200">LubeWizard2 Overview</span>
        </div>
      </div>
    </div>
  );
};

export default ExplainerVideo;
