import { EXPERIENCE } from '../data';

export const ExperienceFeed = () => {
    return (
        <div className="flex flex-col h-full bg-stock-panel border border-gray-800">
            <div className="p-3 border-b border-gray-800 bg-gray-900/50">
                <h3 className="text-gray-400 text-xs font-mono font-bold tracking-wider">TRADE HISTORY (EXPERIENCE)</h3>
            </div>
            <div className="flex-grow overflow-auto p-2 space-y-1 font-mono text-xs custom-scrollbar">
                <div className="grid grid-cols-4 text-gray-500 px-2 py-1 text-[10px] uppercase">
                    <span className="col-span-1">Time</span>
                    <span className="col-span-2">Position</span>
                    <span className="col-span-1 text-right">Impact</span>
                </div>
                {EXPERIENCE.map((job, i) => (
                    <div key={i} className="grid grid-cols-4 items-center p-2 hover:bg-white/5 border-l-2 border-transparent hover:border-stock-warm transition-colors cursor-pointer group">
                        <div className="col-span-1 text-gray-400 group-hover:text-white">{job.duration}</div>
                        <div className="col-span-2">
                            <div className="text-stock-text font-bold text-xs truncate">{job.role}</div>
                            <div className="text-gray-500 text-[10px] truncate">{job.company}</div>
                        </div>
                        <div className="col-span-1 text-right text-stock-up font-bold">
                            {job.impact}
                        </div>
                    </div>
                ))}

                {/* Fill empty space with simulated data rows to look full */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`fill-${i}`} className="grid grid-cols-4 items-center p-2 opacity-30 select-none pointer-events-none">
                        <div className="col-span-1 text-gray-600">--:--</div>
                        <div className="col-span-2 text-gray-600">----------------</div>
                        <div className="col-span-1 text-right text-gray-600">---</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
