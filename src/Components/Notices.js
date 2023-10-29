import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Notices(){
    return(
        <>
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
        </>
    );
}

export default Notices