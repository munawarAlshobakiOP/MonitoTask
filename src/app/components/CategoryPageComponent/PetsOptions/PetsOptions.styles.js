import styled from "styled-components";
export  const PetOptionsSection = styled.section`

width: 100%;
display:block;
height: 100.625rem;
position: absolute;
left: 0rem;
top: 115rem;
@media (max-width: 768px) {
top: 137.125rem;

}
`;
export  const PetsOptionContainer = styled.div`
 max-width: var(--container-max-width);
height: 61.625rem;
padding: 0rem 2.375rem;
@media (max-width: 768px) {
width: var(--mobile-container-max-width);}

`;
export  const PetsOptionsHeader = styled.div`
display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .125rem;
    justify-content: space-between;
    padding: 1.25rem 2.5rem;
@media (max-width: 768px) {
    padding-left: 0rem;
    padding-right: 0rem;
}
`;
export  const PetsOptionsHeaderRow = styled.div``;
export  const PetsOptionsTitle = styled.h1`

width: 5.6875rem;
height: 1.5rem;

font-weight: 500;
font-size: 1rem;
white-space: nowrap;

display: flex;
align-items: flex-end;

color: #000000;
@media (max-width: 768px) {

width: 5rem;
height: 1.25rem;

font-style: normal;
font-weight: 500;
font-size: .875rem;
line-height: 1.25rem;

padding-bottom: 35px;
}
`;
export  const PetP = styled.p`

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;

display: flex;
align-items: flex-end;
text-transform: capitalize;

color: var(--color-primary-main);

@media (max-width: 768px) {

width: 19.125rem;
height: 2rem;
font-size: 1.25rem;
line-height: 2rem;

}

`;
export const PetsOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 0.5rem;
     gap: 0.5rem;
    justify-items: center;
    @media (max-width: 768px) {
     grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding-right:4rem;
    }
`;
export  const PetCardLink = styled.a`
 text-decoration: none;
  display: block;
  transition: transform 0.2s ease-in-out;

width: 17.5rem;
height: 23.625rem;

background: var(--color-neutral-00);
box-shadow: 0rem .25rem 1.75rem -0.125rem var(--box-shadow-Pet-Card);
border-radius: .75rem;

  @media (max-width: 768px) {
  width: 11.5625rem;
height: 19.8125rem;
  }
`;
