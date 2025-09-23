import styled from 'styled-components';

export const MobileSearchIconContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 3rem;
    top: 0.7rem;

  }
  svg {
    fill: var(--color-primary-main);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(20,20,20,0.85); 
  display: flex;
  flex-direction: column;
  padding-top:9rem;
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
`;

export const MobileMenuContent = styled.div`
  

  padding: 2rem;
 
  color: (--color-neutral-00);
  transition: background 0.3s;
`;


export const NavbarContainer = styled.nav`

width: 100%;
max-width: var(--container-max-width);
margin: 0 auto;
display: flex;
align-items: center;
height: 6.25rem;
padding: 28px var(--container-padding);
overflow: visible;
  position: relative;
gap: 3rem;
z-index: 100;
box-sizing: border-box;
judstify-content: space-between;

@media (max-width: 768px) {
  max-width: (--mobile-container-max-width);
  height: var(--mobile-navbar-height);
  padding: 1rem var(--mobile-container-padding);
}


`;

export const NavLeft = styled.div`
display: flex;
align-items: center;
gap: var(--navbar-gap);
flex: 0 0 auto;
width: 33.0625rem;
height: 2.5rem;
box-sizing: border-box;

@media (max-width: 768px) {
  width: 100%;
  justify-content: center;
  position: relative;
}
`;

export const DesktopNavLinks = styled.div`
display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
display: flex;
gap: var(--navbar-gap);
align-items: flex-start;
padding: 0;
width: 22.875rem;
height: 1.5rem;

@media (max-width: 768px) {
  display: none;
}
`;
export const NavItem = styled.li`
list-style: none;
display: flex;
width: 2.75rem;
height: 1.5rem;
color: var(--color-primary-main);
`;

export const Logo = styled.img`
width: 7.1875rem;
height: 2.5rem;

@media (max-width: 768px) {
  width: 5.75rem;
  height: 2rem;
  flex-shrink: 0;
}
`;


export const NavRight = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: .875rem;
flex: 0 0 auto;
width: 38.4375rem;
height: 2.75rem;
overflow: visible;
position: relative;
box-sizing: border-box;
judstify-content: space-between;

@media (max-width: 768px) {
  width: auto;
  > *:not(.mobile-search-icon) {
    display: none !important;
  }
}
`;


export const Search = styled.div`
display: flex;
align-items: center;
padding: .75rem 1.25rem .75rem 1rem;
gap: .75rem;
width: 17.5rem;
height: 2.75rem;
border-radius: 2.875rem;
background-color: var(--color-neutral-00);

@media (max-width: 768px) {
  padding: 0;
  width: auto;
  height: auto;
  background-color: transparent;
  border-radius: 0;
}
`;


export const SearchIconContainer = styled.div`
width: 1.25rem;
height: 1.25rem;
transform: translateY(-.125rem);

svg {
  width: 1.25rem;
  height: 1.25rem;
  flex: none;
}

@media (max-width: 768px) {
  transform: none;

}
`;

export const SearchInput = styled.input`
border: none;
background: transparent;
width: 9.5625rem;
height: 1.25rem;
font-size: .875rem;
outline: none;
color: var(--color-neutral-40);

@media (max-width: 768px) {
  display: none;
}
`;
export const JoinButton = styled.button`
width: 12.6875rem;
height: 2.75rem;
background: var(--color-primary-main);
border-radius: 3.5625rem;
border: none;
font-size: 1rem;
color: var(--color-neutral-00);
display: flex;
justify-content: center;
align-items: center;
padding: .875rem 1.75rem .875rem;
cursor: pointer;

@media (max-width: 768px) {
  display: none;
}
`;
export const CurrencySection = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: .25rem;
width: 6.5rem;
height: 2.75rem;
position: relative;
flex-shrink: 0;

@media (max-width: 768px) {
display: none;
}
`;
export const CurrencyArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
flex-shrink: 0;
  
svg {
  width: 24px;
  height: 24px;
  flex: none;
}
`;

export const CurrencyDropdown = styled.div`
display: flex;
align-items: center;
gap: 8px;
cursor: pointer;
position: relative;
width: 100%;
min-height: 1.4375rem;
flex-shrink: 0;
`;

export const CurrencySelected = styled.div`
display: flex;
align-items: center;
gap: .375rem;
height: 1.4375rem;
flex-shrink: 0;
white-space: nowrap;

span {
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: var(--color-primary-dark);
}
`;

export const CurrencyOptions = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
top: calc(100% + .25rem);
right: .625rem;
background: var(--background);
border: 1px solid var(--color-neutral-20);
border-radius: 16px;
z-index: 99;
width: 6.5rem;
min-width: fit-content;
`;

export const CurrencyOption = styled.div`
display: flex;
align-items: center;
gap: .4rem;
padding: .5rem .75rem .5rem .5625rem;
width: 100%;
  
img {
  width: 1.3125rem;
  height: 1.3125rem;
}
  
.currency-code {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4375rem;
  color: var(--color-primary-dark);
}
`;
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;
  width: 2rem;
  height: 2rem;
  
  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
`;
export const LogoContainer = styled.div`

`;

export const NavLink = styled.a`
`;
export const MobileMenuLinkContainer = styled.div`
  margin: 1rem 0;
`;

export const MobileMenuLink = styled.a`
  font-size: 1.25rem;
  color: var(--background);
  text-decoration: none;
`;

