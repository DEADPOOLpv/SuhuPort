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
    { id: 1, label: 'RESUME', color: 'text-[#0026FF]', bg: 'bg-[#0026FF]', top: '60px', left: '51%' },
    { id: 3, label: 'QUEST', color: 'text-[#CF0067]', bg: 'bg-[#CF0067]', top: '200px', left: '51%' },
    { id: 2, label: 'PROJECTS', color: 'text-[#FF712F]', bg: 'bg-[#FF712F]', top: '130px', left: '44%' }
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
    <div className="w-screen h-screen relative bg-[#CAFF69] overflow-hidden">
      {/* Name and Title */}
      <div className="absolute left-[220px] top-[480px] z-10 text-left">
        <div className="text-black font-extrabold text-5xl leading-tight tracking-wide inter-font">
          SUHAANI<br />NIGAM
        </div>
        <div className="mt-4 text-black font-normal text-xl tracking-[0.25em] inter-font">
          VISUAL DESIGNER
        </div>
      </div>

      {/* Floating Lady Illustration as hyperlink with animation */}
      <button
        className="absolute left-[60%] top-[600px] -translate-x-1/2 -translate-y-1/2 z-0 bg-transparent border-none p-0 m-0 cursor-pointer"
        onClick={() => setShowMePage(true)}
        aria-label="About Me"
        style={{ outline: 'none' }}
      >
        <img
          src="assets/floatingLady.png"
          alt="Floating Lady"
          className="h-[750px] w-auto animate-[bounce_5s_ease-in-out_infinite]"
          style={{ filter: 'drop-shadow(0 0 8px #0002)' }}
        />
      </button>

      {/* About Me Button */}
      <button
        className="absolute left-[78%] top-[620px] -translate-y-1/2 z-10 bg-[#CF0067] text-white animate-[bounce_5s_ease-in-out_infinite] font-bold text-lg px-6 py-2 rounded-lg shadow-lg transition-transform hover:scale-105"
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
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#A3FFB0] font-bold text-lg pointer-events-none inter-font">
              tap
            </span>
          </div>
        );

        // Resume is a link, others are buttons
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
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-6 ${bubble.color} text-xl font-bold tracking-[9px] whitespace-nowrap transition-opacity duration-300 inter-font`}
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
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-50px);
          }
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          10% { transform: translateX(-5px); }
          20% { transform: translateX(5px); }
          30% { transform: translateX(-5px); }
          40% { transform: translateX(5px); }
          50% { transform: translateX(-5px); }
          60% { transform: translateX(5px); }
          70% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
          90% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.5s linear 0s 1;
        }
      `}</style>
    </div>
  );
}