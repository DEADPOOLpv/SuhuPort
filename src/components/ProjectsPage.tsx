import React, { useState } from 'react';
import HomePage from './HomePage';

const ProjectsPage: React.FC = () => {        
    const [showHomePage, setShowHomePage] = useState(false);
    
    if (showHomePage) {
        return <HomePage />;
    }

    return (
        <div>
            <button className="focus:outline-none" 
            onClick={() => setShowHomePage(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Go to HomePage">
                <div className="absolute left-[926px] top-[46px] flex flex-col items-center">
                    <img className="w-17 h-14 object-center object-cover" src="/assets/cat.svg" alt="Cat icon" />
                    <p className="w-36 h-7 text-center text-[#070307] text-xl font-normal lexend-exa lowercase -mt-2">HOME</p>
                </div>
            </button>
        </div>
    );
};

export default ProjectsPage;