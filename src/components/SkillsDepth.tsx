import { SKILLS } from '../data';

export const SkillsDepth = () => {
    return (
        <div className="h-full bg-stock-panel border border-gray-800 flex flex-col">
            <div className="p-3 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
                <h3 className="text-gray-400 text-xs font-mono font-bold tracking-wider">MARKET DEPTH (SKILLS)</h3>
                <span className="text-[10px] bg-green-900/30 text-green-400 px-1 rounded">LIVE</span>
            </div>
            <div className="flex-1 overflow-auto p-1 font-mono text-xs custom-scrollbar">
                <div className="flex justify-between px-3 py-1 text-gray-500 text-[10px]">
                    <span>ASSET</span>
                    <div className="flex gap-4">
                        <span>LEVEL</span>
                        <span className="w-12 text-right">VOL (YRS)</span>
                    </div>
                </div>
                {SKILLS.map((skill, i) => (
                    <div key={i} className="relative flex justify-between items-center px-3 py-2 my-1 hover:bg-white/5 group">
                        {/* Background bar simulating volume/depth based on years (assuming max 10 years for scale) */}
                        <div
                            className="absolute left-0 top-0 bottom-0 bg-stock-warm/10 transition-all duration-500"
                            style={{ width: `${(skill.change / 10) * 100}%` }}
                        />

                        <div className="relative flex items-center gap-2 z-10">
                            <skill.icon className="w-3 h-3 text-stock-muted group-hover:text-stock-warm" />
                            <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>

                        <div className="relative z-10 flex gap-4">
                            <span className="text-gray-400">{skill.level}</span>
                            <span className="text-stock-up w-12 text-right font-mono font-bold">
                                {skill.change} YRS
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
