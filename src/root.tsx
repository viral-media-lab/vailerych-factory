import React from 'react';
import {Composition} from 'remotion';
import {PilotScene} from './scenes/PilotScene';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Pilot01"
    component={PilotScene}
    durationInFrames={150}
    fps={30}
    width={1080}
    height={1920}
  />
);