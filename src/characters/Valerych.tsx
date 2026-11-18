import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export type Expression = 'smirk' | 'shout' | 'deadpan' | 'suspicious' | 'laugh';
type Props = {expression?: Expression; speaking?: boolean};

/**
 * VAIЛЕРЫЧ — revised to match the user's illustrated reference:
 * warm anime-influenced 2D key art, messy dark hair, expressive face,
 * navy tracksuit with twin white stripes, cream shirt, painterly texture.
 */
export const Valerych: React.FC<Props> = ({expression = 'smirk', speaking = true}) => {
  const frame = useCurrentFrame();
  const blink = frame % 119 < 4;
  const bob = Math.sin(frame / 8) * 2.2;
  const breath = Math.sin(frame / 21) * 1.5;
  const jaw = speaking ? 4 + 9 * Math.max(0, Math.sin(frame * 1.48)) : 2;
  const mouthOpen = expression === 'shout' ? 18 + 12 * Math.max(0, Math.sin(frame * 1.7)) : expression === 'laugh' ? 15 + 9 * Math.max(0, Math.sin(frame * 1.9)) : jaw;
  const browTilt = expression === 'suspicious' ? 10 : expression === 'shout' ? -8 : 0;
  const eyeScale = blink ? .12 : expression === 'shout' ? 1.15 : 1;

  return (
    <svg viewBox="0 0 680 940" width="100%" height="100%" role="img" aria-label="VAIЛЕРЫЧ">
      <defs>
        <linearGradient id="ref-skin" x1="0" y1="0" x2=".9" y2="1">
          <stop offset="0" stopColor="#ffd0a0"/><stop offset=".38" stopColor="#eaa06f"/><stop offset="1" stopColor="#b96e50"/>
        </linearGradient>
        <linearGradient id="ref-jacket" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34465f"/><stop offset=".48" stopColor="#202f49"/><stop offset="1" stopColor="#111d32"/>
        </linearGradient>
        <linearGradient id="ref-hair" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor="#45312b"/><stop offset=".55" stopColor="#211d20"/><stop offset="1" stopColor="#11151b"/>
        </linearGradient>
        <linearGradient id="ref-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8e9d0"/><stop offset="1" stopColor="#cdbda5"/>
        </linearGradient>
        <pattern id="ref-paper" width="29" height="31" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="7" r="1.1" fill="#fff0d6" opacity=".25"/><circle cx="19" cy="21" r=".9" fill="#382b2b" opacity=".15"/>
          <path d="M8 27l5-1m8-18l4-1" stroke="#fff4df" strokeWidth=".8" opacity=".18"/>
        </pattern>
        <pattern id="ref-fabric" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M0 5l22 9M-3 16l18 8" stroke="#b9c4cf" strokeWidth="1" opacity=".1"/>
        </pattern>
        <filter id="ref-shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>

      <ellipse cx="344" cy="901" rx="240" ry="18" fill="#171d27" opacity=".3" filter="url(#ref-shadow)"/>
      <g transform={`translate(0 ${breath})`}>
        {/* Jacket silhouette and cream shirt */}
        <path d="M250 474Q180 486 139 543Q96 606 83 738L49 914Q48 930 68 930H612Q632 929 628 910L592 738Q580 610 535 548Q494 493 424 474L390 453H284Z" fill="url(#ref-jacket)" stroke="#111b2b" strokeWidth="15" strokeLinejoin="round"/>
        <path d="M250 474Q180 486 139 543Q96 606 83 738L49 914Q48 930 68 930H612Q632 929 628 910L592 738Q580 610 535 548Q494 493 424 474L390 453H284Z" fill="url(#ref-fabric)"/>
        <path d="M280 470Q333 518 392 470L415 630Q346 679 260 628Z" fill="url(#ref-shirt)" stroke="#172235" strokeWidth="10"/>
        <path d="M260 491Q221 536 205 637L168 887M422 491Q466 537 481 637L518 887" fill="none" stroke="#dfe4e7" strokeWidth="16" strokeLinecap="round"/>
        <path d="M280 507L238 890M402 507L445 890" fill="none" stroke="#f2eee2" strokeWidth="7" strokeLinecap="round" opacity=".95"/>
        <path d="M253 477Q305 531 348 533Q391 531 424 477" fill="none" stroke="#101a2a" strokeWidth="17"/>
        <path d="M270 487Q314 522 349 522Q390 519 408 487" fill="none" stroke="#68778a" strokeWidth="4" opacity=".55"/>
        <path d="M115 715q34 18 62 8m-74 57q27 8 48 3m401-63q-29 17-50 10" fill="none" stroke="#0d1728" strokeWidth="8" opacity=".35"/>
        <path d="M139 549q-34 105-38 190m439-186q38 94 45 186" fill="none" stroke="#65758a" strokeWidth="5" opacity=".35"/>
      </g>

      {/* Neck, ears and face */}
      <path d="M270 407L410 405L407 520Q344 560 269 514Z" fill="url(#ref-skin)" stroke="#53332b" strokeWidth="10"/>
      <path d="M188 225Q140 193 130 268Q121 338 179 372Q205 383 220 349Z" fill="url(#ref-skin)" stroke="#4a2c27" strokeWidth="12"/>
      <path d="M493 225Q541 197 550 270Q557 340 499 373Q473 382 458 349Z" fill="url(#ref-skin)" stroke="#4a2c27" strokeWidth="12"/>
      <path d="M197 263q-25-9-29 20q-1 38 30 58m302-77q26-10 30 19q2 39-29 59" fill="none" stroke="#a75f4b" strokeWidth="9" strokeLinecap="round"/>
      <g transform={`translate(${Math.sin(frame / 14) * 1.5} ${bob}) rotate(-1 340 330)`}>
        <path d="M185 196Q207 127 333 121Q463 113 495 208Q520 280 493 380Q474 474 391 512Q331 540 264 507Q186 470 170 380Q151 278 185 196Z" fill="url(#ref-skin)" stroke="#482a25" strokeWidth="14" strokeLinejoin="round"/>
        <path d="M183 204Q210 153 300 144Q417 123 478 196Q446 177 405 187Q356 204 300 187Q234 171 183 222Z" fill="#ffdbad" opacity=".35"/>
        <path d="M184 331Q195 424 257 471Q216 454 190 411Q174 375 184 331Z" fill="#99533f" opacity=".25"/>
        <path d="M486 327Q476 423 421 466Q459 450 480 410Q496 372 486 327Z" fill="#8b493b" opacity=".22"/>
        {/* Hair: layered pointed silhouette, no cap */}
        <path d="M167 256Q146 216 178 170L154 145Q205 151 222 111L233 145Q267 92 300 111L310 78L335 117Q374 78 401 112L420 88L430 133Q478 126 502 178L531 169L512 212Q520 243 494 264Q463 228 434 217Q386 196 343 205Q276 198 224 233Q191 251 167 276Z" fill="url(#ref-hair)" stroke="#17191d" strokeWidth="13" strokeLinejoin="round"/>
        <path d="M190 190Q224 151 254 145L239 185Q274 137 306 133L291 173Q331 126 367 139L348 174Q397 130 429 161L409 183Q461 164 489 206" fill="none" stroke="#725044" strokeWidth="9" strokeLinecap="round" opacity=".7"/>
        <path d="M202 221q-15 21-15 45m64-119l-8 31m90-75l-3 40m102-18l-9 33m72 24l-21 24" fill="none" stroke="#9b6a50" strokeWidth="6" strokeLinecap="round" opacity=".55"/>

        {/* Eyes and heavy asymmetrical brows */}
        <g transform={`translate(0 0) scale(1 ${eyeScale})`} style={{transformOrigin:'340px 285px'}}>
          <path d="M205 290Q239 258 292 285Q267 316 211 300Z" fill="#f7e7d2" stroke="#392722" strokeWidth="8"/>
          <path d="M377 282Q423 250 470 276Q440 308 382 298Z" fill="#f7e7d2" stroke="#392722" strokeWidth="8"/>
          {!blink && <><ellipse cx="253" cy="286" rx="10" ry="14" fill="#201d1c"/><ellipse cx="425" cy="280" rx="10" ry="14" fill="#201d1c"/><circle cx="257" cy="280" r="4" fill="#fff5e4"/><circle cx="429" cy="274" r="4" fill="#fff5e4"/></>}
        </g>
        <path d={`M198 263Q244 ${244+browTilt} 295 273`} fill="none" stroke="#272020" strokeWidth="22" strokeLinecap="round"/>
        <path d={`M376 260Q425 ${238-browTilt} 474 267`} fill="none" stroke="#272020" strokeWidth="23" strokeLinecap="round"/>
        <path d="M206 252q33-20 69-13m113 0q37-22 70-9" fill="none" stroke="#8c5b46" strokeWidth="4" opacity=".5"/>

        {/* Nose, cheek planes, mouth and expression */}
        <path d="M340 285Q331 331 301 365Q321 384 354 376Q376 371 388 358Q363 342 360 306" fill="#c97b59" stroke="#985541" strokeWidth="7" strokeLinejoin="round"/>
        <path d="M309 366q28 12 59-2" fill="none" stroke="#f8c294" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
        <path d="M207 374q25 19 49 13m182-11q-23 18-47 15" fill="none" stroke="#ad624e" strokeWidth="6" opacity=".55"/>
        <path d="M229 406q18 12 39 4m151-5q-18 12-39 5" fill="none" stroke="#f2a17c" strokeWidth="7" opacity=".6"/>
        <path d={expression === 'deadpan' ? "M276 429q55 5 111-8" : `M273 422Q333 ${420+mouthOpen} 407 408Q387 ${449+mouthOpen*.45} 328 451Q292 447 273 422Z`} fill="#572c2b" stroke="#462422" strokeWidth="6" strokeLinejoin="round"/>
        {mouthOpen > 12 && expression !== 'deadpan' && <path d="M296 425q37 13 79-2l-9 15q-33 9-58-1Z" fill="#f8e4d0" opacity=".92"/>}
        <path d="M282 455q45 13 84-4" fill="none" stroke="#a9574c" strokeWidth="5" strokeLinecap="round" opacity=".65"/>
        <path d="M218 395l-8 11m23 8l-7 9m35 17l-5 8m180-52l8 10m-27 18l7 9" stroke="#6f4035" strokeWidth="5" strokeLinecap="round" opacity=".6"/>
      </g>

      {/* Hands at waist, simplified but integrated into the silhouette */}
      <path d="M113 690Q88 698 91 738Q97 778 133 786Q164 780 168 749Q164 709 143 697Z" fill="url(#ref-skin)" stroke="#4a2c27" strokeWidth="9"/>
      <path d="M536 690Q563 697 561 738Q555 778 519 786Q488 780 484 749Q488 709 508 697Z" fill="url(#ref-skin)" stroke="#4a2c27" strokeWidth="9"/>
      <path d="M103 733q18 17 43 12m405-12q-18 17-43 12" fill="none" stroke="#a45d49" strokeWidth="6" opacity=".65"/>
      <rect x="0" y="0" width="680" height="940" fill="url(#ref-paper)" opacity=".5" pointerEvents="none"/>
    </svg>
  );
};
