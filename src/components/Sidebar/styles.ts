import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 400px;
    width: 100%;
    height: 100vh;

    padding: 1.2rem 1.8rem;

    background-color: var(--background2);

    box-shadow: 0 0 .3rem black;

    & > h1 {
        color: var(--yellow);

        font-size: 3rem;

        margin-bottom: 6rem;

        > span {
            color: var(--white);
        }
    }
`;