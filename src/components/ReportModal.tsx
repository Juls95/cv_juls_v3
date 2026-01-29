import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    reportUrl: string;
    title: string;
}

export const ReportModal = ({ isOpen, onClose, reportUrl, title }: ReportModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full h-full max-w-7xl max-h-[90vh] bg-stock-panel border border-stock-warm/30 shadow-2xl rounded-lg overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-stock-warm animate-pulse" />
                                <h2 className="text-stock-text font-bold font-mono tracking-wider">{title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 bg-white relative">
                            <iframe
                                title="Report"
                                width="100%"
                                height="100%"
                                src={reportUrl}
                                frameBorder="0"
                                allowFullScreen={true}
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
