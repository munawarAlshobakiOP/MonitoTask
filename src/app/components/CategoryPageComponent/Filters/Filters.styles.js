import styled from "styled-components";
export const FiltersContainer=styled.div``;

export const FiltersSection=styled.section`

box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0rem 0rem 1rem;
gap: .625rem;


border-bottom: 1px solid var(--color-neutral-10);

`;

export const FilterTitle=styled.h1`


width: 3.5625rem;
height: 2.25rem;

font-weight: 700;
font-size: 1.5rem;
line-height: 2.25rem;
display: flex;
align-items: flex-end;
white-space: nowrap;
color: var(--color-primary-main);


`;
export const FilterContent=styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;

width: 17.5rem;
height: 35.75rem;
padding-top:1rem;
`;
export const FilterSection=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

box-sizing: border-box;
padding: 0rem 0rem 1rem;
gap: .625rem;
width: 17.5rem;
border-bottom: 1px solid var(--color-neutral-10);

`;
export const FilterLabel=styled.h2`
width: 3.5625rem;
height: 1.5rem;
font-weight: 700;
font-size: 1rem;
display: flex;
align-items: flex-end;
color: var(--color-neutral-100);


`;


export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const FilterOption=styled.input`


box-sizing: border-box;

width: 1rem;
height: 1rem;

background: var(--background);
border: 1px solid var(--color-neutral-20);
border-radius: 4px;

`;
export const GenderLabel=styled.p`

font-weight: 500;
font-size: .875rem;
display: flex;
align-items: flex-end;

color: var(--color-neutral-100);


`;
export const ColorLabel=styled.p`

font-weight: 500;
font-size: .875rem;
display: flex;
align-items: flex-end;

color: var(--color-neutral-100);


`;
export const CircleColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#FFB672'};
  border: 1px solid #ccc;
  margin-right: 8px;
  display: inline-block;
`;
export const BlackWhiteCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(90deg, #242B33 0%, #242B33 52.59%, #D7D7D7 52.6%, #D2D2D2 100%);
  margin-right: 8px;
  display: inline-block;
`;
export const GenderCheckboxContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;`;
export const PriceRange=styled.div`
display: flex;
align-items: center;
gap: .5rem;
`;
export const ColorCheckboxContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;`;
export const BreedCheckboxContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const PriceInputContainer=styled.div`

box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: .625rem;
gap: .625rem;

margin: 0 auto;
width: 8.4375rem;
height: 2.5rem;

border-bottom: 1px solid var(--color-neutral-10);
`;
export const PriceInput=styled.input`
 
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0rem;
gap: .625rem;

width: 7.1875rem;
height: 1.25rem;
border: none;
color: var(--color-neutral-80);

&:focus {
  outline: none;
  box-shadow: none;
}

`;
export const BreedLabel=styled.p`

font-weight: 500;
font-size: .875rem;
line-height: 1.25rem;
display: flex;
align-items: flex-end;

color: var(--color-neutral-100);



`;