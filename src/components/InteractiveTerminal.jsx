import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Terminal = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    { type: 'system', content: '$ ./portfolio --interactive' },
    { type: 'output', content: 'Portfolio initialized. Type "help" for commands.' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState([]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: 'Available commands: about, skills, projects, vlc, experience, contact, clear, whoami',
    about: 'Full-Stack Developer & Open Source Contributor. Specialized in building scalable applications and contributing to major open source projects like VLC Media Player.',
    skills: 'JavaScript/TypeScript, React, Node.js, Python, C++, Qt, Three.js, MongoDB, AI/ML, Game Development, Open Source Development',
    projects: 'VLC Media Player (Contributor), AI Waste Prediction, 3D Portfolio, Bike Rental Platform, Unreal Engine Games',
    vlc: 'MAJOR CONTRIBUTION:\n✅ Fixed VLC network URL history privacy issue\n✅ Added "Clear History" button to network dialog\n✅ Implemented QSettings storage management\n✅ Pull Request #8512 merged into main codebase\n✅ Enhanced privacy for 3+ billion VLC users',
    experience: 'VLC Media Player Contributor (2026), Game Developer @ Aicade (2023-2024), Software Engineer @ ON GO (2024), Freelance Developer (Current)',
    contact: 'Email: atulsingh.dev@gmail.com | GitHub: github.com/Atulsingh1155',
    whoami: 'atul_singh - full_stack_developer && vlc_contributor',
    clear: 'clear'
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    // Add command to history
    const newHistory = [
      ...commandHistory,
      { type: 'command', content: `$ ${cmd}` }
    ];

    if (commands[trimmedCmd]) {
      if (trimmedCmd === 'clear') {
        setCommandHistory([]);
      } else {
        newHistory.push({ type: 'output', content: commands[trimmedCmd] });
        setCommandHistory(newHistory);
      }
    } else {
      newHistory.push({ 
        type: 'error', 
        content: `command not found: ${trimmedCmd}. Type "help" for available commands.` 
      });
      setCommandHistory(newHistory);
    }

    // Update input history
    setInputHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (inputHistory.length > 0) {
        const newIndex = historyIndex === -1 ? inputHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(inputHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= inputHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(inputHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="w-full max-w-4xl mx-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="bg-black rounded-lg shadow-2xl border border-gray-500 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-sm font-mono">
            atul-singh-portfolio:~$ 
          </div>
          <div className="w-16"></div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="bg-black p-4 h-80 overflow-y-auto font-mono text-sm"
        >
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-1">
              {item.type === 'command' && (
                <div className="text-gray-300">{item.content}</div>
              )}
              {item.type === 'output' && (
                <div className="text-gray-400 whitespace-pre-line pl-2 border-l-2 border-gray-600 ml-1">
                  {item.content}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-gray-500 pl-2">
                  {item.content}
                </div>
              )}
              {item.type === 'system' && (
                <div className="text-gray-300">{item.content}</div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center text-gray-300">
            <span className="text-gray-500 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-gray-300 flex-1 font-mono"
              placeholder="type a command..."
              autoFocus
            />
            <span className="animate-pulse ml-1 text-gray-300">|</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm font-mono">
          interactive_terminal.sh | click to focus | type commands
        </p>
      </div>
    </motion.div>
  );
};

export default Terminal;