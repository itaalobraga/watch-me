import { Container } from './styles';
import { Star, Clock } from 'react-feather';

type FilmCardProps = {
    Title: string;
    Runtime: string;
    Poster: string;
    Ratings: Array<{
        Sourced: string;
        Value: string;
    }>;
};

export const FilmCard = (props: FilmCardProps) => {

    return (
        <Container>
            <img src={props.Poster} alt={props.Title} />
            <div>
                <span>{props.Title}</span>
                <div>
                    <span>
                        <Star />
                        {props.Ratings[0].Value}
                    </span>
                    <span>
                        <Clock />
                        {props.Runtime}
                    </span>
                </div>
            </div>
        </Container>
    );
};
