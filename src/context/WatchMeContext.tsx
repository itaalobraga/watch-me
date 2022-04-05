import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type WatchMeContextProviderProps = {
    children: ReactNode;
};

type WatchMeContextProps = {
    movies: MoviesProps[];
    genres: GenresProps[];
    selectedGenre: GenresProps;
    handleSelectGenre: (id: number) => void;
};

type MoviesProps = {
    Title: string;
    Runtime: string;
    Poster: string;
    Ratings: Array<{
        Sourced: string;
        Value: string;
    }>
}

type GenresProps = {
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
};

export const WatchMeContext = createContext<WatchMeContextProps>({} as WatchMeContextProps);

export function WatchMeContextProvider({ children }: WatchMeContextProviderProps) {
    const [selectedGenreId, setSelectedGenreId] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState({} as GenresProps);
    const [movies, setMovies] = useState<MoviesProps[]>([]);
    const [genres, setGenres] = useState<GenresProps[]>([])

    console.log("movies => ", movies)

    useEffect(() => {
        api.get(`/movies/?Genre_id=${selectedGenreId}`)
            .then((response) => setMovies(response.data))
            .catch((error) => console.log('error'));
    }, [selectedGenreId]);

    useEffect(() => {
        api.get(`/genres/${selectedGenreId}`).then((response) => setSelectedGenre(response.data));
    }, [selectedGenreId])

    useEffect(() => {
        api.get(`/genres`)
            .then((response) => setGenres(response.data))
            .catch((error) => console.log('error'));
    }, [])

    function handleSelectGenre(id: number) {
        setSelectedGenreId(id)
    }

    return <WatchMeContext.Provider value={{ movies, genres, selectedGenre, handleSelectGenre}}>{children}</WatchMeContext.Provider>;
}
