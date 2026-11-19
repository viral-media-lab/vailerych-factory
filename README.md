# Science Shorts Factory
Automated Russian-language vertical science videos: curious facts explained with approachable narration, hand-drawn animated scenes, kinetic typography, visual comparisons, and punchy sound design.
## Current pilot
**Ты тираннозавр. И тебе не выжить.**
Remotion composition: 1080x1920, 30fps, 60 seconds target. Scene generation is procedural; voice is generated in GitHub Actions.
## Pipeline
Topic and script -> scene design -> animated illustration + typography -> Russian TTS -> render -> QC -> Reels publishing (future).
## Run
- GitHub Actions renders on push to main or manual dispatch.
- Artifact is uploaded for review.
- Don't call a render complete until duration, streams, and actual visual/audio quality are checked.
Free-first project. No paid API services without explicit approval.
