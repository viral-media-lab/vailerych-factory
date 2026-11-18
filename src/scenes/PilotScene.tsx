import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Valerych, type Expression} from '../characters/Valerych';

export const PilotScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 15, stiffness: 82}});
  const camera = interpolate(frame, [0, 90, 150, 240], [1.04, 1.12, 1.08, 1.16], {extrapolateRight: 'clamp'});
  const shake = frame < 38 ? Math.sin(frame * 2.3) * 5 * (1 - frame / 38) : Math.sin(frame / 4) * 1.2;
  const expression: Expression = frame < 45 ? 'shout' : frame < 125 ? 'smirk' : frame < 190 ? 'suspicious' : 'laugh';
  const subtitle = frame < 90 ? 'ТЫ МОЖЕШЬ СЕБЯ ПОЩЕКОТАТЬ?' : frame < 180 ? 'МОЗГ УЖЕ ЗНАЕТ, ЧТО ТЫ ДЕЛАЕШЬ' : 'ОН ТЕБЯ ПРОСТО НЕ СЧИТАЕТ';
  const titlePop = spring({frame: Math.max(0, frame - 5), fps, config: {damping: 9, stiffness: 150}});

  return (
    <AbsoluteFill style={{background: '#b9a886', overflow: 'hidden', fontFamily: 'Arial, sans-serif'}}>
      <svg viewBox="0 0 1080 1920" width="100%" height="100%" style={{position: 'absolute'}}>
        <defs>
          <linearGradient id="yard-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d6c7a7"/><stop offset="1" stopColor="#a99a7c"/></linearGradient>
          <linearGradient id="yard-wall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b5a98d"/><stop offset=".55" stopColor="#958c75"/><stop offset="1" stopColor="#776f5c"/></linearGradient>
          <linearGradient id="yard-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c5b18d"/><stop offset="1" stopColor="#817b64"/></linearGradient>
          <pattern id="wall-noise" width="42" height="38" patternUnits="userSpaceOnUse"><path d="M4 9l7-2m13 20l8-1M0 34l5-1" stroke="#e3d5b7" strokeWidth="2" opacity=".22"/><circle cx="30" cy="8" r="1.5" fill="#514c40" opacity=".15"/></pattern>
        </defs>
        <rect width="1080" height="1920" fill="url(#yard-sky)"/>
        <path d="M-60 120H1140V1300H-60Z" fill="url(#yard-wall)" stroke="#6e6756" strokeWidth="22"/>
        <rect x="0" y="120" width="1080" height="1180" fill="url(#wall-noise)" opacity=".8"/>
        {Array.from({length: 5}, (_, i) => <g key={i} transform={`translate(${36 + i * 218} 0)`}>
          <rect x="0" y="185" width="148" height="222" rx="3" fill="#e1d2b1" stroke="#6d6554" strokeWidth="10"/>
          <rect x="13" y="198" width="122" height="194" fill="#536b68" stroke="#344b49" strokeWidth="9"/>
          <path d="M24 210h99" stroke="#d5e1cf" strokeWidth="5" opacity=".22"/>
        </g>)}
        <path d="M-40 1285H1120" stroke="#6d6654" strokeWidth="18"/>
        <rect x="0" y="1300" width="1080" height="620" fill="url(#yard-ground)"/>
        <path d="M0 1308q270-16 540 0t540 0" fill="none" stroke="#e1cfaa" strokeWidth="8" opacity=".55"/>
        <path d="M-20 1695H1100" stroke="#6b6956" strokeWidth="20"/>
        <path d="M80 1768H1000" stroke="#604b3a" strokeWidth="26" strokeLinecap="round"/>
        <path d="M80 1757H1000" stroke="#a68a6b" strokeWidth="4" opacity=".5"/>
        <rect width="1080" height="1920" fill="none" stroke="#e7d9bb" strokeWidth="24" opacity=".2"/>
      </svg>

      <AbsoluteFill style={{transform: `translateX(${shake}px) scale(${camera + entrance * .035})`, transformOrigin: '50% 68%'}}>
        <div style={{position: 'absolute', width: 1050, height: 1450, left: 15, top: 330, filter: 'drop-shadow(0 25px 22px rgba(29,22,17,.3))'}}>
          <Valerych expression={expression} speaking/>
        </div>
      </AbsoluteFill>
      <div style={{position: 'absolute', top: 115, left: 55, right: 55, transform: `translateY(${(1-titlePop)*35}px) scale(${.92 + titlePop*.08})`, opacity: titlePop, textAlign: 'center', color: '#fff0d5', fontWeight: 900, fontSize: 64, lineHeight: 1.04, letterSpacing: -2, textShadow: '0 5px 0 #302720, 0 9px 22px rgba(35,25,18,.7)'}}>
        {subtitle}
      </div>
      <div style={{position: 'absolute', top: 38, right: 48, color: '#30291f', fontSize: 25, fontWeight: 900, letterSpacing: 4, textShadow: '0 1px #e8d8b9'}}>VAIЛЕРЫЧ</div>
      <div style={{position: 'absolute', bottom: 122, left: 70, right: 70, textAlign: 'center', color: '#fff2d9', fontWeight: 900, fontSize: 50, letterSpacing: 1, textShadow: '0 4px 0 #302720, 0 7px 16px #302720'}}>РАЙОННЫЙ ФИЛОСОФ</div>
    </AbsoluteFill>
  );
};
