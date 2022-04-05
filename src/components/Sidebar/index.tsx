import { useContext } from 'react';
import { WatchMeContext } from '../../context/WatchMeContext';
import { Button } from '../Button';
import { Container } from './styles';

type SideBarProps = {};

export const SideBar = (props: SideBarProps) => {
    const { genres, selectedGenre } = useContext(WatchMeContext)

    return (
        <Container>
            <h1>
                Watch<span>Me</span>
            </h1>
            {genres.map((genre) => (
                <Button
                    key={genre.id}
                    name={genre.name}
                    title={genre.title}
                    id={genre.id}
                    selected={genre.id === selectedGenre.id}
                />
            ))}
        </Container>
    );
};
