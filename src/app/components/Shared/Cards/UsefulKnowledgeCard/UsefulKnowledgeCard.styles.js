import styled from "styled-components";
export const KnowledgeCardContainer= styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: .5rem;
gap: .5rem;
width: 23.75rem;
height: 26.5rem;
background: var(--background);
box-shadow: 0rem .25rem 1.75rem -0.125rem var(--box-shadow-Pet-Card);
border-radius: .75rem;


`;
export const KnowledgeCardImage= styled.img`

width: 22.75rem;
height: 15.1875rem;
border-radius: .625rem;
`;
export const KnowledgeCardImageContainer= styled.div`

width: 22.75rem;
height: 15rem;
background: var(--background);
border-radius: .625rem;

`;
export const PetKnowledgeB= styled.div`
display: flex;
flex-direction: row;
padding: .125rem .625rem;
gap: .625rem;
width: 5.5625rem;
height: 1.25rem;
background: var(--color-state-blue);
border-radius: 1.75rem;
text-align: center;
`;
export const KnowledgeCardBText= styled.p`

`;
export const PetKnowledgeText= styled.p`
color: var(--color-neutral-00);

white-space: nowrap;
width: 69px;
height: 16px;
font-weight: 700;
font-size: .625rem;
display: flex;
align-items: center;


`;
export const KnowledgeCardTitle= styled.h1`
fonst-size: 1rem;
font-weight: 700;
color: var(--color-neutral-100);
text-align: left;
font-weight: 700;
font-size: 1rem;
line-height: 1.5rem;


`;
export const KnowledgeCardDescription= styled.p`

line-height: 1.25rem;

font-weight: 400;
font-size: .875rem;
color: var(--color-neutral-80);
 overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const KnowledgeCardContent= styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: .5rem;
gap: .625rem;
width: 22.75rem;
height: 10rem;
`;

export const CardInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem;
gap: .375rem;
width: 21.75rem;
height: 7.125rem;

`;