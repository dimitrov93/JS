"use client";

import { PropsWithChildren, createContext, useMemo } from "react";
import { AudioEngine } from "../_components/player/audio-engine";

export const AudioEngineContext = createContext<AudioEngine>({} as any);
const dummyEngineForServer = {
  getAudioForTrackId() {
    return null;
  },
} as any;

export function AudioEngineProvider(props: PropsWithChildren) {
  const audioEngine = useMemo(() => {
    const isBrowserContext = typeof window !== "undefined";
    return isBrowserContext ? new AudioEngine() : dummyEngineForServer;
  }, []);

  return (
    <AudioEngineContext.Provider value={audioEngine}>
      {props.children}
    </AudioEngineContext.Provider>
  );
}
