import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Hero_sec } from '../Home_section/Hero_sec';
import { About_sec } from '../Home_section/About_sec';
import { PreviousEvent } from '../Home_section/PreviousEent';
import { UpcomingEvent } from '../Home_section/UpcomingEvent';
import { Organizers } from '../Home_section/Orgnaizers';
import { Footer } from '../Home_section/Footer';

export const Home = () => {



    return (

        <div className=" bg-[var(--bg-purple)] ">
                 <Navbar />
                 <Hero_sec/>
                 <About_sec/>
                 <PreviousEvent/>
                 <UpcomingEvent/>
                 <Organizers/>
                 <Footer/>
        </div>
        
    );
};
