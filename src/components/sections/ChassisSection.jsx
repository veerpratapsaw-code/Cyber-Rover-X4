import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Cpu, Zap, Eye, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import chassisTractionImg from '../../assets/chassis_traction.jpg';
import chassisPhoneImg from '../../assets/real_rover_field_2.png';
import chassisMcuImg from '../../assets/chassis_mcu.jpg';
import chassisBatteryImg from '../../assets/chassis_battery.jpg';

const CHASSIS_MODULES = [
  {
    id: 0,
    num: '01',
    title: 'High-Current DC Traction & Slew Ramping',
    subtitle: 'High-Torque Motors // Dual BTS7960 43A MOSFET Bridges',
    desc: 'Dual high-current BTS7960 43A MOSFET H-bridges driven by ATmega328P hardware PWM ramping. Delivers heavy stall torque without voltage sags, gear stripping, or inductive brownouts during high-incline rubble climbs.',
    image: chassisTractionImg,
    tag: 'DUAL BTS7960 43A MOSFET BRIDGES',
    spec1: 'CURRENT: 43A CONTINUOUS RATING',
    spec2: 'SLEW RAMPING: 20ms ACCEL CURVE',
    badge: 'BTS7960 43A POWER'
  },
  {
    id: 1,
    num: '02',
    title: 'Chassis-Mounted Smartphone Camera Mount',
    subtitle: 'High-Res Mobile Sensor // Ultra-Wide 1080p FPV',
    desc: 'Rigid shock-isolated smartphone mounting dock secured to the forward deck. Employs high-resolution mobile camera optics, electronic stabilization, and high-framerate wireless video streaming with zero servo drift or mechanical failure points.',
    image: chassisPhoneImg,
    tag: 'SMARTPHONE OPTICAL POD',
    spec1: 'VIDEO STREAM: 1080p 60FPS LOW-LATENCY',
    spec2: 'STABILIZATION: HARDWARE SHOCK DAMPING',
    badge: 'PHONE CAMERA'
  },
  {
    id: 2,
    num: '03',
    title: '6-Node Heterogeneous Distributed Network',
    subtitle: 'ESP32 Remote + ESP32-S3 + Uno + Nano + CAM + Laptop',
    desc: 'Total task decoupling: ESP-NOW peer-to-peer radio isolates 100Hz real-time drive safety, while an Arduino Uno executes deterministic PWM motor loops and an Arduino Nano acquires multi-channel gas telemetry.',
    image: chassisMcuImg,
    tag: '6-NODE DISTRIBUTED NETWORK',
    spec1: 'CORE 1 RF LOOP: 100Hz HARD REAL-TIME',
    spec2: 'FAILSAFE WATCHDOG: 500ms EMERGENCY STOP',
    badge: '6-NODE ARCHITECTURE'
  },
  {
    id: 3,
    num: '04',
    title: 'High-Density 3S Li-ION Power Bus',
    subtitle: '11.85V Nominal // Buck Step-Down Regulators',
    desc: 'Dedicated 3S Li-Ion cell bank delivers stable 11.85V high-amperage current for DC motor surges, with isolated step-down buck regulators supplying clean 5V and 3.3V power to logic boards.',
    image: chassisBatteryImg,
    tag: '3S Li-ION POWER MODULE',
    spec1: 'VOLTAGE BUS: 11.85V NOMINAL',
    spec2: 'CURRENT: 30A PEAK RATED',
    badge: 'ISOLATED POWER BUS'
  }
];

