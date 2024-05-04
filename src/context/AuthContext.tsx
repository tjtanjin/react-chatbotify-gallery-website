import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserData {
	name: string;
	email: string;
}

interface AuthContextType {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	userData: UserData | null;
	setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Initialize isLoggedIn with the value from local storage or false if it doesn't exist
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
    });
    const [userData, setUserData] = useState<UserData | null>(null);

    // Save isLoggedIn to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};