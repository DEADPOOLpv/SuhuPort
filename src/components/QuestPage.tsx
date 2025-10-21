import React, { useState } from 'react';
import HomePage from './HomePage';

const QuestPage: React.FC = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    // Example click handlers
    const handleStickersClick = () => { /* your logic here */ };
    const handleMusicClick = () => { /* your logic here */ };
    const handleGraphicsClick = () => { /* your logic here */ };
    const handleEditsClick = () => { /* your logic here */ };
    const handlePhotosClick = () => { /* your logic here */ };
    const handleHomeClick = () => setShowHomePage(true);
    const handleContactClick = () => { /* your logic here */ };

    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <body className="w-screen h-screen relative">
            <img className="w-screen h-screen left-0 absolute" src="/assets/windowsBg.png" />
            <img className="bottom-0 absolute" src="/assets/windowsTaskbar.svg" />
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
            <button
                className="absolute flex flex-col items-center left-[35rem] top-[12rem] focus:outline-none bg-transparent cursor-pointer"
                onClick={handleContactClick}
            >
                <img className="w-20 h-20" src="/assets/windowsContact.png" alt="contact" />
                <span className="w-36 h-7 text-center text-zinc-950 text-xl font-[550] lexend-exa lowercase tracking-[3px]">contact</span>
            </button>
        </body>
    );
};

export default QuestPage;