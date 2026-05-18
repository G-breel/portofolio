import { useEffect, useRef } from 'react';

export default function CubesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let cubes = [];

    const CUBE_COUNT = 60;
    const COLORS = [
      'rgba(59,130,246,',   // blue
      'rgba(99,102,241,',   // indigo
      'rgba(139,92,246,',   // purple
    ];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function randomCube(forceBottom = false) {
      const size = 8 + Math.random() * 28;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x: Math.random() * canvas.width,
        y: forceBottom ? canvas.height + size + Math.random() * canvas.height : Math.random() * canvas.height,
        size,
        speed: 0.4 + Math.random() * 0.8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        alpha: 0.25 + Math.random() * 0.55,
        color,
      };
    }

    function init() {
      cubes = Array.from({ length: CUBE_COUNT }, () => randomCube(false));
    }

    function drawCube(c) {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rotation);
      ctx.globalAlpha = c.alpha;
      // fill
      ctx.fillStyle = c.color + '0.08)';
      ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
      // border
      ctx.strokeStyle = c.color + '0.7)';
      ctx.lineWidth = 1;
      ctx.strokeRect(-c.size / 2, -c.size / 2, c.size, c.size);
      ctx.restore();
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const c of cubes) {
        c.y      -= c.speed;
        c.rotation += c.rotSpeed;

        // reset ke bawah kalau udah keluar atas
        if (c.y < -c.size * 2) {
          c.y = canvas.height + c.size;
          c.x = Math.random() * canvas.width;
          c.alpha = 0.25 + Math.random() * 0.55;
          c.speed = 0.4 + Math.random() * 0.8;
        }

        drawCube(c);
      }

      animId = requestAnimationFrame(loop);
    }

    // prefers-reduced-motion check
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    resize();
    init();
    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
