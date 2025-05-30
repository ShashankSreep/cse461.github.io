import React from 'react';
import Navbar from './navbar';
import { motion } from 'framer-motion';

export default function Education() {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center px-4">
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h1 className="text-xl md:text-6xl text-white font-light tracking-tight">
                        Education
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}