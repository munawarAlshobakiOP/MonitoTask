import styled from "styled-components";

export const CategoryBannerSection = styled.section`
  position: absolute;
    height: 23.625rem;
  width: 100%;
            max-width: 80rem;

  left: 4.9rem;
  top: 8.75rem;
  background: linear-gradient(102.87deg, var( --color-secondary-light) 6.43%, var( --color-secondary-light) 78.33%, #FFE7BA 104.24%);
  border-radius: 1.25rem;
  overflow: hidden;
`;

export const CategoryBannerContainer = styled.div`
  margin: 0 auto;
`;

export const CategoryImageContainer = styled.div`
  position: relative;
`;

export const CategoryBannerImage = styled.img`
  position: absolute;
  width: 40.625rem;
  height: 18.8125rem;
  left: 3.1875rem;
  top: 4.8125rem;
  z-index: 2;
`;

export const CategoryBannerContent = styled.div`
  margin: 0 auto;
  z-index: 3;
`;

export const CategoryBannerTextH1 = styled.h1`
  position: absolute;
  
  right: 6rem;
  top: 2rem;
  font-weight: 800;
  font-size: 3.25rem;
  line-height: 4.25rem;
  text-transform: capitalize;
  color: var(--color-neutral-00);
  z-index: 3;
  white-space: nowrap;
`;

export const CategoryBannerTextH2 = styled.h2`
  position: absolute;
  
  right: 6rem;
  top: 7rem;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-transform: capitalize;
  color: var(--color-neutral-00);
  z-index: 3;
  whiter-space: nowrap;
`;

export const CategoryBannerP = styled.p`
  position: absolute;
  width: 24.625rem;
  height: 3.375rem;
  right: 6rem;
  top: 12rem;
  font-weight: 500;
  font-size: .75rem;
  line-height: 1.125rem;
  text-align: right;
  color: var(--color-neutral-20);
  z-index: 3;
`;
export const Buttons = styled.div`
  position: absolute;
  right: 5rem;
  top: 17rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  z-index: 3;

  .category-explore-btn {
    background: var(--color-neutral-00) !important;
    
    & p {
      color: var(--color-neutral-100) !important;
    }
  }

  .category-view-intro-btn {
    background: transparent !important;
    border: 2px solid var(--color-neutral-00) !important;
    
    & p {
      color: var(--color-neutral-00) !important;
    }
    
    & > div:last-child {
border-color: var(--color-neutral-00) !important;      
      & svg {
        stroke: var(--color-neutral-00) !important;
        
        & * {
          stroke: var(--color-neutral-00) !important;
          fill: none !important; /* Make sure no fill */
        }
        
        & circle {
          stroke: var(--color-neutral-00) !important;
          fill: none !important; /* Only border, no fill */
        }
        
        & path {
          stroke: var(--color-neutral-00) !important;
          fill: var(--color-neutral-00) !important; /* Keep arrow fill */
        }
      }
    }
  }
`;


export const Rectangle1 = styled.div`
position: absolute;
width: 55.025rem;
height: 49.97rem;
left: 30.9375rem;
top: -2.25rem;

background: var(--color-primary-dark);
border-radius: 6.1875rem;
transform: rotate(160deg);
z-index: 1;
`;

// Default export
export default {
  CategoryBannerSection,
  CategoryBannerContainer,
  CategoryImageContainer,
  CategoryBannerImage,
  CategoryBannerContent,
  CategoryBannerTextH1,
  CategoryBannerTextH2,
  CategoryBannerP,
  Buttons,
  Rectangle1,
};