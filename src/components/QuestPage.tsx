import React, { useState, useEffect, useRef } from 'react';
import HomePage from './HomePage';

const QuestPage: React.FC = () => {
    const [showHomePage, setShowHomePage] = useState(false);
    const [showStickersPopup, setShowStickersPopup] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [showMusicPopup, setShowMusicPopup] = useState(false);
    const [showMusicClose, setShowMusicClose] = useState(false);
    const [showGraphicsPopup, setShowGraphicsPopup] = useState(false);
    const [showGraphicsClose, setShowGraphicsClose] = useState(false);
    const [showPhotosPopup, setShowPhotosPopup] = useState(false);
    const [showPhotosClose, setShowPhotosClose] = useState(false);
    const [showEditsPopup, setShowEditsPopup] = useState(false);
    const [showEditsClose, setShowEditsClose] = useState(false);

    const handleStickersClick = () => { setShowStickersPopup(true); setShowCloseButton(false); };
    const handleMusicClick = () => { setShowMusicPopup(true); setShowMusicClose(false); };
    const handleGraphicsClick = () => { setShowGraphicsPopup(true); setShowGraphicsClose(false); };
    const handleEditsClick = () => { setShowEditsPopup(true); setShowEditsClose(false); };
    const handlePhotosClick = () => { setShowPhotosPopup(true); setShowPhotosClose(false); };
    const handleHomeClick = () => setShowHomePage(true);

    // Prevent page/body scrolling while any popup is open to avoid overscroll revealing the background.
    const anyPopupOpen = showStickersPopup || showMusicPopup || showGraphicsPopup || showPhotosPopup || showEditsPopup;
    useEffect(() => {
        if (anyPopupOpen) {
            // lock page scroll while modal is open
            document.body.style.overflow = 'hidden';
            // hint for touch scrolling behavior
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [anyPopupOpen]);

    // Ref to the edits popup container so we can attach video play/pause handlers
    const editsContainerRef = useRef<HTMLDivElement | null>(null);

    // When the edits popup opens, attach click handlers to any <video> elements
    useEffect(() => {
        if (!showEditsPopup || !editsContainerRef.current) return;

        const container = editsContainerRef.current;
        const videos = Array.from(container.querySelectorAll('video')) as HTMLVideoElement[];

        const handleVideoClick = (ev: Event) => {
            const vid = ev.currentTarget as HTMLVideoElement;
            if (!vid) return;

            if (vid.paused) {
                // pause any other videos in the container
                videos.forEach(v => { if (v !== vid) v.pause(); });
                vid.play();
            } else {
                vid.pause();
            }
        };

        videos.forEach(v => v.addEventListener('click', handleVideoClick));

        return () => {
            videos.forEach(v => v.removeEventListener('click', handleVideoClick));
        };
    }, [showEditsPopup]);

    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <body className="w-screen h-screen relative">
            <img className="w-screen h-screen left-0 absolute" src="/assets/windowsBg.png" />
            <img className="w-screen bottom-0 absolute" src="/assets/windowsTaskbar.svg" />
            <img className="w-20 h-20 left-[3.5rem] top-[25.0625rem] absolute" src="/assets/windowsBin.png" />
            <img className="w-20 h-20 left-[51.0625rem] top-[50rem] absolute" src="/assets/windowsExplorer.png" />
            <img className="w-20 h-20 left-[100rem] top-[7.9375rem] absolute" src="/assets/windowsDialup.png" />
            <img className="w-20 h-20 left-[103.75rem] top-[40.1875rem] absolute" src="/assets/windowsFax.png" />
            <img className="w-20 h-20 left-[12.3125rem] top-[6.125rem] absolute" src="/assets/windowsWeb.png" />
            <img className="w-20 h-20 left-[90.25rem] top-[50.625rem] absolute" src="/assets/windowsDisk.png" />
            <img className="w-20 h-20 left-[17rem] top-[45.8125rem] absolute" src="/assets/windowsDvd.png" />

            {/* Stickers Button */}
            <button
                className="absolute flex flex-col items-center left-[66.6875rem] top-[16.375rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleStickersClick}
            >
                <img className="w-20 h-20" src="/assets/windowsStar.png" alt="stickers" />
                <span className="w-60 h-4 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">stickers</span>
            </button>

            {/* Music Button */}
            <button
                className="absolute flex flex-col items-center left-[85.25rem] top-[27.75rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleMusicClick}
            >
                <img className="w-20 h-20" src="/assets/windowsMusic.png" alt="music" />
                <span className="w-60 h-4 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">music</span>
            </button>

            {/* Graphics Button */}
            <button
                className="absolute flex flex-col items-center left-[64.3125rem] top-[37.375rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleGraphicsClick}
            >
                <img className="w-20 h-20" src="/assets/windowsGraphics.png" alt="graphics" />
                <span className="w-60 h-4 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">graphics</span>
            </button>

            {/* Edits Button */}
            <button
                className="absolute flex flex-col items-center left-[23.6875rem] top-[26.625rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleEditsClick}
            >
                <img className="w-20 h-20" src="/assets/windowsEdits.png" alt="edits" />
                <span className="w-60 h-4 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">edits</span>
            </button>

            {/* Photos Button */}
            <button
                className="absolute flex flex-col items-center left-[36.125rem] top-[37.75rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handlePhotosClick}
            >
                <img className="w-20 h-20" src="/assets/windowsPhotos.png" alt="photos" />
                <span className="w-60 h-4 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">photos</span>
            </button>

            {/* Home Button */}
            <button
                className="absolute flex flex-col items-center inset-x-0 top-[2.75rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleHomeClick}
            >
                <img className="w-16 h-14" src="/assets/cat.svg" alt="home" />
                <span className="w-36 h-7 -mt-2.5 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">home</span>
            </button>

            {/* Contact Button */}
            <div className="absolute flex flex-col items-center left-[35rem] top-[12rem] focus:outline-none bg-transparent cursor-pointer">
                <a href='https://www.notion.so/Suhaani-Nigam-281906501a6180bf89f9e2394077fccb' target='_blank' rel="noreferrer">
                    <img className="w-20 h-20" src="/assets/windowsContact.png" alt="contact" />
                    <span className="w-36 h-7 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">contact</span>
                </a> 
            </div>

            {/* Popups (render as siblings so each icon works independently) */}

            {/* Stickers Popup */}
            {showStickersPopup && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    aria-hidden={!showStickersPopup}
                    onClick={() => { setShowStickersPopup(false); setShowCloseButton(false); }}
                >
                    <div className="absolute inset-0 bg-black/60 transition-opacity" />

                    <div
                        className="relative z-10 max-w-[1400px] mb-5"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src="/assets/windows xp.png"
                            alt="stickers window"
                            className="w-full h-auto rounded-lg animate-pop-in"
                            onAnimationEnd={() => setShowCloseButton(true)}
                        />

                        <img
                            src="/assets/windowsCrossRed.svg"
                            alt="Close"
                            onClick={() => { setShowStickersPopup(false); setShowCloseButton(false); }}
                            className={`absolute top-[33px] right-[24px] w-[50px] inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 ${showCloseButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        />

                        <img src="/assets/cursor.png" alt="windowsCursor" className="absolute bottom-[35px] right-[24px] w-[80px] z-30" />

                        <div className="absolute left-7 right-[69.9px] top-36 bottom-19 py-10 px-25 bg-[#F2FFDA] shadow-2xl shadow-[#F2FFDA] animate-pop-in overflow-auto hide-scrollbar scroll-container">

                            {/* Header area */}
                            <div className="flex flex-col items-center pt-2">
                                <img src="/assets/cat.svg" alt="logo" className="w-10 h-10 mb-13" />
                                <p className="inter-font font-semibold mb-2">Like what you see?</p>
                                <a className="px-6 py-2 mb-8 bg-white border border-[#A3E230] rounded-full text-[#A3E230] inter-font font-bold text-[21.33px] tracking-[2px] transition-colors duration-200 hover:bg-[#A3E230] hover:text-white" href="https://mail.google.com/mail/?view=cm&fs=1&to=suhaani2301@gmail.com" target="_blank" rel="noopener noreferrer">BUY NOW</a>
                            </div>

                            {/* Posters area (grid) */}
                            <div className="mt-6">
                                <div className="grid grid-cols-2 gap-9">
                                    <img src="/assets/sq_art1.png" alt="poster 1" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art2.png" alt="poster 2" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art3.png" alt="poster 3" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art4.png" alt="poster 4" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art5.png" alt="poster 5" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art6.png" alt="poster 6" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art7.png" alt="poster 7" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/sq_art8.png" alt="poster 8" className="w-full h-auto object-cover rounded-sm" />
                                </div>
                            </div>

                            {/* Secondary CTA at the end of images */}
                            <div className="mt-18 mb-1 flex justify-center">
                              <a className="px-6 py-2 bg-white border border-[#A3E230] rounded-full text-[#A3E230] inter-font font-bold text-[21.33px] tracking-[2px] transition-colors duration-200 hover:bg-[#A3E230] hover:text-white" href="https://mail.google.com/mail/?view=cm&fs=1&to=suhaani2301@gmail.com" target="_blank" rel="noopener noreferrer">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Music Popup */}
            {showMusicPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" aria-hidden={!showMusicPopup} onClick={() => { setShowMusicPopup(false); setShowMusicClose(false); }}>
                    <div className="absolute inset-0 bg-black/60 transition-opacity" />
                    <div className="relative z-10 max-w-[1400px] mb-5" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <img src="/assets/windows xp.png" alt="music window" className="w-full h-auto rounded-lg animate-pop-in" onAnimationEnd={() => setShowMusicClose(true)} />
                        <img src="/assets/windowsCrossRed.svg" alt="Close" onClick={() => { setShowMusicPopup(false); setShowMusicClose(false); }} className={`absolute top-[33px] right-[24px] w-[50px] inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 ${showMusicClose ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                        <img src="/assets/cursor.png" alt="windowsCursor" className="absolute bottom-[35px] right-[24px] w-[80px] z-30" />

                        <div className="absolute left-7 right-[69.9px] top-36 bottom-19 py-10 px-25 bg-black animate-pop-in overflow-auto hide-scrollbar scroll-container text-white">
                            <div className="flex flex-col items-center pt-2">
                                <img src="/assets/cat.svg" alt="logo" className="w-10 h-10" />
                            </div>

                            <div className="mt-8 flex justify-center">
                                <div className="grid grid-cols-2 gap-10">
                                    <img src="/assets/questSong1.svg" alt="song 1" className="w-[395px] h-[238px] object-cover " />
                                    <img src="/assets/questSong2.svg" alt="song 2" className="w-[395px] h-[238px] object-cover " />
                                    <img src="/assets/questSong3.svg" alt="song 3" className="w-[395px] h-[238px] object-cover " />
                                    <img src="/assets/questSong4.svg" alt="song 4" className="w-[395px] h-[238px] object-cover " />
                                </div>
                            </div>

                            <div className="mt-10 flex justify-center">
                              <p className="inter-font font-semibold lowercase">enjoy some songs</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Graphics Popup */}
            {showGraphicsPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" aria-hidden={!showGraphicsPopup} onClick={() => { setShowGraphicsPopup(false); setShowGraphicsClose(false); }}>
                    <div className="absolute inset-0 bg-black/60 transition-opacity" />
                    <div className="relative z-10 max-w-[1400px] mb-5" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <img src="/assets/windows xp.png" alt="graphics window" className="w-full h-auto rounded-lg animate-pop-in" onAnimationEnd={() => setShowGraphicsClose(true)} />
                        <img src="/assets/windowsCrossRed.svg" alt="Close" onClick={() => { setShowGraphicsPopup(false); setShowGraphicsClose(false); }} className={`absolute top-[33px] right-[24px] w-[50px] inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 ${showGraphicsClose ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                        <img src="/assets/cursor.png" alt="windowsCursor" className="absolute bottom-[35px] right-[24px] w-[80px] z-30" />

                        <div className="absolute left-7 right-[69.9px] top-36 bottom-19 py-10 px-25 bg-black animate-pop-in overflow-auto hide-scrollbar scroll-container text-white">
                            <div className="flex flex-col items-center pt-2">
                                <img src="/assets/cat.svg" alt="logo" className="w-10 h-10 mb-13" />
                            </div>

                            <div className="mt-6">
                                <div className='grid grid-cols-2 justify-center items-center gap-x-5'>
                                    <img src='/assets/smiths.jpg' alt='Smiths Poster' className=''/>
                                    <div className='w-[568.4px] h-[97.8px] inter-font text-[#CAFF69]'>
                                        <p className='mx-5 text-[31.97px] font-extrabold tracking-[4px] uppercase'>Heaven Knows I&apos;m Miserable Now</p>
                                        <p className='mx-5 text-[17.76px] font-extralight tracking-[9px]'>The Smiths ‧ 1984</p>
                                    </div>
                                    <div className='w-[568.4px] h-[97.8px] inter-font text-[#CAFF69] text-right'>
                                        <p className='mx-10 text-[31.97px] font-extrabold tracking-[4px] uppercase'>Charles Leclerc</p>
                                        <p className='mx-10 text-[17.76px] font-extralight tracking-[8px]'>Scuderia Ferrari</p>
                                    </div>
                                    <img src='/assets/leclerc.jpg' alt='Leclerc Poster' className=''/>
                                    <img src='/assets/arctic.jpg' alt='Arctic Monkeys Poster' className=''/>
                                    <div className='w-[568.4px] h-[97.8px] inter-font text-[#CAFF69]'>
                                        <p className='mx-5 text-[31.97px] font-extrabold tracking-[4px] uppercase'>Why&apos;d You Only Call Me When You&apos;re High?</p>
                                        <p className='mx-5 text-[17.76px] font-extralight tracking-[8px]'>Arctic Monkeys ‧ 2013</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-9 my-20">
                                    <img src='assets/questGraphics1.png' alt='poster 1'/>
                                    <img src='assets/questGraphics2.png' alt='poster 2'/>
                                    <img src='assets/questGraphics3.png' alt='poster 3'/>
                                    <img src='assets/questGraphics4.png' alt='poster 4'/>
                                    <img src='assets/questGraphics5.png' alt='poster 5'/>
                                    <img src='assets/questGraphics6.png' alt='poster 6'/>
                                    <img src='assets/questGraphics7.png' alt='poster 7'/>
                                    <img src='assets/questGraphics8.png' alt='poster 8'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Photos Popup */}
            {showPhotosPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" aria-hidden={!showPhotosPopup} onClick={() => { setShowPhotosPopup(false); setShowPhotosClose(false); }}>
                    <div className="absolute inset-0 bg-black/60 transition-opacity" />
                    <div className="relative z-10 max-w-[1400px] mb-5" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <img src="/assets/windows xp.png" alt="photos window" className="w-full h-auto rounded-lg animate-pop-in" onAnimationEnd={() => setShowPhotosClose(true)} />
                        <img src="/assets/windowsCrossRed.svg" alt="Close" onClick={() => { setShowPhotosPopup(false); setShowPhotosClose(false); }} className={`absolute top-[33px] right-[24px] w-[50px] inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 ${showPhotosClose ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                        <img src="/assets/cursor.png" alt="windowsCursor" className="absolute bottom-[35px] right-[24px] w-[80px] z-30" />

                        <div className="absolute left-7 right-[69.9px] top-36 bottom-19 py-10 px-25 bg-[#CAFF69] animate-pop-in overflow-auto hide-scrollbar scroll-container text-white">
                            <div className="flex flex-col items-center pt-2">
                                <img src="/assets/cat.svg" alt="logo" className="w-10 h-10 mb-13" />
                            </div>

                            <div className="mt-6">
                                <div className="grid grid-cols-4 gap-9">
                                    <img src="/assets/questPolaroid1.svg" alt="polaroid1" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid2.svg" alt="polaroid2" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid3.svg" alt="polaroid3" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid4.svg" alt="polaroid4" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid5.svg" alt="polaroid5" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid6.svg" alt="polaroid6" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid7.svg" alt="polaroid7" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid8.svg" alt="polaroid8" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid9.svg" alt="polaroid9" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid10.svg" alt="polaroid10" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid11.svg" alt="polaroid11" className="w-full h-auto object-cover rounded-sm" />
                                    <img src="/assets/questPolaroid12.svg" alt="polaroid12" className="w-full h-auto object-cover rounded-sm" />
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            )}

            {/* Edits Popup */}
            {showEditsPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" aria-hidden={!showEditsPopup} onClick={() => { setShowEditsPopup(false); setShowEditsClose(false); }}>
                    <div className="absolute inset-0 bg-black/60 transition-opacity" />
                    <div className="relative z-10 max-w-[1400px] mb-5" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <img src="/assets/windows xp.png" alt="edits window" className="w-full h-auto rounded-lg animate-pop-in" onAnimationEnd={() => setShowEditsClose(true)} />
                        <img src="/assets/windowsCrossRed.svg" alt="Close" onClick={() => { setShowEditsPopup(false); setShowEditsClose(false); }} className={`absolute top-[33px] right-[24px] w-[50px] inline-flex items-center justify-center cursor-pointer transition-opacity duration-200 ${showEditsClose ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                        <img src="/assets/cursor.png" alt="windowsCursor" className="absolute bottom-[35px] right-[24px] w-[80px] z-30" />

                        <div ref={editsContainerRef} className="absolute left-7 right-[69.9px] top-36 bottom-19 py-10 px-25 bg-[#F2FFDA] animate-pop-in overflow-auto hide-scrollbar scroll-container">
                            <div className="flex flex-col items-center pt-2">
                                <img src="/assets/cat.svg" alt="logo" className="w-10 h-10 mb-13" />
                            </div>

                            <div className="mt-3">
                                <div className="grid grid-cols-3 gap-9 items-center inter-font font-extrabold text-[31.89px] text-center uppercase tracking-[5px]">
                                    <video src="/assets/questEditsVid1.mp4" className="w-full h-auto rounded-sm" preload="metadata"/>
                                    <p>Cutouts & Corners</p>
                                    <video src="/assets/questEditsVid2.mp4" className="w-full h-auto rounded-sm" preload="metadata" />
                                    <video src="/assets/questEditsVid3.mp4" className="w-full h-auto rounded-sm" preload="metadata" />
                                    <p>Bundle of Joy</p>
                                    <video src="/assets/questEditsVid4.mp4" className="w-full h-auto rounded-sm" preload="metadata" />
                                    <video src="/assets/questEditsVid5.mp4" className="w-full h-auto rounded-sm" preload="metadata" />
                                    <p>Stories in Motion</p>
                                    <video src="/assets/questEditsVid6.mp4" className="w-full h-auto rounded-sm" preload="metadata" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes popIn {
                    0% { transform: scale(0.9); opacity: 0; }
                    60% { transform: scale(1.03); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }

                .animate-pop-in {
                    animation: popIn 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
                    will-change: transform, opacity;
                }

                /* Hide scrollbar inside the popup content (cross-browser) */
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera */
                }

                /* Prevent overscroll from exposing page background and stop scroll chaining */
                .scroll-container {
                    overscroll-behavior: contain;
                    -webkit-overflow-scrolling: touch; /* smooth native scrolling on iOS */
                    touch-action: pan-y; /* allow vertical touch scrolling inside container */
                }
            `}</style>
        </body>
    );
};

export default QuestPage;