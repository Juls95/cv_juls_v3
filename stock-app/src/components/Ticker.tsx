import { useRef } from "react";
import { motion, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { SKILLS } from "../data";

export const Ticker = () => {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

    const directionFactor = useRef<number>(1);

    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * 5 * (delta / 1000); // Speed
        // Reverse direction if needed, but for ticker usually continuous
        moveBy = -2; // Constant left scroll speed
        baseX.set(baseX.get() + moveBy * (delta / 1000));
    });

    return (
        <div className="w-full bg-stock-panel border-b border-gray-800 overflow-hidden py-2 flex whitespace-nowrap z-30 relative select-none">
            <motion.div className="flex gap-8" style={{ x }}>
                {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => ( // Repeat for infinite scroll
                    <div key={`${skill.name}-${i}`} className="flex items-center space-x-2 text-sm font-mono">
                        <span className="text-gray-400 font-bold">{skill.name}</span>
                        <span className={skill.change > 0 ? "text-stock-up" : "text-stock-down"}>
                            {skill.change > 0 ? "▲" : "▼"} {Math.abs(skill.change).toFixed(2)}%
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
