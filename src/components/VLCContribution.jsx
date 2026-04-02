import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const contributions = [
  {
    org: "VideoLAN — VLC Media Player",
    role: "C++ / Qt",
    year: "2026",
    title: "Clear History for Open Network URL dialog",
    summary:
      "Implemented the Clear History feature for the Open Network URL dialog, removing stored URLs from both the UI and persistent storage.",
    impact: "Privacy focused",
    issue: "#29607",
    mr: "#8512",
    link: "https://code.videolan.org/videolan/vlc/-/merge_requests/8512",
    tags: ["C++", "Qt", "QSettings"],
  },
  {
    org: "VideoLAN — VLC Media Player",
    role: "C++ / Qt",
    year: "2026",
    title: "Podcast RSS configuration via context menu",
    summary:
      "Added podcast RSS configuration directly from the context menu so users can manage podcast feeds from Network Sources more quickly.",
    impact: "Faster feed management",
    issue: "#29612",
    mr: "#8556",
    link: "https://code.videolan.org/videolan/vlc/-/merge_requests/8556",
    tags: ["C++", "Qt", "UI"],
  },
  {
    org: "VideoLAN — VLC Media Player",
    role: "C++ / Qt",
    year: "2026",
    title: "Ctrl+A shortcut handling in Qt views",
    summary:
      "Fixed Ctrl+A handling in ListViewExt and ExpandGridView to reliably capture rapid key input without double-trigger issues.",
    impact: "Reliable keyboard input",
    issue: "#8651",
    mr: "#8651",
    link: "https://code.videolan.org/videolan/vlc/-/merge_requests/8651",
    tags: ["C++", "Qt", "Keyboard"],
  },
  {
    org: "Catrobat — Catroweb",
    role: "Symfony / Stimulus",
    year: "2026",
    title: "Stimulus-based modular frontend structure",
    summary:
      "Improved frontend architecture by migrating OwnProjectList logic into Stimulus controllers and proposing a maintainable modular structure.",
    impact: "Cleaner frontend architecture",
    issue: "#6484",
    mr: "#6484",
    link: "https://github.com/Catrobat/Catroweb/pull/6484",
    tags: ["Symfony", "Stimulus", "JavaScript"],
  },
];

const ContributionCard = ({ contribution, index }) => (
  <motion.article
    variants={fadeIn("up", "tween", index * 0.15, 0.8)}
    className="bg-black border border-gray-700 rounded-2xl p-5 sm:p-6 lg:p-7 h-full hover:border-gray-500 transition-colors duration-300"
  >
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-mono">
            {contribution.org}
          </p>
          <h3 className="mt-2 text-lg sm:text-xl font-bold text-white font-mono leading-snug">
            {contribution.title}
          </h3>
        </div>
        <span className="shrink-0 text-xs text-gray-300 border border-gray-700 rounded-full px-3 py-1 font-mono">
          {contribution.year}
        </span>
      </div>

      <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed font-mono">
        {contribution.summary}
      </p>

      <div className="grid grid-cols-2 gap-3 text-sm font-mono">
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 p-3">
          <p className="text-gray-500 text-xs">role</p>
          <p className="text-white mt-1">{contribution.role}</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 p-3">
          <p className="text-gray-500 text-xs">impact</p>
          <p className="text-white mt-1">{contribution.impact}</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 p-3">
          <p className="text-gray-500 text-xs">issue / pr</p>
          <p className="text-white mt-1">{contribution.issue}</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950/70 p-3">
          <p className="text-gray-500 text-xs">merge</p>
          <p className="text-white mt-1">{contribution.mr}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {contribution.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-300 border border-gray-700 rounded-full px-3 py-1 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-2 mt-auto flex justify-between items-center gap-4">
        <span className="text-xs text-gray-500 font-mono">merged contribution</span>
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white border border-gray-600 rounded-full px-4 py-2 font-mono hover:border-white transition-colors duration-300"
        >
          open link
        </a>
      </div>
    </div>
  </motion.article>
);

const VLCContribution = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center font-mono`}>
          open_source.contributions()
        </p>
        <h2 className={`${styles.sectionHeadText} text-center font-mono`}>
          ./open_source_work
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-8 bg-black/70 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 sm:p-6 lg:p-8"
      >
        <div className="mb-6 sm:mb-8 max-w-4xl mx-auto text-center">
          <p className="text-gray-400 font-mono text-sm sm:text-base leading-relaxed">
            Three VLC Media Player contributions and one Catrobat Catroweb contribution, shown with the exact merge requests and pull request links.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={`${contribution.org}-${contribution.issue}`}
              contribution={contribution}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(VLCContribution, "vlc-contribution");