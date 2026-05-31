import React, { useEffect, useRef } from 'react';

export default function BatParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 20;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height, // start below or spread
        size: Math.random() * 20 + 15, // size between 15px and 35px
        speedY: -(Math.random() * 1.5 + 0.5), // move up
        speedX: Math.random() * 1.0 - 0.5, // slight horizontal drift
        flapSpeed: Math.random() * 0.15 + 0.1,
        flapPhase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.25 + 0.08, // subtle background appearance
        rotation: Math.random() * 0.4 - 0.2, // slight tilt
        rotationDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Spread particles across the initial screen heights on mount
    particles.forEach(p => {
      p.y = Math.random() * canvas.height;
    });

    const drawBat = (p) => {
      ctx.save();
      ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`; // Violet purple
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(p.size / 100, p.size / 100);

      // Draw flapping realistic gothic bat path
      ctx.beginPath();
      // Start at head center top (50, 20)
      ctx.moveTo(50, 20);

      // Left ear
      ctx.lineTo(46, 10);
      ctx.lineTo(43, 22);

      // Flapping amplitude
      const flap = Math.sin(p.flapPhase) * 15;

      // Left wing top sweep
      ctx.bezierCurveTo(30, 15, 20, 10 + flap, 5, 15 + flap);

      // Left wing bottom edge (scalloped)
      ctx.bezierCurveTo(12, 25 + flap, 15, 30 + flap * 0.5, 20, 32 + flap * 0.3);
      ctx.bezierCurveTo(24, 30 + flap * 0.3, 28, 32 + flap * 0.2, 34, 30);
      ctx.bezierCurveTo(38, 32, 42, 38, 48, 42);

      // Tail center indent
      ctx.lineTo(50, 36);

      // Right wing bottom edge (mirrored)
      ctx.lineTo(52, 42);
      ctx.bezierCurveTo(58, 38, 62, 32, 66, 30);
      ctx.bezierCurveTo(72, 32 + flap * 0.2, 76, 30 + flap * 0.3, 80, 32 + flap * 0.3);
      ctx.bezierCurveTo(85, 30 + flap * 0.5, 88, 25 + flap, 95, 15 + flap);

      // Right wing top sweep
      ctx.bezierCurveTo(80, 10 + flap, 70, 15, 57, 22);

      // Right ear
      ctx.lineTo(54, 10);
      ctx.lineTo(50, 20);

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.flapPhase += p.flapSpeed;
        p.rotation += 0.005 * p.rotationDir;

        // Reset particles that go above screen
        if (p.y + p.size < 0) {
          p.y = canvas.height + p.size + Math.random() * 100;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.25 + 0.08;
          p.size = Math.random() * 20 + 15;
          p.speedY = -(Math.random() * 1.5 + 0.5);
        }

        // Keep horizontal drift within bounds
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;

        drawBat(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
