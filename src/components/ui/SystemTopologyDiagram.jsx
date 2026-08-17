import React, { useState } from 'react';
import { Laptop, Cpu, Wifi, Radio, Camera, Disc, Eye, Activity, ShieldCheck } from 'lucide-react';

export default function SystemTopologyDiagram() {
  const [activeLayer, setActiveLayer] = useState('all');

  return (
    <div className="tech-card reticle-box" style={{ background: 'var(--bg-surface)', padding: 'var(--space-6)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
            DISTRIBUTED EMBEDDED TOPOLOGY // 2.4GHz BUS
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Complete System Data Flow & Compute Hierarchy
          </div>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-elevated)', padding: '4px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          {['all', 'laptop', 'esp32_core', 'esp32_cam'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveLayer(filter)}
              style={{
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                border: 'none',
                borderRadius: 'var(--radius-xs)',
                cursor: 'pointer',
                background: activeLayer === filter ? 'var(--accent-cyan)' : 'transparent',
                color: activeLayer === filter ? 'var(--text-inverse)' : 'var(--text-secondary)',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              {filter.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Flow Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px', position: 'relative' }}>
        {/* Tier 1: Laptop Compute Host */}
        <div style={{
          background: 'var(--bg-elevated)',
          border: `1px solid ${activeLayer === 'laptop' || activeLayer === 'all' ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-5)',
          boxShadow: activeLayer === 'laptop' ? '0 0 20px rgba(22, 119, 255, 0.2)' : 'none',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
            <Laptop size={20} style={{ color: 'var(--accent-blue)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-blue)' }}>HOST COMPUTE LAYER</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700 }}>Laptop Processing Core</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.8125rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>● Python 3.11 Backend</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Orchestration, multithreaded I/O & command dispatch</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.8125rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>● OpenCV 4.8 Pipeline</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Real-time facial detection & closed-loop PID servo tracking</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.8125rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>● Gemini API & Speech Engine</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>STT audio transcription + intent understanding + Edge TTS</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.8125rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>● React Telemetry UI</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Operator cockpit, live camera view & manual tele-op</div>
            </div>
          </div>
        </div>

        {/* Tier 2: Network Interconnect */}
        <div style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
              <Wifi size={20} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)' }}>LOCAL WIRELESS BUS</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700 }}>2.4GHz Dedicated AP</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem' }}>
              <div style={{ padding: '8px', background: 'rgba(0, 217, 255, 0.05)', borderLeft: '2px solid var(--accent-cyan)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)' }}>PORT 80 / 8080 : HTTP & WS</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Low-latency bidirectional command packet transmission</div>
              </div>

              <div style={{ padding: '8px', background: 'rgba(0, 217, 255, 0.05)', borderLeft: '2px solid var(--accent-cyan)', borderRadius: 'var(--radius-xs)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)' }}>PORT 81 : MJPEG STREAM</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Direct camera video stream feed to OpenCV engine</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '16px', padding: '8px 12px', background: 'rgba(57, 229, 140, 0.1)', border: '1px solid rgba(57, 229, 140, 0.3)', borderRadius: 'var(--radius-xs)', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--status-nominal)' }}>
            <Activity size={14} />
            <span>AVERAGE LATENCY: &lt; 18ms</span>
          </div>
        </div>

        {/* Tier 3: Physical Microcontrollers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* ESP32 Core */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: `1px solid ${activeLayer === 'esp32_core' || activeLayer === 'all' ? 'var(--status-nominal)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            boxShadow: activeLayer === 'esp32_core' ? '0 0 20px rgba(57, 229, 140, 0.2)' : 'none',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Cpu size={18} style={{ color: 'var(--status-nominal)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--status-nominal)' }}>EMBEDDED CONTROLLER 01</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9375rem', fontWeight: 700 }}>ESP32 Core Microcontroller</div>
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              • 4WD L298N Dual H-Bridge Motor Control<br />
              • 3x Ultrasonic Sonar Obstacle Polling (50Hz)<br />
              • MQ-2 / MQ-7 / MQ-135 / DHT-22 Sensor Polling
            </div>
          </div>

          {/* ESP32-CAM */}
          <div style={{
            background: 'var(--bg-elevated)',
            border: `1px solid ${activeLayer === 'esp32_cam' || activeLayer === 'all' ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            boxShadow: activeLayer === 'esp32_cam' ? '0 0 20px rgba(0, 217, 255, 0.2)' : 'none',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Camera size={18} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--accent-cyan)' }}>EMBEDDED CONTROLLER 02</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9375rem', fontWeight: 700 }}>ESP32-CAM Optical Node</div>
              </div>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              • OV2640 Optical Sensor (640x480 MJPEG)<br />
              • 2x SG90 Pan & Tilt Articulation Servos<br />
              • Independent WiFi streaming server
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
