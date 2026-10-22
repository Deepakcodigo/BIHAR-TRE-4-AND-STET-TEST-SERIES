import React, { useState } from 'react';
import { X, Check, Copy, Globe, Terminal, Server, ExternalLink } from 'lucide-react';

interface HostGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostGuideModal: React.FC<HostGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border-2 border-black max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto font-sans text-black">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-black hover:bg-zinc-100 transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pb-4 border-b border-black">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Production Deployment Guide
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black">
            How to Host & Deploy This Website Easily
          </h2>
          <p className="text-xs text-zinc-600 mt-1">
            Curated for <span className="font-semibold text-black">Deepak</span>. This project compiles into clean, standalone static files (<code className="font-mono bg-zinc-100 px-1">dist/</code>) and includes a zero-dependency production server (<code className="font-mono bg-zinc-100 px-1">server.cjs</code>).
          </p>
        </div>

        {/* Step 1: Build Command */}
        <div className="mb-6 p-4 border border-black bg-zinc-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase font-mono text-black">
              Step 1: Build the Static Bundle
            </span>
            <button
              onClick={() => copyToClipboard('npm run build', 1)}
              className="px-2.5 py-1 text-[11px] font-mono border border-black hover:bg-zinc-200 flex items-center gap-1 transition-colors"
            >
              {copiedIndex === 1 ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedIndex === 1 ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-black text-white p-3 font-mono text-xs overflow-x-auto">
            npm run build
          </pre>
          <p className="text-[11px] text-zinc-600 mt-2">
            This creates a production-ready, fully bundled <code className="font-mono">dist/</code> folder with HTML, CSS, and JS ready for any host.
          </p>
        </div>

        {/* 3 Simple Free Hosting Options */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-black">
            Choose Your Preferred Free Hosting Platform:
          </h3>

          {/* Option A: Netlify Drag-and-Drop */}
          <div className="p-4 border border-zinc-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-black text-white">Method A (Easiest - 30 seconds)</span>
              <span className="text-xs font-bold text-black">Netlify Drop (Zero Setup)</span>
            </div>
            <ol className="list-decimal list-inside text-xs text-zinc-700 space-y-1 mt-2">
              <li>Run <code className="font-mono bg-zinc-100 px-1">npm run build</code> in your terminal.</li>
              <li>Go to <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-black font-semibold underline">app.netlify.com/drop</a> in your browser.</li>
              <li>Drag and drop the newly created <code className="font-mono font-bold">dist</code> folder into the page.</li>
              <li>Your site goes LIVE immediately with a free HTTPS custom URL!</li>
            </ol>
          </div>

          {/* Option B: Vercel */}
          <div className="p-4 border border-zinc-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-black text-white">Method B</span>
              <span className="text-xs font-bold text-black">Vercel (Git Automated Deployment)</span>
            </div>
            <ol className="list-decimal list-inside text-xs text-zinc-700 space-y-1 mt-2">
              <li>Push your code to a GitHub repository.</li>
              <li>Log into <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-black font-semibold underline">vercel.com</a> and click "Add New Project".</li>
              <li>Select your repository. Vercel automatically detects Vite with build command <code className="font-mono bg-zinc-100 px-1">npm run build</code> and output directory <code className="font-mono bg-zinc-100 px-1">dist</code>.</li>
              <li>Click <strong>Deploy</strong>. Any git push will auto-update your live test series!</li>
            </ol>
          </div>

          {/* Option C: Node.js / Docker / VPS */}
          <div className="p-4 border border-zinc-300">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-black text-white">Method C</span>
              <span className="text-xs font-bold text-black">Node.js Server (Render / Railway / VPS / Cloud Run)</span>
            </div>
            <p className="text-xs text-zinc-700 mt-2 mb-2">
              The project includes a built-in production Node server in <code className="font-mono bg-zinc-100 px-1">server.cjs</code> that serves the compiled static files and API endpoints.
            </p>
            <pre className="bg-black text-white p-3 font-mono text-xs overflow-x-auto">
              npm run build && npm start
            </pre>
          </div>
        </div>

        {/* Curator Note */}
        <div className="p-4 bg-zinc-100 border border-zinc-300 text-xs">
          <p className="font-bold text-black mb-1">Created for Deepak:</p>
          <p className="text-zinc-600 mb-2">
            Your name and LinkedIn profile (<a href="https://www.linkedin.com/in/deepak03-in" target="_blank" rel="noreferrer" className="underline font-mono">https://www.linkedin.com/in/deepak03-in</a>) are baked into the header, footer, printable test paper, and scorecards.
          </p>
        </div>

        <div className="flex justify-end pt-4 border-t border-zinc-200 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
