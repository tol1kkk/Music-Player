import { createContext, useState } from "react";
import tracks from "../data/track";

export const PlayerContext = createContext();
export function PlayerProvider({ children }){
    // ПІСНЯ ЯКА ГРАЄ НА ДАНИЙ МОМЕНТ
    const [currentTrack, setCurrentTrack] = useState(null);
    // ПІСНЯ ГРАЄ АБО НІ 
    const [isPlaying, setIsPlaying] = useState(false);
    // ЗВУК МУЗИКИ
    const [volume, setVolumeState] = useState(1);
    // ДОБАВЛЯТИ МУЗИКИ В УЛЮБЛЕНЕ
    const [favorites, setFavorites] = useState([]);

    // ГРАТИ
    const playTrack = (track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };
    // ПАУЗА
    const pauseTrack = () => {
        setIsPlaying(false)
    };
    // НАСТУПНА
    const nextTrack = () => {
        if(!currentTrack) return;

        const idx = tracks.findIndex((t) => t.id === currentTrack.id);
        const next = tracks[(idx + 1) % tracks.length];

        setCurrentTrack(next);
        setIsPlaying(true);
    };
    // ПОПЕРЕДНЯ
    const prevTrack = () => {
        if(!currentTrack) return;

        const idx = tracks.findIndex((t) => t.id === currentTrack.id);
        const prev = tracks[(idx - 1 + tracks.length) % tracks.length];

        setCurrentTrack(prev);
        setIsPlaying(true);
    };
    // ЗВУК
    const setVolume = (v) => {
        setVolumeState(v);
    };
    // УЛЮБЛЕНЕ
    const addToFavorites = (track) => {
        setFavorites((prev) => [...prev, track]);
    };
    // НЕУЛЮЬЛЕНЕ
    const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <PlayerContext.Provider value={{ 
            currentTrack,
            isPlaying,
            volume,
            favorites,
            playTrack,
            pauseTrack,
            nextTrack,
            prevTrack,
            setVolume,
            addToFavorites,
            removeFromFavorites,
        }}
        >
            {children}
        </PlayerContext.Provider>
    )
};