import styled from 'styled-components';

type ContainerProps = {
    selected: boolean;
};

export const Container = styled.button<ContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem 2rem;
    margin-bottom: 1rem;

    width: 100%;

    border: 0;
    border-radius: 0.3rem;

    background-color: ${(props) => (props.selected ? 'var(--background-button2)' : 'var(--background-button)')};

    transition: 0.4s;

    &:hover {
        background-color: var(--background-button2);
    }

    &:last-child {
        margin-bottom: 0;
    }

    & > span {
        font-size: 1.2rem;

        color: ${(props) => (props.selected ? 'var(--yellow)' : 'var(--white)')};
    }
`;
