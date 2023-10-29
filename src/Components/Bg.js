import React from 'react'
import logo from './Images/UIET_logo.png'
import FormSection from './FormSection';
import {BsArrowRight} from 'react-icons/bs'

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
                    <FormSection />
                </div>
                <div className="w-3/5 hidden md:block bg-slate-50/40 rounded-r-md flex-col items-center justify-center">
                    <div className="">
                        <p className="text-3xl mt-6"> Notices & Updates</p>
                    </div>
                    <div className="border-md border border-slate-950 mx-32 lg:mx-52 my-4"></div>
                    <br />
                    <div className="flex justify-center items-center mx-2 my-4">
                        <div className="w-fit bg-sky-600/70 py-2 px-3 rounded-md text-white mx-10">
                            <p className="txt-xl">23</p>
                            <p className="txt-sm">aug</p>
                        </div>
                        <div className="w-4/5 text-left">
                            <p className="font-semibold text-xl">Result update!</p>
                            <p className="font-normal">2nd year results uploaded.</p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center items-center mx-2 my-4">
                        <div className="w-fit bg-sky-600/70 py-2 px-3 rounded-md text-white mx-10">
                            <p className="txt-xl">23</p>
                            <p className="txt-sm">aug</p>
                        </div>
                        <div className="w-4/5 text-left">
                            <p className="font-semibold text-xl">Result update!</p>
                            <p className="font-normal">2nd year results uploaded.</p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-center items-center mx-2 my-4">
                        <div className="w-fit bg-sky-600/70 py-2 px-3 rounded-md text-white mx-10">
                            <p className="txt-xl">23</p>
                            <p className="txt-sm">aug</p>
                        </div>
                        <div className="w-4/5 text-left">
                            <p className="font-semibold text-xl">Result update!</p>
                            <p className="font-normal">2nd year results uploaded.</p>
                        </div>
                    </div>

                    <div className="w-11/12 flex items-center justify-end">
                        <p className="text-right cursor-pointer hover:underline mx-1">Previous</p>
                        <BsArrowRight className="mt-1"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bg