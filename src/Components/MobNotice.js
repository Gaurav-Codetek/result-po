import React from 'react'

function MobNotice(){
    return(
        <>
        <div className="sm:hidden mb-10"> 
            <p className="text-left mx-10">Latest Updates:</p>
                <div className="relative mt-2 flex justify-center rounded-md mb-5">
                    <div className="pointer-events-none  inset-y-0 left-0 flex items-center w-0">
                        {/* <span className="text-gray-500 sm:text-sm"></span>sadsda */}
                    </div>
                    <input type="text" name="price" id="price" disabled className="block w-76 rounded-md border-0 py-1 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-bold placeholder:text-black focus:outline-none focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" placeholder="Result Updated !" />
                    <div className="absolute inset-y-0 right-0 flex pl-5 mr-10 border-l items-center bg-sky-700 rounded-lg">
                        <p className="text-white font-semibold mr-4">23 Aug</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobNotice