import styled from "styled-components";

export const CategoryBannerSection = styled.section`

  top: 8.75rem;
  background: linear-gradient(102.87deg, var( --color-secondary-light) 6.43%, var( --color-secondary-light) 78.33%, #FFE7BA 104.24%);
  position: absolute;
height: 23.625rem;
left: 5rem;
right: 5rem;
border-radius: 1.25rem;
overflow: hidden;
display: flex;   
max-width: var(--container-max-width);  


@media (max-width: 768px) {

max-width: var(--mobile-container-max-width);  
height: 27.5625rem;
width: 100%;
background: var(--color-secondary-light);
border-radius: 1rem;
left:0rem;
margin-right:auto;

}

    @media (max-width: 768px) {
      gap: 8rem;
      top: 4rem;
      right: 10rem;
      
    }
  margin: 0 auto;
  
`;

export const CategoryImageContainer = styled.div`
`;

export const CategoryBannerImage = styled.img`
  position: absolute;
  width: 40.625rem;
  height: 18.8125rem;
  left: 5rem;
  top: 4.8125rem;
  z-index: 2;
  @media (max-width: 768px) {
  top:15rem;
  left:0rem;
width: 28.75rem;
height: 13.3125rem;

  
  }
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
  @media (max-width: 768px) {

position: absolute;
width: 20.375rem;
height: 3.75rem;
left: 1rem;
top: 2rem;

font-weight: 800;
font-size: 2.625rem;
text-transform: capitalize;

color: #002A48;


  }
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
  @media (max-width: 768px) {/* Thousands more fun! */

height: 2.375rem;
left: 1rem;
top: 5.75rem;
  whiter-space: nowrap;

font-weight: 700;
font-size: 1.625rem;
text-transform: capitalize;

color: var(--color-primary-dark);

}
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
  @media (max-width: 768px) {

width: 21.625rem;
height: 3.375rem;
left: 1rem;
top: 8.875rem;

font-weight: 500;
font-size: .75rem;
line-height: 1.125rem;
text-align: left;

color: var(--color-neutral-80);


  }
`;
export const Buttons = styled.div`
  position: absolute;
  right: 5rem;
  top: 17rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  z-index: 3;
@media (max-width: 768px) {
top:15rem;}


  .category-explore-btn {
    background: var(--color-neutral-00) !important;
    
    & p {
      color: var(--color-neutral-100) !important;
    }
    @media (max-width: 768px) {
  

    background: var(--color-primary-main) !important;
      & p {
        color: var(--color-neutral-00) !important;
      }
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
    @media (max-width: 768px) {
    
      background: transparent !important;
      border: 2px solid  var(--color-primary-main) !important;
      & p {
        color: var(--color-primary-main) !important;
      }
      & > div:last-child {
        border-color: var(--color-primary-main) !important;
        & svg {
          stroke:  var(--color-primary-main)!important;
          & * {
            stroke: var(--color-primary-main) !important;
            fill: none !important;
          }
          & circle {
            stroke: var(--color-primary-main) !important;
            fill: none !important;
          }
          & path {
            stroke: var(--color-primary-main) !important;
            fill: var(--color-primary-main) !important;
          }
        }
      }
    }
  }
`;


export const Rectangle1 = styled.div`
position: absolute;
width: 55.025rem;
height: 49.97rem;
left: 39rem;
top: -1.5rem;

background: var(--color-primary-dark);
border-radius: 6.1875rem;
transform: rotate(160deg);
z-index: 1;
@media (max-width: 768px) {

position: absolute;
width: 51.025rem;
      
height: 49.97rem;
left: -10.875rem;
top: 20.6875rem;

border-radius: 6.1875rem;
transform: rotate(-175.16deg);


}
`;

export const CategoryBannerContainer = styled.div`
  margin: 0 auto;
  width: 100%;
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