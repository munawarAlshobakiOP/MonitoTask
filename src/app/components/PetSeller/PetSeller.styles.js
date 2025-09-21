import styled from "styled-components";

export const PetSellerSection = styled.section`

position: absolute;
width: 100%;
height: 15.6875rem;
left: 0rem;
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

export const PetSellerHeader = styled.header`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0rem;
gap: .9375rem;

height: 2.75rem;

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
  margin-right: 11.4rem;
`;

export const PetSellerBrands = styled.div`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
justify-content: center;
width: 73.75rem;
height: 7rem;
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-gap: 3.9rem;
padding-left:11.2rem;
`;

export const PetSellerBrandContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0rem 1rem;
gap: .625rem;
width: 9.4644rem;
height: 7rem;

`;

export const PetSellerBrandImage = styled.img`

align-items: center;
`;
