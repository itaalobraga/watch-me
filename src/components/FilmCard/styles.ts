import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    max-height: 400px;
    width: 100%;

    position: relative;

    > img {
        max-width: 300px;
        width: 100%;
        max-height: 400px;

        border-radius: 0.3rem;

        filter: drop-shadow(0 0 0.3rem black);
        filter: opacity(0.6);
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 100%;

        padding: 1.2rem;

        > span {
            color: var(--white);

            font-weight: 600;
        }

        > div {
            display: flex;
            gap: 0.8rem;

            color: var(--yellow);

            > span {
                display: flex;
                align-items: center;
                gap: .4rem;
            }
        }
    }
`;