'use client';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogOut, Plus } from 'lucide-react';
import NewAnomalyForm from '@/components/dashboard/NewAnomalyForm'; // Assuming this component exists
import { AnimatePresence } from 'framer-motion';

// Loading screen component remains the same
const FullScreenLoader = () => (
    <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
    </div>
);

// This is the main layout for all authenticated pages (like the dashboard)
export default function MainAppLayout({ children }) {
    const { agent, logout, loading: authLoading } = useAuth();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // This effect protects the route. If auth is checked and no user, redirect to login.
        if (!authLoading && !agent) {
            router.push('/login');
        }
    }, [agent, authLoading, router]);

    // This function will be called from the form after a new anomaly is added.
    // For now, it just closes the modal. The dashboard will handle refetching.
    const handleAnomalyAdded = () => {
        setShowModal(false);
        // We could potentially trigger a global refetch here if needed
    };

    // While checking for authentication, show a loader
    if (authLoading || !agent) {
        return <FullScreenLoader />;
    }

    // If authenticated, show the main app layout
    return (
        <>
            <div className="flex h-screen bg-black text-green-400 font-['Share_Tech_Mono',_monospace]">
                <Sidebar onNewLogClick={() => setShowModal(true)} />
                <div className="flex-1 flex flex-col">
                    <Header agent={agent} onLogout={logout} />
                    <main className="flex-grow p-6 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
            <AnimatePresence>
                {showModal && <NewAnomalyForm onClose={() => setShowModal(false)} onAnomalyAdded={handleAnomalyAdded} />}
            </AnimatePresence>
        </>
    );
}

// Sidebar Component (now simplified, no data fetching)
const Sidebar = ({ onNewLogClick }) => (
    <aside className="w-1/4 min-w-[300px] bg-black/30 border-r border-green-900/50 flex flex-col">
        <div className="p-4 border-b border-green-900/50">
            <h2 className="text-lg font-['VT323',_monospace] text-white tracking-widest">ARCHIVED ANOMALIES</h2>
        </div>
        
        {/* The list is now static or can be fetched inside if needed, but we keep the layout simple */}
        <nav className="flex-grow overflow-y-auto p-3 text-sm text-slate-500">
            <p>// Select an anomaly from the main feed to view details.</p>
            {/* We will add the dynamic list back later if needed */}
        </nav>
        
        <div className="p-4 border-t border-green-900/50">
            <button 
                onClick={onNewLogClick} 
                className="w-full py-2 bg-green-900/50 text-green-400 border border-green-700 hover:bg-green-800/50 hover:text-white transition-all flex items-center justify-center gap-2"
            >
                <Plus className="w-4 h-4"/> LOG NEW ANOMALY
            </button>
        </div>
    </aside>
);

// Header Component
const Header = ({ agent, onLogout }) => (
    <header className="flex justify-between items-center p-4 border-b border-green-900/50">
        <div>
            <span className="text-green-500">AGENT ID: </span>
            <span className="text-white">{agent?.agentId || 'UNKNOWN'}</span>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-red-500 hover:text-white">
            <LogOut className="w-4 h-4"/> SECURE LOGOUT
        </button>
    </header>
);