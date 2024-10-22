import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    //getting employees and admin data from getLocalStorage function:
    const { employees, admin } = getLocalStorage()

    //It will setUserData from employees and admin localstorage:
    useEffect(() => {
        setUserData({ employees, admin })
        // console.log(userData)
    }, [AuthContext])
    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider