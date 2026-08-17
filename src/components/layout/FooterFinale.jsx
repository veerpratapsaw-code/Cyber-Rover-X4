import React from 'react';
import { ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';
import { smoothScrollTo } from '../../hooks/useSmoothScroll';

export default function FooterFinale() {
  return (
    <footer style={{
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--space-12) 0 var(--space-8) 0',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Minimal Info Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: 'clamp(2rem, 6vw, 5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          paddingBottom: 'var(--space-8)'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '6px'
            }}>
              Autonomous Ground Reconnaissance
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.6,
              margin: 0
            }}>
              Engineered for real-time hazardous inspection, atmospheric hazard mapping, and subterranean navigation without human risk.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textAlign: 'right'
          }}>
            <div>PLATFORM: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>CYBERROVER MODEL X4</span></div>
            <div>ARCHITECTURE: <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>QUAD MCU + PYTHON 3.11</span></div>
            <div>STATUS: <span style={{ color: 'var(--status-nominal)', fontWeight: 600 }}>MISSION CERTIFIED // LEVEL 4</span></div>
          </div>
        </div>

        {/* Massive Monumental Typography (Google Style) */}
        <div style={{
          textAlign: 'center',
          userSelect: 'none',
          marginBottom: 'clamp(2rem, 5vw, 4rem)',
          width: '100%',
          overflow: 'hidden'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 10.5vw, 11rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            margin: 0,
            background: 'linear-gradient(180deg, #FFFFFF 20%, #4A5568 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.8))',
            whiteSpace: 'nowrap'
          }}>
            CYBERROVER <span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'var(--accent-cyan)' }}>X4</span>
          </h1>
        </div>

        {/* Bottom Minimal Strip (Creator & Copyright) */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Creator Attribution (Google Style) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="animate-blink" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '0.04em'
            }}>
              VEER PRATAP SAW
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              color: 'var(--accent-cyan)',
              background: 'rgba(0, 217, 255, 0.08)',
              border: '1px solid rgba(0, 217, 255, 0.25)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-xs)',
              letterSpacing: '0.08em'
            }}>
              PROJECT CREATOR & LEAD ENGINEER
            </span>
          </div>

          {/* Minimal Status & Year */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}>
            <span>© 2026 CYBERROVER X4</span>
            <span>·</span>
            <span>LEVEL 4 AUTONOMY</span>
            <span>·</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
