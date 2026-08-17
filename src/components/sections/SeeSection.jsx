import React from 'react';
import { Camera, Eye, Sliders, Maximize2 } from 'lucide-react';
import VisionHUD from '../ui/VisionHUD';
import roverTurretImg from '../../assets/rover_turret.jpg';

export default function SeeSection() {
  return (
    <section id="vision" className="story-stage" style={{ background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* High-Visibility Monumental Background Typography */}
      <div style={{
        position: 'absolute',
        top: '6%',
        right: '2%',
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
        OPTICS
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="chapter-number reveal-3d">05 // OPTICAL SYSTEM & ARTICULATED HEAD (SEE)</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 4rem)',
          alignItems: 'center'
        }}>
          {/* Left: Viewfinder HUD */}
          <div className="reveal-3d">
            <VisionHUD turretImage={roverTurretImg} />
          </div>

          {/* Right: Optical Gimbal Architecture */}
          <div className="reveal-3d">
            <h2 className="section-headline" style={{ marginBottom: 'var(--space-4)' }}>
              Independent 2-Axis Optical Reconnaissance
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Standard fixed cameras force a rover to constantly rotate its entire chassis to examine objects, draining battery and risking wheel slippage. 
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              CyberRover X4 decouples vision from mobility through an active dual-servo pan/tilt turret. The ESP32-CAM captures high-framerate optical feeds and delivers continuous visual coverage across vertical and horizontal planes.
            </p>

            {/* Spec Columns */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ padding: '14px 16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                  PAN AXIS (AZIMUTH)
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  180° Sector
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  SG90 base servo (-90° to +90°)
                </div>
              </div>

              <div style={{ padding: '14px 16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                  TILT AXIS (ELEVATION)
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  90° Sector
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  SG90 elevation servo (-45° to +45°)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
