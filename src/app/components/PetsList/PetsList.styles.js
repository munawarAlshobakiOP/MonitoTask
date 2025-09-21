import styled from "styled-components";
import Link from 'next/link';
export const PetListSection=styled.section`
width: 100%;
display:block;
height: 61.625rem;
position: absolute;
left: 0rem;
top: 48rem;
padding-left:4.625rem;
@media (max-width: 768px) {
top: 53.125rem;
padding-left:1rem;

}
`;
export const PetsListContainer = styled.div`
 max-width: var(--container-max-width);
height: 61.625rem;
@media (max-width: 768px) {
width: var(--mobile-container-max-width);}

`;

export const PetsListHeader = styled.header`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: .125rem;

`;

export const PetsListHeaderRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:42rem;

@media (max-width: 768px) {

  justify-content: flex-start;
}
`;

export const PetsListTitle = styled.h1`

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

export const PetP = styled.p`


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

export const PetsListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
    justify-items: center;
    @media (max-width: 768px) {
     grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding-right:4rem;
    }
`;

export const PetCardWrapper = styled.div`
  
`;

export const PetCardLink = styled(Link)`
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

export const ViewMoreButtonDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ViewMoreButtonMobile = styled.div`
  display: none;
  
  @media (max-width: 768px) {
       display: flex;
    justify-content: center;
    margin-top: 2rem;
    padding-right: 2.5rem;
    width:26.33rem;
    margin-left: 0;
  }
`;
