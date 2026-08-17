import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, Thermometer, Wind, Zap, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import SensorBar from '../ui/SensorBar';
import sensorMq2Img from '../../assets/sensor_mq2.jpg';
import sensorMq7Img from '../../assets/sensor_mq7.jpg';
import sensorMq135Img from '../../assets/sensor_mq135.jpg';
import sensorDht22Img from '../../assets/sensor_dht22.jpg';

const SENSOR_MODULES = [
  {
    id: 0,
    code: 'MQ-2',
    name: 'Combustible Hydrocarbons & Smoke',
    image: sensorMq2Img,
    tech: 'SnO2 Semiconductor Thin-Film Layer',
    targets: 'LPG, Propane, Methane (CH4), Smoke, Alcohol',
    work: 'Detects combustible gas concentrations by measuring surface electrical conductivity variation across the heated SnO2 layer. Instant early deflagration warning.',
    spec: 'ANALOG ADC / SENSITIVITY: 200 - 10000 PPM'
  },
  {
    id: 1,
    code: 'MQ-7',
    name: 'Carbon Monoxide (CO) Asphyxiant Sensor',
    image: sensorMq7Img,
    tech: 'Dual-Cycle Micro Thermal Desorption',
    targets: 'Carbon Monoxide (CO) - Colorless & Odorless',
    work: 'Operates on periodic thermal cycling (5V heating for cleaning, 1.4V for CO adsorption) to detect lethal odorless carbon monoxide down to life-critical thresholds.',
    spec: 'ANALOG ADC / DETECTION: 20 - 2000 PPM CO'
  },
  {
    id: 2,
    code: 'MQ-135',
    name: 'Hazardous Air Quality & Benzene',
    image: sensorMq135Img,
    tech: 'Broadband Volatile Gas Sensing Core',
    targets: 'Ammonia (NH3), NOx, Alcohol, Benzene, Volatile Smoke',
    work: 'Monitors industrial atmospheric contamination and volatile chemical solvents, streaming real-time toxic gas safety thresholds directly to the command dashboard.',
    spec: 'ANALOG ADC / RANGE: 10 - 1000 PPM'
  },
  {
    id: 3,
    code: 'DHT-22',
    name: 'Digital Temperature & Relative Humidity',
    image: sensorDht22Img,
    tech: 'Capacitive Humidity Polymer + NTC Thermistor',
    targets: 'Ambient Temperature & Atmospheric Moisture Content',
    work: 'Provides digital 1-wire calibrated temperature (-40°C to +80°C) and humidity (0% to 100% RH) readings to calculate atmospheric thermal equilibrium and dew points.',
    spec: 'DIGITAL 1-WIRE BUS / ±0.5°C & ±2% RH ACCURACY'
  }
];

