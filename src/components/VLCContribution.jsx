import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const VLCContribution = () => {
  const contributionDetails = {
    title: "VLC Media Player - Privacy Enhancement",
    description: "Successfully contributed to one of the world's most popular open source projects",
    impact: "3+ Billion Downloads Worldwide",
    date: "February 2026",
    status: "Merged into Main Codebase",
    technologies: ["C++", "Qt Framework", "QSettings", "UI/UX Design"],
    achievements: [
      "Resolved critical privacy issue #29607",
      "Implemented 'Clear History' button in network URL dialog",
      "Enhanced user privacy for NSFW URL concerns",
      "Developed persistent QSettings storage management",
      "Maintained existing UI layout and behavior",
      "Code review and testing by VideoLAN team"
    ]
  };

  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center font-mono`}>
          open_source.commit()
        </p>
        <h2 className={`${styles.sectionHeadText} text-center font-mono`}>
          ./vlc_contribution
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-500/30 p-8"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-2 font-mono">
              {contributionDetails.title}
            </h3>
            <p className="text-gray-400 text-lg font-mono">
              {contributionDetails.description}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-2">
            <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded border border-gray-600 text-sm font-mono">
              ✅ {contributionDetails.status}
            </div>
            <div className="text-gray-400 text-sm font-mono">{contributionDetails.date}</div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4">
          <div className="bg-black border border-gray-600 rounded-lg p-6 text-center">
            <div className="text-white text-3xl font-mono mb-2">3B+</div>
            <div className="text-gray-400 text-sm font-mono">users_impacted</div>
          </div>
          <div className="bg-black border border-gray-600 rounded-lg p-6 text-center">
            <div className="text-white text-3xl font-mono mb-2">#29607</div>
            <div className="text-gray-400 text-sm font-mono">issue.closed</div>
          </div>
          <div className="bg-black border border-gray-600 rounded-lg p-6 text-center">
            <div className="text-white text-3xl font-mono mb-2">MERGED</div>
            <div className="text-gray-400 text-sm font-mono">status.main</div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-white text-xl font-mono mb-4">
              <span className="text-green-400">$</span> tech_stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {contributionDetails.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black/50 border border-gray-700 text-gray-300 px-3 py-1 rounded font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-mono mb-4">
              <span className="text-green-400">$</span> git log --oneline
            </h4>
            <p className="text-gray-400 leading-relaxed font-mono text-sm">
              Enhanced privacy controls for millions of users by implementing 
              seamless URL history management with persistent storage handling.
            </p>
          </div>
        </div>

        {/* Achievement List */}
        <div>
          <h4 className="text-white text-xl font-mono mb-4">
            <span className="text-gray-400">$</span> git diff --summary
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {contributionDetails.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-gray-400 mt-1 font-mono">+</div>
                <span className="text-gray-400 font-mono text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Showcase */}
        <div className="mt-8 bg-black/80 rounded-xl p-6 border border-gray-700/50">
          <h4 className="text-white text-lg font-mono mb-4 text-gray-400">
            $ git diff --merged
          </h4>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-gray-500">// C++/Qt Implementation</div>
            <div className="text-gray-300">QPushButton* clearBtn = new QPushButton("Clear History");</div>
            <div className="text-gray-300">connect(clearBtn, &QPushButton::clicked, this, ::clearUrlHistory);</div>
            <div className="text-gray-300">QSettings().clear(); // Privacy enhancement</div>
            <div className="text-gray-400">// 3+ Billion users impacted ✓</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="https://code.videolan.org/videolan/vlc/-/merge_requests/8512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black border border-gray-500 text-gray-300 px-6 py-3 rounded font-mono hover:bg-gray-900 transition-all duration-300"
          >
            <span className="mr-2">$</span>
            git show --merge-request
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(VLCContribution, "vlc-contribution");