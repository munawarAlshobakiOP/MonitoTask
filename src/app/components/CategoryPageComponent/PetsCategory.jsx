import * as Styles from "./PetsCategory.styles";
import PetList from "./PetList/PetList";
import Filters from "./Filters/Filters";
import styled from "styled-components";



import { useState } from "react";

export default function PetsCategory() {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
 const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <Styles.PetsCategoryContainer>
      <MobileHide>
        <Filters
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </MobileHide>
      <PetList
        selectedGender={selectedGender}
        selectedBreed={selectedBreed}
        selectedColor={selectedColor}
           minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </Styles.PetsCategoryContainer>
  );
}