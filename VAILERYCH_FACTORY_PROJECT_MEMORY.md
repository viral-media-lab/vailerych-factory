# VAIЛЕРЫЧ Factory — рабочая память проекта

## Цель
Автоматизированное производство русскоязычных образовательных Shorts/Reels с персонажем VAIЛЕРЫЧ. Темы объясняются простым языком через абсурдный дворовый юмор.

## Художественное направление
- Постоянный персонаж: ретро-пацан 2007 года, чёрная кепка, тёмный спортивный костюм с белыми лампасами, светлые потёртые кроссовки, семечки.
- Лицо характерное и асимметричное: тяжёлые брови, прищур, грубоватые черты, наглая ухмылка.
- Визуал: авторская выразительная 2D-иллюстрация с живой линией, неодинаковой толщиной контура, объёмной светотенью, фактурой кожи/ткани/окружения и тёплой палитрой.
- Не использовать стерильную плоскую векторную геометрию, одинаково толстые контуры, симметричную маскотную морду, бороду из точек и примитивные прямоугольные декорации.
- Персонаж должен взаимодействовать с объясняемым явлением, двигаться и менять выражения. Не просто говорящая голова.
- Все сцены генерируются программно. Не использовать сторонние видео/картинки и ImageGen.

## Техническая основа
- Remotion + React + TypeScript + SVG; 1080×1920, 30 fps.
- Озвучка создаётся через gTTS на русском языке. Это синтетический голос, не голос пользователя.
- GitHub Actions генерирует голос, проверяет TypeScript, рендерит MP4 и проверяет метаданные через ffprobe.
- Instagram autopublish — поздний этап после готовности контентного конвейера и настройки Meta API.

## Утверждённый пилот
Тема: «Почему ты не можешь пощекотать сам себя?» Целевой хронометраж 40–45 секунд.
Сценарий: провокационный хук; аналогия с корешем; объяснение предсказания мозгом сенсорных последствий собственных движений; мини-Валерыч-диспетчер в мозгу; неожиданная рука и финальный панч.

## Статус на 2026-11-18
- Последний проверенный HEAD перед созданием пилота: 66b63712bd5f16977fb87bf51cf165fbe4badb5b.
- Workflow run #5 (44372112299) успешно собрал старый 5-секундный preview.
- Добавлена композиция PilotFilm длительностью 44 секунды с шестью блоками: двор/хук, щекотка корешем, мозг/предсказание, штамп «СВОЙ», тревога от чужой руки, финальный панч.
- Edge TTS не вернул аудио. Генератор переведён на gTTS с ограничением времени ожидания.
- Полноценный MP4 ещё не получен и не проверен.
- Качество не утверждать до проверки реальных кадров, длительности, озвучки и синхронизации.

## Журнал
### 2026-11-18 — первый полноценный пилотный рендер
- Проверен GitHub HEAD и исходники перед изменениями.
- Добавлена композиция PilotFilm и 44-секундная структура.
- Добавлен генератор синтетической русской озвучки.
- Workflow запускает TTS, typecheck, render и ffprobe.
- Осталось проверить фактическую длину голоса, синхронизацию субтитров и итоговый MP4.


### 2026-11-18 — исправление проверки и артефактов
- Проверен актуальный HEAD и содержимое workflow, сценария, генератора голоса, композиции и персонажа.
- Подтверждено по логам run 44383861736: gTTS, TypeScript и рендер прошли; MP4 создан размером 19.2 MB; job упал только на `ffprobe: command not found`.
- Исправление: установка FFmpeg в GitHub Actions до генерации/проверки; проверка наличия аудио- и видеодорожек, 1080×1920 и длительности 40–46 секунд.
- Артефакт MP4 теперь загружается даже при сбое проверки, чтобы результат можно было диагностировать.
- Важно: предыдущий рендер не считается готовым или одобренным. После нового запуска требуется проверить артефакт и качество изображения/озвучки.
- Визуальная оценка по исходникам: композиция содержит шесть тематических блоков, но графика в основном SVG/векторная; качество уровня референса Claude пока не подтверждено.

### 2026-11-18 — visual redesign from user reference
- User clarified that the supplied image is the target art direction and requested video production through GitHub, not image generation.
- Re-read current GitHub source before editing. HEAD content included PilotFilm.tsx, Valerych.tsx and render.yml.
- Updated `src/characters/Valerych.tsx` to match the supplied reference more closely: messy dark hair (no cap), youthful expressive face, navy tracksuit with twin white stripes, cream shirt, warm anime-influenced 2D shading and paper/fabric texture.
- Commit: `b5a03f174f54c1635a2b368904219f0e012eecb6`.
- GitHub Actions render workflow is configured to run on push to main, so this commit should trigger a new render.
- Not yet verified: TypeScript result, workflow run status, MP4 artifact, actual visual/audio quality. Do not call the video finished until these are checked.

## 2026-11-19 — Pivot to automated science Shorts
- User cancelled the VAIЛЕРЫЧ character concept. New channel format: science and interesting facts, no recurring mascot.
- Art direction: hand-drawn 2D illustration, irregular dark outlines, muted earthy palette, textured backgrounds, single focal object, scene-based storytelling, comparisons and diagrams, occasional dark accent scenes.
- Typography: kinetic large bold text; pop-in/spring, word-by-word, highlighted numbers/keywords, hand-drawn frame reveals, impact shake. Motion should be purposeful and restrained.
- Narration: conversational, expressive, accessible, paced with pauses and curiosity escalation; not a lecture voice.
- Target pipeline: topic research -> script -> storyboard -> procedural scenes -> animated typography -> TTS -> sound design -> render -> QC -> Instagram Reels publishing.
- Free-first: no paid API calls or services without explicit approval. User wants minimal involvement and no local installations.
- Pilot topic: “Ты тираннозавр. И тебе не выжить”.
- Added src/scenes/SciencePilot.tsx; root composition switched to SciencePilot, 60s, 30fps, 1080x1920. Russian TTS script replaced. Workflow duration validation broadened to 50-70s.
- Quality remains unverified until MP4 and actual frames/audio are checked.
