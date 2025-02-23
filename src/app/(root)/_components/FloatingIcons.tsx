import React from "react";
import {
  Code2,
  Database,
  FileJson,
  Cpu,
  Terminal,
  Blocks,
  Server,
  Binary,
  Brackets,
  MonitorDot,
} from "lucide-react";

const FloatingIcons = () => {
  // Array of tech icons from lucide-react
  const TechIcons = [
    Code2,
    Database,
    FileJson,
    Cpu,
    Terminal,
    Blocks,
    Server,
    Binary,
    Brackets,
    MonitorDot,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => {
        // Randomly select an icon
        const RandomIcon =
          TechIcons[Math.floor(Math.random() * TechIcons.length)];

        // Generate random positions and animation durations
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const animationDuration = `${15 + Math.random() * 20}s`;

        return (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              top,
              left,
              animation: `float ${animationDuration} linear infinite`,
            }}
          >
            <RandomIcon size={32} className="text-white" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
