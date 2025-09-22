import styled from "styled-components";

export const PetSellerSection = styled.section`

position: absolute;
height: 15.6875rem;
top: 198.8125rem;
display: block;
padding-left: 5.8rem;

@media (max-width: 768px) {
display: none;}

`;

export const PetSellerContainer = styled.div`
width: 100%;
max-width: 100rem;
height: 15.6875rem;

`;

export const PetSellerHeader = styled.div`

display: flex;
flex-direction: row;
align-items: center;
width: 100%;
padding: 0rem;
gap: 1rem;
justify-content: space-between;
height: 2.75rem;
gap:60rem;

`;

export const PetSellerTitle = styled.h2`
white-space: nowrap;

width: 8.8125rem;
height: 1.9375rem;

font-weight: 500;
font-size: 1rem;
line-height: 1.9375rem;
display: flex;
align-items: flex-end;

color: #000000;
gap: .625rem;

`;

export const HeaderSpan = styled.span`

width: 7.3125rem;
height: 2.25rem;

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;
display: flex;
align-items: flex-end;
text-transform: capitalize;
color: var(--color-primary-main);

`;

export const PetSellerButton = styled.div`
  width: 201px;
  height: 44px;

  `;

export const PetSellerBrands = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 73.75rem;
height: 7rem;
gap: 3.9rem;
padding-left: 6rem;
`;

export const PetSellerBrandContainer = styled.div`


justify-content: center;
align-items: center;
gap: .625rem;


`;

export const PetSellerBrandImage = styled.img`

align-items: center;
`;