export default function ChassisSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-cycle carousel every 4 seconds when not hovered
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % CHASSIS_MODULES.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextModule = () => {
    setActiveTab((prev) => (prev + 1) % CHASSIS_MODULES.length);
  };

  const prevModule = () => {
    setActiveTab((prev) => (prev - 1 + CHASSIS_MODULES.length) % CHASSIS_MODULES.length);
  };

  const currentMod = CHASSIS_MODULES[activeTab];

  return (
    <section
      id="chassis"
      className="story-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* High-Visibility Monumental Background Typography */}
      <div style={{
        position: 'absolute',
        top: '6%',
        left: '2%',
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(4rem, 15vw, 15rem)',
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
        ARCHITECTURE
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Chapter Indicator */}
        <div className="chapter-number reveal-3d">02 // PHYSICAL PLATFORM ARCHITECTURE</div>

        {/* Section Headline */}
        <div className="reveal-3d" style={{ maxWidth: '840px', marginBottom: 'var(--space-10)' }}>
          <h2 className="section-headline" style={{ marginBottom: 'var(--space-4)' }}>
            Engineered for Stability & Modular Precision
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            CyberRover X4 is built on an industrial carbon-reinforced chassis designed for all-terrain stability, minimal ground vibration, and electro-magnetic isolation.
          </p>
        </div>

        {/* Main 2-Column Responsive Layout: Parallax Carousel + Synchronized Subsystems */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 3.5rem)',
          alignItems: 'center'
        }}>
          {/* Left Column: Subsystem Parallax Carousel */}
          <div className="hud-panel corner-reticle reveal-3d" style={{ padding: '0', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '300px', overflow: 'hidden' }}>
              <img
                key={currentMod.id}
                src={currentMod.image}
                alt={currentMod.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(1.08) brightness(1.02)',
                  transition: 'transform 0.4s ease, opacity 0.3s ease',
                  animation: 'fadeIn 0.4s ease'
                }}
              />

              {/* Subsystem Floating Holographic Reticle */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                padding: '6px 12px',
                background: 'rgba(7, 9, 12, 0.92)',
                border: '1px solid var(--accent-cyan)',
                borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                boxShadow: '0 0 16px rgba(0, 217, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span className="animate-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                <span>[● {currentMod.tag}]</span>
              </div>

              {/* Manual Carousel Navigation Buttons */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '12px',
                right: '12px',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none'
              }}>
                <button
                  onClick={prevModule}
                  aria-label="Previous Subsystem"
                  style={{
                    pointerEvents: 'auto',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(7, 9, 12, 0.85)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextModule}
                  aria-label="Next Subsystem"
                  style={{
                    pointerEvents: 'auto',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(7, 9, 12, 0.85)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Bottom Carousel Indicator Dots */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'flex',
                gap: '6px',
                background: 'rgba(7, 9, 12, 0.8)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(6px)',
                border: '1px solid var(--border-subtle)'
              }}>
                {CHASSIS_MODULES.map((mod, idx) => (
                  <button
                    key={mod.id}
                    onClick={() => setActiveTab(idx)}
                    aria-label={`Go to module ${idx + 1}`}
                    style={{
                      width: activeTab === idx ? '20px' : '6px',
                      height: '6px',
                      borderRadius: 'var(--radius-full)',
                      background: activeTab === idx ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Subsystem Spec Bar */}
            <div style={{
              padding: '12px 18px',
              background: 'var(--bg-elevated)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--text-muted)'
            }}>
              <span style={{ color: 'var(--text-primary)' }}>{currentMod.spec1}</span>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{currentMod.spec2}</span>
            </div>
          </div>

          {/* Right Column: 4 Synchronized Interactive Subsystem Cards */}
          <div className="reveal-3d" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {CHASSIS_MODULES.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '16px 18px',
                    background: isActive ? 'var(--bg-elevated)' : 'rgba(255, 255, 255, 0.02)',
                    borderTop: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    borderRight: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    borderBottom: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    borderLeft: `4px solid ${isActive ? 'var(--accent-cyan)' : 'transparent'}`,
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 217, 255, 0.15)' : 'none',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'
                      }}>
                        {item.num}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.0625rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}>
                        {item.title}
                      </span>
                    </div>

                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      background: isActive ? 'rgba(0, 217, 255, 0.12)' : 'transparent',
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-xs)',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    marginBottom: '6px'
                  }}>
                    {item.subtitle}
                  </div>

                  {isActive && (
                    <p style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginTop: '6px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '8px',
                      animation: 'fadeIn 0.25s ease'
                    }}>
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
