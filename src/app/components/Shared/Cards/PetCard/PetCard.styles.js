import styled from "styled-components";
export const PetCardContainer = styled.div`
    
display: flex;
flex-direction: column;
align-items: flex-start;
padding: .5rem .5rem 0rem;
gap: .5rem;

width: 17.5rem;
height: 23.625rem;

background: var(--color-neutral-00);
box-shadow: 0rem .25rem 1.75rem -0.125rem var(--box-shadow-Pet-Card);
border-radius: .75rem;

@media (max-width: 768px) {
width: 11.5625rem;
height: 19.8125rem;
padding: .5rem;



}
    `;
    export const PetCardImageContainer = styled.div`

width: 16.5rem;
height: 16.5rem;

background: var(--background);
border-radius: .625rem;

@media (max-width: 768px) {

width: 10.5625rem;
height: 10.5625rem;

border-radius: .625rem;

}
`;
    export const PetCardImage = styled.img`
width: 16.5rem;
height: 264px;
left: 0px;
top: 0px;
cover: contain;
@media (max-width: 768px) {

width: 10.5625rem;
height: 10.5625rem;



}
    
    `;
export const PetCardContent = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: .5rem .5rem 1.25rem;
gap: 1rem;

width: 16.5rem;
height: 6.125rem;

`;
export const PetCardC= styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
padding-bottom: 5rem;
margin-top: auto;
gap: .25rem;

width: 15.5rem;
height: 4.375rem;
@media (max-width: 768px) {
padding: .25rem;
gap: .5rem;

width: 10.5625rem;
height: 7.75rem;



}

`;
export const PetCardTitle = styled.h1`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .25rem;
font-size:1rem;
font-weight: 700;
width: 15.5rem;
color: var(--color-neutral-100);

height: 4.375rem;
@media (max-width: 768px) {

width: 10.0625rem;
height: 2.5rem;

font-weight: 700;
font-size: .875rem;
line-height: 1.25rem;
display: flex;

color: var(--color-neutral-100);

}
`;
export const PetCardDescription = styled.div`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
gap: .25rem;

width: 15.5rem;
height: 1.125rem;
@media (max-width: 768px) {


display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .25rem;

width: 10.0625rem;
height: 2.5rem;

}


`;
export const PetInfo = styled.p`
white-space: nowrap;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
gap: .375rem;
font-size:.75rem;
width: 4.25rem;
height: 1.125rem;
color: var(--color-neutral-60);
@media (max-width: 768px) {
font-size:.75rem;}
`;
export const Separator = styled.p`
width: 1.125rem;
height: 1.125rem;

font-size:2rem;

color: var(--color-neutral-60);
`;
export const PetPrice = styled.p`

width: 15.5rem;
height: 1.25rem;

font-weight: 700;
font-size: .875rem;
line-height: 1.25rem;
display: flex;
align-items: flex-end;

color: var(--color-neutral-100);
@media (max-width: 768px) {

width: 6.9375rem;
height: 1.5rem;

font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;

color: var(--color-neutral-100);

}
`;