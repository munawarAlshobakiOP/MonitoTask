import styled from "styled-components";
export const ChatButtonContainer = styled.div`

box-sizing: border-box;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .875rem 1.75rem .625rem 1.5rem;
gap: .625rem;

width: 13.5625rem;
height: 2.75rem;

border: .125rem solid var(--color-primary-dark);
border-radius: 3.5625rem;


`;
export const ChatButtonText = styled.p`

width: 8.0625rem;
height: 1.5rem;

font-weight: 700;
font-size: 1rem;
display: flex;
align-items: flex-end;
white-space: nowrap;
color: var(--color-primary-dark);

`;