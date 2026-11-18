import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export type Expression = 'smirk' | 'shout' | 'deadpan' | 'suspicious' | 'laugh';
type Props = {expression?: Expression; speaking?: boolean};

export const Valerych: React.FC<Props> = ({expression = 'smirk', speaking = true}) => {
  const frame = useCurrentFrame();
  const blink = frame % 103 < 4;
  const mouth = speaking ? 5 + 12 * Math.max(0, Math.sin(frame * 1.65)) : 4;
  const bob = Math.sin(frame / 8) * 2;
  const eyeOpen = blink ? 2 : expression === 'suspicious' ? 7 : 12;
  const mouthHeight = expression === 'shout'
    ? interpolate(frame % 24, [0, 6, 12, 18, 24], [7, 30, 12, 27, 7])
    : expression === 'laugh' ? mouth + 9 : mouth;

  return (
    <svg viewBox="0 0 620 900" width="100%" height="100%" role="img" aria-label="VAIЛЕРЫЧ">
      <defs>
        <linearGradient id="vail-skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e4a477" />
          <stop offset="1" stopColor="#bd7959" />
        </linearGradient>
        <linearGradient id="vail-track" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#303a40" />
          <stop offset="1" stopColor="#11191e" />
        </linearGradient>
      </defs>

      {/* Torso and tracksuit: kept separate for puppet rigging */}
      <g id="body" transform={`translate(0 ${Math.sin(frame / 8) * 3})`}>
        <path d="M245 440 L375 440 L412 515 Q500 548 535 650 L574 880 L46 880 L85 650 Q120 548 208 515Z" fill="url(#vail-track)" stroke="#101619" strokeWidth="13" strokeLinejoin="round"/>
        <path d="M190 535 L150 860 M430 535 L470 860" stroke="#e8dfca" strokeWidth="13"/>
        <path d="M255 445 Q310 482 365 445 L390 535 Q310 575 230 535Z" fill="#d6c6aa" stroke="#25231f" strokeWidth="9"/>
        <path d="M238 475 Q310 520 382 475 L365 555 Q310 585 255 555Z" fill="#20292e" stroke="#101619" strokeWidth="8"/>
      </g>

      <path id="neck" d="M264 424 L356 424 L360 500 Q310 535 260 500Z" fill="#bd7959" stroke="#33251f" strokeWidth="9"/>

      <g id="head" transform={`translate(0 ${bob})`}>
        <path d="M177 292 Q130 250 128 320 Q133 385 188 386Z" fill="#c27d5c" stroke="#33251f" strokeWidth="10"/>
        <path d="M435 292 Q482 250 484 320 Q479 385 424 386Z" fill="#c27d5c" stroke="#33251f" strokeWidth="10"/>
        <path d="M177 203 Q190 115 306 119 Q430 110 447 211 L440 350 Q430 459 313 475 Q199 462 183 354Z" fill="url(#vail-skin)" stroke="#33251f" strokeWidth="13" strokeLinejoin="round"/>
        <path d="M188 340 Q207 399 263 415 Q224 429 197 390Z M432 337 Q415 405 360 421 Q402 435 425 389Z" fill="#9f5e49" opacity=".36"/>

        {/* Heavy, deliberately uneven eyebrows */}
        <g id="eyebrows" fill="none" stroke="#30231f" strokeWidth="25" strokeLinecap="round">
          <path d={expression === 'shout' ? 'M190 255 Q235 205 286 238' : 'M190 258 Q230 225 286 249'}/>
          <path d={expression === 'shout' ? 'M337 239 Q392 198 431 252' : 'M337 250 Q389 226 431 260'}/>
        </g>
        <path d="M390 230 L400 244" stroke="#d99a70" strokeWidth="7" strokeLinecap="round"/>

        <g id="eyes">
          <path d={`M211 288 Q250 274 286 292 Q253 ${309 + eyeOpen / 3} 211 288Z`} fill="#f1e4cf" stroke="#33251f" strokeWidth="7"/>
          <path d={`M337 292 Q379 272 414 291 Q379 ${310 + eyeOpen / 3} 337 292Z`} fill="#f1e4cf" stroke="#33251f" strokeWidth="7"/>
          {!blink && <>
            <ellipse cx="257" cy="290" rx="10" ry="12" fill="#241f1c"/>
            <ellipse cx="378" cy="290" rx="10" ry="12" fill="#241f1c"/>
            <circle cx="260" cy="286" r="3" fill="#fff2dd"/>
            <circle cx="381" cy="286" r="3" fill="#fff2dd"/>
          </>}
        </g>

        <path d="M309 292 Q300 337 279 359 Q307 378 344 356 Q328 346 326 329" fill="#bd7657" stroke="#754737" strokeWidth="8" strokeLinejoin="round"/>
        <path d="M202 366 Q213 432 311 451 Q407 435 423 365" fill="none" stroke="#4c3930" strokeWidth="13" strokeDasharray="2 12" strokeLinecap="round" opacity=".82"/>

        <g id="mouth">
          {expression === 'deadpan'
            ? <path d="M266 405 Q311 413 357 400" fill="none" stroke="#542d2a" strokeWidth="11" strokeLinecap="round"/>
            : <path d={`M264 400 Q311 ${400 + mouthHeight} 359 394 Q344 ${430 + mouthHeight} 294 420 Q274 416 264 400Z`} fill="#542d2a" stroke="#542d2a" strokeWidth="5"/>}
          <path d="M350 394 Q385 374 407 383" fill="none" stroke="#542d2a" strokeWidth="10" strokeLinecap="round"/>
        </g>

        {/* Signature crooked black cap */}
        <g id="cap" transform="rotate(-3 310 205)">
          <path d="M150 223 Q153 90 294 75 Q423 62 466 205 L445 232 Q305 194 170 245Z" fill="#151b1f" stroke="#090d10" strokeWidth="14"/>
          <path d="M163 218 Q304 180 457 215 Q510 229 486 253 Q330 222 171 263Z" fill="#252e33" stroke="#090d10" strokeWidth="11"/>
          <path d="M190 158 Q300 103 420 160" fill="none" stroke="#414b50" strokeWidth="6" opacity=".65"/>
        </g>
      </g>

      <g id="seeds" transform={`translate(${Math.sin(frame / 11) * 5} 0)`}>
        <path d="M456 700 Q512 654 554 700 Q581 741 535 779 Q484 784 456 700Z" fill="#bd805d" stroke="#33251f" strokeWidth="10"/>
        <path d="M492 700 l12 19 m8 -25 l11 20 m-45 8 l12 18 m33 -5 l10 15" stroke="#e8d3a9" strokeWidth="7" strokeLinecap="round"/>
      </g>
    </svg>
  );
};