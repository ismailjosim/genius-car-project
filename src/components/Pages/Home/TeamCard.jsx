import React from 'react';
import facebook from '../../../assets/images/team/facebook.svg';
import twitter from '../../../assets/images/team/twitter.svg';
import Instagram from '../../../assets/images/team//instagram.svg';
import linkedin from '../../../assets/images/team/linkedin.svg';


const TeamCard = ({ team }) => {
    const { name, img, expertise } = team;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md ">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-[#F3F3F3]" />
            <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold my-2 text-[#444444]">{name}</h2>
                <p className="text-[#737373] text-base font-bold">{expertise}</p>
            </div>
            <div className='flex justify-center gap-2 my-2'>
                <button className='w-8'>
                    <img src={facebook} alt="facebook" />
                </button>
                <button className='w-8'>
                    <img src={twitter} alt="twitter" />
                </button>
                <button className='w-8'>
                    <img src={Instagram} alt="Instagram" />
                </button>
                <button className='w-8'>
                    <img src={linkedin} alt="linkedin" />
                </button>
            </div>
        </div>
    );
};

export default TeamCard;
