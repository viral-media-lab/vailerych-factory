import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Valerych, type Expression} from '../characters/Valerych';

export const PilotScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 14, stiffness: 100}});
  const shake = frame < 36 ? Math.sin(frame * 2.4) * 7 * (1 - frame / 36) : 0;
  const expression: Expression = frame < 42 ? 'shout' : frame < 100 ? 'smirk' : 'deadpan';
  const subtitle = frame < 90
    ? 'ТЫ МОЖЕШЬ СЕБЯ ПОЩЕКОТАТЬ?'
    : 'МОЗГ УЖЕ ЗНАЕТ, ЧТО ТЫ ДЕЛАЕШЬ';

  return (
    <AbsoluteFill style={{background: '#c9b18c', overflow: 'hidden', fontFamily: 'Arial, sans-serif'}}>
      <AbsoluteFill style={{background: 'linear-gradient(180deg,#d9c8a8 0%,#c9b18c 55%,#8a8065 100%)'}}/>
      <div style={{position: 'absolute', left: -40, top: 140, width: 1160, height: 760, background: '#a99d82', border: '12px solid #766e5b', borderRadius: 8}}/>
      {Array.from({length: 6}, (_, i) => (
        <div key={i} style={{position: 'absolute', left: 30 + i * 185, top: 205, width: 115, height: 145, background: '#5c7776', border: '12px solid #e2d3b4', boxShadow: 'inset 0 0 0 5px #344b4c'}}/>
      ))}
      <div style={{position: 'absolute', bottom: 0, width: '100%', height: 490, background: '#77745e'}}/>
      <div style={{position: 'absolute', bottom: 330, left: 0, width: '100%', height: 16, background: '#514f43'}}/>
      <div style={{position: 'absolute', bottom: 300, left: 90, width: 900, height: 28, background: '#604b39', borderRadius: 8}}/>
      <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: 260, background: 'linear-gradient(180deg,#8d876b,#575746)'}}/>

      <AbsoluteFill style={{transform: `translateX(${shake}px) scale(${1 + entrance * 0.05})`, transformOrigin: '50% 70%'}}>
        <div style={{position: 'absolute', width: 790, height: 1200, left: 145, top: 260}}>
          <Valerych expression={expression} speaking/>
        </div>
      </AbsoluteFill>

      <div style={{position: 'absolute', top: 90, left: 55, right: 55, textAlign: 'center', color: '#fff4dc', fontWeight: 900, fontSize: 64, lineHeight: 1.05, textShadow: '0 5px 0 #302720, 0 9px 20px #302720', letterSpacing: -2}}>
        {subtitle}
      </div>
      <div style={{position: 'absolute', bottom: 120, left: 70, right: 70, textAlign: 'center', color: '#fff7e7', fontWeight: 900, fontSize: 54, textShadow: '0 4px 0 #302720', letterSpacing: 1}}>
        ВАЛЕРЫЧ ОБЪЯСНЯЕТ
      </div>
      <div style={{position: 'absolute', top: 30, right: 35, color: '#34291f', fontSize: 24, fontWeight: 800, letterSpacing: 3}}>
        VAIЛЕРЫЧ
      </div>
    </AbsoluteFill>
  );
};