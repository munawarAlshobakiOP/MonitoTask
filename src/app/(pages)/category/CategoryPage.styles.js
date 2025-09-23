import styled from 'styled-components';
export const MainContent = styled.div`
  flex: 1;
`;

export const PageContainer = styled.div`
 
  @media (min-width: 769px) {
    min-height: 392vh;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    min-height: 600vh;
    padding: 1rem;
    max-width: var(--mobile-container-max-width);
  }
`;
export const SectionWrapper =styled.section``;

export const PageContainerDetail = styled.div`

  @media (min-width: 769px) {
    max-height: 259vh;
    max-width: var(--container-max-width);
    margin: 0 auto;
    flex-direction: column;

  }
  
  @media (max-width: 768px) {
    max-height: 400vh;
    padding: 1rem;
    max-width: var(--mobile-container-max-width);
  }
`;