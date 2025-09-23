import styled from "styled-components";
export const MiddleIntroSection= styled.section`
position: absolute;
height: 23.625rem;
left: 5rem;
top: 105.0625rem;
right: 5rem;
border-radius: 20px;
overflow: hidden;
display: flex;   
max-width: var(--container-max-width);  

@media (max-width:768px) {
position: absolute;
width: 23.875rem;
height: 40rem;
left: 1.9375rem;
top: 148.75rem;
}
`;
export const MiddleIntroContent= styled.div`
width: 90rem;
border-radius: 1.25rem;
background: var(--color-primary-main);

`;
export const MiddleImageContainer= styled.div``;
export const MiddleImage= styled.img`

position: relative;
width: 32.0625rem;
height: 21.375rem;
left: 1.25rem;
top: 2.25rem;
z-index: 10;



@media (max-width: 768px) {
position: absolute;
width: 32.75rem;
height: 21.8125rem;
left: -4.4375rem;
top: 18.1875rem;
z-index: 3;

}

`;
export const MiddleTextContainer= styled.div``;
export const Traingular1=styled.div`

position: absolute;
width: 48.8931rem;
height: 39.6875rem;
left: 46.5rem;
top: -14rem;
border-radius: 6.1875rem;
transform: rotate(25.23deg);
z-index: 12;
background: var(--color-secondary-light);


@media (max-width: 768px) {

position: absolute;
width: 37.8144rem;
height: 39.6875rem;
left: -8.8125rem;
top: -20.125rem;
z-index: 1

background: var(--color-secondary-light);
border-radius: 4.6875rem;
transform: rotate(11.41deg);
}
`;
export const Traingular2=styled.div`

position: absolute;
width: 49.2212rem;
height: 49.2212rem;
left: -9.705rem;
top: 10.795rem;
background: var(--color-primary-dark);
border-radius: 6.1875rem;
transform: rotate(28.25deg);
z-index: 9;

@media (max-width: 768px) {

position: absolute;
width: 49.2212rem;
height: 49.2212rem;
left: -14.705rem;
top: 33.045rem;
z-index: 2;

}
`;
export const TextContainer= styled.div`
position: absolute;
z-index: 15;
left: 5rem;
top: 1rem;
@media (max-width: 768px) {
left: 0rem;
top: 1rem;
}
`;
export  const MiddleIntroH1 = styled.h1` 
position: absolute;
width: 25.1875rem;
height: 4.25rem;
left: 43.25rem;
top: 2.6rem;
font-weight: 800;
font-size: 3.25rem;
text-transform: capitalize;
white-space: nowrap;
color: var(--color-primary-dark);
z-index: 15;
text-align: right;


@media (max-width: 768px) {
width: 17.4375rem;
height: 3.375rem;
left: 2.4rem;
top: 2rem;
font-size: 2.25rem;
text-align: center;
}

`; 
export const MiddleIntroH2 = styled.h2`
position: absolute;
width: 20rem;
height: 2.5rem;
left: 49rem;
top: 6.5rem;
font-weight: 700;
font-size: 2.25rem;
line-height: 2.25rem;
color: var(--color-primary-dark);
text-transform: capitalize;
z-index: 15;
text-align: right;
white-space: nowrap;

@media (max-width: 768px) {
position: absolute;
width: 14.75rem;
height: 2.25rem;
left: 5.4rem;
top: 5.375rem;

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;
text-align: center;
z-index: 15;

}
`;

export  const MiddleIntroP = styled.p`
position: absolute;
width: 30.4rem;
height: 3.75rem;
left: 41.55rem;
top: 9.5rem;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
color: var(--color-neutral-80);
z-index: 15;
text-align: right;

@media (max-width: 768px) {
position: absolute;
width: 21.375rem;
height: 3.375rem;
left: 1.25rem;
top: 8.375rem;

font-weight: 500;
font-size: .75rem;
line-height: 1.125rem;
text-align: center;
z-index: 15;

color: var(--color-neutral-80);

}
`;
export const ButtonsContainer= styled.div`
display: flex;
gap: 1.25rem;
position: absolute;
left: 51.8rem;
top: 15rem;
z-index: 15;

@media (max-width: 768px) {
  position: absolute;
  top: 13rem;
  left: 1.25rem;
  justify-content: center;
  width: 21.375rem;
}
`;
