import React from 'react';
import {Composition} from 'remotion';
import {SciencePilot} from './scenes/SciencePilot';
export const RemotionRoot: React.FC = () => (
  <Composition id="SciencePilot" component={SciencePilot} durationInFrames={1800} fps={30} width={1080} height={1920}/>
);
