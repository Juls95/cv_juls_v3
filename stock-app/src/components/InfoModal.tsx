
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
}

export const InfoModal = ({ isOpen, onClose, title, description }: InfoModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-stock-panel border border-stock-warm/50 rounded-lg max-w-md w-full shadow-2xl shadow-stock-warm/10 relative overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/50">
                            <h3 className="text-stock-warm font-mono font-bold text-lg">{title}</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* Footer (Decorative) */}
                        <div className="bg-gray-900/50 p-2 border-t border-gray-800 flex justify-end">
                            <span className="text-[10px] text-stock-dim font-mono">SYSTEM MESSAGE</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
