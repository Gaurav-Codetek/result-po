import React from 'react'
import logo from './Images/UIET_logo.png'
import FormSection from './FormSection';
import Notices from './Notices';
import MobNotice from './MobNotice';

function Bg() {
    return (
        <>
            <div className=" bg-img bg-cov h-screen blur-sm relative overflow-hidden"></div>
            <div className="h-fit absolute border top-1/2 left-2/4 trans-50-revert flex w-4/5 md:w-11/12 lg:w-9/12 rounded-r-md rounded-l-md shadow-2xl" >
                <div className="bg-white w-full md:w-2/5 flex-col items-center justify-center rounded-l-md rounded-r-md md:rounded-r-none shadow-2xl ">
                    <div className="flex items-center justify-center">
                        <img className="h-32 w-32 md:h-36 md:w-36 mt-4" src={logo} alt="UIET-logo" />
                    </div>
                    <div className="font-bold text-xl leading-10">UIET Panjab University</div>
                    <div className="font-extrabold text-lg mb-8 md:mb-0 lg:mb-5 lg:text-xl leading-10 text-blue-950">RESULT PORTAL</div>
                    <MobNotice/>
                    <FormSection />
                </div>
                <div className="w-3/5 hidden md:block bg-slate-50/40 rounded-r-md flex-col items-center justify-center">
                    <Notices/>
                </div>
            </div>
        </>
    );
}

export default Bg