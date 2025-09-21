import styled from "styled-components";

export const ViewMoreButtonContainer = styled.button`

box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .75rem 1.75rem;
gap: .5rem;
border: .0938rem solid var(--color-primary-main);
border-radius: 3.5625rem;
background: transparent;
width: 100%;

@media (max-width: 768px) {
align-items: center;
padding: .875rem 1.75rem .625rem;
height: 3rem;
}
`;

export const ViewMoreButtonText = styled.span`

font-weight: 500;
font-size: .875rem;
line-height: 1.25rem;
display: flex;
align-items: flex-end;
white-space: nowrap;

color: var(--color-primary-main);

@media (max-width: 768px) {
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
}

`;
export const Icon= styled.div`

@media (max-width: 768px) {
width: 24px;
height: 24px;
padding-top:.3125rem;

}
`;