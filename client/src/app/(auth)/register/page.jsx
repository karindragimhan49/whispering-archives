'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passphrases do not match.");
    }
    setIsLoading(true);
    try {
      await register(agentId, password);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed.');
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 w-full max-w-lg p-8"
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl text-white uppercase font-['Bebas_Neue',_sans-serif]">
          Request Access
        </h1>
        <p className="text-red-500 text-sm mt-2 tracking-widest">
          // AGENT REGISTRATION //
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="relative">
          <input
            id="agentId"
            type="text"
            value={agentId}
            onChange={(e) => setAgentId(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-slate-700 p-2 text-lg text-white outline-none transition-colors focus:border-red-500"
            required
            disabled={isLoading}
          />
          <label
            htmlFor="agentId"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${agentId ? 'text-xs -top-5 text-red-500' : 'text-lg top-2 text-slate-500 peer-focus:text-xs peer-focus:-top-5 peer-focus:text-red-500'}`}
          >
            AGENT_ID
          </label>
        </div>

        <div className="relative mt-8">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-slate-700 p-2 text-lg text-white outline-none transition-colors focus:border-red-500"
            required
            disabled={isLoading}
          />
           <label
            htmlFor="password"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${password ? 'text-xs -top-5 text-red-500' : 'text-lg top-2 text-slate-500 peer-focus:text-xs peer-focus:-top-5 peer-focus:text-red-500'}`}
          >
            PASSPHRASE
          </label>
        </div>
        
        <div className="relative mt-8">
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-slate-700 p-2 text-lg text-white outline-none transition-colors focus:border-red-500"
            required
            disabled={isLoading}
          />
           <label
            htmlFor="confirmPassword"
            className={`absolute left-0 transition-all duration-300 pointer-events-none ${confirmPassword ? 'text-xs -top-5 text-red-500' : 'text-lg top-2 text-slate-500 peer-focus:text-xs peer-focus:-top-5 peer-focus:text-red-500'}`}
          >
            CONFIRM_PASSPHRASE
          </label>
        </div>

        <p className="text-xs text-slate-500">
            Already have clearance? <Link href="/login" className="text-red-500 hover:underline">Proceed to Secure Login.</Link>
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-10 flex items-center justify-center gap-2 py-3 bg-red-600 text-lg text-white transition-all hover:bg-red-700 disabled:opacity-50"
        >
          {isLoading ? "SUBMITTING REQUEST..." : "REQUEST ARCHIVE ACCESS"}
        </button>
      </form>
    </motion.div>
  );
}