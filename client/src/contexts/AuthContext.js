'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/api'; // We'll create this file next
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const loadAgentFromToken = async () => {
            const token = localStorage.getItem('archive-token');
            if (token) {
                API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                try {
                    // We need a /api/auth/me route in the backend
                    // Let's assume we have it
                    const res = await API.get('/auth/me'); 
                    setAgent(res.data);
                } catch (error) {
                    localStorage.removeItem('archive-token');
                }
            }
            setLoading(false);
        };
        loadAgentFromToken();
    }, []);

    const login = async (agentId, password) => {
        const res = await API.post('/auth/login', { agentId, password });
        localStorage.setItem('archive-token', res.data.token);
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        setAgent(res.data); // The response contains user data without the password
        router.push('/archive');
    };

    const register = async (agentId, password) => {
        // Assuming clearanceLevel is handled by backend or default
        const res = await API.post('/auth/register', { agentId, password });
        localStorage.setItem('archive-token', res.data.token);
        API.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        setAgent(res.data);
        router.push('/archive');
    };

    const logout = () => {
        localStorage.removeItem('archive-token');
        delete API.defaults.headers.common['Authorization'];
        setAgent(null);
        toast.success("Secure connection terminated.");
        router.push('/login');
    };

    const value = { agent, loading, login, register, logout, isAuthenticated: !!agent };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};