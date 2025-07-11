'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import API from '@/lib/api';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { X, FileText } from 'lucide-react';

const anomalySchema = z.object({ /* ... (Keep the schema from before) ... */ });

export default function NewAnomalyForm({ onClose, onAnomalyAdded }) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(anomalySchema),
        defaultValues: { objectClass: 'Euclid' }
    });

    const onSubmit = async (data) => {
        try {
            const res = await API.post('/anomalies', data);
            onAnomalyAdded(res.data);
            toast.success(`Anomaly #${data.itemNumber} successfully logged.`);
            onClose();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to log anomaly.");
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-black border border-red-500/50 rounded-lg p-6 w-full max-w-2xl relative shadow-lg shadow-red-900/50" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X /></button>
                <div className="flex items-center gap-3 mb-4"><FileText className="w-6 h-6 text-red-500"/><h2 className="text-2xl font-['VT323',_monospace] text-white">Log New Anomaly</h2></div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-green-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input {...register("itemNumber")} placeholder="Item #" className="w-full p-2 bg-slate-900/50 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
                            {errors.itemNumber && <p className="text-red-500 text-xs mt-1">{errors.itemNumber.message}</p>}
                        </div>
                        <div>
                            <select {...register("objectClass")} className="w-full p-2 bg-slate-900/50 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option>Safe</option><option>Euclid</option><option>Keter</option><option>Thaumiel</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <textarea {...register("description")} placeholder="Description of the anomaly..." className="w-full p-2 bg-slate-900/50 border border-slate-700 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>
                    <div>
                        <textarea {...register("containmentProcedures")} placeholder="Special Containment Procedures..." className="w-full p-2 bg-slate-900/50 border border-slate-700 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                        {errors.containmentProcedures && <p className="text-red-500 text-xs mt-1">{errors.containmentProcedures.message}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 disabled:bg-red-800/50">
                        {isSubmitting ? "LOGGING..." : "SUBMIT LOG"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};