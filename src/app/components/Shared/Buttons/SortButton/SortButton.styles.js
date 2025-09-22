import styled from 'styled-components';

export const SortButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SortButton = styled.button`
  /* Active=False */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: .625rem .75rem .5rem 1.25rem;
  gap: .5rem;

  width: 12.5rem;
  height: 2.375rem;

  border: 1px solid var(--color-neutral-20);
  border-radius: 1.25rem;
  background: transparent;
  cursor: pointer;

  ${({ isOpen }) => isOpen && `
    border-color: var(--color-state-blue);
    box-shadow: 0 4px 8px var(--box-shadow);
  `}
`;

export const SortButtonText = styled.span`
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-neutral-80);
  white-space: nowrap;
`;

export const SortButtonIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  ${({ isOpen }) => isOpen && `
    transform: rotate(180deg);
  `}
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .625rem 0rem;
  width: 12.5rem;
  background: var(--background);
  border: .0625rem solid var(--color-neutral-20);
  box-shadow: 0rem .25rem 1.5rem -0.125rem var(--box-shadow);
  border-radius: 1rem;
`;

export const DropdownOption = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: .875rem;
  display: flex;
  align-items: center;
  color: var(--color-neutral-60);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-neutral-10);
  }

  ${({ isSelected }) => isSelected && `
    background: var(--color-primary-light);
    color: var(--color-primary-main);
    font-weight: 600;
  `}
`; 
export const SortDropdown = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;

  position: absolute;
  top: 100%;
  left: 0;
background: var(--background);
border: 1px solid var(--color-neutral-20);
border-radius: 16px;
  margin-top: 4px;
  min-width: 12.5rem;
  width: 12.5rem;
  max-width: 12.5rem;

`;
export const SortDropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
   font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--color-primary-dark);
  `
