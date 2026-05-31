import React, { useEffect, useState, useRef } from 'react';
import BatIcon from './BatIcon';

export default function BatTransition({ trigger, onHalfway, onComplete }) {
  const [isActive, setIsActive] = useState(false);
  const [transitionBats, setTransitionBats] = useState([]);

  // Use refs to store callbacks to prevent re-triggering the effect on reference changes
  const onHalfwayRef = useRef(onHalfway);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onHalfwayRef.current = onHalfway;
    onCompleteRef.current = onComplete;
  }, [onHalfway, onComplete]);

  // Handle the timeouts in useEffect, keyed by trigger
  useEffect(() => {
    if (!trigger) return;

    // Run in a frame to avoid synchronous setState inside useEffect body
    const frame = requestAnimationFrame(() => {
      setIsActive(true);

      // Generate bats for this transition wave
      const count = 25;
      const bats = Array.from({ length: count }).map((_, i) => {
        // Stagger them from left to right Y-levels
        const y = (i / count) * 90 + Math.random() * 10; // spread from 0% to 100% height
        const speed = Math.random() * 0.4 + 0.6; // duration multiplier
        const delay = Math.random() * 300; // staggered delay
        const size = Math.random() * 35 + 20; // 20px to 55px
        const scaleY = Math.random() > 0.5 ? 1 : -1; // random flap orientation

        return { id: i, y, speed, delay, size, scaleY };
      });
      setTransitionBats(bats);
    });

    // Midpoint: screen is covered by curtain (around 500ms)
    const halfwayTimeout = setTimeout(() => {
      if (onHalfwayRef.current) onHalfwayRef.current();
    }, 550);

    // End of transition: all elements are off-screen (around 1200ms)
    const endTimeout = setTimeout(() => {
      setIsActive(false);
      if (onCompleteRef.current) onCompleteRef.current();
    }, 1200);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(halfwayTimeout);
      clearTimeout(endTimeout);
    };
  }, [trigger]);

  if (!isActive) return null;

  return (
    <div className="bat-transition-container">
      {/* Background Curtain Sweeping Across */}
      <div className="transition-curtain-primary" />
      <div className="transition-curtain-secondary" />

      {/* Swarm of Flying Bats */}
      {transitionBats.map((bat) => (
        <div
          key={bat.id}
          className="transition-flying-bat"
          style={{
            top: `${bat.y}%`,
            '--size': `${bat.size}px`,
            '--speed': `${bat.speed}s`,
            animationDelay: `${bat.delay}ms`,
            transform: `scaleY(${bat.scaleY})`,
          }}
        >
          <BatIcon size={bat.size} color="var(--bg-color)" className="transition-bat-svg" />
        </div>
      ))}
    </div>
  );
}
