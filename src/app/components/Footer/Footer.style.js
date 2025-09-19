import styled from 'styled-components';

export const FooterContainer = styled.footer`
max-width: var(--container-max-width);
margin: 0 auto;
display: flex;
align-items: center;
  height: 440px;
  border-radius: 40px 40px 0 0;
  box-sizing: border-box;
  background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, var(--color-secondary-dark) 104.24%);
`;
export const FooterContent = styled.div`
width: 100%;
max-width: var(--container-max-width);
margin: 0 auto;
box-sizing: border-box;
padding: 28px var(--container-padding) 40px var(--container-padding);

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 40px;
height: 240px;
border-bottom: 1px solid var(--color-neutral-20);

`;
export const RegisterContainer = styled.div`
  display: flex;
  background-color: var(--color-primary-main);
  height: 8.5rem;
  border-radius: 1rem;
  padding: 2rem;
  gap: 1.25rem;
  `;
export const RegisterText = styled.h1`
width: 24.3125rem;
height: 4.5rem;

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;
text-transform: capitalize;

color: var(--color-neutral-00);


`;
export const RegisterBox = styled.div`
display: flex;
background: var(--background);

align-items: center;
padding: .75rem;
gap: .75rem;
width: 44.1875rem;
height: 4.5rem;
border-radius: .875rem;



`;
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
white-space: nowrap;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
display: flex;
align-items: flex-end;
color: var(--color-neutral-00);
text-transform: capitalize;



`;
export const FooterLinks = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: flex-start;
`;

export const LinkColumn = styled.ul`
list-style: none;
display: flex;
gap: 2rem;
margin: 0;
padding: 0;
`;

export const LinkItem = styled.li`
`;

export const Link = styled.a`
color: var(--color-neutral-00);
text-decoration: none;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
transition: color 0.3s ease;

&:hover {
  color: var(--color-primary-light);
}
`;

export const SocialMediaContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 1rem;
`;

export const SocialMediaTitle = styled.h3`
color: var(--color-neutral-00);
font-weight: 600;
font-size: 1.125rem;
line-height: 1.5rem;
margin: 0;
`;

export const SocialMediaList = styled.div`
display: flex;
gap: 1rem;
align-items: center;
`;

export const SocialMediaItem = styled.div`
`;

export const SocialMediaLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.1);
transition: all 0.3s ease;

&:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-icon {
  transition: transform 0.3s ease;
}

&:hover .social-icon {
  transform: scale(1.1);
}
`;