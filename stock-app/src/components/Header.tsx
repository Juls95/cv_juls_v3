import { Zap, Clock, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-between items-center px-6 py-3 bg-stock-bg border-b border-gray-800 text-xs font-mono">
            <div className="flex items-center space-x-4">
                <div className="flex items-center text-stock-warm font-bold text-lg tracking-wider">
                    <Zap className="w-5 h-5 mr-2 fill-current" />
                    JULS.TERMINAL <span className="text-gray-500 text-xs font-normal ml-2 tracking-normal">Data Expert & Software Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-normal">
                    <span>Made in Latam for the world</span>
                    <span className="flex gap-1">
                        <img src="https://flagcdn.com/mx.svg" width="12" alt="Mexico" />
                        <img src="https://flagcdn.com/co.svg" width="12" alt="Colombia" />
                    </span>
                </div>
                <div className="hidden md:flex space-x-4 text-gray-500">
                    <span>STATUS: ONLINE</span>
                    <span>SERVER: US-EAST</span>
                    <span className="text-stock-up">CONN: STABLE</span>
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-400 gap-2">
                    <Wifi className="w-4 h-4" />
                    <span>54ms</span>
                </div>
                <div className="flex items-center text-gray-300 gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{time.toLocaleTimeString([], { hour12: false })}</span>
                </div>
                <div className="bg-stock-warm text-black px-2 py-0.5 rounded font-bold">
                    PRO
                </div>
            </div>
        </div>
    );
};
