'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Atom,
  Beaker,
  Box,
  ChevronRight,
  CircleCheck,
  FlaskConical,
  Leaf,
  Menu,
  Network,
  Package,
  Route,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lu93qKjPWHO9cBut7wifLltyENpXyk.png'

const navItems = ['Home', 'Specimen', 'Analysis', 'Results', 'Why', 'Compare', 'Notebook']
const foods = ['Tomato', 'Potato', 'Biscuits', 'Potato chips', 'Wheat', 'Milk powder', 'Fresh-cut lettuce']
const storageOptions = ['Ambient', 'Refrigerated', 'Frozen']
const transportOptions = ['Local', 'Regional', 'Long-distance', 'Export']

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-card ${className}`}>{children}</div>
}

function Pill({ children, tone = 'lime' }: { children: React.ReactNode; tone?: 'lime' | 'amber' | 'muted' }) {
  return <span className={`pill pill-${tone}`}>{children}</span>
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function MaterialLayers({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`material-stack ${compact ? 'compact' : ''}`} aria-label="Three packaging material layers">
      <div className="material-layer outer">Outer layer <span>PE / PET</span></div>
      <div className="material-layer barrier">Barrier layer <span>EVOH</span></div>
      <div className="material-layer sealant">Sealant layer <span>PE</span></div>
    </div>
  )
}

function Score({ value, label }: { value: number; label: string }) {
  return (
    <div className="score">
      <div className="score-ring" style={{ '--score': `${value * 3.6}deg` } as React.CSSProperties}>
        <strong>{value}</strong><small>/100</small>
      </div>
      <span>{label}</span>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-glow" />
      <img src={heroImage} alt="Tomato and transparent packaging layers in a botanical laboratory setting" />
      <div className="visual-line line-one" />
      <div className="visual-line line-two" />
      <GlassCard className="callout food-callout">
        <div className="callout-icon"><Leaf size={16} /></div>
        <div><b>FOOD</b><span>Characterization</span></div>
        <ul><li>Moisture</li><li>Respiration rate</li><li>Spoilage mode</li></ul>
      </GlassCard>
      <GlassCard className="callout analysis-callout">
        <div className="callout-icon"><Network size={16} /></div>
        <div><b>ANALYSIS</b><span>Physics + Data</span></div>
        <ul><li>Barrier requirements</li><li>MAP suitability</li><li>Material screening</li></ul>
      </GlassCard>
      <GlassCard className="layer-callout">
        <span className="eyebrow">Structure</span><b>Material layers</b><MaterialLayers compact />
      </GlassCard>
      <GlassCard className="chart-callout">
        <span className="eyebrow">Technical readout</span><b>Gas barrier</b>
        <svg viewBox="0 0 150 46" role="img" aria-label="Rising gas barrier chart"><path d="M4 41 C31 35, 34 27, 55 29 S81 19, 101 20 S124 8, 146 5" fill="none" stroke="#d9f77a" strokeWidth="2" /><path d="M4 41 H146" stroke="rgba(255,255,255,.22)" /></svg>
      </GlassCard>
    </div>
  )
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [food, setFood] = useState('Tomato')
  const [shelf, setShelf] = useState(15)
  const [storage, setStorage] = useState('Refrigerated')
  const [transport, setTransport] = useState('Regional')
  const [activeTab, setActiveTab] = useState('Home')

  const go = (name: string) => {
    setActiveTab(name)
    setMobileOpen(false)
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="lab-shell">
      <div className="atmosphere" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => go('Home')}><span className="brand-mark"><Atom size={19} /></span><span><strong>SEAL</strong><small>SIH26236 · Packaging Requirement Laboratory</small></span></a>
        <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
        <nav className={mobileOpen ? 'open' : ''}>{navItems.map(item => <a key={item} className={activeTab === item ? 'active' : ''} href={`#${item.toLowerCase()}`} onClick={() => go(item)}>{item}</a>)}</nav>
        <button className="primary-button nav-cta" onClick={() => go('Specimen')}>Start analysis <ArrowRight size={18} /></button>
      </header>

      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <Pill>INTELLIGENT PACKAGING SYSTEM</Pill>
          <h1>What should<br />this food be<br /><em>packed</em> in?</h1>
          <p className="hero-note">A physics-first decision engine for food packaging requirements.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => go('Specimen')}>Start analysis <ArrowRight size={18} /></button><button className="text-button" onClick={() => go('Notebook')}>Explore the notebook <ChevronRight size={18} /></button></div>
          <div className="hero-meta"><span><CircleCheck size={16} /> Explainable by design</span><span><CircleCheck size={16} /> Food-specific intelligence</span></div>
        </div>
        <HeroVisual />
      </section>

      <section className="feature-strip"><div><Atom /><b>Physics-first<br />decision engine</b><span>Grounded in material science.</span></div><div><Box /><b>Food-specific<br />intelligence</b><span>Understands spoilage behaviour.</span></div><div><Leaf /><b>Multiple<br />packaging options</b><span>Evaluates feasible structures.</span></div><div><FlaskConical /><b>Traceable<br />recommendations</b><span>Shows the reasoning.</span></div></section>

      <section id="specimen" className="section-pad specimen-section">
        <SectionTitle eyebrow="01 / SPECIMEN" title="Set the conditions the package must survive." copy="Describe the food in plain language. The laboratory handles the complexity." />
        <div className="specimen-layout">
          <GlassCard className="specimen-form">
            <label className="field-label">Commodity <span>Searchable library</span></label>
            <select value={food} onChange={e => setFood(e.target.value)}>{foods.map(item => <option key={item}>{item}</option>)}</select>
            <div className="commodity-preview"><div className="commodity-orb">{food === 'Tomato' ? '🍅' : food === 'Wheat' ? '🌾' : food === 'Milk powder' ? '🥛' : '🥬'}</div><div><span className="eyebrow">Selected specimen</span><strong>{food}</strong><small>High sensitivity profile · demo library</small></div><CircleCheck className="check" /></div>
            <label className="field-label">Desired shelf life <output>{shelf} days</output></label>
            <input type="range" min="3" max="60" value={shelf} onChange={e => setShelf(Number(e.target.value))} />
            <div className="range-labels"><span>3 days</span><span>60 days</span></div>
            <label className="field-label">Storage condition</label><div className="choice-grid three">{storageOptions.map(item => <button className={storage === item ? 'choice selected' : 'choice'} onClick={() => setStorage(item)} key={item}><span>{item === 'Ambient' ? '◌' : item === 'Refrigerated' ? '°' : '◇'}</span>{item}</button>)}</div>
            <label className="field-label">Transport profile</label><div className="choice-grid four">{transportOptions.map(item => <button className={transport === item ? 'choice selected' : 'choice'} onClick={() => setTransport(item)} key={item}><Route size={16} />{item}</button>)}</div>
          </GlassCard>
          <GlassCard className="summary-card"><span className="eyebrow">Specimen summary</span><h3>Ready for analysis</h3><p>We’ll derive the packaging requirements from your selected context.</p><div className="summary-rows"><div><span>Commodity</span><b>{food}</b></div><div><span>Shelf life</span><b>{shelf} days</b></div><div><span>Storage</span><b>{storage}</b></div><div><span>Transport</span><b>{transport}</b></div></div><button className="primary-button full" onClick={() => go('Analysis')}>Continue to analysis <ArrowRight size={18} /></button></GlassCard>
        </div>
      </section>

      <section id="analysis" className="section-pad dark-section"><SectionTitle eyebrow="02 / ANALYSIS" title="From food characteristics to packaging requirements." copy="A six-stage laboratory process turns context into a ranked, feasible recommendation." /><div className="process-grid"><div className="stages">{['FOOD','ENVIRONMENT','REQUIREMENTS','MATERIALS','CONSTRAINTS','RECOMMENDATION'].map((stage, i) => <div className={`stage ${i < 4 ? 'complete' : i === 4 ? 'current' : ''}`} key={stage}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{stage}</b><small>{['Identifying commodity and spoilage mode.','Understanding storage and transport.','Deriving barrier and MAP requirements.','Evaluating packaging candidates.','Applying physical feasibility constraints.','Ranking feasible candidates.'][i]}</small></div></div>)}</div><GlassCard className="analysis-visual"><div className="flow-node"><div className="node-icon"><Leaf /></div><span>Food specimen</span><b>{food}</b></div><ArrowRight className="flow-arrow" /><div className="flow-node highlighted"><div className="node-icon"><Sparkles /></div><span>Derived requirements</span><b>Barrier + MAP</b></div><ArrowRight className="flow-arrow" /><div className="flow-node"><div className="node-icon"><Package /></div><span>Material candidates</span><b>03 feasible</b></div><div className="analysis-readout"><span><i className="status-dot" /> Processing live</span><b>72%</b><div className="progress"><i /></div></div></GlassCard><GlassCard className="live-panel"><span className="eyebrow">Live analysis</span>{['Food characterization','Environment','Barrier requirements','Material screening'].map((item, i) => <div className="live-row" key={item}><span>{item}</span><Pill tone={i < 2 ? 'lime' : i === 2 ? 'amber' : 'muted'}>{i < 2 ? 'Complete' : i === 2 ? 'Processing' : 'Pending'}</Pill></div>)}</GlassCard></div></section>

      <section id="results" className="section-pad results-section"><SectionTitle eyebrow="03 / RESULTS" title="Recommended packaging structure." copy="A balanced candidate for this specimen context — not a universal answer." /><div className="results-grid"><GlassCard className="recommendation-card"><div className="recommendation-head"><div><Pill>RECOMMENDED</Pill><h3>High-barrier<br />MAP pouch</h3></div><div className="recommendation-score"><strong>88</strong><span>fit score</span></div></div><MaterialLayers /><div className="recommendation-foot"><span><ShieldCheck size={17} /> Food-contact suitable</span><span><Leaf size={17} /> Recyclability considered</span></div></GlassCard><div className="score-grid"><Score value={94} label="Oxygen barrier" /><Score value={87} label="Moisture barrier" /><Score value={91} label="Shelf-life fit" /><Score value={84} label="Transport fit" /><Score value={78} label="Sustainability" /><Score value={72} label="Cost efficiency" /></div></div><div className="alternatives"><div className="alt-intro"><span className="eyebrow">Feasible alternatives</span><h3>Compare the trade-offs.</h3></div>{[['Rigid PET tray','High clarity · Strong','86'],['Paper-based laminate','Lower impact · Moderate','74']].map(([name, detail, score]) => <GlassCard className="alternative" key={name}><div className="alt-layer"><div /><div /><div /></div><div><Pill tone="muted">ALTERNATIVE</Pill><h4>{name}</h4><p>{detail}</p></div><strong>{score}<small>fit</small></strong><ChevronRight /></GlassCard>)}</div></section>

      <section id="why" className="section-pad dark-section"><SectionTitle eyebrow="04 / EXPLAINABILITY" title="Why this recommendation?" copy="Every result comes with a traceable decision record, not a black box." /><div className="trace"><div className="trace-line" />{['Food characteristics','Derived requirements','Rules passed','Physical constraints','Candidate evaluation','Recommendation'].map((item, i) => <div className={`trace-node ${i === 5 ? 'final' : ''}`} key={item}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{item}</b><small>{['High oxygen sensitivity · high respiration','Oxygen barrier · controlled exchange','4 rules satisfied','3 candidates remain feasible','Weighted fit across 9 parameters','High-barrier MAP pouch'][i]}</small></div></div>)}</div><div className="evidence-grid"><GlassCard><span className="eyebrow">Rules passed</span><h3>System logic</h3><p>High oxygen sensitivity <b>→</b> oxygen barrier required</p><p>Long transport <b>→</b> mechanical requirement increased</p><p>High respiration <b>→</b> controlled gas exchange considered</p></GlassCard><GlassCard><span className="eyebrow">Evidence record</span><h3>Source clarity</h3><div className="evidence-row"><Pill>COMPUTED</Pill><span>Derived requirement set</span></div><div className="evidence-row"><Pill tone="amber">REFERENCE</Pill><span>Material performance ranges</span></div><div className="evidence-row"><Pill tone="muted">AI WORDING</Pill><span>Natural language explanation</span></div></GlassCard></div></section>

      <section id="compare" className="section-pad"><SectionTitle eyebrow="05 / COMPARISON" title="Compare materials without the spreadsheet." copy="Hover a candidate to inspect its performance profile and trade-offs." /><div className="compare-grid">{[['Recommended','High-barrier MAP pouch',88,'lime'],['Alternative 1','Rigid PET tray',86,'amber'],['Alternative 2','Paper-based laminate',74,'muted']].map(([tag,name,score,tone]) => <GlassCard className={`compare-card ${tone === 'lime' ? 'recommended' : ''}`} key={name}><Pill tone={tone as 'lime' | 'amber' | 'muted'}>{tag}</Pill><h3>{name}</h3><div className="compare-layers"><MaterialLayers compact /></div>{['Oxygen barrier','Moisture barrier','Shelf-life fit','Mechanical suitability','Sustainability'].map((label, i) => <div className="metric" key={label}><span>{label}</span><div className="metric-bar"><i style={{ width: `${Number(score) - i * 4}%` }} /></div><b>{Number(score) - i * 4}</b></div>)}</GlassCard>)}</div></section>

      <section id="notebook" className="section-pad notebook-section"><SectionTitle eyebrow="06 / NOTEBOOK" title="Research notebook." copy="A compact technical record for the assumptions behind the recommendation." /><div className="notebook-grid"><GlassCard><span className="eyebrow">Food properties</span><h3>{food} profile</h3><div className="data-list"><div><span>Moisture activity</span><b>0.96 aw</b></div><div><span>Respiration rate</span><b>High</b></div><div><span>Sensitivity</span><b>O₂ / impact</b></div><div><span>Temperature</span><b>2–8 °C</b></div></div></GlassCard><GlassCard className="chart-panel"><span className="eyebrow">Barrier performance</span><h3>OTR / WVTR envelope</h3><svg viewBox="0 0 500 160" preserveAspectRatio="none" role="img" aria-label="Barrier performance chart"><path d="M0 142 C50 125 72 128 112 101 S181 106 220 80 S279 68 322 64 S392 45 500 20" fill="none" stroke="#d9f77a" strokeWidth="3" /><path d="M0 142 C50 125 72 128 112 101 S181 106 220 80 S279 68 322 64 S392 45 500 20 V160 H0Z" fill="url(#area)" opacity=".25" /><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d9f77a" /><stop offset="1" stopColor="#d9f77a" stopOpacity="0" /></linearGradient></defs></svg><div className="chart-axis"><span>low barrier</span><span>candidate envelope</span><span>high barrier</span></div></GlassCard></div><div className="disclaimer"><Beaker size={18} /> Demo library · not validated laboratory data</div></section>
      <footer><span>SEAL / SIH26236</span><span>Packaging Requirement Laboratory</span><span>© 2025 Demonstrator</span></footer>
    </main>
  )
}
