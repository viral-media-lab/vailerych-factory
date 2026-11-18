import React from 'react';
import {Composition} from 'remotion';
import {PilotFilm} from './scenes/PilotFilm';

export const RemotionRoot: React.FC = () => (
  <Composition id="Pilot01" component={PilotFilm} durationInFrames={1320} fps={30} width={1080} height={1920}/>
);
