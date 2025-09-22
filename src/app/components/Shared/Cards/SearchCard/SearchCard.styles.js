import styled from "styled-components";

export const SearchCardContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  background: var(--color-neutral-00);
  border-radius: 0.75rem;
  box-shadow: none;
  padding: 0.75rem 1rem;
  gap: 1rem;
`;

export const SearchCardImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;

`;

export const SearchCardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex: 1;
  min-width: 0;
`;

export const SearchCardTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-neutral-80);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchCardDesc = styled.div`
  font-size: 0.9rem;
  color: var(--color-neutral-60);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

export const SearchCardPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-neutral-80);
  margin-top: 0.25rem;
`;
