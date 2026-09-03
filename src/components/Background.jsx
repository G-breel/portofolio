import React from 'react';
import MetaBalls from './MetaBalls';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* Noise overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      
      {/* Aurora Gradients (Optional, can keep for subtle color) */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
      </div>

      {/* MetaBalls Background */}
      <div className="absolute inset-0 z-0">
        <MetaBalls
          color="#0f172a" // Very dark blue for the background balls
          cursorBallColor="#1e3a8a" // Dark blue accent for the cursor ball
          cursorBallSize={4} // Make the cursor ball larger for a bigger splash
          ballCount={45} // More balls to create a continuous liquid body
          animationSize={15} // Zoom in to make them look larger and merge more
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.08}
          clumpFactor={0.6} // Bring them closer together so they clump like water
          speed={0.15} // Slightly slower for a viscous liquid feel
        />
      </div>
    </div>
  );
}
