// client/src/app/(main)/archive/page.jsx

import { FileSearch } from 'lucide-react';

export default function ArchiveHomePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center text-green-700">
      <FileSearch className="w-16 h-16 mb-4" />
      <h2 className="text-2xl font-['VT323',_monospace] text-green-400">ARCHIVE-MAIN</h2>
      <p className="mt-2 max-w-sm">
        Select a log entry from the sidebar to view detailed containment procedures and incident reports. Exercise caution.
      </p>
    </div>
  );
}