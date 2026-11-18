import asyncio
import os
from pathlib import Path

TEXT = (
    "Брат, ты можешь себя за жопу укусить? Нет? "
    "А мозг тебе ещё и щекотать себя запрещает, сука. "
    "Смотри. Когда кореш тебя щекочет, ты ржёшь как псих. "
    "А когда сам себя щекочешь, вообще ничего. "
    "Потому что мозг заранее знает, что ты сейчас сделаешь. "
    "Он предсказывает ощущения от твоего движения и заранее приглушает сигнал. "
    "Представь, внутри сидит мелкий диспетчер Валерыч. "
    "Видит: рука своя. Ставит штамп «СВОЙ» и убавляет чувствительность. "
    "Всё, щекотка отменяется. "
    "Но если кто-то резко подкинет руку, диспетчер охуевает. "
    "Сирена, паника, семечки по всей башке. "
    "Так что если тебя никто не щекочет, не переживай. "
    "Просто даже твой мозг не хочет с тобой связываться."
)

async def main():
    Path("public").mkdir(parents=True, exist_ok=True)
    output = Path("public/voice.mp3")

    try:
        import edge_tts
        for voice in ("ru-RU-DmitryNeural", "ru-RU-SvetlanaNeural"):
            try:
                await edge_tts.Communicate(TEXT, voice=voice).save(str(output))
                if output.exists() and output.stat().st_size > 10000:
                    print(f"VOICE_OK edge-tts voice={voice} bytes={output.stat().st_size}")
                    return
                output.unlink(missing_ok=True)
            except Exception as exc:
                print(f"EDGE_TTS_FAILED voice={voice}: {type(exc).__name__}: {exc}")
                output.unlink(missing_ok=True)
    except Exception as exc:
        print(f"EDGE_TTS_UNAVAILABLE: {type(exc).__name__}: {exc}")

    try:
        from gtts import gTTS
        gTTS(text=TEXT, lang="ru", tld="com", slow=False).save(str(output))
        if output.exists() and output.stat().st_size > 10000:
            print(f"VOICE_OK gTTS bytes={output.stat().st_size}")
            return
    except Exception as exc:
        print(f"GTTS_FAILED: {type(exc).__name__}: {exc}")

    raise RuntimeError("No TTS provider returned a usable Russian voice track.")

if __name__ == "__main__":
    asyncio.run(main())
