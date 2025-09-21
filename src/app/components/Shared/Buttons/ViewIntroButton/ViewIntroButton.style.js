export const ViewIntroButton = styled.div`

box-sizing: border-box;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .875rem 1.75rem .625rem;
gap: .5rem;

width: 10.0625rem;
height: 3rem;

border: .0938rem solid var(--color-primary-main);
border-radius: 3.5625rem;

`;
export const ArrowIntroButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 1.5rem;
height: 1.5rem;
border: .0938rem solid var(--color-primary-main);
border-radius: 50%;

svg {
  width: 1rem;
  height: 1rem;
}

svg path {
  fill: var(--color-primary-main);
  stroke: var(--color-primary-main);
}


`;
export const ViewIntroButtonText = styled.p`

color: var(--color-primary-main);


width: 4.5625rem;
height: 1.5rem;

font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;

white-space: nowrap;

`;

import styled from "styled-components";