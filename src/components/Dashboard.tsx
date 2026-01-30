import { StockChart } from './StockChart';
import { ExperienceFeed } from './ExperienceFeed';
import { SkillsDepth } from './SkillsDepth';
import { motion } from 'framer-motion';
import { Award, BookOpen, Linkedin, Github, Newspaper, Maximize2, Info } from 'lucide-react';
import { useState } from 'react';
import { ReportModal } from './ReportModal';
import { InfoModal } from './InfoModal';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    onClick?: () => void;
    onInfoClick?: () => void;
}

const Card = ({ children, className = "", delay = 0, onClick, onInfoClick }: CardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        onClick={onClick}
        className={`bg-stock-panel border border-gray-800 p-4 relative overflow-hidden ${className}`}
    >
        {children}
        {onInfoClick && (
            <button
                onClick={(e) => { e.stopPropagation(); onInfoClick(); }}
                className="absolute bottom-2 right-2 p-1.5 bg-stock-warm/20 text-stock-warm rounded-full hover:bg-stock-warm hover:text-black transition-all z-20 animate-pulse hover:animate-none"
            >
                <Info className="w-3 h-3" />
            </button>
        )}
    </motion.div>
);

export const Dashboard = () => {
    const [selectedReport, setSelectedReport] = useState<{ url: string, title: string } | null>(null);
    const [infoModal, setInfoModal] = useState<{ title: string, description: string } | null>(null);

    return (
        <div className="flex-1 p-2 gap-2 flex flex-col md:grid md:grid-cols-12 md:grid-rows-12 h-auto md:h-full md:overflow-hidden pb-8 md:pb-2">

            <ReportModal
                isOpen={!!selectedReport}
                onClose={() => setSelectedReport(null)}
                title={selectedReport?.title || ""}
                reportUrl={selectedReport?.url || ""}
            />

            <InfoModal
                isOpen={!!infoModal}
                onClose={() => setInfoModal(null)}
                title={infoModal?.title || ""}
                description={infoModal?.description || ""}
            />

            {/* Main Chart Area (Top Left) */}
            <Card
                className="w-full h-[450px] md:h-auto col-span-12 md:col-span-8 md:row-span-7"
                delay={0.1}
                onInfoClick={() => setInfoModal({
                    title: "Interactive Career Chart",
                    description: "This chart visualizes my career progression over time. Each candlestick represents a year or role. Hover to see specific technologies and achievements."
                })}
            >
                <div className="h-full w-full relative">
                    <StockChart />
                </div>
            </Card>

            {/* Experience Feed (Top Right) */}
            <Card
                className="w-full h-[350px] md:h-auto col-span-12 md:col-span-4 md:row-span-7 flex flex-col p-0"
                delay={0.2}
                onInfoClick={() => setInfoModal({
                    title: "Experience Feed",
                    description: "A live feed of my professional roles and key impacts. Scroll to see history and recent updates."
                })}
            >
                <ExperienceFeed />
            </Card>

            {/* Skills Depth (Bottom Left) */}
            <Card
                className="w-full h-[350px] md:h-auto col-span-12 md:col-span-3 md:row-span-5 p-0"
                delay={0.3}
                onInfoClick={() => setInfoModal({
                    title: "Skills Market Depth",
                    description: "A quantitative view of my technical skills. 'Volume' (YRS) indicates years of experience, and the depth bar shows relative strength."
                })}
            >
                <SkillsDepth />
            </Card>

            {/* News / Reports Gallery (Bottom Center) */}
            <Card
                className="w-full h-[350px] md:h-auto col-span-12 md:col-span-6 md:row-span-5 flex flex-col gap-2"
                delay={0.4}
                onInfoClick={() => setInfoModal({
                    title: "Analyst Reports",
                    description: "Featured analysis and dashboards. Click on a report card to view the full interactive PowerBI/Fabric visualization."
                })}
            >
                <div className="flex items-center gap-2 mb-1">
                    <Newspaper className="text-stock-up w-4 h-4" />
                    <span className="text-xs font-bold font-mono tracking-wider text-gray-400">ANALYST REPORTS & GALLERY</span>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
                    {/* Report 1: House Affordability */}
                    <div
                        className="bg-gradient-to-b from-gray-900 to-black rounded border border-gray-800 overflow-hidden flex flex-col relative group cursor-pointer hover:border-stock-warm transition-colors"
                        onClick={() => setSelectedReport({
                            title: "House Affordability",
                            url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZWM1M2U4YWYtMWUwYi00NDc5LTljMTItODg2MDA5OWNlZDUzIiwidCI6IjVmMjgyOTEwLTE3NmYtNDU5ZC1hYjdkLWI3NDRhYTZlZmMwNyIsImMiOjR9"
                        })}
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800)` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                            <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="mt-auto p-3 relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-stock-warm text-black text-[9px] font-bold px-1.5 py-0.5 rounded">REAL ESTATE</span>
                            </div>
                            <h3 className="text-xs font-bold text-white leading-tight mb-0.5 group-hover:text-stock-warm transition-colors">House Affordability</h3>
                            <p className="text-[9px] text-gray-400 line-clamp-1">Market Analysis & Trends</p>
                        </div>
                    </div>

                    {/* Report 2: EU Lifestyle Analysis */}
                    <div
                        className="bg-gradient-to-b from-gray-900 to-black rounded border border-gray-800 overflow-hidden flex flex-col relative group cursor-pointer hover:border-stock-warm transition-colors"
                        onClick={() => setSelectedReport({
                            title: "EU Lifestyle Analysis",
                            url: "https://app.fabric.microsoft.com/view?r=eyJrIjoiOGRiODc2ZjYtNjI5ZC00OGQ5LWFhMjEtNDYwNDQ5MjRiOTQxIiwidCI6IjVmMjgyOTEwLTE3NmYtNDU5ZC1hYjdkLWI3NDRhYTZlZmMwNyIsImMiOjR9&pageName=bdd8ef3c641677000aa0"
                        })}
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800)` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                            <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="mt-auto p-3 relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-stock-warm text-black text-[9px] font-bold px-1.5 py-0.5 rounded">LIFESTYLE</span>
                            </div>
                            <h3 className="text-xs font-bold text-white leading-tight mb-0.5 group-hover:text-stock-warm transition-colors">EU Lifestyle Analysis</h3>
                            <p className="text-[9px] text-gray-400 line-clamp-1">Comprehensive Quality of Life Metrics</p>
                        </div>
                    </div>

                </div>
            </Card>

            {/* Education & Bio (Bottom Right) */}
            <Card
                className="w-full h-[300px] md:h-auto col-span-12 md:col-span-3 md:row-span-5 flex flex-col gap-3"
                delay={0.5}
                onInfoClick={() => setInfoModal({
                    title: "Fundamental Data",
                    description: "Core metrics including Education, Certifications, and Contact info. Direct links to LinkedIn, GitHub, and Email."
                })}
            >
                <div className="flex items-center gap-2">
                    <BookOpen className="text-stock-warm w-4 h-4" />
                    <span className="text-xs font-bold font-mono tracking-wider text-gray-400">FUNDAMENTALS</span>
                </div>

                <div className="flex-1 flex flex-col gap-2 overflow-auto custom-scrollbar">
                    <div className="bg-black/40 p-2 rounded border border-gray-800 hover:border-stock-warm transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="text-xs text-white font-bold">ThePowerMBA</div>
                            <div className="text-[9px] text-stock-up">2022</div>
                        </div>
                        <div className="text-[9px] text-gray-500">Business Administration</div>
                    </div>

                    <div className="bg-black/40 p-2 rounded border border-gray-800 hover:border-stock-warm transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="text-xs text-white font-bold">UNAM</div>
                            <div className="text-[9px] text-stock-up">2017</div>
                        </div>
                        <div className="text-[9px] text-gray-500">B.Sc Math & Computing</div>
                    </div>

                    <div className="bg-black/40 p-2 rounded border border-gray-800 hover:border-stock-warm transition-colors">
                        <div className="flex items-center gap-1 mb-1">
                            <Award className="w-3 h-3 text-stock-warm" />
                            <span className="text-[9px] text-white font-bold">CERTIFICATIONS</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {['Snowflake', 'Blockchain', 'ThoughtSpot', 'PowerBI'].map(c => (
                                <span key={c} className="text-[8px] bg-gray-800 text-gray-300 px-1 rounded">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-800">
                    <div className="flex gap-2 justify-center">
                        <a href="mailto:juramirez.ve@gmail.com" className="flex-1 bg-stock-up hover:bg-emerald-400 text-black text-[10px] font-bold py-1.5 rounded text-center transition-colors">
                            CONTACT
                        </a>
                        <a
                            href="https://www.linkedin.com/in/julianramirez95/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors"
                        >
                            <Linkedin className="w-3 h-3" />
                        </a>
                        <a
                            href="https://github.com/juramirez" // Assuming generic until specified or looked up
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors"
                        >
                            <Github className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </Card>

        </div>
    );
};
