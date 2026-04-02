import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black hero-section">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center text-center space-y-12">
        
        {/* ASCII Art Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <pre className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono leading-none whitespace-pre overflow-x-auto">
{`
 █████╗ ████████╗██╗   ██╗██╗         ███████╗██╗███╗   ██╗ ██████╗ ██╗  ██╗
██╔══██╗╚══██╔══╝██║   ██║██║         ██╔════╝██║████╗  ██║██╔════╝ ██║  ██║
███████║   ██║   ██║   ██║██║         ███████╗██║██╔██╗ ██║██║  ███╗███████║
██╔══██║   ██║   ██║   ██║██║         ╚════██║██║██║╚██╗██║██║   ██║██╔══██║
██║  ██║   ██║   ╚██████╔╝███████╗    ███████║██║██║ ╚████║╚██████╔╝██║  ██║
╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝    ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝
`}
          </pre>
        </motion.div>

        {/* Terminal-style Status Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-lg"
        >
          <div className="bg-black border-2 border-gray-600 rounded-lg p-6 sm:p-8 font-mono terminal-container">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-green-400 text-xs tracking-widest font-bold">● SYSTEM ONLINE</span>
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-4 text-sm sm:text-base">
              <div className="text-gray-500 mb-4">$ cat /dev/developer</div>
              
              <div className="space-y-3 text-left">
                <div className="grid grid-cols-2 border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">Atul Singh</span>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">India</span>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Stack:</span>
                  <span className="text-white">React • Node • C++</span>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Achievement:</span>
                  <span className="text-green-400">VLC Contributor</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 animate-pulse">Available</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 text-center">
                <span className="text-gray-500 text-xs">$ echo "Interactive terminal available below" ↓</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center pt-6 sm:pt-8"
        >
          <a 
            href="https://drive.google.com/drive/folders/19xF-r-16QpUslagZjjChCxbnKT71kS12?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white font-mono font-bold hover:bg-gray-900 hover:border-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base inline-block"
          >
            $ wget resume.pdf
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
