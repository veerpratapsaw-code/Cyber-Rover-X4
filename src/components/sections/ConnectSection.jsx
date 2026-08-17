import React from 'react';
import { Layers, Wifi, Network } from 'lucide-react';
import SystemTopologyDiagram from '../ui/SystemTopologyDiagram';

export default function ConnectSection() {
  return (
    <section id="system" className="story-stage" style={{ background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* High-Visibility Monumental Background Typography */}
      <div style={{
        position: 'absolute',
        top: '6%',
        left: '2%',
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(4.5rem, 15vw, 15rem)',
        fontWeight: 900,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        lineHeight: 0.8,
        background: 'linear-gradient(180deg, rgba(0, 217, 255, 0.24) 0%, rgba(22, 119, 255, 0.05) 75%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 0 50px rgba(0, 217, 255, 0.16)) blur(0.3px)',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}>
        TOPOLOGY
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="chapter-number reveal-3d">06 // DISTRIBUTED SYSTEM TOPOLOGY (CONNECT)</div>

        <div className="reveal-3d" style={{ maxWidth: '820px', marginBottom: 'var(--space-12)' }}>
          <h2 className="section-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Decoupled Architecture: High-Level Compute & Hard Real-Time Control
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            CyberRover X4 eliminates processing bottlenecks by isolating high-compute machine learning tasks on a Laptop host while delegating microsecond-critical motor loops and sensor ADCs to dual dedicated ESP32 microcontrollers.
          </p>
        </div>

        {/* Embedded Topology Diagram */}
        <div className="reveal-3d">
          <SystemTopologyDiagram />
        </div>
      </div>
    </section>
  );
}
