'use client';
import { useState, useEffect } from 'react';

interface SkillCircleProps {
  skill: string;
  percentage: number;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'cyan' | 'red';
}

export default function SkillCircle({ skill, percentage, color = 'blue' }: SkillCircleProps) {
  const [progress, setProgress] = useState(0);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [circleRef, setCircleRef] = useState<SVGCircleElement | null>(null);

  // Animate the circle on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  // Calculate circle properties
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColor = (percent: number) => {
    if (percent < 50) {
      return `rgb(255, ${Math.round(255 * (percent / 50))}, 0)`; // Red to Yellow
    } else {
      const ratio = (percent - 50) / 50;
      return `rgb(${Math.round(255 * (1 - ratio))}, 255, 0)`;
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circle container */}
      <div className="relative w-28 h-28">
        {/* SVG Circle */}
        <svg className="transform -rotate-90 w-28 h-28">
          {/* Background circle (gray) */}
          <circle cx="56" cy="56" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
          {/* Progress circle (colored, animated) */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke={getColor(percentage)}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage text in center */}
      </div>
      {/* Skill name below circle */}
      <p className="text-sm font-medium text-gray-700">{skill}</p>
    </div>
  );
}
