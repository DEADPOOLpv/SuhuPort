import { useState } from 'react';
import MePage from './MePage';
import QuestPage from './QuestPage';
import ProjectsPage from './ProjectsPage';

export default function HomePage() {
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  const [shakingBubble, setShakingBubble] = useState<number | null>(null);
  const [showMePage, setShowMePage] = useState(false);
  const [showQuest, setShowQuest] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const bubbles = [
    { id: 1, label: 'RESUME', color: 'text-[#0026FF]', bg: 'bg-[#0026FF]', top: '3.75rem', left: '51%' },   // 60px -> 3.75rem
    { id: 3, label: 'QUEST', color: 'text-[#CF0067]', bg: 'bg-[#CF0067]', top: '12.5rem', left: '51%' },    // 200px -> 12.5rem
    { id: 2, label: 'PROJECTS', color: 'text-[#FF712F]', bg: 'bg-[#FF712F]', top: '8.125rem', left: '44%' } // 130px -> 8.125rem
  ];

  const handleMouseEnter = (id: number) => {
    setHoveredBubble(id);
    setShakingBubble(id);
    setTimeout(() => {
      setShakingBubble(null);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setHoveredBubble(null);
    setShakingBubble(null);
  };

  if (showMePage) return <MePage />;
  if (showQuest) return <QuestPage />;
  if (showProjects) return <ProjectsPage />;

  return (
    <div className="w-full h-full fixed inset-0 bg-[#CAFF69] overflow-hidden">
      {/* Name and Title */}
      <div className="absolute left-[13.75rem] top-[30rem] z-10 text-left">
        <div className="text-black font-bold text-[50px] tracking-[0.15em] inter-font text-left">
          <p> SUHAANI </p> <p className='-mt-6'>NIGAM</p>
        </div>
        <div className=" text-black font-medium text-[20px] tracking-[0.51em] inter-font">
          VISUAL DESIGNER
        </div>
      </div>

      {/* Floating Lady Illustration as hyperlink with animation */}
      <button
        className="absolute left-[60%] top-[37.5rem] -translate-x-1/2 -translate-y-1/2 z-0 bg-transparent border-none p-0 m-0 cursor-pointer"
        onClick={() => setShowMePage(true)}
        aria-label="About Me"
        style={{ outline: 'none' }}
      >
        <img
          src="assets/floatingLady.png"
          alt="Floating Lady"
          className="h-[46.875rem] w-auto animate-[bounce_5s_ease-in-out_infinite]"
          style={{ filter: 'drop-shadow(0 0 8px #0002)' }}
        />
      </button>

      {/* About Me Button */}
      <button
        className="absolute right-[12.5rem] top-[38.75rem] -translate-y-1/2 z-10 bg-[#CF0067] text-[#CAFF69] animate-[bounce_5s_ease-in-out_infinite] font-extrabold text-[20px] tracking-[0.16em] px-6 py-2 rounded-sm shadow-lg transition-transform hover:scale-105 cursor-pointer" /* 620px -> 38.75rem */
        onClick={() => setShowMePage(true)}
        aria-label="About Me"
      >
        About Me
      </button>

      {/* Floating Bubbles in Rotated Triangle (with animation and tap text) */}
      {bubbles.map((bubble) => {
        const isResume = bubble.label === 'RESUME';
        const isQuest = bubble.label === 'QUEST';
        const isProjects = bubble.label === 'PROJECTS';

        const bubbleContent = (
          <div
            className={`w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 relative flex items-center justify-center
              ${hoveredBubble === bubble.id ? bubble.bg : 'bg-white'}
              ${shakingBubble === bubble.id ? 'animate-shake' : ''}
              `}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#A3FFB0] font-bold text-[20px] tracking-[0.1em] pointer-events-none inter-font">
              tap
            </span>
          </div>
        );

        return (
          <div
            key={bubble.id}
            className="absolute flex items-center cursor-pointer group z-10"
            style={{
              top: bubble.top,
              left: bubble.left,
              transform: 'translateX(-50%)'
            }}
            onMouseEnter={() => handleMouseEnter(bubble.id)}
            onMouseLeave={handleMouseLeave}
          >
            {isResume ? (
              <a
                href="https://www.notion.so/Suhaani-Nigam-281906501a6180bf89f9e2394077fccb"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Open Resume"
              >
                {bubbleContent}
              </a>
            ) : isQuest ? (
              <button
                className="block bg-transparent border-none p-0 m-0 cursor-pointer"
                onClick={() => setShowQuest(true)}
                aria-label="Open Quest"
                style={{ outline: 'none' }}
              >
                {bubbleContent}
              </button>
            ) : isProjects ? (
              <button
                className="block bg-transparent border-none p-0 m-0 cursor-pointer"
                onClick={() => setShowProjects(true)}
                aria-label="Open Projects"
                style={{ outline: 'none' }}
              >
                {bubbleContent}
              </button>
            ) : (
              bubbleContent
            )}
            <div
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-6 ${bubble.color} text-[20px] font-bold tracking-[0.45em] whitespace-nowrap transition-opacity duration-300 inter-font`}
              style={{
                opacity: hoveredBubble === bubble.id ? 1 : 0,
                pointerEvents: 'none'
              }}
            >
              <span className="inter-font font-[500]">{bubble.label}</span>
            </div>
          </div>
        );
      })}

      <style>{`
        /* Bounce animation (also provide -webkit- prefixed version for older WebKit browsers) */
        @-webkit-keyframes bounce {
          0%, 100% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
          50% { -webkit-transform: translate3d(0, -3.125rem, 0); transform: translate3d(0, -3.125rem, 0); }
        }
        @keyframes bounce {
          0%, 100% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
          50% { -webkit-transform: translate3d(0, -3.125rem, 0); transform: translate3d(0, -3.125rem, 0); }
        }

        /* Shake animation with translate3d for smooth GPU-accelerated movement */
        @-webkit-keyframes shake {
          0% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
          10% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          20% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          30% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          40% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          50% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          60% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          70% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          80% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          90% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          100% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
        }
        @keyframes shake {
          0% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
          10% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          20% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          30% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          40% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          50% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          60% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          70% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          80% { -webkit-transform: translate3d(0.3125rem,0,0); transform: translate3d(0.3125rem,0,0); }
          90% { -webkit-transform: translate3d(-0.3125rem,0,0); transform: translate3d(-0.3125rem,0,0); }
          100% { -webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0); }
        }
        .animate-shake {
          -webkit-animation: shake 0.5s linear 0s 1;
          animation: shake 0.5s linear 0s 1;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}