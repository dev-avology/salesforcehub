import { createContext, useState, useEffect, useContext } from "react";
import API from '../services/api';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [Authuser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        setAuthUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const user = localStorage.getItem('user');
        
        if (jwt && user) {
            setAuthUser(JSON.parse(user));  
            setIsAuthenticated(true);  
        }
        setLoading(false);  
    }, []);

    
    const login = () => {
        const jwt = localStorage.getItem('jwt');
        const user = localStorage.getItem('user');
        
        if (jwt && user) {
            setAuthUser(JSON.parse(user));  
            setIsAuthenticated(true);  
        }
        setLoading(false);  
    };

    return (
        <AuthContext.Provider value={{
            Authuser,
            isAuthenticated,
            logout,
            loading,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
