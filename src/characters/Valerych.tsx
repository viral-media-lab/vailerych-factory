import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export type Expression = 'smirk' | 'shout' | 'deadpan' | 'suspicious' | 'laugh';
type Props = {expression?: Expression; speaking?: boolean};

/** VAIЛЕРЫЧ v2: expressive hand-illustrated 2D, uneven ink contours, warm painted shading. */
export const Valerych: React.FC<Props> = ({expression = 'smirk', speaking = true}) => {
  const frame = useCurrentFrame();
  const blink = frame % 117 < 4;
  const bob = Math.sin(frame / 7.5) * 2.4;
  const breath = Math.sin(frame / 19) * 1.8;
  const jaw = speaking ? 5 + 11 * Math.max(0, Math.sin(frame * 1.55)) : 3;
  const shout = expression === 'shout';
  const eyeY = blink ? 7 : expression === 'suspicious' ? 8 : 13;
  const mouthY = shout ? interpolate(frame % 22, [0, 5, 11, 16, 22], [9, 32, 13, 28, 9]) : expression === 'laugh' ? jaw + 13 : jaw;

  return (
    <svg viewBox="0 0 680 940" width="100%" height="100%" role="img" aria-label="VAIЛЕРЫЧ">
      <defs>
        <linearGradient id="v2-skin" x1="0.08" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#f2b18a"/><stop offset=".42" stopColor="#d98c69"/><stop offset="1" stopColor="#9e5948"/>
        </linearGradient>
        <linearGradient id="v2-fabric" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#354149"/><stop offset=".48" stopColor="#202b32"/><stop offset="1" stopColor="#10191f"/>
        </linearGradient>
        <linearGradient id="v2-cap" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor="#293036"/><stop offset=".55" stopColor="#11171c"/><stop offset="1" stopColor="#080d11"/>
        </linearGradient>
        <linearGradient id="v2-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a2926" stopOpacity="0"/><stop offset="1" stopColor="#542c2a" stopOpacity=".43"/>
        </linearGradient>
        <pattern id="v2-grain" width="23" height="27" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="5" r="1.1" fill="#f7d6b5" opacity=".18"/><circle cx="16" cy="17" r=".8" fill="#382b29" opacity=".15"/>
          <path d="M7 22l2-1" stroke="#fff0d5" strokeWidth=".8" opacity=".14"/>
        </pattern>
        <pattern id="v2-cloth" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M0 4l18 7M-3 14l14 6" stroke="#879097" strokeWidth=".8" opacity=".12"/>
        </pattern>
        <filter id="v2-soft-shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>

      <ellipse cx="342" cy="879" rx="250" ry="19" fill="#080e12" opacity=".28" filter="url(#v2-soft-shadow)"/>
      <g transform={`translate(0 ${breath})`}>
        <path d="M238 490 Q190 499 145 548 Q103 593 91 704 L54 916 Q52 929 69 929 L612 929 Q629 927 624 909 L585 704 Q574 588 525 545 Q482 507 426 491 L385 469 L270 470Z" fill="url(#v2-fabric)" stroke="#10171c" strokeWidth="15" strokeLinejoin="round"/>
        <path d="M238 490 Q190 499 145 548 Q103 593 91 704 L54 916 Q52 929 69 929 L612 929 Q629 927 624 909 L585 704 Q574 588 525 545 Q482 507 426 491 L385 469 L270 470Z" fill="url(#v2-cloth)" opacity=".85"/>
        <path d="M246 510 Q213 560 204 638 M435 512 Q477 555 489 645" fill="none" stroke="#536069" strokeWidth="8" opacity=".35"/>
        <path d="M210 548 L172 884 M457 546 L501 886" fill="none" stroke="#e5d9c1" strokeWidth="15" strokeLinecap="round"/>
        <path d="M203 553l-8 73m264-71l14 89" stroke="#fff2d7" strokeWidth="3" opacity=".45"/>
        <path d="M253 492 Q294 535 354 529 Q400 527 426 492" fill="none" stroke="#0d151a" strokeWidth="16"/>
        <path d="M261 490 Q302 520 354 515 Q394 514 417 490" fill="none" stroke="#4a555a" strokeWidth="4" opacity=".55"/>
        <path d="M119 711q36 17 60 9m-75 47q29 9 51 4m394-65q-28 17-49 10" fill="none" stroke="#080f14" strokeWidth="7" opacity=".35"/>
        <path d="M265 475 Q310 506 385 475 L395 539 Q332 580 254 539Z" fill="#182229" stroke="#0d1419" strokeWidth="10"/>
        <path d="M277 486q47 20 94 0" fill="none" stroke="#526068" strokeWidth="4" opacity=".45"/>
      </g>

      <path d="M267 397 L405 394 L404 512 Q344 553 270 509Z" fill="url(#v2-skin)" stroke="#382522" strokeWidth="11"/>
      <path d="M270 466q61 29 132 1l-3 40q-65 40-126 0Z" fill="#874b40" opacity=".42"/>
      <path d="M190 230 Q137 192 127 260 Q117 337 178 371 Q205 381 218 348Z" fill="url(#v2-skin)" stroke="#382522" strokeWidth="13"/>
      <path d="M184 257q-27-12-31 21q-2 40 31 57" fill="none" stroke="#8e4f42" strokeWidth="10" strokeLinecap="round"/>
      <path d="M470 230 Q527 198 541 266 Q550 339 490 373 Q463 382 449 348Z" fill="url(#v2-skin)" stroke="#382522" strokeWidth="13"/>
      <path d="M489 260q28-12 33 20q2 39-31 59" fill="none" stroke="#8e4f42" strokeWidth="10" strokeLinecap="round"/>

      <g transform={`translate(${Math.sin(frame / 13) * 1.6} ${bob}) rotate(-1 340 330)`}>
        <path d="M184 188 Q220 117 337 122 Q461 111 493 202 Q514 274 493 378 Q478 474 391 514 Q330 544 261 508 Q185 470 171 379 Q153 271 184 188Z" fill="url(#v2-skin)" stroke="#342321" strokeWidth="15" strokeLinejoin="round"/>
        <path d="M190 197 Q221 145 333 143 Q441 132 479 205 Q446 180 409 190 Q352 207 298 190 Q235 178 190 221Z" fill="#f3b18a" opacity=".34"/>
        <path d="M177 325 Q190 414 244 457 Q217 453 195 420 Q174 384 177 325Z" fill="#8d4e42" opacity=".28"/>
        <path d="M485 322 Q479 416 425 464 Q456 453 478 419 Q493 381 485 322Z" fill="#783f38" opacity=".24"/>
        <path d="M205 375 Q226 448 337 478 Q439 460 470 375 Q462 475 387 506 Q317 536 249 493 Q209 461 205 375Z" fill="url(#v2-shadow)"/>
        <path d="M338 280 Q329 331 301 364 Q319 382 352 376 Q374 373 385 361 Q360 343 359 306" fill="#bd7057" stroke="#7f493e" strokeWidth="8" strokeLinejoin="round"/>
        <path d="M309 365q28 12 58-1" fill="none" stroke="#f2b08a" strokeWidth="5" strokeLinecap="round" opacity=".65"/>
        <path d="M207 359q22 19 48 15m181-10q-22 19-45 16" fill="none" stroke="#a95d4c" strokeWidth="7" opacity=".45"/>

        <path d={blink ? "M211 286q43 19 82-1" : "M208 287 Q246 257 294 286 Q267 316 211 294Z"} fill="#f2dfc7" stroke="#382723" strokeWidth="9" strokeLinejoin="round"/>
        <path d={blink ? "M382 284q46 20 87-1" : "M379 285 Q425 255 468 278 Q438 309 382 294Z"} fill="#f2dfc7" stroke="#382723" strokeWidth="9" strokeLinejoin="round"/>
        {!blink && <><ellipse cx="254" cy="286" rx="11" ry={eyeY} fill="#211c1b"/><ellipse cx="424" cy="282" rx="11" ry={eyeY} fill="#211c1b"/><circle cx="258" cy="281" r="3.8" fill="#fff4dc"/><circle cx="428" cy="277" r="3.8" fill="#fff4dc"/></>}
        <path d={shout ? "M198 263q43-38 94-9" : "M198 265q47-26 95-8"} fill="none" stroke="#30221f" strokeWidth="22" strokeLinecap="round"/>
        <path d={shout ? "M377 256q49-39 94-7" : "M377 258q47-28 94-8"} fill="none" stroke="#30221f" strokeWidth="23" strokeLinecap="round"/>
        <path d="M206 253q35-25 72-17m115 8q36-25 66-12" fill="none" stroke="#5a3a31" strokeWidth="5" opacity=".45"/>

        {/* Broken stubble strokes, never a dotted beard */}
        <path d="M202 397q12 30 31 45m-12-28l9 13m8 3l9 12m12-1l8 12m13-2l8 10m14-1l9 9m15-2l10 8m16-4l11 7m16-7l9-8m16-4l9-10m15-7l8-11m15-12l7-12" fill="none" stroke="#59372f" strokeWidth="8" strokeLinecap="round" opacity=".78"/>
        <path d="M228 399q25 12 47 0m-42 8q17 10 32 8m165-14q-23 13-43 4m39 9q-18 12-33 10" fill="none" stroke="#55332d" strokeWidth="8" strokeLinecap="round"/>
        <path d="M272 418 Q333 418 406 406 Q388 447 327 449 Q292 444 272 418Z" fill="#542b2b" stroke="#432321" strokeWidth="6" strokeLinejoin="round"/>
        <path d="M281 421q52 16 105-3" fill="none" stroke="#f0d0b5" strokeWidth="6" strokeLinecap="round" opacity=".82"/>
        <path d="M287 448q43 16 81-2" fill="none" stroke="#a34f49" strokeWidth="6" opacity=".6"/>
        <path d="M260 390q-23-7-39-20m199 8q18-12 33-23" fill="none" stroke="#7d493e" strokeWidth="7" opacity=".5"/>
        <path d="M211 220q23-17 43-13m-30 37l13-5m196-21l24 7m-12 28l-14-4M220 338l11 4m212-2l-12 5" fill="none" stroke="#ffe0bd" strokeWidth="4" strokeLinecap="round" opacity=".42"/>
        {expression === 'deadpan' ? <path d="M278 424q54 9 104-5" fill="none" stroke="#542b2b" strokeWidth="11" strokeLinecap="round"/> : <path d={`M272 418 Q333 ${418 + mouthY} 406 406 Q388 ${447 + mouthY} 327 449 Q292 444 272 418Z`} fill="#542b2b" stroke="#432321" strokeWidth="6" strokeLinejoin="round"/>}
      </g>

      <g transform={`rotate(-4 ${340 + Math.sin(frame / 17) * 1.5} 190)`}>
        <path d="M153 221 Q148 91 268 54 Q374 19 462 89 Q510 127 523 212 Q470 192 400 188 Q275 181 166 243Z" fill="url(#v2-cap)" stroke="#080d11" strokeWidth="17" strokeLinejoin="round"/>
        <path d="M184 170 Q271 94 378 105 Q438 111 477 153" fill="none" stroke="#4b555b" strokeWidth="7" opacity=".56"/>
        <path d="M165 220 Q291 173 448 190 Q512 198 532 224 Q541 243 517 251 Q347 221 177 276Z" fill="#202a30" stroke="#080d11" strokeWidth="14" strokeLinejoin="round"/>
        <path d="M191 228q147-41 296-17" fill="none" stroke="#586168" strokeWidth="4" opacity=".55"/>
      </g>
      <g transform={`translate(${Math.sin(frame / 10) * 4} ${Math.sin(frame / 8) * 3})`}>
        <path d="M489 705 Q530 669 571 697 Q610 724 591 778 Q569 819 519 798 Q483 779 489 705Z" fill="url(#v2-skin)" stroke="#392522" strokeWidth="12"/>
        <path d="M530 704l15 25m8-32l15 28m-39 9l14 24m29-9l12 20m-55 4l12 16" fill="none" stroke="#f2d6aa" strokeWidth="9" strokeLinecap="round"/>
      </g>
      <rect x="0" y="0" width="680" height="940" fill="url(#v2-grain)" opacity=".42" pointerEvents="none"/>
    </svg>
  );
};
