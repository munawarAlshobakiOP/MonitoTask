import styled from "styled-components";
export  const ProductsListSection = styled.section`

position: absolute;
width: 100%;
height: 70.125rem;
left: 0rem;
top: 128.6875rem;
display:block;

@media (max-width: 768px) {
  display: none;
}

`;
export const ProductsListContainer = styled.div`
 max-width: var(--container-max-width);
height: 61.625rem;

`;


export const ProductsListHeader = styled.header`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .125rem;
position: absolute;
width: 20.375rem;
height: 3.875rem;
left: 5.625rem;
top: 3.75rem;


`;
export const ProductsListTitle = styled.h1`

width: 20.375rem;
height: 1.5rem;

font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;
white-space: nowrap;
color: #000000;

`;
export const ProductsListHeaderRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
export const ProductP = styled.p`

width: 9.125rem;
height: 2.25rem;
white-space: nowrap;

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;

display: flex;
align-items: flex-end;
text-transform: capitalize;

color: var(--color-primary-main);

`;
export const ViewMoreButtonDesktop = styled.div`
display: flex;
align-items: center;
margin-left: 71rem;
width: 8rem;
`;
export const ProductsListGrid = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 1.25rem;
padding-top: 9.5rem;
padding-bottom: 6.25rem;
padding-left: 5.625rem;
`;
export const ProductCardLink = styled.a``;


