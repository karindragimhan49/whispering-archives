"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, TriangleAlert } from 'lucide-react';

export default function LoginPage() {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (agentId === 'agent47' && password === 'password123') {
        router.push('/archive');
      } else {
        setError('// AUTHENTICATION FAILURE: Invalid Credentials or Clearance Level Too Low.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
  <img
    src="/images/login.png"
    alt="Secure Archive Background"
    className="w-full h-full object-cover opacity-50"
  />
</div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg p-8"
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl text-white uppercase">
            Secure Access
          </h1>
          <p className="text-red-500 text-sm mt-2 tracking-widest">
            // WHISPERING ARCHIVES //
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              id="agentId"
              type="text"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              className="peer w-full bg-transparent border-b-2 border-slate-700 p-2 text-lg text-white outline-none transition-colors focus:border-red-500"
              required
            />
            <label
              htmlFor="agentId"
              className={`absolute left-2 transition-all duration-300 pointer-events-none
                ${agentId ? 'text-xs -top-5 text-red-500' : 'text-lg top-2 text-slate-500 peer-focus:text-xs peer-focus:-top-5 peer-focus:text-red-500'}`}
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
            />
             <label
              htmlFor="password"
              className={`absolute left-2 transition-all duration-300 pointer-events-none
                ${password ? 'text-xs -top-5 text-red-500' : 'text-lg top-2 text-slate-500 peer-focus:text-xs peer-focus:-top-5 peer-focus:text-red-500'}`}
            >
              PASSPHRASE
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-10 flex items-center justify-center gap-2 py-3 bg-transparent text-lg text-red-500 border-2 border-red-500 transition-all 
            hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "AUTHENTICATING..." : "INITIATE CONNECTION"}
            {!isLoading && <ArrowRight className="w-6 h-6" />}
          </button>
        </form>

        {error && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-3 bg-red-900/50 border border-red-500 text-red-300 text-sm flex items-center gap-3"
            >
                <TriangleAlert className="w-5 h-5 flex-shrink-0"/>
                <span>{error}</span>
            </motion.div>
        )}
      </motion.div>
    </div>
  );
}