import React from 'react';

import person01 from '../../../assets/images/team/1.jpg';
import person02 from '../../../assets/images/team/2.jpg';
import person03 from '../../../assets/images/team/3.jpg';
import TeamCard from './TeamCard';


const teamData = [
    {
        id: 1,
        name: "Car Engine Plug",
        expertise: "Engine Expert",
        img: person01
    },
    {
        id: 2,
        name: "Car Air Filter",
        expertise: "Engine Expert",
        img: person02
    },
    {
        id: 3,
        name: "Cools Led Light",
        expertise: "Engine Expert",

        img: person03
    }
]



const Team = () => {
    return (
        <div className='my-20'>
            <div className='text-center mb-10'>
                <h4 className="text-xl font-bold text-primary">Team</h4>
                <h2 className="text-5xl font-bold sm:leading-snug">Meet Our Team</h2>
                <p className="text-base font-[#737373] font-normal leading-snug w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-11/12 md:w-11/12 lg:w-full mx-auto'>
                {
                    teamData.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;
