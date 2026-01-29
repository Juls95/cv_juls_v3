import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ComposedChart, Bar, Cell } from 'recharts';
import { CAREER_HISTORY_DATA, PERFORMANCE_DATA, PROFILE } from '../data';
import { CandlestickChart, LineChart } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        // Look up full details using year (label) to ensure we get rich info even for Area chart which might use simplified data
        const fullDetails = CAREER_HISTORY_DATA.find(d => d.year === label) || data;

        return (
            <div className="bg-stock-panel border border-stock-warm/50 p-3 rounded shadow-xl max-w-[250px] z-50 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
                    {fullDetails.logoDomain && (
                        <img
                            src={`https://logo.clearbit.com/${fullDetails.logoDomain}`}
                            alt="logo"
                            className="w-6 h-6 rounded bg-white object-contain p-0.5"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    )}
                    <div>
                        <p className="text-stock-warm font-bold text-xs">{fullDetails.company}</p>
                        <p className="text-[10px] text-gray-400">{fullDetails.year}</p>
                    </div>
                </div>

                <div className="space-y-1">
                    <div>
                        <span className="text-[10px] text-gray-500 uppercase">Role</span>
                        <p className="text-xs text-white font-mono">{fullDetails.role}</p>
                    </div>
                    <div>
                        <span className="text-[10px] text-gray-500 uppercase">Stack</span>
                        <p className="text-[10px] text-stock-up leading-tight">{fullDetails.stack}</p>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

const CHART_DATA_CANDLE = CAREER_HISTORY_DATA.map(d => ({
    ...d,
    // Body: [min, max] - used for the main candle body
    body: [Math.min(d.open, d.close), Math.max(d.open, d.close)],
    // Wick: [low, high] - passed as a separate dataKey for the wick Bar
    wick: [d.low, d.high],
    color: d.close >= d.open ? '#10B981' : '#EF4444'
}));

export const StockChart = () => {
    const [chartType, setChartType] = useState<'area' | 'candle'>('area');

    return (
        <div className="h-full w-full p-4 flex flex-col">
            <div className="flex justify-between items-end mb-4 px-2">
                <div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-gray-400 text-xs font-mono">MARKET PERFORMANCE</h3>
                        <div className="flex bg-gray-900 rounded p-0.5 border border-gray-800 transition-all hover:border-gray-700">
                            <button
                                onClick={() => setChartType('area')}
                                className={`p-1 rounded transition-colors ${chartType === 'area' ? 'bg-stock-warm text-black shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                                title="Area Chart"
                            >
                                <LineChart className="w-3 h-3" />
                            </button>
                            <button
                                onClick={() => setChartType('candle')}
                                className={`p-1 rounded transition-colors ${chartType === 'candle' ? 'bg-stock-warm text-black shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                                title="Candlestick Chart"
                            >
                                <CandlestickChart className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-stock-text">CAREER GROWTH</h2>
                </div>
                <div className="flex gap-6 text-right items-end">
                    <div>
                        <p className="text-[10px] text-gray-500">MKT CAP</p>
                        <p className="font-mono text-white font-bold text-sm">{PROFILE.marketCap}</p>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500">24H VOL</p>
                        <p className="font-mono text-white font-bold text-sm">50+ PROJ</p>
                    </div>
                    <div>
                        <span className="text-stock-up text-lg font-mono font-bold">6</span>
                        <p className="text-gray-500 text-xs">INDUSTRIES</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'area' ? (
                        <AreaChart data={PERFORMANCE_DATA}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="year" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 10', 'auto']} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#F59E0B', strokeWidth: 1, strokeDasharray: '5 5' }} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#F59E0B"
                                strokeWidth={2}
                                dot={{ fill: '#F59E0B', stroke: '#000', strokeWidth: 1, r: 3 }}
                                activeDot={{ r: 5, fill: '#FFFFFF' }}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                animationDuration={1500}
                            />
                        </AreaChart>
                    ) : (
                        <ComposedChart data={CHART_DATA_CANDLE}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="year" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 10', 'auto']} />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />

                            {/* Wick Bar (Thin line behind body) sent as [min, max] range manually constructed in dataKey or straightforward with shape */}
                            {/* We map specific data structure for wicks to ensure they render correctly as ranges */}
                            <Bar
                                dataKey="wick"
                                barSize={2}
                                fill="#666"
                                xAxisId={0}
                                shape={(props: any) => {
                                    const { x, y, width, height } = props;
                                    return <rect x={x + width / 2 - 0.5} y={y} width={1} height={height} fill={props.payload.color} opacity={0.6} rx={0.5} />
                                }}
                            />

                            {/* Body Bar (Main Candle) */}
                            <Bar dataKey="body" barSize={12} xAxisId={0}>
                                {CHART_DATA_CANDLE.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </ComposedChart>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
};
