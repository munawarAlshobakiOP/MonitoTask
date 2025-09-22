import styled from 'styled-components';

export const FooterContainer = styled.div`
max-width: var(--container-max-width);
margin: 0 auto;
height: 27.5rem;
display: flex;
align-items: center;
  border-radius: 2.5rem 2.5rem 0 0;
  box-sizing: border-box;
  background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, var(--color-secondary-dark) 104.24%);


  @media (max-width: var(--breakpoint-md)) {
    width: var(--mobile-container-max-width);
    height: 37.375rem;
border-radius: 1.25rem 1.25rem 0rem 0rem;
align-items: flex-start; 
padding-top:2.8125rem;
  }
`;
export const FooterContent = styled.div`
width: 100%;
max-width: var(--container-max-width);
margin: 0 auto;
box-sizing: border-box;
padding: 1.75rem var(--container-padding) 2.5rem var(--container-padding);
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2.5rem;
height: 15rem;
@media (max-width: var(--breakpoint-md)) {
padding-left:1.8125rem;


`;
export const FooterLinkRegisterationcontainer = styled.div`
padding: 0rem 0rem 2.5rem;
border-bottom: 1px solid var(--color-neutral-20);

`;
export const RegisterContainer = styled.div`
  display: flex;
  background-color: var(--color-primary-main);
  height: 8.5rem;
  border-radius: 1rem;
  padding: 2rem;
  gap: 5rem;
  padding-left:6.8rem;


  @media (max-width: var(--breakpoint-md)) {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem;
gap: 1rem;
width: 23.875rem;
height: 15.25rem;
background: var(--color-primary-main);
border-radius: 1rem;
  }
  `;
export const RegisterText = styled.h1`
width: 24.3125rem;
height: 4.5rem;
font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;
text-transform: capitalize;
color: var(--color-neutral-00);

@media (max-width: var(--breakpoint-md)) {
width: 21.875rem;
height: 4rem;
font-weight: 700;
font-size: 1.25rem;
line-height: 2rem;
text-transform: capitalize;
color: var(--color-neutral-00);
}
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

@media (max-width: var(--breakpoint-md)) {
flex-direction: column;
width: 21.875rem;
height: 8.25rem;
}

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

@media (max-width: var(--breakpoint-md)) {
width: 20.375rem;
height: 3rem;
}
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


@media (max-width: var(--breakpoint-md)) {
width: 20.375rem;
height: 3rem;
border-radius: .5rem;

}


`;
export const FooterLinks = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding-top: 1rem;
gap: 59.0625rem;
width: 55.7969rem;
height: 1.1875rem;
  padding-left:6.8rem;
@media (max-width: var(--breakpoint-md)) {
flex-direction: column;
gap: 1.25rem;
align-items: center;
width: 23.875rem;
height: 4rem;
padding-left:3.4rem;

}
`;

export const LinkColumn = styled.ul`
list-style: none;
display: flex;
gap: 2rem;
margin: 0;
padding: 0;

@media (max-width: var(--breakpoint-md)) {

gap: 2.5rem;

width: 23.875rem;
height: 1.5rem;
padding-left:6.7rem;


}
`;

export const LinkItem = styled.li`
`;

export const Link = styled.a`
text-decoration: none;

width: 2.9375rem;
height: 1.1875rem;
font-weight: 500;
font-size: .7555rem;
line-height: 1.125rem;
color: var(--color-neutral-100);


`;

export const SocialMediaContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0rem;
gap: 1.8887rem;
width: 10.1988rem;
height: 1.1331rem;

@media (max-width: var(--breakpoint-md)) {
padding-left:1rem;
gap: 2.5rem;

width: 12.5rem;
height: 1.25rem;


}

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
width: 1.1331rem;
height: 1.1331rem;
transition: all 0.3s ease;

.social-icon path{
fill: var(--color-neutral-100);
  transition: transform 0.3s ease;
  
}

`;

export const Copyright = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "text logo privacy";
  align-items: center;
  gap: 19.7rem;
  padding-left:6.8rem;
  @media (max-width: var(--breakpoint-md)) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "logo"
      "privacy" 
      "text";
    text-align: center;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding-left:6.3rem;  }
`;

export const CopyrightText = styled.p`
grid-area: text;
width: 13.5625rem;
height: 1.25rem;
font-weight: 500;
font-size: .875rem;
line-height: 1.25rem;
color: var(--color-neutral-60);
@media (max-width: var(--breakpoint-md)) {

font-weight: 400;
font-size: .625rem;
width: auto;
height: auto;
text-align: center;
margin: 0 auto;

}

`;

export const CopyrightLogo = styled.img`
grid-area: logo;
width: 7.1875rem;
height: 2.5rem;

@media (max-width: var(--breakpoint-md)) {
width: 7.1875rem;
height: 2.5rem;
display: block;
margin: 0 auto;

}

`;


export const CopyrightPrivacy = styled.p`
grid-area: privacy;
width: 14.1875rem;
height: 1.25rem; 
font-weight: 500;
font-size: .875rem;
line-height: 1.25rem;
color: var(--color-neutral-60);

@media (max-width: var(--breakpoint-md)) {
width: auto;
height: auto;
font-size: .75rem;
white-space: nowrap;
text-align: center;
margin: 0 auto;

}

`;