export default function SenseSection({ telemetry }) {
  const [activeSensor, setActiveSensor] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-cycle sensor carousel every 4 seconds when not hovered
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveSensor((prev) => (prev + 1) % SENSOR_MODULES.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSensor = () => {
    setActiveSensor((prev) => (prev + 1) % SENSOR_MODULES.length);
  };

  const prevSensor = () => {
    setActiveSensor((prev) => (prev - 1 + SENSOR_MODULES.length) % SENSOR_MODULES.length);
  };

  const currentMod = SENSOR_MODULES[activeSensor];

  return (
    <section
      id="sensing"
      className="story-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: 'var(--bg-base)',
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
        TELEMETRY
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="chapter-number reveal-3d">04 // ENVIRONMENTAL SENSING SUITE (SENSE)</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 3.5rem)',
          alignItems: 'center'
        }}>
          {/* Left Column: Interactive Sensor Hardware Carousel */}
          <div>
            <div className="hud-panel corner-reticle reveal-3d" style={{ padding: '0', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-4)' }}>
              <div style={{ position: 'relative', width: '100%', minHeight: '280px', overflow: 'hidden' }}>
                <img
                  key={currentMod.id}
                  src={currentMod.image}
                  alt={currentMod.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'contrast(1.08) brightness(1.02)',
                    transition: 'transform 0.4s ease, opacity 0.3s ease',
                    animation: 'fadeIn 0.4s ease'
                  }}
                />

                {/* Sensor Tag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '5px 12px',
                  background: 'rgba(7, 9, 12, 0.9)',
                  border: '1px solid var(--accent-cyan)',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 700,
                  boxShadow: '0 0 16px rgba(0, 217, 255, 0.35)'
                }}>
                  {currentMod.code} // CALIBRATED
                </div>

                {/* Left/Right Carousel Controls */}
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
                    onClick={prevSensor}
                    aria-label="Previous Sensor"
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
                    onClick={nextSensor}
                    aria-label="Next Sensor"
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
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '6px',
                  background: 'rgba(7, 9, 12, 0.8)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {SENSOR_MODULES.map((mod, idx) => (
                    <button
                      key={mod.id}
                      onClick={() => setActiveSensor(idx)}
                      aria-label={`Go to sensor ${idx + 1}`}
                      style={{
                        width: activeSensor === idx ? '20px' : '6px',
                        height: '6px',
                        borderRadius: 'var(--radius-full)',
                        background: activeSensor === idx ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.25)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Sensor Spec Strip */}
              <div style={{
                padding: '12px 18px',
                background: 'var(--bg-elevated)',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--accent-cyan)'
              }}>
                <span>{currentMod.spec}</span>
                <span style={{ color: 'var(--status-nominal)' }}>CALIBRATED ADC</span>
              </div>
            </div>

            {/* Sensor Operation Description */}
            <div className="reveal-3d" style={{
              padding: '14px 16px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)'
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                // SENSING PRINCIPLE & MECHANISM
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                {currentMod.work}
              </p>
            </div>
          </div>

          {/* Right Column: Live Calibrated PPM Telemetry Gauges (Click to Switch Carousel) */}
          <div className="reveal-3d">
            <h2 className="section-headline" style={{ marginBottom: 'var(--space-2)' }}>
              Real-Time Atmospheric Spectrum Analysis
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
              CALIBRATED PPM CONCENTRATIONS & SAFETY THRESHOLDS (CLICK TO INSPECT)
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* MQ-2 Smoke Card */}
              <div
                onClick={() => setActiveSensor(0)}
                style={{
                  cursor: 'pointer',
                  border: `1px solid ${activeSensor === 0 ? 'var(--accent-cyan)' : 'transparent'}`,
                  borderRadius: 'var(--radius-xs)',
                  transition: 'all 0.25s ease',
                  padding: '2px',
                  boxShadow: activeSensor === 0 ? '0 0 20px rgba(0, 217, 255, 0.2)' : 'none'
                }}
              >
                <SensorBar
                  label="Combustible Hydrocarbons & Smoke"
                  code="MQ-2"
                  value={telemetry.mq2Smoke}
                  unit="ppm"
                  min={0}
                  max={500}
                  warnThreshold={180}
                  dangerThreshold={350}
                  description="SnO2 semiconductor sensing layer for early combustion warning."
                  targetGases="LPG, Smoke, Propane, CH4"
                />
              </div>

              {/* MQ-7 Carbon Monoxide Card */}
              <div
                onClick={() => setActiveSensor(1)}
                style={{
                  cursor: 'pointer',
                  border: `1px solid ${activeSensor === 1 ? 'var(--status-hazard)' : 'transparent'}`,
                  borderRadius: 'var(--radius-xs)',
                  transition: 'all 0.25s ease',
                  padding: '2px',
                  boxShadow: activeSensor === 1 ? '0 0 20px rgba(255, 77, 79, 0.25)' : 'none'
                }}
              >
                <SensorBar
                  label="Carbon Monoxide (CO)"
                  code="MQ-7"
                  value={telemetry.mq7CO}
                  unit="ppm"
                  min={0}
                  max={100}
                  warnThreshold={30}
                  dangerThreshold={60}
                  description="Thermal cycling sensor for lethal odorless carbon monoxide."
                  targetGases="CO (20 - 2000 ppm)"
                />
              </div>

              {/* MQ-135 Air Quality Card */}
              <div
                onClick={() => setActiveSensor(2)}
                style={{
                  cursor: 'pointer',
                  border: `1px solid ${activeSensor === 2 ? 'var(--status-warning)' : 'transparent'}`,
                  borderRadius: 'var(--radius-xs)',
                  transition: 'all 0.25s ease',
                  padding: '2px',
                  boxShadow: activeSensor === 2 ? '0 0 20px rgba(250, 173, 20, 0.25)' : 'none'
                }}
              >
                <SensorBar
                  label="Hazardous Air Quality & Benzene"
                  code="MQ-135"
                  value={telemetry.mq135AirQuality}
                  unit="ppm"
                  min={0}
                  max={600}
                  warnThreshold={250}
                  dangerThreshold={450}
                  description="Detects benzene, toxic ammonia, alcohol, and volatile smoke."
                  targetGases="NH3, NOx, Alcohol, Benzene"
                />
              </div>

              {/* DHT-22 Temp & Humidity Cards */}
              <div
                onClick={() => setActiveSensor(3)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  cursor: 'pointer',
                  border: `1px solid ${activeSensor === 3 ? 'var(--accent-blue)' : 'transparent'}`,
                  borderRadius: 'var(--radius-xs)',
                  padding: '2px',
                  boxShadow: activeSensor === 3 ? '0 0 20px rgba(22, 119, 255, 0.25)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                    <Thermometer size={13} />
                    <span>DHT-22 TEMP</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {telemetry.temperature}°C
                  </div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>Range: -40°C to +80°C</div>
                </div>

                <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                    <Wind size={13} />
                    <span>DHT-22 HUMIDITY</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {telemetry.humidity}%
                  </div>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>Range: 0% to 100% RH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
