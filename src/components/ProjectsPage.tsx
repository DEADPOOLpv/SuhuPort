import React, { useState } from 'react';
import HomePage from './HomePage';

const ProjectsPage: React.FC = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <div className="w-screen h-screen bg-[#F2FFDA] relative overflow-hidden z-60">
            <button
                className="focus:outline-none absolute left-1/2 transform -translate-x-1/2 top-6 z-50"
                onClick={() => setShowHomePage(true)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                aria-label="Go to HomePage"
            >
                <div className="flex flex-col items-center pointer-events-auto">
                    <img className="w-17 h-14 object-center object-cover" src="/assets/cat.svg" alt="Cat icon" />
                    <p className="w-36 h-7 text-center text-[#070307] text-xl font-normal lexend-exa lowercase -mt-2">HOME</p>
                </div>
            </button>
            
            <div className="animate-bounce-up relative w-full h-[calc(100vh-6.25rem)]">
        
              {/* SponsHub Card - Top Left */}
              <a
                className="absolute top-[10%] left-[15%] transform transition-transform duration-300 ease-out hover:-translate-y-6 hover:scale-110 hover:rotate-[-6deg] hover:z-40"
                style={{ filter: 'drop-shadow(0 1.125rem 2.5rem rgba(0,0,0,0.18))' }}
                href='https://www.behance.net/gallery/195306957/Jamboree'
                target="_blank"
                rel="noreferrer"
              >
                <img 
                  src="/assets/spoonshub.png" 
                  alt="Bringing Sponsors & Events Together For You" 
                  className="object-cover"
                />
              </a>

              {/* Valorant Card - Top Right */}
              <a
                className="absolute top-[8%] right-[13%] transform transition-transform duration-300 ease-out hover:-translate-y-8 hover:scale-112 hover:rotate-[5deg] z-40"
                style={{ filter: 'drop-shadow(0 1.125rem 2.5rem rgba(0,0,0,0.18))' }}
                href='https://www.behance.net/gallery/186682645/Valorant-Concept-Art'
                target="_blank"
                rel="noreferrer"
              >
                <img 
                  src="/assets/valo.png" 
                  alt="Valorant Concept Art" 
                  className="object-cover"
                />
              </a>

              {/* Oshi Beauty Card - Middle Left */}
              <a
                className="absolute top-[40%] left-[5%] transform transition-transform duration-300 ease-out hover:-translate-y-6 hover:scale-110 hover:rotate-[-3deg] hover:z-40"
                style={{ filter: 'drop-shadow(0 1.125rem 2.5rem rgba(0,0,0,0.18))' }}
                href='https://www.behance.net/gallery/235881141/Qshi-Studio'
                target="_blank"
                rel="noreferrer"
                >
                <img 
                  src="/assets/qshi.png" 
                  alt="Oshi Beauty Product Photography" 
                  className="object-cover"
                />
              </a>

              {/* Coming Soon Card 1 - Bottom Center */}
              <div 
                className="absolute bottom-[1%] left-[34%]"
                style={{ filter: 'drop-shadow(0 1.125rem 2.5rem rgba(0,0,0,0.18))' }}
              >
                <img 
                  src="/assets/comingsoon.png" 
                  alt="Coming Soon Project" 
                  className="object-cover"
                />
              </div>

              {/* Coming Soon Card 2 - Right */}
              <div 
                className="absolute top-[50%] right-[6%]"
                style={{ filter: 'drop-shadow(0 1.125rem 2.5rem rgba(0,0,0,0.18))' }}
              >
                <img 
                  src="/assets/comingsoons.png" 
                  alt="Coming Soon Project" 
                  className="object-cover"
                />
              </div>
            </div>
            <style>{`
              /* Smoother bounce animation: finer keyframes and an ease-out cubic-bezier.
                 Use 'both' fill-mode and will-change to avoid a final hitch/snapping. */
              @keyframes bounceUp {
                0% {
                  transform: translateY(100vh) scale(0.6);
                  opacity: 0;
                }
                40% {
                  transform: translateY(-18px) scale(1.05);
                  opacity: 1;
                }
                60% {
                  transform: translateY(8px) scale(0.985);
                }
                76% {
                  transform: translateY(-6px) scale(1.01);
                }
                88% {
                  transform: translateY(-2px) scale(1.003);
                }
                100% {
                  transform: translateY(0) scale(1);
                  opacity: 1;
                }
              }

              .animate-bounce-up {
                /* shorter duration, smoother easing and preserve end state */
                animation: bounceUp 1.6s cubic-bezier(0.22, 1, 0.36, 1) both;
                will-change: transform, opacity;
                backface-visibility: hidden;
              }
            `}</style>
        </div>
    );
};

export default ProjectsPage;