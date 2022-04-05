import { useContext } from 'react';
import { WatchMeContext } from '../../context/WatchMeContext';
import { FilmCard } from '../FilmCard';
import { Container } from './styles';

type ContentProps = {
    id: number;
};

export const Content = (props: ContentProps) => {
    const { movies, selectedGenre } = useContext(WatchMeContext);

    return (
        <Container>
            <div>
                <header>
                    <h1>
                        Categoria: <span>{selectedGenre.title}</span>
                    </h1>
                </header>
                <section>
                    {movies.map((movie) => (
                        <FilmCard
                            key={movie.Title}
                            Title={movie.Title}
                            Runtime={movie.Runtime}
                            Poster={movie.Poster}
                            Ratings={movie.Ratings}
                        />
                    ))}
                </section>
            </div>
        </Container>
    );
};
