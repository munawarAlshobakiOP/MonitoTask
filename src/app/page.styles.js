import styled from 'styled-components';

export const PageContainer = styled.div`

  @media (min-width: 769px) {
    min-height: 600vh;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
  
  @media (max-width: var(--breakpoint-md)) {
    min-height: 480vh;
    padding: 1rem;
    max-width: var(--mobile-container-max-width);
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  
  @media (max-width: var(--breakpoint-md)) {
    margin-bottom: 1rem;
  }
`;