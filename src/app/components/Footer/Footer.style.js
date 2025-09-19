import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 1440px;
  height: 440px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 40px 40px 0 0;
  box-sizing: border-box;
  background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, var(--color-secondary-dark) 104.24%);
`;
export const FooterContent = styled.div`
  `;
export const RegisterContainer = styled.div``;
export const RegisterText = styled.h1``;
export const RegisterBox = styled.div``;
export const EmailInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: .875rem 1.75rem;
gap: .625rem;

width: 31.75rem;
height: 3rem;

background: var(--background);
border: 1px solid var(--color-neutral-40);
border-radius: .5rem;


`;
export const RegisterButton = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .875rem 1.75rem .625rem;
gap: .625rem;
width: 10.1875rem;
height: 3rem;
background: var(--color-primary-dark);
border-radius: .5rem;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;
color: var(--color-neutral-00);



`;