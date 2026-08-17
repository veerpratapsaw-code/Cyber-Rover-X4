import React from 'react';
import { Factory, HardHat, AlertOctagon, Mountain, ShieldCheck } from 'lucide-react';

const THEATERS = [
  {
    icon: Factory,
    title: 'Petrochemical & Refineries',
    tag: 'HAZARDOUS ATMOSPHERES',
    desc: 'Autonomous perimeter patrols around volatile cracking units and high-pressure gas manifolds. Rapid detection of combustible hydrocarbons (MQ-2) and odorless carbon monoxide (MQ-7) prevents catastrophic industrial deflagration.'
  },
  {
    icon: HardHat,
    title: 'Confined Conduits & Subterranean Shafts',
    tag: 'CONFINED SPACES',
    desc: 'Low-clearance traverse through HVAC ducts, utility tunnels, and wastewater drainage systems. 3-sector ultrasonic sonar enables continuous traversal in pitch-black channels where human inspection is hazardous or prohibited.'
  },
  {
    icon: AlertOctagon,
    title: 'Disaster Reconnaissance & Search',
    tag: 'POST-COLLAPSE OPERATIONS',
    desc: 'Rapid physical deployment into earthquake-damaged or structurally compromised buildings. Real-time OpenCV facial recognition and edge motion detection assist rescue crews in locating trapped survivors without risking secondary collapse.'
  },
  {
    icon: Mountain,
    title: 'Sub-Surface Mining Safety',
    tag: 'OXYGEN & GAS PROFILING',
    desc: 'Pre-shift atmospheric mapping of deep mining shafts. Validates thermal equilibrium (DHT-22) and ensures air quality index thresholds (MQ-135) meet strict occupational safety standards before miner entry.'
  }
];

export default function OperationsSection() {
  return (
    <section id="operations" className="story-stage" style={{ background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)', position: 'relative', overflow: 'hidden' }}>
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
        THEATERS
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="chapter-number reveal-3d">07 // OPERATIONAL DEPLOYMENT THEATERS</div>

        <div className="reveal-3d" style={{ maxWidth: '820px', marginBottom: 'var(--space-12)' }}>
          <h2 className="section-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Mission-Critical Utility Where Failure Is Not an Option
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            CyberRover X4 is engineered to withstand extreme environmental dust, volatile atmospheres, and confined geometry across mission-critical industrial sectors.
          </p>
        </div>

        {/* 4 Theater Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 'var(--space-6)' }}>
          {THEATERS.map((th, index) => (
            <div
              key={index}
              className="reveal-3d"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)', lineHeight: 1 }}>
                    0{index + 1}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-cyan)', background: 'rgba(0, 217, 255, 0.08)', padding: '2px 8px', borderRadius: 'var(--radius-xs)' }}>
                    {th.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {th.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {th.desc}
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--status-nominal)' }}>
                <ShieldCheck size={14} />
                <span>MISSION CERTIFIED // LEVEL 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
