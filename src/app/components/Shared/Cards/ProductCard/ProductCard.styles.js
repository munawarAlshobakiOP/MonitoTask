import styled from "styled-components";
export const ProductCard = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: .5rem .5rem 0rem;
gap: .5rem;

width: 17.5rem;
height: 27.875rem;

background: var(--color-neutral-00);
box-shadow: 0rem .25rem 1.75rem -0.125rem var(--box-shadow-Pet-Card);
border-radius: .75rem;

&:hover {
  transform: scale(1.05);
}

`;
export const ProductImageContainer = styled.div`

width: 16.5rem;
height: 16.5rem;

background: var(--background);
border-radius: 10px;


`;
export const ProductImage = styled.img`

width: 16.5rem;
height: 16.5rem;

`
export const ProductInfo = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .25rem;
width: 15.5rem;
height: 4.375rem;
padding-top: 1.1875rem;
`;
export const ProductName = styled.h1`

width: 15.5rem;
height: 1.5rem;
font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;
color: var(--color-neutral-100);
order: 0;
align-self: stretch;
flex-grow: 0;

`;
export const DetailsRow = styled.div`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
gap: 1.5rem;
white-space: nowrap;
width: 15.5rem;
height: 1.125rem;



`;
export const DetailsHeader = styled.span`

width: 1.625rem;
height: 1.125rem;

font-weight: 500;
font-size: .75rem;
line-height: 1.125rem;
white-space: nowrap;
color: var(--color-neutral-60);

`;
export const ProductTypes = styled.p`

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
gap: 1.3rem;

width: 5.0625rem;
height: 1.125rem;



font-weight: 700;
font-size: .75rem;
line-height: 1.125rem;

color: var(--color-neutral-60);


`;
export const ProductSize = styled.p`


width: 2.375rem;
height: 1.125rem;
gap: 1.3rem;

font-weight: 700;
font-size: .75rem;
line-height: 1.125rem;

color: var(--color-neutral-60);


`;
export const ProductPrice = styled.p`

width: 15.5rem;
height: 1.25rem;

font-weight: 700;
font-size: .875rem;
line-height: 1.25rem;
display: flex;
align-items: flex-end;
color: var(--color-neutral-100);


`;
export const GiftContainer = styled.div`/* Frame 49 */
display: flex;
flex-direction: row;
align-items: center;
padding: .375rem .625rem .25rem;
gap: .125rem;
white-space: nowrap;
width: 15.5rem;
height: 2.125rem;
background: var(--color-secondary-light);
border-radius: 8px;
margin-top: 2rem;
`;
export const GiftIcon= styled.div`/* Frame */

width: 1.25rem;
height: 1.25rem;

`;
export const GiftText = styled.p`

width: 9.25rem;
height: 1.25rem;

font-weight: 700;
font-size: .875rem;
line-height: 1.25rem;
display: flex;
align-items: flex-end;

color: var(--color-primary-dark);

`;
export const Dot= styled.p`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .625rem .5rem;
gap: .625rem;

width: 1.25rem;
height: 1.5rem;


`;