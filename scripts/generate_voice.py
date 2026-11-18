from pathlib import Path
from gtts import gTTS

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

def main():
    Path("public").mkdir(parents=True, exist_ok=True)
    output = Path("public/voice.mp3")
    gTTS(text=TEXT, lang="ru", tld="com", slow=False, timeout=15).save(str(output))
    if not output.exists() or output.stat().st_size < 10000:
        raise RuntimeError("gTTS returned an empty or invalid audio file.")
    print(f"VOICE_OK provider=gTTS bytes={output.stat().st_size}")

if __name__ == "__main__":
    main()
