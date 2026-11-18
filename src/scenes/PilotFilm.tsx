import React from 'react';
import {AbsoluteFill, Audio, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {Valerych} from '../characters/Valerych';

const captions = [
  [0,76,'ТЫ МОЖЕШЬ СЕБЯ','ЗА ЖОПУ УКУСИТЬ?'],
  [76,165,'А МОЗГ ТЕБЕ ДАЖЕ','ЩЕКОТАТЬ СЕБЯ ЗАПРЕЩАЕТ'],
  [165,270,'КОГДА КОРЕШ ЩЕКОЧЕТ','ТЫ РЖЁШЬ КАК ПСИХ'],
  [270,360,'А САМ СЕБЯ?','НИ-ХРЕ-НА'],
  [360,480,'МОЗГ УЖЕ ЗНАЕТ','ЧТО ТЫ СЕЙЧАС СДЕЛАЕШЬ'],
  [480,600,'ОН ПРЕДСКАЗЫВАЕТ','ОЩУЩЕНИЯ ОТ ДВИЖЕНИЯ'],
  [600,750,'И ПРИГЛУШАЕТ СИГНАЛ','ЗАРАНЕЕ'],
  [750,900,'ВНУТРИ СИДИТ','МЕЛКИЙ ДИСПЕТЧЕР ВАЛЕРЫЧ'],
  [900,1020,'РУКА СВОЯ?','ШТАМП: СВОЙ'],
  [1020,1110,'ЧУЖАЯ РУКА!','ДИСПЕТЧЕР, НЕ СПИ!'],
  [1110,1200,'СИРЕНА. ПАНИКА.','СЕМЕЧКИ ПО БАШКЕ.'],
  [1200,1320,'ДАЖЕ ТВОЙ МОЗГ','НЕ ХОЧЕТ С ТОБОЙ СВЯЗЫВАТЬСЯ.']
] as const;

const Yard: React.FC<{night?:boolean}> = ({night=false}) => (
  <svg viewBox="0 0 1080 1920" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="ysky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={night?'#29323b':'#d9c5a1'}/><stop offset=".55" stopColor={night?'#667078':'#b5a17f'}/><stop offset="1" stopColor={night?'#8c7860':'#8a765c'}/></linearGradient>
      <linearGradient id="ywall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b9ad92"/><stop offset=".5" stopColor="#958a73"/><stop offset="1" stopColor="#665e50"/></linearGradient>
      <linearGradient id="yground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bca47f"/><stop offset="1" stopColor="#665c4c"/></linearGradient>
      <pattern id="ybrick" width="88" height="48" patternUnits="userSpaceOnUse"><path d="M0 1H88M0 25H88M44 1V25M12 25V48" stroke="#554f44" strokeWidth="2" opacity=".18"/><path d="M6 8l12-2m29 12l8-2m20 19l10-2" stroke="#eee0c2" strokeWidth="2" opacity=".16"/></pattern>
    </defs>
    <rect width="1080" height="1920" fill="url(#ysky)"/>
    <path d="M-80 160L1160 80V1370H-80Z" fill="url(#ywall)" stroke="#544e43" strokeWidth="28"/>
    <path d="M-80 160L1160 80V1370H-80Z" fill="url(#ybrick)"/>
    {Array.from({length:5},(_,i)=><g key={i} transform={'translate('+(42+i*218)+' 0)'}>
      <path d="M0 285h150v260H0Z" fill="#d5c4a4" stroke="#5c5548" strokeWidth="13"/>
      <path d="M14 300h122v228H14Z" fill={night?'#3d4a4e':'#586b69'} stroke="#303d3d" strokeWidth="8"/>
      <path d="M73 300v228M14 414h122" stroke="#cbbd9f" strokeWidth="8" opacity=".7"/>
      <path d="M-12 548h176" stroke="#6e6656" strokeWidth="12"/>
    </g>)}
    <path d="M-30 1230H1110" stroke="#544d40" strokeWidth="28"/>
    <path d="M0 1370L1080 1330V1920H0Z" fill="url(#yground)"/>
    <path d="M0 1460q270-35 540 0t540 0M-30 1740q330-22 650 0t500 0" fill="none" stroke="#dfcba6" strokeWidth="9" opacity=".24"/>
    <path d="M-50 1640L1130 1580" stroke="#534c3e" strokeWidth="26" opacity=".55"/>
    <path d="M-50 1640L1130 1580" stroke="#c3a780" strokeWidth="5" opacity=".5"/>
    <path d="M-30 1000q80-180 170-120q80-160 170-60" fill="none" stroke="#4b5747" strokeWidth="28" opacity=".42"/>
    <rect width="1080" height="1920" fill="none" stroke="#e9d8b9" strokeWidth="22" opacity=".18"/>
  </svg>
);

const BrainRoom: React.FC<{alarm?:boolean}> = ({alarm=false}) => {
  const f=useCurrentFrame();
  const beat=1+Math.sin(f/7)*.035;
  return <AbsoluteFill style={{background:alarm?'#381c25':'#222b36'}}>
    <svg viewBox="0 0 1080 1920" width="100%" height="100%">
      <defs>
        <radialGradient id="bglow"><stop offset="0" stopColor={alarm?'#ff9b69':'#e9a875'} stopOpacity=".65"/><stop offset="1" stopColor="#342b3a" stopOpacity="0"/></radialGradient>
        <linearGradient id="bfill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f1b18a"/><stop offset=".55" stopColor="#c77c70"/><stop offset="1" stopColor="#784c5b"/></linearGradient>
      </defs>
      <rect width="1080" height="1920" fill={alarm?'#3c2028':'#26313b'}/>
      <circle cx="540" cy="700" r="620" fill="url(#bglow)" transform={'scale('+beat+')'}/>
      <path d="M538 330C430 220 260 290 252 440C115 470 130 650 224 710C162 850 280 1000 414 958C450 1100 615 1100 664 980C814 1030 936 880 862 746C1002 630 918 470 804 450C780 300 626 240 538 330Z" fill="url(#bfill)" stroke="#402d39" strokeWidth="24"/>
      <path d="M538 340C490 430 520 520 468 600C410 690 458 780 420 930M550 360C650 420 610 520 684 578C755 640 705 750 785 850M300 470q110-55 170 40m-205 175q100-80 190-10m-115 205q90-75 170 0m185-430q-55 95 30 150m130 60q-115 5-120 115m90 170q-85-80-170-15" fill="none" stroke="#7f4c5a" strokeWidth="24" strokeLinecap="round" opacity=".72"/>
      {Array.from({length:12},(_,i)=>{const x=240+((i*83)%600);const y=420+((i*137)%520);const p=5+Math.abs(Math.sin(f/5+i))*10;return <g key={i}><circle cx={x} cy={y} r={p+18} fill="#f7c58e" opacity=".1"/><circle cx={x} cy={y} r={p} fill="#ffe0ac"/><path d={'M'+x+' '+y+'l'+(i%2?45:-45)+' '+(i%3?-35:35)} stroke="#f8c18e" strokeWidth="4" opacity=".4"/></g>})}
      <path d="M0 1260H1080V1920H0Z" fill="#111923" opacity=".94"/>
      <path d="M0 1260q270-80 540 0t540 0" fill="none" stroke="#a56d66" strokeWidth="12" opacity=".7"/>
      <rect x="90" y="1370" width="900" height="390" rx="42" fill="#34414b" stroke="#141c24" strokeWidth="14"/>
      <rect x="150" y="1425" width="780" height="245" rx="22" fill="#18232c"/>
      <g fill="#edb879"><circle cx="220" cy="1490" r="16"/><circle cx="275" cy="1490" r="16"/><circle cx="330" cy="1490" r="16"/></g>
      <path d="M205 1575h670" stroke="#6a8290" strokeWidth="8" opacity=".5"/>
    </svg>
    <div style={{position:'absolute',top:260,left:0,right:0,textAlign:'center',fontSize:34,fontWeight:900,letterSpacing:8,color:'#f3c9a5',opacity:.85}}>НЕЙРОДИСПЕТЧЕРСКАЯ</div>
  </AbsoluteFill>;
};

const FingerHand: React.FC<{frame:number;alarm?:boolean}> = ({frame,alarm=false}) => {
  const move=Math.sin(frame/3.2)*24;
  return <svg viewBox="0 0 520 520" width="100%" height="100%">
    <g transform={'translate('+(move+(alarm?-90:0))+' 0) rotate('+(alarm?-22:8)+' 260 260)'}>
      <path d="M180 475Q110 445 126 356L155 218Q163 178 195 188Q224 197 213 235L194 320L226 120Q232 76 267 82Q302 88 293 132L266 312L305 92Q313 48 347 58Q383 69 371 113L338 318L377 148Q386 105 418 120Q451 135 437 178L399 376Q382 475 286 490Z" fill="#d78e70" stroke="#442a25" strokeWidth="15" strokeLinejoin="round"/>
      <path d="M203 210l-16 110m90-208l-17 158m92-161l-22 150m96-87l-22 144" stroke="#f4bd93" strokeWidth="12" strokeLinecap="round" opacity=".7"/>
      <path d="M145 380q75 52 161 26" fill="none" stroke="#8f5146" strokeWidth="14" opacity=".55"/>
    </g>
  </svg>;
};

const Caption: React.FC<{a:string;b:string;frame:number;fps:number}> = ({a,b,frame,fps}) => {
  const pop=spring({frame,fps,config:{damping:12,stiffness:180}});
  return <div style={{position:'absolute',left:50,right:50,bottom:190,transform:'translateY('+((1-pop)*50)+'px) scale(' +(.94+pop*.06)+')',opacity:pop,textAlign:'center',fontFamily:'Arial Black,Arial,sans-serif',fontWeight:1000,fontSize:58,lineHeight:1.08,letterSpacing:-1.5,color:'#fff2d9',textShadow:'0 5px 0 #261e1a,0 10px 26px rgba(0,0,0,.65)',padding:'22px 20px',background:'linear-gradient(90deg,rgba(25,24,24,0),rgba(25,24,24,.58),rgba(25,24,24,0))'}}>
    <div>{a}</div><div style={{color:'#ffd16f'}}>{b}</div>
  </div>;
};

export const PilotFilm: React.FC = () => {
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const scene=frame<165?0:frame<360?1:frame<750?2:frame<1020?3:frame<1200?4:5;
  const local=scene===0?frame:scene===1?frame-165:scene===2?frame-360:scene===3?frame-750:scene===4?frame-1020:frame-1200;
  const shake=scene===0?Math.sin(frame*2.4)*7*Math.max(0,1-frame/60):scene===4?Math.sin(frame*3.5)*8:Math.sin(frame/8)*1.4;
  const zoom=scene===0?interpolate(local,[0,165],[1.02,1.13]):scene===1?interpolate(local,[0,195],[1.12,1.02]):scene===2?interpolate(local,[0,390],[.98,1.08]):scene===3?interpolate(local,[0,270],[1.04,1.15]):scene===4?1.13:interpolate(local,[0,120],[1.06,1.14]);
  const expression: 'shout'|'laugh'|'suspicious'|'deadpan'|'smirk'=scene===0||scene===4?'shout':scene===1?'laugh':scene===2?'suspicious':scene===3?'deadpan':'smirk';
  const active=captions.find(c=>frame>=c[0]&&frame<c[1]);
  const capFrame=active?frame-active[0]:0;
  const redFlash=scene===4?Math.max(0,Math.sin(frame*1.15))*.22:0;

  return <AbsoluteFill style={{background:'#171c22',overflow:'hidden',fontFamily:'Arial,sans-serif'}}>
    <Audio src={staticFile('voice.mp3')} volume={1}/>
    {scene===2||scene===3||scene===4?<BrainRoom alarm={scene===4}/>:<Yard night={scene===5}/>}
    <AbsoluteFill style={{transform:'translate('+shake+'px,0) scale('+zoom+')',transformOrigin:'50% 58%'}}>
      {scene===0&&<>
        <div style={{position:'absolute',left:45,right:45,top:140,textAlign:'center',fontSize:82,fontWeight:1000,lineHeight:.98,color:'#fff0d4',textShadow:'0 7px 0 #39291f,0 15px 30px #382b20',transform:'rotate(-2deg)'}}>БРАТ, ТЫ ЧЁ?!</div>
        <div style={{position:'absolute',left:45,top:420,width:990,height:1300,filter:'drop-shadow(0 32px 28px rgba(0,0,0,.42))'}}><Valerych expression="shout" speaking/></div>
        <div style={{position:'absolute',right:45,top:850,width:260,height:260,transform:'rotate(-18deg)'}}><FingerHand frame={frame}/></div>
      </>}
      {scene===1&&<>
        <div style={{position:'absolute',top:180,left:50,right:50,textAlign:'center',fontSize:56,fontWeight:1000,color:'#fff0d4',textShadow:'0 5px 0 #302720'}}>КОГДА ТЕБЯ ЩЕКОЧЕТ КОРЕШ</div>
        <div style={{position:'absolute',left:65,top:450,width:950,height:1350,filter:'drop-shadow(0 28px 24px rgba(0,0,0,.4))'}}><Valerych expression="laugh" speaking/></div>
        <div style={{position:'absolute',right:-35,top:800,width:480,height:480,transform:'rotate(-14deg)'}}><FingerHand frame={local}/></div>
        <div style={{position:'absolute',left:55,top:1220,fontSize:100,fontWeight:1000,color:'#ffe28b',textShadow:'0 7px 0 #3d2b20'}}>АХАХАХА!</div>
      </>}
      {scene===2&&<>
        <div style={{position:'absolute',left:0,right:0,top:300,textAlign:'center',fontSize:60,fontWeight:1000,color:'#fff0d8',textShadow:'0 6px 0 #402d39'}}>МОЗГ ВСЁ ПРОСЧИТАЛ</div>
        <div style={{position:'absolute',left:85,top:500,width:910,height:1200,filter:'drop-shadow(0 28px 25px rgba(0,0,0,.4))'}}><Valerych expression="suspicious" speaking={false}/></div>
        <div style={{position:'absolute',left:60,right:60,top:1160,display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <div style={{padding:'24px 32px',borderRadius:20,background:'#f1c48e',color:'#342b30',fontSize:38,fontWeight:1000,transform:'rotate(-5deg)'}}>СИГНАЛ</div>
          <div style={{fontSize:74,color:'#ffd38f'}}>➜</div>
          <div style={{padding:'24px 32px',borderRadius:20,background:'#9ec1b4',color:'#1e3434',fontSize:38,fontWeight:1000,transform:'rotate(4deg)'}}>ФИЛЬТР</div>
        </div>
      </>}
      {scene===3&&<>
        <div style={{position:'absolute',top:190,left:40,right:40,textAlign:'center',fontSize:58,fontWeight:1000,color:'#fff0d8',textShadow:'0 6px 0 #402d39'}}>РУКА: «Я СВОЯ»</div>
        <div style={{position:'absolute',left:70,top:520,width:900,height:1250}}><Valerych expression="deadpan" speaking={false}/></div>
        <div style={{position:'absolute',left:100,top:1000,width:880,height:260,background:'#d9c08d',border:'12px solid #48343a',borderRadius:24,display:'flex',alignItems:'center',justifyContent:'center',fontSize:92,fontWeight:1000,color:'#40303a',letterSpacing:8,transform:'rotate(-4deg)',boxShadow:'0 24px 0 rgba(0,0,0,.2)'}}>СВОЙ ✓</div>
        <div style={{position:'absolute',right:40,top:550,width:300,height:300,opacity:.8}}><FingerHand frame={local}/></div>
      </>}
      {scene===4&&<>
        <div style={{position:'absolute',top:170,left:30,right:30,textAlign:'center',fontSize:80,fontWeight:1000,color:'#fff0d8',textShadow:'0 7px 0 #4a202a',transform:'rotate(-3deg)'}}>ТРЕВОГА!!!</div>
        <div style={{position:'absolute',left:65,top:510,width:900,height:1220,filter:'drop-shadow(0 30px 28px rgba(0,0,0,.5))'}}><Valerych expression="shout" speaking/></div>
        <div style={{position:'absolute',right:-90,top:680,width:570,height:570,transform:'rotate(-28deg)'}}><FingerHand frame={local} alarm/></div>
        <div style={{position:'absolute',left:90,top:1250,fontSize:90,fontWeight:1000,color:'#ff6e63',textShadow:'0 6px 0 #321a21'}}>А-А-А-А!</div>
      </>}
      {scene===5&&<>
        <div style={{position:'absolute',left:55,right:55,top:155,textAlign:'center',fontSize:66,fontWeight:1000,lineHeight:1.02,color:'#fff0d8',textShadow:'0 6px 0 #302720'}}>ДАЖЕ МОЗГ<br/>С ТОБОЙ НЕ ОБЩАЕТСЯ</div>
        <div style={{position:'absolute',left:45,top:440,width:990,height:1330,filter:'drop-shadow(0 32px 28px rgba(0,0,0,.45))'}}><Valerych expression="smirk" speaking/></div>
        <div style={{position:'absolute',right:75,top:760,fontSize:110,transform:'rotate(18deg)'}}>🌻</div>
      </>}
    </AbsoluteFill>
    {scene===2&&<div style={{position:'absolute',top:700,left:90,right:90,textAlign:'center',fontSize:46,fontWeight:1000,color:'#f9d5a9',letterSpacing:3}}>ПРЕДСКАЗАНИЕ → ПРИГЛУШЕНИЕ</div>}
    {scene===4&&<div style={{position:'absolute',inset:0,background:'#ff243d',opacity:redFlash,pointerEvents:'none'}}/>}
    {active&&<Caption a={active[2]} b={active[3]} frame={capFrame} fps={fps}/>}
    <div style={{position:'absolute',top:38,left:45,color:'#f4dfc1',fontSize:25,fontWeight:900,letterSpacing:5,textShadow:'0 2px 8px #171717'}}>VAIЛЕРЫЧ</div>
    <div style={{position:'absolute',top:38,right:45,color:'#f4dfc1',fontSize:22,fontWeight:900,letterSpacing:3,opacity:.8}}>НАУКА ПО-ДВОРОВОМУ</div>
    <div style={{position:'absolute',left:0,right:0,bottom:0,height:18,background:'rgba(20,18,17,.55)'}}><div style={{height:'100%',width:(frame/1320*100)+'%',background:'#f2c27d'}}/></div>
  </AbsoluteFill>;
};
