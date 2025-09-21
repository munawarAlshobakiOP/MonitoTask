import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 500vh;

  @media (min-width: 769px) {
    min-height: 540vh;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    min-height: 4700vh;
    padding: 1rem;
    max-width: var(--mobile-container-max-width);
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;