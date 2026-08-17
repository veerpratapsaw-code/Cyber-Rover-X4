import React, { useState } from 'react';
import { Camera, Crosshair, Eye, Scan, Sliders, Maximize2, ShieldAlert } from 'lucide-react';

export default function VisionHUD({ turretImage }) {
  const [cvMode, setCvMode] = useState('face_tracking'); // 'face_tracking' | 'motion' | 'raw'
  const [pan, setPan] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [targetLocked, setTargetLocked] = useState(true);

  return (
    <div className="tech-card reticle-box" style={{ background: 'var(--bg-surface)', padding: 'var(--space-6)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
            OPTICAL FEED // ESP32-CAM (640x480 MJPEG)
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Articulated Pan/Tilt & OpenCV Edge Vision
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-elevated)', padding: '4px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => setCvMode('face_tracking')}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              background: cvMode === 'face_tracking' ? 'var(--accent-cyan)' : 'transparent',
              color: cvMode === 'face_tracking' ? 'var(--text-inverse)' : 'var(--text-secondary)',
              fontWeight: 600
            }}
          >
            FACE TRACKING
          </button>
          <button
            onClick={() => setCvMode('motion')}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              background: cvMode === 'motion' ? 'var(--accent-cyan)' : 'transparent',
              color: cvMode === 'motion' ? 'var(--text-inverse)' : 'var(--text-secondary)',
              fontWeight: 600
            }}
          >
            MOTION DETECT
          </button>
          <button
            onClick={() => setCvMode('raw')}
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              border: 'none',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
              background: cvMode === 'raw' ? 'var(--accent-cyan)' : 'transparent',
              color: cvMode === 'raw' ? 'var(--text-inverse)' : 'var(--text-secondary)',
              fontWeight: 600
            }}
          >
            RAW FEED
          </button>
        </div>
      </div>

      {/* Viewfinder Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(220px, 38vh, 340px)',
        background: '#040608',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-medium)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Stream Image with Pan/Tilt Translation */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          backgroundImage: `url(${turretImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: cvMode === 'raw' ? 'brightness(0.9) contrast(1.1)' : 'brightness(0.65) contrast(1.2) hue-rotate(180deg)',
          transform: `translate(${pan * 0.8}px, ${tilt * 0.8}px) scale(1.08)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease'
        }} />

        {/* Scanlines Effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none',
          opacity: 0.6
        }} />

        {/* Tactical Viewfinder Overlay HUD */}
        <div style={{ position: 'absolute', inset: 'clamp(8px, 2vw, 16px)', pointerEvents: 'none', border: '1px solid rgba(0, 217, 255, 0.15)' }}>
          {/* Corner Brackets */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '12px', borderTop: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', borderTop: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--accent-cyan)', borderLeft: '2px solid var(--accent-cyan)' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderBottom: '2px solid var(--accent-cyan)', borderRight: '2px solid var(--accent-cyan)' }} />

          {/* Central Crosshair */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '28px',
            height: '28px',
            opacity: 0.7
          }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--accent-cyan)' }} />
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'var(--accent-cyan)' }} />
            <div style={{ position: 'absolute', inset: '6px', border: '1px solid var(--accent-cyan)', borderRadius: '50%' }} />
          </div>

          {/* Top Status Bar */}
          <div style={{ position: 'absolute', top: '6px', left: '8px', right: '8px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.5625rem, 1.6vw, 0.6875rem)' }}>
            <span style={{ color: 'var(--status-hazard)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="animate-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--status-hazard)' }} />
              REC [ESP32-CAM]
            </span>
            <span style={{ color: 'var(--accent-cyan)' }}>PAN {pan > 0 ? `+${pan}` : pan}° / TILT {tilt > 0 ? `+${tilt}` : tilt}°</span>
          </div>

          {/* OpenCV Target Bounding Box (Only in CV Modes) */}
          {cvMode === 'face_tracking' && (
            <div style={{
              position: 'absolute',
              top: '28%',
              left: '38%',
              width: 'clamp(90px, 25%, 120px)',
              height: 'clamp(100px, 28%, 130px)',
              border: '2px solid var(--accent-cyan)',
              boxShadow: '0 0 16px rgba(0, 217, 255, 0.4), inset 0 0 16px rgba(0, 217, 255, 0.1)',
              borderRadius: 'var(--radius-xs)',
              transform: `translate(${pan * -0.5}px, ${tilt * -0.5}px)`,
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                position: 'absolute',
                top: '-18px',
                left: 0,
                background: 'var(--accent-cyan)',
                color: 'var(--text-inverse)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.5rem, 1.4vw, 0.625rem)',
                fontWeight: 700,
                padding: '1px 4px',
                whiteSpace: 'nowrap'
              }}>
                TARGET: HUMAN // 98.4%
              </div>
            </div>
          )}

          {cvMode === 'motion' && (
            <div style={{
              position: 'absolute',
              top: '25%',
              left: '20%',
              width: 'clamp(140px, 45%, 240px)',
              height: 'clamp(100px, 35%, 180px)',
              border: '1px dashed var(--status-warning)',
              borderRadius: 'var(--radius-xs)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-18px',
                left: 0,
                background: 'var(--status-warning)',
                color: 'var(--text-inverse)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.5rem, 1.4vw, 0.625rem)',
                fontWeight: 700,
                padding: '1px 4px'
              }}>
                MOTION // 45%
              </div>
            </div>
          )}

          {/* Bottom Telemetry Bar */}
          <div style={{ position: 'absolute', bottom: '6px', left: '8px', right: '8px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.5rem, 1.4vw, 0.625rem)', color: 'var(--text-muted)' }}>
            <span>OPENCV 4.8</span>
            <span>20ms PID</span>
          </div>
        </div>
      </div>

      {/* Interactive Gimbal Servo Joystick / Sliders */}
      <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.6875rem, 1.8vw, 0.75rem)', color: 'var(--accent-cyan)' }}>
            MANUAL GIMBAL ARTICULATION:
          </span>
          <button
            onClick={() => { setPan(0); setTilt(0); }}
            style={{
              padding: '2px 8px',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer'
            }}
          >
            CENTER (0°, 0°)
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              <span>Pan Axis</span>
              <span style={{ color: 'var(--accent-cyan)' }}>{pan}°</span>
            </div>
            <input
              type="range" min="-60" max="60" value={pan}
              onChange={e => setPan(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              <span>Tilt Axis</span>
              <span style={{ color: 'var(--accent-cyan)' }}>{tilt}°</span>
            </div>
            <input
              type="range" min="-30" max="30" value={tilt}
              onChange={e => setTilt(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
