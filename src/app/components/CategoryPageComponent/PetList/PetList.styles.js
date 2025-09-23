import styled from "styled-components";
export const PetListContainer = styled.div`
  padding-left: 5rem;
  @media (max-width: 768px) {
    padding-left: 0rem;
    margin-right: auto;
  }
`;
export const PetListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;
export const PetListTitle = styled.h1`
  width: 7.125rem;
  height: 2.25rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  display: flex;
  align-items: flex-end;
  color: var(--color-primary-main);
  white-space: nowrap;
`;
export const PetCardLink = styled.a``;
export const NumberOfPets = styled.span`
  width: 4.4375rem;
  height: 1.25rem;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: flex-end;

  color: var(--color-neutral-60);
`;
export const PetListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
  min-height: 0;
  padding-top: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    justify-items: start;
    align-items: start;
    margin-left: 0;
    padding-left: 1rem;
  }
`;

export const PetListPagination = styled.div`
  justify-content: center;
  margin-top: auto;
  padding-top: 1rem;
`;
