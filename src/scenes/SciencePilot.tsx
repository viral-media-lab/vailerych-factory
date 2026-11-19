import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const scenes=[
 {title:'ТЫ ТИРАННОЗАВР РЕКС',sub:'И ТЕБЕ НЕ ВЫЖИТЬ',bg:'#e6c99a',accent:'#b84d32',kind:'intro'},
 {title:'3 МЕТРА ЗУБОВ',sub:'И СИЛА УКУСА ДО 8 ТОНН',bg:'#b4b18b',accent:'#353b2b',kind:'bite'},
 {title:'ТЫ НЕ БЫСТРЫЙ',sub:'НО ТЕБЕ И НЕ НАДО',bg:'#d5b98d',accent:'#a54a2e',kind:'speed'},
 {title:'ТВОЁ ТЕЛО — МАШИНА',sub:'ХВОСТ ДЕРЖИТ БАЛАНС',bg:'#9da78c',accent:'#394b3b',kind:'tail'},
 {title:'А ВОТ С ГЛАЗАМИ...',sub:'ВСЁ НЕ ТАК ОДНОЗНАЧНО',bg:'#c6b28c',accent:'#5b4935',kind:'eyes'},
 {title:'ТЫ НЕ ВЕРХУШКА',sub:'МЕЛКИЕ ДИНАМИЧНЫЕ ХИЩНИКИ ТОЖЕ ОПАСНЫ',bg:'#aab09a',accent:'#3d4939',kind:'danger'},
 {title:'66 МИЛЛИОНОВ ЛЕТ НАЗАД',sub:'ПЛАНЕТА РЕЗКО ИЗМЕНИЛАСЬ',bg:'#d2a984',accent:'#a6442c',kind:'meteor'},
 {title:'И ТВОЯ ЭПОХА ЗАКОНЧИЛАСЬ',sub:'ДАЖЕ КОРОЛЬ НЕ ПЕРЕЖИЛ КАТАСТРОФУ',bg:'#4b4d50',accent:'#e5b76f',kind:'end'}
];
const Dino:React.FC<{kind:string;accent:string;frame:number}> = ({kind,accent,frame})=>{
 const bob=Math.sin(frame/7)*8, tilt=Math.sin(frame/15)*4;
 const mouth=kind==='bite'?Math.abs(Math.sin(frame/6))*34:kind==='intro'?Math.abs(Math.sin(frame/13))*14:8;
 return <svg viewBox="0 0 900 680" style={{width:'100%',height:'100%',overflow:'visible'}}>
 <g transform={`translate(0 ${bob}) rotate(${tilt} 450 340)`}>
  <ellipse cx="430" cy="580" rx="300" ry="30" fill="#35382e" opacity=".2"/>
  <path d="M220 365Q330 220 520 310Q650 355 650 470Q620 575 470 580Q290 590 220 500Z" fill="#66764e" stroke="#292b24" strokeWidth="18" strokeLinejoin="round"/>
  <path d="M260 365Q365 260 520 325L600 460Q560 530 450 545Q305 550 260 470Z" fill="#81905e"/>
  <path d="M500 360Q605 290 685 185Q710 140 770 165Q830 190 790 255Q720 350 630 420" fill="#687a4f" stroke="#292b24" strokeWidth="18" strokeLinejoin="round"/>
  <path d="M715 185Q780 135 850 185Q880 220 830 275Q780 315 705 270Z" fill="#7f8e59" stroke="#292b24" strokeWidth="18"/>
  <path d={`M720 245Q790 260 850 235Q840 ${250+mouth} 770 ${260+mouth}Q730 275 720 245Z`} fill="#342520" stroke="#28251f" strokeWidth="10"/>
  <path d="M735 247l10 18m28-15l10 19m29-23l8 15" stroke="#f3e5c9" strokeWidth="9" strokeLinecap="round"/>
  <circle cx="790" cy="207" r="22" fill="#f1d39a" stroke="#27251e" strokeWidth="8"/><circle cx="798" cy="208" r="9" fill="#211f1b"/>
  <path d="M240 435Q100 455 55 390Q25 355 70 345Q120 330 180 380L285 390" fill="#687a50" stroke="#292b24" strokeWidth="18"/>
  <path d="M315 515L300 600Q300 625 355 630L405 630Q430 610 390 585L390 520M520 520L535 600Q535 625 590 630L645 630Q665 605 630 585L600 510" fill="#5b6947" stroke="#292b24" strokeWidth="18" strokeLinejoin="round"/>
  <path d="M320 560l40 2m180 0l40 2" stroke="#b5bc86" strokeWidth="12" strokeLinecap="round"/>
  <path d="M270 360q40-22 60-8m70-15q25-20 42-7" fill="none" stroke="#4a5439" strokeWidth="12" strokeLinecap="round"/>
  {Array.from({length:7},(_,i)=><path key={i} d={`M${320+i*36} 320l-12-25 23 9 17-24 2 33`} fill="#566846" stroke="#303729" strokeWidth="5"/>)}
 </g>
 <g fill="#f5e8c9" stroke="#4a3327" strokeWidth="5">
 <path d="M180 95q-25-45 15-52q35-5 35 35q20-35 55-22q25 25-10 45Z"/>
 </g>
 </svg>
};
const SceneGraphic:React.FC<{kind:string;accent:string;frame:number}> = ({kind,accent,frame})=>{
 if(kind==='meteor') return <svg viewBox="0 0 900 700" width="100%" height="100%"><circle cx="570" cy="330" r="155" fill="#d69a69" stroke="#3d3229" strokeWidth="14"/><path d="M180 140L490 280" stroke="#f5dfb5" strokeWidth="70" strokeLinecap="round"/><path d="M180 140L490 280" stroke="#9c5738" strokeWidth="18" strokeLinecap="round"/>{Array.from({length:16},(_,i)=><circle key={i} cx={540+(i*73)%180} cy={290+(i*91)%200} r={10+(i%6)*5} fill="#75533d" opacity=".5"/>)}</svg>;
 return <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',gap:30}}>
   <div style={{fontSize:140,fontWeight:1000,color:accent,transform:`rotate(${Math.sin(frame/8)*3}deg)`}}>{kind==='bite'?'🦷':kind==='speed'?'↗':kind==='tail'?'〰':kind==='eyes'?'◉':'⚠'}</div>
   {kind==='speed'&&<div style={{fontSize:90,fontWeight:1000,color:accent}}>25 км/ч</div>}
   {kind==='bite'&&<div style={{fontSize:82,fontWeight:1000,color:accent}}>8 ТОНН</div>}
   {kind==='tail'&&<div style={{fontSize:65,fontWeight:1000,color:accent}}>БАЛАНС</div>}
   {kind==='eyes'&&<div style={{fontSize:65,fontWeight:1000,color:accent}}>3D?</div>}
   {kind==='danger'&&<div style={{fontSize:90,fontWeight:1000,color:accent}}>ХИЩНИК</div>}
 </div>;
};
const kineticText=(text:string,accent:string,frame:number,fps:number)=>{const s=spring({frame,fps,config:{damping:11,stiffness:170}});return <div style={{transform:`translateY(${(1-s)*55}px) scale(${.82+s*.18}) rotate(${(1-s)*-4}deg)`,opacity:s,textAlign:'center',fontWeight:1000,letterSpacing:-2,lineHeight:1.04,fontSize:72,color:'#fff3d7',textShadow:`0 5px 0 #29261e,0 10px 20px #393027`,padding:'0 35px'}}>{text.split(' ').map((w,i)=><span key={i} style={{display:'inline-block',marginRight:'.18em',transform:`translateY(${Math.sin(frame/4+i)*3}px)`}}>{w}</span>)}</div>};
export const SciencePilot:React.FC=()=>{
 const frame=useCurrentFrame(),{fps}=useVideoConfig();const index=Math.min(7,Math.floor(frame/225));const local=frame-index*225;const s=scenes[index];const camera=interpolate(local,[0,225],[1.02,1.12]);const intro=index===0||index===7;
 return <AbsoluteFill style={{background:s.bg,overflow:'hidden',fontFamily:'Arial Black,Arial,sans-serif'}}>
 <AbsoluteFill style={{background:s.bg}}/>
 <svg viewBox="0 0 1080 1920" width="100%" height="100%" style={{position:'absolute'}}>
 <defs><pattern id="paper" width="42" height="48" patternUnits="userSpaceOnUse"><circle cx="4" cy="10" r="1.3" fill="#45392b" opacity=".12"/><path d="M12 40l8-1m12-22l5-1" stroke="#fff" opacity=".15"/></pattern></defs>
 <path d="M0 1050Q200 850 430 1030T1080 990V1920H0Z" fill={index===7?'#33373a':'#b0a982'} opacity=".42"/>
 {Array.from({length:7},(_,i)=><g key={i} opacity=".4" fill={index===7?'#202629':'#596b48'}><path d={`M${i*190-80} 1020l130-370 130 370z`}/><path d={`M${i*190-80} 920l130-270 130 270z`} fill="#8c9b6d"/></g>)}
 <rect width="1080" height="1920" fill="url(#paper)"/>
 </svg>
 <div style={{position:'absolute',top:80,left:35,right:35}}>{kineticText(s.title,s.accent,local,fps)}</div>
 <div style={{position:'absolute',top:245,left:60,right:60,textAlign:'center',fontSize:36,fontWeight:900,color:s.accent,letterSpacing:1}}>{s.sub}</div>
 <AbsoluteFill style={{transform:`scale(${camera}) translateY(${Math.sin(frame/11)*7}px)`,transformOrigin:'50% 65%'}}>
 {index===0||index===1||index===2||index===3||index===4||index===5||index===7?<div style={{position:'absolute',left:20,right:20,top:440,bottom:290}}><Dino kind={s.kind} accent={s.accent} frame={local}/></div>:null}
 {index===6&&<div style={{position:'absolute',left:50,right:50,top:400,bottom:380}}><SceneGraphic kind={s.kind} accent={s.accent} frame={local}/><div style={{position:'absolute',bottom:80,left:0,right:0,textAlign:'center',fontSize:60,fontWeight:1000,color:'#fff',textShadow:'0 5px #33251f'}}>УДАР ИЗ КОСМОСА</div></div>}
 {index===2||index===3||index===4||index===5?<div style={{position:'absolute',left:40,right:40,bottom:360,height:420,background:'#f1e2bd',border:'8px solid #3d382e',borderRadius:36,transform:`rotate(${Math.sin(frame/12)*2}deg)`,display:'flex',alignItems:'center',justifyContent:'center'}}><SceneGraphic kind={s.kind} accent={s.accent} frame={local}/></div>:null}
 </AbsoluteFill>
 <div style={{position:'absolute',bottom:120,left:35,right:35,textAlign:'center',fontSize:36,fontWeight:900,color:index===7?'#f1c16d':'#37352c',opacity:.85}}>НАУКА • БЕЗ СКУЧНОЙ ЛЕКЦИИ</div>
 <div style={{position:'absolute',bottom:0,left:0,right:0,height:14,background:'#2226'}}><div style={{height:'100%',width:(frame/1800*100)+'%',background:s.accent}}/></div>
 </AbsoluteFill>;
};
