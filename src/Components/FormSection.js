import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdContacts } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'


function FormSection() {
    const [roles, setRoles] = useState('Select Roles')

    const onSelect = () => {
        let a = document.querySelector('#roles');
        var rolesValue = a.value;

        if (rolesValue === "Roles") {
            setRoles('Select Roles');
        }
        else if (rolesValue === "Student") {
            setRoles('Student');
        }
        else if (rolesValue === "Faculty") {
            setRoles('Faculty');
        }
        else if (rolesValue === "Admin") {
            setRoles('Admin')
        }
        // else{
        //     setRoles('Select Roles')
        // }
    }
    return (
        <>
            {/* -------------UserName--------------- */}
            <div>
                <div className="relative mt-2 flex justify-center rounded-md  mb-5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-12 lg:pl-14 w-4">
                        <span className="text-gray-500 sm:text-sm"><FaUser size="20" color='#0a7fd5' /></span>
                    </div>
                    <input type="text" name="username" id="username" className="block w-76 rounded-3xl border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" placeholder="User ID" />
                </div>
            </div>

            {/* ------------Password---------------- */}
            <div>
                <div className="relative mt-2 flex justify-center rounded-md mb-5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-12 lg:pl-14 w-4">
                        <span className="text-gray-500 sm:text-sm"><RiLockPasswordFill size="20" color='#0a7fd5' /></span>
                    </div>
                    <input type="text" name="username" id="username" className="block w-76 rounded-3xl border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" placeholder="Password" />
                </div>
            </div>

            {/* ------------Select Roles---------------- */}
            <div>
                <div className="relative mt-2 flex justify-center rounded-md mb-5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-12 lg:pl-14 w-4">
                        <span className="text-gray-500 sm:text-sm"><MdContacts size="20" color='#0a7fd5' /></span>
                    </div>
                    <input type="text" name="price" id="price" disabled className="block w-76 rounded-3xl border-0 py-2 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-sky-900 sm:text-sm sm:leading-6" placeholder={roles} />
                    <div className="absolute inset-y-0 right-0 flex mr-10 border-l  items-center ">
                        <select id="roles" onClick={onSelect} name="roles" defaultValue="Select Roles" className="h-full rounded-md border-0 cursor-pointer bg-transparent py-0 lg:mr-2 pl pr text-gray-500 focus:outline-none sm:text-sm">
                            <option onClick={onSelect} value="Roles">Roles</option>
                            <option onClick={onSelect} value="Student">Student</option>
                            <option onClick={onSelect} value="Faculty">Faculty</option>
                            <option onClick={onSelect} value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* --------------Submit Button---------------- */}
            <button className="rounded-full bg-sky-600 py-1 px-4 mt-5 md:mt-0 text-slate-50 w-2/5 hover:bg-sky-700 mb-3">Log In</button>
            <h3 className="text-sm mb-4 hover:text-sky-700 cursor-pointer hover:underline" >Forgot Password ?</h3>
        </>
    );
}

export default FormSection