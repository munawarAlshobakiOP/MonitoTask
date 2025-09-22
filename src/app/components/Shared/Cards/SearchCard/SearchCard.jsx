import React from "react";
import {
  SearchCardContainer,
  SearchCardImage,
  SearchCardText,
  SearchCardTitle,
  SearchCardDesc
} from "./SearchCard.styles";

export default function SearchCard({ pet }) {
  return (
    <SearchCardContainer>
      <SearchCardImage src={pet.images[0]} alt={pet.title} />
      <SearchCardText>
        <SearchCardTitle>{pet.title}</SearchCardTitle>
        <SearchCardDesc>Gene: {pet.gene} 
            <br/> Age: {pet.age}</SearchCardDesc>
        
      </SearchCardText>
    </SearchCardContainer>
  );
}
