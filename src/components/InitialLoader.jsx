import React, { useState, useEffect, useRef } from 'react';
import BatIcon from './BatIcon';

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [burstBats, setBurstBats] = useState([]);

  const messages = [
    "INITIALIZING SYSTEM...",
    "CONNECTING TO THE SHADOWS...",
    "CALIBRATING BAT RADAR...",
    "SUMMONING THE SWARM...",
    "LOADING PORTFOLIO DATA...",
    "ACCESS GRANTED!"
  ];

  // Derive messageIndex directly during render instead of storing in state
  const messageIndex = Math.min(
    Math.floor((progress / 100) * messages.length),
    messages.length - 1
  );

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Numeric progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increments for a natural feel
        const step = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Trigger burst of bats and fade out when progress is 100
  useEffect(() => {
    if (progress === 100) {
      // Spawn burst bats
      const bats = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 15 + 10,
        size: Math.random() * 40 + 20,
        delay: Math.random() * 200,
        rotation: Math.random() * 360,
      }));

      const frame = requestAnimationFrame(() => {
        setBurstBats(bats);
      });

      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
      }, 600);

      const completeTimeout = setTimeout(() => {
        if (onCompleteRef.current) onCompleteRef.current();
      }, 1400); // Allow fade and burst to finish

      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(fadeTimeout);
        clearTimeout(completeTimeout);
      };
    }
  }, [progress]);

  return (
    <div className={`initial-loader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* Background Grid Pattern */}
      <div className="loader-grid-bg" />

      {/* Bursting Bats */}
      {burstBats.map((bat) => {
        const x = Math.cos(bat.angle) * bat.speed * 5;
        const y = Math.sin(bat.angle) * bat.speed * 5;

        return (
          <div
            key={bat.id}
            className="burst-bat"
            style={{
              '--target-x': `${x}vw`,
              '--target-y': `${y}vh`,
              '--rotate': `${bat.rotation}deg`,
              '--size': `${bat.size}px`,
              animationDelay: `${bat.delay}ms`,
            }}
          >
            <BatIcon size={bat.size} color="var(--accent-purple)" />
          </div>
        );
      })}

      <div className="loader-content">
        {/* Pulsing Bat Logo */}
        <div className="loader-logo-container">
          <BatIcon size={120} color="var(--accent-purple)" className="loader-pulsing-bat" />
          <div className="loader-ring loader-ring-1" />
          <div className="loader-ring loader-ring-2" />
        </div>

        {/* Monospace Progress Text */}
        <div className="loader-progress-info">
          <div className="loader-percentage">{progress}%</div>
          <div className="loader-bar-outer">
            <div className="loader-bar-inner" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-message">{messages[messageIndex]}</div>
        </div>
      </div>
    </div>
  );
}
