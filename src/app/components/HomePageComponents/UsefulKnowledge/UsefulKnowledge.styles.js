import styled from 'styled-components';
export const KnowledgeSection = styled.section`

width: 100%;
display:block;
height: 61.625rem;
position: absolute;
left: 1rem;
top: 240.8125rem;
padding-left:4.625rem;

@media (max-width: 768px) {
top: 190rem;
padding-left:1.3rem;
left:1rem;;
}
`;
export const KnowledgeContainer = styled.div`
 max-width: var(--container-max-width);
height: 61.625rem;

  @media (max-width: 768px) {
    width: var(--mobile-container-max-width);
`;
export const KnowledgeHeader = styled.div`

display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .125rem;
    justify-content: space-between;
    white-space: nowrap;
    padding-top: 1rem ;
    padding-right:6.25rem;
    padding-left:.625rem;

`;
export const KnowledgeHeaderRow = styled.div`

`;
export const KnowledgeTitle = styled.h1`

width: 5.6875rem;
height: 1.5rem;
font-weight: 500;
font-size: 1rem;
color:#000000;
white-space: nowrap;

  @media (max-width: 768px) {

width: 7.9375rem;
height: 1.25rem;

font-weight: 500;
font-size: .875rem;
display: flex;
align-items: flex-end;

}
`;
export const KnowledgeP =styled.p`

width: 15.125rem;
height: 2.25rem;
font-weight: 700;
font-size: 1.5rem;
display: flex;
align-items: flex-end;
text-transform: capitalize;
color: var(--color-primary-main);

  @media (max-width: 768px) {

width: 12.625rem;
height: 2rem;

font-weight: 700;
font-size: 1.25rem;
line-height: 2rem;
}
`;
export const ViewMoreButtonDesktop=styled.div`

  @media (max-width: 768px) {
    display: none;
  }
`;
export const ViewMoreButtonMobile=styled.div`
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
export const KnowledgeList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {

grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(1, 1fr);

grid-gap: 0.7rem;

`;