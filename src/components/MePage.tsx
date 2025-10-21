import React, { useState } from 'react';
import HomePage from './HomePage';

const MePage: React.FC = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <div className="w-screen h-screen relative bg-[#F2FFDA] overflow-hidden">
            <style>{`
                @keyframes orbit1 {
                    from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
                }
                @keyframes orbit2 {
                    from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
                }
                @keyframes orbit3 {
                    from { transform: rotate(45deg) translateX(180px) rotate(-45deg); }
                    to { transform: rotate(405deg) translateX(180px) rotate(-405deg); }
                }
                @keyframes orbit4 {
                    from { transform: rotate(90deg) translateX(220px) rotate(-90deg); }
                    to { transform: rotate(450deg) translateX(220px) rotate(-450deg); }
                }
                @keyframes orbit5 {
                    from { transform: rotate(180deg) translateX(160px) rotate(-180deg); }
                    to { transform: rotate(540deg) translateX(160px) rotate(-540deg); }
                }
                @keyframes orbit6 {
                    from { transform: rotate(270deg) translateX(190px) rotate(-270deg); }
                    to { transform: rotate(630deg) translateX(190px) rotate(-630deg); }
                }
                @keyframes orbit7 {
                    from { transform: rotate(135deg) translateX(210px) rotate(-135deg); }
                    to { transform: rotate(495deg) translateX(210px) rotate(-495deg); }
                }
                @keyframes orbit8 {
                    from { transform: rotate(225deg) translateX(170px) rotate(-225deg); }
                    to { transform: rotate(585deg) translateX(170px) rotate(-585deg); }
                }
                @keyframes orbit9 {
                    from { transform: rotate(315deg) translateX(140px) rotate(-315deg); }
                    to { transform: rotate(675deg) translateX(140px) rotate(-675deg); }
                }
                @keyframes orbit10 {
                    from { transform: rotate(60deg) translateX(230px) rotate(-60deg); }
                    to { transform: rotate(420deg) translateX(230px) rotate(-420deg); }
                }
                @keyframes orbit11 {
                    from { transform: rotate(150deg) translateX(195px) rotate(-150deg); }
                    to { transform: rotate(510deg) translateX(195px) rotate(-510deg); }
                }
                @keyframes orbit12 {
                    from { transform: rotate(210deg) translateX(165px) rotate(-210deg); }
                    to { transform: rotate(570deg) translateX(165px) rotate(-570deg); }
                }
                @keyframes orbit13 {
                    from { transform: rotate(30deg) translateX(175px) rotate(-30deg); }
                    to { transform: rotate(390deg) translateX(175px) rotate(-390deg); }
                }
                @keyframes orbit14 {
                    from { transform: rotate(120deg) translateX(205px) rotate(-120deg); }
                    to { transform: rotate(480deg) translateX(205px) rotate(-480deg); }
                }
                @keyframes orbit15 {
                    from { transform: rotate(240deg) translateX(185px) rotate(-240deg); }
                    to { transform: rotate(600deg) translateX(185px) rotate(-600deg); }
                }
                @keyframes orbit16 {
                    from { transform: rotate(300deg) translateX(155px) rotate(-300deg); }
                    to { transform: rotate(660deg) translateX(155px) rotate(-660deg); }
                }
                @keyframes orbit17 {
                    from { transform: rotate(75deg) translateX(215px) rotate(-75deg); }
                    to { transform: rotate(435deg) translateX(215px) rotate(-435deg); }
                }
                .animate-orbit-1 { animation: orbit1 30s linear infinite; }
                .animate-orbit-2 { animation: orbit2 35s linear infinite; }
                .animate-orbit-3 { animation: orbit3 40s linear infinite; }
                .animate-orbit-4 { animation: orbit4 32s linear infinite; }
                .animate-orbit-5 { animation: orbit5 38s linear infinite; }
                .animate-orbit-6 { animation: orbit6 28s linear infinite; }
                .animate-orbit-7 { animation: orbit7 42s linear infinite; }
                .animate-orbit-8 { animation: orbit8 45s linear infinite; }
                .animate-orbit-9 { animation: orbit9 25s linear infinite; }
                .animate-orbit-10 { animation: orbit10 48s linear infinite; }
                .animate-orbit-11 { animation: orbit11 52s linear infinite; }
                .animate-orbit-12 { animation: orbit12 46s linear infinite; }
                .animate-orbit-13 { animation: orbit13 55s linear infinite; }
                .animate-orbit-14 { animation: orbit14 50s linear infinite; }
                .animate-orbit-15 { animation: orbit15 58s linear infinite; }
                .animate-orbit-16 { animation: orbit16 43s linear infinite; }
                .animate-orbit-17 { animation: orbit17 60s linear infinite; }
            `}</style>

            {/* Animated circles layer - positioned to match me.svg */}
            <div className="w-[930.64px] h-[930.64px] left-[41.47px] top-[73px] absolute origin-top-left rotate-[5.58deg]">
                <div className="w-full h-full relative blur-lg">
                    {/* Center point for orbits - positioned at center of me.svg */}
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-1 w-80 h-80 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-2 w-80 h-80 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-3 w-96 h-96 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-4 w-96 h-96 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-5 w-72 h-72 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-6 w-[400px] h-[400px] bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-7 w-96 h-96 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-8 w-56 h-56 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-9 w-72 h-72 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-10 w-80 h-80 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-11 w-72 h-72 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-12 w-64 h-64 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-13 w-88 h-88 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-14 w-96 h-96 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-15 w-68 h-68 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-16 w-60 h-60 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    <div className="w-full h-full absolute flex items-center justify-center">
                        <div className="animate-orbit-17 w-84 h-84 bg-[#CAFF69] rounded-full"></div>
                    </div>
                    
                    {/* Animated static circles with subtle float effect */}
                    <div className="w-64 h-64 left-[100px] top-[150px] absolute bg-[#CAFF69] rounded-full animate-pulse"></div>
                    <div className="w-48 h-48 left-[600px] top-[500px] absolute bg-[#CAFF69] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="w-56 h-56 left-[300px] top-[600px] absolute bg-[#CAFF69] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
            </div>

            {/* me.svg on top of the animated circles */}
            <img className="w-[930.64px] h-[930.64px] left-[41.47px] top-[73px] absolute origin-top-left rotate-[5.58deg]" src="/assets/me.svg" alt="Profile illustration" />
            
            <div className="w-[862px] left-[858px] top-[392px] absolute text-justify justify-start text-zinc-950 text-2xl font-extralight inter-font">
                I'm a Visual Designer with 2+ years of experience, always curious about how design can tell stories and spark emotions. I explore different mediums, experiment with colors, and constantly try new ways of bringing ideas to life. For me, design isn't just about making things look good, it's about making them feel good.<br/><br/>I love creating work that carries a sense of playfulness with purpose. Sometimes that looks like nostalgic illustrations, sometimes it's bold layouts or quirky stickers, and other times it's just me scribbling in a sketchbook until something clicks. I believe design should invite people in, make them smile, and leave a little memory behind.<br/><br/>I design cool stuff &lt;3
            </div>
            
            <a className="w-28 left-[858px] inset-x-0 bottom-0 mb-16 absolute text-justify justify-start text-zinc-950 text-2xl font-medium inter-font" href="https://mail.google.com/mail/?view=cm&fs=1&to=suhaani2301@gmail.com" target="_blank" rel="noopener noreferrer">GMAIL</a>
            <a className="w-32 left-[1079px] inset-x-0 bottom-0 mb-16 absolute text-justify justify-start text-zinc-950 text-2xl font-medium inter-font" href="https://www.behance.net/suhaaninigam" target="_blank" rel="noopener noreferrer">BEHANCE</a>
            <a className="w-32 left-[1326px] inset-x-0 bottom-0 mb-16 absolute text-justify justify-start text-zinc-950 text-2xl font-medium inter-font" href="https://www.linkedin.com/in/suhaaninigam/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="w-36 left-[1572px] inset-x-0 bottom-0 mb-16 absolute text-justify justify-start text-zinc-950 text-2xl font-medium inter-font" href="https://www.instagram.com/suhaani.ii/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            
            <a className="left-[851px] top-[219px] absolute text-justify justify-start text-zinc-950 text-5xl font-extrabold inter-font uppercase tracking-[22.50px]">Hi&nbsp;&nbsp;&nbsp; I'm&nbsp;&nbsp;&nbsp; Suhaani</a>
            
            <button
                className="focus:outline-none"
                onClick={() => setShowHomePage(true)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                aria-label="Go to HomePage"
            >
                <div className="absolute inset-x-0 top-[46px] flex flex-col items-center">
                    <img className="w-17 h-14 object-center object-cover" src="/assets/cat.svg" alt="Cat icon" />
                    <p className="w-36 h-7 text-center text-[#070307] text-xl font-normal lexend-exa lowercase -mt-2">HOME</p>
                </div>
            </button>
        </div>
    );
};

export default MePage;