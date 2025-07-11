'use client';

import React, { useState, useEffect, useCallback } from 'react';
import API from '@/lib/api';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash, Search } from 'lucide-react'; // Added Search icon
import Link from 'next/link';

// AnomalyCard component remains the same
const AnomalyCard = ({ anomaly, onDeleted }) => (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-black/50 border border-green-900 rounded-md p-5 flex flex-col group transition-all hover:border-green-500/70">
        <div className="flex-grow mb-4">
            <p className="text-xs text-green-600 mb-1">ITEM #{anomaly.itemNumber}</p>
            <Link href={`/archive/${anomaly.itemNumber}`}>
                <h3 className="font-['VT323',_monospace] text-2xl text-green-300 group-hover:text-white transition-colors cursor-pointer">{anomaly.objectClass} Class Anomaly</h3>
            </Link>
            <p className="text-sm text-slate-400 mt-2 line-clamp-3">{anomaly.description}</p>
        </div>
        <div className="pt-4 border-t border-green-900/50 flex justify-between items-center text-xs">
            <span className="text-slate-500">LOGGED: {new Date(anomaly.createdAt).toLocaleDateString()}</span>
            <button onClick={() => onDeleted(anomaly._id)} className="p-1.5 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" title="Delete">
                <Trash className="w-4 h-4" />
            </button>
        </div>
    </motion.div>
);

// Main Archive Page
export default function ArchivePage() {
    const [anomalies, setAnomalies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(''); // Add search state

    // --- THIS IS THE FIX: Fetch data directly inside this page ---
    const fetchAnomalies = useCallback(async () => {
        try {
            setLoading(true);
            const res = await API.get('/anomalies', { 
                params: { search: searchTerm.trim() } // Add search functionality
            });
            setAnomalies(res.data);
        } catch (error) {
            toast.error("Failed to load archive entries.");
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchAnomalies();
        }, 300); // Debounce search
        return () => clearTimeout(handler);
    }, [fetchAnomalies]);
    
    const handleAnomalyDeleted = async (id) => {
        const originalAnomalies = [...anomalies];
        setAnomalies(anomalies.filter(a => a._id !== id));
        try {
            await API.delete(`/anomalies/${id}`);
            toast.success('Log entry expunged.');
        } catch (error) {
            setAnomalies(originalAnomalies);
            toast.error('Failed to expunge log entry.');
        }
    };

    if (loading) {
        return <div className="text-center animate-pulse text-xl text-green-400">ACCESSING SECURE ARCHIVES...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <h1 className="text-2xl text-white font-['VT323',_monospace]">Anomaly Feed</h1>
                 {/* Optional: Add search bar here if you remove it from header */}
            </div>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {anomalies.map(anomaly => (
                        <AnomalyCard key={anomaly._id} anomaly={anomaly} onDeleted={handleAnomalyDeleted} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}