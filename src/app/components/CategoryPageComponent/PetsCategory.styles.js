
import styled from "styled-components";
export const PetsCategoryContainer = styled.div`
position:absolute;
  top: 40rem;
  left:6rem;
  display: flex;
  flex-direction: row;
  max-width: var(--container-max-width);
  @media (max-width: 768px) {
  left:0rem;
  top: 37rem;
  }
`;// Hides children on mobile screens
const MobileHide = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;