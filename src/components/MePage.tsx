import React, { useState } from 'react';
import HomePage from './HomePage';

const MePage: React.FC = () => {
    const [showHomePage, setShowHomePage] = useState(false);

    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <div className="w-screen h-screen relative bg-[#F2FFDA] overflow-hidden">
            <div className="px-20 py-20 left-[-42px] top-[77px] absolute inline-flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="w-[834.73px] h-[837.09px] relative blur-lg">
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-96 h-96 left-[215.34px] top-0 absolute">
                        <div data-type="1 corner" className="w-96 h-96 left-0 top-0 absolute">
                            <div className="w-80 h-80 left-0 top-0 absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-96 h-96 left-[774.82px] top-[507.97px] absolute origin-top-left rotate-180">
                        <div data-type="2 corners" className="w-96 h-96 left-0 top-0 absolute">
                            <div className="w-80 h-80 left-[53.35px] top-0 absolute bg-[#CAFF69] rounded-full"></div>
                            <div className="w-80 h-80 left-[0.04px] top-[53.31px] absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-[473.63px] h-[473.63px] left-[128.05px] top-[363.45px] absolute">
                        <div data-type="1 corner" className="w-[473.63px] h-[473.63px] left-0 top-0 absolute">
                            <div className="w-96 h-96 left-0 top-0 absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-[473.63px] h-[473.63px] left-[191.01px] top-[270.44px] absolute">
                        <div data-type="1 corner" className="w-[473.63px] h-[473.63px] left-0 top-0 absolute">
                            <div className="w-96 h-96 left-0 top-0 absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-72 h-72 left-[203.72px] top-[85.85px] absolute origin-top-left rotate-[12.53deg]">
                        <div data-type="1 corner" className="w-96 h-96 left-0 top-0 absolute">
                            <div className="w-72 h-72 left-0 top-[41.26px] absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-[535.66px] h-[509.21px] left-[571.22px] top-[595.42px] absolute origin-top-left rotate-[175.84deg]">
                        <div data-type="1 corner" className="w-[571.22px] h-[546.76px] left-0 top-0 absolute">
                            <div className="w-[489.62px] h-[468.65px] left-[81.60px] top-[72.55px] absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div data-angle="0" data-rotation-speed="Ultra-fast" className="w-96 h-96 left-[642.22px] top-[243.25px] absolute origin-top-left rotate-[58.82deg]">
                        <div data-type="1 corner" className="w-[494.90px] h-[501.11px] left-0 top-0 absolute">
                            <div className="w-96 h-96 left-0 top-[26.14px] absolute bg-[#CAFF69] rounded-full"></div>
                        </div>
                    </div>
                    <div className="w-96 h-96 left-[229.65px] top-[123.06px] absolute bg-[#CAFF69] rounded-full"></div>
                    <div className="w-56 h-56 left-[118.04px] top-[389.21px] absolute bg-[#CAFF69] rounded-full"></div>
                </div>
            </div>
            <img className="w-[930.64px] h-[930.64px] left-[41.47px] top-[73px] absolute origin-top-left rotate-[5.58deg]" src="/src/assets/me.svg" />
            <div className="w-[862px] left-[858px] top-[392px] absolute text-justify justify-start text-zinc-950 text-2xl font-extralight font-['Inter']">
                I’m a Visual Designer with 2+ years of experience, always curious about how design can tell stories and spark emotions. I explore different mediums, experiment with colors, and constantly try new ways of bringing ideas to life. For me, design isn’t just about making things look good, it’s about making them feel good.<br/><br/>I love creating work that carries a sense of playfulness with purpose. Sometimes that looks like nostalgic illustrations, sometimes it’s bold layouts or quirky stickers, and other times it’s just me scribbling in a sketchbook until something clicks. I believe design should invite people in, make them smile, and leave a little memory behind.<br/><br/>I design cool stuff &lt;3
            </div>
            <a className="w-28 left-[858px] top-[912px] absolute text-justify justify-start text-zinc-950 text-2xl font-medium font-['Inter']" href="https://mail.google.com/mail/?view=cm&fs=1&to=suhaani2301@gmail.com" target="_blank">GMAIL</a>
            <a className="w-32 left-[1079px] top-[912px] absolute text-justify justify-start text-zinc-950 text-2xl font-medium font-['Inter']" href="https://www.behance.net/suhaaninigam" target="_blank">BEHANCE</a>
            <a className="w-32 left-[1326px] top-[912px] absolute text-justify justify-start text-zinc-950 text-2xl font-medium font-['Inter']" href="https://www.linkedin.com/in/suhaaninigam/" target="_blank">LINKEDIN</a>
            <a className="w-36 left-[1572px] top-[912px] absolute text-justify justify-start text-zinc-950 text-2xl font-medium font-['Inter']" href="https://www.instagram.com/suhaani.ii/" target="_blank">INSTAGRAM</a>
            <a className="left-[851px] top-[219px] absolute text-justify justify-start text-zinc-950 text-5xl font-extrabold font-['Inter'] uppercase tracking-[22.50px]">Hi    I’m    Suhaani</a>
            <button
                className="focus:outline-none"
                onClick={() => setShowHomePage(true)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                aria-label="Go to HomePage"
            >
                <img className="w-16 h-14 left-[926px] top-[46px] absolute" src="/src/assets/cat.svg" />
            </button>
        </div>
    );
};

export default MePage;