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
    code: 'MQ-4',
    name: 'Methane (CH4) & Mine Deflagration Sensor',
    image: sensorMq2Img,
    tech: 'SnO2 Micro-Sensor with High CH4 Selectivity',
    targets: 'Methane (CH4), Natural Gas, Coal Mine Fire-Damp',
    work: 'Engineered specifically for coal mines and gas pipelines. Detects explosive methane gas before it reaches the Lower Explosive Limit (LEL 5%), alerting rescue workers to immediate deflagration risks.',
    spec: 'ANALOG ADC / SENSITIVITY: 300 - 10000 PPM CH4'
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
    name: 'Hazardous Air Quality & Ammonia',
    image: sensorMq135Img,
    tech: 'Broadband Volatile Gas Sensing Core',
    targets: 'Ammonia (NH3), NOx, Alcohol, Benzene, Volatile Smoke',
    work: 'Monitors industrial atmospheric contamination and volatile chemical solvents, streaming real-time toxic gas safety thresholds directly to the command dashboard.',
    spec: 'ANALOG ADC / RANGE: 10 - 1000 PPM'
  },
  {
    id: 3,
    code: 'BMP-280',
    name: 'Barometric Pressure & Structural Altitude',
    image: sensorDht22Img,
    tech: 'Piezoresistive Micro-Electro-Mechanical (MEMS)',
    targets: 'Atmospheric Barometric Pressure (hPa) & Sub-Meter Altitude',
    work: 'Measures barometric pressure (300 to 1100 hPa) with ±0.12 hPa relative accuracy. Enables autonomous floor-level estimation in multi-story collapsed buildings and vertical mine shaft depth monitoring.',
    spec: 'FAST I2C / SPI BUS / ±1 METER ALTITUDE ACCURACY'
  },
  {
    id: 4,
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

        {/* ========================================================= */}
        {/* INTERACTIVE BMP280 STRUCTURAL ELEVATION SIMULATOR         */}
        {/* ========================================================= */}
        <div className="reveal-3d" style={{
          marginTop: 'var(--space-10)',
          background: 'linear-gradient(145deg, rgba(16, 20, 26, 0.95), rgba(7, 9, 12, 0.98))',
          border: '1px solid rgba(0, 217, 255, 0.25)',
          borderRadius: '24px',
          padding: 'clamp(16px, 3vw, 24px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#00e5ff', letterSpacing: '0.1em' }}>
                BMP280 MEMS BAROMETRIC CORE // I2C BUS
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, margin: '2px 0 0 0', color: '#fff' }}>
                Structural Altitude & Mine Shaft Gas Dispersion Simulator
              </h3>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#39e58c', background: 'rgba(57, 229, 140, 0.1)', padding: '4px 10px', borderRadius: '6px', border: '1px solid #39e58c' }}>
              REAL-TIME SUB-METER CALCULATION
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            {/* Slider Control */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>PROBE DEPTH / ELEVATION:</span>
                <span style={{ color: '#00e5ff', fontWeight: 'bold' }}>{telemetry.altitude || 12} METERS</span>
              </div>
              <input
                type="range"
                min="-20"
                max="40"
                defaultValue="12"
                id="elevationSlider"
                style={{
                  width: '100%',
                  accentColor: '#00e5ff',
                  cursor: 'pointer'
                }}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  const pEl = document.getElementById('dispPressure');
                  const mEl = document.getElementById('dispMethane');
                  const cEl = document.getElementById('dispStatus');
                  if (pEl) pEl.innerText = (1013.25 - (val * 0.12)).toFixed(2) + ' hPa';
                  if (mEl) mEl.innerText = Math.max(80, Math.round(180 + (val * 12))) + ' PPM';
                  if (cEl) {
                    if (val > 25) {
                      cEl.innerText = '⚠ WARNING: HIGH CEILING METHANE ACCUMULATION';
                      cEl.style.color = '#ff9500';
                    } else if (val < -10) {
                      cEl.innerText = '⚠ DEEP SHAFT CO POOLING DETECTED';
                      cEl.style.color = '#ff4444';
                    } else {
                      cEl.innerText = '● NOMINAL VENTILATION AIRFLOW';
                      cEl.style.color = '#39e58c';
                    }
                  }
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                <span>-20m (Underground Shaft)</span>
                <span>0m (Ground Zero)</span>
                <span>+40m (Upper Conduit)</span>
              </div>
            </div>

            {/* Real-time Computed Values */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'rgba(255,255,255,0.5)' }}>BMP280 PRESSURE</div>
                <div id="dispPressure" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.125rem', fontWeight: 'bold', color: '#00e5ff', marginTop: '2px' }}>
                  1011.81 hPa
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'rgba(255,255,255,0.5)' }}>CH4 (MQ-4 SENSOR)</div>
                <div id="dispMethane" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.125rem', fontWeight: 'bold', color: '#ff9500', marginTop: '2px' }}>
                  324 PPM
                </div>
              </div>
            </div>
          </div>

          <div id="dispStatus" style={{ marginTop: '14px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#39e58c', textAlign: 'center' }}>
            ● NOMINAL VENTILATION AIRFLOW
          </div>
        </div>
      </div>
    </section>
  );
}
