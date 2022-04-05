import { useContext } from "react";
import { WatchMeContext } from "../../context/WatchMeContext";
import { Icon } from "../Icon";
import { Container } from "./styles";

type ButtonProps = {
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    selected: boolean;
};

export const Button = (props: ButtonProps) => {
  const { handleSelectGenre } = useContext(WatchMeContext)

  return (
      <Container onClick={() => handleSelectGenre(props.id)} selected={props.selected}>
          <Icon name={props.name} color={props.selected ? 'var(--yellow)' : 'var(--white)'} />
          <span>{props.title}</span>
      </Container>
  );
}