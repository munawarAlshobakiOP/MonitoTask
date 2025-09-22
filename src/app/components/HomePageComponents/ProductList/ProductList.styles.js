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
padding: 0rem 2.375rem;

`;


export const ProductsListHeader = styled.div`

display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .125rem;
    justify-content: space-between;
    padding: 1.25rem 2.5rem;




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

width: 8rem;
  justify-content: flex-end;
`;
export const ProductsListGrid = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 1.25rem;
padding-top: 0rem;
padding-bottom: 6.25rem;
padding-left: 3rem;
`;
export const ProductCardLink = styled.a``;


