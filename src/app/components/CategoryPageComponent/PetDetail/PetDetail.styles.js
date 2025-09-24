import styled from "styled-components";

export const PetDetailDesktop = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DesktopDetails = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileDetails = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }
`;

export const PetDetailMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const PetHealthGuaranteeMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5625rem 0.75rem;
    gap: 1rem;
    background: linear-gradient(
      102.87deg,
      var(--color-secondary-light) 6.43%,
      var(--color-secondary-light) 78.33%,
      #ffe7ba 104.24%
    );
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

export const ShareSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-right: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ShareTitle = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-primary-dark);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    fill: var(--color-neutral-40) !important;
    color: var(--color-neutral-40) !important;
    width: 1.25rem;
    height: 1.25rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const PetHealthGuarantee = styled.div`
	
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: .5625rem .75rem;
gap: 1rem;
background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, #FFE7BA 104.24%);
border-radius: 10px;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

export const HealthTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  color: var(--color-primary-dark);
`;

export const GuaranteeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-primary-dark);
`;

export const PetImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const PetImage = styled.img`
  width: 35rem;
  height: 29.75rem;
  border-radius: 0.625rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const ImageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 1rem;
  max-width: 35rem;
  height: 7rem;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  white-space: nowrap;
`;
export const dogImageItem = styled.img`
  border-radius: 0.375rem;
  width: 5.875rem;
  height: 5.875rem;
  transition: border 0.2s;
`;

export const PetDetailSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 4rem;
  margin-right: 100rem;
  padding-top: 6.4rem;
  gap: 2.125rem;
  width: 100%;
  max-width: var(--container-max-width);
  height: 55.625rem;

  background: var(--color-neutral-00);
  border: 1px solid var(--color-neutral-10);
  border-radius: 20px;
  @media (max-width: 768px) {}
  border:none;
  
`;
export const ArrowContainer = styled.div`
  justify-content: center;
  align-items: center;

  gap: 0.625rem;

  width: 2.625rem;
  height: 2.625rem;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 1.25rem;
  display: inline-flex;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const PetSelectionImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ArrowContainerLeft = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.625rem;
  height: 2.625rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1.25rem;
`;

export const ArrowContainerRight = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.625rem;
  height: 2.625rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 1.25rem;
`;
export const PetInfoContainer = styled.div`
  padding: 0px;
  gap: 1.125rem;
  width: 32.3125rem;
  height: 48.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1.125rem;
  width: 32.3125rem;
  height: 48.875rem;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 1rem;
    display: flex !important;
  }
`;
export const Path = styled.p``;
export const PetTitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    background: var(--background);
    box-shadow: 0px -6px 6px rgba(0, 0, 0, 0.06);
  }
`;
export const SkuText = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  align-items: flex-end;
  color: var(--color-neutral-40);
`;
export const PetTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 36px;
  color: var(--color-natural-100);
`;
export const PetPrice = styled.p`
  font-weight: 700;
  font-size: 1.25rem;

  color: var(--color-primary-dark);
`;
export const DetailButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1.125rem;
  width: 23.3125rem;
  height: 2.75rem;
`;
export const PetDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 32.3125rem;
  height: 35.25rem;
`;
export const DescriptionSections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.5rem 0rem;
  width: 32.3125rem;
  border-bottom: 1px solid var(--color-neutral-10);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.5rem 0rem;
  width: 32.3125rem;
  min-height: 3rem;
  border-bottom: 1px solid var(--color-neutral-10);
`;
export const MainText = styled.p`
  width: 32.3125rem;
  height: 35.25rem;

  font-weight: 500;
  font-size: 0.875rem;

  color: var(--color-neutral-60);
`;
export const SubText = styled.p`
  width: 32.3125rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-neutral-60);
`;
