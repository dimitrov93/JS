"use client";
import {
  WaveformInteractive,
  Typography,
  themeClassNames,
  Link,
} from "@epidemicsound/design-system";

import { TrackRow } from "@epidemicsound/design-system/v2";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AudioEngineContext } from "../../_contexts/audio-engine";

import playerStyles from "./player.module.css";
import { WHITE } from "@/app/_constants/constants";

const LinkWrapperComponent = ({ children, ...rest }: { children: string }) => {
  return (
    <Link {...rest} color={WHITE}>
      {children}
    </Link>
  );
};

const WrapperComponent = ({ children, ...rest }: { children: string }) => {
  return (
    <Typography.Text
      {...rest}
      color={WHITE}
      className={playerStyles.wrapperComponentText}
    >
      {children}
    </Typography.Text>
  );
};

type ThemeClassNames = keyof typeof themeClassNames;

interface PlayerProps extends PropsWithChildren {
  track: any;
  theme?: ThemeClassNames;
  waveform?: any;
  className?: string;
}

const Player = ({ track, className, waveform }: PlayerProps) => {
  const audioEngine = useContext(AudioEngineContext);

  const [isActive, setIsActive] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const containerClassName = useMemo(
    () => [className].filter(Boolean).join(" "),
    [className]
  );
  const pauseListener = useCallback(() => isPlaying && setIsPlaying(false), [isPlaying]);
  const playListener = useCallback(() => !isPlaying && setIsPlaying(true), [isPlaying]);

  // eslint-disable-next-line react-hooks/exhaustive-deps,
  useEffect(() => () => audioEngine.pause(), []);

  useEffect(() => {
    audioEngine.load(track.stems.full.lqMp3Url, track);
  }, [audioEngine, track]);

  useEffect(() => {
    audioEngine.audio?.addEventListener('pause', pauseListener);
    audioEngine.audio?.addEventListener('play', playListener);

    return () => {
      audioEngine.audio?.removeEventListener('pause', pauseListener);
      audioEngine.audio?.removeEventListener('play', playListener);
    }
  }, [audioEngine, isPlaying, pauseListener, playListener, track]);

  if (!track) {
    return <div>No track ...</div>;
  }

  const handlePlay = (newIsPlaying: boolean) => {
    const action = newIsPlaying ? "play" : "pause";
    if (!hasPlayed) {
      setHasPlayed(true);
    }
    setIsPlaying(newIsPlaying);
    audioEngine[action]();
  };

  const isActiveContainer = isPlaying || isActive;
  const {
    creatives: { mainArtists, featuredArtists },
  } = track;

  const coverUrl = `${track.coverArt.baseUrl}${track.coverArt.sizes.M}`;

  return (
    <div className={containerClassName} style={{ position: "relative" }}>
      <TrackRow.Container
        isSelected={isSelected}
        isActiveContainer={isActiveContainer}
        onClick={() => {
          // console.log('func to set the clicked rows as selected');
        }}
      >
        <TrackRow.Play
          onClick={() => handlePlay(!isPlaying)}
          labels={{ play: "Play", pause: "Pause" }} // TODO translations
          coverArtURL={coverUrl}
          isVisible={isPlaying}
          isActive={isPlaying}
        />

        <TrackRow.MetaWrapper
          TitleComponent={
            <TrackRow.Title
              title={track.title}
              titleWrapperComponent={LinkWrapperComponent}
            />
          }
          CreativesComponent={
            <TrackRow.Creatives
              creativesWrapperComponent={WrapperComponent}
              mainArtists={mainArtists}
              featuredArtists={featuredArtists}
              featuringString={"feat"}
            />
          }
          isSfx={false}
          hasPlayed={hasPlayed}
        />

        <TrackRow.Vocals lyricalMatch={{ kind: "no-match" as const }} />
        <WaveformInteractive
          duration={track.length}
          waveform={{ data: waveform }}
          audio={audioEngine.audio}
          timeCursorColor="red"
          isPlaying={true} //to draw progress if playing (optional)
          onSeekTo={(_: any, timestamp: number) =>
            audioEngine.seekTo(timestamp)
          }
        />
        <TrackRow.DurationAndBPM
          duration={track.length}
          bpm={track.bpm}
          bpmString={"BPM"}
        />
        <TrackRow.Tags
          genres={track.genres}
          moods={track.moods}
          genresWrapperComponent={WrapperComponent}
          translatedGenre={(tag: any) => tag} // TODO translation
          translatedSfxGenre={(tag: any) => tag} // TODO translation
          translatedMood={(tag: any) => tag} // TODO translation
          translatedSfxTags={() => track.metadataTags} // TODO translation
          moodsWrapperComponent={WrapperComponent}
          isSfx={false} //sfx tracks should not display genres and moods
        />
      </TrackRow.Container>
    </div>
  );
};

export default Player;
