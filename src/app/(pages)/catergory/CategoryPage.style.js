import styled from 'styled-components';

export const PageContainer = styled.div`
 
  @media (min-width: 769px) {
    min-height: 350vh;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    min-height: 475vh;
    padding: 1rem;
    max-width: var(--mobile-container-max-width);
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
 
  }
`;