export const ImageIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ImageIndicator = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ccc;
  display: inline-block;
`;
import styled from "styled-components";
export const CustomerImagesSection = styled.section`
  width: 100%;
  display: block;
  height: 61.625rem;
  position: absolute;
  left: 0rem;
  top: 85rem;
  @media (max-width: 768px) {
    position: static;
    height: auto;
    top: 0;
    padding: 50rem 0;
  }
`;
export const SectionTitle = styled.h1`
  width: 18.875rem;
  height: 2.25rem;
  font-weight: 700;
  font-size: 1.5rem;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.6rem;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  color: var(--color-natural-100);
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.1rem;
    padding: 1rem;
    height: auto;
    white-space: normal;
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
  padding-left: 6rem;
  gap: 2rem;
  overflow-x: auto;
  width: 85rem;
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
  @media (max-width: 768px) {
    padding-left: 0;
    gap: 1rem;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;
export const Image = styled.img`

width: 15.5rem;
height: 21.25rem;

border-radius: .625rem;


`;
export const CustomerContainer = styled.div`
 max-width: var(--container-max-width);
height: 61.625rem;
padding: 0rem 2.375rem;
@media (max-width: 768px) {
width: var(--mobile-container-max-width);}
`;