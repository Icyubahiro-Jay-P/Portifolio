import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLinkIcon, PauseIcon, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DjSet } from "@/data/dj";

// Deterministic pseudo-random waveform bars from the set id
// so each track renders a unique, stable waveform.
const generateWave = (seed: string, bars = 48) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const rnd = () => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 0xffffffff;
  };
  return Array.from({ length: bars }, () => 0.28 + rnd() * 0.72);
};

const format = (sec: number) => {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const DjPlayer = ({ set }: { set: DjSet }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  const wave = useMemo(() => generateWave(set.id), [set.id]);
  // Fallback demo duration for the outbound (no-inline-audio) case
  const demoDuration = set.durationSeconds ?? 180;
  const total = set.durationSeconds ?? demoDuration;
  const hasAudio = Boolean(set.audio);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const play = () => {
    const el = audioRef.current;
    if (el) {
      el.play();
      setPlaying(true);
    }
  };
  const pause = () => {
    const el = audioRef.current;
    if (el) {
      el.pause();
      setPlaying(false);
    }
  };

  const toggle = () => {
    if (!hasAudio) {
      // Outbound mode — open the set externally
      window.open(set.link, "_blank", "noopener,noreferrer");
      return;
    }
    if (playing) pause();
    else play();
  };

  // Outbound demo ticker: animates progress so the player feels alive
  useEffect(() => {
    if (hasAudio || !playing) return;
    const id = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % Math.max(total, 1);
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [hasAudio, playing, total]);

  useEffect(() => {
    if (!hasAudio) {
      setCurrent(0);
      setReady(true);
      return;
    }
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };
    const onLoaded = () => setReady(true);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnd);
    el.addEventListener("loadedmetadata", onLoaded);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [hasAudio, set.audio]);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasAudio || !ready) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const el = audioRef.current;
    if (el) el.currentTime = ratio * (el.duration || 1);
  };

  const pct = total ? (current / total) * 100 : 0;

  return (
    <div className="rounded-2xl border border-dj-line bg-dj-void-2/70 overflow-hidden backdrop-blur-sm">
      <audio ref={audioRef} src={set.audio} preload="metadata" />
      <div className="relative">
        {/* Track art header */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={set.image}
            alt={`${set.title} cover art`}
            className="object-cover w-full h-full grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dj-void-2 via-dj-void-2/40 to-transparent" />
          <div className="absolute inset-0 flex items-end p-5">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-dj-ember uppercase mb-2">
                {set.tag} · {set.genre}
              </div>
              <div className="font-dj text-2xl font-black uppercase text-dj-bone md:text-3xl">
                {set.title}
              </div>
            </div>
          </div>
        </div>

        {/* Control bar */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label={hasAudio ? (playing ? "Pause" : "Play") : "Open on platform"}
              className={cn(
                "flex items-center justify-center w-12 h-12 shrink-0 rounded-full transition-colors min-w-[44px] min-h-[44px] active:scale-95",
                playing && hasAudio
                  ? "bg-dj-ember text-dj-void dj-ember-box"
                  : "bg-dj-bone text-dj-void hover:bg-white",
              )}
            >
              {hasAudio ? (
                playing ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5 ml-0.5" />
                )
              ) : (
                <ExternalLinkIcon className="w-5 h-5" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between font-mono text-[11px] text-dj-stone tabular-nums mb-2">
                <span>{format(current)}</span>
                <span>{set.duration}</span>
              </div>
              {/* Waveform (scrub target) */}
              <div
                role="slider"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={Math.round(current)}
                tabIndex={hasAudio ? 0 : -1}
                onClick={seek}
                onKeyDown={(e) => {
                  if (!hasAudio) return;
                  const el = audioRef.current;
                  if (e.key === "ArrowRight" && el) el.currentTime += 5;
                  if (e.key === "ArrowLeft" && el) el.currentTime -= 5;
                }}
                className="relative h-10 flex items-center cursor-pointer group"
              >
                <div className="absolute inset-0 flex items-center gap-[2px]">
                  {wave.map((h, i) => (
                    <div key={i} className="flex-1 h-full">
                      <div
                        className="w-full rounded-full bg-dj-stone/40"
                        style={{ height: `${h * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                {/* played overlay */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${pct}%` }}
                >
                  <div className="flex items-center gap-[2px] h-full">
                    {wave.map((h, i) => (
                      <div key={i} className="flex-1 h-full">
                        <div
                          className="w-full rounded-full bg-dj-ember"
                          style={{ height: `${h * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* scrub handle */}
                <div
                  className="absolute w-1 h-full bg-white/0 group-hover:bg-white/20"
                  style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
                />
              </div>
            </div>
          </div>

          {/* Meta row */}
          <div className="flex items-center justify-between mt-3 font-mono text-[10px] tracking-[0.2em] text-dj-stone uppercase">
            <span>{set.plays} plays</span>
            <span>{set.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DjPlayer;
