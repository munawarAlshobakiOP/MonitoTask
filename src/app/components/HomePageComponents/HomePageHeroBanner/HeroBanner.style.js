import styled from "styled-components";
export const HeroBannerSection = styled.section`
width: 100%;

position: absolute;
height: 43.4375rem;
left: 0rem;
top: 0rem;
overflow: hidden;

background: linear-gradient(102.87deg, var(--color-secondary-light) 6.43%, var(--color-secondary-light) 78.33%, var(--color-secondary-main) 104.24%);
border-radius: 0rem 0rem 2.5rem 2.5rem;
@media (max-width: var(--breakpoint-md)) {
height: 49.625rem;

}
`;
export const HeroBannerContainer = styled.div`
max-width: var(--container-max-width);
align-items: center;
padding-left:4.8rem;
padding-top:10rem;
@media (max-width: 768px) {
    width: var(--mobile-container-max-width);
    padding-left:1rem;
    padding-top:5rem;
`;
export const HeroBannerContent = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 1.5rem;
@media (max-width: 768px) {
gap:0.7rem;
}
`;
export const HeroBannerTextH1 = styled.h1`
width: 29.0625rem;
height: 4.25rem;
font-weight: 800;
font-size: 3.75rem;
text-transform: capitalize;
white-space: nowrap;
color: var(--color-primary-dark);
position: relative;
z-index: 2;


@media (max-width: 768px) {
width: 22.3125rem;
font-weight: 800;
font-size: 2.7rem;
line-height: 3.75rem;

}

`;
export const HeroBannerTextH2 = styled.h2`
width: 452px;
height: 3.75rem;
font-weight: 700;
font-size: 2.875rem;
text-transform: capitalize;
color: var(--color-primary-dark);
white-space: nowrap;

@media (max-width: 768px) {

width: 17.1875rem;
height: 2.375rem;
font-weight: 700;
font-size: 1.75rem;
line-height: 2.375rem;

}



`;
export const HeroBannerP = styled.p`

font-weight: 500;
font-size: 1rem;
width: 30rem;
height: 4.5rem;
padding-left:.625rem;
color: var(--color-primary-dark);

@media (max-width: 768px) {
width: 23.875rem;
height: 3.375rem;
font-weight: 500;
font-size: .75rem;
}
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  @media (max-width: 768px) {
  padding-top:2rem;}
`;

export const HeroBannerImageContainer = styled.div``;

export const HeroBannerImage = styled.img`
position: absolute;
width: 59rem;
height: 38.3rem;
left: 38rem;
top: 7.3rem;
z-index: 3; 
@media (max-width: 768px) {

position: absolute;
width: 29rem;
height: 23rem;
left: -2.5rem;
top: 26.5rem;

}
`;
export const Traingular1=styled.div`

position: absolute;
width: 39.6875rem;
height: 39.6875rem;
left: 42.4rem;
top: 22.8rem;

background: var( --color-primary-main);
border-radius: 99px;
transform: rotate(9.35deg);
z-index: 1; 
overflow: hidden;
@media (max-width: 768px) {

width: 33.0613rem;
height: 33.0613rem;
left: 4.7rem;
top: 33.075rem;
border-radius: 3rem;
transform: rotate(5.37deg);
}

`;
export const Traingular2=styled.div`

position: absolute;
width: 39.6875rem;
height: 39.6875rem;
left: 46.5rem;
top: 16.9rem;

background: var(--color-secondary-main);
border-radius: 99px;
transform: rotate(25.23deg);
z-index: 2;
@media (max-width: 768px) {
    display: none;
}
`;
export const Traingular3=styled.div`

position: absolute;
width: 4.1937rem;
height: 4.1937rem;
left: 4.5rem;
top: 8.8rem;

/* Secondary Color/Mon Yellow */
background: var(--color-secondary-main);
border-radius: 1.25rem;
transform: rotate(25.23deg);
z-index: 1; 
@media (max-width: 768px) {

position: absolute;
width: 33.0613rem;
height: 33.0613rem;
left: 7rem;
top: 31.25rem;

border-radius: 3rem;

}
`;

export const Traingular4=styled.div`

position: absolute;
width: .9144rem;
height: .9144rem;
left: 45rem;
top: 10.7rem;

background: var(--color-secondary-main);
border-radius: .25rem;
transform: rotate(20.79deg);
@media (max-width: 768px) {
width: .9144rem;
height: .9144rem;
left: 23.8125rem;
top: 7.75rem;

}

`;
export const Traingular5=styled.div`

position: absolute;
width: 1.7188rem;
height: 1.7188rem;
left: 42rem;
top: 13.5rem;

background: var(--color-secondary-main);
border-radius: .5625rem;
transform: rotate(-22.85deg);
z-index:1;
@media (max-width: 768px) {

width: .9956rem;
height: .9956rem;
left: 20.0256rem;
top: 10.25rem;

border-radius: .25rem;
transform: rotate(-9.62deg);
}
`;
export const Traingular6=styled.div`

position: absolute;
width: 1.3419rem;
height: 1.3419rem;
left: 42rem;
top: 14.0625rem;

background: var(--color-primary-dark);
border-radius: .375rem;
transform: rotate(-43deg);
z-index: 2;
@media (max-width: 768px) {

width: .7775rem;
height: .7775rem;
left: 19.99rem;
top: 10.9rem;

border-radius: .25rem;
transform: rotate(-30.59deg);
}

`;
export const Traingular7=styled.div`
position: absolute;
width: 39.6875rem;
height: 39.6875rem;
left: -17.9375rem;
top: -37.5625rem;
background: var(--color-secondary-main);
border-radius: 6.1875rem;
transform: rotate(25.23deg);

@media (max-width: 768px) {
left: -13.9375rem;
top: -39.2rem;
border-radius: 3.8125rem;
}
`;
export const Traingular8=styled.div`
position: absolute;
width: 39.6875rem;
height: 39.6875rem;
left: -2.6875rem;
top: 42.25rem;
background: var(--color-secondary-main);
opacity: 0.4;
border-radius: 6.1875rem;
transform: rotate(56.47deg);
@media (max-width: 768px) {
    display: none;
}`;
