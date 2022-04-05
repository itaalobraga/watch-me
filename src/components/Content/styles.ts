import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    max-height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;

        max-width: 1040px;
        height: 100%;

        margin-top: -1rem;

        > header {
            > h1 {
                margin-top: 3.2rem;

                color: var(--gray);

                font-size: 2.4rem;
                > span {
                    color: var(--white);
                }
            }
        }

        > section {
            display: flex;
            flex-wrap: wrap;
            gap: 3.4rem;

            max-height: 90vh;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: .8rem;
                box-shadow: 0 0 .1rem var(--background-button);
            }

            &::-webkit-scrollbar-track {
                background: var(--background-button2);
                border-radius: 0.3rem;
            }

            &::-webkit-scrollbar-thumb {
                background: var(--background-button);
                border-radius: 0.3rem;
            }
        }
    }
`;
