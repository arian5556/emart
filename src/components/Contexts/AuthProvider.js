import React from 'react';
import { createContext } from 'react';
import useFirebaseAuth from '../hooks/Firebase';

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const allFirebase=useFirebaseAuth()
    return (
        <AuthContext.Provider value={allFirebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;