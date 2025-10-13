import { useState } from 'react';
import MePage from './MePage'; // Import your MePage component

export default function HomePage() {
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  const [shakingBubble, setShakingBubble] = useState<number | null>(null);
  const [showMePage, setShowMePage] = useState(false); // State to show MePage

  // Rotated triangle: top-right, bottom, top-left (clockwise)
  const bubbles = [
    { id: 1, label: 'RESUME', color: 'text-[#51B6E3]', bg: 'bg-[#51B6E3]', top: '60px', left: '51%' },    // Top right
    { id: 3, label: 'QUEST', color: 'text-[#DE7599]', bg: 'bg-[#DE7599]', top: '200px', left: '51%' }, // Bottom center
    { id: 2, label: 'PROJECTS', color: 'text-[#E4B176]', bg: 'bg-[#E4B176]', top: '130px', left: '44%' }      // Top left
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

  if (showMePage) {
    return <MePage />;
  }

  return (
    <div className="w-full h-screen relative bg-[#CAFF69] overflow-hidden">
      {/* Character Image with Hyperlink - Behind bubbles */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/4 z-0">
        <button
          className="focus:outline-none"
          onClick={() => setShowMePage(true)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          aria-label="Go to MePage"
        >
          <img 
            src="/src/assets/floatingLady.png" 
            alt="Floating Lady" 
            className="w-auto h-[900px] object-contain animate-[bounce_6s_ease-in-out_infinite] opacity-90"
          />
        </button>
      </div>

      {/* Floating Bubbles in Rotated Triangle */}
      {bubbles.map((bubble) => (
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
          {/* Bubble */}
          <div 
            className={`w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 relative flex items-center justify-center
              ${hoveredBubble === bubble.id ? bubble.bg : 'bg-white'}
              ${shakingBubble === bubble.id ? 'animate-shake' : ''}
              `}
          />

          {/* Text Label - Only visible on hover, absolutely positioned to right of bubble */}
          <div 
            className={`absolute left-full top-1/2 -translate-y-1/2 ml-6 ${bubble.color} text-xl font-bold font-['Inter'] tracking-[9px] whitespace-nowrap transition-opacity duration-300`}
            style={{
              opacity: hoveredBubble === bubble.id ? 1 : 0,
              pointerEvents: 'none'
            }}
          >
            {bubble.label}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-50px); /* reduced bounce height */
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