import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    //It will setUserData from employees and admin localstorage:
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        //getting employees and admin data from getLocalStorage function:
        const { employees, admin } = getLocalStorage()
        // console.log({employees})
        setUserData(employees)
    }, [setUserData])
    // console.log(userData)
    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider