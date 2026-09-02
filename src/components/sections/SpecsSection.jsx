import React, { useState } from 'react';
import { Cpu, ShieldCheck, Download, FileText } from 'lucide-react';

const SPEC_TABS = [
  {
    id: 'chassis',
    label: 'CHASSIS & TRACTION',
    specs: [
      { param: 'Propulsion Configuration', val: '4WD Independent High-Torque Geared DC Motors' },
      { param: 'Motor Drivers', val: 'Dual BTS7960 43A High-Current MOSFET H-Bridges' },
      { param: 'Motor Acceleration Profiling', val: 'ATmega328P Hardware PWM Slew-Rate Ramping' },
      { param: 'Steering Method', val: 'Differential Skid Steering (Zero-Turn Radius)' },
      { param: 'Operating Ground Clearance', val: '45 mm (High-Impact Engineering Chassis)' },
      { param: 'Max Continuous Incline', val: '32° Rubble Grade' },
      { param: 'Total Platform Mass', val: '2.85 kg (Including Battery & Sensor Pod)' },
      { param: 'Max Usable Payload', val: '3.50 kg' }
    ]
  },
  {
    id: 'sensors',
    label: 'HAZMAT & SENSING SUITE',
    specs: [
      { param: 'Combustible & Mine Gas', val: 'MQ-4 SnO2 Sensor (Methane CH4, Natural Gas, LEL 5%)' },
      { param: 'Carbon Monoxide Asphyxiant', val: 'MQ-7 Thermal Cycling Sensor (CO 20 - 2000 ppm)' },
      { param: 'Hazardous Air Quality & NH3', val: 'MQ-135 Sensor (Ammonia, NOx, Benzene, Volatiles)' },
      { param: 'Barometer & Structural Altitude', val: 'BMP-280 MEMS Sensor (300-1100 hPa, ±1m Altitude)' },
      { param: 'Local Sensor HUD Display', val: '16x2 I2C Liquid Crystal Display (Node 04 Nano)' },
      { param: 'Thermal & Relative Humidity', val: 'DHT-22 Digital Sensor (-40°C to +80°C, 0-100% RH)' },
      { param: 'Obstacle Sonar Radar', val: 'HC-SR04 Ultrasonic Sensor on SG90 Sweep Servo (120°)' }
    ]
  },
  {
    id: 'vision_compute',
    label: 'COMPUTE & DISTRIBUTED MCUs',
    specs: [
      { param: 'Node 01: Remote Controller', val: 'ESP32 DevKit V1 (Core 0: 35Hz Cyber OS, Core 1: 100Hz RF)' },
      { param: 'Node 02: Rover Master', val: 'ESP32-S3 (CRC-8 Checksum, WS2812 RGB, 500ms Watchdog)' },
      { param: 'Node 03: Motor & Sound Brain', val: 'Arduino Uno (BTS7960 43A PWM + 10-Tone SoundEngine)' },
      { param: 'Node 04: Gas Sensor Node', val: 'Arduino Nano (ADC Gas Acquisition + 16x2 I2C Display)' },
      { param: 'Node 05: Telemetry Hub & FPV', val: 'ESP32-CAM (OV2640 640x480 MJPEG + REST Server)' },
      { param: 'Node 06: Ground Cockpit', val: 'Laptop Mission Dashboard (Web Audio + Telemetry HUD)' }
    ]
  },
  {
    id: 'power_network',
    label: 'ELECTRICAL & RF PROTOCOL',
    specs: [
      { param: 'Layer 1: Drive RF Bus', val: 'ESP-NOW 2.4GHz Peer-to-Peer Radio (100Hz, < 1ms Airtime)' },
      { param: 'Layer 2: Telemetry Wi-Fi', val: '802.11 b/g/n Hotspot (REST JSON Endpoint + MJPEG Stream)' },
      { param: 'End-to-End Control Latency', val: '< 10 ms Deterministic Braking & Steering' },
      { param: 'Primary Battery Chemistry', val: '3S Li-Po / Li-Ion (11.85V Nominal, 3000mAh)' },
      { param: 'Power Rail Isolation', val: 'Dual LM2596 Step-Down Buck Converters (Isolated 5V / 3.3V Logic)' },
      { param: 'Fail-Safe Protection', val: '500ms Radio Loss Auto-Brake + Physical E-Brake Switch' }
    ]
  }
];

export default function SpecsSection() {
  const [activeTab, setActiveTab] = useState('chassis');
  const currentTab = SPEC_TABS.find(t => t.id === activeTab) || SPEC_TABS[0];

  return (
    <section id="specs" className="story-stage" style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
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
        DATASHEET
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="chapter-number reveal-3d">08 // TECHNICAL SPECIFICATIONS & DATASHEET</div>

        <div className="reveal-3d" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-8)', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 className="section-headline" style={{ marginBottom: 'var(--space-2)' }}>
              Engineering Systems Datasheet
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem' }}>
              Full hardware parameters, microcontroller pinouts, sensor calibrations, and software interfaces.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.color = 'var(--accent-cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            <Download size={14} />
            <span>EXPORT DATASHEET</span>
          </button>
        </div>

        {/* Tab Selection Row */}
        <div className="reveal-3d hide-scrollbar" style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: 'var(--space-6)', WebkitOverflowScrolling: 'touch' }}>
          {SPEC_TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 14px',
                  background: isActive ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                  color: isActive ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.6875rem, 1.8vw, 0.75rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Spec Table */}
        <div className="hud-panel corner-reticle reveal-3d" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ width: '100%', minWidth: '480px', borderCollapse: 'collapse', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px 16px', width: '40%' }}>PARAMETER / SUBSYSTEM</th>
                  <th style={{ padding: '12px 16px' }}>ENGINEERING SPECIFICATION & STANDARD</th>
                </tr>
              </thead>
              <tbody>
                {currentTab.specs.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: idx === currentTab.specs.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                    }}
                  >
                    <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.8vw, 0.8125rem)', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {row.param}
                    </td>
                    <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.75rem, 1.8vw, 0.8125rem)', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {row.val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ padding: '10px 16px', background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)' }}>
            <span>DOC REV: 4.2.0-STABLE</span>
            <span style={{ color: 'var(--status-nominal)' }}>BENCHMARKS: 100% PASSED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
