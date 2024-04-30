"use client";

const getLocalStorageItem = <T>(key: string, initial?: T) => {
  try {
    return JSON.parse(localStorage.getItem(key)!) ?? initial;
  } catch (error) {
    console.error(error);
    return initial;
  }
};

const logVal = (value: number) => Math.pow(value, 3);
const invertLogVal = (value: number) => Math.pow(value, 1 / 3);

export class AudioEngine {
  _loadingError: any | null = null;
  _playLock = false;
  _initialized = false;
  _isFirstPlay = false;

  audio!: HTMLAudioElement;

  static currentAudioElement: HTMLAudioElement | null = null;

  constructor() {
    this.audio = new Audio();
    this._loadingError = null;
    this._playLock = false;
    this._initialized = false;
    this._isFirstPlay = true;

    this.audio.volume = logVal(getLocalStorageItem("volume", 1));
  }

  init() {
    // TODO: make sure the audio element is initialized and can be played
    // on mobile devices etc.
    if (this._initialized) {
      return;
    }
    this.audio.load();
    this._initialized = true;
  }

  async playSilent() {
    if (!this._isFirstPlay) {
      return;
    }
    const play = this.audio.play();
    if (play) {
      play.catch(() => {
        /* swallow the DOMException */
      });
    }
    this._isFirstPlay = false;
  }

  play() {
    const play = this.audio.play();
    if (AudioEngine.currentAudioElement !== this.audio) {
      AudioEngine.currentAudioElement?.pause();
      AudioEngine.currentAudioElement = this.audio;
    }
    if (
      play &&
      typeof Promise !== "undefined" &&
      (play instanceof Promise ||
        typeof (play as Promise<void>).then === "function")
    ) {
      // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
      this._playLock = true;
      // Releases the lock and executes queued actions.
      play
        .then(() => {
          this._playLock = false;
        })
        .catch(() => {
          this._playLock = false;
        });
    }
  }

  pause() {
    this.audio.pause();
  }

  load(url: string, track: any) {
    if (!this._playLock) {
      this.audio.src = url;
      this.audio.load();
    }
  }

  seekTo(timestamp: number) {
    if (isNaN(timestamp)) {
      return;
    }
    this.audio.currentTime = timestamp;

    if (AudioEngine.currentAudioElement !== this.audio) {
      AudioEngine.currentAudioElement?.pause();
      AudioEngine.currentAudioElement = this.audio;
    }
    this.audio.play();
  }

  get volume() {
    return invertLogVal(this.audio.volume);
  }

  setVolume(volume: number) {
    this.audio.volume = logVal(volume);
  }

  setMute(muted: boolean) {
    this.audio.muted = muted;
  }

  get muted() {
    return this.audio.muted;
  }
}
