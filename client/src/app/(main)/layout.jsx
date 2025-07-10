// client/src/app/(main)/layout.jsx

import { LogOut } from 'lucide-react';
import Link from 'next/link';

// Mock data for the sidebar list
const mockAnomalies = [
  { id: '001', title: 'The Stairwell' },
  { id: '002', title: 'The "Living" Room' },
  { id: '003', title: 'The Man with No Shadow' },
];

const Sidebar = () => (
  <aside className="w-1/4 min-w-[250px] bg-black/30 border-r border-green-900/50 flex flex-col">
    <div className="p-4 border-b border-green-900/50">
      <h2 className="text-lg font-['VT323',_monospace] text-white">ARCHIVED ANOMALIES</h2>
    </div>
    <nav className="flex-grow overflow-y-auto">
      <ul>
        {mockAnomalies.map(anomaly => (
          <li key={anomaly.id}>
            <Link
              href={`/entry/${anomaly.id}`}
              className="block p-3 text-green-400 hover:bg-green-900/50 border-b border-green-900/50 transition-colors"
            >
              ITEM #{anomaly.id}: {anomaly.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="p-4 border-t border-green-900/50">
        <button className="w-full py-2 bg-green-900/50 text-green-400 border border-green-700 hover:bg-green-800/50 hover:text-white transition-all">
            + LOG NEW ANOMALY
        </button>
    </div>
  </aside>
);

const Header = () => (
    <header className="flex justify-between items-center p-4 border-b border-green-900/50">
        <div>
            <span className="text-green-500">AGENT ID: </span>
            <span className="text-white">AGENT_47</span>
        </div>
        <button className="flex items-center gap-2 text-red-500 hover:text-white">
            <LogOut className="w-4 h-4"/>
            SECURE LOGOUT
        </button>
    </header>
);

export default function MainAppLayout({ children }) {
  return (
    <div className="flex h-screen bg-black text-green-400 font-mono">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-grow p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}