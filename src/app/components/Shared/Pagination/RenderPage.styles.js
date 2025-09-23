import styled from 'styled-components';
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  border: none;
`;

export const ArrowBtn = styled.button`
  padding: .25rem .5rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
border: none;
background-color: transparent;
color: var(--color-primary-dark);


`;

export const PageNumbers = styled.div`
  display: flex;
  gap: 2px;
font-weight: 700;
font-size: 1.125rem;
color: var(--color-primary-dark);
border: none;
background-color: transparent;
gap:0.5rem;
`;
export const PageBtn = styled.button`
  margin: 0 .125rem;
  padding: .25rem .5rem;

  font-size: 18px;
  border: none;
  background: none; 

  &.active {
    background: var( --color-primary-dark);
    color: var(--background);


border-radius: .5rem;

  }
  `;