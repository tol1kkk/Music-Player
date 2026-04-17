import { createContext, useState } from "react";
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
    const playTrack = () => {};
    // ПАУЗА
    const pauseTrack = () => {};
    // НАСТУПНА
    const nextTrack = () => {};
    // ПОПЕРЕДНЯ
    const prevTrack = () => {};
    // ЗВУК
    const setVolume = () => {};
    // УЛЮБЛЕНЕ
    const addToFavorites = () => {};
    // НЕУЛЮЬЛЕНЕ
    const removeFromFavorites = () => {};

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