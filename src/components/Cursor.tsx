import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] border border-stock-warm rounded-full flex items-center justify-center mix-blend-difference"
                animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                <div className="w-1 h-1 bg-stock-warm rounded-full" />
            </motion.div>
            {/* Crosshair lines */}
            <motion.div
                className="fixed top-0 left-0 w-full h-px bg-stock-warm/20 pointer-events-none z-40"
                style={{ top: mousePosition.y }}
            />
            <motion.div
                className="fixed top-0 left-0 h-full w-px bg-stock-warm/20 pointer-events-none z-40"
                style={{ left: mousePosition.x }}
            />
        </>
    );
};
