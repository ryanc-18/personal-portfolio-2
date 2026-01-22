'use client';
import { useState, useEffect, useRef } from 'react';

interface SkillCircleProps {
  skill: string;
  percentage: number;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'cyan' | 'red';
}

export default function SkillCircle({ skill, percentage, color = 'blue' }: SkillCircleProps) {
  const [progress, setProgress] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  // Watch for element entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  // Animate the circle when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isVisible, percentage]);

  // Animate the percentage counter
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1200; // 1 second
      const increment = percentage / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          setDisplayPercentage(percentage);
          clearInterval(counter);
        } else {
          setDisplayPercentage(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    } else {
      setDisplayPercentage(0);
    }
  }, [isVisible, percentage]);

  // Calculate circle properties
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColor = (percent: number) => {
    if (percent < 50) {
      return `rgb(255, ${Math.round(255 * (percent / 50))}, 0)`; // Red to Yellow
    } else {
      const ratio = (percent - 50) / 50;
      return `rgb(${Math.round(255 * (1 - ratio))}, 255, 0)`; // Yellow to Green
    }
  };

  return (
    <div
      ref={circleRef}
      className={`flex flex-col items-center gap-3 transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      {/* Circle container */}
      <div className="relative w-40 h-40">
        {/* SVG Circle */}
        <svg className="transform -rotate-90 w-40 h-40">
          {/* Background circle (gray) */}
          <circle cx="80" cy="80" r={radius} stroke="#e5e7eb" strokeWidth="20" fill="none" />
          {/* Progress circle (colored, animated) */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={getColor(percentage)}
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{displayPercentage}%</span>
        </div>
      </div>
      {/* Skill name below circle */}
      <p className="text-sm font-medium text-gray-700">{skill}</p>
    </div>
  );
}
