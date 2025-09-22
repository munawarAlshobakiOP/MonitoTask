import styled from "styled-components";
export const AdoptionIntroSection= styled.section`


position: absolute;
max-width: var(--container-max-width);  
height: 23.625rem;
left: 5.12rem;
right: 5.12rem;
overflow: hidden;
top: 214.5rem;
background: var(--color-secondary-darker);
border-radius: 1.25rem;

@media (max-width: var(--breakpoint-md)) {
display: none;}
`;
export const AdoptionIntroContainer= styled.div`
width: 89.8rem;
border-radius: 1.25rem;
paddi
`;
export const AdoptionIntroTextContainer= styled.div`
white-space: nowrap;
display: flex;
flex-direction: column;
z-index: 4;
position: absolute;
top:1rem;
`;
export const AdoptionIntroTitle= styled.h1`

position: absolute;
width: 14.0625rem;
height: 4.25rem;
left: 5.3125rem;
top: 2rem;
font-weight: 800;
font-size: 3.25rem;
line-height: 4.25rem;
text-transform: capitalize;
color: var(--color-primary-main);
`;
export const PetIcon= styled.span`
fill: var(--color-primary-main);
width: 1rem;
height: 1rem;
padding-left:1.15rem;
& svg {
  width: 2.625rem;
  height: 2.375rem;
}

`;
export const AdoptionIntroSubtitle= styled.h2`/* We need help. so do they. */

position: absolute;
width: 28rem;
height: 3.375rem;
left: 5.3125rem;
top: 8.375rem;
font-weight: 700;
font-size: 2.25rem;
line-height: 3.375rem;
text-transform: capitalize;
color: var(--color-primary-main);

`;
export const AdoptionIntroDescription= styled.p`

position: absolute;
width: 24.625rem;
height: 2.25rem;
left: 5.3rem;
top: 12.25rem;
font-weight: 500;
font-size: .75rem;
line-height: 1.125rem;
color: var(--color-neutral-80);

`;
export const AdoptionIntroButton= styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
position:absolute;
left: 5.28rem;
top: 16.25rem;
`;
export const AdoptionIntroImageContainer= styled.div``;
export const AdoptionIntroImage= styled.img`

position: absolute;
width: 33.6581rem;
height: 22.4244rem;
left: 51rem;
top: -0.431rem;
z-index:4;
transform: rotate(60deg) scaleX(-1);

`;
export const Triangular1= styled.div`

position: absolute;
width: 48.8931rem;
height: 39.6875rem;
left: -3.2rem;
top: -9.2rem;
z-index: 1;
background: var(--color-secondary-light);
border-radius: 6.1875rem;
transform: rotate(148deg) scaleX(-1);
`;
export const Triangular2= styled.div`

position: absolute;
width: 49.2212rem;
height: 49.2212rem;
left: 53rem;
top: 10rem;
z-index: 2;
background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, var(--color-secondary-main) 104.24%);
opacity: 0.3;
border-radius: 6.1875rem;
transform: rotate(150deg) scaleX(-1);

`;
